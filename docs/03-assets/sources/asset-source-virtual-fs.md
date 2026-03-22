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
import PollingAndProcessing from '../../snippets/assets/_asset-source-polling-and-processing.md';
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

**Name** — Unique name for this asset within the project. Spaces are not allowed.

**Description** — Optional description of what this source is used for.

**Asset Usage** — Shows how many times this asset is referenced by other assets, workflows, or deployments. Expand to see the full list.

### Required Roles

![Required Roles (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-required-roles.png "Required Roles (Virtual File System Source)")

In case you are deploying to a Cluster with Reactive Engine Nodes that have specific Roles configured, you can restrict use of this Asset to Nodes with matching roles. Leave empty to match all Nodes.

### Throttling & Failure Handling

<ThrottlingAndFailure></ThrottlingAndFailure>
### Polling & Processing

<PollingAndProcessing></PollingAndProcessing>
### Virtual File System Settings

![Virtual File System Settings (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-vfs-settings.png "Virtual File System Settings (Virtual File System Source)")

**Connection** — Select the [Virtual File System Connection](../connections/asset-connection-virtual-fs) to use for reading files. If no connection exists, create one first.

### Folders

The source requires the definition of one or more **Folders**. Each folder defines three directories:

1. **Input Directory** — The directory to read new files from.
2. **Done Directory** — The directory to which read files are moved after reading.
3. **Error Directory** — Files which caused problems during processing are moved here for further analysis.

If the source needs to collect data from more than one folder structure, add multiple folder configurations.

#### Folders Toolbar

![Folders Toolbar (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-folders-toolbar.png "Folders Toolbar (Virtual File System Source)")

Use **"+ ADD A FOLDER"** to add a new folder configuration entry. Use the toolbar to reorder, copy, or paste folder entries. Enable **"Allow unusable folder setups"** if you need to save configurations that would otherwise be considered invalid.

#### Folder Configuration

![Folder Configuration Detail (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-folders-detail.png "Folder Configuration Detail (Virtual File System Source)")

**Folder setup name** — Name of the folder. Spaces are not allowed.

**Folder setup description** — Optional description of the folder.

**Enable / Disable Folder** — Each folder can be individually enabled, disabled, or controlled via a string expression. Select **Enabled** or **Disabled**, or choose **"Set via string expression"** for dynamic control.

##### Input Directory

![Input Directory (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-input-dir.png "Input Directory (Virtual File System Source)")

**Input Directory** — The directory to read files from. The path must be accessible to the Reactive Engine. You can use `${...}` macros to expand variables defined in environment variables.

**Filter regular expression** — Regular expression to filter which files in the directory are pulled (e.g., `\S+\.csv`).

**File prefix regular expression** — Filter applied to the beginning of a file name. E.g. `XYZ.` will only read files whose name starts with `XYZ`.

**File suffix regular expression** — Filter applied to the end of a file name. E.g. `.zip` will only read files whose name ends with `zip`.

**Include sub-directories** — When enabled, sub-directories of the input directory are also scanned.

**Enable housekeeping** — When enabled, applies housekeeping rules for files within the input directory.

##### Done Directory

![Done Directory (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-done-dir.png "Done Directory (Virtual File System Source)")

**Done Directory** — The directory to which files are moved when fully processed.

**Done prefix** — Prefix to add to the filename after move to the done directory. E.g. `done_`.

**Done suffix** — Suffix to add to the filename after move to the done directory. E.g. `_done`.

**When input file exists in done directory** — Define handling in case the file already exists in the done directory.

**Done File Compression** — Compression format for the done file: `None`, `ZIP`, or `GZIP`.

**Enable housekeeping** — When enabled, applies housekeeping rules for files within the done directory.

##### Error Directory

![Error Directory (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-error-dir.png "Error Directory (Virtual File System Source)")

**Error Directory** — The directory to which files are moved in case of a problem during processing.

**Error prefix** — Prefix to add to the filename after move to the error directory. E.g. `error_`.

**Error suffix** — Suffix to add to the filename after move to the error directory. E.g. `_error`.

**When input file exists in error directory** — Define handling in case the file already exists in the error directory.

**Error File Compression** — Compression format for the error file: `None`, `ZIP`, or `GZIP`.

**Enable housekeeping** — When enabled, applies housekeeping rules for files within the error directory.

---

<WipDisclaimer></WipDisclaimer>
