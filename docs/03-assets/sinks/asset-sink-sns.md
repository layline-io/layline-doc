---
title: Sink SNS
description: Sink SNS Asset. Use this to define the technical parameters for a AWS SNS sink connection.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';

# Sink SNS

## Purpose

Defines the outbound connection parameters for an AWS SNS sink.

### This Asset can be used by:

| Asset type        | Link                                                              |
|-------------------|-------------------------------------------------------------------|
| Output Processors | [Frame Output Processor](../processors-output/asset-output-frame) |

### Prerequisite

You need:

* [AWS Connection](../connections/asset-connection-aws)

## Configuration

### Name & Description

![Name & Description (SNS Sink)](./.asset-sink-sns_images/1723026172490.png "Name & Description (SNS Sink)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### SNS Connection

![AWS Connection (SNS Sink)](./.asset-sink-sns_images/1723026564815.png "AWS Connection (SNS Sink)")

Select the [AWS Connection](../connections/asset-connection-aws) to use with this Asset.
If it does not exist, you need to create it first.

### Topics

![](./.asset-sink-sns_images/1723026648887.png "Topic definitions / mapping (SNS Sink)")

Once you picked an SNS Connection above the system will try to test the connection and
show available topics within the drop-down list under `ARN` (Amazon Resource Name).
You can define a `Name` for each ARN in here to reference those when guiding resp. routing messages towards SNS sink queues within the
_**Frame Output Processor**_ configurations will be selected. More details can be found [here](../processors-output/asset-output-frame#sink-settings-for-sns).

---

<WipDisclaimer></WipDisclaimer>

