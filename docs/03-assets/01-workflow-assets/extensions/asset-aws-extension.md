---
title: Extension AWS
description: Extension AWS Asset. Provides shared AWS credentials for use by AWS-compatible assets such as S3, SQS, SNS, and DynamoDB.
tags:
  - extension
  - aws
  - credentials
  - amazon
---

import NameAndDescription from '../../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../../snippets/assets/_asset-required-roles.md';

# Extension AWS

> Provides shared AWS credentials that can be referenced by AWS-compatible assets to authenticate with AWS services.

## Purpose

The AWS Extension Asset centralizes AWS authentication configuration. Instead of configuring credentials separately for each AWS-compatible asset (S3 Sources/Sinks, SQS Sources, SNS Sinks, DynamoDB Services, etc.), you define credentials once in an AWS Extension and reference it from multiple assets.

This approach offers several advantages:
- **Credential reuse** — One credential set serves multiple assets
- **Environment flexibility** — Different Extensions for different environments (dev/staging/prod)
- **Inheritance support** — Child projects can inherit and override specific credential fields
- **Security** — Secret keys can reference Secret Assets instead of being stored in plain text

The AWS Extension is assigned to a [Project](/docs/concept/projects-workflows/project) or an [Engine Configuration](../../02-deployment-assets/asset-deployment-engine.md) to make its credentials available to assets within that scope.

## This Asset can be used by:

| Asset type | Link |
|---|---|
| Projects | [Project](/docs/concept/projects-workflows/project) |
| Deployment | [Engine Configuration](../../02-deployment-assets/asset-deployment-engine.md) |

## Prerequisites

Before creating an AWS Extension Asset, ensure you have:

- **AWS Account** — Active AWS account with appropriate service permissions
- **Credentials** — Depending on authentication mode: IAM access key/secret key, or IAM role configuration for default credential provider chain

## Configuration

### Name & Description

<NameAndDescription></NameAndDescription>

### Required Roles

<RequiredRoles></RequiredRoles>

### AWS Credentials

<!-- SCREENSHOT: AWS Extension config panel showing AWS Credentials section with Authentication mode radio buttons -->

Configure how assets authenticate with AWS services.

#### Authentication Mode

**Authentication mode** *(inheritable)* — Select how AWS credentials are provided:

| Option | Behavior |
|--------|----------|
| **No credentials required** | For AWS endpoints or compatible services that don't require authentication. |
| **Use the default credential provider chain (AWS only)** | Uses AWS's standard credential lookup chain (environment variables → Java system properties → credentials file → EC2 instance profile). Only available when running on AWS infrastructure. |
| **Access key / Secret key credentials** | Explicitly provide an AWS access key and secret key. |

#### Region

**Region** *(inheritable)* — The AWS region to connect to.

- Required for "No credentials required" and "Access key / Secret key credentials" modes
- Hidden when "Default credential provider chain" is selected (region determined by the credential source)
- Supports free-text entry or selection from standard AWS regions

#### Access Key Credentials

These fields appear when **Authentication mode** is set to "Access key / Secret key credentials":

**Access key** *(inheritable)* — The AWS IAM access key ID.

**Use a secret** — Toggle between entering the secret key directly or referencing a Secret Asset.

When **Use a secret** is unchecked:

**Secret key** *(inheritable)* — The AWS IAM secret access key. Entered as a password field for security.

When **Use a secret** is checked:

**Secret** *(inheritable)* — Select a [Secret Asset](../resources/asset-resource-secret.md) that contains the AWS secret access key.

## Behavior

### Credential Resolution

When an AWS-compatible asset references an AWS Extension, credentials are resolved at runtime in the following priority:

1. **Child values** — Values explicitly set on the referencing asset's AWS Extension configuration
2. **Parent values** — Inherited values from a parent Project or Engine Configuration
3. **Default values** — Built-in defaults (authentication mode defaults to "No credentials required")

### Default Credential Provider Chain

When using "Use the default credential provider chain (AWS only)", AWS credentials are looked up in this order:

1. **Environment Variables** — `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
2. **Java System Properties** — `aws.accessKeyId` and `aws.secretKey`
3. **Web Identity Token** — From the environment or container
4. **Credential Profiles File** — `~/.aws/credentials`
5. **ECS Container Credentials** — If `AWS_CONTAINER_CREDENTIALS_RELATIVE_URI` is set
6. **EC2 Instance Profile** — Through the EC2 metadata service

:::info
The environment variables and system properties must be accessible to the Reactive Engine where the Asset is deployed. Configure these in the Engine Configuration or on the engine host itself.
:::

## Example

Configure an AWS Extension with explicit credentials for use by multiple S3 and SQS assets:

**Authentication mode:**
```
Access key / Secret key credentials
```

**Region:**
```
eu-west-1
```

**Access key:**
```
AKIAIOSFODNN7EXAMPLE
```

**Use a secret:**
```
Checked
```

**Secret:**
```
aws-production-secret-key
```

In this example, the actual secret key is stored in a Secret Asset named `aws-production-secret-key`. Multiple S3 Sources, S3 Sinks, and SQS Sources can reference this AWS Extension, all using the same credentials without duplicating sensitive information.

## See Also

- [**Connection AWS**](../connections/asset-connection-aws.md) — Per-asset AWS connection configuration (alternative approach)
- [**S3 Source**](../sources/asset-source-s3.md) — Source asset that can reference an AWS Extension
- [**S3 Sink**](../sinks/asset-sink-s3.md) — Sink asset that can reference an AWS Extension
- [**Secret Asset**](../resources/asset-resource-secret.md) — For securely storing AWS secret keys
