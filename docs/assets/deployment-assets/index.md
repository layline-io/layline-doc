---
title: Deployment Assets
sidebar_position: 2
description: Deployment Assets in layline.io — configure how workflows are deployed, scheduled, and clustered.
---
# Deployment Assets

Deployment Assets define how and where workflows are deployed to Reactive Engines, and how resources are managed at runtime.

**Use this page to understand the deployment lifecycle and select the right assets for your infrastructure needs.**

---

## Engine Configuration

**When to use:** Engine Configuration defines which workflows and assets are deployed to a specific engine instance. Use this when you need to control exactly what runs on a given engine — for example, separating production and staging workloads, or dedicating specific engines to specific workflow types.

- [**Engine Configuration**](asset-deployment-engine) — Define which workflows, resources, and settings are active on a specific engine. Maps workflows to engines, configures runtime parameters, and controls deployment scope.

---

## Scheduler Settings

**When to use:** Scheduler Settings control per-workflow resource limits and scheduling behavior. Use these when you need to constrain resource usage (CPU, memory) or control how many instances of a workflow can run concurrently.

- [**Scheduler Settings**](asset-deployment-scheduler) — Configure CPU limits, memory allocation, and concurrent instance limits for individual workflows. Prevents resource exhaustion and ensures fair resource distribution.

---

## Tag Settings

**When to use:** Tag Settings organize engines and deployments for filtering and management. Use tags when you have multiple engines and need to group them by environment (prod/staging), region, or purpose for easier monitoring and deployment targeting.

- [**Tag Settings**](asset-deployment-tag) — Define tags for categorizing engines and deployments. Enables filtering views, targeting deployments to specific engine groups, and organizing infrastructure at scale.

---

## ReactiveCluster

**When to use:** ReactiveCluster configures coordination between multiple engine instances for high availability and load distribution. Use clustering when you need multiple engines to work together, share state, or provide failover capabilities.

- [**ReactiveCluster**](asset-deployment-cluster) — Configure cluster membership, discovery, and coordination settings. Enables engines to form a cluster, distribute workload, and maintain consistency across instances.

---

## Deployment Composition

**When to use:** Deployment Composition groups all deployment configuration into a single deployable unit. Use this when you need to version, track, and deploy complete environment configurations as a cohesive package rather than managing individual assets.

- [**Deployment Composition**](asset-deployment-composition) — Bundle engine configurations, scheduler settings, tags, and cluster settings into a single deployment unit. Enables versioned deployments, rollback capabilities, and infrastructure-as-code workflows.

---

## Related Resources

Secrets and environments are configured as [Resource Assets](../workflow-assets/resources/asset-resource-secret) and [Environment Resource Assets](../workflow-assets/resources/asset-resource-environment) respectively — referenced here in deployment configurations rather than duplicated.

---

## Asset Categories Overview

| Category | When to Use |
|----------|-------------|
| **Engine Configuration** | Controlling what workflows run on which engines. Maps workflows to specific engine instances. |
| **Scheduler Settings** | Resource limits and concurrency control. Prevents workflows from consuming excessive resources. |
| **Tag Settings** | Organizing and filtering engines. Groups engines by environment, region, or purpose. |
| **ReactiveCluster** | Multi-engine coordination. Enables clustering, failover, and distributed processing. |
| **Deployment Composition** | Packaging complete deployments. Version and deploy infrastructure as a unit. |

---

## Quick Decision Guide

**Need to control what runs on a specific engine?** → Engine Configuration

**Need to limit CPU/memory usage for workflows?** → Scheduler Settings

**Need to group engines by environment or purpose?** → Tag Settings

**Need multiple engines to work together?** → ReactiveCluster

**Need to version and deploy complete environment configs?** → Deployment Composition

**Need to store credentials or secrets for deployments?** → [Secret Resource](../workflow-assets/resources/asset-resource-secret)

**Need environment-specific configuration values?** → [Environment Resource](../workflow-assets/resources/asset-resource-environment)
