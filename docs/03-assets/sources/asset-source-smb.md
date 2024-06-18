---
title: Source SMB
description: Source SMB Asset. Use this to define the technical parameters for a SMB source connection.
tags:
  - source
  - smb
  - windows
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import PollingAndProcessing from '../../snippets/assets/_asset-source-polling-and-processing.md';
import Directories from '../../snippets/assets/_asset-source-directories.md';

# Source SMB

## Purpose

Defines the specific source parameters for a SMB connected endpoint.

### This Asset can be used by:

| Asset type       | Link                                                                       |
|------------------|----------------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](/docs/assets/processors-input/asset-input-stream) |

### Prerequisite

You need:

* [SMB Connection](/docs/assets/connections/asset-connection-smb)

## Configuration

### Name & Description

![Name & Description (SMB Source)](./.asset-source-smb_images/1715352536121.png "Name & Description (SMB Source)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### Polling & Processing

<PollingAndProcessing></PollingAndProcessing>

### SMB Settings

Configure the parameters for your SMB endpoint:

![Setting (SMB Source)](./.asset-source-smb_images/1715353088320.png "Setting (SMB Source)")

#### Connection

Use the drop-down list to select an [SMB Connection](/docs/assets/connections/asset-connection-smb) that should
support this SMB configuration. If it does not exist, you need to create it first.

#### Share

* **`Share`** : Configure your basic location information for your SMB endpoint. 
You can use $\{...\} macros to expand variables defined in [environment variables](/docs/assets/resources/asset-resource-environment).

### Directories

<Directories></Directories>

---

<WipDisclaimer></WipDisclaimer>
