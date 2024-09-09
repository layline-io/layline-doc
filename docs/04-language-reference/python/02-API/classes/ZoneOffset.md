# Class: ZoneOffset

Represents a time zone offset from UTC.
A `ZoneOffset` defines the difference in hours and minutes from UTC for a particular time zone.

## Example

```python
# Creating a ZoneOffset for UTC+5:30
offset = ZoneOffset.of(5, 30)

# Using ZoneOffset with DateTime
date_time = DateTime.parse("2023-12-01 12:34:56", "uuuu-MM-dd HH:mm:ss")
date_time_with_offset = date_time.atZone(offset)
print(date_time_with_offset.toString())  # Outputs the DateTime with the specified ZoneOffset "2023-12-01T12:34:56+05:30"
```

## Constructors

### __init__()

> **__init__**() -> ZoneOffset

#### Returns

ZoneOffset

## Properties

### id

> **id**: str

The ID of the zone offset, typically in the format `+HH:MM` or `-HH:MM`.

#### Example

```python
offset = ZoneOffset.of(5, 30)
print(offset.id)  # Outputs: "+05:30"
```

### totalSeconds

> **totalSeconds**: int

The total offset in seconds from UTC.
This is calculated as `hours * 3600 + minutes * 60`.

#### Example

```python
offset = ZoneOffset.of(-7)
print(offset.totalSeconds)  # Outputs: -25200 (for UTC-7:00)
```

## Methods

### toString()

> **toString**() -> str

Returns the string representation of the zone offset.
The format will be `+HH:MM` or `-HH:MM`.

#### Returns

str - The string representation of the zone offset.

#### Example

```python
offset = ZoneOffset.of(2, 0)
print(offset.toString())  # Outputs: "+02:00"
```

### of()

> @staticmethod
> **of**(hour: int, minute: int = 0) -> ZoneOffset

Creates a `ZoneOffset` based on the provided hour and minute values.

#### Parameters

- **hour**: int - The hour component of the offset (can be negative for west of UTC).
- **minute**: int, optional - The minute component of the offset. Defaults to 0.

#### Returns

ZoneOffset - A `ZoneOffset` instance representing the specified offset.

#### Example

```python
# Create a ZoneOffset for UTC+5:30
offset = ZoneOffset.of(5, 30)

# Create a ZoneOffset for UTC-7:00
offset_negative = ZoneOffset.of(-7)
```
