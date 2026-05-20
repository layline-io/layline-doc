---
id: py-Processor
---

# Processor

The `Processor` class provides access to the current processor's configuration and runtime properties. It is available globally as `processor` in every Python processor.

Use it to retrieve configured arguments, resolve output ports, expand environment macros, and log processor-specific messages.

---

## At a Glance

```python
# Get configured arguments from the UI
args = processor.arguments
timeout = args.get('timeout', 5000)

# Resolve an output port for emitting messages
OUTPUT_PORT = processor.getOutputPort('Output')

# Expand environment variables in strings
db_host = processor.expandString('${lay:DB_HOST}')
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`arguments`](#arguments) | `dict` | JSON arguments configured in the Python Asset editor |
| [`name`](#name) | `str` | The name of the current processor |

### arguments

Arguments entered via the Python Asset editor in the UI. Returned as a Python dictionary.

```python
args = processor.arguments

# Access individual properties
max_retries = args.get('maxRetries', 3)
api_endpoint = args.get('apiEndpoint')

stream.logInfo(f'Configured retries: {max_retries}')
```

### name

The processor name as defined in the workflow diagram.

```python
processor_name = processor.name  # e.g., "Validate-Order"
```

---

## Methods

### getArguments()

Returns the configured arguments. Same as [`arguments`](#arguments).

**Returns:** `dict`

```python
args = processor.getArguments()
```

### getName()

Returns the processor name. Same as [`name`](#name).

**Returns:** `str`

```python
name = processor.getName()
```

### getOutputPort(portName)

Returns an [`OutputPort`](OutputPort.md) instance for the given port name. Use this to obtain the port reference needed by [`stream.emit()`](Stream.md).

| Parameter | Type | Description |
|-----------|------|-------------|
| `portName` | `str` | The name of the output port as defined in the workflow |

**Returns:** [`OutputPort`](OutputPort.md)

```python
# In on_init — resolve ports once
OUTPUT_PORT = None
ERROR_PORT = None

def on_init():
    global OUTPUT_PORT, ERROR_PORT
    OUTPUT_PORT = processor.getOutputPort('Output')
    ERROR_PORT = processor.getOutputPort('Error')

def on_message():
    if is_valid(message):
        stream.emit(message, OUTPUT_PORT)
    else:
        stream.emit(message, ERROR_PORT)
```

### expandString(toExpand)

Expands macros within a string using environment variables, secrets, and other configured values.

| Parameter | Type | Description |
|-----------|------|-------------|
| `toExpand` | `str` | String containing `${lay:VARNAME}` style macros |

**Returns:** `str` — The expanded string

```python
# Expand environment variables
db_url = processor.expandString('jdbc:postgresql://${lay:DB_HOST}:${lay:DB_PORT}/mydb')
# Result: "jdbc:postgresql://db-server.internal:5432/mydb"

# Expand with defaults
timeout = processor.expandString('${lay:TIMEOUT:-30000}')
```

:::tip Macro Documentation
See the [macro documentation](../../../macros) for all available macro types and syntax.
:::

---

## Logging

Log messages at different severity levels. These appear in the Audit Trail and processor terminal output.

| Method | Severity | Use For |
|--------|----------|---------|
| `logInfo(param)` | [`INFO`](../enumerations/Severity.md) | General information, progress updates |
| `logWarning(param)` | [`WARNING`](../enumerations/Severity.md) | Non-critical issues that need attention |
| `logError(param)` | [`ERROR`](../enumerations/Severity.md) | Errors that affect processing |
| `logFatal(param)` | [`FATAL`](../enumerations/Severity.md) | Critical failures requiring immediate action |

Each method accepts either a `str` or a [`Status`](Status.md) object.

```python
# Log a simple message
processor.logInfo(f'Processing order {order_id}')

# Log a warning with context
processor.logWarning(f'Unexpected value: {value}')

# Log an error as a Status object
err_status = Status.create(VENDOR, 'VALIDATION_FAILED', field_name)
processor.logError(err_status)
```

---

## See Also

- [`OutputPort`](OutputPort.md) — The ports you obtain and emit to
- [`PythonProcessor`](PythonProcessor.md) — Lifecycle hooks (on_init, on_message, etc.)
- [Macro documentation](../../../macros) — Full macro syntax reference
