---
title: Extension AWS
description: AWS Extension Asset. Centralizes AWS credential configuration for reuse across workflow assets.
tags:
  - extension
  - aws
  - credentials
  - authentication
---

import NameAndDescription from '../../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../../snippets/assets/_asset-required-roles.md';

# Extension AWS

> Centralizes AWS credentials and region configuration for reuse across Sources, Sinks, and Connections.

## Purpose

The AWS Extension stores shared AWS authentication settings that workflow assets can reference. Instead of configuring credentials separately for every S3 Source, SQS Queue, or Kinesis Stream, you define them once in an AWS Extension and inherit them where needed.

This pattern ensures consistency across your project — rotating credentials or switching regions requires updating a single asset rather than hunting through dozens of individual configurations.

All AWS Extension fields support **inheritance**. A child asset can either define its own value or inherit from a parent AWS Extension in the asset hierarchy. This lets you set organization-level defaults while allowing overrides for specific use cases.

## Prerequisites

- A **Project** open in layline.io

## This Asset can be used by:

| Asset type | Link |
|---|---|
| Sources | [Amazon S3 Source](../sources/asset-source-s3.md), [Amazon SQS Source](../sources/asset-source-sqs.md) |
| Sinks | [Amazon S3 Sink](../sinks/asset-sink-s3.md), [Amazon SQS Sink](../sinks/asset-sink-sqs.md), [Amazon SNS Sink](../sinks/asset-sink-sns.md), [Amazon Kinesis Sink](../sinks/asset-sink-kinesis.md), [Amazon EventBridge Sink](../sinks/asset-sink-eventbridge.md) |
| Connections | [AWS Connection](../connections/asset-connection-aws.md) |

## Configuration

### Name & Description

<NameAndDescription></NameAndDescription>

### Required Roles

<RequiredRoles></RequiredRoles>

### AWS Credentials

<!-- SCREENSHOT: AWS Extension config panel showing AWS credentials section with Authentication mode radio buttons, Region dropdown, Access key field, and Secret key/Secret toggle -->

**Authentication mode** — How layline.io authenticates with AWS.

| Mode | When to use |
|------|-------------|
| **No credentials required** | Public S3 buckets or local testing scenarios where AWS doesn't require authentication. |
| **Use the default credential provider chain (AWS only)** | Running on AWS infrastructure (EC2, ECS, Lambda) where IAM roles provide credentials automatically. No manual key management needed. |
| **Access key / Secret key credentials** | Explicit IAM user credentials. Required when running outside AWS or when you need specific user-based permissions. |

**Region** *(inheritable)* — The AWS region for API calls. Required when authentication mode is **No credentials** or **Access key / Secret key**. Hidden when using the default credential provider chain (region comes from the AWS environment).

**Access key** *(inheritable)* — The IAM user's access key ID. Only shown when authentication mode is **Access key / Secret key**.

**Use a secret** — Toggle between storing the secret key inline (in the asset) or referencing a Secret asset.

- **Disabled**: Enter the secret key directly in the **Secret key** field (password input, masked in UI).
- **Enabled**: Select a pre-configured Secret asset from the **Secret** dropdown. The secret's value should contain the AWS secret access key.

## Example

Configure an AWS Extension for production S3 access:

**Name:** `Production AWS`

**Authentication mode:** `Access key / Secret key credentials`

**Region:** `eu-central-1`

**Access key:** `AKIAIOSFODNN7EXAMPLE`

**Use a secret:** `Enabled`

**Secret:** `AWS Production Secret` *(references a Secret asset containing the secret access key)*

With this extension configured, any S3 Source, S3 Sink, or SQS Source in your project can inherit these credentials instead of defining them separately. To use it, configure the child asset's AWS settings to inherit from `Production AWS`.

## See Also

- [**AWS Connection**](../connections/asset-connection-aws.md) — Alternative connection method using AWS-specific protocols
- [**Amazon S3 Source**](../sources/asset-source-s3.md) — Example Source that can inherit AWS Extension credentials
- [**Amazon S3 Sink**](../sinks/asset-sink-s3.md) — Example Sink that can inherit AWS Extension credentials
