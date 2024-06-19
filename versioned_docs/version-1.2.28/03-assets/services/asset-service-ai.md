---
title: AI Service
description: AI Service Asset. Use this to define a service to interface with an AI model.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import Testcase from '../../snippets/assets/_asset-service-test.md';

:::tip
If you are not familiar with the concept of AI in layline.io, please read [Using Artificial Intelligence in Workflows](../../concept/advanced/artificial-intelligence) first and then return here.
:::

## Purpose

![](./.asset-service-ai_images/1706094344991.png "Asset Dependency Graph (Service AI)")

## Prerequisites

For this to work, you have to have a trained AI model available.

## Configuration

### Name & Description

![](.asset-service-jdbc_images/651091bb.png "Name & Description (Service JDBC)")

* **`Name`** : Name of the Asset. Spaces are not allowed in the name.

* **`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand
and then click to follow, if any.

### Required roles

![](.asset-service-jdbc_images/3fdedead.png "Required Roles (Service JDBC)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles
configured, then you **can** restrict use of this Asset to those Nodes with matching
roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all
Nodes (no restriction).

### AI Service Settings

<Testcase></Testcase>

---

<WipDisclaimer></WipDisclaimer>
