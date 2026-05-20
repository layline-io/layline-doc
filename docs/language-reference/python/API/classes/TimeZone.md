---
id: py-TimeZone
---

# TimeZone

Represents a timezone for use with [`DateTime`](DateTime.md), [`LocalDate`](LocalDate.md), and [`Time`](Time.md). Timezones handle daylight saving time transitions and regional offsets automatically.

---

## At a Glance

```python
# Common timezones
utc = TimeZone.UTC()
berlin = TimeZone.of('Europe/Berlin')
tokyo = TimeZone.of('Asia/Tokyo')
ny = TimeZone.of('America/New_York')

# System default
local = TimeZone.systemDefault()

# Use with DateTime
now = DateTime.now(berlin)
stream.log_info(f"Berlin: {now.toString()}")
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | `str` | Timezone identifier (e.g., `"Europe/Berlin"`) |
| `displayName` | `str` | Human-readable name (e.g., `"Central European Time"`) |

```python
tz = TimeZone.of('America/New_York')
stream.log_info(tz.id)           # "America/New_York"
stream.log_info(tz.displayName)  # "Eastern Time"
```

---

## Static Properties

### UTC()

The UTC timezone.

```python
utc = TimeZone.UTC()
stream.log_info(utc.id)  # "UTC"
```

---

## Methods

### of(zoneId)

Returns a TimeZone by its identifier.

| Parameter | Type | Description |
|-----------|------|-------------|
| `zoneId` | `str` | Timezone ID (e.g., `"Europe/Berlin"`, `"America/New_York"`) |

**Returns:** `TimeZone`

```python
tz = TimeZone.of('Asia/Tokyo')
```

:::tip Finding Timezone IDs
Use standard IANA timezone IDs. A complete list is available at [howtodoinjava.com](https://howtodoinjava.com/java/date-time/supported-zone-ids-offsets/).
:::

### systemDefault()

Returns the system's default timezone.

**Returns:** `TimeZone`

```python
local = TimeZone.systemDefault()
stream.log_info(f"Running in: {local.id}")
```

---

## See Also

- [`DateTime`](DateTime.md) — Use with DateTime.now(zone) and atZone(zone)
- [`ZoneOffset`](ZoneOffset.md) — Fixed UTC offset (e.g., +05:30)
