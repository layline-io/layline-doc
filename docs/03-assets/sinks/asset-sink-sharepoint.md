---
title: Sink SharePoint
description: Sink SharePoint Asset. Use this to define the technical parameters for a SharePoint endpoint.
tags:
  - sink
  - microsoft 365
  - ms graph
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import Directories from '../../snippets/assets/_asset-sink-directories.md';

# Sink SharePoint

## Purpose

Defines the specific sink parameters for a SharePoint connected endpoint.

### This Asset can be used by:

| Asset type        | Link                                                                          |
|-------------------|-------------------------------------------------------------------------------|
| Output Processors | [Stream Output Processor](../processors-output/asset-output-stream) |

You need:

* [MS Graph Connection](../connections/asset-connection-msgraph)

## Configuration

### Name & Description

![Name & Description (SharePoint Sink Asset)](./.asset-sink-sharepoint_images/1714667462326.png "Name & Description (SharePoint Sink Asset)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### SharePoint Settings

Configure the parameters for your SharePoint endpoint:

![Setting (SharePoint Sink)](./.asset-sink-sharepoint_images/1714668282329.png "Setting (SharePoint Sink)")

#### Connection

![MSGraph Connection drop-down list](./.asset-sink-sharepoint_images/1714668065803.png "MSGraph Connection drop-down list")

Use the drop-down list to select an [MS Graph Connection](../connections/asset-connection-msgraph) that should
support this SharePoint configuration. If it does not exist, you need to create it first.

:::info
Your [MS Graph Connection](../connections/asset-connection-msgraph) needs to have the following configured scope:
* Sites.ReadWrite.All
* Files.ReadWrite.All
:::

#### Site and Library

The following settings define the basic location information to write SharePoint data to:

* **`Site name or ID`** : ID or name of the SharePoint site you want to connect to.
* **`Libary name or ID`** : ID or name of the Library underneath the configured SharePoint site name you want to connect to.

:::info
Getting access to a configured SharePoint source through layline.io ensure _**Following**_ the configured site!
:::

### Directories

<Directories></Directories>

---

<WipDisclaimer></WipDisclaimer>
