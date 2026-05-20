---
id: py-Duration
---

# Duration

Represents an amount of time — days, hours, minutes, seconds, milliseconds, or nanoseconds. Use `Duration` to measure elapsed time, set timeouts, or calculate differences between temporal objects.

`Duration` instances are immutable.

---

## At a Glance

```python
# Create durations
timeout = Duration.ofMinutes(30)
ttl = Duration.ofDays(7)

# Add to dates/times
expiry = LocalDate.now().plus(ttl)
deadline = Time.now().plus(timeout)

# Measure elapsed time
start = DateTime.now()
# ... processing ...
elapsed = Duration.between(start, DateTime.now())
stream.log_info(f"Took {elapsed.seconds} seconds")
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `days` | `int` | Number of days |
| `hours` | `int` | Number of hours |
| `minutes` | `int` | Number of minutes |
| `seconds` | `int` | Number of seconds |
| `nanos` | `int` | Number of nanoseconds (remainder) |

```python
d = Duration.ofDays(1).plusHours(12).plusMinutes(30)

stream.log_info(f"{d.days} days, {d.hours} hours, {d.minutes} minutes")
# "1 days, 12 hours, 30 minutes"
```

---

## Creating Duration

### ofDays(days) / ofHours(hours) / ofMinutes(minutes) / ofSeconds(seconds) / ofMillis(millis) / ofNanos(nanos)

```python
d1 = Duration.ofDays(7)
d2 = Duration.ofHours(24)
d3 = Duration.ofMinutes(90)
d4 = Duration.ofSeconds(30)
d5 = Duration.ofMillis(500)
d6 = Duration.ofNanos(1000000)
```

### between(start, end)

Calculates the duration between two temporal objects.

```python
start = DateTime.parse('2024-01-01T00:00:00')
end = DateTime.parse('2024-01-02T12:30:45')

duration = Duration.between(start, end)
stream.log_info(f"{duration.days}d {duration.hours}h {duration.minutes}m {duration.seconds}s")
# "1d 12h 30m 45s"
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

```python
base = Duration.ofHours(1)
extended = base.plusMinutes(30)  # 1h 30m
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

```python
total = Duration.ofHours(2)
used = Duration.ofMinutes(45)
remaining = total.minus(used)  # 1h 15m
```

### Other Operations

| Method | Returns | Description |
|--------|---------|-------------|
| `abs()` | `Duration` | Absolute value (removes negative sign) |
| `negated()` | `Duration` | Reverses the sign |
| `isNegative()` | `bool` | True if negative |
| `isZero()` | `bool` | True if zero |

```python
d = Duration.ofDays(-1)
stream.log_info(d.isNegative())     # True
stream.log_info(d.abs().days)       # 1
stream.log_info(d.negated().days)   # 1
```

---

## Adding to Temporal Objects

Use `addTo()` to add a Duration to a DateTime, LocalDate, or Time.

```python
duration = Duration.ofHours(2)
start = DateTime.now()
end = duration.addTo(start)
```

---

## Complete Example

```python
def on_message():
    order_time = message.getDateTime(dataDictionary.type.Order.ORDER_TIME)
    now = DateTime.now()

    # Calculate processing SLA
    sla = Duration.ofHours(24)
    elapsed = Duration.between(order_time, now)
    remaining = sla.minus(elapsed)

    if remaining.isNegative():
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'SLA_BREACHED'))
    else:
        stream.log_info(f"{remaining.hours}h {remaining.minutes}m remaining")

    # Set cache TTL
    cache_ttl = Duration.ofMinutes(30)
    message.setInt(dataDictionary.type.Order.CACHE_TTL_MINUTES, cache_ttl.minutes)

    stream.emit(message, OUTPUT_PORT)
```

---

## See Also

- [`DateTime`](DateTime.md) — Date and time with timezone
- [`LocalDate`](LocalDate.md) — Date without time
- [`Time`](Time.md) — Time without date
