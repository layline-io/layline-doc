---
title: Sink Kafka
description: Sink Kafka Asset. Use this to define the technical parameters for a Kafka sink connection.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Sink Kafka

## Purpose

Defines the outbound connection parameters for a Kafka sink.

### This Asset can be used by:

| Asset type        | Link                                                                        |
|-------------------|-----------------------------------------------------------------------------|
| Output Processors | [Frame Output Processor](../processors-output/asset-output-frame) |

### Prerequisite

You need:

* [Kafka Connection](../connections/asset-connection-kafka)

## Configuration

### Name & Description

![](.asset-sink-kafka-images/c6e06d17.png "Name & Description (Kafka Sink)")

**`Name`** : Name of the Asset. Spaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Required roles

![](.asset-sink-kafka-images/c2e6ec39.png "Required Roles (Kafka Sink)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching
roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### Kafka Connection

![](.asset-sink-kafka-images/a44e1dd8.png "Kafka Connection (Kafka Sink)")

Select the [Kafka Connection](../connections/asset-connection-kafka) to use with this Asset.
If it does not exist, you need to create it first.

### Kafka Producer Settings

#### General

![](.asset-sink-kafka-images/bbbe60a1.png "General Kafka Producer Settings (Kafka Sink)")

* **`Parallelism`** : In order to accelerate writing to a Kafka topic, you can parallelize this process.
  Entering `100` here, for example allows layline.io to have 100 messages "in-flight" to Kafka in parallel to be written to a Kafka topic.

#### Additional Kafka Properties

Use this section to add configuration parameters available for Kafka Platform such as `compression.type` or even `ssl.keystore.key`.

![](.asset-sink-kafka-images/9cf62f34.png "Additional Kafka Properties (Kafka Sink)")

For a list of available properties please check [Confluent Producer Configurations](https://docs.confluent.io/platform/current/installation/configuration/producer-configs).

:::warning Attention: Kafka properties take precedence
Please note that properties defined here, take precedence over all other settings you may have provided in this UI.
You can use this to add, or override Kafka properties using these settings.
:::

#### Exclusive partition access

In case you want to exclusively write to one or more partitions, then **`Enable exclusive partition access`**.

![](.asset-sink-kafka-images/b78d3b53.png "Exclusive partition access (Kafka Sink)")

Click **`ADD TOPIC`** to add new topics. Enter the **`Topic`** in the new table row.

## Related Topics

### Internal

* [Kafka Input Processor](../processors-input/asset-input-kafka)
* [Kafka Source](../sources/asset-source-kafka)
* [Frame Output Processor](../processors-output/asset-output-frame)
* [Create and manage secrets](../resources/asset-resource-secret)

### External

* [Confluent Kafka: Producer Configurations](https://docs.confluent.io/platform/current/installation/configuration/producer-configs)

## Potential problems

---

<WipDisclaimer></WipDisclaimer>
