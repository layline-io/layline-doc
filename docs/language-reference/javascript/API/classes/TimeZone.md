# TimeZone

Represents a timezone for use with [`DateTime`](DateTime.md), [`LocalDate`](LocalDate.md), and [`Time`](Time.md). Timezones handle daylight saving time transitions and regional offsets automatically.

---

## At a Glance

```js
// Common timezones
const utc = TimeZone.UTC;
const berlin = TimeZone.of('Europe/Berlin');
const tokyo = TimeZone.of('Asia/Tokyo');
const ny = TimeZone.of('America/New_York');

// System default
const local = TimeZone.systemDefault();

// Use with DateTime
const now = DateTime.now(berlin);
stream.logInfo(`Berlin: ${now.toString()}`);
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Timezone identifier (e.g., `"Europe/Berlin"`) |
| `displayName` | `string` | Human-readable name (e.g., `"Central European Time"`) |

```js
const tz = TimeZone.of('America/New_York');
stream.logInfo(tz.id);           // "America/New_York"
stream.logInfo(tz.displayName);  // "Eastern Time"
```

---

## Static Properties

### UTC

The UTC timezone.

```js
const utc = TimeZone.UTC;
stream.logInfo(utc.id);  // "UTC"
```

---

## Methods

### of(zoneId)

Returns a TimeZone by its identifier.

| Parameter | Type | Description |
|-----------|------|-------------|
| `zoneId` | `string` | Timezone ID (e.g., `"Europe/Berlin"`, `"America/New_York"`) |

**Returns:** `TimeZone`

```js
const tz = TimeZone.of('Asia/Tokyo');
```

:::tip Finding Timezone IDs
Use standard IANA timezone IDs. A complete list is available at [howtodoinjava.com](https://howtodoinjava.com/java/date-time/supported-zone-ids-offsets/).
:::

### systemDefault()

Returns the system's default timezone.

**Returns:** `TimeZone`

```js
const local = TimeZone.systemDefault();
stream.logInfo(`Running in: ${local.id}`);
```

---

## See Also

- [`DateTime`](DateTime.md) — Use with DateTime.now(zone) and atZone(zone)
- [`ZoneOffset`](ZoneOffset.md) — Fixed UTC offset (e.g., +05:30)
