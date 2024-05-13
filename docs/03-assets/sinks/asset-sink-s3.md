---
title: Sink S3
description: Sink S3 Asset. Use this to define the technical parameters for a AWS S3 sink connection.
tags:
  - sink
  - s3
  - aws
  - amazon
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';

# Sink S3

## Purpose

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.
Next to Amazon's S3 there are now various object storage providers which grant S3 compatible access to their storage solutions as well (e.g. Google Cloud Storage, IONOS, et al).

This UI helps to define the outbound connection parameters for an AWS S3 sink.

### This Asset can be used by:

| Asset type        | Link                                                                          |
|-------------------|-------------------------------------------------------------------------------|
| Output Processors | [Stream Output Processor](/docs/assets/processors-output/asset-output-stream) |

### Prerequisite

You need:
* [AWS Connection](/docs/assets/connections/asset-connection-aws)

## Configuration

### Name & Description

![](.asset-sink-s3_images/Screenshot22-04-2024NameandDescription_S3_Sink_Asset.png "Name & Description (S3 Sink Asset)")

**`Name`** : Name of the Asset. Spaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Required roles

![](.asset-sink-kafka-images/c2e6ec39.png "Required Roles (S3 Sink Asset)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching
roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### S3 Settings

![](.asset-sink-s3_images/Screenshot23-04-2024S3-Sink-Settings.png "S3 Settings (S3 Sink Asset)")

#### S3 Connection (A)

Select the [AWS Connection](/docs/assets/connections/asset-connection-aws) to use for this Asset. If it does not exist, you need to create it first.

#### S3 Bucket (B)

* **`S3 bucket name (B)`**: Once you picked a S3 Connection above the system will try to test the connection and list bucket names it can find.
  These will be available for selection here. You can check how many buckets could be found at (6)

* **`Prefix (1)`**: If you pick a valid bucket (B), then available prefixes (folders) will be available for selection here.
  You can check how many prefixes could be found for a given bucket at (7)

* **`Object Prefix / Object Suffix (2)`**: You can narrow down your bucket selection further by putting object prefix / suffix filters. 

* **`"Object already exists"-Handling (3)`**: Define your required handling in case the object "in process" already exists.

![](.asset-sink-s3_images/Screenshot2024-04-23S3-Sink-ObjectExistsHandling.png "S3 Settings - Object Exists Handling (S3 Sink Asset)")


* **`Use path style bucket access (4)`**: The S3 API allows accessing objects via legacy "_path style_" or "_virtual hosted style_".
  Check this box if you want to access objects via legacy path style access. You can read more about this [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html)

* **`Include sub folders (5)`**: Check this box if you want sub-folders to be included when querying the source.
  This means that all objects from sub-folders within a bucket/prefix combination will be considered for processing.

While you are entering and changing S3 bucket parameters, layline.io frequently tries to connect to the endpoint and retrieve bucket and prefix information.
The status of these attempts is displayed at the bottom of the group box.




## Related Topics

### Internal

* [S3 Connection](/docs/assets/connections/asset-connection-aws)
* [S3 Source](/docs/assets/sources/asset-source-s3)

### External

* [AWS Virtual hosting of buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html)

## Potential problems

---

<WipDisclaimer></WipDisclaimer>
