---
title: Building Workflows
sidebar_position: 3
description: How to build data pipelines by assembling Workflows inside a layline.io Project.
---

# Building Workflows

:::info Documentation In Progress
This page is a stub. Full documentation for building workflows inside the Project editor is tracked in [LAY-89](https://linear.app/laylineio/issue/LAY-89/doc-project-building-workflows-general-how-to-page).

For a hands-on tutorial, see [Your First Workflow](../quickstart/first-workflow) in the Quickstart.
:::

## What is a Workflow?

A **Workflow** is the core unit of a data pipeline in layline.io. It defines how data flows from an input source, through one or more processing steps, to an output destination.

Workflows live inside a **Project** and are assembled from three types of Assets:

| Asset Type | Role |
|------------|------|
| **Input Processors** | Receive data from a Source (file, queue, stream, etc.) |
| **Flow Processors** | Transform, route, enrich, or filter data in transit |
| **Output Processors** | Send processed data to a Sink |

## How Workflows Are Built

Inside a Project, you use the visual editor to:

1. **Add Processors** — drag Input, Flow, and Output Processors onto the canvas
2. **Connect them** — define the data flow between processors
3. **Configure each processor** — set Source/Sink connections, Formats, Services, and processing logic
4. **Assign a Workflow Asset** — wrap the pipeline in a Workflow Asset for deployment

## Relationship to Other Concepts

- **Assets** — the individual components (processors, services, formats) that make up a workflow
- **Deployment** — once a Workflow is defined, you deploy it to a Reactive Cluster via a Deployment Asset
- **Project** — the container that holds all your Workflows and their supporting Assets

## See Also

- [**Your First Workflow**](../quickstart/first-workflow) — step-by-step tutorial
- [**Workflow Asset**](../assets/workflow-assets) — reference documentation for the Workflow asset type
- [**Assets Reference**](../assets) — complete reference for all asset types
- [**Deployment Assets**](../assets/deployment-assets) — how to deploy a Workflow to a cluster
