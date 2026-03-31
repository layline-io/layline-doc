---
title: Deployment Composition
description: Deployment Composition Asset. Groups all deployment configuration into a single deployable unit that can be deployed to a cluster or exported to a file.
tags:
  - deployment
  - composition
  - engine
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Deployment Composition

> A Deployment Composition groups Cluster, Engine Configuration, Scheduler Settings, and Tag Settings into a single deployable unit.

## Purpose

A Deployment Composition is the top-level asset that orchestrates how your workflows and configurations are deployed to a layline.io cluster. It brings together all the necessary deployment components — cluster connection, engine configuration, scheduling policies, and tagging rules — into one cohesive package.

You can deploy a Deployment Composition directly to a running cluster or export it to a file for offline deployment. The asset also supports inheritance, allowing you to create deployment variants that extend a base configuration.

<!-- SCREENSHOT: Deployment Composition editor showing all configuration sections -->

## Prerequisites

Before creating a Deployment Composition, you need:

- A [**Cluster**](./asset-deployment-cluster.md) asset (if deploying to a cluster)
- An [**Engine Configuration**](./asset-deployment-engine.md) asset
- (Optional) A [**Scheduler Settings**](./asset-deployment-scheduler.md) asset for advanced scheduling control
- (Optional) A [**Tag Settings**](./asset-deployment-tag.md) asset for deployment tagging

## Configuration

### Deploy to Cluster

This section defines where and how the deployment will be delivered.

**Pick target type** — Select the deployment target:

| Option | Behavior |
|--------|----------|
| Deploy to Cluster | Push the deployment directly to a running layline.io cluster. |
| Write to File | Export the deployment as a file for manual distribution. |

When *Deploy to Cluster* is selected:

**Pick cluster to deploy to** — Select the target cluster from available global or project-specific clusters.

**Tag of the base deployment** — (Optional) Specify a base deployment tag to inherit from. This creates a deployment chain where this deployment extends another.

**Override deployment tag** — (Optional) Assign a custom tag to this deployment, overriding the default.

<!-- SCREENSHOT: Deploy to Cluster section showing target type selector and cluster selection -->

### Name & Description

**Name** — Name of the asset. Spaces are not allowed.

**Description** — Enter a description.

The **Asset Usage** box shows how many times this asset is used and which parts are referencing it. Click to expand and follow references.

### Composition of Deployment Setup

This section defines the core components that make up the deployment.

**Cluster Configuration** *(inheritable)* — Select a Cluster asset that defines the target cluster. This can be inherited from a parent deployment.

When a cluster is selected, the **Tag of the base deployment** field appears, allowing you to specify a parent deployment to inherit from within that cluster.

**Engine Configuration** *(inheritable)* — Select an Engine Configuration asset that defines which workflows and resources are deployed and how they are configured at runtime.

**Scheduler Settings** *(inheritable)* — Select a Scheduler Settings asset that defines resource limits, node assignments, and scheduling policies.

**Tag Settings** *(inheritable)* — Select a Tag Settings asset that defines custom tags to apply to deployed workflows for organization and filtering.

<!-- SCREENSHOT: Composition of Deployment Setup section showing all dropdown fields -->

### Deployment Assets

This section allows you to select additional assets to include in the deployment.

<!-- SCREENSHOT: Deployment Assets section showing asset selection interface -->

## Behavior

### Inheritance

Deployment Compositions support inheritance, allowing you to create deployment hierarchies:

1. Create a base Deployment Composition with common settings
2. Create child deployments that reference the base via the **Tag of the base deployment** field
3. Child deployments inherit all settings from the parent but can override specific fields

Inherited fields are marked in the UI and show the parent's value when not overridden.

### Deployment Execution

When you're ready to deploy:

1. Configure the **Deploy to Cluster** section with your target
2. Click **Transfer Deployment to Cluster** or **Transfer Deployment to File**
3. If deploying to a cluster, you'll be prompted to confirm and monitor the deployment status

The deployment packages all referenced assets and transfers them to the target cluster or writes them to the specified file.

## Example

**Basic deployment to a cluster:**

| Field | Value |
|-------|-------|
| Name | `ProductionDeployment` |
| Target Type | Deploy to Cluster |
| Cluster | `prod-cluster-01` |
| Engine Configuration | `ProductionEngine` |
| Scheduler Settings | `ProdSchedulerLimits` |

**Inherited deployment for staging:**

| Field | Value |
|-------|-------|
| Name | `StagingDeployment` |
| Target Type | Deploy to Cluster |
| Cluster | `staging-cluster` |
| Tag of the base deployment | `ProductionDeployment` |
| Engine Configuration | *(inherited)* |
| Scheduler Settings | `StagingSchedulerLimits` |

In this example, `StagingDeployment` inherits the Engine Configuration from `ProductionDeployment` but uses different Scheduler Settings and targets a different cluster.

## See Also

- [**Cluster**](./asset-deployment-cluster.md) — Defines connection to a layline.io cluster
- [**Engine Configuration**](./asset-deployment-engine.md) — Defines workflows and runtime configuration
- [**Scheduler Settings**](./asset-deployment-scheduler.md) — Defines resource limits and scheduling policies
- [**Tag Settings**](./asset-deployment-tag.md) — Defines deployment tagging rules

---

<WipDisclaimer></WipDisclaimer>
