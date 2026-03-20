---
title: Connection Google Cloud
description: Connection Google Cloud
tags:
  - connection
  - Google Cloud
  - GCS
  - OAuth
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Connection Google Cloud

## Purpose

Provides OAuth-based authentication for Google Cloud services. This connection is used by GCS Sink and GCS Source to authenticate against Google Cloud Storage.

## Configuration

### Name & Description

**`Name`** — Unique name for this asset within the project.

**`Description`** — Optional description of what this connection is used for.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it.

### Required Roles

In case you are deploying to a Cluster with Reactive Engine Nodes that have specific Roles configured, you can restrict use of this Asset to Nodes with matching roles. Leave empty to match all Nodes.

### Google Cloud Settings

#### Credential Type

Select the OAuth flow to use:

| Option | Description |
|--------|-------------|
| **OAuth Client Credentials** | Service-account style authentication using a client ID and secret. |
| **OAuth Device Code** | User-identity authentication via device code flow. |

#### Authority

The OAuth authority URL. Defaults to `https://accounts.google.com`. In most cases, this does not need to be changed.

#### Client ID

The Google OAuth client ID. Defaults to layline.io's shared client ID. You can replace this with your own OAuth client ID if needed.

#### Scopes

Add the OAuth scopes required for your use case. Each scope is entered as a chip — type the scope value and press **Enter** to add it.

Default scopes:

- `offline_access`
- `user.read`

## Behavior

The connection is validated at configuration time. The actual reachability of Google Cloud services is also confirmed at workflow runtime when the Reactive Engine attempts to use this connection.

## See Also

- [**GCS Sink**](../sinks/asset-sink-gcs) — Write objects to Google Cloud Storage
- [**GCS Source**](../sources/asset-source-gcs) — Read objects from Google Cloud Storage

---
<WipDisclaimer></WipDisclaimer>
