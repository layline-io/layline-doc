---
title: Sink FTP
description: Sink FTP Asset. Use this to define the technical parameters for an FTP sink.
tags:
  - sink
  - ftp
---

import WipDisclaimer from '../../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../../snippets/assets/_asset-required-roles.md';
import Directories from '../../../snippets/assets/_asset-sink-directories.md';

# Sink FTP

## Purpose

Defines the outbound connection parameters for an FTP sink.

### This Asset can be used by:

| Asset type        | Link                                                                          |
|-------------------|-------------------------------------------------------------------------------|
| Output Processors | [Stream Output Processor](../processors-output/asset-output-stream) |

### Prerequisite

You need:

* [FTP Connection](../connections/asset-connection-ftp)

## Configuration

### Name & Description

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### FTP Settings

![FTP Settings (FTP Sink Asset)](.asset-sink-ftp_images/067b010e.png)

Select the [FTP Connection](../connections/asset-connection-ftp) to use with this Asset.
If it does not exist, you need to create it first.

### Directories

<Directories></Directories>

## Related Topics

### Internal

* [Stream Output Processor](../processors-output/asset-output-stream)
* [FTP Source](../sources/asset-source-ftp)
* [FTP Connection](../connections/asset-connection-ftp)

---

<WipDisclaimer></WipDisclaimer>
