---
title: Source File System
description: Source File System Asset. Use this to define the technical parameters for a File System source connection.
tags:
  - source
  - file
  - directory
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import PollingAndProcessing from '../../snippets/assets/_asset-source-polling-and-processing.md';
import Folders from '../../snippets/assets/_asset-source-folders.md';
import ThrottlingAndFailure from '../../snippets/assets/_asset-source-throttling-and-failure.md';

# Source File System

## Purpose

Defines the specific source parameters for a File System connected endpoint.

### This Asset can be used by:

| Asset type       | Link                                                             |
|------------------|------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](../processors-input/asset-input-stream) |

### Prerequisite

None

## Configuration

### Name & Description

![Name & Description (File System Source)](./.asset-source-file_images/1714404641883.png "Name & Description (File System Source)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

[### Throttling & Failure Handling]: #

[<ThrottlingAndFailure></ThrottlingAndFailure>]: #

### Polling & Processing

<PollingAndProcessing></PollingAndProcessing>

### Folders

<Folders></Folders>

## Related Topics

### Internal

* [Stream Input Processor](../processors-input/asset-input-stream)
* [File System Sink](../sinks/asset-sink-file)

### External

* [Cron on Wikipedia](https://en.wikipedia.org/wiki/Cron)
* [Cron editor online from crontab guru](https://crontab.guru/)

---

<WipDisclaimer></WipDisclaimer>
