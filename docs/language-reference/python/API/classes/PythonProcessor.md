---
description: 'PythonProcessor defines the lifecycle hooks available in a Python Asset. These hooks are automatically invoked by layline.io at key moments — startup, mess...'
---

---
id: py-PythonProcessor
---

# PythonProcessor

The `PythonProcessor` defines the lifecycle hooks available in a Python Asset. These hooks are automatically invoked by layline.io at key moments — startup, message arrival, stream boundaries, and shutdown.

Implement only the hooks you need. The most commonly used are [`on_init()`](#on_init) (one-time setup) and [`on_message()`](#on_message) (per-message processing).

---

## Lifecycle Overview

```
Project Startup
    └── on_init()           ← Once, when project starts

Stream Start
    └── on_stream_start()   ← Per stream

Message Arrives
    └── on_message()        ← Per message (the heart of your logic)

Downstream Ready
    └── on_pull_message()   ← When downstream can receive more

Stream Ends
    └── on_stream_end()     ← Per stream

Prepare Commit
    └── on_prepare_commit() ← Before finalizing

Commit
    └── on_commit()         ← Finalize resources

Rollback
    └── on_rollback()       ← On failure, undo changes

Prepare Retry
    └── on_prepare_retry()  ← Before retry attempt
```

---

## Hooks

### on_init()

Called once when the project starts. Use for one-time initialization: resolving output ports, opening connections, loading configuration.

```python
OUTPUT_PORT = None
DB_CONNECTION = None

def on_init():
    global OUTPUT_PORT, DB_CONNECTION
    OUTPUT_PORT = processor.getOutputPort('Output')

    db_url = processor.expandString('${lay:DB_URL}')
    DB_CONNECTION = open_database_connection(db_url)
```

### on_message()

Called for every message that arrives at this processor. This is where your main processing logic lives.

```python
def on_message():
    # Branch by message type
    if message.typeName == 'Header':
        process_header(message)
    elif message.typeName == 'Detail':
        process_detail(message)
    elif message.typeName == 'Trailer':
        process_trailer(message)

    # Always emit to keep the flow moving
    stream.emit(message, OUTPUT_PORT)

def process_detail(msg):
    qty = msg.getInt(dataDictionary.type.Order.Detail.QUANTITY)
    if qty <= 0:
        msg.addStatus(Severity.ERROR, Status.create(VENDOR, 'INVALID_QTY', qty))
```

### on_stream_start()

Called when a new stream begins. Use to reset per-stream counters or capture stream metadata.

```python
stream_id = None
file_name = None
record_count = 0

def on_stream_start():
    global stream_id, file_name, record_count
    stream_id = stream.id
    file_name = stream.name
    record_count = 0

    stream.logInfo(f'Starting stream {stream_id}: {file_name}')
```

### on_stream_end()

Called when the current stream ends. Use for cleanup, summary logging, or final batch operations.

```python
def on_stream_end():
    stream.logInfo(f'Stream complete. Processed {record_count} records.')

    if error_count > 0:
        stream.logWarning(f'{error_count} records had errors.')
```

### on_prepare_commit()

Called before the stream is committed. Use for any final preparatory work.

```python
def on_prepare_commit():
    # Flush any buffered writes
    flush_pending_records()
```

### on_commit()

Called when the stream is successfully committed. Use to release resources.

```python
def on_commit():
    global DB_CONNECTION
    if DB_CONNECTION:
        DB_CONNECTION.commitTransaction()
        DB_CONNECTION.closeConnection()
        DB_CONNECTION = None
```

### on_rollback()

Called when a rollback is requested. Use to undo changes and clean up.

```python
def on_rollback():
    global DB_CONNECTION
    if DB_CONNECTION:
        try:
            DB_CONNECTION.rollbackTransaction()
            DB_CONNECTION.closeConnection()
        except Exception as e:
            stream.logError(f'Rollback failed: {e}')
        finally:
            DB_CONNECTION = None
```

### on_prepare_retry()

Called before a retry attempt. Use to reset state for the next attempt.

```python
def on_prepare_retry():
    global DB_CONNECTION
    if DB_CONNECTION:
        try:
            DB_CONNECTION.rollbackTransaction()
            DB_CONNECTION.closeConnection()
        except Exception:
            # Ignore cleanup errors
            pass
        finally:
            DB_CONNECTION = None
```

### on_pull_message()

Called when a downstream processor signals readiness for more messages. Use this when your processor **produces** messages (e.g., from a queue or buffer) rather than just transforming incoming ones.

**When to use:** If your processor accumulates messages and emits them later (aggregation, correlation, queue reading), implement `on_pull_message` to emit one message at a time in response to downstream demand. This prevents memory spikes and backpressure issues.

```python
message_queue = []

def on_message():
    # Accumulate messages instead of emitting immediately
    message_queue.append(message.clone())

def on_stream_end():
    global stream_complete
    stream_complete = True

def on_pull_message():
    # Emit one message when downstream is ready
    if len(message_queue) > 0:
        next_msg = message_queue.pop(0)
        stream.emit(next_msg, OUTPUT_PORT)
    elif stream_complete:
        # Queue empty and stream done — clean up
        close_queue_connection()
```

:::info Push vs Pull
In most cases, layline.io handles flow control automatically. You only need `on_pull_message` when your processor acts as a **producer** that generates messages independently of direct input (e.g., reading from a queue, correlating batches).
:::

---

## Complete Example

A processor that validates orders, accumulates details, and writes a summary at stream end:

```python
OUTPUT_PORT = None
ERROR_PORT = None

order_total = 0
item_count = 0
error_count = 0

def on_init():
    global OUTPUT_PORT, ERROR_PORT
    OUTPUT_PORT = processor.getOutputPort('Output')
    ERROR_PORT = processor.getOutputPort('Error')

def on_stream_start():
    global order_total, item_count, error_count
    order_total = 0
    item_count = 0
    error_count = 0

def on_message():
    if message.typeName == 'Detail':
        qty = message.getInt(dataDictionary.type.Order.Detail.QUANTITY)
        price = message.getDecimal(dataDictionary.type.Order.Detail.PRICE)

        if qty > 0 and price > 0:
            order_total += price * qty
            item_count += 1
            stream.emit(message, OUTPUT_PORT)
        else:
            error_count += 1
            message.addStatus(Severity.ERROR, Status.create(VENDOR, 'INVALID_ITEM'))
            stream.emit(message, ERROR_PORT)
    else:
        # Header and Trailer pass through
        stream.emit(message, OUTPUT_PORT)

def on_stream_end():
    stream.logInfo(f'Stream summary: {item_count} items, total {order_total}, {error_count} errors')

def on_rollback():
    stream.logWarning('Stream rolled back — discarding accumulated state')
```

---

## See Also

- [Python Introduction](../../python_introduction.md) — Full guide to Python Assets
- [`Processor`](Processor.md) — Access arguments, output ports, and logging
- [`Stream`](Stream.md) — Emit messages and control stream flow
- [`Message`](Message.md) — The data you process in `on_message()`
