---
description: Union of timer configurations. Use one of `Cron`, `FixedRate`, or `Once` when defining a timer.
---

---
id: py-TimerChoice
---

# TimerChoice

Union of timer configurations. Use one of `Cron`, `FixedRate`, or `Once` when defining a timer.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `Cron` | [`TimerCron`](TimerCron.md) | Recurring timer driven by a cron expression |
| `FixedRate` | [`TimerFixedRate`](TimerFixedRate.md) | Recurring timer at a fixed interval |
| `Once` | [`TimerOnce`](TimerOnce.md) | Single execution at a specific time |

---

## See Also

- [`TimerResponse`](TimerResponse.md) — Register timers via the Timer API
