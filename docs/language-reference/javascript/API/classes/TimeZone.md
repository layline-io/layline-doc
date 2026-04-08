# TimeZone

The abstract TimeZone class is a class that represents time zones, and is helpful when doing calendar arithmetics across time zones.
It is used in conjunction with the [DateTime](DateTime.md), [Time](Time.md), and [LocalDate](LocalDate.md) classes.

## Properties

### displayName

> **displayName**: `string`

This is the display name of the time zone.

#### Example

```js
const timeZone = TimeZone.of('America/New_York');
// Returns the TimeZone instance for the time zone with the ID 'America/New_York'
timeZone.displayName; // Returns "Eastern Time"
```

***

### id

> **id**: `string`

This is the unique identifier of the time zone.

#### Example

```js
const timeZone = TimeZone.of('America/New_York');
// Returns the TimeZone instance for the time zone with the ID 'America/New_York'
timeZone.id; // Returns "America/New_York"
```

***

### UTC

> `static` **UTC**: `TimeZone`

Get the UTC time zone

#### Returns

#### Example

```js
const timeZone = TimeZone.UTC();
// Returns the UTC time zone
timeZone.displayName; // Returns "Coordinated Universal Time"
timeZone.id; // Returns "UTC"
```

## Methods

### of()

> `static` **of**(`zoneId`): `TimeZone`

Get the [displayName](#displayname) and [id](#id) and id of the time zone

#### Parameters

##### zoneId

`string`

The long name (!) of the time zone. You can find a good list of all available time zones [here](https://howtodoinjava.com/java/date-time/supported-zone-ids-offsets/).

#### Returns

`TimeZone`

#### Example

```js
const timeZone = TimeZone.of('America/New_York');
// Returns the TimeZone instance for the time zone with the ID 'America/New_York'
timeZone.displayName; // Returns "Eastern Time"
timeZone.id; // Returns "America/New_York"
```

***

### systemDefault()

> `static` **systemDefault**(): `TimeZone`

Get the system default time zone

#### Returns

`TimeZone`

The system default time zone

#### Example

```js
const timeZone = TimeZone.systemDefault();
// Returns the system default time zone
timeZone.displayName; // Returns the display name of the system default time zone, e.g. "Eastern Time"
timeZone.id; // Returns the ID of the system default time zone, e.g. "America/New_York"
```
