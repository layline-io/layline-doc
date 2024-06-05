---
title: Source UDP
description: Source UDP Asset. Use this to define the technical parameters for a UDP source connection.
tags:
  - source
  - udp
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';
import NameAndDescription from '/docs/snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '/docs/snippets/assets/_asset-required-roles.md';

# Source UDP

## Purpose

Defines the specific source parameters for a UDP connected endpoint.

### This Asset can be used by:

| Asset type       | Link                                                                     |
|------------------|--------------------------------------------------------------------------|
| Input Processors | [Frame Input Processor](/docs/assets/processors-input/asset-input-frame) |

### Prerequisite

None

## Configuration

### Name & Description

![Name & Description (UDP Source)](./.asset-source-udp_images/1717600398340.png "Name & Description (UDP Source)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### Binding

![Binding settings (UDP Source)](./.asset-source-udp_images/1717601447614.png "Binding settings (UDP Source)")

* **`Bind host`** : interface address under which your UDP Server should be reachable.
* **`Bind port`** : the Port to communicate with your interface address.

### Stream Settings

At this point you define the stream name for later identification during processing within a workflow.
UPD as connectionless protocol makes it difficult to auto-generate a proper stream name. Hence, it is configurable in here:

![Stream settings (UPD Source)](./.asset-source-udp_images/1717605243066.png "Stream settings (UPD Source)")

* **`Stream name`** : name to apply for the UDP workflow processing.

---

<WipDisclaimer></WipDisclaimer>
