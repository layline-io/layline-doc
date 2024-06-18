---
title: Output Dev Null
description: Output Dev Null Asset. Use this output asset to destroy messages.
tags:
  - devnull
---

import InputPorts from '/docs/snippets/assets/_input-ports.md';
import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Output Stream

## Purpose

The DevNull Asset is used to gracefully get rid of messages which do not require further processing. 

This Asset is used within a Workflow definition.

![](.asset-output-devnull_images/a75856a2.png "Asset Dependency Graph (Output DevNull)")

## Prerequisites

None.

## Configuration

### Name & Description

![](.asset-output-devnull_images/9c666d13.png "Name & Description (Output DevNull)")

**`Name`** : Name of the Asset. Spaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Input Ports

<InputPorts></InputPorts>

---

:::info Unnecessary to create as an Asset
Because this Asset only provides minimal configuration options, it is usually not necessary to create it as a reusable Asset.
If you plan to use it within a Workflow, simply add it as a Processor and - when asked - create it without an Asset.
:::

---

<WipDisclaimer></WipDisclaimer>
