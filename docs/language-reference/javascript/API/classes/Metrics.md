---
description: 'Metrics class provides access to performance counters and operational metrics. It is available globally as `metrics` in every JavaScript processor.'
---

# Metrics

The `Metrics` class provides access to performance counters and operational metrics. It is available globally as `metrics` in every JavaScript processor.

Currently supports counters — more metric types may be added in future releases.

---

## At a Glance

```js
// Get or create a counter
const processed = metrics.getCounter('orders.processed');
const errors = metrics.getCounter('orders.errors');

// Update counters
processed.increment();
errors.increment(5);

// Read values
stream.logInfo(`Processed: ${processed.count}`);
```

---

## Methods

### getCounter(name)

Retrieves or creates a counter metric.

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | Counter identifier |

**Returns:** [`Counter`](Counter.md)

```js
const totalMessages = metrics.getCounter('stream.messages.total');
const failedMessages = metrics.getCounter('stream.messages.failed');

totalMessages.increment();
if (hasError) {
    failedMessages.increment();
}
```

---

## Complete Example

```js
let OUTPUT_PORT;
let ERROR_PORT;

export function onInit() {
    OUTPUT_PORT = processor.getOutputPort('Output');
    ERROR_PORT  = processor.getOutputPort('Error');
}

export function onMessage() {
    const processed = metrics.getCounter('workflow.records.processed');
    const errors    = metrics.getCounter('workflow.records.errors');

    try {
        validateAndTransform(message);
        processed.increment();
        stream.emit(message, OUTPUT_PORT);
    } catch (err) {
        errors.increment();
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'PROCESSING_FAILED'));
        stream.emit(message, ERROR_PORT);
    }
}

export function onStreamEnd() {
    const processed = metrics.getCounter('workflow.records.processed');
    const errors    = metrics.getCounter('workflow.records.errors');

    const total = processed.count + errors.count;
    const rate = total > 0 ? (processed.count / total * 100).toFixed(1) : 0;

    stream.logInfo(`Stream complete: ${processed.count} ok, ${errors.count} errors (${rate}% success)`);
}
```

---

## See Also

- [`Counter`](Counter.md) — Counter operations (increment, decrement, chaining)
