---
title: Virtual File System Service
description: Virtual File System Service Asset. Use this to perform file operations against a Virtual File System from within a JavaScript or Python Processor.
tags:
  - service
  - virtual file system
  - vfs
---

import Testcase from '../../../snippets/assets/_asset-service-test.md';
import SinceVersion from '../../../src/components/SinceVersion';

# Virtual File System Service

## Purpose

The Virtual File System Service provides file operations — read, write, copy, move, delete, list, and zip directories — against the Virtual File System from within a Javascript or Python Processor. It allows you to manage files and directories programmatically in your script code, independent of any VFS Source or Sink.

:::info
The Virtual File System Service is a pure script-facing service. It has no input/output ports and cannot be used as a standalone processing step in a Workflow. It must be invoked from a [Javascript Processor](/docs/assets/workflow-assets/processors-flow/asset-flow-javascript) or a [Python Processor](/docs/assets/workflow-assets/processors-flow/asset-flow-python).
:::

## Configuration

### Name & Description

* **`Virtual FS Service name`** : Name of the Asset. This is the name you will use in your script to reference this service (e.g. `services.MyVfsService`). Spaces are not allowed in the name.

* **`Virtual FS Service description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it.
Click to expand and then click to follow, if any.

### Required Roles

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### Virtual FS Service Settings

* **`Connection`** : Select the [Virtual File System Connection](/docs/assets/workflow-assets/connections/asset-connection-virtual-fs) asset to use. This connection defines the mount points and storage backends (local filesystem, SMB, OneDrive, SharePoint, etc.) accessible to this service. The service will only be able to operate within the paths defined by that connection's mount points.

## Service Functions

The Virtual File System Service provides the following built-in functions:

| Function | Description | Available Since |
|----------|-------------|-----------------|
| `CopyFile` | Copy a file from one location to another in the virtual file system | 2.5.0 |
| `DeleteFile` | Delete a file from the virtual file system | 2.5.0 |
| `DeleteDir` | Delete a directory and all its contents recursively <SinceVersion version="2.5.10" /> | 2.5.10 |
| `FileExists` | Check if a file exists within the virtual file system; returns a boolean | 2.5.0 |
| `ListDir` | List the contents of a directory <SinceVersion version="2.5.10" /> | 2.5.10 |
| `MoveFile` | Move a file from one location to another | 2.5.0 |
| `ReadFile` | Read a file from the virtual file system and return its content | 2.5.0 |
| `WriteFile` | Write a file into the virtual file system | 2.5.0 |
| `ZipDir` | Create a zip archive from a directory <SinceVersion version="2.5.10" /> | 2.5.10 |

## Example — Using Virtual File System from a Script

### Step 1 — Create a Virtual File System Connection

Before using the Virtual File System Service, configure a [Virtual File System Connection](/docs/assets/workflow-assets/connections/asset-connection-virtual-fs) with the mount points you need to access. This connection defines which filesystem backends (local paths, SMB shares, OneDrive, SharePoint) are available.

### Step 2 — Create the Virtual File System Service

Create a new **Virtual File System Service** Asset. In **Virtual FS Service Settings**, select your Virtual File System Connection.

### Step 3 — Map the Service in a Script Processor

In your [Javascript Processor](/docs/assets/workflow-assets/processors-flow/asset-flow-javascript) or [Python Processor](/docs/assets/workflow-assets/processors-flow/asset-flow-python), add a **Service Mapping**:

* **Service**: Select your Virtual File System Service
* **Logical Service Name**: `MyVfsService` (or any name you will use in your script)

### Step 4 — Use in Your Script

You can now call any of the service functions from your script. The functions are invoked identically to any other service.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript">

**Copy a file:**
```javascript
export function onMessage() {
    services.MyVfsService.CopyFile({
        sourcePath: '/data/inbox/report.pdf',
        targetPath: '/data/archive/report.pdf'
    });
}
```

**Check if a file exists:**
```javascript
export function onMessage() {
    const exists = services.MyVfsService.FileExists({
        path: '/data/inbox/report.pdf'
    });

    if (!exists.data) {
        processor.logWarning('File not found, skipping');
        return;
    }

    // Continue processing...
}
```

**Read and process a file:**
```javascript
export function onMessage() {
    const fileContent = services.MyVfsService.ReadFile({
        path: '/data/inbox/data.json'
    });

    if (fileContent && fileContent.data) {
        const records = JSON.parse(fileContent.data.content);
        processor.logInfo('Loaded ' + records.length + ' records');
    }
}
```

**Write a file:**
```javascript
export function onMessage() {
    services.MyVfsService.WriteFile({
        path: '/data/outbox/result.json',
        content: JSON.stringify(resultData)
    });
}
```

**Move a file:**
```javascript
export function onMessage() {
    services.MyVfsService.MoveFile({
        sourcePath: '/data/inbox/report.pdf',
        targetPath: '/data/archive/report.pdf'
    });
}
```

**Delete a file:**
```javascript
export function onMessage() {
    services.MyVfsService.DeleteFile({
        path: '/data/inbox/report.pdf'
    });
}
```

  </TabItem>
  <TabItem value="python" label="Python">

**Copy a file:**
```python
def on_message():
    services.MyVfsService.CopyFile({
        'sourcePath': '/data/inbox/report.pdf',
        'targetPath': '/data/archive/report.pdf'
    })
```

**Check if a file exists:**
```python
def on_message():
    exists = services.MyVfsService.FileExists({
        'path': '/data/inbox/report.pdf'
    })

    if not exists.data:
        processor.log_warning('File not found, skipping')
        return

    # Continue processing...
```

**Read and process a file:**
```python
def on_message():
    file_content = services.MyVfsService.ReadFile({
        'path': '/data/inbox/data.json'
    })

    if file_content and file_content.data:
        records = json.loads(file_content.data.content)
        processor.log_info('Loaded ' + str(len(records)) + ' records')
```

**Write a file:**
```python
def on_message():
    services.MyVfsService.WriteFile({
        'path': '/data/outbox/result.json',
        'content': json.dumps(result_data)
    })
```

**Move a file:**
```python
def on_message():
    services.MyVfsService.MoveFile({
        'sourcePath': '/data/inbox/report.pdf',
        'targetPath': '/data/archive/report.pdf'
    })
```

**Delete a file:**
```python
def on_message():
    services.MyVfsService.DeleteFile({
        'path': '/data/inbox/report.pdf'
    })
```

  </TabItem>
</Tabs>

:::note
The parameter names (`sourcePath`, `targetPath`, `path`, `content`) match the service function definitions in the source. Confirm these with the UI or Service Testing tab if they differ in your version.
:::

### New Functions in 2.5.10

#### ListDir <SinceVersion version="2.5.10" />

Lists the contents of a directory, returning file and subdirectory information.

**Parameters:**
- `path` (string, required): The directory path to list
- `recursive` (boolean, optional): If true, lists contents recursively. Default: false

**Returns:** Array of file/directory entries with:
- `name`: Filename or directory name
- `path`: Full path
- `isDirectory`: Boolean indicating if entry is a directory
- `size`: File size in bytes (files only)
- `modified`: Last modified timestamp

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
export function onMessage() {
    const listing = services.MyVfsService.ListDir({
        path: '/data/inbox',
        recursive: false
    });

    if (listing && listing.data) {
        listing.data.forEach(entry => {
            processor.logInfo(`Found: ${entry.name} (${entry.isDirectory ? 'directory' : 'file'})`);
        });
    }
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
def on_message():
    listing = services.MyVfsService.ListDir({
        'path': '/data/inbox',
        'recursive': False
    })

    if listing and listing.data:
        for entry in listing.data:
            entry_type = 'directory' if entry.isDirectory else 'file'
            processor.log_info(f"Found: {entry.name} ({entry_type})")
```

  </TabItem>
</Tabs>

#### DeleteDir <SinceVersion version="2.5.10" />

Deletes a directory and all its contents recursively. Use with caution — this operation cannot be undone.

**Parameters:**
- `path` (string, required): The directory path to delete

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
export function onMessage() {
    // Delete a temporary processing directory
    services.MyVfsService.DeleteDir({
        path: '/data/temp/processing-batch-001'
    });
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
def on_message():
    # Delete a temporary processing directory
    services.MyVfsService.DeleteDir({
        'path': '/data/temp/processing-batch-001'
    })
```

  </TabItem>
</Tabs>

#### ZipDir <SinceVersion version="2.5.10" />

Creates a zip archive from a directory, optionally including all subdirectories.

**Parameters:**
- `sourcePath` (string, required): The directory path to zip
- `targetPath` (string, required): The output zip file path
- `includeSubdirectories` (boolean, optional): If true, includes subdirectories. Default: true

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
export function onMessage() {
    // Create a zip archive of processed files
    services.MyVfsService.ZipDir({
        sourcePath: '/data/outbox/invoice-batch-001',
        targetPath: '/data/archive/invoice-batch-001.zip',
        includeSubdirectories: true
    });
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
def on_message():
    # Create a zip archive of processed files
    services.MyVfsService.ZipDir({
        'sourcePath': '/data/outbox/invoice-batch-001',
        'targetPath': '/data/archive/invoice-batch-001.zip',
        'includeSubdirectories': True
    })
```

  </TabItem>
</Tabs>

## Service Testing

<Testcase></Testcase>

## See Also

- [Virtual File System Connection](/docs/assets/workflow-assets/connections/asset-connection-virtual-fs) — configuring mount points and storage backends
- [JavaScript Processor](/docs/assets/workflow-assets/processors-flow/asset-flow-javascript) — calling services from JavaScript
- [Python Processor](/docs/assets/workflow-assets/processors-flow/asset-flow-python) — calling services from Python
