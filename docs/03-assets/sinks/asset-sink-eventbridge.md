---
title: Sink EventBridge
description: Sink EventBridge Asset. Use this to define the technical parameters for a AWS EventBridge sink connection.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';

# Sink EventBridge

## Purpose

Defines the outbound connection parameters for an AWS EventBridge sink.

### This Asset can be used by:

| Asset type        | Link                                                              |
|-------------------|-------------------------------------------------------------------|
| Output Processors | [Frame Output Processor](../processors-output/asset-output-frame) |

### Prerequisite

You need:

* [AWS Connection](../connections/asset-connection-aws)

## Configuration

### Name & Description

![Name & Description (EventBridge Sink)](./.asset-sink-eventbridge_images/1722858806837.png "Name & Description (EventBridge Sink)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### EventBridge Connection

![AWS Connection (EventBridge Sink)](./.asset-sink-eventbridge_images/1722859138750.png "AWS Connection (EventBridge Sink)")

Select the [AWS Connection](../connections/asset-connection-aws) to use with this Asset.
If it does not exist, you need to create it first.

### Event Buses

![](./.asset-sink-eventbridge_images/1722860557943.png "Event Bus definitions / mapping (EventBridge Sink)")

Once you picked an EventBridge Connection above the system will try to test the connection and
show available event buses within the drop-down list under `ARN` (Amazon Resource Name).
Having chosen an ARN the appropriate `Name` for referencing it when guiding resp. routing messages towards EventBridge sink queues within the
_**Frame Output Processor**_ configurations will be selected. More details can be found [here](../processors-output/asset-output-frame#sink-settings-for-eventbridge).

---

<WipDisclaimer></WipDisclaimer>
