---
title: Sink Kinesis
description: Sink Kinesis Asset. Use this to define the technical parameters for a AWS Kinesis sink connection.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';

# Sink Kinesis

## Purpose

Defines the outbound connection parameters for an AWS Kinesis sink.

### This Asset can be used by:

| Asset type        | Link                                                              |
|-------------------|-------------------------------------------------------------------|
| Output Processors | [Frame Output Processor](../processors-output/asset-output-frame) |

### Prerequisite

You need:

* [AWS Connection](../connections/asset-connection-aws)

## Configuration

### Name & Description

![Name & Description (Kinesis Sink)](./.asset-sink-kinesis_images/1722952501116.png "Name & Description (Kinesis Sink)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### Kinesis Connection

![AWS Connection (Kinesis Sink)](./.asset-sink-kinesis_images/1722952769334.png "AWS Connection (Kinesis Sink)")

Select the [AWS Connection](../connections/asset-connection-aws) to use with this Asset.
If it does not exist, you need to create it first.

### Streams

![](./.asset-sink-kinesis_images/1722955348881.png "Stream definitions / mapping (Kinesis Sink)")

Once you picked a Kinesis Connection above the system will try to test the connection and
show available data streams within the drop-down list under `ARN` (Amazon Resource Name).
You can define a `Name` for each ARN in here to reference those when guiding resp. routing messages towards Kinesis sink queues within the
_**Frame Output Processor**_ configurations will be selected. More details can be found [here](../processors-output/asset-output-frame#sink-settings-for-kinesis).


---

<WipDisclaimer></WipDisclaimer>
