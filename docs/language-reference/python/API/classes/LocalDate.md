---
description: Represents a date without time or timezone — just year, month, and day. Use `LocalDate` for birthdays, anniversaries, or any date-only value where time doesn...
---

---
id: py-LocalDate
---

# LocalDate

Represents a date without time or timezone — just year, month, and day. Use `LocalDate` for birthdays, anniversaries, or any date-only value where time doesn't matter.

`LocalDate` instances are immutable — all modification methods return new instances.

---

## At a Glance

```python
# Today
today = LocalDate.now()

# Specific date
birthday = LocalDate.of(1990, 5, 15)

# From a string
parsed = LocalDate.parse('2024-12-25')

# Read from a message
order_date = message.getDate(dataDictionary.type.Order.ORDER_DATE)
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

```python
date = LocalDate.of(2024, 3, 15)

stream.log_info(f"{date.year}-{date.month}-{date.dayOfMonth}")  # "2024-3-15"
stream.log_info(f"Day {date.dayOfYear} of {date.year}")          # "Day 75 of 2024"
stream.log_info(f"Day of week: {date.dayOfWeek}")                 # 5 (Friday)
```

---

## Creating LocalDate

### now(zone?)

Returns the current date.

```python
today = LocalDate.now()
ny_today = LocalDate.now(TimeZone.of('America/New_York'))
```

### of(year, month?, day?)

Creates a LocalDate from components.

```python
date1 = LocalDate.of(2024)           # 2024-01-01
date2 = LocalDate.of(2024, 3)        # 2024-03-01
date3 = LocalDate.of(2024, 3, 15)    # 2024-03-15
```

### parse(value, format?)

Parses a string into a LocalDate.

```python
# ISO format (default)
d1 = LocalDate.parse('2024-12-25')

# Custom format
d2 = LocalDate.parse('25/12/2024', 'dd/MM/uuuu')
```

---

## Comparing Dates

| Method | Returns | Description |
|--------|---------|-------------|
| `isAfter(other)` | `bool` | This date is later |
| `isBefore(other)` | `bool` | This date is earlier |
| `isEqual(other)` | `bool` | Same date |
| `compareTo(other)` | `int` | Negative, zero, or positive |

```python
start = LocalDate.of(2024, 1, 1)
end = LocalDate.of(2024, 12, 31)

if end.isAfter(start):
    stream.log_info('End is after start')

# Sorting
dates = [LocalDate.of(2024, 3, 1), LocalDate.of(2024, 1, 1)]
dates.sort(key=lambda d: d.toString())
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

```python
today = LocalDate.now()

tomorrow = today.plusDays(1)
next_week = today.plusWeeks(1)
next_month = today.plusMonths(1)

# Calculate expiry
expiry = today.plusDays(30)
message.setDate(dataDictionary.type.Subscription.EXPIRY, expiry)
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

```python
today = LocalDate.now()
yesterday = today.minusDays(1)
last_month = today.minusMonths(1)

# Check age requirement (must be 18+)
birth_date = message.getDate(dataDictionary.type.Customer.BIRTH_DATE)
age18 = today.minusYears(18)
if birth_date.isAfter(age18):
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'UNDERAGE'))
```

---

## Changing Components

| Method | Description |
|--------|-------------|
| `withYear(year)` | Set year |
| `withMonth(month)` | Set month (1–12) |
| `withDayOfMonth(day)` | Set day of month (1–31) |

```python
date = LocalDate.of(2024, 3, 15)
first_of_month = date.withDayOfMonth(1)
next_year = date.withYear(2025)
```

---

## Formatting

### toString(format?)

```python
date = LocalDate.of(2024, 12, 25)

date.toString()                        # "2024-12-25"
date.toString('uuuu-MM-dd')            # "2024-12-25"
date.toString('dd/MM/uuuu')            # "25/12/2024"
date.toString('EEEE, MMMM dd uuuu')    # "Wednesday, December 25 2024"
```

---

## See Also

- [`DateTime`](DateTime.md) — Date with time and timezone
- [`Time`](Time.md) — Time without date
- [`Duration`](Duration.md) — Amount of time between two dates
