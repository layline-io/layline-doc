---
title: Sink SMB
description: Sink SMB Asset. Use this to define the technical parameters for a SMB sink connection.
tags:
  - sink
  - smb
  - windows
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import Directories from '../../snippets/assets/_asset-sink-directories.md';

# Sink SMB

## Purpose

Defines the specific sink parameters for a SMB connected endpoint.

### This Asset can be used by:

| Asset type        | Link                                                                |
|-------------------|---------------------------------------------------------------------|
| Output Processors | [Stream Output Processor](../processors-output/asset-output-stream) |

You need:

* [SMB Connection](../connections/asset-connection-smb)

## Configuration

### Name & Description

![Name & Description (SMB Sink Asset)](./.asset-sink-smb_images/1715592295689.png "Name & Description (SMB Sink Asset)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### SMB Settings

Configure the parameters for your SMB endpoint:

![Setting (SMB Sink)](./.asset-sink-smb_images/1715594102397.png "Setting (SMB Sink)")

#### Connection

Use the drop-down list to select an [SMB Connection](../connections/asset-connection-smb) that should
support this SMB configuration. If it does not exist, you need to create it first.

#### Share

* **`Share`** : Configure your basic location information for your SMB endpoint.
  You can use $\{...\} macros to expand variables defined in [environment variables](../resources/asset-resource-environment).

### Directories

<Directories></Directories>

---

<WipDisclaimer></WipDisclaimer>
