---
id: py-TimerService
---

# TimerService

Schedule and manage timers that trigger workflows at specific times or intervals. Timers are configured through a [Timer Service Asset](../../../../assets/workflow-assets/services/asset-service-timer.md) and accessed via the `services` object in Python.

Each timer belongs to a **Group** (defined in the UI) and has a unique **Name** within that group. Use these two fields to identify, retrieve, or cancel timers.

---

## At a Glance

```python
import datetime

# Schedule a one-time timer
services.TimerService.ScheduleOnce({
    'Group': 'MyGroup',
    'Name': 'CleanupTask',
    'When': datetime.datetime(2024, 12, 25, 2, 0, 0),
    'Payload': '{"action": "cleanup"}'
})

# Schedule a recurring timer (every 5 minutes)
services.TimerService.ScheduleFixedRate({
    'Group': 'MyGroup',
    'Name': 'Heartbeat',
    'Period': 300000,
    'Payload': '{"ping": true}'
})

# Cancel a timer
services.TimerService.CancelTimer({
    'Group': 'MyGroup',
    'Name': 'CleanupTask'
})
```

---

## Scheduling Methods

### ScheduleOnce(params)

Runs once at a specific time.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `str` | Timer group (must exist in UI) |
| `Name` | `str` | Unique name within the group |
| `When` | `datetime` | When to fire |
| `Payload` | `str` | Data passed to the timer message |

```python
import datetime

services.TimerService.ScheduleOnce({
    'Group': 'Maintenance',
    'Name': 'NightlyBackup',
    'When': datetime.datetime(2024, 12, 25, 2, 0, 0),
    'Payload': '{"type": "backup", "target": "database"}'
})
```

### ScheduleFixedRate(params)

Runs repeatedly at a fixed interval.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `str` | Timer group |
| `Name` | `str` | Unique name |
| `Period` | `int` | Interval in milliseconds |
| `Payload` | `str` | Data passed to timer message |
| `StartAt` (optional) | `datetime` | First execution time |

```python
services.TimerService.ScheduleFixedRate({
    'Group': 'Monitoring',
    'Name': 'HealthCheck',
    'Period': 60000,
    'Payload': '{"check": "health"}'
})
```

### ScheduleCron(params)

Runs on a cron schedule.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `str` | Timer group |
| `Name` | `str` | Unique name |
| `Expression` | `str` | Cron expression |
| `Payload` | `str` | Data passed to timer message |
| `StartAt` (optional) | `datetime` | Earliest start time |

```python
# Every day at 9:00 AM
services.TimerService.ScheduleCron({
    'Group': 'Business',
    'Name': 'MorningReport',
    'Expression': '0 9 * * *',
    'Payload': '{"report": "daily"}'
})
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
| `Group` | `str` | Timer group |
| `Name` | `str` | Timer name |

**Returns:** [`TimerResponse`](../interfaces/TimerResponse.md)

```python
response = services.TimerService.CancelTimer({
    'Group': 'Maintenance',
    'Name': 'NightlyBackup'
})
```

### GetTimer(params)

Retrieves information about a timer.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `str` | Timer group |
| `Name` | `str` | Timer name |

**Returns:** [`TimerResponse`](../interfaces/TimerResponse.md)

```python
timer = services.TimerService.GetTimer({
    'Group': 'Maintenance',
    'Name': 'NightlyBackup'
})
```

### GetTimers(params)

Lists timers with optional filters.

| Parameter | Type | Description |
|-----------|------|-------------|
| `Group` | `str` | Timer group |
| `FromIdx` | `int` | Start index |
| `ToIdx` | `int` | End index |
| `NameFilter` (optional) | `str` | Filter by name (contains, case-sensitive) |
| `TypeFilter` (optional) | `str` | Filter by type: `Once`, `FixedRate`, `Cron` |
| `PayloadTypeFilter` (optional) | `str` | Filter by payload type |

**Returns:** `List[`[`TimerResponse`](../interfaces/TimerResponse.md)`]`

```python
timers = services.TimerService.GetTimers({
    'Group': 'Maintenance',
    'FromIdx': 0,
    'ToIdx': 10,
    'TypeFilter': 'FixedRate'
})
```

---

## Receiving Timer Messages

Timers emit messages to a workflow via a **Timer Source** linked to a **Frame Input Processor**. The message structure:

```python
{
    'Group': 'TimerGroup',
    'Name': 'MyTimer',
    'NumberOfTry': 1,
    'FireTime': '2025-02-26T15:00:27.006+01:00',
    'ScheduledFireTime': '2025-02-26T15:00:27+01:00',
    'Payload': 'MyPayload'
}
```

```python
def on_message():
    if message.data:
        stream.log_info(f"Timer fired: {message.data['Name']}")
        stream.log_info(f"Payload: {message.data['Payload']}")

        # Process the timer payload
        if message.data['Payload'] == 'cleanup':
            run_cleanup()

        # Emit to committer to acknowledge
        stream.emit(message, OUTPUT_PORT)
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
