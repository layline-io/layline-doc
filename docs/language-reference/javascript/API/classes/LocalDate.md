# LocalDate

Represents a date without a time-zone in the ISO-8601 calendar system.
This is an abstract class and cannot be instantiated directly.

## Properties

### dayOfMonth

> **dayOfMonth**: `number`

The day of the month, from 1 to 31.

#### Example

```ts
const date = LocalDate.of(2023, 9, 15);
print(date.dayOfMonth); // Output: 15
```

***

### dayOfWeek

> **dayOfWeek**: `number`

The day of the week, from 1 (Monday) to 7 (Sunday).

#### Example

```ts
const date = LocalDate.of(2023, 9, 15); // September 15, 2023 is a Friday
print(date.dayOfWeek); // Output: 5
```

***

### dayOfYear

> **dayOfYear**: `number`

The day of the year, from 1 to 365 (or 366 in a leap year).

#### Example

```ts
const date = LocalDate.of(2023, 9, 15);
print(date.dayOfYear); // Output: 258 (as September 15 is the 258th day of 2023)
```

***

### month

> **month**: `number`

The month of the year, from 1 (January) to 12 (December).

#### Example

```ts
const date = LocalDate.of(2023, 9, 15);
print(date.month); // Output: 9
```

***

### year

> **year**: `number`

The year.

#### Example

```ts
const date = LocalDate.of(2023, 9, 15);
print(date.year); // Output: 2023
```

## Methods

### add()

> **add**(`duration`): `LocalDate`

Adds a specified duration to this date.

#### Parameters

##### duration

[`Duration`](Duration.md)

The duration to add.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
// Assuming we have a LocalDate instance 'date' and a Duration 'duration'
const newDate = date.add(duration);
```

***

### compareTo()

> **compareTo**(`other`): `number`

Compares this date to another.

#### Parameters

##### other

`LocalDate`

The date to compare to.

#### Returns

`number`

A negative integer, zero, or a positive integer if this date is before, equal to, or after the given date.

#### Example

```ts
const date1 = LocalDate.of(2023, 1, 1);
const date2 = LocalDate.of(2023, 1, 2);
print(date1.compareTo(date2)); // Output: -1
```

***

### isAfter()

> **isAfter**(`other`): `boolean`

Checks if this date is after the specified date.

#### Parameters

##### other

`LocalDate`

The date to compare to.

#### Returns

`boolean`

True if this date is after the specified date.

#### Example

```ts
const date1 = LocalDate.of(2023, 1, 2);
const date2 = LocalDate.of(2023, 1, 1);
print(date1.isAfter(date2)); // Output: true
```

***

### isBefore()

> **isBefore**(`other`): `boolean`

Checks if this date is before the specified date.

#### Parameters

##### other

`LocalDate`

The date to compare to.

#### Returns

`boolean`

True if this date is before the specified date.

#### Example

```ts
const date1 = LocalDate.of(2023, 1, 1);
const date2 = LocalDate.of(2023, 1, 2);
print(date1.isBefore(date2)); // Output: true
```

***

### isEqual()

> **isEqual**(`other`): `boolean`

Checks if this date is equal to the specified date.

#### Parameters

##### other

`LocalDate`

The date to compare to.

#### Returns

`boolean`

True if the dates are equal.

#### Example

```ts
const date1 = LocalDate.of(2023, 1, 1);
const date2 = LocalDate.of(2023, 1, 1);
print(date1.isEqual(date2)); // Output: true
```

***

### minus()

> **minus**(`duration`): `LocalDate`

Returns a copy of this date minus the specified duration.

#### Parameters

##### duration

[`Duration`](Duration.md)

The duration to subtract.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
// Assuming we have a LocalDate instance 'date' and a Duration 'duration'
const newDate = date.minus(duration);
```

***

### minusDays()

> **minusDays**(`days`): `LocalDate`

Returns a copy of this date minus the specified number of days.

#### Parameters

##### days

`number`

The number of days to subtract.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 10);
const newDate = date.minusDays(5);
print(newDate.toString()); // Output: "2023-01-05"
```

***

### minusMonths()

> **minusMonths**(`months`): `LocalDate`

Returns a copy of this date minus the specified number of months.

#### Parameters

##### months

`number`

The number of months to subtract.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 3, 15);
const newDate = date.minusMonths(2);
print(newDate.toString()); // Output: "2023-01-15"
```

***

### minusWeeks()

> **minusWeeks**(`weeks`): `LocalDate`

Returns a copy of this date minus the specified number of weeks.

#### Parameters

##### weeks

`number`

The number of weeks to subtract.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 15);
const newDate = date.minusWeeks(2);
print(newDate.toString()); // Output: "2023-01-01"
```

***

### minusYears()

> **minusYears**(`years`): `LocalDate`

Returns a copy of this date minus the specified number of years.

#### Parameters

##### years

`number`

The number of years to subtract.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 1);
const newDate = date.minusYears(3);
print(newDate.toString()); // Output: "2020-01-01"
```

***

### plus()

> **plus**(`duration`): `LocalDate`

Returns a copy of this date plus the specified duration.

#### Parameters

##### duration

[`Duration`](Duration.md)

The duration to add.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
// Assuming we have a LocalDate instance 'date' and a Duration 'duration'
const newDate = date.plus(duration);
```

***

### plusDays()

> **plusDays**(`days`): `LocalDate`

Returns a copy of this date plus the specified number of days.

#### Parameters

##### days

`number`

The number of days to add.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 1);
const newDate = date.plusDays(5);
print(newDate.toString()); // Output: "2023-01-06"
```

***

### plusMonths()

> **plusMonths**(`months`): `LocalDate`

Returns a copy of this date plus the specified number of months.

#### Parameters

##### months

`number`

The number of months to add.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 15);
const newDate = date.plusMonths(2);
print(newDate.toString()); // Output: "2023-03-15"
```

***

### plusWeeks()

> **plusWeeks**(`weeks`): `LocalDate`

Returns a copy of this date plus the specified number of weeks.

#### Parameters

##### weeks

`number`

The number of weeks to add.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 1);
const newDate = date.plusWeeks(2);
print(newDate.toString()); // Output: "2023-01-15"
```

***

### plusYears()

> **plusYears**(`years`): `LocalDate`

Returns a copy of this date plus the specified number of years.

#### Parameters

##### years

`number`

The number of years to add.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 1);
const newDate = date.plusYears(3);
print(newDate.toString()); // Output: "2026-01-01"
```

***

### toString()

> **toString**(`format?`): `string`

Converts this date to a string representation.

#### Parameters

##### format?

`string`

The format to use for the string representation.

#### Returns

`string`

A string representation of this date.

#### Example

```ts
const date = LocalDate.of(2023, 1, 15);
print(date.toString()); // Output: "2023-01-15"
print(date.toString("dd/MM/uuuu")); // Output: "15/01/2023"
```

***

### withDayOfMonth()

> **withDayOfMonth**(`day`): `LocalDate`

Returns a copy of this date with the day of month altered.

#### Parameters

##### day

`number`

The new day of the month.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 15);
const newDate = date.withDayOfMonth(20);
print(newDate.toString()); // Output: "2023-01-20"
```

***

### withMonth()

> **withMonth**(`month`): `LocalDate`

Returns a copy of this date with the month altered.

#### Parameters

##### month

`number`

The new month of the year.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 15);
const newDate = date.withMonth(3);
print(newDate.toString()); // Output: "2023-03-15"
```

***

### withYear()

> **withYear**(`year`): `LocalDate`

Returns a copy of this date with the year altered.

#### Parameters

##### year

`number`

The new year.

#### Returns

`LocalDate`

A new LocalDate representing the result.

#### Example

```ts
const date = LocalDate.of(2023, 1, 15);
const newDate = date.withYear(2024);
print(newDate.toString()); // Output: "2024-01-15"
```

***

### now()

> `static` **now**(`zone?`): `LocalDate`

Obtains the current date from the system clock in the default time-zone.

#### Parameters

##### zone?

[`TimeZone`](TimeZone.md)

The time zone to use, defaults to the system default if not specified.

#### Returns

`LocalDate`

The current date.

#### Example

```ts
const today = LocalDate.now();
print(today.toString()); // Output: Current date, e.g., "2023-09-03"
```

***

### of()

> `static` **of**(`year`, `month?`, `day?`): `LocalDate`

Obtains an instance of LocalDate from year, month, and day values.

#### Parameters

##### year

`number`

The year to represent.

##### month?

`number`

The month-of-year to represent, from 1 (January) to 12 (December).

##### day?

`number`

The day-of-month to represent, from 1 to 31.

#### Returns

`LocalDate`

The local date.

#### Example

```ts
const date = LocalDate.of(2023, 9, 3);
print(date.toString()); // Output: "2023-09-03"
```

***

### parse()

> `static` **parse**(`value`, `format?`): `LocalDate`

Obtains an instance of LocalDate from a text string using a specific format.

#### Parameters

##### value

`string`

The text to parse.

##### format?

`string`

The format to use for parsing.
See [Java Documentation for DateTimeFormatter](https://docs.oracle.com/en%2Fjava%2Fjavase%2F22%2Fdocs%2Fapi%2F%2F/java.base/java/time/format/DateTimeFormatter.html) for more information on supported date and time patterns.

#### Returns

`LocalDate`

The parsed local date.

#### Example

```ts
const date = LocalDate.parse("2023-09-03");
print(date.toString()); // Output: "2023-09-03"

const customDate = LocalDate.parse("03/09/2023", "dd/MM/uuuu");
print(customDate.toString()); // Output: "2023-09-03"
```
