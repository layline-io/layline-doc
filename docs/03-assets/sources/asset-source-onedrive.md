---
title: Source OneDrive
description: Source OneDrive Asset. Use this to define the technical parameters for an OneDrive source endpoint.
tags:
  - source
  - microsoft 365
  - ms graph
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import PollingAndProcessing from '../../snippets/assets/_asset-source-polling-and-processing.md';
import Folders from '../../snippets/assets/_asset-source-folders.md';
import ThrottlingAndFailure from '../../snippets/assets/_asset-source-throttling-and-failure.md';

# Source OneDrive

## Purpose

Defines the specific source parameters for a OneDrive connected endpoint. 

### This Asset can be used by:

| Asset type       | Link                                                                       |
|------------------|----------------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](../processors-input/asset-input-stream) |

### Prerequisite

You need:

* [MS Graph Connection](../connections/asset-connection-msgraph)

## Configuration

### Name & Description

![Name & Description (OneDrive Source)](./.asset-source-onedrive_images/1714724371274.png "Name & Description (OneDrive Source)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### Throttling & Failure Handling

<ThrottlingAndFailure></ThrottlingAndFailure>

### Polling & Processing

<PollingAndProcessing></PollingAndProcessing>

### OneDrive Settings

Configure the parameters for your OneDrive endpoint:

![Setting (OneDrive Source)](./.asset-source-onedrive_images/1714724949144.png "Setting (OneDrive Source)")

#### Connection

![MSGraph Connection drop-down list](./.asset-source-sharepoint_images/1714663912005.png "MSGraph Connection drop-down list")

Use the drop-down list to select an [MS Graph Connection](../connections/asset-connection-msgraph) that should
support this SharePoint configuration. If it does not exist, you need to create it first.

:::info
Your [MS Graph Connection](../connections/asset-connection-msgraph) needs to have the following configured scope:
* Sites.ReadWrite.All
* Files.ReadWrite.All
:::


#### Drive

The following settings define the basic location information to read OneDrive data from:

* **`Drive name or ID`** : ID or name of the OneDrive drive you want to connect to.

### Folders

<Folders></Folders>

---

<WipDisclaimer></WipDisclaimer>
