---
description: JavaScript interface reference for layline.io — type definitions for EmailMessage, Temporal, Timer, and more.
---

# Interfaces

Contracts and type definitions for structured development — email structures, time-based abstractions, and timer configurations.

---

## Data Dictionary

| Interface | Description |
|-----------|-------------|
| [DataDictionaryTypes](DataDictionaryTypes.md) | Dynamically generated structure of a data dictionary. The available properties depend entirely on your project's data dictionary configuration and are resolved at runtime. |

## Email

| Interface | Description |
|-----------|-------------|
| [EmailMessage](EmailMessage.md) | Email structure used with `Email.send()`. |

## Date & Time

| Interface | Description |
|-----------|-------------|
| [Temporal](Temporal.md) | Base interface for date/time objects that support standard string formatting. |

## Timers

| Interface | Description |
|-----------|-------------|
| [TimerChoice](TimerChoice.md) | Union of timer configurations. Use one of `Cron`, `FixedRate`, or `Once` when defining a timer. |
| [TimerCron](TimerCron.md) | Recurring timer driven by a cron expression. |
| [TimerFixedRate](TimerFixedRate.md) | Recurring timer that fires at a fixed interval. |
| [TimerOnce](TimerOnce.md) | Single-execution timer fired at a specific point in time. |
| [TimerResponse](TimerResponse.md) | Timer registration structure used with `TimerService`. |
