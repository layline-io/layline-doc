# DateTime

Represents a point in time, encapsulating date and time information.
This class cannot be instantiated directly but provides various methods
for manipulating and interacting with date-time values.

## Properties

### date

> **date**: [`LocalDate`](LocalDate.md)

The date part of this DateTime.

#### Example

```ts
const date = dateTime.date; // The date part, e.g. "2024-12-25"
```

***

### dayOfMonth

> **dayOfMonth**: `number`

The day of the month, from 1 to 31.

#### Example

```ts
const dayOfMonth = dateTime.dayOfMonth; // The day of the month, e.g. 25
```

***

### dayOfWeek

> **dayOfWeek**: `number`

The day of the week, from 1 (Monday) to 7 (Sunday).

#### Example

```ts
const dayOfWeek = dateTime.dayOfWeek; // The day of the week, e.g. 5 (Friday)
```

***

### dayOfYear

> **dayOfYear**: `number`

The day of the year, from 1 to 365 (or 366 in a leap year).

#### Example

```ts
const dayOfYear = dateTime.dayOfYear; // The day of the year, e.g. 360
```

***

### hour

> **hour**: `number`

The hour of the day, from 0 to 23.

#### Example

```ts
const hour = dateTime.hour; // The hour of the day, e.g. 14
```

***

### minute

> **minute**: `number`

The minute of the hour, from 0 to 59.

#### Example

```ts
const minute = dateTime.minute; // The minute of the hour, e.g. 30
```

***

### month

> **month**: `number`

The month of the year, from 1 (January) to 12 (December).

#### Example

```ts
const month = dateTime.month; // The month of the year, e.g. 12
```

***

### nano

> **nano**: `number`

The nanosecond of the second, from 0 to 999,999,999.

#### Example

```ts
const nano = dateTime.nano; // The nanosecond of the second, e.g. 500000000
```

***

### second

> **second**: `number`

The second of the minute, from 0 to 59.

#### Example

```ts
const second = dateTime.second; // The second of the minute, e.g. 0
```

***

### time

> **time**: [`Time`](Time.md)

The time part of this DateTime.

#### Example

```ts
const time = dateTime.time; // The time part, e.g. "14:30:00"
```

***

### year

> **year**: `number`

The year part of this DateTime.

#### Example

```ts
const year = dateTime.year; // The year part, e.g. 2024
```

## Methods

### atZone()

> **atZone**(`zone`): `DateTime`

Associates this DateTime with a specific time zone.

#### Parameters

##### zone

[`TimeZone`](TimeZone.md)

The time zone to associate with.

#### Returns

`DateTime`

A new DateTime instance representing the same moment in time in the specified zone.

#### Example

```ts
const zonedDateTime = dateTime.atZone(TimeZone.of('America/New_York')); // Same moment in New York
```

***

### isAfter()

> **isAfter**(`value`): `boolean`

Checks if this DateTime is after the specified DateTime.

#### Parameters

##### value

`DateTime`

The DateTime to compare against.

#### Returns

`boolean`

True if this DateTime is after the specified DateTime.

#### Example

```ts
const isAfter = dateTime.isAfter(anotherDateTime); // True if after
```

***

### isBefore()

> **isBefore**(`value`): `boolean`

Checks if this DateTime is before the specified DateTime.

#### Parameters

##### value

`DateTime`

The DateTime to compare against.

#### Returns

`boolean`

True if this DateTime is before the specified DateTime.

#### Example

```ts
const isBefore = dateTime.isBefore(anotherDateTime); // True if before
```

***

### isEqual()

> **isEqual**(`value`): `boolean`

Checks if this DateTime is equal to the specified DateTime.

#### Parameters

##### value

`DateTime`

The DateTime to compare against.

#### Returns

`boolean`

True if this DateTime is equal to the specified DateTime.

#### Example

```ts
const isEqual = dateTime.isEqual(anotherDateTime); // True if equal
```

***

### minusDays()

> **minusDays**(`days`): `DateTime`

Returns a new DateTime with the specified number of days subtracted.

#### Parameters

##### days

`number`

The number of days to subtract.

#### Returns

`DateTime`

A new DateTime instance with the days subtracted.

#### Example

```ts
const newDateTime = dateTime.minusDays(10); // Ten days
```

***

### minusHours()

> **minusHours**(`hours`): `DateTime`

Returns a new DateTime with the specified number of hours subtracted.

#### Parameters

##### hours

`number`

The number of hours to subtract.

#### Returns

`DateTime`

A new DateTime instance with the hours subtracted.

#### Example

```ts
const newDateTime = dateTime.minusHours(2); // Two hours
```

***

### minusMinutes()

> **minusMinutes**(`minutes`): `DateTime`

Returns a new DateTime with the specified number of minutes subtracted.

#### Parameters

##### minutes

`number`

The number of minutes to subtract.

#### Returns

`DateTime`

A new DateTime instance with the minutes subtracted.

#### Example

```ts
const newDateTime = dateTime.minusMinutes(30); // Half an hour
```

***

### minusMonths()

> **minusMonths**(`months`): `DateTime`

Returns a new DateTime with the specified number of months subtracted.

#### Parameters

##### months

`number`

The number of months to subtract.

#### Returns

`DateTime`

A new DateTime instance with the months subtracted.

#### Example

```ts
const newDateTime = dateTime.minusMonths(3); // Three months
```

***

### minusNanos()

> **minusNanos**(`nanos`): `DateTime`

Returns a new DateTime with the specified number of nanoseconds subtracted.

#### Parameters

##### nanos

`number`

The number of nanoseconds to subtract.

#### Returns

`DateTime`

A new DateTime instance with the nanoseconds subtracted.

#### Example

```ts
const newDateTime = dateTime.minusNanos(1000000); // One millisecond
```

***

### minusSeconds()

> **minusSeconds**(`seconds`): `DateTime`

Returns a new DateTime with the specified number of seconds subtracted.

#### Parameters

##### seconds

`number`

The number of seconds to subtract.

#### Returns

`DateTime`

A new DateTime instance with the seconds subtracted.

#### Example

```ts
const newDateTime = dateTime.minusSeconds(45); // Three-quarters of a minute
```

***

### minusYears()

> **minusYears**(`years`): `DateTime`

Returns a new DateTime with the specified number of years subtracted.

#### Parameters

##### years

`number`

The number of years to subtract.

#### Returns

`DateTime`

A new DateTime instance with the years subtracted.

#### Example

```ts
const newDateTime = dateTime.minusYears(5); // Five years
```

***

### plusDays()

> **plusDays**(`days`): `DateTime`

Returns a new DateTime with the specified number of days added.

#### Parameters

##### days

`number`

The number of days to add.

#### Returns

`DateTime`

A new DateTime instance with the days added.

#### Example

```ts
const newDateTime = dateTime.plusDays(10); // Ten days
```

***

### plusHours()

> **plusHours**(`hours`): `DateTime`

Returns a new DateTime with the specified number of hours added.

#### Parameters

##### hours

`number`

The number of hours to add.

#### Returns

`DateTime`

A new DateTime instance with the hours added.

#### Example

```ts
const newDateTime = dateTime.plusHours(2); // Two hours
```

***

### plusMinutes()

> **plusMinutes**(`minutes`): `DateTime`

Returns a new DateTime with the specified number of minutes added.

#### Parameters

##### minutes

`number`

The number of minutes to add.

#### Returns

`DateTime`

A new DateTime instance with the minutes added.

#### Example

```ts
const newDateTime = dateTime.plusMinutes(30); // Half an hour
```

***

### plusMonths()

> **plusMonths**(`months`): `DateTime`

Returns a new DateTime with the specified number of months added.

#### Parameters

##### months

`number`

The number of months to add.

#### Returns

`DateTime`

A new DateTime instance with the months added.

#### Example

```ts
const newDateTime = dateTime.plusMonths(3); // Three months
```

***

### plusNanos()

> **plusNanos**(`nanos`): `DateTime`

Returns a new DateTime with the specified number of nanoseconds added.

#### Parameters

##### nanos

`number`

The number of nanoseconds to add.

#### Returns

`DateTime`

A new DateTime instance with the nanoseconds added.

#### Example

```ts
const newDateTime = dateTime.plusNanos(1000000); // One millisecond
```

***

### plusSeconds()

> **plusSeconds**(`seconds`): `DateTime`

Returns a new DateTime with the specified number of seconds added.

#### Parameters

##### seconds

`number`

The number of seconds to add.

#### Returns

`DateTime`

A new DateTime instance with the seconds added.

#### Example

```ts
const newDateTime = dateTime.plusSeconds(45); // Three-quarters of a minute
```

***

### plusYears()

> **plusYears**(`years`): `DateTime`

Returns a new DateTime with the specified number of years added.

#### Parameters

##### years

`number`

The number of years to add.

#### Returns

`DateTime`

A new DateTime instance with the years added.

#### Example

```ts
const newDateTime = dateTime.plusYears(5); // Five years
```

***

### toEpochMilli()

> **toEpochMilli**(): `number`

Converts this DateTime to the number of milliseconds since the epoch (1970-01-01T00:00:00Z).

#### Returns

`number`

The number of milliseconds since the epoch.

#### Example

```ts
const epochMilli = dateTime.toEpochMilli(); // Number of milliseconds since the epoch
```

***

### toEpochSecond()

> **toEpochSecond**(): `number`

Converts this DateTime to the number of seconds since the epoch (1970-01-01T00:00:00Z).

#### Returns

`number`

The number of seconds since the epoch.

#### Example

```ts
const epochSecond = dateTime.toEpochSecond(); // Number of seconds since the epoch
```

***

### toString()

> **toString**(`format?`): `string`

Converts this DateTime to a string representation based on the specified format.

#### Parameters

##### format?

`string`

The format string. If not provided, a default format will be used.
See [Java Documentation](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html|DateTimeFormatter) for more information.

#### Returns

`string`

The string representation of this DateTime.

#### Example

```ts
const dateTimeString = dateTime.toString('uuuu-MM-dd HH:mm:ss'); // Custom format
```

***

### withDayOfMonth()

> **withDayOfMonth**(`day`): `DateTime`

Returns a new DateTime with the specified day of the month.

#### Parameters

##### day

`number`

The day of the month to set.

#### Returns

`DateTime`

A new DateTime instance with the specified day.

#### Example

```ts
const newDateTime = dateTime.withDayOfMonth(25);
```

***

### withHour()

> **withHour**(`hour`): `DateTime`

Returns a new DateTime with the specified hour of the day.

#### Parameters

##### hour

`number`

The hour of the day to set (0-23).

#### Returns

`DateTime`

A new DateTime instance with the specified hour.

#### Example

```ts
const newDateTime = dateTime.withHour(14); // 14:00
```

***

### withMinute()

> **withMinute**(`minute`): `DateTime`

Returns a new DateTime with the specified minute of the hour.

#### Parameters

##### minute

`number`

The minute of the hour to set (0-59).

#### Returns

`DateTime`

A new DateTime instance with the specified minute.

#### Example

```ts
const newDateTime = dateTime.withMinute(45); // Three-quarters of an hour
```

***

### withMonth()

> **withMonth**(`month`): `DateTime`

Returns a new DateTime with the specified month.

#### Parameters

##### month

`number`

The month to set (1 = January, 12 = December).

#### Returns

`DateTime`

A new DateTime instance with the specified month.

#### Example

```ts
const newDateTime = dateTime.withMonth(12);
```

***

### withNano()

> **withNano**(`nano`): `DateTime`

Returns a new DateTime with the specified nanosecond of the second.

#### Parameters

##### nano

`number`

The nanosecond of the second to set (0-999999999).

#### Returns

`DateTime`

A new DateTime instance with the specified nanosecond.

#### Example

```ts
const newDateTime = dateTime.withNano(500000000); // Half a second
```

***

### withSecond()

> **withSecond**(`second`): `DateTime`

Returns a new DateTime with the specified second of the minute.

#### Parameters

##### second

`number`

The second of the minute to set (0-59).

#### Returns

`DateTime`

A new DateTime instance with the specified second.

#### Example

```ts
const newDateTime = dateTime.withSecond(30); // Half a minute
```

***

### withYear()

> **withYear**(`year`): `DateTime`

Returns a new DateTime with the specified year.

#### Parameters

##### year

`number`

The year to set.

#### Returns

`DateTime`

A new DateTime instance with the specified year.

#### Example

```ts
const newDateTime = dateTime.withYear(2025);
```

***

### now()

> `static` **now**(`zone?`): `DateTime`

Returns the current DateTime in the specified time zone.

#### Parameters

##### zone?

[`TimeZone`](TimeZone.md)

The time zone to use. If not provided, the system default time zone is used.

#### Returns

`DateTime`

The current DateTime in the specified time zone.

#### Example

```ts
const now = DateTime.now(TimeZone.of('America/New_York')); // Current date and time in New York
```

***

### of()

> `static` **of**(`year`, `month?`, `day?`, `hour?`, `minute?`, `second?`, `nano?`, `zone?`): `DateTime`

Creates a DateTime instance with the specified date and time components.

#### Parameters

##### year

`number`

The year to set.

##### month?

`number`

The month to set (1 = January, 12 = December).

##### day?

`number`

The day of the month to set.

##### hour?

`number`

The hour of the day to set (0-23).

##### minute?

`number`

The minute of the hour to set (0-59).

##### second?

`number`

The second of the minute to set (0-59).

##### nano?

`number`

The nanosecond of the second to set (0-999999999).

##### zone?

[`ZoneOffset`](ZoneOffset.md)

The time zone to associate with. If not provided, the system default time zone is used.

#### Returns

`DateTime`

A new DateTime instance with the specified components.

#### Example

```ts
const dateTime = DateTime.of(2024, 12, 25, 14, 30, 0, 0); // Christmas Day 2024 at 2:30 PM
const dateTime = DateTime.of(2024, 12, 25, 14, 30, 0, 0, ZoneOffset(5, 30)); // Christmas Day 2024 at 2:30 PM +05:30
```

***

### parse()

> `static` **parse**(`value`, `format?`): `DateTime`

Parses a string to create a DateTime instance based on the specified format.

#### Parameters

##### value

`string`

The string representation of the date-time.

##### format?

`string`

The format to use for parsing. If not provided, a default format is used.
See [Java Documentation](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html|DateTimeFormatter) for more information.

#### Returns

`DateTime`

A new DateTime instance parsed from the string.

#### Example

```ts
const dateTime = DateTime.parse('2024-12-25 14:30:00', 'uuuu-MM-dd HH:mm:ss'); // Christmas Day 2024 at 2:30 PM
```
