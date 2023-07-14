---
title: Input Message
description: Input Message Asset for handling ingestion of external messages.
tags:
- input
- message
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';

# Input Message

## Purpose

Defines input parameters to ingest data from a Timer Source.

This Asset is used within a Workflow definition.

![](.asset-input-message_images/0363922a.png "Asset Dependency Graph (Input Message)")

## Prerequisites

You need:
**A Timer Source**

* [Timer Source](/docs/assets/sources/asset-source-timer)

## Configuration

### Name & Description

![](.asset-input-message_images/2200e5f0.png "Name & Description (Input Message)")

**`Name`** : Name of the Asset. Whitespaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.


### Output Ports

![](.asset-input-message_images/37f935c3.png "Output Ports (Input Message)")

An input processor can only have one output port from which it sends ingested data downstream in the Workkflow.

A port can have a name and description. Names must exist and be unique within the processor.

### Termination Settings

Using termination settings you can control how layline.io should behave upon shutdown of a Workflow that this Asset is part of.
A Workflow shutdown at most goes through three phases:

1. Signalling shutdown: layline.io signals inputs that it wants to shut down.
2. Signalling abort: In case the shutdown was not confirmed, layline.io sends an abort request.
3. If the abort was not confirmed, layline.io terminates the input without further wait.

![](.asset-input-message_images/07cbe873.png "Termination Settings (Input Message)")

* **`Shutdown grace period [ms]`** : Time to wait for the input processor to gracefully confirm shutdown once a shutdown request has been received.

* **`Abort grace period [ms]`** : In case the shutdown signal was not confirmed in due time, an abort request will be issued.
  If the abort is not confirmed in the configured time interval, a hard termination will be issued. The abort timeout is consecutive to the shutdown timeout.

### Source

You need to assign a [Timer Source](/docs/assets/sources/asset-source-timer). 
The Timer Source defines when a message is triggered and what the content of that message is.

![](.asset-input-message_images/e8a26a3e.png "Timer Source (Input Message)")

### Failure Handling

Finally we have to define what should happen to the complete stream in case a problem is discovered.
We have two options here:

#### Rollback Stream

The complete stream processing will be rolled back, as much as this is possible.
This includes, for example signals to rollback database actions (DB rollback event issued), as well as deletion of temporary files.
Respective log messages will be generated to further analyze the cause of the issue.

![](.asset-input-kafka_images/fc088dc4.png "Stream Boundary Controller SavePoint (Input Kafka)")

#### Retry Stream

When setting to `Retry Stream`, the system will retry a failed action for a configured amount of times and in configured intervals.

![](.asset-input-kafka_images/d815210d.png "Stream Boundary Controller SavePoint (Input Kafka)")

**Stream Retry Settings:**

* **`Max. Retries`** : Number of times a failed read action should be retried.

* **`Min. backoff [ms]`** : The minimum number of milliseconds to wait in-between retries.

* **`Max. backoff [ms]`** : The maximum number of milliseconds to wait in-between retries.
  This number must be equal or greater than the `Min. backoff [ms]`.

  Let's assume we have set a min. backoff time of 60 seconds and a max backoff number 100 seconds with 3 retries.
  The system will then calculate three different timeouts ranging between 60 and 100 seconds.
  In our case that would be 60, 80 and 100 seconds.
  Or in other words, the system will wait for 60 seconds on the first retry, then 80 seconds between the first and second retry, and finally 100 seconds before the last retry.
  This allows us to delay retries with each retry. This is especially useful for problems which are related to failure in 3rd party interfaces (e.g. due to network issues), which experience show may be fixed only after a while.
  Let's say that there is a chance that a connection fails sometimes because of an unstable network.
  In that case we do not want to retry every second, but leave more time between each consecutive retry, until it finally works again (example).

## Related Topics

### Internal

* [Timer Source](/docs/assets/sources/asset-source-timer)

---

<WipDisclaimer></WipDisclaimer>
