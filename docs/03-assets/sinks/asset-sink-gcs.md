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

Writes messages to a Google Cloud Storage (GCS) bucket as objects. Each incoming message produces one object in the configured bucket, under the configured prefix path. Authentication is handled via a linked Google Cloud Connection asset using OAuth 2.0.

## Prerequisites

- A [**Google Cloud Connection**](../connections/asset-connection-google-cloud) asset configured with the appropriate OAuth scopes.
- A Google Cloud project with the Google Cloud Storage API enabled.
- A GCS bucket in that project.

## Configuration

### Name & Description

![Name & Description (Sink GCS)](.asset-sink-gcs_images/asset-sink-gcs-name-description.png "Name & Description (Sink GCS)")

| Field | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| Name  | ✓        | String | —      | Unique name for this asset within the project. Spaces are not allowed. |
| Description | — | String | —      | Optional description of what this sink is used for. |

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it.

### Required Roles

![Required Roles (Sink GCS)](.asset-sink-gcs_images/asset-sink-gcs-required-roles.png "Required Roles (Sink GCS)")

| Field | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| Required Roles | — | String | — | Restricts use of this Asset to Reactive Engine Nodes with matching Role names. Leave empty to match all Nodes. |

### Google Cloud Storage Settings

![Google Cloud Storage Settings (Sink GCS)](.asset-sink-gcs_images/asset-sink-gcs-settings.png "Google Cloud Storage Settings (Sink GCS)")

| Field | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| Connection | ✓ | Reference | — | The [**Google Cloud Connection**](../connections/asset-connection-google-cloud) to use. Must be selected first — all other fields are unavailable until a connection is chosen. |
| Project ID *(inheritable)* | — | String | — | The Google Cloud project ID that owns the target bucket. |
| Bucket Name *(inheritable)* | — | String | — | The name of the GCS bucket to write to. Enter as plain text. Bucket existence is not validated at configuration time — it is checked at workflow runtime. |
| Folder Prefix *(inheritable)* | — | String | — | A path prefix within the bucket under which objects will be written (e.g., `logs/` or `data/output/`). GCS has a flat namespace — see [GCS-Specific Notes](#gcs-specific-notes) for details. |
| Object Prefix *(inheritable)* | — | String | — | An additional prefix prepended to the object name. Use this to distinguish between multiple streams going to the same bucket/prefix combination. |
| Object Suffix *(inheritable)* | — | String | — | A suffix appended to the object name. Useful for setting file extensions such as `.json` or `.xml`. |
| Content Type *(inheritable)* | — | String | `application/octet-stream` | The MIME type to set on written objects. Example: `application/json`. |
| When Object Already Exists | — | Enum | `Transaction rollback` | What happens when an object with the same key already exists in the bucket. Options: `Transaction rollback` — fail and roll back the transaction; `Replace the existing object` — overwrite it; `Create a new object using a numerical version counter as suffix` — writes `<key>.1`, `<key>.2`, etc.; `Create a new object using the current timestamp as suffix` — appends a timestamp to the key. |
| Create Sub Folders *(inheritable)* | — | Boolean | `false` | When `true`, layline.io creates intermediate key prefixes in the bucket as needed for the configured folder prefix path. When `false` (default), objects are written directly to the specified prefix. Disable this if the bucket structure is managed externally. |

The connection status indicator at the bottom of the panel shows whether the selected Google Cloud Connection is active. A green indicator means the connection is working and the bucket list was retrieved. A red indicator means the connection failed.

## GCS-Specific Notes

### Flat Namespace

GCS does not have a real folder hierarchy. What appear as "folders" in the Google Cloud Console or `gsutil` are simply `/`-delimited prefixes in object keys. For example, the object `logs/2026/03/app.log` is a single object — there is no `logs/` folder that must exist before `logs/2026/03/app.log` can be created.

The **Folder Prefix** and **Create Sub Folders** fields work with these key prefixes, not with a physical directory structure.

### Authentication

GCS Sink uses OAuth 2.0 for authentication — there is no access key / secret key mechanism. The OAuth credentials are defined in the linked Google Cloud Connection asset.

### Project ID vs. Region

Unlike AWS S3, which uses a region, GCS organizes resources by **project**. You must specify the Google Cloud project ID that owns the target bucket. This project must be the same project that the OAuth client in the Google Cloud Connection was created in.

## Behavior

Each incoming message to this sink produces one object in GCS. The object key is constructed as:

```
[<Folder Prefix>/][<Object Prefix>]<message-key>[<Object Suffix>]
```

For example, given:

| Field | Value |
|-------|-------|
| Bucket Name | `my-gcs-bucket` |
| Folder Prefix | `output/` |
| Object Prefix | `events-` |
| Object Suffix | `.json` |

An incoming message with key `order-1234` will be written to GCS as:

```
my-gcs-bucket/output/events-order-1234.json
```

## Example

Given this configuration:

| Field | Value |
|-------|-------|
| Connection | `my-gc-connection` |
| Project ID | `my-gcp-project` |
| Bucket Name | `my-gcs-bucket` |
| Folder Prefix | `output/` |
| Object Prefix | `events-` |
| Object Suffix | `.json` |
| Content Type | `application/json` |
| When Object Already Exists | `Replace the existing object` |
| Create Sub Folders | `false` |

An incoming message with key `order-1234` will be written to GCS as:

```
my-gcs-bucket/output/events-order-1234.json
```

If an object with that key already exists, it is replaced.

## See Also

- [**Google Cloud Connection**](../connections/asset-connection-google-cloud) — Authentication for GCS assets
- [**GCS Source**](../sources/asset-source-gcs) — Read objects from Google Cloud Storage

---
<WipDisclaimer></WipDisclaimer>
