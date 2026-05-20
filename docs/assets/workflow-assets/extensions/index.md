---
title: Extensions
---

# Extensions

> Extensions deploy additional capabilities into your engine runtime — from secret resolution to metrics export.

## Overview

Extensions are optional runtime components that you attach to a [Project](../../project/asset-project) or [Engine Configuration](../../deployment-assets/asset-deployment-engine). Unlike processors or connections that handle data flow, Extensions provide cross-cutting infrastructure services:

- **Secret resolution** — Fetch secrets from external vaults at runtime using macros
- **Metrics export** — Expose internal processing metrics to external monitoring systems

Extensions are configured as assets in your project, then assigned at deployment time to become active in the running engine.

## Available Extensions

| Extension | Purpose |
|-----------|---------|
| [Extension AWS](./asset-extension-aws) | Deploys an AWS macro resolver that provides `${aws:...}` macros for accessing AWS Systems Manager Parameter Store and AWS Secrets Manager values at runtime |
| [Extension Prometheus](./asset-prometheus) | Exports layline.io processing metrics to Prometheus for monitoring and visualization |

## How to Choose an Extension

| If you need to... | Use this Extension |
|-------------------|-------------------|
| Reference secrets stored in AWS (SSM Parameter Store or Secrets Manager) | [Extension AWS](./asset-extension-aws) |
| Export workflow metrics to Prometheus for monitoring | [Extension Prometheus](./asset-prometheus) |
