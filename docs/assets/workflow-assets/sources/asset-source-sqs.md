---
title: Source SQS
description: Source AWS SQS Asset. Use this to define the technical parameters for an AWS SQS source connection.
tags:
  - source
  - sqs
  - aws
  - amazon
---

import WipDisclaimer from '../../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../../snippets/assets/_asset-required-roles.md';
import SinceVersion from '../../../../src/components/SinceVersion';

# Source SQS

## Purpose

Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service that makes it easy to decouple and scale microservices,
distributed systems, and serverless applications. Amazon SQS moves data between distributed application components and
helps you decouple these components.
Next to Amazon's SQS there are various other message queuing service providers which grant SQS-compatible access as well.

This Asset defines how layline.io reads messages from one or more SQS queues through an [AWS Connection](/docs/assets/workflow-assets/connections/asset-connection-aws).

### This Asset can be used by:

| Asset type       | Link                                                                     |
|------------------|--------------------------------------------------------------------------|
| Input Processors | [Frame Input Processor](/docs/assets/workflow-assets/processors-input/asset-input-frame) |

### Prerequisite

You need:

* [AWS Connection](/docs/assets/workflow-assets/connections/asset-connection-aws)

## Configuration

### Name & Description

![Name & Description (SQS Source)](./.asset-source-sqs_images/1715606330756.png "Name & Description (SQS Source)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### SQS Settings

Configure connection-level parameters for the SQS endpoint. Queue-specific settings live under **SQS Queues**.

<!-- SCREENSHOT: SQS Source editor, "SQS settings" group box, showing Connection, Parallel requests, and Number of retry attempts. Do not include the queue list. Save as docs/assets/workflow-assets/sources/.asset-source-sqs_images/sqs-settings.png -->

#### Connection *(inheritable)*

Use the drop-down list to select an [AWS Connection](/docs/assets/workflow-assets/connections/asset-connection-aws) that should support this Asset. If it does not exist, you need to create it first.

#### Parallel requests *(inheritable)*

How many receive requests this Source may run at the same time. Default: `1`.

#### Number of retry attempts *(inheritable)*

How many times a failed receive is retried. Default: `0`.

### SQS Queues <SinceVersion version="2.5.24" />

A single SQS Source can read from **multiple queues**. Each queue has its own URL, polling duration, maximum message count, and visibility timeout.

The Source must contain at least one queue. Queue names must be unique within the Source.

Existing Sources that were configured with a single queue URL are migrated automatically to one queue named **DefaultQueue**, keeping the previous polling, message-count, and visibility values.

<!-- SCREENSHOT: SQS Source editor, "SQS Queues" group. Left: queue list with at least two named queues, one selected. Toolbar showing Add a queue, sort, copy, paste. Right: "Queue data" panel with Queue name, Queue description, SQS Queue URL, Polling duration [sec], Maximum message count, Visibility timeout [sec]. Save as docs/assets/workflow-assets/sources/.asset-source-sqs_images/sqs-queues.png -->

Use **Add a queue** to add an entry. New queues are named `NewQueue` (`NewQueue2`, `NewQueue3`, … if that name is already taken). Select a queue in the list to edit it. You can sort the list A–Z / Z–A, copy a queue, and paste it as a new entry.

Once you pick an SQS Connection above, the system tries to test the connection and shows available queues in the **SQS Queue URL** drop-down. You can also type a URL, or use $\{...\} macros to expand variables defined in [environment variables](/docs/assets/workflow-assets/resources/asset-resource-environment).

#### Queue data

**Queue name *(inheritable)*** — Display name for this queue inside the Source. Must be unique.

**Queue description *(inheritable)*** — Optional caption shown under the name in the queue list.

**SQS Queue URL *(inheritable)*** — The queue to read from. Select from the drop-down or enter a URL / macro.

**Polling duration [sec] *(inheritable)*** — Configuring the value 0 in here, SQS "short polling" is activated and the request will only query a subset of the servers to find messages.
Amazon SQS sends the response right away, even if the query found no messages.
Configuring any value greater than 0 in here, SQS "long polling" is activated and the request will query all of the servers for messages.
Amazon SQS sends a response after it collects at least one available message, up to the `Maximum message count` specified in the request.
Amazon SQS sends an empty response only if the here configured polling wait time expires. Find more details about [SQS Short and Long Polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html) through the link.
Default if empty: `20`. Values are clamped to 0–20 seconds (Amazon SQS long-poll maximum).

**Maximum message count *(inheritable)*** — Relates to the message polling behavior described above: whichever configured limit is reached first, the querying of messages will end after `Maximum message count` or elapsed `Polling duration [sec]`.
Default: `10`. Values are clamped to 1–10.

**Visibility timeout [sec] *(inheritable)*** — The visibility timeout begins when Amazon SQS returns a message. During this time, the consumer has to process and delete the message.
You can define this timeout period here. After the visibility timeout period the message becomes visible to other consumers again if it is not deleted.
If a message must be received only once, your consumer should delete it within the duration of the visibility timeout. (see also [SQS Visibility Timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)).
Within layline.io you need to ensure this behavior by adding the [Input Frame Committer](/docs/assets/workflow-assets/processors-flow/asset-flow-input-frame-committer) processor into your workflow since this is the instance that would finally delete the message from the queue.
Please note: DELETE is only executed when the message has reached the Input Frame Committer.
Default: `30`.

---

<WipDisclaimer></WipDisclaimer>
