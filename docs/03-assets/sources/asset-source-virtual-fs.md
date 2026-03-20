---
title: Source Virtual File System
description: Source Virtual File System
tags:
  - source
  - vfs
  - virtual file system
  - file
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import PollingAndProcessing from '../../snippets/assets/_asset-source-polling-and-processing.md';
import Folders from '../../snippets/assets/_asset-source-folders.md';
import ThrottlingAndFailure from '../../snippets/assets/_asset-source-throttling-and-failure.md';

# Source Virtual File System

## Purpose

Polls a Virtual File System (VFS) for files and makes them available to downstream processors. The VFS abstraction allows the same Source to read from local filesystems, SMB shares, NFS mounts, or any backend supported by the configured VFS Connection.

### This Asset can be used by:

| Asset type       | Link                                                               |
|------------------|--------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](../processors-input/asset-input-stream)   |

### Prerequisite

You need:

- A [**Virtual File System Connection**](../connections/asset-connection-virtual-fs)

## Configuration

### Name & Description

![Name & Description (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-name-description.png "Name & Description (Virtual File System Source)")

<NameAndDescription></NameAndDescription>

### Required Roles

<RequiredRoles></RequiredRoles>

### Throttling & Failure Handling

<ThrottlingAndFailure></ThrottlingAndFailure>

### Polling & Processing

<PollingAndProcessing></PollingAndProcessing>

### Virtual File System Settings

![Virtual File System Settings (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-vfs-settings.png "Virtual File System Settings (Virtual File System Source)")

**Connection** — Select the [Virtual File System Connection](../connections/asset-connection-virtual-fs) to use for reading files. If no connection exists, create one first.

### Folders

<Folders></Folders>

---

<WipDisclaimer></WipDisclaimer>
