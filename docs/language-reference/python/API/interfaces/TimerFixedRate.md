---
description: Recurring timer that fires at a fixed interval.
---

---
id: py-TimerFixedRate
---

# TimerFixedRate

Recurring timer that fires at a fixed interval.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `Period` | `int` | Interval in milliseconds |
| `Payload` | `any` | Data passed to the timer callback |
| `StartAt` | [`DateTime`](../classes/DateTime.md) | Optional — delay first execution until this time |

```python
{
    "Period": 60000,               # Every 60 seconds
    "Payload": {"jobType": "heartbeat"},
    "StartAt": DateTime.now().plus_minutes(5)
}
```

---

## See Also

- [`TimerChoice`](TimerChoice.md) — Container for timer configurations
- [`TimerResponse`](TimerResponse.md) — Register timers via the Timer API
