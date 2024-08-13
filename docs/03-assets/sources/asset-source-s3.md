---
title: Source S3
description: Source S3 Asset. Use this to define the technical parameters for a AWS S3 source connection.
tags:
  - source
  - s3
  - aws
  - amazon
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import PollingAndProcessing from '../../snippets/assets/_asset-source-polling-and-processing.md';
import ThrottlingAndFailure from '../../snippets/assets/_asset-source-throttling-and-failure.md';

# Source S3

## Purpose

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.
Next to Amazon's S3 there are now various object storage providers which grant S3 compatible access to their storage solutions as well (e.g. Google Cloud Storage, IONOS, et al).

This UI helps to define the specific bucket and folder source of an S3 connected endpoint. 

### This Asset can be used by:

| Asset type       | Link                                                                       |
|------------------|----------------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](../processors-input/asset-input-stream) |


## Prerequisite

You need:
* [AWS Connection](../connections/asset-connection-aws)

## Configuration

### Name & Description

![](.asset-source-s3-images/bb090d93.png "Name & Description (S3 Source)")

**`Name`** : Name of the Asset. Spaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Required roles

![](.asset-source-kafka-images/c2e6ec39.png "Required Roles (S3 Source)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### Throttling & Failure Handling

<ThrottlingAndFailure></ThrottlingAndFailure>

### Polling & Processing

<PollingAndProcessing></PollingAndProcessing>

### S3 Connection

![](.asset-source-s3-images/3e8a642a.png "AWS Connection (S3 Source)")

Select the previously configured [AWS Connection](../connections/asset-connection-aws) to use for this Source.

### S3 Bucket

![](.asset-source-s3-images/14e005bb.png "S3 Bucket (S3 Source)")

* **`S3 bucket name (1)`**: Once you picked a S3 Connection above the system will try to test the connection and list bucket names it can find.
These will be available for selection here. You can check how many buckets could be found at (5)

* **`Prefix (2)`**: If you pick a valid bucket (1), then available prefixes (folders) will be available for selection here. 
You can check how many prefixes could be found for a given bucket at (6)  

* **`Use path style bucket access (3)`**: The S3 API allows accessing objects via legacy "_path style_" or "_virtual hosted style_".
Check this box if you want to access objects via legacy path style access. You can read more about this [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html)

* **`Include sub folders (4)`**: Check this box if you want sub-folders to be included when querying the source.
This means that all objects from sub-folders within a bucket/prefix combination will be considered for processing.

While you are entering and changing S3 bucket parameters, layline.io frequently tries to connect to the endpoint and retrieve bucket and prefix information.
The status of these attempts is displayed at the bottom of the group box.

![](.asset-source-s3-images/952672a7.png "S3 bucket connection success (S3 Source)")

In case of error, you can hover the mouse over the red output and view what the problem is:

![](.asset-source-s3-images/229867cd.png "S3 bucket connection failure (S3 Source)")

This usually helps to resolve the issue.


## Related Topics

### Internal
* [S3 Connection](../connections/asset-connection-aws)
* [S3 Sink](../sinks/asset-sink-s3)

### External
* [Cron on Wikipedia](https://en.wikipedia.org/wiki/Cron)
* [Cron editor online from crontab guru](https://crontab.guru/)
* [AWS Virtual hosting of buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html)

## Potential problems

---

<WipDisclaimer></WipDisclaimer>
