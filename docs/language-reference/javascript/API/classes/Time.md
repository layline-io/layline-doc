# Time

Represents a time of day without date or timezone — just hour, minute, second, and nanosecond. Use `Time` for daily schedules, business hours, or time-of-day comparisons.

`Time` instances are immutable — all modification methods return new instances.

---

## At a Glance

```js
// Current time
const now = Time.now();

// Specific time
const opening = Time.of(9, 0);
const closing = Time.of(17, 30);

// From a string
const parsed = Time.parse('14:30:00');

// Read from a message
const startTime = message.getTime(dataDictionary.type.Schedule.START_TIME);
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `hour` | `number` | Hour of day, 0–23 |
| `minute` | `number` | Minute of hour, 0–59 |
| `second` | `number` | Second of minute, 0–59 |
| `nano` | `number` | Nanosecond of second, 0–999,999,999 |

```js
const t = Time.of(14, 30, 45, 500000000);

stream.logInfo(`${t.hour}:${t.minute}:${t.second}`);     // "14:30:45"
stream.logInfo(`Nanoseconds: ${t.nano}`);                // 500000000
```

---

## Creating Time

### now(zone?)

Returns the current time.

```js
const now = Time.now();
const nyNow = Time.now(TimeZone.of('America/New_York'));
```

### of(hour, minute?, second?, nano?)

Creates a Time from components.

```js
const t1 = Time.of(9);                      // 09:00:00
const t2 = Time.of(9, 30);                  // 09:30:00
const t3 = Time.of(9, 30, 45);              // 09:30:45
const t4 = Time.of(9, 30, 45, 500000000);   // 09:30:45.500000000
```

### parse(value, format?)

Parses a string into a Time.

```js
const t1 = Time.parse('14:30');
const t2 = Time.parse('14:30:45');
const t3 = Time.parse('02:30 PM', 'hh:mm a');
```

---

## Comparing Times

| Method | Returns | Description |
|--------|---------|-------------|
| `isAfter(other)` | `boolean` | This time is later |
| `isBefore(other)` | `boolean` | This time is earlier |
| `isEqual(other)` | `boolean` | Same time of day |
| `compareTo(other)` | `number` | Negative, zero, or positive |

```js
const opening = Time.of(9, 0);
const closing = Time.of(17, 30);
const now = Time.now();

if (now.isAfter(opening) && now.isBefore(closing)) {
    stream.logInfo('Within business hours');
}
```

---

## Adding Time

| Method | Description |
|--------|-------------|
| `plusHours(hours)` | Add hours |
| `plusMinutes(minutes)` | Add minutes |
| `plusSeconds(seconds)` | Add seconds |
| `plusNanos(nanos)` | Add nanoseconds |
| `plus(duration)` | Add a [`Duration`](Duration.md) |

```js
const start = Time.of(9, 0);
const end = start.plusHours(8);         // 17:00:00
const breakTime = start.plusMinutes(15); // 09:15:00
```

---

## Subtracting Time

| Method | Description |
|--------|-------------|
| `minusHours(hours)` | Subtract hours |
| `minusMinutes(minutes)` | Subtract minutes |
| `minusSeconds(seconds)` | Subtract seconds |
| `minusNanos(nanos)` | Subtract nanoseconds |
| `minus(duration)` | Subtract a [`Duration`](Duration.md) |

```js
const closing = Time.of(17, 30);
const warning = closing.minusMinutes(15);  // 17:15:00 — send reminder
```

---

## Changing Components

| Method | Description |
|--------|-------------|
| `withHour(hour)` | Set hour (0–23) |
| `withMinute(minute)` | Set minute (0–59) |
| `withSecond(second)` | Set second (0–59) |
| `withNano(nano)` | Set nanosecond |

```js
const t = Time.of(14, 30, 45);
const onTheHour = t.withMinute(0).withSecond(0);  // 14:00:00
```

---

## Formatting

### toString(format?)

```js
const t = Time.of(14, 30, 45);

t.toString();                    // "14:30:45"
t.toString('HH:mm');             // "14:30"
t.toString('hh:mm a');           // "02:30 PM"
t.toString('HH:mm:ss.SSS');      // "14:30:45.000"
```

---

## See Also

- [`DateTime`](DateTime.md) — Date with time and timezone
- [`LocalDate`](LocalDate.md) — Date without time
- [`Duration`](Duration.md) — Amount of time
