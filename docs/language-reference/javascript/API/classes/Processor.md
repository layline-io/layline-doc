# Processor

The `Processor` class provides access to the current processor's configuration and runtime properties. It is available globally as `processor` in every JavaScript processor.

Use it to retrieve configured arguments, resolve output ports, expand environment macros, and log processor-specific messages.

---

## At a Glance

```js
// Get configured arguments from the UI
const args = processor.arguments;
const timeout = args.timeout || 5000;

// Resolve an output port for emitting messages
const OUTPUT_PORT = processor.getOutputPort('Output');

// Expand environment variables in strings
const dbHost = processor.expandString('${lay:DB_HOST}');
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`arguments`](#arguments) | `object` | JSON arguments configured in the JavaScript Asset editor |
| [`name`](#name) | `string` | The name of the current processor |

### arguments

Arguments entered via the JavaScript Asset editor in the UI. Returned as a plain JavaScript object.

```js
const args = processor.arguments;

// Access individual properties
const maxRetries = args.maxRetries || 3;
const apiEndpoint = args.apiEndpoint;

stream.logInfo(`Configured retries: ${maxRetries}`);
```

### name

The processor name as defined in the workflow diagram.

```js
const processorName = processor.name;  // e.g., "Validate-Order"
```

---

## Methods

### getArguments()

Returns the configured arguments. Same as [`arguments`](#arguments).

**Returns:** `object`

```js
const args = processor.getArguments();
```

### getName()

Returns the processor name. Same as [`name`](#name).

**Returns:** `string`

```js
const name = processor.getName();
```

### getOutputPort(portName)

Returns an [`OutputPort`](OutputPort.md) instance for the given port name. Use this to obtain the port reference needed by [`stream.emit()`](Stream.md).

| Parameter | Type | Description |
|-----------|------|-------------|
| `portName` | `string` | The name of the output port as defined in the workflow |

**Returns:** [`OutputPort`](OutputPort.md)

```js
// In onInit — resolve ports once
let OUTPUT_PORT;
let ERROR_PORT;

export function onInit() {
    OUTPUT_PORT = processor.getOutputPort('Output');
    ERROR_PORT  = processor.getOutputPort('Error');
}

export function onMessage() {
    if (isValid(message)) {
        stream.emit(message, OUTPUT_PORT);
    } else {
        stream.emit(message, ERROR_PORT);
    }
}
```

### expandString(toExpand)

Expands macros within a string using environment variables, secrets, and other configured values.

| Parameter | Type | Description |
|-----------|------|-------------|
| `toExpand` | `string` | String containing `${lay:VARNAME}` style macros |

**Returns:** `string` — The expanded string

```js
// Expand environment variables
const dbUrl = processor.expandString('jdbc:postgresql://${lay:DB_HOST}:${lay:DB_PORT}/mydb');
// Result: "jdbc:postgresql://db-server.internal:5432/mydb"

// Expand with defaults
const timeout = processor.expandString('${lay:TIMEOUT:-30000}');
```

:::tip Macro Documentation
See the [macro documentation](../../../macros.md) for all available macro types and syntax.
:::

---

## Logging

Log messages at different severity levels. These appear in the Audit Trail and processor terminal output.

| Method | Severity | Use For |
|--------|----------|---------|
| `logInfo(param)` | `INFO` | General information, progress updates |
| `logWarning(param)` | `WARNING` | Non-critical issues that need attention |
| `logError(param)` | `ERROR` | Errors that affect processing |
| `logFatal(param)` | `FATAL` | Critical failures requiring immediate action |

Each method accepts either a `string` or a [`Status`](Status.md) object.

```js
// Log a simple message
processor.logInfo(`Processing order ${orderId}`);

// Log a warning with context
processor.logWarning(`Unexpected value: ${value}`);

// Log an error as a Status object
const errStatus = Status.create(VENDOR, 'VALIDATION_FAILED', fieldName);
processor.logError(errStatus);
```

---

## See Also

- [`OutputPort`](OutputPort.md) — The ports you obtain and emit to
- [`JavaScriptProcessor`](JavaScriptProcessor.md) — Lifecycle hooks (onInit, onMessage, etc.)
- [Macro documentation](../../../macros.md) — Full macro syntax reference
