---
title: Project
sidebar_position: 2
description: The Project tab is where you build data pipelines — create and manage Projects, define Assets and Workflows, and configure deployments.
---

# Project

> The Project tab is where you build. Every data pipeline in layline.io lives inside a Project.

A **Project** contains all the Assets and Workflows that define how your data moves and transforms — what data comes in, how it's processed, and where results go. Once you've defined a Workflow inside a Project, you deploy it to a Reactive Cluster via a Deployment Asset.

:::info Documentation Coming Soon
Detailed Project management documentation (create, import, manage) is in progress. See [LAY-68](https://linear.app/laylineio/issue/LAY-68) for status.
:::

## What a Project Contains

- **Workflow Assets** — Input Processors, Flow Processors, and Output Processors that define how data moves
- **Deployment Assets** — Engine Deployments, Schedulers, and Cluster configurations
- **Services** — Connections to external systems (databases, queues, APIs)
- **Formats** — Definitions of the data structures you read and write
- **Resources** — Shared configurations like Environments and Secrets

## Working with Projects

| Task | Where to Go |
|------|-------------|
| Understand all asset types | [Assets Reference](../assets) |
| Build a Workflow | [Workflow Assets](../assets/workflow-assets) |
| Configure a deployment | [Deployment Assets](../assets/deployment-assets) |
| Run your first pipeline | [Quickstart](../quickstart) |

## See Also

- [**Assets Reference**](../assets) — Reference documentation for all asset types
- [**Core Concepts**](../quickstart/core-concepts) — Mental models for understanding Projects and Workflows
- [**Quickstart**](../quickstart) — Get started with your first pipeline
