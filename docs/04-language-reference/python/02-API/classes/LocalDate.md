# Class: LocalDate

Represents a date without a time-zone in the ISO-8601 calendar system.
This is an abstract class and cannot be instantiated directly.

## Abstract

## Properties

### dayOfMonth

> **dayOfMonth**: int

The day of the month, from 1 to 31.

#### Example

```python
date = LocalDate.of(2023, 9, 15)
print(date.dayOfMonth)  # Output: 15
```

### dayOfWeek

> **dayOfWeek**: int

The day of the week, from 1 (Monday) to 7 (Sunday).

#### Example

```python
date = LocalDate.of(2023, 9, 15)  # September 15, 2023 is a Friday
print(date.dayOfWeek)  # Output: 5
```

### dayOfYear

> **dayOfYear**: int

The day of the year, from 1 to 365 (or 366 in a leap year).

#### Example

```python
date = LocalDate.of(2023, 9, 15)
print(date.dayOfYear)  # Output: 258 (as September 15 is the 258th day of 2023)
```

### month

> **month**: int

The month of the year, from 1 (January) to 12 (December).

#### Example

```python
date = LocalDate.of(2023, 9, 15)
print(date.month)  # Output: 9
```

### year

> **year**: int

The year.

#### Example

```python
date = LocalDate.of(2023, 9, 15)
print(date.year)  # Output: 2023
```

## Methods

### add()

> **add**(duration: Duration) -> LocalDate

Adds a specified duration to this date.

#### Parameters

- **duration**: Duration - The duration to add.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
# Assuming we have a LocalDate instance 'date' and a Duration 'duration'
new_date = date.add(duration)
```

### compareTo()

> **compareTo**(other: LocalDate) -> int

Compares this date to another.

#### Parameters

- **other**: LocalDate - The date to compare to.

#### Returns

int - A negative integer, zero, or a positive integer if this date is before, equal to, or after the given date.

#### Example

```python
date1 = LocalDate.of(2023, 1, 1)
date2 = LocalDate.of(2023, 1, 2)
print(date1.compareTo(date2))  # Output: -1
```

### isAfter()

> **isAfter**(other: LocalDate) -> bool

Checks if this date is after the specified date.

#### Parameters

- **other**: LocalDate - The date to compare to.

#### Returns

bool - True if this date is after the specified date.

#### Example

```python
date1 = LocalDate.of(2023, 1, 2)
date2 = LocalDate.of(2023, 1, 1)
print(date1.isAfter(date2))  # Output: True
```

### isBefore()

> **isBefore**(other: LocalDate) -> bool

Checks if this date is before the specified date.

#### Parameters

- **other**: LocalDate - The date to compare to.

#### Returns

bool - True if this date is before the specified date.

#### Example

```python
date1 = LocalDate.of(2023, 1, 1)
date2 = LocalDate.of(2023, 1, 2)
print(date1.isBefore(date2))  # Output: True
```

### isEqual()

> **isEqual**(other: LocalDate) -> bool

Checks if this date is equal to the specified date.

#### Parameters

- **other**: LocalDate - The date to compare to.

#### Returns

bool - True if the dates are equal.

#### Example

```python
date1 = LocalDate.of(2023, 1, 1)
date2 = LocalDate.of(2023, 1, 1)
print(date1.isEqual(date2))  # Output: True
```

### minus()

> **minus**(duration: Duration) -> LocalDate

Returns a copy of this date minus the specified duration.

#### Parameters

- **duration**: Duration - The duration to subtract.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
# Assuming we have a LocalDate instance 'date' and a Duration 'duration'
new_date = date.minus(duration)
```

### minusDays()

> **minusDays**(days: int) -> LocalDate

Returns a copy of this date minus the specified number of days.

#### Parameters

- **days**: int - The number of days to subtract.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 10)
new_date = date.minusDays(5)
print(new_date.toString())  # Output: "2023-01-05"
```

### minusMonths()

> **minusMonths**(months: int) -> LocalDate

Returns a copy of this date minus the specified number of months.

#### Parameters

- **months**: int - The number of months to subtract.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 3, 15)
new_date = date.minusMonths(2)
print(new_date.toString())  # Output: "2023-01-15"
```

### minusWeeks()

> **minusWeeks**(weeks: int) -> LocalDate

Returns a copy of this date minus the specified number of weeks.

#### Parameters

- **weeks**: int - The number of weeks to subtract.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 15)
new_date = date.minusWeeks(2)
print(new_date.toString())  # Output: "2023-01-01"
```

### minusYears()

> **minusYears**(years: int) -> LocalDate

Returns a copy of this date minus the specified number of years.

#### Parameters

- **years**: int - The number of years to subtract.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 1)
new_date = date.minusYears(3)
print(new_date.toString())  # Output: "2020-01-01"
```

### plus()

> **plus**(duration: Duration) -> LocalDate

Returns a copy of this date plus the specified duration.

#### Parameters

- **duration**: Duration - The duration to add.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
# Assuming we have a LocalDate instance 'date' and a Duration 'duration'
new_date = date.plus(duration)
```

### plusDays()

> **plusDays**(days: int) -> LocalDate

Returns a copy of this date plus the specified number of days.

#### Parameters

- **days**: int - The number of days to add.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 1)
new_date = date.plusDays(5)
print(new_date.toString())  # Output: "2023-01-06"
```

### plusMonths()

> **plusMonths**(months: int) -> LocalDate

Returns a copy of this date plus the specified number of months.

#### Parameters

- **months**: int - The number of months to add.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 15)
new_date = date.plusMonths(2)
print(new_date.toString())  # Output: "2023-03-15"
```

### plusWeeks()

> **plusWeeks**(weeks: int) -> LocalDate

Returns a copy of this date plus the specified number of weeks.

#### Parameters

- **weeks**: int - The number of weeks to add.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 1)
new_date = date.plusWeeks(2)
print(new_date.toString())  # Output: "2023-01-15"
```

### plusYears()

> **plusYears**(years: int) -> LocalDate

Returns a copy of this date plus the specified number of years.

#### Parameters

- **years**: int - The number of years to add.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 1)
new_date = date.plusYears(3)
print(new_date.toString())  # Output: "2026-01-01"
```

### toString()

> **toString**(format: str = None) -> str

Converts this date to a string representation.

#### Parameters

- **format**: str, optional - The format to use for the string representation.

#### Returns

str - A string representation of this date.

#### Example

```python
date = LocalDate.of(2023, 1, 15)
print(date.toString())  # Output: "2023-01-15"
print(date.toString("dd/MM/uuuu"))  # Output: "15/01/2023"
```

### withDayOfMonth()

> **withDayOfMonth**(day: int) -> LocalDate

Returns a copy of this date with the day of month altered.

#### Parameters

- **day**: int - The new day of the month.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 15)
new_date = date.withDayOfMonth(20)
print(new_date.toString())  # Output: "2023-01-20"
```

### withMonth()

> **withMonth**(month: int) -> LocalDate

Returns a copy of this date with the month altered.

#### Parameters

- **month**: int - The new month of the year.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 15)
new_date = date.withMonth(3)
print(new_date.toString())  # Output: "2023-03-15"
```

### withYear()

> **withYear**(year: int) -> LocalDate

Returns a copy of this date with the year altered.

#### Parameters

- **year**: int - The new year.

#### Returns

LocalDate - A new LocalDate representing the result.

#### Example

```python
date = LocalDate.of(2023, 1, 15)
new_date = date.withYear(2024)
print(new_date.toString())  # Output: "2024-01-15"
```

### now()

> @staticmethod
> **now**(zone: TimeZone = None) -> LocalDate

Obtains the current date from the system clock in the default time-zone.

#### Parameters

- **zone**: TimeZone, optional - The time zone to use, defaults to the system default if not specified.

#### Returns

LocalDate - The current date.

#### Example

```python
today = LocalDate.now()
print(today.toString())  # Output: Current date, e.g., "2023-09-03"
```

### of()

> @staticmethod
> **of**(year: int, month: int = None, day: int = None) -> LocalDate

Obtains an instance of LocalDate from year, month, and day values.

#### Parameters

- **year**: int - The year to represent.
- **month**: int, optional - The month-of-year to represent, from 1 (January) to 12 (December).
- **day**: int, optional - The day-of-month to represent, from 1 to 31.

#### Returns

LocalDate - The local date.

#### Example

```python
date = LocalDate.of(2023, 9, 3)
print(date.toString())  # Output: "2023-09-03"
```

### parse()

> @staticmethod
> **parse**(value: str, format: str = None) -> LocalDate

Obtains an instance of LocalDate from a text string using a specific format.

#### Parameters

- **value**: str - The text to parse.
- **format**: str, optional - The format to use for parsing.

#### Returns

LocalDate - The parsed local date.

#### Example

```python
date = LocalDate.parse("2023-09-03")
print(date.toString())  # Output: "2023-09-03"

custom_date = LocalDate.parse("03/09/2023", "dd/MM/uuuu")
print(custom_date.toString())  # Output: "2023-09-03"
```
