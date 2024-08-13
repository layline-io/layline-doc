---
title: Source WebDAV
description: Source WebDAV Asset. Use this to define the technical parameters for a WebDav source connection.
tags:
  - source
  - webdav
  - windows
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import PollingAndProcessing from '../../snippets/assets/_asset-source-polling-and-processing.md';
import Folders from '../../snippets/assets/_asset-source-folders.md';
import ThrottlingAndFailure from '../../snippets/assets/_asset-source-throttling-and-failure.md';

# Source WebDAV

## Purpose

Defines the specific source parameters for a WebDAV connected endpoint. 

### This Asset can be used by:

| Asset type       | Link                                                                       |
|------------------|----------------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](../processors-input/asset-input-stream) |

### Prerequisite

You need:

* [WebDAV Connection](../connections/asset-connection-webdav)

## Configuration

### Name & Description

![Name & Description (WebDAV Source)](./.asset-source-webdav_images/1715690942607.png "Name & Description (WebDAV Source)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### Throttling & Failure Handling

<ThrottlingAndFailure></ThrottlingAndFailure>

### Polling & Processing

<PollingAndProcessing></PollingAndProcessing>

### WebDAV Settings

![Connection (WebDAV Source)](./.asset-source-webdav_images/1715691789968.png "Connection (WebDAV Source)")


Select the previously configured [WebDAV Connection](../connections/asset-connection-webdav) to use for this Source.
If it does not exist, you need to create it first.

### Folders

<Folders></Folders>


---

<WipDisclaimer></WipDisclaimer>
