---
id: py-Counter
---

# Counter

A thread-safe counter for tracking numeric values — message counts, totals, or any incrementing/decrementing metric. Obtained through [`metrics.getCounter()`](Metrics.md).

Counters support method chaining for fluent updates.

---

## At a Glance

```python
# Get or create a counter
processed = metrics.getCounter('orders.processed')
failed = metrics.getCounter('orders.failed')

# Increment
processed.increment()
processed.increment(5)

# Decrement
failed.decrement()

# Read value
stream.logInfo(f"Processed: {processed.count}")
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `count` | `int` | Current counter value |

```python
counter = metrics.getCounter('my.counter')
stream.logInfo(counter.count)  # 0 (initially)
```

---

## Methods

### increment(value)

Increases the counter by 1 or the specified amount.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `int` (optional) | Amount to add — defaults to 1 |

**Returns:** `Counter` (supports chaining)

```python
c = metrics.getCounter('events')

c.increment()       # +1
c.increment(5)      # +5
c.increment(2).increment(3)  # chained: +5 total
```

### decrement(value)

Decreases the counter by 1 or the specified amount.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `int` (optional) | Amount to subtract — defaults to 1 |

**Returns:** `Counter` (supports chaining)

```python
c = metrics.getCounter('pending')

c.decrement()       # -1
c.decrement(3)      # -3
c.decrement(2).decrement(1)  # chained: -3 total
```

### getCount()

Returns the current count. Same as reading [`count`](#properties).

**Returns:** `int`

```python
total = counter.getCount()
```

---

## Complete Example

```python
OUTPUT_PORT = None
ERROR_PORT = None

def on_init():
    global OUTPUT_PORT, ERROR_PORT
    OUTPUT_PORT = processor.getOutputPort('Output')
    ERROR_PORT  = processor.getOutputPort('Error')

def on_message():
    processed = metrics.getCounter('stream.records.processed')
    errors    = metrics.getCounter('stream.records.errors')

    try:
        validate_record(message)
        processed.increment()
        stream.emit(message, OUTPUT_PORT)
    except Exception as err:
        errors.increment()
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'VALIDATION_FAILED'))
        stream.emit(message, ERROR_PORT)

def on_stream_end():
    processed = metrics.getCounter('stream.records.processed')
    errors    = metrics.getCounter('stream.records.errors')

    stream.logInfo(f"Stream complete: {processed.count} processed, {errors.count} errors")
```

---

## See Also

- [`Metrics`](Metrics.md) — Create and manage counters
