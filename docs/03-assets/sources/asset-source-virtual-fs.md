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

![Throttling & Failure Handling (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-throttling.png "Throttling & Failure Handling (Virtual File System Source)")

#### Throttling

The following parameters allow controlling the maximum number of new stream creations per given time period.

**Max. new streams** — Maximum number of streams this source is supposed to open or process within a given time period.

**Per** — Time interval unit for the provided `Max. new streams` number.

:::info
Configuration values for this parameter depend on the use case scenario.
Assuming your data arrives in low frequency cycles these values are negligible.
In scenarios with many objects arriving in short time frames it is recommended to have a closer look on adapting the default values.
:::

#### Backoff Failure Handling

These parameters define the backoff timing intervals in case of failures. Based on these parameters, the system will step by step throttle down the processing cycle based on the time boundaries of min. failure backoff and max. failure backoff. It thereby allows slowing down the processing during failure scenarios.

**Min. failure backoff** — The minimum backoff time before the next source item processing (in case of failure scenario).

**Max. failure backoff** — The maximum backoff time before the next source item processing (in case of failure scenario).

Based on these values the next processing will be delayed: starting with the min. failure backoff time interval the waiting time will be increased step by step up to the max. failure backoff.

**Reset after number of successful streams** — The backoff failure throttling reset trigger based on a count of successful streams.

**Reset after time without failure streams** — Time-based reset for backoff failure throttling. Whatever comes first will reset the failure scenario throttling after the system is back to successful stream processing.

### Polling & Processing

![Polling & Processing (Virtual File System Source)](./.Virtual_File_System_Source_images/vfs-source-polling.png "Polling & Processing (Virtual File System Source)")

This source does not reflect a stream, but an object-based storage source which does not signal the existence of new objects to observers. We therefore need to define how often we want to look up (poll) the source for new objects to process.

**Polling trigger** — Choose between `Fixed rate` polling and `Cron tab style` polling.

**Polling interval [sec]** — Enter the interval in seconds in which the configured source should be queried for new objects (for Fixed rate mode).

**Polling timeout [sec]** — Defines the time in seconds to wait until a polling request fails. Set it high enough so that the endpoint responds under normal operation.

**Stable time [sec]** — Defines the number of seconds that file statistics must stay unchanged before the file is considered stable for processing.

**Ordering** — When listing objects from the source for processing, define the order:

- Alphabetically, ascending
- Alphabetically, descending
- Last modified, ascending
- Last modified, descending

**Reprocessing mode** — Relates to layline.io's Access Coordinator feature:

- **Manual access coordinator reset**: Any source element processed and stored in layline.io's history needs manual reset within the Sources Coordinator before reprocessing of a re-ingested source is performed (default mode).
- **Automatic access coordinator reset**: This mode allows the automatic reprocessing of already processed and re-ingested sources as soon as the respective input source has been moved into the configured done or error directory.
- **When input changed**: This mode behaves as described in `Manual access coordinator reset` while it performs an additional check whether the source has potentially changed (i.e., the name of the source is identical but the content differs).

**Wait for processing clearance** — When activated, new input sources are left unprocessed in the input directory until either a manual clearance is given through Operations or a JavaScript method `AccessCoordinator.giveClearance(source, stream, timeout?)` is executed.

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
