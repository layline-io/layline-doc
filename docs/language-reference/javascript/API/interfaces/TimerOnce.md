---
description: Single-execution timer fired at a specific point in time.
---

# TimerOnce

Single-execution timer fired at a specific point in time.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `When` | [`DateTime`](../classes/DateTime.md) | The exact time to fire the timer |
| `Payload` | `any` | Data passed to the timer callback |

```js
{
    When: DateTime.now().plusDays(1).withHour(9).withMinute(0),
    Payload: { jobType: 'daily-report' }
}
```

---

## See Also

- [`TimerChoice`](TimerChoice.md) — Container for timer configurations
- [`TimerResponse`](TimerResponse.md) — Register timers via the Timer API
