# TimerFixedRate

Recurring timer that fires at a fixed interval.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `Period` | `BigInt` | Interval in milliseconds |
| `Payload` | `any` | Data passed to the timer callback |
| `StartAt` | [`DateTime`](../classes/DateTime.md) | Optional — delay first execution until this time |

```js
{
    Period: 60000n,               // Every 60 seconds
    Payload: { jobType: 'heartbeat' },
    StartAt: DateTime.now().plusMinutes(5)
}
```

---

## See Also

- [`TimerChoice`](TimerChoice.md) — Container for timer configurations
- [`TimerResponse`](TimerResponse.md) — Register timers via the Timer API
