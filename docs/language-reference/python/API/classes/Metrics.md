---
description: 'Metrics class provides access to performance counters and operational metrics. It is available globally as `metrics` in every Python processor.'
---

---
id: py-Metrics
---

# Metrics

The `Metrics` class provides access to performance counters and operational metrics. It is available globally as `metrics` in every Python processor.

Currently supports counters — more metric types may be added in future releases.

---

## At a Glance

```python
# Get or create a counter
processed = metrics.getCounter('orders.processed')
errors = metrics.getCounter('orders.errors')

# Update counters
processed.increment()
errors.increment(5)

# Read values
stream.logInfo(f'Processed: {processed.count}')
```

---

## Methods

### getCounter(name)

Retrieves or creates a counter metric.

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `str` | Counter identifier |

**Returns:** [`Counter`](Counter.md)

```python
total_messages = metrics.getCounter('stream.messages.total')
failed_messages = metrics.getCounter('stream.messages.failed')

total_messages.increment()
if has_error:
    failed_messages.increment()
```

---

## Complete Example

```python
OUTPUT_PORT = None
ERROR_PORT = None

def on_init():
    global OUTPUT_PORT, ERROR_PORT
    OUTPUT_PORT = processor.getOutputPort('Output')
    ERROR_PORT = processor.getOutputPort('Error')

def on_message():
    processed = metrics.getCounter('workflow.records.processed')
    errors = metrics.getCounter('workflow.records.errors')

    try:
        validate_and_transform(message)
        processed.increment()
        stream.emit(message, OUTPUT_PORT)
    except Exception:
        errors.increment()
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'PROCESSING_FAILED'))
        stream.emit(message, ERROR_PORT)

def on_stream_end():
    processed = metrics.getCounter('workflow.records.processed')
    errors = metrics.getCounter('workflow.records.errors')

    total = processed.count + errors.count
    rate = (processed.count / total * 100) if total > 0 else 0

    stream.logInfo(f'Stream complete: {processed.count} ok, {errors.count} errors ({rate:.1f}% success)')
```

---

## See Also

- [`Counter`](Counter.md) — Counter operations (increment, decrement, chaining)
