---
id: py-TimerResponse
---

# TimerResponse

Timer registration structure used with [`TimerService`](../classes/TimerService.md).

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `Group` | `str` | Logical group name for the timer |
| `Name` | `str` | Unique identifier within the group |
| `Timer` | [`TimerChoice`](TimerChoice.md) | The timer configuration |

```python
TimerService.register({
    "Group": "maintenance",
    "Name":  "nightly-cleanup",
    "Timer": {
        "Cron": {
            "Expression": "0 2 * * *",
            "Payload": {"task": "cleanup"}
        }
    }
})
```

:::caution
The `Name` must be unique within its `Group`. Registering with the same `Group` + `Name` replaces the existing timer.
:::

---

## See Also

- [`TimerChoice`](TimerChoice.md) — Union of timer types
- [`TimerService`](../classes/TimerService.md) — Timer API class
