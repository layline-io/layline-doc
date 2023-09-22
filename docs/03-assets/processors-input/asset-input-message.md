---
title: Input Message
description: Input Message Asset for handling ingestion of external messages.
tags:
- input
- message
---

import OutputPorts from '/docs/snippets/assets/_output-ports.md';
import FailureHandling from '/docs/snippets/assets/_failure-handling-input.md';
import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';

# Input Message

## Purpose

Defines input parameters to ingest data from a Message Source.

This Asset is used within a Workflow definition.

![](.asset-input-message_images/0363922a.png "Asset Dependency Graph (Input Message)")

## Prerequisites

You need:

* [Timer Source](/docs/assets/sources/asset-source-timer), or
* [Email Source](/docs/assets/sources/asset-source-email)

## Configuration

### Name & Description

![](.asset-input-message_images/2200e5f0.png "Name & Description (Input Message)")

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

![](.asset-input-message_images/07cbe873.png "Termination Settings (Input Message)")

* **`Shutdown grace period [ms]`** : Time to wait for the input processor to gracefully confirm shutdown once a shutdown request has been received.

* **`Abort grace period [ms]`** : In case the shutdown signal was not confirmed in due time, an abort request will be issued.
  If the abort is not confirmed in the configured time interval, a hard termination will be issued. The abort timeout is consecutive to the shutdown timeout.

### Source

You need to assign either a [Timer Source](/docs/assets/sources/asset-source-timer) or [Email Source](/docs/assets/sources/asset-source-email). 
The Source defines the physical parameters to obtain the data.

![](.asset-input-message_images/e8a26a3e.png "Timer Source (Input Message)")

### Failure Handling

<FailureHandling></FailureHandling>

## Related Topics

### Internal

* [Timer Source](/docs/assets/sources/asset-source-timer)

---

<WipDisclaimer></WipDisclaimer>
