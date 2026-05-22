---
description: Represents a point in time with date, time, and timezone offset information. Use `DateTime` when you need to work with timestamps, compare moments, or format...
---

# DateTime

Represents a point in time with date, time, and timezone offset information. Use `DateTime` when you need to work with timestamps, compare moments, or format dates for output.

`DateTime` instances are immutable — all modification methods return new instances.

---

## At a Glance

```js
// Current time
const now = DateTime.now();

// Specific moment
const meeting = DateTime.of(2024, 12, 25, 14, 30);

// From a string
const parsed = DateTime.parse('2024-12-25 14:30:00', 'uuuu-MM-dd HH:mm:ss');

// Format for output
stream.logInfo(meeting.toString('EEEE, MMM dd uuuu')); // "Wednesday, Dec 25 2024"
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `year` | `number` | Year (e.g., 2024) |
| `month` | `number` | Month of year, 1–12 |
| `dayOfMonth` | `number` | Day of month, 1–31 |
| `dayOfWeek` | `number` | Day of week, 1 (Monday) – 7 (Sunday) |
| `dayOfYear` | `number` | Day of year, 1–366 |
| `hour` | `number` | Hour of day, 0–23 |
| `minute` | `number` | Minute of hour, 0–59 |
| `second` | `number` | Second of minute, 0–59 |
| `nano` | `number` | Nanosecond of second, 0–999,999,999 |
| `date` | [`LocalDate`](LocalDate.md) | Date component only |
| `time` | [`Time`](Time.md) | Time component only |

```js
const dt = DateTime.of(2024, 3, 15, 10, 30, 45);

stream.logInfo(`${dt.year}-${dt.month}-${dt.dayOfMonth}`);        // "2024-3-15"
stream.logInfo(`${dt.hour}:${dt.minute}:${dt.second}`);           // "10:30:45"
stream.logInfo(`Day ${dt.dayOfYear} of the year`);                // "Day 75 of the year"
stream.logInfo(`Day of week: ${dt.dayOfWeek}`);                   // 5 (Friday)
```

---

## Creating DateTime

### now(zone?)

Returns the current date and time.

| Parameter | Type | Description |
|-----------|------|-------------|
| `zone` (optional) | [`TimeZone`](TimeZone.md) | Timezone; defaults to system timezone |

```js
const now = DateTime.now();
const nyNow = DateTime.now(TimeZone.of('America/New_York'));
```

### of(year, month?, day?, hour?, minute?, second?, nano?, zone?)

Creates a DateTime from individual components.

```js
// Minimal: just year
const y2k = DateTime.of(2000);

// Date only
const birthday = DateTime.of(1990, 5, 15);

// Full datetime
const precise = DateTime.of(2024, 12, 25, 14, 30, 0, 0);

// With timezone offset
const indiaTime = DateTime.of(2024, 12, 25, 14, 30, 0, 0, ZoneOffset.of(5, 30));
```

### parse(value, format?)

Parses a string into a DateTime.

```js
// ISO format (default)
const dt1 = DateTime.parse('2024-12-25T14:30:00');

// Custom format
const dt2 = DateTime.parse('25/12/2024 14:30', 'dd/MM/uuuu HH:mm');
```

:::tip Format Patterns
See [Java DateTimeFormatter](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html) for full pattern syntax. Common patterns:
- `uuuu` — year (2024)
- `MM` — month (03)
- `dd` — day (15)
- `HH` — hour 24h (14)
- `mm` — minute (30)
- `ss` — second (45)
:::

---

## Comparing DateTimes

| Method | Returns | Description |
|--------|---------|-------------|
| `isAfter(other)` | `boolean` | This moment is later than `other` |
| `isBefore(other)` | `boolean` | This moment is earlier than `other` |
| `isEqual(other)` | `boolean` | Same moment in time |

```js
const start = DateTime.parse('2024-01-01T00:00:00');
const end   = DateTime.parse('2024-12-31T23:59:59');

if (end.isAfter(start)) {
    stream.logInfo('End is after start');
}

// Check if within business hours
const now = DateTime.now();
if (now.hour >= 9 && now.hour < 17) {
    stream.logInfo('Within business hours');
}
```

---

## Adding Time

All `plusX()` methods return a new DateTime. The original is unchanged.

| Method | Description |
|--------|-------------|
| `plusYears(years)` | Add years |
| `plusMonths(months)` | Add months |
| `plusDays(days)` | Add days |
| `plusHours(hours)` | Add hours |
| `plusMinutes(minutes)` | Add minutes |
| `plusSeconds(seconds)` | Add seconds |
| `plusNanos(nanos)` | Add nanoseconds |

```js
const now = DateTime.now();

const tomorrow = now.plusDays(1);
const nextWeek = now.plusWeeks(1);
const nextHour = now.plusHours(1);

// Calculate expiry (30 days from now)
const expiry = now.plusDays(30);
message.setDateTime(dataDictionary.type.Order.EXPIRY_DATE, expiry);
```

---

## Subtracting Time

| Method | Description |
|--------|-------------|
| `minusYears(years)` | Subtract years |
| `minusMonths(months)` | Subtract months |
| `minusDays(days)` | Subtract days |
| `minusHours(hours)` | Subtract hours |
| `minusMinutes(minutes)` | Subtract minutes |
| `minusSeconds(seconds)` | Subtract seconds |
| `minusNanos(nanos)` | Subtract nanoseconds |

```js
const now = DateTime.now();
const yesterday = now.minusDays(1);
const lastMonth = now.minusMonths(1);

// Check if record is older than 90 days
const created = message.getDateTime(dataDictionary.type.Record.CREATED_AT);
if (created.plusDays(90).isBefore(now)) {
    message.addStatus(Severity.WARNING, Status.create(VENDOR, 'STALE_RECORD'));
}
```

---

## Changing Components

Set individual components without affecting others.

| Method | Description |
|--------|-------------|
| `withYear(year)` | Set year |
| `withMonth(month)` | Set month (1–12) |
| `withDayOfMonth(day)` | Set day of month (1–31) |
| `withHour(hour)` | Set hour (0–23) |
| `withMinute(minute)` | Set minute (0–59) |
| `withSecond(second)` | Set second (0–59) |
| `withNano(nano)` | Set nanosecond |

```js
const dt = DateTime.of(2024, 3, 15, 10, 30);

// Same date, different time
const noon = dt.withHour(12).withMinute(0);

// Same time, first of month
const firstOfMonth = dt.withDayOfMonth(1);
```

---

## Timezone Conversion

### atZone(zone)

Returns the same moment in a different timezone.

```js
const utc = DateTime.now(TimeZone.UTC);
const berlin = utc.atZone(TimeZone.of('Europe/Berlin'));
const tokyo = utc.atZone(TimeZone.of('Asia/Tokyo'));

stream.logInfo(`UTC: ${utc.toString()}`);
stream.logInfo(`Berlin: ${berlin.toString()}`);
stream.logInfo(`Tokyo: ${tokyo.toString()}`);
```

---

## Converting to Numbers

| Method | Returns | Description |
|--------|---------|-------------|
| `toEpochSecond()` | `number` | Seconds since Unix epoch (1970-01-01T00:00:00Z) |
| `toEpochMilli()` | `number` | Milliseconds since Unix epoch |

```js
const now = DateTime.now();
const epochSeconds = now.toEpochSecond();   // 1700000000
const epochMillis = now.toEpochMilli();     // 1700000000000
```

---

## Formatting

### toString(format?)

Converts to a formatted string.

```js
const dt = DateTime.of(2024, 12, 25, 14, 30, 0);

// Default ISO format
dt.toString();                          // "2024-12-25T14:30:00"

// Custom formats
dt.toString('uuuu-MM-dd');              // "2024-12-25"
dt.toString('dd/MM/uuuu HH:mm');        // "25/12/2024 14:30"
dt.toString('EEEE, MMMM dd uuuu');      // "Wednesday, December 25 2024"
```

---

## Complete Example

```js
export function onMessage() {
    const orderDate = message.getDateTime(dataDictionary.type.Order.ORDER_DATE);
    const now = DateTime.now();

    // Check if order is recent (within 7 days)
    if (orderDate.plusDays(7).isAfter(now)) {
        stream.logInfo('Recent order');
    }

    // Set expected delivery (5 business days later — simplified)
    const deliveryDate = orderDate.plusDays(5);
    message.setDateTime(dataDictionary.type.Order.EXPECTED_DELIVERY, deliveryDate);

    // Format for customer notification
    const formatted = deliveryDate.toString('EEEE, MMMM dd uuuu');
    message.setString(dataDictionary.type.Order.DELIVERY_TEXT, formatted);

    stream.emit(message, OUTPUT_PORT);
}
```

---

## See Also

- [`LocalDate`](LocalDate.md) — Date without time
- [`Time`](Time.md) — Time without date
- [`TimeZone`](TimeZone.md) — Timezone definitions
- [`ZoneOffset`](ZoneOffset.md) — UTC offset
