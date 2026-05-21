---
description: Severity levels for message status tracking. Used with [`Message.addStatus() and related methods.
---

---
id: py-Severity
---

# Severity

Severity levels for message status tracking. Used with [`Message.addStatus()`](../classes/Message.md) and related methods.

---

## At a Glance

```python
VENDOR = Status.getVendorByName('MyVendor')

if error:
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', value))
```

---

## Enumeration Members

| Member | Value | Description |
|--------|-------|-------------|
| `INFO` | `0` | Informational — no action required |
| `WARNING` | `1` | Potential issue — worth reviewing |
| `ERROR` | `2` | Processing error — may affect downstream handling |
| `FATAL` | `3` | Critical failure — typically stops processing |

---

## See Also

- [`Message`](../classes/Message.md) — Add and query status on messages
- [`Status`](../classes/Status.md) — Status object details
