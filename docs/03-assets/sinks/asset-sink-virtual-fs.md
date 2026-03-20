---
title: Sink Virtual File System
description: Sink Virtual File System
tags:
  - sink
  - vfs
  - virtual file system
  - file
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import Directories from '../../snippets/assets/_asset-sink-directories.md';
import ThrottlingAndFailure from '../../snippets/assets/_asset-source-throttling-and-failure.md';

# Sink Virtual File System

## Purpose

Writes messages to a Virtual File System (VFS). The VFS abstraction allows the same Sink to write to local filesystems, SMB shares, NFS mounts, or any backend supported by the configured VFS Connection. Files are first written to a temporary directory, then moved to the output directory upon successful completion.

### This Asset can be used by:

| Asset type        | Link                                                                 |
|-------------------|---------------------------------------------------------------------|
| Output Processors | [Stream Output Processor](../processors-output/asset-output-stream) |

### Prerequisite

You need:

- A [**Virtual File System Connection**](../connections/asset-connection-virtual-fs)

## Configuration

### Name & Description

![Name & Description (Virtual File System Sink)](./.Virtual_File_System_Sink_images/vfs-sink-name-description.png "Name & Description (Virtual File System Sink)")

<NameAndDescription></NameAndDescription>

### Required Roles

<RequiredRoles></RequiredRoles>

### Throttling & Failure Handling

![Throttling & Failure Handling (Virtual File System Sink)](./.Virtual_File_System_Sink_images/vfs-sink-throttling.png "Throttling & Failure Handling (Virtual File System Sink)")

<ThrottlingAndFailure></ThrottlingAndFailure>

### Virtual File System Settings

**Connection** — Select the [Virtual File System Connection](../connections/asset-connection-virtual-fs) to use for writing files. If no connection exists, create one first.

### Output Directory

The **Output Directory** is where the final processed files are written. This tab defines the output path, filename conventions, and handling for conflicts when a file with the same name already exists.

### Temporary Directory

![Temporary Directory (Virtual File System Sink)](./.Virtual_File_System_Sink_images/vfs-sink-temp-directory.png "Temporary Directory (Virtual File System Sink)")

The **Temporary Directory** is where files are written during processing. Once processing completes successfully, the file is moved to the Output Directory.

**Temporary Directory** — Path relative to the connection mount point where in-progress files are written. Example: `${lay:callcenterDataDir}/tmp`

**Temporary Prefix** — Prefix added to the filename while in the temporary directory. Example: `tmp_`

**Temporary Suffix** — Suffix added to the filename while in the temporary directory. Example: `.tmp`

### Other Settings

![Other Settings (Virtual File System Sink)](./.Virtual_File_System_Sink_images/vfs-sink-other-settings.png "Other Settings (Virtual File System Sink)")

**Delay post processing steps (move, delete) [ms]** — Milliseconds to wait after processing before moving files from the temporary directory to the output directory or deleting them. Useful for connections that need time to settle. Default: `0`.

**Number of retries for post processing steps** — Number of retry attempts for post-processing operations (move, delete) if the first attempt fails. Default: `3`.

### Archive Directory

The **Archive Directory** is used when the **"Move the existing output file to the archive directory"** conflict-handling option is selected in the Output Directory configuration. Files that would otherwise conflict are moved here instead of causing a failure.

## Behavior

Files are always written to the Temporary Directory first. On successful processing, they are moved (not copied) to the Output Directory. If post-processing fails after the configured number of retries, the file remains in the Temporary Directory and the error is logged.

Temporary files that remain in the Temporary Directory after no active processing is underway are likely residue from a previous crash and should be investigated.

## See Also

- [**VFS Source**](../sources/asset-source-virtual-fs) — Read files from a VFS mount
- [**VFS Connection**](../connections/asset-connection-virtual-fs) — VFS connection configuration
- [**SMB Sink**](../sinks/asset-sink-smb) — Write files to SMB/CIFS shares

---
<WipDisclaimer></WipDisclaimer>
