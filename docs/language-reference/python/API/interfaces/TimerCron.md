---
id: py-TimerCron
---

# TimerCron

Recurring timer driven by a cron expression.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `Expression` | `str` | Cron expression (e.g., `"0 0 * * *"` for daily at midnight) |
| `Payload` | `any` | Data passed to the timer callback |
| `StartAt` | [`DateTime`](../classes/DateTime.md) | Optional — delay first execution until this time |

```python
{
    "Expression": "0 */6 * * *",   # Every 6 hours
    "Payload": {"jobType": "sync"},
    "StartAt": DateTime.now().plus_hours(1)
}
```

---

## See Also

- [`TimerChoice`](TimerChoice.md) — Container for timer configurations
- [`TimerResponse`](TimerResponse.md) — Register timers via the Timer API
