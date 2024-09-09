# Class: TimeZone

The abstract TimeZone class is a class that represents time zones, and is helpful when doing calendar arithmetics across time zones.
It is used in conjunction with the [DateTime](DateTime.md), [Time](Time.md), and [LocalDate](LocalDate.md) classes.

## Abstract

## Properties

### displayName

> **displayName**: str

This is the display name of the time zone.

#### Example

```python
time_zone = TimeZone.of('America/New_York')
# Returns the TimeZone instance for the time zone with the ID 'America/New_York'
print(time_zone.displayName)  # Returns "Eastern Time"
```

### id

> **id**: str

This is the unique identifier of the time zone.

#### Example

```python
time_zone = TimeZone.of('America/New_York')
# Returns the TimeZone instance for the time zone with the ID 'America/New_York'
print(time_zone.id)  # Returns "America/New_York"
```

### UTC

> @staticmethod
> **UTC**() -> [TimeZone](TimeZone.md)

Get the UTC time zone

#### Example

```python
time_zone = TimeZone.UTC()
# Returns the UTC time zone
print(time_zone.displayName)  # Returns "Coordinated Universal Time"
print(time_zone.id)  # Returns "UTC"
```

## Methods

### of()

> @staticmethod
> **of**(zone_id: str) -> [TimeZone](TimeZone.md)

Get the [displayName](#displayname) and [id](#id) of the time zone

#### Parameters

- **zone_id**: str

  The long name (!) of the time zone. You can find a good list of all available time zones [here](https://howtodoinjava.com/java/date-time/supported-zone-ids-offsets/).

#### Returns

[TimeZone](TimeZone.md)

#### Example

```python
time_zone = TimeZone.of('America/New_York')
# Returns the TimeZone instance for the time zone with the ID 'America/New_York'
print(time_zone.displayName)  # Returns "Eastern Time"
print(time_zone.id)  # Returns "America/New_York"
```

### systemDefault()

> @staticmethod
> **systemDefault**() -> [TimeZone](TimeZone.md)

Get the system default time zone

#### Returns

[TimeZone](TimeZone.md) - The system default time zone

#### Example

```python
time_zone = TimeZone.systemDefault()
# Returns the system default time zone
print(time_zone.displayName)  # Returns the display name of the system default time zone, e.g. "Eastern Time"
print(time_zone.id)  # Returns the ID of the system default time zone, e.g. "America/New_York"
```
