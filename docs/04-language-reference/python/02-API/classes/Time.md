# Class: Time

Represents a time without a date or time zone.
This is an abstract class and cannot be instantiated directly.
Use the static methods to create Time instances.

## Abstract

## Properties

### hour

> **hour**: int

The hour component of the time.

#### Example

```python
time = Time.of(14, 30)
print(time.hour)  # 14
```

### minute

> **minute**: int

The minute component of the time.

#### Example

```python
time = Time.of(14, 30)
print(time.minute)  # 30
```

### nano

> **nano**: int

The nanosecond component of the time.

#### Example

```python
time = Time.of(14, 30, 15, 123456789)
print(time.nano)  # 123456789
```

### second

> **second**: int

The second component of the time.

#### Example

```python
time = Time.of(14, 30, 15)
print(time.second)  # 15
```

## Methods

### add()

> **add**(duration: Duration) -> [Time](Time.md)

Adds a duration to this time.

#### Parameters

- **duration**: Duration

  The duration to add.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the duration added.

#### Example

```python
time = Time.of(10, 30)
new_time = time.add(Duration.ofHours(2))
print(new_time.toString())  # Output: "12:30:00"
```

### compareTo()

> **compareTo**(other: [Time](Time.md)) -> int

Compares this time to another time.

#### Parameters

- **other**: [Time](Time.md)

  The other time to compare to.

#### Returns

int - A negative integer, zero, or a positive integer as this time is before, equal to, or after the specified time.

#### Example

```python
time1 = Time.of(10, 30)
time2 = Time.of(11, 0)
print(time1.compareTo(time2))  # Output: -1
```

### isAfter()

> **isAfter**(other: [Time](Time.md)) -> bool

Checks if this time is after the specified time.

#### Parameters

- **other**: [Time](Time.md)

  The time to compare to.

#### Returns

bool - True if this time is after the specified time, False otherwise.

#### Example

```python
time1 = Time.of(10, 30)
time2 = Time.of(9, 0)
print(time1.isAfter(time2))  # Output: True
```

### isBefore()

> **isBefore**(other: [Time](Time.md)) -> bool

Checks if this time is before the specified time.

#### Parameters

- **other**: [Time](Time.md)

  The time to compare to.

#### Returns

bool - True if this time is before the specified time, False otherwise.

#### Example

```python
time1 = Time.of(10, 30)
time2 = Time.of(11, 0)
print(time1.isBefore(time2))  # Output: True
```

### isEqual()

> **isEqual**(other: [Time](Time.md)) -> bool

Checks if this time is equal to the specified time.

#### Parameters

- **other**: [Time](Time.md)

  The time to compare to.

#### Returns

bool - True if this time is equal to the specified time, False otherwise.

#### Example

```python
time1 = Time.of(10, 30)
time2 = Time.of(10, 30)
print(time1.isEqual(time2))  # Output: True
```

### minus()

> **minus**(duration: Duration) -> [Time](Time.md)

Subtracts a duration from this time.

#### Parameters

- **duration**: Duration

  The duration to subtract.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the duration subtracted.

#### Example

```python
time = Time.of(10, 30)
new_time = time.minus(Duration.ofHours(1))
print(new_time.toString())  # Output: "09:30:00"
```

### minusHours()

> **minusHours**(hours: int) -> [Time](Time.md)

Returns a copy of this time with the specified number of hours subtracted.

#### Parameters

- **hours**: int

  The number of hours to subtract.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the hours subtracted.

#### Example

```python
time = Time.of(10, 30)
new_time = time.minusHours(2)
print(new_time.toString())  # Output: "08:30:00"
```

### minusMinutes()

> **minusMinutes**(minutes: int) -> [Time](Time.md)

Returns a copy of this time with the specified number of minutes subtracted.

#### Parameters

- **minutes**: int

  The number of minutes to subtract.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the minutes subtracted.

#### Example

```python
time = Time.of(10, 30)
new_time = time.minusMinutes(15)
print(new_time.toString())  # Output: "10:15:00"
```

### minusNanos()

> **minusNanos**(nanos: int) -> [Time](Time.md)

Returns a copy of this time with the specified number of nanoseconds subtracted.

#### Parameters

- **nanos**: int

  The number of nanoseconds to subtract.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the nanoseconds subtracted.

#### Example

```python
time = Time.of(10, 30, 0, 500000000)
new_time = time.minusNanos(250000000)
print(new_time.toString())  # Output: "10:30:00.250000000"
```

### minusSeconds()

> **minusSeconds**(seconds: int) -> [Time](Time.md)

Returns a copy of this time with the specified number of seconds subtracted.

#### Parameters

- **seconds**: int

  The number of seconds to subtract.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the seconds subtracted.

#### Example

```python
time = Time.of(10, 30, 30)
new_time = time.minusSeconds(15)
print(new_time.toString())  # Output: "10:30:15"
```

### plus()

> **plus**(duration: Duration) -> [Time](Time.md)

Adds a duration to this time.

#### Parameters

- **duration**: Duration

  The duration to add.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the duration added.

#### Example

```python
time = Time.of(10, 30)
new_time = time.plus(Duration.ofHours(2))
print(new_time.toString())  # Output: "12:30:00"
```

### plusHours()

> **plusHours**(hours: int) -> [Time](Time.md)

Returns a copy of this time with the specified number of hours added.

#### Parameters

- **hours**: int

  The number of hours to add.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the hours added.

#### Example

```python
time = Time.of(10, 30)
new_time = time.plusHours(2)
print(new_time.toString())  # Output: "12:30:00"
```

### plusMinutes()

> **plusMinutes**(minutes: int) -> [Time](Time.md)

Returns a copy of this time with the specified number of minutes added.

#### Parameters

- **minutes**: int

  The number of minutes to add.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the minutes added.

#### Example

```python
time = Time.of(10, 30)
new_time = time.plusMinutes(15)
print(new_time.toString())  # Output: "10:45:00"
```

### plusNanos()

> **plusNanos**(nanos: int) -> [Time](Time.md)

Returns a copy of this time with the specified number of nanoseconds added.

#### Parameters

- **nanos**: int

  The number of nanoseconds to add.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the nanoseconds added.

#### Example

```python
time = Time.of(10, 30, 0, 500000000)
new_time = time.plusNanos(250000000)
print(new_time.toString())  # Output: "10:30:00.750000000"
```

### plusSeconds()

> **plusSeconds**(seconds: int) -> [Time](Time.md)

Returns a copy of this time with the specified number of seconds added.

#### Parameters

- **seconds**: int

  The number of seconds to add.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the seconds added.

#### Example

```python
time = Time.of(10, 30, 30)
new_time = time.plusSeconds(15)
print(new_time.toString())  # Output: "10:30:45"
```

### toString()

> **toString**(format: str = None) -> str

Returns a string representation of this time.

#### Parameters

- **format**: str, optional

  The format to use for the string representation.

#### Returns

str - A string representation of this time.

#### Example

```python
time = Time.of(10, 30, 15)
print(time.toString())  # Output: "10:30:15"
print(time.toString("HH:mm"))  # Output: "10:30"
```

### withHour()

> **withHour**(hour: int) -> [Time](Time.md)

Returns a copy of this time with the hour changed.

#### Parameters

- **hour**: int

  The new hour value (0-23).

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the updated hour.

#### Example

```python
time = Time.of(10, 30)
new_time = time.withHour(14)
print(new_time.toString())  # Output: "14:30:00"
```

### withMinute()

> **withMinute**(minute: int) -> [Time](Time.md)

Returns a copy of this time with the minute changed.

#### Parameters

- **minute**: int

  The new minute value (0-59).

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the updated minute.

#### Example

```python
time = Time.of(10, 30)
new_time = time.withMinute(45)
print(new_time.toString())  # Output: "10:45:00"
```

### withNano()

> **withNano**(nano: int) -> [Time](Time.md)

Returns a copy of this time with the nanosecond changed.

#### Parameters

- **nano**: int

  The new nanosecond value (0-999,999,999).

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the updated nanosecond.

#### Example

```python
time = Time.of(10, 30, 0, 0)
new_time = time.withNano(500000000)
print(new_time.toString())  # Output: "10:30:00.500000000"
```

### withSecond()

> **withSecond**(second: int) -> [Time](Time.md)

Returns a copy of this time with the second changed.

#### Parameters

- **second**: int

  The new second value (0-59).

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance with the updated second.

#### Example

```python
time = Time.of(10, 30, 0)
new_time = time.withSecond(30)
print(new_time.toString())  # Output: "10:30:30"
```

### now()

> @staticmethod
> **now**(zone: TimeZone = None) -> [Time](Time.md)

Returns the current time.

#### Parameters

- **zone**: TimeZone, optional

  The time zone to use.

#### Returns

[Time](Time.md) - The current time.

#### Example

```python
current_time = Time.now()
print(current_time.toString())  # Output: Current time, e.g., "15:30:45"
```

### of()

> @staticmethod
> **of**(hour: int, minute: int = 0, second: int = 0, nano: int = 0) -> [Time](Time.md)

Creates a new [Time](Time.md) instance with the specified hour, minute, second, and nanosecond.

#### Parameters

- **hour**: int

  The hour of the day (0-23).

- **minute**: int, optional

  The minute of the hour (0-59). Default is 0.

- **second**: int, optional

  The second of the minute (0-59). Default is 0.

- **nano**: int, optional

  The nanosecond of the second (0-999,999,999). Default is 0.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance.

#### Example

```python
time1 = Time.of(10, 30)
print(time1.toString())  # Output: "10:30:00"

time2 = Time.of(14, 45, 30, 500000000)
print(time2.toString())  # Output: "14:45:30.500000000"
```

### parse()

> @staticmethod
> **parse**(value: str, format: str = None) -> [Time](Time.md)

Parses a string representation of time into a [Time](Time.md) instance.

#### Parameters

- **value**: str

  The string to parse.

- **format**: str, optional

  The format of the input string.

#### Returns

[Time](Time.md) - A new [Time](Time.md) instance parsed from the input string.

#### Example

```python
time1 = Time.parse("10:30")
print(time1.toString())  # Output: "10:30:00"

time2 = Time.parse("14:45:30", "HH:mm:ss")
print(time2.toString())  # Output: "14:45:30"
```
