# Duration

Represents a duration of time, which can be positive or negative.
This is an abstract class and cannot be instantiated directly.
Use static methods to create Duration instances.

## Constructors

### Constructor

> **new Duration**(): `Duration`

#### Returns

`Duration`

## Properties

### days

> **days**: `number`

The number of days in the duration.

#### Example

```ts
const duration = Duration.ofDays(5);
print(duration.days); // Outputs: 5
```

***

### hours

> **hours**: `number`

The number of hours in the duration.

#### Example

```ts
const duration = Duration.ofHours(12);
print(duration.hours); // Outputs: 12
```

***

### minutes

> **minutes**: `number`

The number of minutes in the duration.

#### Example

```ts
const duration = Duration.ofMinutes(45);
print(duration.minutes); // Outputs: 45
```

***

### nanos

> **nanos**: `number`

The number of nanoseconds in the duration.

#### Example

```ts
const duration = Duration.ofNano(1000);
print(duration.nanos); // Outputs: 1000
```

***

### seconds

> **seconds**: `number`

The number of seconds in the duration.

#### Example

```ts
const duration = Duration.ofSeconds(60);
print(duration.seconds); // Outputs: 60
```

## Methods

### abs()

> **abs**(): `Duration`

Returns the absolute value of this duration.

#### Returns

`Duration`

A new Duration representing the absolute value of this duration.

#### Example

```ts
const negativeDuration = Duration.ofDays(-1);
const absoluteDuration = negativeDuration.abs();
print(absoluteDuration.days); // 1
```

***

### addTo()

> **addTo**(`temporal`): [`Temporal`](../interfaces/Temporal.md)

Adds this duration to the given temporal object.

#### Parameters

##### temporal

[`Temporal`](../interfaces/Temporal.md)

The temporal object to add this duration to.

#### Returns

[`Temporal`](../interfaces/Temporal.md)

A new temporal object with this duration added.

#### Example

```ts
const duration = Duration.ofHours(2);
const date = DateTime.parse('2023-01-01T00:00:00Z');
const newDate = duration.addTo(date);
print(newDate.toISOString()); // '2023-01-01T02:00:00.000Z'
```

***

### isNegative()

> **isNegative**(): `boolean`

Checks if this duration is negative.

#### Returns

`boolean`

True if this duration is negative, false otherwise.

#### Example

```ts
const negativeDuration = Duration.ofDays(-1);
print(negativeDuration.isNegative()); // true
```

***

### isZero()

> **isZero**(): `boolean`

Checks if this duration is zero.

#### Returns

`boolean`

True if this duration is zero, false otherwise.

#### Example

```ts
const zeroDuration = Duration.ofSeconds(0);
print(zeroDuration.isZero()); // true
```

***

### minus()

> **minus**(`duration`): `Duration`

Subtracts the specified duration from this duration.

#### Parameters

##### duration

`Duration`

The duration to subtract.

#### Returns

`Duration`

A new Duration representing the difference.

#### Example

```ts
const duration1 = Duration.ofDays(2);
const duration2 = Duration.ofHours(12);
const difference = duration1.minus(duration2);
print(difference.days); // 1
print(difference.hours); // 12
```

***

### minusDays()

> **minusDays**(`days`): `Duration`

Subtracts the specified number of days from this duration.

#### Parameters

##### days

`number`

The number of days to subtract.

#### Returns

`Duration`

A new Duration with the days subtracted.

#### Example

```ts
const duration = Duration.ofDays(3);
const newDuration = duration.minusDays(1);
print(newDuration.days); // 2
```

***

### minusHours()

> **minusHours**(`hours`): `Duration`

Subtracts the specified number of hours from this duration.

#### Parameters

##### hours

`number`

The number of hours to subtract.

#### Returns

`Duration`

A new Duration with the hours subtracted.

#### Example

```ts
const duration = Duration.ofHours(5);
const newDuration = duration.minusHours(2);
print(newDuration.hours); // 3
```

***

### minusMillis()

> **minusMillis**(`millis`): `Duration`

Subtracts the specified number of milliseconds from this duration.

#### Parameters

##### millis

`number`

The number of milliseconds to subtract.

#### Returns

`Duration`

A new Duration with the milliseconds subtracted.

#### Example

```ts
const duration = Duration.ofSeconds(2);
const newDuration = duration.minusMillis(500);
print(newDuration.seconds); // 1
print(newDuration.nanos); // 500000000
```

***

### minusMinutes()

> **minusMinutes**(`minutes`): `Duration`

Subtracts the specified number of minutes from this duration.

#### Parameters

##### minutes

`number`

The number of minutes to subtract.

#### Returns

`Duration`

A new Duration with the minutes subtracted.

#### Example

```ts
const duration = Duration.ofMinutes(60);
const newDuration = duration.minusMinutes(30);
print(newDuration.minutes); // 30
```

***

### minusNanos()

> **minusNanos**(`nanos`): `Duration`

Subtracts the specified number of nanoseconds from this duration.

#### Parameters

##### nanos

`number`

The number of nanoseconds to subtract.

#### Returns

`Duration`

A new Duration with the nanoseconds subtracted.

#### Example

```ts
const duration = Duration.ofNano(1000000000);
const newDuration = duration.minusNanos(500000000);
print(newDuration.nanos); // 500000000
```

***

### minusSeconds()

> **minusSeconds**(`seconds`): `Duration`

Subtracts the specified number of seconds from this duration.

#### Parameters

##### seconds

`number`

The number of seconds to subtract.

#### Returns

`Duration`

A new Duration with the seconds subtracted.

#### Example

```ts
const duration = Duration.ofSeconds(60);
const newDuration = duration.minusSeconds(30);
print(newDuration.seconds); // 30
```

***

### negated()

> **negated**(): `Duration`

Returns a new Duration with the opposite sign of this duration.

#### Returns

`Duration`

A new Duration with the opposite sign.

#### Example

```ts
const duration = Duration.ofDays(1);
const negatedDuration = duration.negated();
print(negatedDuration.days); // -1
```

***

### plus()

> **plus**(`duration`): `Duration`

Adds the specified duration to this duration.

#### Parameters

##### duration

`Duration`

The duration to add.

#### Returns

`Duration`

A new Duration representing the sum.

#### Example

```ts
const duration1 = Duration.ofDays(1);
const duration2 = Duration.ofHours(12);
const sum = duration1.plus(duration2);
print(sum.days); // 1
print(sum.hours); // 12
```

***

### plusDays()

> **plusDays**(`days`): `Duration`

Adds the specified number of days to this duration.

#### Parameters

##### days

`number`

The number of days to add.

#### Returns

`Duration`

A new Duration with the days added.

#### Example

```ts
const duration = Duration.ofDays(1);
const newDuration = duration.plusDays(2);
print(newDuration.days); // 3
```

***

### plusHours()

> **plusHours**(`hours`): `Duration`

Adds the specified number of hours to this duration.

#### Parameters

##### hours

`number`

The number of hours to add.

#### Returns

`Duration`

A new Duration with the hours added.

#### Example

```ts
const duration = Duration.ofHours(1);
const newDuration = duration.plusHours(2);
print(newDuration.hours); // 3
```

***

### plusMillis()

> **plusMillis**(`millis`): `Duration`

Adds the specified number of milliseconds to this duration.

#### Parameters

##### millis

`number`

The number of milliseconds to add.

#### Returns

`Duration`

A new Duration with the milliseconds added.

#### Example

```ts
const duration = Duration.ofSeconds(1);
const newDuration = duration.plusMillis(500);
print(newDuration.seconds); // 1
print(newDuration.nanos); // 500000000
```

***

### plusMinutes()

> **plusMinutes**(`minutes`): `Duration`

Adds the specified number of minutes to this duration.

#### Parameters

##### minutes

`number`

The number of minutes to add.

#### Returns

`Duration`

A new Duration with the minutes added.

#### Example

```ts
const duration = Duration.ofMinutes(30);
const newDuration = duration.plusMinutes(15);
print(newDuration.minutes); // 45
```

***

### plusNanos()

> **plusNanos**(`nanos`): `Duration`

Adds the specified number of nanoseconds to this duration.

#### Parameters

##### nanos

`number`

The number of nanoseconds to add.

#### Returns

`Duration`

A new Duration with the nanoseconds added.

#### Example

```ts
const duration = Duration.ofNano(500000000);
const newDuration = duration.plusNanos(250000000);
print(newDuration.nanos); // 750000000
```

***

### plusSeconds()

> **plusSeconds**(`seconds`): `Duration`

Adds the specified number of seconds to this duration.

#### Parameters

##### seconds

`number`

The number of seconds to add.

#### Returns

`Duration`

A new Duration with the seconds added.

#### Example

```ts
const duration = Duration.ofSeconds(30);
const newDuration = duration.plusSeconds(15);
print(newDuration.seconds); // 45
```

***

### between()

> `static` **between**(`startInclusive`, `endInclusive`): `Duration`

Creates a Duration representing the time between two temporal objects.

#### Parameters

##### startInclusive

[`Temporal`](../interfaces/Temporal.md)

The start temporal object.

##### endInclusive

[`Temporal`](../interfaces/Temporal.md)

The end temporal object.

#### Returns

`Duration`

A Duration representing the time between start and end.

#### Static

#### Example

```ts
const start = DateTime.parse('2023-01-01T00:00:00Z');
const end = DateTime.parse('2023-01-02T12:30:45Z');
const duration = Duration.between(start, end);
print(duration.days); // 1
print(duration.hours); // 12
print(duration.minutes); // 30
print(duration.seconds); // 45
```

***

### ofDays()

> `static` **ofDays**(`days`): `Duration`

Creates a Duration representing the specified number of days.

#### Parameters

##### days

`number`

The number of days.

#### Returns

`Duration`

A Duration representing the specified number of days.

#### Static

#### Example

```ts
const duration = Duration.ofDays(5);
print(duration.days); // 5
```

***

### ofHours()

> `static` **ofHours**(`hours`): `Duration`

Creates a Duration representing the specified number of hours.

#### Parameters

##### hours

`number`

The number of hours.

#### Returns

`Duration`

A Duration representing the specified number of hours.

#### Static

#### Example

```ts
const duration = Duration.ofHours(3);
print(duration.hours); // 3
```

***

### ofMillis()

> `static` **ofMillis**(`millis`): `Duration`

Creates a Duration representing the specified number of milliseconds.

#### Parameters

##### millis

`number`

The number of milliseconds.

#### Returns

`Duration`

A Duration representing the specified number of milliseconds.

#### Static

#### Example

```ts
const duration = Duration.ofMillis(500);
print(duration.nanos); // 500000000
```

***

### ofMinutes()

> `static` **ofMinutes**(`minutes`): `Duration`

Creates a Duration representing the specified number of minutes.

#### Parameters

##### minutes

`number`

The number of minutes.

#### Returns

`Duration`

A Duration representing the specified number of minutes.

#### Static

#### Example

```ts
const duration = Duration.ofMinutes(45);
print(duration.minutes); // 45
```

***

### ofNanos()

> `static` **ofNanos**(`nano`): `Duration`

Creates a Duration representing the specified number of nanoseconds.

#### Parameters

##### nano

`number`

The number of nanoseconds.

#### Returns

`Duration`

A Duration representing the specified number of nanoseconds.

#### Static

#### Example

```ts
const duration = Duration.ofNanos(1000000);
print(duration.nanos); // 1000000
```

***

### ofSeconds()

> `static` **ofSeconds**(`seconds`): `Duration`

Creates a Duration representing the specified number of seconds.

#### Parameters

##### seconds

`number`

The number of seconds.

#### Returns

`Duration`

A Duration representing the specified number of seconds.

#### Static

#### Example

```ts
const duration = Duration.ofSeconds(30);
print(duration.seconds); // 30
```
