# Class: TimerService

The [TimerService Asset](/docs/03-assets/services/asset-service-timer.md) facilitates a way to schedule and execute tasks at specified intervals and with given payloads.
It is configured via the Configuration Center. To create and manage scheduled tasks, it provides a number of functions which are described in this class.

The way layline.io exposes this class is by providing an object `services` within a Python Asset.
This is then used to access linked Services and their configured functions.

**Let's look at this using an example on how to schedule a timer:**

```python
services.TimerService.ScheduleFixedRate({
    'Group': 'MyGroup',
    'Period': 60000,
    'Name': 'MyTimer',
    'Payload': '{"message": "Hello, world!"}'
})
```
This will schedule a timer to run every minute and execute the payload `{"message": "Hello, world!"}`. Every timer must at least have 
1. a `Group` name, which represents an existing Timer Group as configured in the Configuration Center, and 
2. a `Name`, which must be unique within the Timer Group.

You can always reference an existing timer by the combination of `Group` and `Name`. This is important to know when you want to cancel or retrieve a timer, for example.

**Important note on how the timer behaves for repeating timers like `ScheduleFixedRate` and `ScheduleCron`**

If you schedule a timer with a period of 60000, it becomes due every minute. This does not guarantee that it will be executed **exactly** every minute.
Existing timers are checked for being due in the interval specified by the Timer Group which you have configured. 
Let's say you have configured a Timer Group with a check interval of 1 minute. This means that the timer is checked every minute to see if it is due.
If you have a time that should fire every 10 seconds, it will still only fire once every minute due to the Timer Group check interval.

It also needs to be noted, that the timer is not rescheduled, it is only checked whether it is due for execution. 
Looking at the mentioned example with a period of 10 seconds, the timer would be due every 10 seconds, but due to the Timer Group check interval of 1 minute, it will only fire once every minute.
**You may expect that the timer may fire 6 times in that one minute, but it will only fire once.**

Make sure you set the Timer Group check interval to a value that is shorter than the repeating period of the timer if you want to have the timer fire as scheduled.
You should find the right balance between the Timer Group check interval and the repeating period of the timer based on your use case, and to ensure to avoid extra strain on the system.
 
**Receiving the timer payload**
In order to receive the payload of the timer, you need to define a Workflow with a Frame Input Processor, which in turn is linked to a Timer Source, which in turn is linked to the Timer Service.

In there you would receive the timer as a message which you can then process as you need to.
Here is an example of how the timer message can be processed within a Workflow that receives the timer message:

```python
# We are defining a function "check_payload" that will take payload parameters 
# as input parameters
def on_message():
    if message.data:
        stream.log_info("Payload received: " + message.data['Payload'])
        # This is an example is received as a message from the Timer Service
        # message.data = {
        #     "Group":"TimerGroup",
        #     "Name":"TEST-05",
        #     "NumberOfTry":1,
        #     "FireTime":"2025-02-26T15:00:27.006+01:00",
        #     "ScheduledFireTime":"2025-02-26T15:00:27+01:00",
        #     "Payload":"MyPayload"
        # }
        #
        # Do something with the payload
        # ...
        # Emitting the message to the "Committer" Processor will commit the message.
        # Otherwise the message will be rescheduled again for the configured period of time (depends on the type of schedule).
        stream.emit(message, OUTPUT_PORT)  # -> Send message to "Committer" Processor
```

The script above reveals the structure of the message that is received from the Timer Service.

## Abstract

## Methods

### CancelTimer()

> **CancelTimer**(`params`): [`TimerResponse`](../interfaces/TimerResponse.md)

Cancels a timer based on the provided group and name.

This method allows you to cancel a timer that has been previously created using the `ScheduleOnce`, `ScheduleFixedRate`, or `ScheduleCron` methods.
The timer is identified by its group and name.

#### Parameters

• **params**

The parameters for the timer cancellation.

• **params['Group']**: `str`

The timer group of the timer to cancel.

• **params['Name']**: `str`

The name of the timer to cancel.

#### Returns

[`TimerResponse`](../interfaces/TimerResponse.md)

A TimerResponse object containing the result of the timer cancellation, null if the timer was not found.

#### Example

```python
# Cancel a timer
response = services.TimerService.CancelTimer({
    'Group': 'MyGroup',
    'Name': 'MyTimer'
})
```

***

### GetTimer()

> **GetTimer**(`params`): [`TimerResponse`](../interfaces/TimerResponse.md)

Retrieves a timer based on the provided group and name.

This method allows you to retrieve a timer that has been previously created using the `ScheduleOnce`, `ScheduleFixedRate`, or `ScheduleCron` methods.
The timer is identified by its group and name.

#### Parameters

• **params**

The parameters for the timer retrieval.

• **params['Group']**: `str`

The timer group of the timer to retrieve.

• **params['Name']**: `str`

The name of the timer to retrieve.

#### Returns

[`TimerResponse`](../interfaces/TimerResponse.md)

A TimerResponse object containing the result of the timer retrieval, None if the timer was not found.

#### Example

```python
# Retrieve a timer
response = services.TimerService.GetTimer({
    'Group': 'MyGroup',
    'Name': 'MyTimer'
})
```

***

### GetTimers()

> **GetTimers**(`params`): [`TimerResponse`](../interfaces/TimerResponse.md)[]

Retrieves all timers in a range and with applied filters.

This method allows you to retrieve all timers that have been previously created using the `create_timer` method.

#### Parameters

• **params**

The parameters for the timer retrieval.

• **params['FromIdx']**: `int`

The index of the first timers to retrieve.

• **params['Group']**: `str`

The timer group of the timers to retrieve.

• **params['NameFilter']?**: `str`

Optional name filter to apply to the timer retrieval. 
The filter works as a "contains" filter and is case-sensitive.

• **params['PayloadTypeFilter']?**: `str`

Optional payload type filter to apply to the timer retrieval. 
The payload type is set when creating the timer using one of the `ScheduleOnce`, `ScheduleFixedRate`, or `ScheduleCron` methods and derived off of the payload type. 
It could be any type available within the layline.io platform.

• **params['ToIdx']**: `int`

The index of the last timers to retrieve.

• **params['TypeFilter']?**: `str`

Optional timer type filter to apply to the timer retrieval. 
The filter works as a "contains" filter and is case-sensitive. Possible timer values are either `Once`, `FixedRate`, or `Cron`.

#### Returns

[`TimerResponse`](../interfaces/TimerResponse.md)[]

An array of TimerResponse objects containing the result of the timer retrieval. Empty array if no timers were found.

#### Example

```python
# Retrieve all timers which match the filter criteria
response = services.TimerService.GetTimers({
    'Group': 'MyGroup',
    'FromIdx': 0,
    'ToIdx': 10,
    'NameFilter': 'MyTimer',
    'TypeFilter': 'MyType',
    'PayloadTypeFilter': 'System.String'
})
```

***

### ScheduleCron()

> **ScheduleCron**(`params`): `None` \| `Exception`

Creates a timer that runs at a specific time based on a cron expression.
The cron job is identified by its group and name, which are specified in the `ScheduleCron` call.

#### Parameters

• **params**

The parameters for the cron job scheduling.

• **params['Expression']**: `str`

The cron expression to schedule the cron job.
Example: `0 0 * * *` which means every day at 00:00.

• **params['Group']**: `str`

The group of the cron job to schedule.

• **params['Name']**: `str`

The name of the cron job to schedule.

• **params['Payload']**: `str`

The payload of the cron job. The type is automatically derived from the payload type.

• **params['StartAt']?**: [`datetime`](https://docs.python.org/3/library/datetime.html)

The start time of the cron job.

#### Returns

`None` \| `Exception`

A None response or an Exception object.

#### Example

```python
# Schedule a cron job
response = services.TimerService.ScheduleCron({
    'Group': 'MyGroup',
    'Expression': '0 0 * * *',
    'Name': 'MyCronJob',
    'StartAt': datetime.datetime(2024, 1, 1, 0, 0, 0),
    'Payload': '{"message": "Hello, world!"}'
})
```

***

### ScheduleFixedRate()

> **ScheduleFixedRate**(`params`): `None` \| `Exception`

Schedules a timer to run repeatedly at a specific interval.

This method allows you to schedule a timer to run repeatedly at a specific interval.
The timer is identified by its group and name, which are specified in the `ScheduleFixedRate` call.

#### Parameters

• **params**

The parameters for the timer scheduling.

• **params['Group']**: `str`

The group of the timer to schedule.

• **params['Name']**: `str`

The name of the timer to schedule.

• **params['Payload']**: `str`

The payload of the timer. The type is automatically derived from the payload type.

• **params['Period']**: `int`

The repeat interval in milliseconds.

• **params['StartAt']?**: [`datetime`](https://docs.python.org/3/library/datetime.html)

The start time of the timer.

#### Returns

`None`

#### Throws

`Error`
In case the cron job could not be scheduled.

#### Example

```python
# Schedule a timer
response = services.TimerService.ScheduleFixedRate({
    'Group': 'MyGroup',
    'Period': 60000,
    'Name': 'MyTimer',
    'Payload': '{"message": "Hello, world!"}',
    'StartAt': datetime.datetime(2024, 1, 1, 0, 0, 0)
})
```

***

### ScheduleOnce()

> **ScheduleOnce**(`params`): `None` \| `Exception`

Schedules a timer to run once at a specific time.

This method allows you to schedule a timer to run once at a specific time.
The timer is identified by its group and name, which are specified in the `ScheduleOnce` call.

#### Parameters

• **params**

The parameters for the timer scheduling.

• **params['Group']**: `str`

The group of the timer to schedule.

• **params['Name']**: `str`

The name of the timer to schedule.

• **params['Payload']**: `str`

The payload of the timer. The type is automatically derived from the payload type.

• **params['When']**: [`datetime`](https://docs.python.org/3/library/datetime.html)

The time to schedule the timer.

#### Returns

`None`

A None response or an Exception object.

#### Throws

`Error`

In case the cron job could not be scheduled.

#### Example

```python
# Schedule a timer
response = services.TimerService.ScheduleOnce({
    'Group': 'MyGroup',
    'When': datetime.datetime(2024, 1, 1, 0, 0, 0),
    'Name': 'MyTimer',
    'Payload': '{"message": "Hello, world!"}'
})
```
