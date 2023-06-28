---
title: Source Kafka
description: Source Kafka Asset. Use this to define the technical parameters for a Kafka source connection.
tags:
  - source
  - kafka
  - confluent
---

# Source Kafka


## Purpose

Defines the inbound connection parameters for a Kafka Source. This Asset is required by:

* [Kafka Input Processor](/docs/assets/processors-input/asset-input-kafka)

## Prerequisite

You need:
* [Kafka Connection](/docs/assets/connections/asset-connection-kafka)

## Configuration

### Name & Description

![](.asset-source-kafka-images/ba82f88d.png "Name & Description (Kafka Source Asset)")

**`Name`** : Name of the Asset. Whitespaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Required roles

![](.asset-source-kafka-images/c2e6ec39.png "Required Roles (Kafka Source Asset)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### Kafka Connection

![](.asset-source-kafka-images/a44e1dd8.png "Kafka Connection (Kafka Source Asset)")

Select the [Kafka Connection](/docs/assets/connections/asset-connection-kafka) to use with this Asset.
If it does not exist, you need to create it first.

#### Additional Kafka Properties

Use this section to add configuration parameters available for Kafka Platform such as `receive.buffer.bytes` or even `ssl.keystore.key`.

![](.asset-source-kafka-images/a7a64876.png "Additional Kafka Properties (Kafka Source Asset)")

For a list of available properties please check [Confluent Consumer Configurations](https://docs.confluent.io/platform/current/installation/configuration/consumer-configs).

::: warning Attention: Kafka properties take precedence
Please note that properties defined here, take precedence over all other settings you may have provided in this UI. 
You can use this to add, or override Kafka properties using these settings.
:::

#### Exclusive partition access

In case you want to exclusively access one or more partitions, then **`Enable exclusive partition access`**.

![](.asset-source-kafka-images/1b7cc1c6.png "Exclusive partition access (Kafka Source Asset)")

Click **`ADD TOPIC`** to add new topics. Enter the **`Topic`** and **`Group Id`** of the consumer group in the new table row.   


## Related Topics

### Internal
* [Kafka Input Processor](/docs/assets/processors-input/asset-input-kafka)
* [Kafka Output Processor](/docs/assets/processors-output/asset-output-kafka)
* [Kafka Sink](/docs/assets/sinks/asset-sink-kafka)
* [Kafka Connection](/docs/assets/connections/asset-connection-kafka)

### External
* [Confluent Kafka: Consumer Configurations](https://docs.confluent.io/platform/current/installation/configuration/consumer-configs)

## Potential problems

:::note Can't find what you are looking for?
Please note, that the creation of the online documentation is **Work-In-Progress**. It is constantly being updated.
Should you have questions or suggestions, please don't hesitate to contact us at support@layline.io .
:::

