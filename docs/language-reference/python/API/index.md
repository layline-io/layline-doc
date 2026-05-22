---
description: Complete Python API reference for layline.io — classes, interfaces, enumerations, and variables for workflow scripting.
---

# Python API Reference

Welcome to the **Layline Python API** — your complete toolkit for building powerful workflow processors, services, and integrations in Python.

Whether you're manipulating data, managing streams, sending emails, or orchestrating complex workflows, this API provides everything you need to write clean, efficient Python code within the Layline platform.

---

## What's Inside

### 🔢 Enumerations

Define constants and typed values with these enumerations:

| Enumeration | Description |
|-------------|-------------|
| [JavaType](enumerations/JavaType.md) | Java type mappings for cross-platform compatibility |
| [Severity](enumerations/Severity.md) | Log and alert severity levels |

### 🏗️ Classes

The core building blocks of your applications — from data handling to workflow orchestration:

| Class | Purpose |
|-------|---------|
| [Arith64](classes/Arith64.md) | 64-bit arithmetic operations |
| [CompressionUtils](classes/CompressionUtils.md) | Data compression and decompression utilities |
| [Connection](classes/Connection.md) | Manage external connections |
| [Counter](classes/Counter.md) | Thread-safe counting mechanisms |
| [DataDictionary](classes/DataDictionary.md) | Structured data definitions and validation |
| [DataDictionaryEntity](classes/DataDictionaryEntity.md) | Individual entities within a data dictionary |
| [DataDictionaryTypes](classes/DataDictionaryTypes.md) | Type definitions for data dictionaries |
| [DateTime](classes/DateTime.md) | Date and time manipulation |
| [Duration](classes/Duration.md) | Time duration calculations |
| [Email](classes/Email.md) | Email composition and sending |
| [LocalDate](classes/LocalDate.md) | Locale-aware date handling |
| [Message](classes/Message.md) | Message creation and manipulation |
| [MessageNode](classes/MessageNode.md) | Message node structure for hierarchical data |
| [Metrics](classes/Metrics.md) | Performance and operational metrics |
| [OutputPort](classes/OutputPort.md) | Output port management for data flow |
| [PackedMessage](classes/PackedMessage.md) | Optimized message packing for efficiency |
| [Processor](classes/Processor.md) | Base processor functionality |
| [PythonProcessor](classes/PythonProcessor.md) | Base class for Python-based processors |
| [Service](classes/Service.md) | Service lifecycle management |
| [Status](classes/Status.md) | Status tracking and reporting |
| [StatusCode](classes/StatusCode.md) | Standardized status codes |
| [StatusRegistry](classes/StatusRegistry.md) | Centralized status management |
| [Stream](classes/Stream.md) | Stream processing and handling |
| [StringUtils](classes/StringUtils.md) | String manipulation utilities |
| [Time](classes/Time.md) | Time-specific operations |
| [TimerService](classes/TimerService.md) | Scheduling and timer-based execution |
| [TimeZone](classes/TimeZone.md) | Time zone conversions and handling |
| [Vendor](classes/Vendor.md) | Third-party vendor integrations |
| [Workflow](classes/Workflow.md) | Workflow orchestration and control |
| [ZoneOffset](classes/ZoneOffset.md) | Time zone offset calculations |

### 🔌 Interfaces

Contracts and type definitions for structured development:

| Interface | Used For |
|-----------|----------|
| [EmailMessage](interfaces/EmailMessage.md) | Email message structure |
| [Temporal](interfaces/Temporal.md) | Time-based abstractions |
| [TimerChoice](interfaces/TimerChoice.md) | Timer choice configurations |
| [TimerCron](interfaces/TimerCron.md) | Cron-based scheduling |
| [TimerFixedRate](interfaces/TimerFixedRate.md) | Fixed-rate timer setup |
| [TimerOnce](interfaces/TimerOnce.md) | One-time timer execution |
| [TimerResponse](interfaces/TimerResponse.md) | Timer callback responses |

### 📦 Global Variables

Instantly accessible objects available in your Python environment:

| Variable | Description |
|----------|-------------|
| [dataDictionary](variables/dataDictionary.md) | Access the global data dictionary |
| [message](variables/message.md) | Work with the current message |
| [metrics](variables/metrics.md) | Record and retrieve metrics |
| [processor](variables/processor.md) | Access the current processor context |
| [statusRegistry](variables/statusRegistry.md) | Manage and query status registry |
| [stream](variables/stream.md) | Handle streaming data |
| [workflow](variables/workflow.md) | Interact with the active workflow |

---

## Quick Tips

- **New to Layline?** Start with the [Workflow](classes/Workflow.md) and [Message](classes/Message.md) classes — they're the heart of most integrations.
- **Building a Python processor?** Use [PythonProcessor](classes/PythonProcessor.md) as your base class.
- **Working with schedules?** Check out [TimerService](classes/TimerService.md) and the timer interfaces for flexible scheduling options.
- **Need to track performance?** The [Metrics](classes/Metrics.md) class and [metrics](variables/metrics.md) variable make it easy to monitor your code.

---

*Explore each section above for detailed documentation, code examples, and best practices.*
