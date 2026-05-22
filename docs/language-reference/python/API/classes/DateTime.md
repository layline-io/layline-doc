---
description: Represents a point in time with date, time, and timezone offset information. Use `DateTime` when you need to work with timestamps, compare moments, or format...
---

---
id: py-DateTime
---

# DateTime

Represents a point in time with date, time, and timezone offset information. Use `DateTime` when you need to work with timestamps, compare moments, or format dates for output.

`DateTime` instances are immutable — all modification methods return new instances.

---

## At a Glance

```python
# Current time
now = DateTime.now()

# Specific moment
meeting = DateTime.of(2024, 12, 25, 14, 30)

# From a string
parsed = DateTime.parse('2024-12-25 14:30:00', 'uuuu-MM-dd HH:mm:ss')

# Format for output
stream.log_info(meeting.toString('EEEE, MMM dd uuuu'))  # "Wednesday, Dec 25 2024"
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `year` | `int` | Year (e.g., 2024) |
| `month` | `int` | Month of year, 1–12 |
| `dayOfMonth` | `int` | Day of month, 1–31 |
| `dayOfWeek` | `int` | Day of week, 1 (Monday) – 7 (Sunday) |
| `dayOfYear` | `int` | Day of year, 1–366 |
| `hour` | `int` | Hour of day, 0–23 |
| `minute` | `int` | Minute of hour, 0–59 |
| `second` | `int` | Second of minute, 0–59 |
| `nano` | `int` | Nanosecond of second, 0–999,999,999 |
| `date` | [`LocalDate`](LocalDate.md) | Date component only |
| `time` | [`Time`](Time.md) | Time component only |

```python
dt = DateTime.of(2024, 3, 15, 10, 30, 45)

stream.log_info(f"{dt.year}-{dt.month}-{dt.dayOfMonth}")        # "2024-3-15"
stream.log_info(f"{dt.hour}:{dt.minute}:{dt.second}")           # "10:30:45"
stream.log_info(f"Day {dt.dayOfYear} of the year")              # "Day 75 of the year"
stream.log_info(f"Day of week: {dt.dayOfWeek}")                 # 5 (Friday)
```

---

## Creating DateTime

### now(zone?)

Returns the current date and time.

| Parameter | Type | Description |
|-----------|------|-------------|
| `zone` (optional) | [`TimeZone`](TimeZone.md) | Timezone; defaults to system timezone |

```python
now = DateTime.now()
ny_now = DateTime.now(TimeZone.of('America/New_York'))
```

### of(year, month?, day?, hour?, minute?, second?, nano?, zone?)

Creates a DateTime from individual components.

```python
# Minimal: just year
y2k = DateTime.of(2000)

# Date only
birthday = DateTime.of(1990, 5, 15)

# Full datetime
precise = DateTime.of(2024, 12, 25, 14, 30, 0, 0)

# With timezone offset
india_time = DateTime.of(2024, 12, 25, 14, 30, 0, 0, ZoneOffset.of(5, 30))
```

### parse(value, format?)

Parses a string into a DateTime.

```python
# ISO format (default)
dt1 = DateTime.parse('2024-12-25T14:30:00')

# Custom format
dt2 = DateTime.parse('25/12/2024 14:30', 'dd/MM/uuuu HH:mm')
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
| `isAfter(other)` | `bool` | This moment is later than `other` |
| `isBefore(other)` | `bool` | This moment is earlier than `other` |
| `isEqual(other)` | `bool` | Same moment in time |

```python
start = DateTime.parse('2024-01-01T00:00:00')
end = DateTime.parse('2024-12-31T23:59:59')

if end.isAfter(start):
    stream.log_info('End is after start')

# Check if within business hours
now = DateTime.now()
if now.hour >= 9 and now.hour < 17:
    stream.log_info('Within business hours')
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

```python
now = DateTime.now()

tomorrow = now.plusDays(1)
next_week = now.plusDays(7)
next_hour = now.plusHours(1)

# Calculate expiry (30 days from now)
expiry = now.plusDays(30)
message.setDateTime(dataDictionary.type.Order.EXPIRY_DATE, expiry)
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

```python
now = DateTime.now()
yesterday = now.minusDays(1)
last_month = now.minusMonths(1)

# Check if record is older than 90 days
created = message.getDateTime(dataDictionary.type.Record.CREATED_AT)
if created.plusDays(90).isBefore(now):
    message.addStatus(Severity.WARNING, Status.create(VENDOR, 'STALE_RECORD'))
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

```python
dt = DateTime.of(2024, 3, 15, 10, 30)

# Same date, different time
noon = dt.withHour(12).withMinute(0)

# Same time, first of month
first_of_month = dt.withDayOfMonth(1)
```

---

## Timezone Conversion

### atZone(zone)

Returns the same moment in a different timezone.

```python
utc = DateTime.now(TimeZone.UTC)
berlin = utc.atZone(TimeZone.of('Europe/Berlin'))
tokyo = utc.atZone(TimeZone.of('Asia/Tokyo'))

stream.log_info(f"UTC: {utc.toString()}")
stream.log_info(f"Berlin: {berlin.toString()}")
stream.log_info(f"Tokyo: {tokyo.toString()}")
```

---

## Converting to Numbers

| Method | Returns | Description |
|--------|---------|-------------|
| `toEpochSecond()` | `int` | Seconds since Unix epoch (1970-01-01T00:00:00Z) |
| `toEpochMilli()` | `int` | Milliseconds since Unix epoch |

```python
now = DateTime.now()
epoch_seconds = now.toEpochSecond()   # 1700000000
epoch_millis = now.toEpochMilli()     # 1700000000000
```

---

## Formatting

### toString(format?)

Converts to a formatted string.

```python
dt = DateTime.of(2024, 12, 25, 14, 30, 0)

# Default ISO format
dt.toString()                          # "2024-12-25T14:30:00"

# Custom formats
dt.toString('uuuu-MM-dd')              # "2024-12-25"
dt.toString('dd/MM/uuuu HH:mm')        # "25/12/2024 14:30"
dt.toString('EEEE, MMMM dd uuuu')      # "Wednesday, December 25 2024"
```

---

## Complete Example

```python
def on_message():
    order_date = message.getDateTime(dataDictionary.type.Order.ORDER_DATE)
    now = DateTime.now()

    # Check if order is recent (within 7 days)
    if order_date.plusDays(7).isAfter(now):
        stream.log_info('Recent order')

    # Set expected delivery (5 business days later — simplified)
    delivery_date = order_date.plusDays(5)
    message.setDateTime(dataDictionary.type.Order.EXPECTED_DELIVERY, delivery_date)

    # Format for customer notification
    formatted = delivery_date.toString('EEEE, MMMM dd uuuu')
    message.setString(dataDictionary.type.Order.DELIVERY_TEXT, formatted)

    stream.emit(message, OUTPUT_PORT)
```

---

## See Also

- [`LocalDate`](LocalDate.md) — Date without time
- [`Time`](Time.md) — Time without date
- [`TimeZone`](TimeZone.md) — Timezone definitions
- [`ZoneOffset`](ZoneOffset.md) — UTC offset
