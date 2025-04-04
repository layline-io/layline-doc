---
title: Sink WebDAV
description: Sink WebDAV Asset. Use this to define the technical parameters for a WebDAV sink connection.
tags:
  - sink
  - webdav
  - windows
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import Directories from '../../snippets/assets/_asset-sink-directories.md';

# Sink WebDAV

## Purpose

Defines the specific sink parameters for a WebDAV connected endpoint. 

### This Asset can be used by:

| Asset type        | Link                                                                |
|-------------------|---------------------------------------------------------------------|
| Output Processors | [Stream Output Processor](../processors-output/asset-output-stream) |

### Prerequisite

You need:

* [WebDAV Connection](../connections/asset-connection-webdav "Name & Description (WebDAV Sink Asset)")

## Configuration

### Name & Description

![Name & Description (WebDAV Sink Asset)](./.asset-sink-webdav_images/1723036304756.png)

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### WebDAV Settings

![](./.asset-sink-webdav_images/1723038026663.png "WebDAV Connection (WebDAV Sink Asset)")

Select the [WebDAV Connection](../connections/asset-connection-webdav) to use with this Asset.
If it does not exist, you need to create it first.

### Directories

<Directories></Directories>

---

<WipDisclaimer></WipDisclaimer>
