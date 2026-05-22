---
description: 'JavaScriptProcessor defines the lifecycle hooks available in a JavaScript Asset. These hooks are automatically invoked by layline.io at key moments — start...'
---

# JavaScriptProcessor

The `JavaScriptProcessor` defines the lifecycle hooks available in a JavaScript Asset. These hooks are automatically invoked by layline.io at key moments — startup, message arrival, stream boundaries, and shutdown.

Implement only the hooks you need. The most commonly used are [`onInit()`](#oninit) (one-time setup) and [`onMessage()`](#onmessage) (per-message processing).

---

## Lifecycle Overview

```
Project Startup
    └── onInit()           ← Once, when project starts

Stream Start
    └── onStreamStart()    ← Per stream

Message Arrives
    └── onMessage()        ← Per message (the heart of your logic)

Downstream Ready
    └── onPullMessage()    ← When downstream can receive more

Stream Ends
    └── onStreamEnd()      ← Per stream

Prepare Commit
    └── onPrepareCommit()  ← Before finalizing

Commit
    └── onCommit()         ← Finalize resources

Rollback
    └── onRollback()       ← On failure, undo changes

Prepare Retry
    └── onPrepareRetry()   ← Before retry attempt
```

---

## Hooks

### onInit()

Called once when the project starts. Use for one-time initialization: resolving output ports, opening connections, loading configuration.

```js
let OUTPUT_PORT;
let DB_CONNECTION;

export function onInit() {
    OUTPUT_PORT = processor.getOutputPort('Output');

    const dbUrl = processor.expandString('${lay:DB_URL}');
    DB_CONNECTION = openDatabaseConnection(dbUrl);
}
```

### onMessage()

Called for every message that arrives at this processor. This is where your main processing logic lives.

```js
export function onMessage() {
    // Branch by message type
    if (message.typeName === 'Header') {
        processHeader(message);
    } else if (message.typeName === 'Detail') {
        processDetail(message);
    } else if (message.typeName === 'Trailer') {
        processTrailer(message);
    }

    // Always emit to keep the flow moving
    stream.emit(message, OUTPUT_PORT);
}

function processDetail(msg) {
    const qty = msg.getInt(dataDictionary.type.Order.Detail.QUANTITY);
    if (qty <= 0) {
        msg.addStatus(Severity.ERROR, Status.create(VENDOR, 'INVALID_QTY', qty));
    }
}
```

### onStreamStart()

Called when a new stream begins. Use to reset per-stream counters or capture stream metadata.

```js
let streamId;
let fileName;
let recordCount = 0;

export function onStreamStart() {
    streamId   = stream.id;
    fileName   = stream.name;
    recordCount = 0;

    stream.logInfo(`Starting stream ${streamId}: ${fileName}`);
}
```

### onStreamEnd()

Called when the current stream ends. Use for cleanup, summary logging, or final batch operations.

```js
export function onStreamEnd() {
    stream.logInfo(`Stream complete. Processed ${recordCount} records.`);

    if (errorCount > 0) {
        stream.logWarning(`${errorCount} records had errors.`);
    }
}
```

### onPrepareCommit()

Called before the stream is committed. Use for any final preparatory work.

```js
export function onPrepareCommit() {
    // Flush any buffered writes
    flushPendingRecords();
}
```

### onCommit()

Called when the stream is successfully committed. Use to release resources.

```js
export function onCommit() {
    if (DB_CONNECTION) {
        DB_CONNECTION.commitTransaction();
        DB_CONNECTION.closeConnection();
        DB_CONNECTION = null;
    }
}
```

### onRollback()

Called when a rollback is requested. Use to undo changes and clean up.

```js
export function onRollback() {
    if (DB_CONNECTION) {
        try {
            DB_CONNECTION.rollbackTransaction();
            DB_CONNECTION.closeConnection();
        } catch (err) {
            stream.logError(`Rollback failed: ${err}`);
        } finally {
            DB_CONNECTION = null;
        }
    }
}
```

### onPrepareRetry()

Called before a retry attempt. Use to reset state for the next attempt.

```js
export function onPrepareRetry() {
    if (DB_CONNECTION) {
        try {
            DB_CONNECTION.rollbackTransaction();
            DB_CONNECTION.closeConnection();
        } catch (err) {
            // Ignore cleanup errors
        } finally {
            DB_CONNECTION = null;
        }
    }
}
```

### onPullMessage()

Called when a downstream processor signals readiness for more messages. Use this when your processor **produces** messages (e.g., from a queue or buffer) rather than just transforming incoming ones.

**When to use:** If your processor accumulates messages and emits them later (aggregation, correlation, queue reading), implement `onPullMessage` to emit one message at a time in response to downstream demand. This prevents memory spikes and backpressure issues.

```js
let messageQueue = [];

export function onMessage() {
    // Accumulate messages instead of emitting immediately
    messageQueue.push(message.clone());
}

export function onStreamEnd() {
    streamComplete = true;
}

export function onPullMessage() {
    // Emit one message when downstream is ready
    if (messageQueue.length > 0) {
        const next = messageQueue.shift();
        stream.emit(next, OUTPUT_PORT);
    } else if (streamComplete) {
        // Queue empty and stream done — clean up
        closeQueueConnection();
    }
}
```

:::info Push vs Pull
In most cases, layline.io handles flow control automatically. You only need `onPullMessage` when your processor acts as a **producer** that generates messages independently of direct input (e.g., reading from a queue, correlating batches).
:::

---

## Complete Example

A processor that validates orders, accumulates details, and writes a summary at stream end:

```js
let OUTPUT_PORT;
let ERROR_PORT;

let orderTotal = 0;
let itemCount  = 0;
let errorCount = 0;

export function onInit() {
    OUTPUT_PORT = processor.getOutputPort('Output');
    ERROR_PORT  = processor.getOutputPort('Error');
}

export function onStreamStart() {
    orderTotal = 0;
    itemCount  = 0;
    errorCount = 0;
}

export function onMessage() {
    if (message.typeName === 'Detail') {
        const qty   = message.getInt(dataDictionary.type.Order.Detail.QUANTITY);
        const price = message.getDecimal(dataDictionary.type.Order.Detail.PRICE);

        if (qty > 0 && price.compareTo(new BigDecimal("0")) > 0) {
            orderTotal += price.multiply(new BigDecimal(qty)).doubleValue();
            itemCount++;
            stream.emit(message, OUTPUT_PORT);
        } else {
            errorCount++;
            message.addStatus(Severity.ERROR, Status.create(VENDOR, 'INVALID_ITEM'));
            stream.emit(message, ERROR_PORT);
        }
    } else {
        // Header and Trailer pass through
        stream.emit(message, OUTPUT_PORT);
    }
}

export function onStreamEnd() {
    stream.logInfo(`Stream summary: ${itemCount} items, total ${orderTotal}, ${errorCount} errors`);
}

export function onRollback() {
    stream.logWarning('Stream rolled back — discarding accumulated state');
}
```

---

## See Also

- [JavaScript Introduction](../../javascript_introduction.md) — Full guide to JavaScript Assets
- [`Processor`](Processor.md) — Access arguments, output ports, and logging
- [`Stream`](Stream.md) — Emit messages and control stream flow
- [`Message`](Message.md) — The data you process in `onMessage()`
