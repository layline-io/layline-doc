# Class: DateTime

Represents a point in time, encapsulating date and time information.
This class cannot be instantiated directly but provides various methods
for manipulating and interacting with date-time values.

## Abstract

## Properties

### date

> **date**: LocalDate

The date part of this DateTime.

#### Example

```python
date = DateTime.date  # The date part, e.g. "2024-12-25"
```

### dayOfMonth

> **dayOfMonth**: int

The day of the month, from 1 to 31.

#### Example

```python
day_of_month = DateTime.dayOfMonth  # The day of the month, e.g. 25
```

### dayOfWeek

> **dayOfWeek**: int

The day of the week, from 1 (Monday) to 7 (Sunday).

#### Example

```python
day_of_week = DateTime.dayOfWeek  # The day of the week, e.g. 5 (Friday)
```

### dayOfYear

> **dayOfYear**: int

The day of the year, from 1 to 365 (or 366 in a leap year).

#### Example

```python
day_of_year = DateTime.dayOfYear  # The day of the year, e.g. 360
```

### hour

> **hour**: int

The hour of the day, from 0 to 23.

#### Example

```python
hour = DateTime.hour  # The hour of the day, e.g. 14
```

### minute

> **minute**: int

The minute of the hour, from 0 to 59.

#### Example

```python
minute = DateTime.minute  # The minute of the hour, e.g. 30
```

### month

> **month**: int

The month of the year, from 1 (January) to 12 (December).

#### Example

```python
month = DateTime.month  # The month of the year, e.g. 12
```

### nano

> **nano**: int

The nanosecond of the second, from 0 to 999,999,999.

#### Example

```python
nano = DateTime.nano  # The nanosecond of the second, e.g. 500000000
```

### second

> **second**: int

The second of the minute, from 0 to 59.

#### Example

```python
second = DateTime.second  # The second of the minute, e.g. 0
```

### time

> **time**: Time

The time part of this DateTime.

#### Example

```python
time = DateTime.time  # The time part, e.g. "14:30:00"
```

### year

> **year**: int

The year part of this DateTime.

#### Example

```python
year = DateTime.year  # The year part, e.g. 2024
```

## Methods

### atZone()

> **atZone**(zone: TimeZone) -> DateTime

Associates this DateTime with a specific time zone.

#### Parameters

- **zone**: TimeZone - The time zone to associate with.

#### Returns

DateTime - A new DateTime instance representing the same moment in time in the specified zone.

#### Example

```python
zoned_date_time = DateTime.atZone(TimeZone.of('America/New_York'))  # Same moment in New York
```

### isAfter()

> **isAfter**(value: DateTime) -> bool

Checks if this DateTime is after the specified DateTime.

#### Parameters

- **value**: DateTime - The DateTime to compare against.

#### Returns

bool - True if this DateTime is after the specified DateTime.

#### Example

```python
is_after = DateTime.isAfter(anotherDateTime)  # True if after
```

### isBefore()

> **isBefore**(value: DateTime) -> bool

Checks if this DateTime is before the specified DateTime.

#### Parameters

- **value**: DateTime - The DateTime to compare against.

#### Returns

bool - True if this DateTime is before the specified DateTime.

#### Example

```python
is_before = DateTime.isBefore(anotherDateTime)  # True if before
```

### isEqual()

> **isEqual**(value: DateTime) -> bool

Checks if this DateTime is equal to the specified DateTime.

#### Parameters

- **value**: DateTime - The DateTime to compare against.

#### Returns

bool - True if this DateTime is equal to the specified DateTime.

#### Example

```python
is_equal = DateTime.isEqual(anotherDateTime)  # True if equal
```

### minusDays()

> **minusDays**(days: int) -> DateTime

Returns a new DateTime with the specified number of days subtracted.

#### Parameters

- **days**: int - The number of days to subtract.

#### Returns

DateTime - A new DateTime instance with the days subtracted.

#### Example

```python
new_date_time = DateTime.minusDays(10)  # Ten days before
```

### minusHours()

> **minusHours**(hours: int) -> DateTime

Returns a new DateTime with the specified number of hours subtracted.

#### Parameters

- **hours**: int - The number of hours to subtract.

#### Returns

DateTime - A new DateTime instance with the hours subtracted.

#### Example

```python
new_date_time = DateTime.minusHours(2)  # Two hours before
```

### minusMinutes()

> **minusMinutes**(minutes: int) -> DateTime

Returns a new DateTime with the specified number of minutes subtracted.

#### Parameters

- **minutes**: int - The number of minutes to subtract.

#### Returns

DateTime - A new DateTime instance with the minutes subtracted.

#### Example

```python
new_date_time = DateTime.minusMinutes(30)  # Half an hour before
```

### minusMonths()

> **minusMonths**(months: int) -> DateTime

Returns a new DateTime with the specified number of months subtracted.

#### Parameters

- **months**: int - The number of months to subtract.

#### Returns

DateTime - A new DateTime instance with the months subtracted.

#### Example

```python
new_date_time = DateTime.minusMonths(3)  # Three months before
```

### minusNanos()

> **minusNanos**(nanos: int) -> DateTime

Returns a new DateTime with the specified number of nanoseconds subtracted.

#### Parameters

- **nanos**: int - The number of nanoseconds to subtract.

#### Returns

DateTime - A new DateTime instance with the nanoseconds subtracted.

#### Example

```python
new_date_time = DateTime.minusNanos(1000000)  # One millisecond before
```

### minusSeconds()

> **minusSeconds**(seconds: int) -> DateTime

Returns a new DateTime with the specified number of seconds subtracted.

#### Parameters

- **seconds**: int - The number of seconds to subtract.

#### Returns

DateTime - A new DateTime instance with the seconds subtracted.

#### Example

```python
new_date_time = DateTime.minusSeconds(45)  # 45 seconds before
```

### minusYears()

> **minusYears**(years: int) -> DateTime

Returns a new DateTime with the specified number of years subtracted.

#### Parameters

- **years**: int - The number of years to subtract.

#### Returns

DateTime - A new DateTime instance with the years subtracted.

#### Example

```python
new_date_time = DateTime.minusYears(5)  # Five years before
```

### plusDays()

> **plusDays**(days: int) -> DateTime

Returns a new DateTime with the specified number of days added.

#### Parameters

- **days**: int - The number of days to add.

#### Returns

DateTime - A new DateTime instance with the days added.

#### Example

```python
new_date_time = DateTime.plusDays(10)  # Ten days after
```

### plusHours()

> **plusHours**(hours: int) -> DateTime

Returns a new DateTime with the specified number of hours added.

#### Parameters

- **hours**: int - The number of hours to add.

#### Returns

DateTime - A new DateTime instance with the hours added.

#### Example

```python
new_date_time = DateTime.plusHours(2)  # Two hours after
```

### plusMinutes()

> **plusMinutes**(minutes: int) -> DateTime

Returns a new DateTime with the specified number of minutes added.

#### Parameters

- **minutes**: int - The number of minutes to add.

#### Returns

DateTime - A new DateTime instance with the minutes added.

#### Example

```python
new_date_time = DateTime.plusMinutes(30)  # Half an hour after
```

### plusMonths()

> **plusMonths**(months: int) -> DateTime

Returns a new DateTime with the specified number of months added.

#### Parameters

- **months**: int - The number of months to add.

#### Returns

DateTime - A new DateTime instance with the months added.

#### Example

```python
new_date_time = DateTime.plusMonths(3)  # Three months after
```

### plusNanos()

> **plusNanos**(nanos: int) -> DateTime

Returns a new DateTime with the specified number of nanoseconds added.

#### Parameters

- **nanos**: int - The number of nanoseconds to add.

#### Returns

DateTime - A new DateTime instance with the nanoseconds added.

#### Example

```python
new_date_time = DateTime.plusNanos(1000000)  # One millisecond after
```

### plusSeconds()

> **plusSeconds**(seconds: int) -> DateTime

Returns a new DateTime with the specified number of seconds added.

#### Parameters

- **seconds**: int - The number of seconds to add.

#### Returns

DateTime - A new DateTime instance with the seconds added.

#### Example

```python
new_date_time = DateTime.plusSeconds(45)  # 45 seconds after
```

### plusYears()

> **plusYears**(years: int) -> DateTime

Returns a new DateTime with the specified number of years added.

#### Parameters

- **years**: int - The number of years to add.

#### Returns

DateTime - A new DateTime instance with the years added.

#### Example

```python
new_date_time = DateTime.plusYears(5)  # Five years after
```

### toEpochMilli()

> **toEpochMilli**() -> int

Converts this DateTime to the number of milliseconds since the epoch (1970-01-01T00:00:00Z).

#### Returns

int - The number of milliseconds since the epoch.

#### Example

```python
epoch_milli = DateTime.toEpochMilli()  # Number of milliseconds since the epoch
```

### toEpochSecond()

> **toEpochSecond**() -> int

Converts this DateTime to the number of seconds since the epoch (1970-01-01T00:00:00Z).

#### Returns

int - The number of seconds since the epoch.

#### Example

```python
epoch_second = DateTime.toEpochSecond()  # Number of seconds since the epoch
```

### toString()

> **toString**(format: str = None) -> str

Converts this DateTime to a string representation based on the specified format.

#### Parameters

- **format**: str, optional - The format string. If not provided, a default format will be used.
  See [Java Documentation for DateTimeFormatter](https://docs.oracle.com/en%2Fjava%2Fjavase%2F22%2Fdocs%2Fapi%2F%2F/java.base/java/time/format/DateTimeFormatter.html) for more information on supported date and time patterns.

#### Returns

str - The string representation of this DateTime.

#### Example

```python
date_time_string = DateTime.toString('uuuu-MM-dd HH:mm:ss')  # Custom format
```

### withDayOfMonth()

> **withDayOfMonth**(day: int) -> DateTime

Returns a new DateTime with the specified day of the month.

#### Parameters

- **day**: int - The day of the month to set.

#### Returns

DateTime - A new DateTime instance with the specified day.

#### Example

```python
new_date_time = DateTime.withDayOfMonth(25)
```

### withHour()

> **withHour**(hour: int) -> DateTime

Returns a new DateTime with the specified hour of the day.

#### Parameters

- **hour**: int - The hour of the day to set (0-23).

#### Returns

DateTime - A new DateTime instance with the specified hour.

#### Example

```python
new_date_time = DateTime.withHour(14)  # 2:00 PM
```

### withMinute()

> **withMinute**(minute: int) -> DateTime

Returns a new DateTime with the specified minute of the hour.

#### Parameters

- **minute**: int - The minute of the hour to set (0-59).

#### Returns

DateTime - A new DateTime instance with the specified minute.

#### Example

```python
new_date_time = DateTime.withMinute(45)  # 45 minutes past the hour
```

### withMonth()

> **withMonth**(month: int) -> DateTime

Returns a new DateTime with the specified month.

#### Parameters

- **month**: int - The month to set (1 = January, 12 = December).

#### Returns

DateTime - A new DateTime instance with the specified month.

#### Example

```python
new_date_time = DateTime.withMonth(12)  # December
```

### withNano()

> **withNano**(nano: int) -> DateTime

Returns a new DateTime with the specified nanosecond of the second.

#### Parameters

- **nano**: int - The nanosecond of the second to set (0-999999999).

#### Returns

DateTime - A new DateTime instance with the specified nanosecond.

#### Example

```python
new_date_time = DateTime.withNano(500000000)  # Half a second
```

### withSecond()

> **withSecond**(second: int) -> DateTime

Returns a new DateTime with the specified second of the minute.

#### Parameters

- **second**: int - The second of the minute to set (0-59).

#### Returns

DateTime - A new DateTime instance with the specified second.

#### Example

```python
new_date_time = DateTime.withSecond(30)  # 30 seconds
```

### withYear()

> **withYear**(year: int) -> DateTime

Returns a new DateTime with the specified year.

#### Parameters

- **year**: int - The year to set.

#### Returns

DateTime - A new DateTime instance with the specified year.

#### Example

```python
new_date_time = DateTime.withYear(2025)
```

### now()

> @staticmethod
> **now**(zone: TimeZone = None) -> DateTime

Returns the current DateTime in the specified time zone.

#### Parameters

- **zone**: TimeZone, optional - The time zone to use. If not provided, the system default time zone is used.

#### Returns

DateTime - The current DateTime in the specified time zone.

#### Example

```python
now = DateTime.now(TimeZone.of('America/New_York'))  # Current date and time in New York
```

### of()

> @staticmethod
> **of**(year: int, month: int = None, day: int = None, hour: int = None, minute: int = None, second: int = None, nano: int = None, zone: ZoneOffset = None) -> DateTime

Creates a DateTime instance with the specified date and time components.

#### Parameters

- **year**: int - The year to set.
- **month**: int, optional - The month to set (1 = January, 12 = December).
- **day**: int, optional - The day of the month to set.
- **hour**: int, optional - The hour of the day to set (0-23).
- **minute**: int, optional - The minute of the hour to set (0-59).
- **second**: int, optional - The second of the minute to set (0-59).
- **nano**: int, optional - The nanosecond of the second to set (0-999999999).
- **zone**: [ZoneOffset](ZoneOffset.md), optional - The time zone to associate with. If not provided, the system default time zone is used.

#### Returns

DateTime - A new DateTime instance with the specified components.

#### Example

```python
date_time = DateTime.of(2024, 12, 25, 14, 30, 0, 0)  # Christmas Day 2024 at 2:30 PM
date_time = DateTime.of(2024, 12, 25, 14, 30, 0, 0, ZoneOffset(5, 30))  # Christmas Day 2024 at 2:30
