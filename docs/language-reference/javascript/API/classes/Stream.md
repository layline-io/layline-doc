# Stream

The `Stream` class represents the current data stream being processed. It is available globally as `stream` in every JavaScript processor.

Use it to emit messages to output ports, log stream events, access stream metadata, and control stream lifecycle (retries, rollbacks).

---

## At a Glance

```js
export function onMessage() {
    // Log stream context
    stream.logInfo(`Processing ${stream.name} (id: ${stream.id})`);

    // Emit message to an output port
    stream.emit(message, OUTPUT_PORT);
}
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`id`](#id) | `string` | Unique stream identifier (UUID v4) |
| [`name`](#name) | `string` | Stream name (filename for file sources, or configured name) |
| [`originalName`](#originalname) | `string` | Original name including prefix and suffix |
| [`path`](#path) | `string` | Path associated with the stream |
| [`prefix`](#prefix) | `string` | Detected filename prefix |
| [`suffix`](#suffix) | `string` | Detected filename suffix |

### id

A UUID v4 that uniquely identifies this stream across the system. Used in audit trails and logs.

```js
const streamId = stream.id;  // "550e8400-e29b-41d4-a716-446655440000"
```

### name

The stream name. For file-based sources, this is the filename **without** prefix and suffix. For other sources, it's the name configured in the Source Asset.

```js
// File source: "my_data.csv" (prefix/suffix stripped)
// Service source: "DeviceX-2022-10-10-21-45-33"
const name = stream.name;
```

### originalName

The full original name including any configured prefix and suffix.

```js
// If prefix="IN_" and suffix=".csv", originalName is "IN_my_data.csv"
const original = stream.originalName;
```

### path

The path associated with the stream (directory for file sources, URL path for HTTP, etc.).

```js
const path = stream.path;  // e.g., "/incoming/orders"
```

### prefix

The detected prefix from the original filename.

```js
const prefix = stream.prefix;  // e.g., "IN_"
```

### suffix

The detected suffix (extension) from the original filename.

```js
const suffix = stream.suffix;  // e.g., ".csv"
```

---

## Message Flow

### emit(message, outputPort)

Sends a message to the specified output port. Once emitted, the message context is lost — if you need to send the same message to multiple ports, [clone it](Message.md#clone) first.

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | [`Message`](Message.md) | The message to emit |
| `outputPort` | [`OutputPort`](OutputPort.md) | The target output port |

```js
export function onInit() {
    OUTPUT_PORT = processor.getOutputPort('Output');
}

export function onMessage() {
    stream.emit(message, OUTPUT_PORT);
}
```

---

## Logging

Log messages at different severity levels. These appear in the Audit Trail and processor terminal output.

| Method | Severity | Use For |
|--------|----------|---------|
| `logInfo(msg)` | `INFO` | General information, progress |
| `logWarning(msg)` | `WARNING` | Non-critical issues |
| `logError(msg)` | `ERROR` | Processing errors |
| `logFatal(msg)` | `FATAL` | Critical failures |

```js
stream.logInfo(`Processing record ${message.id}`);
stream.logWarning(`Unexpected format: ${message.typeName}`);
stream.logError(`Failed to parse: ${error}`);
```

---

## Stream Metadata

### getMetadata()

Returns stream-type-specific metadata as a [`Message`](Message.md). The structure varies by source type.

**Returns:** [`Message`](Message.md)

```js
const meta = stream.getMetadata();

// File source
stream.logInfo(`File size: ${meta.data.Size} bytes`);
stream.logInfo(`Last modified: ${meta.data.LastModified}`);

// Kafka source
stream.logInfo(`Topic: ${meta.data.Topic}, Partition: ${meta.data.Partition}`);
```

### Metadata by Source Type

| Source Type | Properties | Description |
|-------------|-----------|-------------|
| **File / FTP / S3 / OneDrive / SharePoint** | `Path`, `Size`, `LastModified`, `FolderSetup` | File path, size in bytes, modification timestamp, folder config name |
| **HTTP** | `BindAddress`, `BindPort` | Server IP and port |
| **Kafka (Exclusive Partition)** | `GroupId`, `Topics` | Consumer group and topic array |
| **Kafka (Standard)** | `GroupId`, `Topic`, `Partition` | Consumer group, single topic, partition number |
| **SQS** | `QueueUrl` | Queue URL |
| **Serial** | `Port`, `BaudRate`, `DataBits`, `StopBits`, `Parity`, `FlowControl` | Serial port configuration |
| **Secondary Stream** | `ParentStreamName`, `ParentStreamId` | Originating stream reference |
| **Service Source** | `Service` | Service name |
| **TCP / WebSocket** | `LocalAddress`, `LocalPort`, `RemoteAddress`, `RemotePort` | Connection endpoints |

---

## Stream Lifecycle Control

### requestRetry(reason, ms?)

Requests that the stream be retried after a delay. Use when encountering transient errors (e.g., database unavailable).

| Parameter | Type | Description |
|-----------|------|-------------|
| `reason` | [`Status`](Status.md) | Status describing why the retry is needed |
| `ms` | `number` (optional) | Delay in milliseconds (default: 60000) |

```js
if (!databaseAvailable) {
    stream.requestRetry(
        Status.create(VENDOR, 'DB_UNAVAILABLE'),
        30000  // Retry after 30 seconds
    );
}
```

### requestRollback(status)

Requests that the current stream be rolled back. Use for unrecoverable errors where reprocessing from the start is needed.

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | [`Status`](Status.md) | Status describing the rollback reason |

```js
if (sequenceGapDetected) {
    stream.requestRollback(
        Status.create(VENDOR, 'SEQ_NUMBER_UNKNOWN', expectedSeq)
    );
}
```

---

## Output Naming

Control the name and path of output streams. These are particularly useful for file-based sinks where you want to dynamically set filenames and directories.

All setter methods return `Stream` for chaining.

| Method | Description | Example |
|--------|-------------|---------|
| `setOutputName(name)` | Name for normal output | `stream.setOutputName('orders.csv')` |
| `setOutputPath(path)` | Path for normal output | `stream.setOutputPath('/processed')` |
| `setDoneName(name)` | Name for done path | `stream.setDoneName('orders.done')` |
| `setDonePath(path)` | Path for done path | `stream.setDonePath('/archive')` |
| `setErrorName(name)` | Name for error path | `stream.setErrorName('orders.err')` |
| `setErrorPath(path)` | Path for error path | `stream.setErrorPath('/failed')` |

```js
// Chain multiple setters
stream
    .setOutputName(`processed-${stream.name}`)
    .setOutputPath('/outgoing/success')
    .setErrorName(`failed-${stream.name}`)
    .setErrorPath('/outgoing/errors');
```

### setProcessorOutputName(processorName, streamName)

Sets the output stream name for a specific downstream processor. Use when a processor has multiple output ports and you need different names per port.

| Parameter | Type | Description |
|-----------|------|-------------|
| `processorName` | `string` | Name of the target output processor |
| `streamName` | `string` | Name to assign to the stream |

```js
// Option 1: By processor name
stream.setProcessorOutputName('File-Writer-A', 'valid-orders.csv');
stream.setProcessorOutputName('File-Writer-B', 'invalid-orders.csv');

// Option 2: Via output port (must connect to actual output processor)
const portA = processor.getOutputPort('Valid');
stream.setProcessorOutputName(portA.getPeerProcessorName(), 'valid.csv');
```

### setProcessorOutputPath(processorName, path)

Sets the output path for a specific downstream processor.

| Parameter | Type | Description |
|-----------|------|-------------|
| `processorName` | `string` | Name of the target output processor |
| `path` | `string` | Directory path |

```js
stream.setProcessorOutputPath('File-Writer', '/data/processed');
```

---

## Complete Example

A file-processing stream that routes valid records to one output and errors to another, with dynamic naming:

```js
let OUTPUT_PORT;
let ERROR_PORT;
let VALID_COUNT = 0;
let ERROR_COUNT = 0;

export function onInit() {
    OUTPUT_PORT = processor.getOutputPort('Output');
    ERROR_PORT  = processor.getOutputPort('Error');
}

export function onStreamStart() {
    VALID_COUNT = 0;
    ERROR_COUNT = 0;

    // Set dynamic output filenames based on input
    const baseName = stream.name.replace(/\.csv$/i, '');
    stream
        .setOutputName(`${baseName}-processed.csv`)
        .setErrorName(`${baseName}-errors.csv`);

    // Log stream metadata
    const meta = stream.getMetadata();
    stream.logInfo(`Processing ${stream.originalName} (${meta.data.Size} bytes)`);
}

export function onMessage() {
    if (isValid(message)) {
        VALID_COUNT++;
        stream.emit(message, OUTPUT_PORT);
    } else {
        ERROR_COUNT++;
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'VALIDATION_FAILED'));
        stream.emit(message, ERROR_PORT);
    }
}

export function onStreamEnd() {
    stream.logInfo(`Complete: ${VALID_COUNT} valid, ${ERROR_COUNT} errors`);
}

function isValid(msg) {
    return msg.exists(dataDictionary.type.Record.ID) &&
           msg.getString(dataDictionary.type.Record.ID).length > 0;
}
```

---

## See Also

- [`Message`](Message.md) — The messages you emit through the stream
- [`OutputPort`](OutputPort.md) — The ports you emit to
- [`Processor`](Processor.md) — Get output ports and access configuration
- [`Status`](Status.md) — Create status objects for retries and rollbacks
