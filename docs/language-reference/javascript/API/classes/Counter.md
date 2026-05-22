---
description: A thread-safe counter for tracking numeric values — message counts, totals, or any incrementing/decrementing metric. Obtained through [`metrics.getCounter().
---

# Counter

A thread-safe counter for tracking numeric values — message counts, totals, or any incrementing/decrementing metric. Obtained through [`metrics.getCounter()`](Metrics.md).

Counters support method chaining for fluent updates.

---

## At a Glance

```js
// Get or create a counter
const processed = metrics.getCounter('orders.processed');
const failed = metrics.getCounter('orders.failed');

// Increment
processed.increment();
processed.increment(5);

// Decrement
failed.decrement();

// Read value
stream.logInfo(`Processed: ${processed.count}`);
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `count` | `number` | Current counter value |

```js
const counter = metrics.getCounter('my.counter');
stream.logInfo(counter.count);  // 0 (initially)
```

---

## Methods

### increment(value?)

Increases the counter by 1 or the specified amount.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` (optional) | Amount to add — defaults to 1 |

**Returns:** `Counter` (supports chaining)

```js
const c = metrics.getCounter('events');

c.increment();       // +1
c.increment(5);      // +5
c.increment(2).increment(3);  // chained: +5 total
```

### decrement(value?)

Decreases the counter by 1 or the specified amount.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` (optional) | Amount to subtract — defaults to 1 |

**Returns:** `Counter` (supports chaining)

```js
const c = metrics.getCounter('pending');

c.decrement();       // -1
c.decrement(3);      // -3
c.decrement(2).decrement(1);  // chained: -3 total
```

### getCount()

Returns the current count. Same as reading [`count`](#properties).

**Returns:** `number`

```js
const total = counter.getCount();
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
    const processed = metrics.getCounter('stream.records.processed');
    const errors    = metrics.getCounter('stream.records.errors');

    try {
        validateRecord(message);
        processed.increment();
        stream.emit(message, OUTPUT_PORT);
    } catch (err) {
        errors.increment();
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'VALIDATION_FAILED'));
        stream.emit(message, ERROR_PORT);
    }
}

export function onStreamEnd() {
    const processed = metrics.getCounter('stream.records.processed');
    const errors    = metrics.getCounter('stream.records.errors');

    stream.logInfo(`Stream complete: ${processed.count} processed, ${errors.count} errors`);
}
```

---

## See Also

- [`Metrics`](Metrics.md) — Create and manage counters
