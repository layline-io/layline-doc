# Temporal

Base interface for date/time objects that support standard string formatting.

Implemented by [`DateTime`](../classes/DateTime.md) and [`LocalDate`](../classes/LocalDate.md).

---

## Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `toISOString()` | `string` | ISO 8601 representation |
| `toString()` | `string` | Human-readable string representation |

```js
const dt = DateTime.now();

dt.toISOString();  // "2024-09-03T12:34:56.789Z"
dt.toString();     // "2024-09-03T12:34:56.789Z"
```
