---
description: Represents a fixed offset from UTC — hours and minutes, with no daylight saving time changes. Use `ZoneOffset` when you need a constant offset rather than a ...
---

---
id: py-ZoneOffset
---

# ZoneOffset

Represents a fixed offset from UTC — hours and minutes, with no daylight saving time changes. Use `ZoneOffset` when you need a constant offset rather than a named timezone.

---

## At a Glance

```python
# Common offsets
utc = ZoneOffset.of(0)           # UTC+00:00
india = ZoneOffset.of(5, 30)     # UTC+05:30
pacific = ZoneOffset.of(-8)      # UTC-08:00

# Use with DateTime
dt = DateTime.of(2024, 3, 15, 10, 30, 0, 0, india)
stream.log_info(dt.toString())  # "2024-03-15T10:30:00+05:30"
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | `str` | Offset string (e.g., `"+05:30"`, `"-08:00"`) |
| `totalSeconds` | `int` | Total offset in seconds from UTC |

```python
offset = ZoneOffset.of(5, 30)
print(offset.id)            # "+05:30"
print(offset.totalSeconds)  # 19800 (5 * 3600 + 30 * 60)
```

---

## Methods

### of(hour, minute=0)

Creates a `ZoneOffset` from hour and optional minute components.

| Parameter | Type | Description |
|-----------|------|-------------|
| `hour` | `int` | Hour offset (can be negative) |
| `minute` | `int` (optional) | Minute offset, defaults to 0 |

**Returns:** `ZoneOffset`

```python
utc = ZoneOffset.of(0)           # +00:00
india = ZoneOffset.of(5, 30)     # +05:30
japan = ZoneOffset.of(9)         # +09:00
pacific = ZoneOffset.of(-8)      # -08:00
newfoundland = ZoneOffset.of(-3, -30)  # -03:30
```

### toString()

Returns the string representation.

**Returns:** `str`

```python
offset = ZoneOffset.of(2, 0)
print(offset.toString())  # "+02:00"
```

---

## ZoneOffset vs TimeZone

| Use | Class |
|-----|-------|
| Fixed offset (no DST) | `ZoneOffset` |
| Named region with DST (e.g., Europe/Berlin) | [`TimeZone`](TimeZone.md) |

```python
# ZoneOffset: fixed, never changes
fixed = ZoneOffset.of(1)  # Always +01:00

# TimeZone: handles DST automatically
berlin = TimeZone.of('Europe/Berlin')  # +01:00 or +02:00 depending on season
```

---

## See Also

- [`TimeZone`](TimeZone.md) — Named timezones with daylight saving time
- [`DateTime`](DateTime.md) — Use ZoneOffset in DateTime.of()
