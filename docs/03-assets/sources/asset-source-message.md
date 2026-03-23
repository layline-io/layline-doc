---
title: Source Message
description: Message Source Asset. Use this to define internal message topics for inter-Engine communication.
tags:
  - source
  - message
  - topic
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Source Message

## Purpose

Define a Message Source. A Message Source defines one or more topics that can be used to exchange messages between Workflows, Processors, and other Assets within a layline.io project. It acts as an internal message broker — topics are shared across the Reactive Engine cluster and can be consumed by multiple processors.

### This Asset can be used by:

| Asset type | Link |
|------------|------|
| Input Processors | [Stream Input](../processors-input/asset-input-stream) |
| | [Frame Input](../processors-input/asset-input-frame) |

## Configuration

### Name & Description

* **`Source Name`** : Name of the Asset. Spaces are not allowed in the name.

* **`Source Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it.
Click to expand and then click to follow, if any.

### Required Roles

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles
configured, then you **can** restrict use of this Asset to those Nodes with matching roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all
Nodes (no restriction).

### Throttling & Failure Handling

Controls how the source manages message flow and how it responds to downstream failures.

#### Throttling

* **`Max. new streams`** : Maximum number of new stream connections allowed per time unit. Default: `5` per `Minute`.

#### Backoff Failure Handling

When a downstream failure occurs, the source backs off before retrying:

* **`Min. failure backoff`** : Initial minimum backoff time after a failure. Default: `15` `Seconds`.

* **`Max. failure backoff`** : Maximum backoff time cap. Default: `60` `Seconds`.

* **`Reset after number of successful streams`** : Number of successful streams required before the failure backoff counter is reset. Default: `5`.

* **`Reset after time without failure streams`** : Time duration with no failures before the backoff counter is reset. Default: `60` `Seconds`.

### Stream Settings

* **`Stream name`** : The name of the internal stream used to publish messages from this source. All topics in this source belong to this stream.

### Topics

Topics define the individual message channels within the stream. Each topic can be independently scoped.

Click **Add Topic** to add a new topic entry.

| Column | Description |
|--------|-------------|
| **Topic** | The name of the topic |
| **Number of Partitions** | Number of partitions for this topic (affects parallelism) |
| **Scope** | `Node` — topic is local to each Engine node<br>`Cluster` — topic is shared across the entire cluster |
| **Description** | Optional description of the topic |

### Using Topics from a JavaScript Processor

Topics defined in a Message Source can be referenced from JavaScript Processors via the `sources` global:

```javascript
// Reference a topic from the Message Source
let topic = sources.MyMessageSource.getTopic("orders");
```

For more information, see [JavaScript Processor](../processors-flow/asset-flow-javascript.md).

---

<WipDisclaimer></WipDisclaimer>
