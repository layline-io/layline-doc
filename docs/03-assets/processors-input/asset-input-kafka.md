---
title: Input Kafka
description: Input Kafka Asset. Use this to ingest data from a Kafka topic.
tags:
- input
- kafka
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';

# Input Kafka

## Purpose

Defines input parameters to ingest data from a Kafka topic.

This Asset is used within a Workflow definition.

![](.asset-input-kafka_images/30aa0966.png "Asset Dependency Graph (Input Kafka)")

## Prerequisites

You need:
**A defined Format**

* [Format Generic](/docs/assets/formats/asset-format-generic)
* [Format Data Dictionary](/docs/assets/formats/asset-format-data-dictionary)
* [Format ASN.1](/docs/assets/formats/asset-format-asn1)

**A Kafka Sink:**

* [Source Kafka](/docs/assets/sources/asset-source-kafka)

## Configuration

### Name & Description

![](.asset-input-kafka_images/97456e1d.png "Name & Description (Input Kafka)")

**`Name`** : Name of the Asset. Whitespaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Output Ports

![](.asset-input-kafka_images/ac492ab6.png "Output Ports (Input Kafka)")

An input processor can only have one output port from which it sends ingested data downstream in the Workkflow.

A port can have a name and description. Names must exist and be unique within the processor.

### Termination Settings

Using termination settings you can control how layline.io should behave upon shutdown of a Workflow that this Asset is part of.
A Workflow shutdown at most goes through three phases:

1. Signalling shutdown: layline.io signals inputs that it wants to shut down.
2. Signalling abort: In case the shutdown was not confirmed, layline.io sends an abort request.
3. If the abort was not confirmed, layline.io terminates the input without further wait.

![](.asset-input-kafka_images/07cbe873.png "Termination Settings (Input Kafka)")

* **`Shutdown grace period [ms]`** : Time to wait for the input processor to gracefully confirm shutdown once a shutdown request has been received.

* **`Abort grace period [ms]`** : In case the shutdown signal was not confirmed in due time, an abort request will be issued.
  If the abort is not confirmed in the configured time interval, a hard termination will be issued. The abort timeout is consecutive to the shutdown timeout.

### Format

Data written to a Kafka topic must be written in a format which must have been defined by you previously.

![](.asset-input-kafka_images/e540a2a7.png "Format (Input Kafka)")

If you have defined such a format, then you can select it from the list of available formats by clicking on the button next to the field (1).

### Kafka Source

You need to assign a [Kafka Source](/docs/assets/sources/asset-source-kafka). The Source defines which topics can be read from.
The Source must have been previously defined.

![](.asset-input-kafka_images/cd27054a.png "Format (Input Kafka)")

Select the Sink by clicking on the button next to the field (1).

### Kafka Settings

In the Kafka Settings section, you define how you want to read data from Kafka topic(s).

#### Consumer Group and Polling

![](.asset-input-kafka_images/1c39f7ba.png "Kafka Consumer Group and Polling (Input Kafka)")

* **`Group ID`** : The `Group ID` reflects [Kafka's Consumer Group ID](https://kafka.apache.org/documentation/#consumerconfigs_group.id).
  A unique string that identifies the consumer group this consumer belongs to. This property is required if the consumer uses either Kafka's group management functionality or the Kafka-based offset
  management strategy. If you don't know what this is, please consult Kafka's documentation.

* **`Max. poll records`** : Number of records to read from a Kafka topic in one go.
  E.g. a value of `500` means that messages are read in chunks of 500 from the configured Kafka topic(s).
  This is equivalent to Kafka's [max.poll.records](https://kafka.apache.org/documentation/#consumerconfigs_max.poll.records) parameter.

* **`Max. poll interval [ms]`** : Timeout for in-between polling intervals.
  E.g. a value of `300000` means that Kafka will wait for 5 minutes for the client to return and ask for more data before it.
  This places an upper bound on the amount of time that the consumer can be idle before fetching more records.
  If the next polling is not invoked before expiration of this timeout, then the consumer is considered failed and the group will rebalance in order to reassign the partitions to another member.
  This is equivalent to Kafka's [max.poll.interval.ms](https://kafka.apache.org/documentation/#consumerconfigs_max.poll.interval.ms) parameter.

**Example:**
Let's assume a Kafka topic is distributed across two partitions P1 and P2, and you are running two Workflow instances W1 and W2 with the same Kafka input processor as configured above.
In this case Kafka will see two clients both accessing the Kafka topic with the same Consumer Group ID `XYZ`.
Kafka will assign one partition P1 to Workflow W1 and partition P2 to Workfkow W2. Each time a client asks for data, Kafka will provide messages in chunks of 500.
Should Workflow instance W2 not return and ask for more data within 5 minutes (300000 ms), the respective Workflow instance will be considered failed and Kafka will rebalance the partitions to now be
both read by Workflow W1.

#### Auto Offset Reset Strategy

![](.asset-input-kafka_images/a117bf37.png "Kafka Auto Offset Reset (Input Kafka)")

This allows you to define what to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server (e.g. because that data has been deleted):

* **`Read earliest message`** : Automatically reset the offset to the earliest offset.
* **`Read latest message`** : Automatically reset the offset to the latest offset.
* **`Do not start up`** : Don't start and report an error if no previous offset is found for the consumer's group.

You can read more about this in the [Kafka Documentation here](https://kafka.apache.org/documentation/#consumerconfigs_auto.offset.reset).

#### Topics

Define one or more topics that this input processor should read from.
If you have defined a consumer group then the topics which you define here will be accessed with the same consumer group.
You can use ${...} macros to expand variables defined in [environment variables](/docs/assets/resources/asset-resource-environment).

![](.asset-input-kafka_images/c65fca67.png "Topics (Input Kafka)")

#### Commit Mode

The commit mode defines how the system should commit successful reads and processing back to Kafka.
There are four options:

##### No Commit

![](.asset-input-kafka_images/d6564a64.png "Commit Mode: No (Input Kafka)")

Processed messages will not be committed back to Kafka.
This is likely not desired as it is imperative to have control over what messages were suceessfully processed in order to avoid duplicate processing as well as ensure that all messages are being
processed.
The option is included for completeness nonetheless.

##### Auto

In the Auto Commit Mode, messages are being committed in frequent time intervals.
I.e. regardless of processing status, the offset of messages which have been read is being committed every `5000ms` (example).

![](.asset-input-kafka_images/6c60db11.png "Commit Mode: SavePoint (Input Kafka)")

This is equivalent to [Kafka's auto commit feature](https://kafka.apache.org/documentation/#consumerconfigs_enable.auto.commit).

##### SavePoint

![](.asset-input-kafka_images/0699b681.png "Commit Mode: SavePoint (Input Kafka)")

The SavePoint commit mode has no equivalent in Kafka. This actually represents "no commit, until explicit commit".
There are mechanisms within layline.io which allow to trigger a so called "upstream savepoint" based on certain conditions.
If such a savepoint is triggered, this is then propagated back up. In this case the then current offset will be committed back to Kafka.

An example can be found in the [Stream Boundary Controller Asset](/docs/assets/processors-flow/asset-flow-streamboundary) where a savepoint can be triggered upon configurable conditions.
So if you have a Stream Boundary Controller in you Workflow, then a savepoint can be triggered from within that Processor.

**Example:** Stream Boundary Controller SavePoint trigger

![](.asset-input-kafka_images/78134287.png "Stream Boundary Controller SavePoint (Input Kafka)")

##### Message

The Message Mode commits the read offset back to Kafka based on time and number of messages.

![](.asset-input-kafka_images/05d6bd94.png "Stream Boundary Controller SavePoint (Input Kafka)")

* **`Maximum number of messages in a commit batch`** : As the name implies, a commit is issued to Kafka when the number of read messages has reached the configured threshold.
  In the example this would be after `1000` messages an offset commit is issued to Kafka.
  A configured `Maximum commit interval in seconds` may supersede the duration until a commit is issued.

* **`Maximum commit interval in seconds`** : This is the maximum number of seconds to wait before committing read offsets back to Kafka.
  In the example this would be after `10` seconds. Should the number of messages read be smaller than what is configured in `Maximum number of messages in a commit batch` the offset will still be
  committed after teh configured time interval.

* **`Maximum number of in-flight commit messsages`** : Number of issued commit messages which can be open at any time.
  If the number is `100` then in our example this implies that a maximum number of 1000 x 100 = 100.000 messages can be uncommitted and waiting for commit at any time.

* **`Delivery of commits to Kafka`** : If set to `Wait for acknowledge` then the system will wait for commits to be confirmed (safe).
  If set to `Send and forget` the system will assume that issued commit requests have been successfully committed (unsafe).

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

* [Stream Boundary Controller Asset](/docs/assets/processors-flow/asset-flow-streamboundary)

### External

* [Kafka's Consumer Group ID](https://kafka.apache.org/documentation/#consumerconfigs_group.id)
* [Kafka max.poll.records](https://kafka.apache.org/documentation/#consumerconfigs_max.poll.records)
* [Kafka max.poll.interval.ms](https://kafka.apache.org/documentation/#consumerconfigs_max.poll.interval.ms)
* [Kafka auto.offset.reset](https://kafka.apache.org/documentation/#consumerconfigs_auto.offset.reset)
* [Kafka enable.auto.commit](https://kafka.apache.org/documentation/#consumerconfigs_enable.auto.commit)

---

<WipDisclaimer></WipDisclaimer>
