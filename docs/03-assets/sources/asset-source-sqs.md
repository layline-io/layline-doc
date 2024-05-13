---
title: Source SQS
description: Source AWS SQS Asset. Use this to define the technical parameters for an AWS SQS source connection.
tags:
  - source
  - sqs
  - aws
  - amazon
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';
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



---

<WipDisclaimer></WipDisclaimer>
