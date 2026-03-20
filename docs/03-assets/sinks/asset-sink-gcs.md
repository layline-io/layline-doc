---
title: Sink GCS
description: Sink GCS Asset. Use this to define the technical parameters for writing to Google Cloud Storage.
tags:
  - sink
  - GCS
  - Google Cloud Storage
  - Google Cloud
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Sink GCS

## Purpose

Writes messages to a Google Cloud Storage (GCS) bucket as objects. Each incoming message produces one object in the configured bucket, under the configured prefix path.

## Prerequisites

- A [**Google Cloud Connection**](../connections/asset-connection-google-cloud) asset configured with the appropriate OAuth scopes.
- A project open in layline.io with the connection created above.

## Configuration

### Name & Description

**`Name`** — Unique name for this asset within the project.

**`Description`** — Optional description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it.

### Required Roles

In case you are deploying to a Cluster with Reactive Engine Nodes that have specific Roles configured, you can restrict use of this Asset to Nodes with matching roles. Leave empty to match all Nodes.

### Google Cloud Storage Settings

#### Connection

Select a [**Google Cloud Connection**](../connections/asset-connection-google-cloud) from the list. The connection must exist before you can configure the remaining fields.

#### Project ID

The Google Cloud project ID that owns the target bucket.

#### Bucket Name

The name of the GCS bucket to write to. Enter the bucket name as plain text.

#### Folder Prefix

A path prefix within the bucket under which objects will be written. For example, `logs/` or `data/output/`. Enter as plain text.

#### Object Prefix

An additional prefix prepended to the object name. This filters or qualifies the written objects further, for example distinguishing between multiple streams going to the same bucket/prefix.

#### Object Suffix

A suffix appended to the object name. Useful for setting file extensions such as `.json` or `.xml`.

#### Content Type

The MIME type to set on written objects, for example `application/json`. Defaults to `application/octet-stream` if not specified.

#### When Object Already Exists

Defines what happens when an object with the same name already exists in the bucket:

| Option | Behavior |
|--------|----------|
| **Transaction rollback** | Fail the transaction and roll back. |
| **Replace the existing object** | Overwrite the existing object. |
| **Create a new object using a numerical version counter as suffix** | Write a new object named `<prefix><name>.1`, `<prefix><name>.2`, etc. |
| **Create a new object using the current timestamp as suffix** | Write a new object with a timestamp suffix appended to the name. |

#### Create Sub Folders

When enabled, layline.io will create sub folders in the bucket as needed to match the configured prefix path. Disable this if the bucket structure is managed externally.

### Connection Status

The status bar at the bottom of the Google Cloud Storage Settings panel shows the state of the underlying connection. A green indicator means the connection is active; a red indicator means the connection is unavailable or failed.

## Behavior

Each incoming message to this sink produces one object in GCS. The object name is constructed as:

```
[<Folder Prefix>/][<Object Prefix>]<message-key>[<Object Suffix>]
```

Objects are written with the configured `Content Type`. If `Create Sub Folders` is enabled, missing intermediate folders are created automatically.

## Example

Given this configuration:

| Field | Value |
|-------|-------|
| Bucket Name | `my-gcs-bucket` |
| Folder Prefix | `output/` |
| Object Prefix | `events-` |
| Object Suffix | `.json` |
| Content Type | `application/json` |
| When Object Already Exists | `Replace the existing object` |

An incoming message with key `order-1234` will be written to GCS as:

```
my-gcs-bucket/output/events-order-1234.json
```

## See Also

- [**Google Cloud Connection**](../connections/asset-connection-google-cloud) — Authentication for GCS assets
- [**GCS Source**](../sources/asset-source-gcs) — Read objects from Google Cloud Storage

---
<WipDisclaimer></WipDisclaimer>
