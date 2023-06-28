---
title: Output Kafka
description: Output Kafka Asset. Use this asset to output data to Kafka.
tags:
- output
- kafka
---

# Output Kafka

## Purpose

Defines output parameters to output to a Kafka topic.

This Asset is used within a Workflow definition.

![](.asset-output-kafka_images/9b3202ba.png "Asset Dependency Graph (Output Kafka)")

## Prerequisites

You need:
**A defined Format**

* [Format Generic](/docs/assets/formats/asset-format-generic)
* [Format Data Dictionary](/docs/assets/formats/asset-format-data-dictionary)
* [Format ASN.1](/docs/assets/formats/asset-format-asn1)

**A Kafka Sink:**

* [Sink Kafka](/docs/assets/sinks/asset-sink-kafka)

## Configuration

### Name & Description

![](.asset-output-kafka_images/525aeabe.png "Name & Description (Output Kafka)")

**`Name`** : Name of the Asset. Whitespaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Input Ports

![](.asset-output-kafka_images/ad0ceb69.png "Input Ports (Output Kafka)")

An output processor can have one or more input ports from which it receives data to then output.
**It must have at least one input port.**

A port can have a name and description. Names must exist and be unique within the processor.

You can add an input port by clicking on `Add Port` (1), or remove an input port by clicking on `Delete`.
You cannot delete the port if it is the last one within the processor.

### Format

Data written to a Kafka topic must be written in a format which must have been defined by you previously.

![](.asset-output-kafka_images/407783b7.png "Format (Output Kafka)")

If you have defined such a format, then you can select it from the list of available formats by clicking on the button next to the field (1).

### Kafka Sink

You need to assign a [Kafka Sink](/docs/assets/sinks/asset-sink-kafka). The Sink defines which topics can be written to.
The Sink must have been previously defined.

![](.asset-output-kafka_images/407783b7.png "Format (Output Kafka)")

Select the Sink by clicking on the button next to the field (1).

### Kafka Settings

* **`Parallelism`** : In order to accelerate writing to a Kafka topic, you can parallelize this process.
  Entering `100` here, for example allows layline.io to have 100 messages "in-flight" to Kafka in parallel to be written to a Kafka topic.

![](.asset-output-kafka_images/80f062f9.png "Kafka Settings (Output Kafka)")

### Topics & Partitions

The Kafka Output Processor gives you granular control to which topic data is written and how.
For this purpose we distinguish between two `Routing Modes`:

1. **`Routing Table`** : This mode allows you to define default as well as specific data-driven rules to which topics data is written to.
   Pick this mode when you want to have detailed control over topic access.

2. **`Exclusive Partition`** : This mode enables you to gain exclusive access to a Kafka partition.
   Pick this mode if you want to make sure you are the only one writing to a specific Kafka partition.
   An example would be multiple inputs reading from files and writing their content to Kakfa.
   However, you want to ensure, that one file's contents are always written to one partition only.

#### Routing Table Mode

In this mode, we can define HOW we want to route the data to respective Kafka topics.
By creating granular rules, we can specify that certain data goes to certain topics, based on the message's content.

##### Default handling

In case you have not, or don't want to define very specific rules (see below), you can fall back onto default rules.

![](.asset-output-kafka_images/3c29306e.png "Routing Table Default Settings (Output Kafka)")

###### Use default

When selecting the option `Use default` we define a default topic to write data to.
To define this, we can use [QuickScript](/docs/lang-ref/quickscript/quickscript).

Let's assume your default topic name is "mytopic", then you simply enter `"mytopic""` (include quotes) in the field.
In our example we have entered `strExpand("${lay:derivedDataTopic}")`.
This also is QuickScript which means that

1. the name of the topic is in an environment variable `derivedDataTopic` which is defined in an [Environment Asset](/docs/assets/resources/asset-resource-environment),
   and
2. this environment variable is expanded by the QuickScript function [`strExpand`](/docs/lang-ref/quickscript/quickscript#strexpand).

For Kafka topics which are partitioned we can define which partition to write the data to:

* **`Round Robin`** : Serve all partitions equally incoming messages will be evenly distributed across all available partitions of the given topic.

* **`Use key`** : Messages will be forwarded to a specific partition of the topic. The key of the partition is identified by `type` and the actual `key`.
  You can enter QuickScript for the key.

* **`Specify partition`** : Define the partition using QuickScript. Example `strExpand("${lay:myPartition}")`, where the partition name is specified in the environmment variable `myPartition`.

###### Discard

Discard message if no rule matches the data

###### Failure

Fail the processing if no rule matches. Processing will be marked as faulty and error will be propagated.

##### Routing Rules

Based on your settings above, this is where you can define individual routing rules for messages which shall be output to Kafka.
Rules are evaluated in order. The first one takes precedence over the second and so forth.
Use the respective buttons to add or move a new rule in the designated space:

![](.asset-output-kafka_images/d5ba3f79.png "Routing Rules (Output Kafka)")

Let's assume our condition for routing messages are as follows:

**1. Rule: "MyoutingRule"**

![](.asset-output-kafka_images/052505d4.png "Routing Rules (Output Kafka)")

**Rule**: The message field `message.D1.DETAIL_GPRS.ACCESS_POINT_NAME` must be either `"myName"`, OR `message.D1.DETAIL_GPRS.ACCOUNT_NUMBER` must be `"myAccount"`.
In that case route the message to topic `"mytopic"`.
Partitioning does not matter, which is why we set it to `Round Robin`

**2. Rule: "MyOtherRoutingRule"**

![](.asset-output-kafka_images/a7bf0f08.png "Rule 2: MyOtherRoutingRule (Output Kafka)")

**Rule**: The message field `message.D1.DETAIL_GPRS.ACCESS_POINT_NAME` must be  `"theName"`, AND `message.D1.DETAIL_GPRS.ACCOUNT_NUMBER` must be `"4711"`.
In that case route the message to topic `"othertopic"`.
Partitioning does not matter, which is why we set it to `Round Robin`

**Summary:**

We have two rules which are evaluated in order.
If rule 1 matches then the message is stored in topic `"mytopic"`. If rule 1 did not match but rule 2 matches, then the message will be stored in topic `"othertopic"`.
If none of the rules matches, then the default handling kicks in (see above).
In that case the message will be stored in topic described by `strExpand("${lay:derivedDataTopic}")`.

:::note Can't find what you are looking for?
Please note, that the creation of the online documentation is **Work-In-Progress**. It is constantly being updated.
Should you have questions or suggestions, please don't hesitate to contact us at support@layline.io .
:::


