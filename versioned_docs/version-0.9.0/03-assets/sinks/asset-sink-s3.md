---
title: Sink S3
description: Sink S3 Asset. Use this to define the technical parameters for a AWS S3 sink connection.
---

# Sink S3

## Purpose

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.
Next to Amazon's S3 there are now various object storage providers which grant S3 compatible access to their storage solutions as well (e.g. Google Cloud Storage, IONOS, et al).

This UI helps to define the outbound connection parameters for a AWS S3 sink. This Asset is required by:

* [Kafka Output Processor](/docs/assets/processors-output/asset-output-kafka)

## Prerequisite

You need:
* [Kafka Connection](/docs/assets/connections/asset-connection-kafka)

## Configuration

### Name & Description

![](.asset-sink-kafka-images/c6e06d17.png "Name & Description (S3 Sink Asset)")

**`Name`** : Name of the Asset. Whitespaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Required roles

![](.asset-sink-kafka-images/c2e6ec39.png "Required Roles (S3 Sink Asset)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### Kafka Connection

![](.asset-sink-kafka-images/a44e1dd8.png "Kafka Connection (S3 Sink Asset)")

Select the [Kafka Connection](/docs/assets/connections/asset-connection-kafka) to use with this Asset.
If it does not exist, you need to create it first.


### Kafka Producer Settings

#### General

![](.asset-sink-kafka-images/bbbe60a1.png "Genereal Kafka Producer Settings (S3 Sink Asset)")

* **`Parallelism`**: Tuning parameter of how many messages can be sent to Kafka in parallel. 
If nothing is specified, the default is _10,000_.

#### Additional Kafka Properties

Use this section to add configuration parameters available for Kafka Platform such as `compression.type` or even `ssl.keystore.key`.

![](.asset-sink-kafka-images/9cf62f34.png "Additional Kafka Properties (S3 Sink Asset)")

For a list of available properties please check [Confluent Producer Configurations](https://docs.confluent.io/platform/current/installation/configuration/producer-configs).

::: warning Attention: Kafka properties take precedence
Please note that properties defined here, take precedence over all other settings you may have provided in this UI. 
You can use this to add, or override Kafka properties using these settings.
:::

#### Exclusive partition access

In case you want to exclusively write to one or more partitions, then **`Enable exclusive partition access`**.

![](.asset-sink-kafka-images/b78d3b53.png "Exclusive partition access (S3 Sink Asset)")

Click **`ADD TOPIC`** to add new topics. Enter the **`Topic`** in the new table row.


## Related Topics

### Internal
* [Kafka Input Processor](/docs/assets/processors-input/asset-input-kafka)
* [Kafka Output Processor](/docs/assets/processors-output/asset-output-kafka)
* [Kafka Source](/docs/assets/sources/asset-source-kafka)
* [Create and manage secrets](/docs/assets/resources/asset-resource-secret)

### External
* [Confluent Kafka: Producer Configurations](https://docs.confluent.io/platform/current/installation/configuration/producer-configs)


## Potential problems

:::note Can't find what you are looking for?
Please note, that the creation of the online documentation is **Work-In-Progress**. It is constantly being updated.
Should you have questions or suggestions, please don't hesitate to contact us at support@layline.io .
:::

