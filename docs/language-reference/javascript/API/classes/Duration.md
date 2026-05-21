---
description: Represents an amount of time — days, hours, minutes, seconds, milliseconds, or nanoseconds. Use `Duration` to measure elapsed time, set timeouts, or calculat...
---

# Duration

Represents an amount of time — days, hours, minutes, seconds, milliseconds, or nanoseconds. Use `Duration` to measure elapsed time, set timeouts, or calculate differences between temporal objects.

`Duration` instances are immutable.

---

## At a Glance

```js
// Create durations
const timeout = Duration.ofMinutes(30);
const ttl = Duration.ofDays(7);

// Add to dates/times
const expiry = LocalDate.now().plus(ttl);
const deadline = Time.now().plus(timeout);

// Measure elapsed time
const start = DateTime.now();
// ... processing ...
const elapsed = Duration.between(start, DateTime.now());
stream.logInfo(`Took ${elapsed.seconds} seconds`);
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `days` | `number` | Number of days |
| `hours` | `number` | Number of hours |
| `minutes` | `number` | Number of minutes |
| `seconds` | `number` | Number of seconds |
| `nanos` | `number` | Number of nanoseconds (remainder) |

```js
const d = Duration.ofDays(1).plusHours(12).plusMinutes(30);

stream.logInfo(`${d.days} days, ${d.hours} hours, ${d.minutes} minutes`);
// "1 days, 12 hours, 30 minutes"
```

---

## Creating Duration

### ofDays(days) / ofHours(hours) / ofMinutes(minutes) / ofSeconds(seconds) / ofMillis(millis) / ofNanos(nanos)

```js
const d1 = Duration.ofDays(7);
const d2 = Duration.ofHours(24);
const d3 = Duration.ofMinutes(90);
const d4 = Duration.ofSeconds(30);
const d5 = Duration.ofMillis(500);
const d6 = Duration.ofNanos(1000000);
```

### between(start, end)

Calculates the duration between two temporal objects.

```js
const start = DateTime.parse('2024-01-01T00:00:00');
const end = DateTime.parse('2024-01-02T12:30:45');

const duration = Duration.between(start, end);
stream.logInfo(`${duration.days}d ${duration.hours}h ${duration.minutes}m ${duration.seconds}s`);
// "1d 12h 30m 45s"
```

---

## Arithmetic

### Adding Durations

| Method | Description |
|--------|-------------|
| `plusDays(days)` | Add days |
| `plusHours(hours)` | Add hours |
| `plusMinutes(minutes)` | Add minutes |
| `plusSeconds(seconds)` | Add seconds |
| `plusMillis(millis)` | Add milliseconds |
| `plusNanos(nanos)` | Add nanoseconds |
| `plus(other)` | Add another Duration |

```js
const base = Duration.ofHours(1);
const extended = base.plusMinutes(30);  // 1h 30m
```

### Subtracting Durations

| Method | Description |
|--------|-------------|
| `minusDays(days)` | Subtract days |
| `minusHours(hours)` | Subtract hours |
| `minusMinutes(minutes)` | Subtract minutes |
| `minusSeconds(seconds)` | Subtract seconds |
| `minusMillis(millis)` | Subtract milliseconds |
| `minusNanos(nanos)` | Subtract nanoseconds |
| `minus(other)` | Subtract another Duration |

```js
const total = Duration.ofHours(2);
const used = Duration.ofMinutes(45);
const remaining = total.minus(used);  // 1h 15m
```

### Other Operations

| Method | Returns | Description |
|--------|---------|-------------|
| `abs()` | `Duration` | Absolute value (removes negative sign) |
| `negated()` | `Duration` | Reverses the sign |
| `isNegative()` | `boolean` | True if negative |
| `isZero()` | `boolean` | True if zero |

```js
const d = Duration.ofDays(-1);
stream.logInfo(d.isNegative());     // true
stream.logInfo(d.abs().days);       // 1
stream.logInfo(d.negated().days);   // 1
```

---

## Adding to Temporal Objects

Use `addTo()` to add a Duration to a DateTime, LocalDate, or Time.

```js
const duration = Duration.ofHours(2);
const start = DateTime.now();
const end = duration.addTo(start);
```

---

## Complete Example

```js
export function onMessage() {
    const orderTime = message.getDateTime(dataDictionary.type.Order.ORDER_TIME);
    const now = DateTime.now();

    // Calculate processing SLA
    const sla = Duration.ofHours(24);
    const elapsed = Duration.between(orderTime, now);
    const remaining = sla.minus(elapsed);

    if (remaining.isNegative()) {
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'SLA_BREACHED'));
    } else {
        stream.logInfo(`${remaining.hours}h ${remaining.minutes}m remaining`);
    }

    // Set cache TTL
    const cacheTtl = Duration.ofMinutes(30);
    message.setInt(dataDictionary.type.Order.CACHE_TTL_MINUTES, cacheTtl.minutes);

    stream.emit(message, OUTPUT_PORT);
}
```

---

## See Also

- [`DateTime`](DateTime.md) — Date and time with timezone
- [`LocalDate`](LocalDate.md) — Date without time
- [`Time`](Time.md) — Time without date
