---
title: Virtual File System Service
description: Perform file and directory operations (read, write, copy, move, delete, list, zip) programmatically from JavaScript or Python.
tags:
  - service
  - virtual file system
  - vfs
  - file operations
---

import Testcase from '../../../snippets/assets/_asset-service-test.md';
import SinceVersion from '../../../../src/components/SinceVersion';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Virtual File System Service

Perform file and directory operations — read, write, copy, move, delete, list, and zip — programmatically from a [JavaScript Processor](../processors-flow/asset-flow-javascript.md) or [Python Processor](../processors-flow/asset-flow-python.md).

:::info Script-only service
The Virtual File System Service has no input/output ports and cannot be used as a standalone Workflow step. It must be invoked from script code.
:::

---

## What You'll Need

1. A [Virtual File System Connection](../connections/asset-connection-virtual-fs.md) with at least one mount point configured
2. A Script Processor to call the service from

---

## Configuration

### Name & Description

| Field | Description |
|-------|-------------|
| **Virtual FS Service name** | Asset identifier. This is the name you use in script code (e.g. `services.MyVfsService`). No spaces allowed. |
| **Virtual FS Service description** | Optional summary. |
| **Asset Usage** | Shows where this asset is referenced. Click to expand and jump to those locations. |

### Required Rolesx

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### Virtual FS Service Settings

| Field | Description |
|-------|-------------|
| **Connection** | The [Virtual File System Connection](../connections/asset-connection-virtual-fs.md) that defines which mount points and storage backends (local, SMB, OneDrive, SharePoint, etc.) this service can access. |

---

## Service Functions

<Tabs>
  <TabItem value="file" label="File Operations">

| Function | Description |
|----------|-------------|
| `CopyFile` | Copy a file from one location to another. |
| `MoveFile` | Move or rename a file. |
| `DeleteFile` | Delete a file. |
| `FileExists` | Check whether a file exists. Returns a boolean in the response `data`. |
| `ReadFile` | Read a file and return its contents. |
| `WriteFile` | Write data to a file. Creates the file if it does not exist. |

  </TabItem>
  <TabItem value="directory" label="Directory Operations">

| Function | Description |
|----------|-------------|
| `ListDir` | List the contents of a directory. <SinceVersion version="2.5.10" /> |
| `DeleteDir` | Delete a directory and all contents **recursively**. Use with caution. <SinceVersion version="2.5.10" /> |
| `ZipDir` | Create a zip archive from a directory. <SinceVersion version="2.5.10" /> |

  </TabItem>
</Tabs>

---

## Quickstart

### Step 1 — Create a Virtual File System Connection

Configure a [Virtual File System Connection](../connections/asset-connection-virtual-fs.md) with the mount points you need (e.g. `/data/inbox`, `/data/archive`).

### Step 2 — Create the Service Asset

Create a **Virtual File System Service** asset and select your connection in **Virtual FS Service Settings**.

### Step 3 — Map the Service in a Script Processor

In your JavaScript or Python Processor, add a **Service Mapping**:

| Field | Value |
|-------|-------|
| **Service** | Your Virtual File System Service asset |
| **Logical Service Name** | Any valid identifier, e.g. `MyVfsService` (no spaces) |

### Step 4 — Call the Service

All functions follow the same pattern:

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
// In your processor's onMessage() function:
const result = services.MyVfsService.FunctionName({
    param1: 'value',
    param2: 'value'
});
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
# In your processor's on_message() function:
result = services.MyVfsService.FunctionName({
    'param1': 'value',
    'param2': 'value'
})
```

  </TabItem>
</Tabs>

---

## Function Reference

The examples below assume your service is mapped as `MyVfsService`.

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
// Copy a file
services.MyVfsService.CopyFile({
    sourcePath: '/data/inbox/report.pdf',
    targetPath: '/data/archive/report.pdf'
});

// Move a file
services.MyVfsService.MoveFile({
    sourcePath: '/data/inbox/report.pdf',
    targetPath: '/data/archive/report.pdf'
});

// Delete a file
services.MyVfsService.DeleteFile({
    path: '/data/inbox/report.pdf'
});

// Check if a file exists
const exists = services.MyVfsService.FileExists({ path: '/data/inbox/report.pdf' });
if (!exists.data) {
    processor.logWarning('File not found');
}

// Read a file
const file = services.MyVfsService.ReadFile({ path: '/data/inbox/data.json' });
const records = JSON.parse(file.data.content);

// Write a file
services.MyVfsService.WriteFile({
    path: '/data/outbox/result.json',
    content: JSON.stringify(records)
});

// List a directory (2.5.10+)
const listing = services.MyVfsService.ListDir({
    path: '/data/inbox',
    recursive: false        // set true to include subdirectories
});
listing.data.forEach(entry => {
    processor.logInfo(`${entry.name} (${entry.isDirectory ? 'dir' : 'file'})`);
});

// Delete a directory recursively (2.5.10+)
services.MyVfsService.DeleteDir({
    path: '/data/temp/batch-001'
});

// Zip a directory (2.5.10+)
services.MyVfsService.ZipDir({
    sourcePath: '/data/outbox/invoice-batch-001',
    targetPath: '/data/archive/invoice-batch-001.zip',
    includeSubdirectories: true
});
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import json

# Copy a file
services.MyVfsService.CopyFile({
    'sourcePath': '/data/inbox/report.pdf',
    'targetPath': '/data/archive/report.pdf'
})

# Move a file
services.MyVfsService.MoveFile({
    'sourcePath': '/data/inbox/report.pdf',
    'targetPath': '/data/archive/report.pdf'
})

# Delete a file
services.MyVfsService.DeleteFile({
    'path': '/data/inbox/report.pdf'
})

# Check if a file exists
exists = services.MyVfsService.FileExists({'path': '/data/inbox/report.pdf'})
if not exists.data:
    processor.log_warning('File not found')

# Read a file
file = services.MyVfsService.ReadFile({'path': '/data/inbox/data.json'})
records = json.loads(file.data.content)

# Write a file
services.MyVfsService.WriteFile({
    'path': '/data/outbox/result.json',
    'content': json.dumps(records)
})

# List a directory (2.5.10+)
listing = services.MyVfsService.ListDir({
    'path': '/data/inbox',
    'recursive': False      # set True to include subdirectories
})
for entry in listing.data:
    entry_type = 'dir' if entry.isDirectory else 'file'
    processor.log_info(f"{entry.name} ({entry_type})")

# Delete a directory recursively (2.5.10+)
services.MyVfsService.DeleteDir({
    'path': '/data/temp/batch-001'
})

# Zip a directory (2.5.10+)
services.MyVfsService.ZipDir({
    'sourcePath': '/data/outbox/invoice-batch-001',
    'targetPath': '/data/archive/invoice-batch-001.zip',
    'includeSubdirectories': True
})
```

  </TabItem>
</Tabs>

:::note
Parameter names (`sourcePath`, `targetPath`, `path`, `content`, `recursive`, `includeSubdirectories`) must match the service function definitions. Confirm these in the UI or Service Testing tab if they differ in your version.
:::

### Return Values

Most functions return a response object with a `data` field:

| Function | `data` contents |
|----------|-----------------|
| `FileExists` | `true` or `false` |
| `ReadFile` | Object with `content` (string) and `contentType` |
| `ListDir` | Array of entries. Each entry has `name`, `path`, `isDirectory`, `size`, and `modified`. |
| `CopyFile`, `MoveFile`, `DeleteFile`, `WriteFile`, `DeleteDir`, `ZipDir` | Typically empty or null on success. Check for exceptions to detect errors. |

---

## Service Testing

<Testcase></Testcase>

---

## See Also

- [Virtual File System Connection](../connections/asset-connection-virtual-fs) — configuring mount points and storage backends
- [JavaScript Processor](../processors-flow/asset-flow-javascript) — calling services from JavaScript
- [Python Processor](../processors-flow/asset-flow-python) — calling services from Python
