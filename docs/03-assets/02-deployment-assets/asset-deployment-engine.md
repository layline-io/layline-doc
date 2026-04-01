---
title: Engine Configuration
description: Engine Configuration Asset. Defines which workflows and assets are deployed to a specific engine and how they are configured at runtime.
tags:
  - deployment
  - engine
---

import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';

# Engine Configuration

> An Engine Configuration defines which workflows, environments, secrets, and extensions are deployed to a specific engine, along with runtime configuration settings.

## Purpose

An Engine Configuration is the core deployment asset that specifies what actually runs on a layline.io engine. It determines:

- Which workflows are deployed (all or a selected subset)
- Which Environment Assets provide configuration values
- Which Secret Assets are available for sensitive data
- Which Extensions are loaded
- Which encryption keys are used for secret deployment
- Runtime deployment settings like timeout

Engine Configurations support inheritance, allowing you to create variants that extend a base configuration — for example, a production engine that inherits from a staging configuration but deploys additional workflows.

<!-- SCREENSHOT: Engine Configuration editor showing all configuration cards -->

## Prerequisites

Before creating an Engine Configuration, you need:

- Workflows defined in your project (if deploying specific workflows)
- Environment Assets (if configuration values are required)
- Secret Assets (if sensitive data is needed)
- Extensions (if custom functionality is required)
- Public Keys configured in the target cluster (if deploying secrets)

## Configuration

### Deploy to Cluster

This section appears when deploying the Engine Configuration directly from the editor. It defines where the configuration will be delivered.

**Pick target type** — Select the deployment target:

| Option | Behavior |
|--------|----------|
| Deploy to Cluster | Push the configuration directly to a running layline.io cluster. |
| Write to File | Export the configuration as a file for manual distribution. |

When *Deploy to Cluster* is selected:

**Pick cluster to deploy to** — Select the target cluster from available global or project-specific clusters.

**Tag of the base deployment** — (Optional) Specify a base deployment tag to inherit from. This creates a deployment chain where this deployment extends another.

**Override deployment tag** — (Optional) Assign a custom tag to this deployment, overriding the default.

<!-- SCREENSHOT: Deploy to Cluster section showing target type selector and cluster selection -->

### Name & Description

<NameAndDescription></NameAndDescription>

### Tag

The Tag section identifies this Engine Configuration within a deployment hierarchy.

**Tag** *(inheritable)* — A unique identifier for this engine configuration within the cluster. This tag is used to reference the configuration when creating deployment compositions or when other configurations inherit from it. Required.

**Tag description** *(inheritable)* — An optional description that explains the purpose of this configuration. Useful when browsing inherited configurations.

<!-- SCREENSHOT: Tag section showing Tag and Tag description fields -->

### Assets to deploy

This section defines which assets are included in the engine deployment. Assets are organized into categories with a split-pane selector on the left.

#### Workflows

Workflows define the data processing logic that runs on the engine.

**Deploy all workflows** *(inheritable)* — When enabled, all workflows in the project are deployed. When disabled, you can select specific workflows individually.

When *Deploy all workflows* is disabled:

- Click **Add Workflow** to select from available workflows in the project
- The table shows selected workflows with their name and description
- Inherited workflows appear with inherited styling and can be reset to parent values
- Use the delete button to remove a workflow from the deployment

<!-- SCREENSHOT: Assets to deploy section, Workflows tab showing Deploy all workflows toggle and workflow table -->

#### Environments

Environment Assets provide configuration values (key-value pairs) that are injected into workflows at runtime.

- Click **Add Environment** to select from available Environment Assets
- Each Environment displays its name and description
- Inherited Environments appear with inherited styling
- Use the delete button to remove an Environment

Multiple Environments can be selected — their variables are merged, with later assets overriding earlier ones in case of key collisions.

For details on how Environment Assets work, see [Environment Asset](../01-workflow-assets/resources/asset-resource-environment.md).

<!-- SCREENSHOT: Assets to deploy section, Environments tab showing environment table -->

#### Secrets

Secret Assets contain sensitive data like passwords, API keys, and tokens. They are encrypted at rest and decrypted at deployment time using the target engine's keys.

- Click **Add Secret** to select from available Secret Assets
- Each Secret displays its name, description, and encryption status (encrypted/decrypted icon)
- Inherited Secrets appear with inherited styling
- Use the delete button to remove a Secret

For details on how Secret Assets work, see [Secret Asset](../01-workflow-assets/resources/asset-resource-secret.md).

<!-- SCREENSHOT: Assets to deploy section, Secrets tab showing secrets table with encryption status -->

#### Target Keys

Target Keys are public keys from the target cluster that are used to encrypt secrets for deployment. Each target engine has its own encryption keys.

- Click **Add Encryption Target Key** to select from available public keys in the target cluster
- Each key displays its name and fingerprint
- Inherited Target Keys appear with inherited styling
- Use the delete button to remove a Target Key

Secrets are encrypted with these target keys so they can only be decrypted by the intended engine.

<!-- SCREENSHOT: Assets to deploy section, Target Keys tab showing key table with fingerprints -->

#### Extensions

Extensions are custom plugins that extend the functionality of the layline.io engine.

- Click **Add Extension** to select from available Extensions in the project
- Each Extension displays its name, description, and icon
- Inherited Extensions appear with inherited styling
- Use the delete button to remove an Extension

<!-- SCREENSHOT: Assets to deploy section, Extensions tab showing extension table -->

### Other settings

**Deployment timeout** *(inheritable)* — The maximum time in seconds to wait for the deployment to complete. If the deployment exceeds this timeout, it is marked as failed. Default: 120 seconds.

<!-- SCREENSHOT: Other settings section showing Deployment timeout field -->

## Behavior

### Inheritance

Engine Configurations support full inheritance, allowing you to create configuration hierarchies:

1. Create a base Engine Configuration with common workflows and settings
2. Create child configurations that reference the base
3. Child configurations inherit all assets and settings but can override specific fields

Inherited fields are marked in the UI and show the parent's value when not overridden. You can reset overridden values back to the parent's value.

### Asset Dependencies

An Engine Configuration automatically tracks dependencies on:

- All selected Workflows
- All selected Environment Assets
- All selected Secret Assets
- All selected Extensions

If a referenced asset is deleted or becomes unavailable, the Engine Configuration will show a validation error and the missing dependency will be highlighted.

### Deployment Process

When an Engine Configuration is deployed (either directly or via a Deployment Composition):

1. All selected workflows are packaged
2. Environment variables are collected and merged
3. Secrets are encrypted with the target engine's keys
4. Extensions are included in the deployment package
5. The deployment is transferred to the target cluster or written to a file

## Example

**Basic engine configuration for data processing:**

| Field | Value |
|-------|-------|
| Name | `DataProcessingEngine` |
| Tag | `data-prod-v1` |
| Deploy all workflows | Enabled |
| Environments | `DatabaseConfig`, `APIEndpoints` |
| Secrets | `DBCredentials`, `APITokens` |
| Deployment timeout | 180 |

**Inherited configuration for staging:**

| Field | Value |
|-------|-------|
| Name | `StagingDataEngine` |
| Tag | `data-staging-v1` |
| Tag of the base deployment | `data-prod-v1` |
| Workflows | *(inherited)* |
| Environments | `DatabaseConfig`, `APIEndpoints`, `StagingOverrides` |
| Secrets | *(inherited)* |

In this example, `StagingDataEngine` inherits the workflows from `DataProcessingEngine` but adds an additional Environment for staging-specific overrides.

## See Also

- [**Deployment Composition**](./asset-deployment-composition.md) — Groups Engine Configuration with other deployment assets
- [**Cluster**](./asset-deployment-cluster.md) — Defines connection to a layline.io cluster
- [**Scheduler Settings**](./asset-deployment-scheduler.md) — Defines resource limits and scheduling policies
- [**Tag Settings**](./asset-deployment-tag.md) — Defines deployment tagging rules
- [**Environment Asset**](../01-workflow-assets/resources/asset-resource-environment.md) — Provides configuration values
- [**Secret Asset**](../01-workflow-assets/resources/asset-resource-secret.md) — Stores sensitive data
