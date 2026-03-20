---
title: Source Google Cloud Storage
description: Source Google Cloud Storage
tags:
  - source
  - google cloud
  - gcs
  - storage
  - cloud
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Source Google Cloud Storage

## Purpose

Polls one or more Google Cloud Storage (GCS) buckets for objects and makes them available to downstream processors. Authentication is handled via a [Google Cloud Connection](../connections/asset-connection-google-cloud) using OAuth 2.0. Objects can be filtered by prefix, suffix, and regular expression patterns. Housekeeping rules can be configured to automatically delete processed objects after a configurable age threshold.

### This Asset can be used by:

| Asset type       | Link                                                               |
|------------------|--------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](../processors-input/asset-input-stream)   |

### Prerequisites

You need:

- A [**Google Cloud Connection**](../connections/asset-connection-google-cloud) with a valid OAuth client configured
- A GCS bucket reachable from the Google Cloud project referenced by the connection

## Configuration

### Name & Description

![Name & Description (Google Cloud Storage Source)](./.Google_Cloud_Storage_Source_images/gcs-source-name-description.png "Name & Description (Google Cloud Storage Source)")

**Name** — Unique name for this asset within the project. Spaces are not allowed.

**Description** — Optional description of what this source is used for.

**Asset Usage** — Shows how many times this asset is referenced by other assets, workflows, or deployments. Expand to see the full list.

### Required Roles

![Required Roles (Google Cloud Storage Source)](./.Google_Cloud_Storage_Source_images/gcs-source-required-roles.png "Required Roles (Google Cloud Storage Source)")

In case you are deploying to a Cluster with Reactive Engine Nodes that have specific Roles configured, you can restrict use of this Asset to Nodes with matching roles. Leave empty to match all Nodes.

### Throttling & Failure Handling

![Throttling & Failure Handling (Google Cloud Storage Source)](./.Google_Cloud_Storage_Source_images/gcs-source-throttling.png "Throttling & Failure Handling (Google Cloud Storage Source)")

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

![Polling & Processing (Google Cloud Storage Source)](./.Google_Cloud_Storage_Source_images/gcs-source-polling.png "Polling & Processing (Google Cloud Storage Source)")

This source does not reflect a stream, but an object-based storage source which does not signal the existence of new objects to observers. We therefore need to define how often we want to look up (poll) the source for new objects to process.

**Polling trigger** — Choose between `Fixed rate` polling and `Cron tab style` polling.

**Polling interval [sec]** — Enter the interval in seconds in which the configured source should be queried for new objects (for Fixed rate mode).

**Polling timeout [sec]** — Defines the time in seconds to wait until a polling request fails. Set it high enough so that the endpoint responds under normal operation.

**Stable time [sec]** — Defines the number of seconds that object metadata must stay unchanged before the object is considered stable for processing.

**Ordering** — When listing objects from the source for processing, define the order:

- Alphabetically, ascending
- Alphabetically, descending
- Last modified, ascending
- Last modified, descending

**Reprocessing mode** — Relates to layline.io's Access Coordinator feature:

- **Manual access coordinator reset**: Any source element processed and stored in layline.io's history needs manual reset within the Sources Coordinator before reprocessing of a re-ingested source is performed (default mode).
- **Automatic access coordinator reset**: This mode allows the automatic reprocessing of already processed and re-ingested sources as soon as the respective input source has been moved into the configured done or error directory.
- **When input changed**: This mode behaves as described in `Manual access coordinator reset` while it performs an additional check whether the source has potentially changed (i.e., the name of the source is identical but the content differs).

**Wait for processing clearance** — When activated, new input sources are left unprocessed until either a manual clearance is given through Operations or a JavaScript method `AccessCoordinator.giveClearance(source, stream, timeout?)` is executed.

### Input Buckets

![Input Buckets (Google Cloud Storage Source)](./.Google_Cloud_Storage_Source_images/gcs-source-input-buckets.png "Input Buckets (Google Cloud Storage Source)")

The **Input Buckets** section defines which GCS buckets to poll and how to filter the objects within them.

Click **"+ ADD A BUCKET"** to add a new bucket entry. Use the toolbar to reorder, copy, or paste bucket entries.

#### Bucket Entry Fields

**Connection** — Select the [Google Cloud Connection](../connections/asset-connection-google-cloud) to use for accessing this bucket. The dropdown shows only valid Google Cloud Connection assets.

![Bucket Connection](./.Google_Cloud_Storage_Source_images/gcs-source-bucket-connection.png "Bucket Connection")

**Project Id** — The Google Cloud project ID that owns the target bucket.

**Bucket name** — The name of the GCS bucket to poll.

**Folder prefix** — An optional object key prefix to narrow down the scope within the bucket (e.g., `media/`). Only objects whose keys start with this prefix are considered.

![Bucket Detail — Project Id, Bucket Name, Folder Prefix](./.Google_Cloud_Storage_Source_images/gcs-source-bucket-detail.png "Bucket Detail — Project Id, Bucket Name, Folder Prefix")

**Object regular expression** — A regular expression applied to the full object key to determine whether an object should be processed (e.g., `\S+\.csv` matches any key ending in `.csv`).

**Object prefix regular expression** — A regular expression filter applied to the beginning of the object key. Optional.

**Object suffix regular expression** — A regular expression filter applied to the end of the object key (e.g., `\.csv`). Optional.

**Include sub folders** — When enabled, objects under sub-prefixes within the bucket/folder prefix scope are also considered for processing. Default: disabled.

#### Housekeeping

![Housekeeping (Google Cloud Storage Source)](./.Google_Cloud_Storage_Source_images/gcs-source-housekeeping.png "Housekeeping (Google Cloud Storage Source)")

**Enable housekeeping** — When enabled, objects that have been fully processed are automatically deleted after a configurable age threshold.

**Delete after** — Age threshold for housekeeping deletion. Objects older than this value are deleted.

**Unit** — Time unit for the Delete after threshold: `Minutes`, `Hours`, or `Days`.

**Execute housekeeping at** — A cron expression defining when housekeeping runs (e.g., `0 0 0 ? * * *` runs daily at midnight). Click the calendar icon to open the cron expression editor.

#### Enable / Disable Bucket

Each bucket entry can be individually enabled or disabled, or controlled via a string expression. Select **Enabled** or **Disabled** from the dropdown, or choose **"Set via string expression"** to use a dynamic expression.

## Behavior

The Source polls each configured bucket at the interval defined in **Polling & Processing**. Objects that match all applicable filters (prefix, suffix, regex) and are in the ENABLED state are queued for processing.

When an object is fully processed by the downstream workflow, the housekeeping rules determine whether it is deleted or retained. If housekeeping is disabled, objects remain in the bucket indefinitely.

The **Access Coordinator** tracks which objects have been processed to prevent duplicate processing on reprocessing runs. See **Reprocessing mode** in Polling & Processing for the available modes.

## See Also

- [**Google Cloud Connection**](../connections/asset-connection-google-cloud) — OAuth configuration for GCS access
- [**GCS Sink**](../sinks/asset-sink-gcs) — Write objects to Google Cloud Storage
- [**VFS Source**](../sources/asset-source-virtual-fs) — Read files from a Virtual File System mount

---
<WipDisclaimer></WipDisclaimer>
