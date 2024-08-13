---
title: Source FTP
description: Source FTP Asset. Use this to define the technical parameters for an FTP source.
tags:
  - source
  - ftp
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import PollingAndProcessing from '../../snippets/assets/_asset-source-polling-and-processing.md';
import Folders from '../../snippets/assets/_asset-source-folders.md';
import ThrottlingAndFailure from '../../snippets/assets/_asset-source-throttling-and-failure.md';

# Source FTP

## Purpose

Defines the specific bucket and folder source of a FTP connected endpoint.

### This Asset can be used by:

| Asset type       | Link                                                                       |
|------------------|----------------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](../processors-input/asset-input-stream) |

### Prerequisite

You need:

* [FTP Connection](../connections/asset-connection-ftp)

## Configuration

### Name & Description

![](.asset-source-ftp_images/dfb72d7a.png "Name & Description (FTP Source)")

**`Name`** : Name of the Asset. Spaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Required roles

![](.asset-source-ftp_images/c2e6ec39.png "Required Roles (FTP Source)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching
roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### Throttling & Failure Handling

<ThrottlingAndFailure></ThrottlingAndFailure>

### Polling & Processing

<PollingAndProcessing></PollingAndProcessing>

### FTP Connection

![](.asset-source-ftp_images/df31d8ca.png "FTP Connection (FTP Source)")

Select the previously configured [FTP Connection](../connections/asset-connection-ftp) to use for this Source.

### Folders

<Folders></Folders>

## Related Topics

### Internal

* [FTP Connection](../connections/asset-connection-ftp)
* [FTP Sink](../sinks/asset-sink-ftp)

### External

* [Cron on Wikipedia](https://en.wikipedia.org/wiki/Cron)
* [Cron editor online from crontab guru](https://crontab.guru/)

## Potential problems

---

<WipDisclaimer></WipDisclaimer>
