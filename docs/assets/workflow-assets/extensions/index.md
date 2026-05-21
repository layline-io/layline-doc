---
title: Extensions
description: Extension Assets in layline.io — extend platform capabilities with AWS Lambda and Prometheus monitoring integrations.
---

# Extensions

> Extensions deploy additional capabilities into your engine runtime — from secret resolution to metrics export.

## Overview

Extensions are optional runtime components that you attach to a [Project](../../../project/index.md) or [Engine Configuration](../../deployment-assets/asset-deployment-engine.md). Unlike processors or connections that handle data flow, Extensions provide cross-cutting infrastructure services:


For details on creating and managing projects, refer to [Project](../../../project/index.md).

## Available Extensions

| Extension | Purpose |
|-----------|---------|
| [Extension AWS](./asset-extension-aws.md) | Deploys an AWS macro resolver that provides `${aws:...}` macros for accessing AWS Systems Manager Parameter Store and AWS Secrets Manager values at runtime |
| [Extension Prometheus](./asset-prometheus.md) | Exports layline.io processing metrics to Prometheus for monitoring and visualization |

## How to Choose an Extension

| If you need to... | Use this Extension |
|-------------------|-------------------|
| Reference secrets stored in AWS (SSM Parameter Store or Secrets Manager) | [Extension AWS](./asset-extension-aws.md) |
| Export workflow metrics to Prometheus for monitoring | [Extension Prometheus](./asset-prometheus.md) |
