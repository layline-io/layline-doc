---
title: Sink NFS
description: Sink NFS Asset. Use this to define the technical parameters for an NFS sink.
tags:
  - sink
  - nfs
  - network file system
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import Directories from '../../snippets/assets/_asset-sink-directories.md';

# Sink NFS

## Purpose

Defines the outbound connection parameters for an NFS sink.

### This Asset can be used by:

| Asset type        | Link                                                                          |
|-------------------|-------------------------------------------------------------------------------|
| Output Processors | [Stream Output Processor](../processors-output/asset-output-stream) |

### Prerequisite

You need:

* [NFS Connection](../connections/asset-connection-nfs)

## Configuration

### Name & Description

![Name & Description (NFS Sink)](.asset-sink-nfs_images/image_2025-04-03-17-49-02.png "Name & Description (NFS Sink)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### NFS Connection

![NFS Connection (NFS Sink)](.asset-sink-nfs_images/image_2025-04-03-17-49-47.png "NFS Connection (NFS Sink)")

Select the [NFS Connection](../connections/asset-connection-nfs) that you want to use with this Asset.
If it does not exist, you need to create it first.

### Directories

<Directories></Directories>

## Related Topics

### Internal

* [Stream Output Processor](../processors-output/asset-output-stream)
* [NFS Source](../sources/asset-source-nfs)
* [NFS Connection](../connections/asset-connection-nfs)

## Potential problems

Common issues with NFS sinks include:
- NFS permission and ownership conflicts
- Network latency affecting file operations
- File locking issues during write operations
- Mount point availability
- Space limitations on NFS server

---

<WipDisclaimer></WipDisclaimer>
