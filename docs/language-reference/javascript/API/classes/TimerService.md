# TimerService

Schedule and manage timers that trigger workflows at specific times or intervals. Timers are configured through a **Timer Service Asset** and accessed via the `services` object in JavaScript.

Each timer belongs to a **Group** (defined in the UI) and has a unique **Name** within that group. Use these two fields to identify, retrieve, or cancel timers.

---

## At a Glance

```js
// Schedule a one-time timer
services.TimerService.ScheduleOnce({
    Group: 'MyGroup',
    Name: 'CleanupTask',
    When: DateTime.now().plusHours(2),
    Payload: '{"action": "cleanup"}'
});

// Schedule a recurring timer (every 5 minutes)
services.TimerService.ScheduleFixedRate({
    Group: 'MyGroup',
    Name: 'Heartbeat',
    Period: 300000,
    Payload: '{"ping": true}'
});

// Cancel a timer
services.TimerService.CancelTimer({
    Group: 'MyGroup',
    Name: 'CleanupTask'
});
```

---

## Scheduling Methods

### ScheduleOnce(params)

Runs once at a specific time.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `string` | Timer group (must exist in UI) |
| `Name` | `string` | Unique name within the group |
| `When` | [`DateTime`](DateTime.md) | When to fire |
| `Payload` | `string` | Data passed to the timer message |

```js
services.TimerService.ScheduleOnce({
    Group: 'Maintenance',
    Name: 'NightlyBackup',
    When: DateTime.of(2024, 12, 25, 2, 0),  // 2:00 AM
    Payload: JSON.stringify({ type: 'backup', target: 'database' })
});
```

### ScheduleFixedRate(params)

Runs repeatedly at a fixed interval.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `string` | Timer group |
| `Name` | `string` | Unique name |
| `Period` | `number` | Interval in milliseconds |
| `Payload` | `string` | Data passed to timer message |
| `StartAt` (optional) | [`DateTime`](DateTime.md) | First execution time |

```js
services.TimerService.ScheduleFixedRate({
    Group: 'Monitoring',
    Name: 'HealthCheck',
    Period: 60000,  // Every minute
    Payload: JSON.stringify({ check: 'health' })
});
```

### ScheduleCron(params)

Runs on a cron schedule.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `string` | Timer group |
| `Name` | `string` | Unique name |
| `Expression` | `string` | Cron expression |
| `Payload` | `string` | Data passed to timer message |
| `StartAt` (optional) | [`DateTime`](DateTime.md) | Earliest start time |

```js
// Every day at 9:00 AM
services.TimerService.ScheduleCron({
    Group: 'Business',
    Name: 'MorningReport',
    Expression: '0 9 * * *',
    Payload: JSON.stringify({ report: 'daily' })
});
```

:::tip Cron Format
Standard 5-field cron: `minute hour day month dayOfWeek`
- `0 9 * * *` — Daily at 9:00 AM
- `0 */6 * * *` — Every 6 hours
- `0 0 * * 1` — Every Monday at midnight
:::

---

## Managing Timers

### CancelTimer(params)

Cancels a scheduled timer.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `string` | Timer group |
| `Name` | `string` | Timer name |

**Returns:** [`TimerResponse`](../interfaces/TimerResponse.md)

```js
const response = services.TimerService.CancelTimer({
    Group: 'Maintenance',
    Name: 'NightlyBackup'
});
```

### GetTimer(params)

Retrieves information about a timer.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `string` | Timer group |
| `Name` | `string` | Timer name |

**Returns:** [`TimerResponse`](../interfaces/TimerResponse.md)

```js
const timer = services.TimerService.GetTimer({
    Group: 'Maintenance',
    Name: 'NightlyBackup'
});
```

### GetTimers(params)

Lists timers with optional filters.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `string` | Timer group |
| `FromIdx` | `number` | Start index |
| `ToIdx` | `number` | End index |
| `NameFilter` (optional) | `string` | Filter by name (contains, case-sensitive) |
| `TypeFilter` (optional) | `string` | Filter by type: `Once`, `FixedRate`, `Cron` |
| `PayloadTypeFilter` (optional) | `string` | Filter by payload type |

**Returns:** [`TimerResponse`](../interfaces/TimerResponse.md)[]

```js
const timers = services.TimerService.GetTimers({
    Group: 'Maintenance',
    FromIdx: 0,
    ToIdx: 10,
    TypeFilter: 'FixedRate'
});
```

---

## Receiving Timer Messages

Timers emit messages to a workflow via a **Timer Source** linked to a **Frame Input Processor**. The message structure:

```js
{
    Group: "TimerGroup",
    Name: "MyTimer",
    NumberOfTry: 1,
    FireTime: "2025-02-26T15:00:27.006+01:00",
    ScheduledFireTime: "2025-02-26T15:00:27+01:00",
    Payload: "MyPayload"
}
```

```js
export function onMessage() {
    if (message.data) {
        stream.logInfo(`Timer fired: ${message.data.Name}`);
        stream.logInfo(`Payload: ${message.data.Payload}`);

        // Process the timer payload
        const payload = JSON.parse(message.data.Payload);
        if (payload.action === 'cleanup') {
            runCleanup();
        }

        // Emit to committer to acknowledge
        stream.emit(message, OUTPUT_PORT);
    }
}
```

---

## Important: Timer Check Interval

Timers are checked for being "due" at the interval configured in the **Timer Group**. If your timer should fire every 10 seconds but the Timer Group checks every minute, the timer will only fire once per minute.

**Rule:** Set the Timer Group check interval shorter than your shortest timer period.

---

## See Also

- [`TimerResponse`](../interfaces/TimerResponse.md) — Response from timer operations
- [`TimerChoice`](../interfaces/TimerChoice.md) — Timer configuration options
- [`DateTime`](DateTime.md) — For scheduling times
