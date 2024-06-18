---
title: Sink SQS
description: Sink SQS Asset. Use this to define the technical parameters for a AWS SQS sink connection.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '/docs/snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '/docs/snippets/assets/_asset-required-roles.md';

# Sink SQS

## Purpose

Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service that makes it easy to decouple and scale microservices,
distributed systems, and serverless applications. Amazon SQS moves data between distributed application components and
helps you decouple these components.
Next to Amazon's SQS there are various other message queuing service providers which grant SQS compatible access to their storage solutions as well
(e.g. Google Cloud Storage, IONOS, et al).

This UI helps to define the outbound connection parameters for an AWS SQS sink.

### This Asset can be used by:

| Asset type        | Link                                                                        |
|-------------------|-----------------------------------------------------------------------------|
| Output Processors | [Frame Output Processor](/docs/assets/processors-output/asset-output-frame) |

### Prerequisite

You need:
* [AWS Connection](/docs/assets/connections/asset-connection-aws)


## Configuration

### Name & Description

![Name & Description (SQS Sink)](./.asset-sink-sqs_images/1715605606362.png "Name & Description (SQS Sink)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### SQS Connection

![AWS Connection (SQS Sink)](./.asset-sink-sqs_images/1715604361224.png "AWS Connection (SQS Sink)")

Select the [AWS Connection](/docs/assets/connections/asset-connection-aws) to use with this Asset.
If it does not exist, you need to create it first.

### Queues

![](./.asset-sink-sqs_images/1715608949285.png "Queue definitions / mapping (SQS Sink)")

Once you picked a SQS Connection above the system will try to test the connection and 
show available queues within the drop-down list under `URL`.
You can define a `Name` for each URL in here to reference those when guiding resp. routing messages towards SQS sink queues within the
_**Frame Output Processor**_ configurations. More details can be found [here](/docs/assets/processors-output/asset-output-frame#sink-settings-for-sqs).

---

<WipDisclaimer></WipDisclaimer>
