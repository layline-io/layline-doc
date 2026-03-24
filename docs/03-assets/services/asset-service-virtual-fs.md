---
title: VirtualFs Service
description: VirtualFs Service Asset. Use this to perform file operations against a Virtual File System from within a JavaScript Processor.
tags:
  - service
  - virtual file system
  - vfs
---

import Testcase from '../../snippets/assets/_asset-service-test.md';

# VirtualFs Service

## Purpose

The VirtualFs Service provides file operations — read, write, copy, move, delete — against the Virtual File System from within a Javascript Processor. It allows you to manage files programmatically in your JavaScript code, independent of any VFS Source or Sink.

:::info
The VirtualFs Service is a pure JavaScript-facing service. It has no input/output ports and cannot be used as a standalone processing step in a Workflow. It must be invoked from a [Javascript Processor](../processors-flow/asset-flow-javascript).
:::

## Configuration

### Name & Description

* **`Virtual FS Service name`** : Name of the Asset. This is the name you will use in JavaScript to reference this service (e.g. `services.MyVfsService`). Spaces are not allowed in the name.

* **`Virtual FS Service description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it.
Click to expand and then click to follow, if any.

### Required Roles

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### Virtual FS Service Settings

* **`Connection`** : Select the [Virtual File System Connection](../connections/asset-connection-virtual-fs) asset to use. This connection defines the mount points and storage backends (local filesystem, SMB, OneDrive, SharePoint, etc.) accessible to this service. The service will only be able to operate within the paths defined by that connection's mount points.

## Service Functions

The VirtualFs Service provides the following built-in functions:

| Function | Description |
|----------|-------------|
| `CopyFile` | Copy a file from one location to another in the virtual file system |
| `DeleteFile` | Delete a file from the virtual file system |
| `FileExists` | Check if a file exists within the virtual file system; returns a boolean |
| `MoveFile` | Move a file from one location to another |
| `ReadFile` | Read a file from the virtual file system and return its content |
| `WriteFile` | Write a file into the virtual file system |

## Example — Using VirtualFs from JavaScript

### Step 1 — Create a Virtual File System Connection

Before using the VirtualFs Service, configure a [Virtual File System Connection](../connections/asset-connection-virtual-fs) with the mount points you need to access. This connection defines which filesystem backends (local paths, SMB shares, OneDrive, SharePoint) are available.

### Step 2 — Create the VirtualFs Service

Create a new **VirtualFs Service** Asset. In **Virtual FS Service Settings**, select your Virtual File System Connection.

### Step 3 — Map the Service in a Javascript Processor

In your [Javascript Processor](../processors-flow/asset-flow-javascript), add a **Service Mapping**:

* **Service**: Select your VirtualFs Service
* **Logical Service Name**: `MyVfsService` (or any name you will use in your script)

### Step 4 — Use in JavaScript

You can now call any of the service functions from your script:

**Copy a file:**
```javascript
services.MyVfsService.CopyFile({
    sourcePath: '/data/inbox/report.pdf',
    targetPath: '/data/archive/report.pdf'
});
```

**Check if a file exists:**
```javascript
const exists = services.MyVfsService.FileExists({
    path: '/data/inbox/report.pdf'
});

if (!exists.data) {
    processor.logWarning('File not found, skipping');
    return;
}
```

**Read and process a file:**
```javascript
const fileContent = services.MyVfsService.ReadFile({
    path: '/data/inbox/data.json'
});

if (fileContent && fileContent.data) {
    const records = JSON.parse(fileContent.data.content);
    processor.logInfo('Loaded ' + records.length + ' records');
}
```

**Write a file:**
```javascript
services.MyVfsService.WriteFile({
    path: '/data/outbox/result.json',
    content: JSON.stringify(resultData)
});
```

**Move a file:**
```javascript
services.MyVfsService.MoveFile({
    sourcePath: '/data/inbox/report.pdf',
    targetPath: '/data/archive/report.pdf'
});
```

**Delete a file:**
```javascript
services.MyVfsService.DeleteFile({
    path: '/data/inbox/report.pdf'
});
```

## Service Testing

<Testcase></Testcase>

## See Also

- [Virtual File System Connection](../connections/asset-connection-virtual-fs) — configuring mount points and storage backends
- [JavaScript Processor](../processors-flow/asset-flow-javascript) — calling services from JavaScript
