# Time

Represents a time without a date or time zone.
This is an abstract class and cannot be instantiated directly.
Use the static methods to create Time instances.

## Properties

### hour

> **hour**: `number`

The hour component of the time.

#### Example

```ts
const time = Time.of(14, 30);
print(time.hour); // 14
```

***

### minute

> **minute**: `number`

The minute component of the time.

#### Example

```ts
const time = Time.of(14, 30);
print(time.minute); // 30
```

***

### nano

> **nano**: `number`

The nanosecond component of the time.

#### Example

```ts
const time = Time.of(14, 30, 15, 123456789);
print(time.nano); // 123456789
```

***

### second

> **second**: `number`

The second component of the time.

#### Example

```ts
const time = Time.of(14, 30, 15);
print(time.second); // 15
```

## Methods

### add()

> **add**(`duration`): `Time`

Adds a duration to this time.

#### Parameters

##### duration

[`Duration`](Duration.md)

The duration to add.

#### Returns

`Time`

A new Time instance with the duration added.

#### Example

```ts
const time = Time.of(10, 30);
const newTime = time.add(Duration.ofHours(2));
print(newTime.toString()); // Output: "12:30:00"
```

***

### compareTo()

> **compareTo**(`other`): `number`

Compares this time to another time.

#### Parameters

##### other

`Time`

The other time to compare to.

#### Returns

`number`

A negative integer, zero, or a positive integer as this time is before, equal to, or after the specified time.

#### Example

```ts
const time1 = Time.of(10, 30);
const time2 = Time.of(11, 0);
print(time1.compareTo(time2)); // Output: -1
```

***

### isAfter()

> **isAfter**(`other`): `boolean`

Checks if this time is after the specified time.

#### Parameters

##### other

`Time`

The time to compare to.

#### Returns

`boolean`

true if this time is after the specified time, false otherwise.

#### Example

```ts
const time1 = Time.of(10, 30);
const time2 = Time.of(9, 0);
print(time1.isAfter(time2)); // Output: true
```

***

### isBefore()

> **isBefore**(`other`): `boolean`

Checks if this time is before the specified time.

#### Parameters

##### other

`Time`

The time to compare to.

#### Returns

`boolean`

true if this time is before the specified time, false otherwise.

#### Example

```ts
const time1 = Time.of(10, 30);
const time2 = Time.of(11, 0);
print(time1.isBefore(time2)); // Output: true
```

***

### isEqual()

> **isEqual**(`other`): `boolean`

Checks if this time is equal to the specified time.

#### Parameters

##### other

`Time`

The time to compare to.

#### Returns

`boolean`

true if this time is equal to the specified time, false otherwise.

#### Example

```ts
const time1 = Time.of(10, 30);
const time2 = Time.of(10, 30);
print(time1.isEqual(time2)); // Output: true
```

***

### minus()

> **minus**(`duration`): `Time`

Subtracts a duration from this time.

#### Parameters

##### duration

[`Duration`](Duration.md)

The duration to subtract.

#### Returns

`Time`

A new Time instance with the duration subtracted.

#### Example

```ts
const time = Time.of(10, 30);
const newTime = time.minus(Duration.ofHours(1));
print(newTime.toString()); // Output: "09:30:00"
```

***

### minusHours()

> **minusHours**(`hours`): `Time`

Returns a copy of this time with the specified number of hours subtracted.

#### Parameters

##### hours

`number`

The number of hours to subtract.

#### Returns

`Time`

A new Time instance with the hours subtracted.

#### Example

```ts
const time = Time.of(10, 30);
const newTime = time.minusHours(2);
print(newTime.toString()); // Output: "08:30:00"
```

***

### minusMinutes()

> **minusMinutes**(`minutes`): `Time`

Returns a copy of this time with the specified number of minutes subtracted.

#### Parameters

##### minutes

`number`

The number of minutes to subtract.

#### Returns

`Time`

A new Time instance with the minutes subtracted.

#### Example

```ts
const time = Time.of(10, 30);
const newTime = time.minusMinutes(15);
print(newTime.toString()); // Output: "10:15:00"
```

***

### minusNanos()

> **minusNanos**(`nanos`): `Time`

Returns a copy of this time with the specified number of nanoseconds subtracted.

#### Parameters

##### nanos

`number`

The number of nanoseconds to subtract.

#### Returns

`Time`

A new Time instance with the nanoseconds subtracted.

#### Example

```ts
const time = Time.of(10, 30, 0, 500000000);
const newTime = time.minusNanos(250000000);
print(newTime.toString()); // Output: "10:30:00.250000000"
```

***

### minusSeconds()

> **minusSeconds**(`seconds`): `Time`

Returns a copy of this time with the specified number of seconds subtracted.

#### Parameters

##### seconds

`number`

The number of seconds to subtract.

#### Returns

`Time`

A new Time instance with the seconds subtracted.

#### Example

```ts
const time = Time.of(10, 30, 30);
const newTime = time.minusSeconds(15);
print(newTime.toString()); // Output: "10:30:15"
```

***

### plus()

> **plus**(`duration`): `Time`

Adds a duration to this time.

#### Parameters

##### duration

[`Duration`](Duration.md)

The duration to add.

#### Returns

`Time`

A new Time instance with the duration added.

#### Example

```ts
const time = Time.of(10, 30);
const newTime = time.plus(Duration.ofHours(2));
print(newTime.toString()); // Output: "12:30:00"
```

***

### plusHours()

> **plusHours**(`hours`): `Time`

Returns a copy of this time with the specified number of hours added.

#### Parameters

##### hours

`number`

The number of hours to add.

#### Returns

`Time`

A new Time instance with the hours added.

#### Example

```ts
const time = Time.of(10, 30);
const newTime = time.plusHours(2);
print(newTime.toString()); // Output: "12:30:00"
```

***

### plusMinutes()

> **plusMinutes**(`minutes`): `Time`

Returns a copy of this time with the specified number of minutes added.

#### Parameters

##### minutes

`number`

The number of minutes to add.

#### Returns

`Time`

A new Time instance with the minutes added.

#### Example

```ts
const time = Time.of(10, 30);
const newTime = time.plusMinutes(15);
print(newTime.toString()); // Output: "10:45:00"
```

***

### plusNanos()

> **plusNanos**(`nanos`): `Time`

Returns a copy of this time with the specified number of nanoseconds added.

#### Parameters

##### nanos

`number`

The number of nanoseconds to add.

#### Returns

`Time`

A new Time instance with the nanoseconds added.

#### Example

```ts
const time = Time.of(10, 30, 0, 500000000);
const newTime = time.plusNanos(250000000);
print(newTime.toString()); // Output: "10:30:00.750000000"
```

***

### plusSeconds()

> **plusSeconds**(`seconds`): `Time`

Returns a copy of this time with the specified number of seconds added.

#### Parameters

##### seconds

`number`

The number of seconds to add.

#### Returns

`Time`

A new Time instance with the seconds added.

#### Example

```ts
const time = Time.of(10, 30, 30);
const newTime = time.plusSeconds(15);
print(newTime.toString()); // Output: "10:30:45"
```

***

### toString()

> **toString**(`format?`): `string`

Returns a string representation of this time.

#### Parameters

##### format?

`string`

The format to use for the string representation.

#### Returns

`string`

A string representation of this time.

#### Example

```ts
const time = Time.of(10, 30, 15);
print(time.toString()); // Output: "10:30:15"
print(time.toString("HH:mm")); // Output: "10:30"
```

***

### withHour()

> **withHour**(`hour`): `Time`

Returns a copy of this time with the hour changed.

#### Parameters

##### hour

`number`

The new hour value (0-23).

#### Returns

`Time`

A new Time instance with the updated hour.

#### Example

```ts
const time = Time.of(10, 30);
const newTime = time.withHour(14);
print(newTime.toString()); // Output: "14:30:00"
```

***

### withMinute()

> **withMinute**(`minute`): `Time`

Returns a copy of this time with the minute changed.

#### Parameters

##### minute

`number`

The new minute value (0-59).

#### Returns

`Time`

A new Time instance with the updated minute.

#### Example

```ts
const time = Time.of(10, 30);
const newTime = time.withMinute(45);
print(newTime.toString()); // Output: "10:45:00"
```

***

### withNano()

> **withNano**(`nano`): `Time`

Returns a copy of this time with the nanosecond changed.

#### Parameters

##### nano

`number`

The new nanosecond value (0-999,999,999).

#### Returns

`Time`

A new Time instance with the updated nanosecond.

#### Example

```ts
const time = Time.of(10, 30, 0, 0);
const newTime = time.withNano(500000000);
print(newTime.toString()); // Output: "10:30:00.500000000"
```

***

### withSecond()

> **withSecond**(`second`): `Time`

Returns a copy of this time with the second changed.

#### Parameters

##### second

`number`

The new second value (0-59).

#### Returns

`Time`

A new Time instance with the updated second.

#### Example

```ts
const time = Time.of(10, 30, 0);
const newTime = time.withSecond(30);
print(newTime.toString()); // Output: "10:30:30"
```

***

### now()

> `static` **now**(`zone?`): `Time`

Returns the current time.

#### Parameters

##### zone?

[`TimeZone`](TimeZone.md)

The time zone to use (optional).

#### Returns

`Time`

The current time.

#### Example

```ts
const currentTime = Time.now();
print(currentTime.toString()); // Output: Current time, e.g., "15:30:45"
```

***

### of()

> `static` **of**(`hour`, `minute?`, `second?`, `nano?`): `Time`

Creates a new Time instance with the specified hour, minute, second, and nanosecond.

#### Parameters

##### hour

`number`

The hour of the day (0-23).

##### minute?

`number`

The minute of the hour (0-59).

##### second?

`number`

The second of the minute (0-59).

##### nano?

`number`

The nanosecond of the second (0-999,999,999).

#### Returns

`Time`

A new Time instance.

#### Example

```ts
const time1 = Time.of(10, 30);
print(time1.toString()); // Output: "10:30:00"

const time2 = Time.of(14, 45, 30, 500000000);
print(time2.toString()); // Output: "14:45:30.500000000"
```

***

### parse()

> `static` **parse**(`value`, `format?`): `Time`

Parses a string representation of time into a Time instance.

#### Parameters

##### value

`string`

The string to parse.

##### format?

`string`

The format of the input string (optional).

#### Returns

`Time`

A new Time instance parsed from the input string.

#### Example

```ts
const time1 = Time.parse("10:30");
print(time1.toString()); // Output: "10:30:00"

const time2 = Time.parse("14:45:30", "HH:mm:ss");
print(time2.toString()); // Output: "14:45:30"
```
