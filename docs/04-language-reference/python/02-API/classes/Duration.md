# Class: Duration

Represents a duration of time, which can be positive or negative.
This is an abstract class and cannot be instantiated directly.
Use static methods to create Duration instances.

## Abstract

## Properties

### days

> **days**: int

The number of days in the duration.

#### Example

```python
duration = Duration.ofDays(5)
print(duration.days)  # Output: 5
```

### hours

> **hours**: int

The number of hours in the duration.

#### Example

```python
duration = Duration.ofHours(12)
print(duration.hours)  # Output: 12
```

### minutes

> **minutes**: int

The number of minutes in the duration.

#### Example

```python
duration = Duration.ofMinutes(45)
print(duration.minutes)  # Output: 45
```

### nanos

> **nanos**: int

The number of nanoseconds in the duration.

#### Example

```python
duration = Duration.ofNano(1000)
print(duration.nanos)  # Output: 1000
```

### seconds

> **seconds**: int

The number of seconds in the duration.

#### Example

```python
duration = Duration.ofSeconds(60)
print(duration.seconds)  # Output: 60
```

## Methods

### abs()

> **abs**() -> Duration

Returns the absolute value of this duration.

#### Returns

Duration - A new Duration representing the absolute value of this duration.

#### Example

```python
negative_duration = Duration.ofDays(-1)
absolute_duration = negative_duration.abs()
print(absolute_duration.days)  # Output: 1
```

### addTo()

> **addTo**(temporal: Temporal) -> Temporal

Adds this duration to the given temporal object.

#### Parameters

- **temporal**: Temporal - The temporal object to add this duration to.

#### Returns

Temporal - A new temporal object with this duration added.

#### Example

```python
duration = Duration.ofHours(2)
date = DateTime.parse("2023-01-01 00:00:00", "uuuu-MM-dd HH:mm:ss")
new_date = duration.addTo(date)
print(new_date.toString())  # Output: '2023-01-01T02:00:00.000Z'
```

### isNegative()

> **isNegative**() -> bool

Checks if this duration is negative.

#### Returns

bool - True if this duration is negative, False otherwise.

#### Example

```python
negative_duration = Duration.ofDays(-1)
print(negative_duration.isNegative())  # Output: True
```

### isZero()

> **isZero**() -> bool

Checks if this duration is zero.

#### Returns

bool - True if this duration is zero, False otherwise.

#### Example

```python
zero_duration = Duration.ofSeconds(0)
print(zero_duration.isZero())  # Output: True
```

### minus()

> **minus**(duration: Duration) -> Duration

Subtracts the specified duration from this duration.

#### Parameters

- **duration**: Duration - The duration to subtract.

#### Returns

Duration - A new Duration representing the difference.

#### Example

```python
duration1 = Duration.ofDays(2)
duration2 = Duration.ofHours(12)
difference = duration1.minus(duration2)
print(difference.days)    # Output: 1
print(difference.hours)   # Output: 12
```

### minusDays()

> **minusDays**(days: int) -> Duration

Subtracts the specified number of days from this duration.

#### Parameters

- **days**: int - The number of days to subtract.

#### Returns

Duration - A new Duration with the days subtracted.

#### Example

```python
duration = Duration.ofDays(3)
new_duration = duration.minusDays(1)
print(new_duration.days)  # Output: 2
```

### minusHours()

> **minusHours**(hours: int) -> Duration

Subtracts the specified number of hours from this duration.

#### Parameters

- **hours**: int - The number of hours to subtract.

#### Returns

Duration - A new Duration with the hours subtracted.

#### Example

```python
duration = Duration.ofHours(5)
new_duration = duration.minusHours(2)
print(new_duration.hours)  # Output: 3
```

### minusMillis()

> **minusMillis**(millis: int) -> Duration

Subtracts the specified number of milliseconds from this duration.

#### Parameters

- **millis**: int - The number of milliseconds to subtract.

#### Returns

Duration - A new Duration with the milliseconds subtracted.

#### Example

```python
duration = Duration.ofSeconds(2)
new_duration = duration.minusMillis(500)
print(new_duration.seconds)  # Output: 1
print(new_duration.nanos)   # Output: 500000000
```

### minusMinutes()

> **minusMinutes**(minutes: int) -> Duration

Subtracts the specified number of minutes from this duration.

#### Parameters

- **minutes**: int - The number of minutes to subtract.

#### Returns

Duration - A new Duration with the minutes subtracted.

#### Example

```python
duration = Duration.ofMinutes(60)
new_duration = duration.minusMinutes(30)
print(new_duration.minutes)  # Output: 30
```

### minusNanos()

> **minusNanos**(nanos: int) -> Duration

Subtracts the specified number of nanoseconds from this duration.

#### Parameters

- **nanos**: int - The number of nanoseconds to subtract.

#### Returns

Duration - A new Duration with the nanoseconds subtracted.

#### Example

```python
duration = Duration.ofNano(1000000000)
new_duration = duration.minusNanos(500000000)
print(new_duration.nanos)  # Output: 500000000
```

### minusSeconds()

> **minusSeconds**(seconds: int) -> Duration

Subtracts the specified number of seconds from this duration.

#### Parameters

- **seconds**: int - The number of seconds to subtract.

#### Returns

Duration - A new Duration with the seconds subtracted.

#### Example

```python
duration = Duration.ofSeconds(60)
new_duration = duration.minusSeconds(30)
print(new_duration.seconds)  # Output: 30
```

### negated()

> **negated**() -> Duration

Returns a new Duration with the opposite sign of this duration.

#### Returns

Duration - A new Duration with the opposite sign.

#### Example

```python
duration = Duration.ofDays(1)
negated_duration = duration.negated()
print(negated_duration.days)  # Output: -1
```

### plus()

> **plus**(duration: Duration) -> Duration

Adds the specified duration to this duration.

#### Parameters

- **duration**: Duration - The duration to add.

#### Returns

Duration - A new Duration representing the sum.

#### Example

```python
duration1 = Duration.ofDays(1)
duration2 = Duration.ofHours(12)
sum_duration = duration1.plus(duration2)
print(sum_duration.days)   # Output: 1
print(sum_duration.hours)  # Output: 12
```

### plusDays()

> **plusDays**(days: int) -> Duration

Adds the specified number of days to this duration.

#### Parameters

- **days**: int - The number of days to add.

#### Returns

Duration - A new Duration with the days added.

#### Example

```python
duration = Duration.ofDays(1)
new_duration = duration.plusDays(2)
print(new_duration.days)  # Output: 3
```

### plusHours()

> **plusHours**(hours: int) -> Duration

Adds the specified number of hours to this duration.

#### Parameters

- **hours**: int - The number of hours to add.

#### Returns

Duration - A new Duration with the hours added.

#### Example

```python
duration = Duration.ofHours(1)
new_duration = duration.plusHours(2)
print(new_duration.hours)  # Output: 3
```

### plusMillis()

> **plusMillis**(millis: int) -> Duration

Adds the specified number of milliseconds to this duration.

#### Parameters

- **millis**: int - The number of milliseconds to add.

#### Returns

Duration - A new Duration with the milliseconds added.

#### Example

```python
duration = Duration.ofSeconds(1)
new_duration = duration.plusMillis(500)
print(new_duration.seconds)  # Output: 1
print(new_duration.nanos)   # Output: 500000000
```

### plusMinutes()

> **plusMinutes**(minutes: int) -> Duration

Adds the specified number of minutes to this duration.

#### Parameters

- **minutes**: int - The number of minutes to add.

#### Returns

Duration - A new Duration with the minutes added.

#### Example

```python
duration = Duration.ofMinutes(30)
new_duration = duration.plusMinutes(15)
print(new_duration.minutes)  # Output: 45
```

### plusNanos()

> **plusNanos**(nanos: int) -> Duration

Adds the specified number of nanoseconds to this duration.

#### Parameters

- **nanos**: int - The number of nanoseconds to add.

#### Returns

Duration - A new Duration with the nanoseconds added.

#### Example

```python
duration = Duration.ofNano(500000000)
new_duration = duration.plusNanos(250000000)
print(new_duration.nanos)  # Output: 750000000
```

### plusSeconds()

> **plusSeconds**(seconds: int) -> Duration

Adds the specified number of seconds to this duration.

#### Parameters

- **seconds**: int - The number of seconds to add.

#### Returns

Duration - A new Duration with the seconds added.

#### Example

```python
duration = Duration.ofSeconds(30)
new_duration = duration.plusSeconds(15)
print(new_duration.seconds)  # Output: 45
```

### between()

> @staticmethod
> **between**(startInclusive: Temporal, endInclusive: Temporal) -> Duration

Creates a Duration representing the time between two temporal objects.

#### Parameters

- **startInclusive**: Temporal - The start temporal object.
- **endInclusive**: Temporal - The end temporal object.

#### Returns

Duration - A Duration representing the time between start and end.

#### Example

```python
start = DateTime.parse("2023-01-01 00:00:00", "uuuu-MM-dd HH:mm:ss")
end = DateTime.parse("2023-01-02 12:30:45", "uuuu-MM-dd HH:mm:ss")
duration = Duration.between(start, end)
print(duration.days)      # Output: 1
print(duration.hours)     # Output: 12
print(duration.minutes)   # Output: 30
print(duration.seconds)   # Output: 45
```

### ofDays()

> @staticmethod
> **ofDays**(days: int) -> Duration

Creates a Duration representing the specified number of days.

#### Parameters

- **days**: int - The number of days.

#### Returns

Duration - A Duration representing the specified number of days.

#### Example

```python
duration = Duration.ofDays(5)
print(duration.days)  # Output: 5
```

### ofHours()

> @staticmethod
> **ofHours**(hours: int) -> Duration

Creates a Duration representing the specified number of hours.

#### Parameters

- **hours**: int - The number of hours.

#### Returns

Duration - A Duration representing the specified number of hours.

#### Example

```python
duration = Duration.ofHours(3)
print(duration.hours)  # Output: 3
```

### ofMillis()

> @staticmethod
> **ofMillis**(millis: int) -> Duration

Creates a Duration representing the specified number of milliseconds.

#### Parameters

- **millis**: int - The number of milliseconds.

#### Returns

Duration - A Duration representing the specified number of milliseconds.

#### Example

```python
duration = Duration.ofMillis(500)
print(duration.nanos)  # Output: 500000000
```

### ofMinutes()

> @staticmethod
> **ofMinutes**(minutes: int) -> Duration

Creates a Duration representing the specified number of minutes.

#### Parameters

- **minutes**: int - The number of minutes.

#### Returns

Duration - A Duration representing the specified number of minutes.

#### Example

```python
duration = Duration.ofMinutes(45)
print(duration.minutes)  # Output: 45
```

### ofNano()

> @staticmethod
> **ofNano**(nano: int) -> Duration

Creates a Duration representing the specified number of nanoseconds.

#### Parameters

- **nano**: int - The number of nanoseconds.

#### Returns

Duration - A Duration representing the specified number of nanoseconds.

#### Example

```python
duration = Duration.ofNano(1000000)
print(duration.nanos)  # Output: 1000000
```

### ofSeconds()

> @staticmethod
> **ofSeconds**(seconds: int) -> Duration

Creates a Duration representing the specified number of seconds.

#### Parameters

- **seconds**: int - The number of seconds.

#### Returns

Duration - A Duration representing the specified number of seconds.

#### Example

```python
duration = Duration.ofSeconds(30)
print(duration.seconds)  # Output: 30
```
