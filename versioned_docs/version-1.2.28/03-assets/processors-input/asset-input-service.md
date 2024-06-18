---
title: Input Service
description: Input Service Asset for handling data incoming from a Service Source.
tags:
  - input
  - service
---

import OutputPorts from '/docs/snippets/assets/_output-ports.md';
import FailureHandling from '/docs/snippets/assets/_failure-handling-input.md';
import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Input Service

## Purpose

Defines input parameters to ingest data from a Service Source.

This Asset is used within a Workflow definition.

![](.asset-input-service_images/0d5d8cdc.png "Asset Dependency Graph (Input Service)")

## Prerequisites

You need:
**A Service Source**

* [Service Source](/docs/assets/sources/asset-source-service)

## Configuration

### Name & Description

![](.asset-input-service_images/f4f98c4c.png "Name & Description (Input Service)")

**`Name`** : Name of the Asset. Spaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Output Ports

<OutputPorts></OutputPorts>

### Termination Settings

Using termination settings you can control how layline.io should behave upon shutdown of a Workflow that this Asset is part of.
A Workflow shutdown at most goes through three phases:

1. Signalling shutdown: layline.io signals inputs that it wants to shut down.
2. Signalling abort: In case the shutdown was not confirmed, layline.io sends an abort request.
3. If the abort was not confirmed, layline.io terminates the input without further wait.

![](.asset-input-service_images/cb8829f4.png "Termination Settings (Input Service)")

* **`Shutdown grace period [ms]`** : Time to wait for the input processor to gracefully confirm shutdown once a shutdown request has been received.

* **`Abort grace period [ms]`** : In case the shutdown signal was not confirmed in due time, an abort request will be issued.
  If the abort is not confirmed in the configured time interval, a hard termination will be issued. The abort timeout is consecutive to the shutdown timeout.

### Source

You need to assign a [Service Source](/docs/assets/sources/asset-source-service).
The Service Source obtains and delivers the actual messages to this Input Asset.

![](.asset-input-service_images/22765d2c.png "Timer Source (Input Message)")

### Failure Handling

<FailureHandling></FailureHandling>

## Related Topics

### Internal

* [Timer Source](/docs/assets/sources/asset-source-timer)

---

<WipDisclaimer></WipDisclaimer>
