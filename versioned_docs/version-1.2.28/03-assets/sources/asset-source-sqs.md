---
title: Source SQS
description: Source AWS SQS Asset. Use this to define the technical parameters for an AWS SQS source connection.
tags:
  - source
  - sqs
  - aws
  - amazon
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '/docs/snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '/docs/snippets/assets/_asset-required-roles.md';

# Source SQS

## Purpose

Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service that makes it easy to decouple and scale microservices,
distributed systems, and serverless applications. Amazon SQS moves data between distributed application components and
helps you decouple these components.
Next to Amazon's SQS there are various other message queuing service providers which grant SQS compatible access to their storage solutions as well
(e.g. Google Cloud Storage, IONOS, et al).

This UI helps to define the specific bucket and folder source of an SQS connected endpoint.

### This Asset can be used by:

| Asset type       | Link                                                                     |
|------------------|--------------------------------------------------------------------------|
| Input Processors | [Frame Input Processor](/docs/assets/processors-input/asset-input-frame) |

### Prerequisite

You need:

* [AWS Connection](/docs/assets/connections/asset-connection-aws)

## Configuration

### Name & Description

![Name & Description (SQS Source)](./.asset-source-sqs_images/1715606330756.png "Name & Description (SQS Source)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### SQS Settings

Configure the parameters for your SQS endpoint:

![](./.asset-source-sqs_images/1715605315655.png "SQS Settings (SQS Source)")

#### SQS Connection

Use the drop-down list to select an [AWS Connection](/docs/assets/connections/asset-connection-aws) that should support this Asset. If it does not exist, you need to create it first.

#### SQS Queue

Once you picked an SQS Connection above the system will try to test the connection and
show available queues within the drop-down list under `SQS Queue`. Pick the topic you want to process messages from. Another approach 
could be: You can use $\{...\} macros to expand variables defined in [environment variables](/docs/assets/resources/asset-resource-environment).

#### Further settings

* **`Polling duration [sec]`**: Configuring the value 0 in here, SQS "short polling" is activated and the request will only query a subset of the servers to find messages. 
Amazon SQS sends the response right away, even if the query found no messages.
Configuring any value greater than 0 in here, SQS "long polling" is activated and the request will query all of the servers for messages.
Amazon SQS sends a response after it collects at least one available message, up to the `Maximum message count` specified in the request.
Amazon SQS sends an empty response only if the here configured polling wait time expires. Find more details about [SQS Short and Long Polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html) through the link.
* **`Maximum message count`**: parameter relates to the message polling behavior described above: either of the configured limits reached first, the querying of messages will end after `Maximum message count` resp. elapsed `Polling duration [sec]`.
* **`Visibility timeout [sec]`**: The visibility timeout begins when Amazon SQS returns a message. During this time, the consumer has to process and delete the message. 
You can define this timeout period in here. After the visibility timeout period the message becomes visible to other consumers again if it is not deleted. 
If a message must be received only once, your consumer should delete it within the duration of the visibility timeout. ( see also [SQS Visibility Timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)).
Within lalyine.io you need to ensure this behavior by adding the [Input Frame Committer](/docs/assets/processors-flow/asset-flow-input-frame-committer) processor into your workflow since this is the instance that would finally delete the message from the queue.
Please note: DELETE is only executed when message has reached the Input Frame Committer!


---

<WipDisclaimer></WipDisclaimer>
