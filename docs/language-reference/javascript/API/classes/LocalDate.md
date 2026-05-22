---
description: Represents a date without time or timezone — just year, month, and day. Use `LocalDate` for birthdays, anniversaries, or any date-only value where time doesn...
---

# LocalDate

Represents a date without time or timezone — just year, month, and day. Use `LocalDate` for birthdays, anniversaries, or any date-only value where time doesn't matter.

`LocalDate` instances are immutable — all modification methods return new instances.

---

## At a Glance

```js
// Today
const today = LocalDate.now();

// Specific date
const birthday = LocalDate.of(1990, 5, 15);

// From a string
const parsed = LocalDate.parse('2024-12-25');

// Read from a message
const orderDate = message.getDate(dataDictionary.type.Order.ORDER_DATE);
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

```js
const date = LocalDate.of(2024, 3, 15);

stream.logInfo(`${date.year}-${date.month}-${date.dayOfMonth}`);  // "2024-3-15"
stream.logInfo(`Day ${date.dayOfYear} of ${date.year}`);          // "Day 75 of 2024"
stream.logInfo(`Day of week: ${date.dayOfWeek}`);                 // 5 (Friday)
```

---

## Creating LocalDate

### now(zone?)

Returns the current date.

```js
const today = LocalDate.now();
const nyToday = LocalDate.now(TimeZone.of('America/New_York'));
```

### of(year, month?, day?)

Creates a LocalDate from components.

```js
const date1 = LocalDate.of(2024);           // 2024-01-01
const date2 = LocalDate.of(2024, 3);        // 2024-03-01
const date3 = LocalDate.of(2024, 3, 15);    // 2024-03-15
```

### parse(value, format?)

Parses a string into a LocalDate.

```js
// ISO format (default)
const d1 = LocalDate.parse('2024-12-25');

// Custom format
const d2 = LocalDate.parse('25/12/2024', 'dd/MM/uuuu');
```

---

## Comparing Dates

| Method | Returns | Description |
|--------|---------|-------------|
| `isAfter(other)` | `boolean` | This date is later |
| `isBefore(other)` | `boolean` | This date is earlier |
| `isEqual(other)` | `boolean` | Same date |
| `compareTo(other)` | `number` | Negative, zero, or positive |

```js
const start = LocalDate.of(2024, 1, 1);
const end = LocalDate.of(2024, 12, 31);

if (end.isAfter(start)) {
    stream.logInfo('End is after start');
}

// Sorting
const dates = [LocalDate.of(2024, 3, 1), LocalDate.of(2024, 1, 1)];
dates.sort((a, b) => a.compareTo(b));
```

---

## Adding Time

| Method | Description |
|--------|-------------|
| `plusYears(years)` | Add years |
| `plusMonths(months)` | Add months |
| `plusWeeks(weeks)` | Add weeks |
| `plusDays(days)` | Add days |
| `plus(duration)` | Add a [`Duration`](Duration.md) |

```js
const today = LocalDate.now();

const tomorrow = today.plusDays(1);
const nextWeek = today.plusWeeks(1);
const nextMonth = today.plusMonths(1);

// Calculate expiry
const expiry = today.plusDays(30);
message.setDate(dataDictionary.type.Subscription.EXPIRY, expiry);
```

---

## Subtracting Time

| Method | Description |
|--------|-------------|
| `minusYears(years)` | Subtract years |
| `minusMonths(months)` | Subtract months |
| `minusWeeks(weeks)` | Subtract weeks |
| `minusDays(days)` | Subtract days |
| `minus(duration)` | Subtract a [`Duration`](Duration.md) |

```js
const today = LocalDate.now();
const yesterday = today.minusDays(1);
const lastMonth = today.minusMonths(1);

// Check age requirement (must be 18+)
const birthDate = message.getDate(dataDictionary.type.Customer.BIRTH_DATE);
const age18 = today.minusYears(18);
if (birthDate.isAfter(age18)) {
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'UNDERAGE'));
}
```

---

## Changing Components

| Method | Description |
|--------|-------------|
| `withYear(year)` | Set year |
| `withMonth(month)` | Set month (1–12) |
| `withDayOfMonth(day)` | Set day of month (1–31) |

```js
const date = LocalDate.of(2024, 3, 15);
const firstOfMonth = date.withDayOfMonth(1);
const nextYear = date.withYear(2025);
```

---

## Formatting

### toString(format?)

```js
const date = LocalDate.of(2024, 12, 25);

date.toString();                        // "2024-12-25"
date.toString('uuuu-MM-dd');            // "2024-12-25"
date.toString('dd/MM/uuuu');            // "25/12/2024"
date.toString('EEEE, MMMM dd uuuu');    // "Wednesday, December 25 2024"
```

---

## See Also

- [`DateTime`](DateTime.md) — Date with time and timezone
- [`Time`](Time.md) — Time without date
- [`Duration`](Duration.md) — Amount of time between two dates
