---
description: Single-execution timer fired at a specific point in time.
---

---
id: py-TimerOnce
---

# TimerOnce

Single-execution timer fired at a specific point in time.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `When` | [`DateTime`](../classes/DateTime.md) | The exact time to fire the timer |
| `Payload` | `any` | Data passed to the timer callback |

```python
{
    "When": DateTime.now().plus_days(1).with_hour(9).with_minute(0),
    "Payload": {"jobType": "daily-report"}
}
```

---

## See Also

- [`TimerChoice`](TimerChoice.md) — Container for timer configurations
- [`TimerResponse`](TimerResponse.md) — Register timers via the Timer API
