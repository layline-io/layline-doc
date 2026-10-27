---
title: Connection NFS
description: Connection NFS
tags:
  - connection
  - nfs
  - network file system

---

import WipDisclaimer from '../../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../../snippets/assets/_asset-required-roles.md';
import SinceVersion from '../../../../src/components/SinceVersion';

# Connection NFS

## Purpose

Defines the connection parameters for an NFS (Network File System) endpoint.

### This Asset can be used by:

| Asset type | Link                                                |
|------------|-----------------------------------------------------|
| Source     | [NFS Source](/docs/assets/workflow-assets/sources/asset-source-nfs.md) |
| Sink       | [NFS Sink](/docs/assets/workflow-assets/sinks/asset-sink-nfs)       |

## Configuration

### Name & Description

![Name & Description (Connection NFS)](.asset-connection-nfs_images/image_19.png "Name & Description (Connection NFS)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### NFS Settings

#### Server Configuration

![NFS Settings (Connection NFS)](.asset-connection-nfs_images/image_41.png "NFS Settings (Connection NFS)")


* **`Server`** : Hostname or IP address of the NFS server, e.g. 'nfs.myserver.com' or '192.168.1.100'.

* **`Export Path`** : The exported directory path on the NFS server, e.g. '/exports/data'.

* **`Permissions`** :

  * **`User id (UID)`** : The user id (UID) of the user that should access the NFS server.

  * **`Group id (GID)`** : The group id (GID) of the group that should access the NFS server. You can enter multiple group ids separated by commas.


  **NFS and Permissions: How It Works**
  NFS itself doesn’t authenticate users or manage user accounts—it trusts the client to provide the correct UID and GID. When a client accesses an NFS share, it sends the UID and GID of the user making the request. The NFS server then checks these IDs against the file permissions on the exported filesystem, applying the standard Linux read (r), write (w), and execute (x) permissions based on ownership and group membership.

  For example:

  - If a file on the NFS server is owned by UID 1000 and GID 1000 with permissions rw-r----- (owner read/write, group read, others none), a client user with UID 1000 can read and write, while a user with UID 2000 but GID 1000 can only read.
  The key here is consistency: the UID and GID must match between the client and server for permissions to behave as expected. NFS doesn’t inherently map usernames; it works purely with these numeric IDs.

* **`Max. parallel NFS commands (per cluster node)`** : The maximum number of parallel NFS commands that can be executed by each node in the cluster. Use this to limit the number of concurrent NFS operations on the server and avoid overload.

## Behavior

NFS Sources and Sinks share this connection's command executor. Commands (list, move, copy, housekeeping, and similar) run one after another on a reused NFS session. After a period of inactivity the executor closes that session so idle mounts do not linger.

### Long-running commands <SinceVersion version="2.5.18" />

The idle check used to look only at when the session was last *started*. A command that ran longer than the inactivity window could then be cancelled mid-flight when the timer fired and dropped the connection.

From 2.5.18, the executor disconnects on idle only when no command is still queued or running. Large listings, copies, and housekeeping jobs complete instead of failing because the connection went idle underneath them.

## Related Topics

### Internal

* [NFS Source](/docs/assets/workflow-assets/sources/asset-source-nfs.md)
* [NFS Sink](/docs/assets/workflow-assets/sinks/asset-sink-nfs)
* [Stream Input Processor](/docs/assets/workflow-assets/processors-input/asset-input-stream)
* [Stream Output Processor](/docs/assets/workflow-assets/processors-output/asset-output-stream)

---
<WipDisclaimer></WipDisclaimer>
