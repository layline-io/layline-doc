---
description: Represents a fixed offset from UTC — hours and minutes, with no daylight saving time changes. Use `ZoneOffset` when you need a constant offset rather than a ...
---

# ZoneOffset

Represents a fixed offset from UTC — hours and minutes, with no daylight saving time changes. Use `ZoneOffset` when you need a constant offset rather than a named timezone.

---

## At a Glance

```js
// Common offsets
const utc = ZoneOffset.of(0);           // UTC+00:00
const india = ZoneOffset.of(5, 30);     // UTC+05:30
const pacific = ZoneOffset.of(-8);      // UTC-08:00

// Use with DateTime
const dt = DateTime.of(2024, 3, 15, 10, 30, 0, 0, india);
stream.logInfo(dt.toString());  // "2024-03-15T10:30:00+05:30"
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Offset string (e.g., `"+05:30"`, `"-08:00"`) |
| `totalSeconds` | `number` | Total offset in seconds from UTC |

```js
const offset = ZoneOffset.of(5, 30);
stream.logInfo(offset.id);            // "+05:30"
stream.logInfo(offset.totalSeconds);  // 19800 (5 * 3600 + 30 * 60)
```

---

## Methods

### of(hour, minute?)

Creates a ZoneOffset from hour and optional minute components.

| Parameter | Type | Description |
|-----------|------|-------------|
| `hour` | `number` | Hour offset (can be negative) |
| `minute` | `number` (optional) | Minute offset, defaults to 0 |

**Returns:** `ZoneOffset`

```js
const utc = ZoneOffset.of(0);           // +00:00
const india = ZoneOffset.of(5, 30);     // +05:30
const japan = ZoneOffset.of(9);         // +09:00
const pacific = ZoneOffset.of(-8);      // -08:00
const newfoundland = ZoneOffset.of(-3, -30);  // -03:30
```

### toString()

Returns the string representation.

**Returns:** `string`

```js
const offset = ZoneOffset.of(2, 0);
stream.logInfo(offset.toString());  // "+02:00"
```

---

## ZoneOffset vs TimeZone

| Use | Class |
|-----|-------|
| Fixed offset (no DST) | `ZoneOffset` |
| Named region with DST (e.g., Europe/Berlin) | [`TimeZone`](TimeZone.md) |

```js
// ZoneOffset: fixed, never changes
const fixed = ZoneOffset.of(1);  // Always +01:00

// TimeZone: handles DST automatically
const berlin = TimeZone.of('Europe/Berlin');  // +01:00 or +02:00 depending on season
```

---

## See Also

- [`TimeZone`](TimeZone.md) — Named timezones with daylight saving time
- [`DateTime`](DateTime.md) — Use ZoneOffset in DateTime.of()
