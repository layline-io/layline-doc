---
description: JavaScript class reference for layline.io — Workflow, Processor, Stream, Message, Service, and more.
---

# Classes

The core building blocks of your Layline JavaScript applications — from data handling and time manipulation to workflow orchestration and external service integration.

---

## Data & Messaging

| Class | Description |
|-------|-------------|
| [Arith64](Arith64.md) | Performs correct 64-bit arithmetic and bitwise operations for large integers. |
| [CompressionUtils](CompressionUtils.md) | Utility class for compressing and decompressing data. |
| [DataDictionary](DataDictionary.md) | Navigate your data dictionary hierarchy through this property. The structure mirrors your project's format and data dictionary definitions. |
| [DataDictionaryEntity](DataDictionaryEntity.md) | Represents a single node in your data dictionary hierarchy for type-safe access to message fields. |
| [Message](Message.md) | The message payload. Its structure mirrors the data dictionary definition for this message type. |
| [PackedMessage](PackedMessage.md) | Restores the packed message to a full `Message` instance. |
| [StringUtils](StringUtils.md) | Utility class for common string operations: encoding, decoding, validation, and charset conversion. |

## Date & Time

| Class | Description |
|-------|-------------|
| [DateTime](DateTime.md) | Represents a point in time with date, time, and timezone offset information. |
| [Duration](Duration.md) | Represents an amount of time — days, hours, minutes, seconds, milliseconds, or nanoseconds. |
| [LocalDate](LocalDate.md) | Represents a date without time or timezone — just year, month, and day. |
| [Time](Time.md) | Represents a time of day without date or timezone — just hour, minute, second, and nanosecond. |
| [TimeZone](TimeZone.md) | Represents a timezone for use with `DateTime`, `LocalDate`, and `Time`, handling daylight saving time automatically. |
| [ZoneOffset](ZoneOffset.md) | Represents a fixed offset from UTC with no daylight saving time changes. |

## Workflow & Processing

| Class | Description |
|-------|-------------|
| [Counter](Counter.md) | A thread-safe counter for tracking numeric values — message counts, totals, or any incrementing/decrementing metric. |
| [JavaScriptProcessor](JavaScriptProcessor.md) | Defines the lifecycle hooks available in a JavaScript Asset — startup, message arrival, stream boundaries, and shutdown. |
| [Metrics](Metrics.md) | Retrieves or creates a counter metric. |
| [OutputPort](OutputPort.md) | Represents a connection from one processor to another within a workflow. |
| [Processor](Processor.md) | Provides access to the current processor's configuration and runtime properties. |
| [Stream](Stream.md) | Represents the current data stream being processed. |
| [Workflow](Workflow.md) | Provides access to the current workflow's metadata — its name and data dictionary. |

## Services & Integration

| Class | Description |
|-------|-------------|
| [Connection](Connection.md) | Represents an active link to a service (e.g., JDBC database, HTTP endpoint) with transaction support. |
| [Email](Email.md) | Send emails through a configured Email Service. |
| [Service](Service.md) | Services linked to your JavaScript Asset are available through the `services` object using their configured names. |
| [TimerService](TimerService.md) | Schedule and manage timers that trigger workflows at specific times or intervals. |
| [Vendor](Vendor.md) | Groups related `StatusCode` definitions together. |

## Status & Error Handling

| Class | Description |
|-------|-------------|
| [Status](Status.md) | Creates a Status instance from a vendor and status code. Additional arguments fill placeholder positions in the message template. |
| [StatusCode](StatusCode.md) | A single entry in a Resource Status Definition Asset — the template definition for a `Status`. |
| [StatusRegistry](StatusRegistry.md) | Provides access to all defined vendors and status codes in your project. |
