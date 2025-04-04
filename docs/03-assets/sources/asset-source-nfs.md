---
title: Source NFS
description: Source NFS Asset. Use this to define the technical parameters for an NFS source.
tags:
  - source
  - nfs
  - network file system
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import PollingAndProcessing from '../../snippets/assets/_asset-source-polling-and-processing.md';
import Folders from '../../snippets/assets/_asset-source-folders.md';
import ThrottlingAndFailure from '../../snippets/assets/_asset-source-throttling-and-failure.md';

# Source NFS

## Purpose

Defines the specific mount point and directory source of an NFS connected endpoint.

### This Asset can be used by:

| Asset type       | Link                                                                       |
|------------------|----------------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](../processors-input/asset-input-stream) |

### Prerequisite

You need:

* [NFS Connection](../connections/asset-connection-nfs)

## Configuration

### Name & Description

![Name & Description (NFS Source)](.asset-source-nfs_images/image_2025-04-03-17-21-25.png "Name & Description (NFS Source)")

### Required roles

<RequiredRoles></RequiredRoles>

### Throttling & Failure Handling

<ThrottlingAndFailure></ThrottlingAndFailure>

### Polling & Processing

<PollingAndProcessing></PollingAndProcessing>

### NFS Settings

![NFS Settings (NFS Source)](.asset-source-nfs_images/image_2025-04-03-17-46-37.png "NFS Settings (NFS Source)")

Select the previously configured [NFS Connection](../connections/asset-connection-nfs) that you want to use for this Source.

### Folders

<Folders></Folders>

The folder paths specified here are relative to the NFS export path configured in the NFS Connection. For example, if your NFS export path is `/exports/data` and you specify a folder path of `incoming`, the full path would be `/exports/data/incoming`.

## Related Topics

### Internal

* [NFS Connection](../connections/asset-connection-nfs)
* [NFS Sink](../sinks/asset-sink-nfs)
* [Stream Input Processor](../processors-input/asset-input-stream)

### External

* [Cron on Wikipedia](https://en.wikipedia.org/wiki/Cron)
* [Cron editor online from crontab guru](https://crontab.guru/)
* [NFS Documentation](https://en.wikipedia.org/wiki/Network_File_System)

## Potential problems

Common issues with NFS sources include:
- Permissions issues with NFS mount points
- Network connectivity problems
- NFS version compatibility
- File locking conflicts

---

<WipDisclaimer></WipDisclaimer>
