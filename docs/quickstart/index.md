---
title: Quickstart
sidebar_position: 1
description: Get up and running with layline.io — from installation to your first workflow.
---

# Quickstart

> New to layline.io? This section takes you from zero to a working data pipeline in under 30 minutes.

## What You'll Learn

The Quickstart guide is designed to give you hands-on experience with layline.io's core concepts:

1. **Understand the platform** — What layline.io is and what problems it solves
2. **Grasp the mental model** — Projects, Assets, Workflows, and Deployment
3. **Install and run** — Get layline.io running on your machine
4. **Build your first pipeline** — Create a complete end-to-end workflow
5. **Know where to go next** — Navigate the documentation for deeper learning

By the end of this section, you'll have a running layline.io instance and a working data pipeline that reads, transforms, and routes data.

---

## Prerequisites

Before starting, ensure you have:

| Requirement | Details |
|-------------|---------|
| **Hardware** | 2 GB RAM minimum, 350 MB disk space |
| **Platform** | Windows (x86), macOS (x86 or Apple Silicon), or Linux (AMD or ARM) |
| **Browser** | Chrome, Firefox, Edge, Safari (last 4–10 versions) |
| **Docker** *(optional)* | If choosing the Docker installation route |

No prior experience with stream processing or data pipelines is required.

---

## Recommended Learning Path

Follow these pages in order for the best learning experience:

### 1. [layline.io at a Glance](./what-is-layline-io)
**Time: 5 minutes**

Get the 60-second overview: what layline.io does, the problems it solves, and how the components fit together. Start here if you're completely new to the platform.

### 2. [Core Concepts in 5 Minutes](./core-concepts)
**Time: 5 minutes**

Understand the six concepts that cover 90% of what layline.io does:
- **Projects** — Top-level containers for everything you build
- **Assets** — Reusable building blocks (formats, connections, processors)
- **Workflows** — The core unit of execution
- **Data Formats** — How layline.io understands your data structure
- **Deployment** — How configurations become running pipelines

Read this before installing — it makes the Configuration Center UI much clearer.

### 3. [Installation Overview](./quickstart-overview)
**Time: 2 minutes**

Review your installation options:
- **Full local installation** — Complete setup, persistent state, run multiple versions
- **Docker image** — No installer, pre-installed samples, non-intrusive

Choose the path that fits your environment.

### 4. Install layline.io

Pick one installation method:

| Option | Time | Best For |
|--------|------|----------|
| [Install Locally](./install-local) | 10–15 min | Development, production deployments, persistent state |
| [Install via Docker](./install-docker) | 5 min | Quick evaluation, pre-installed samples, no system changes |

### 5. [Your First Workflow](./first-workflow)
**Time: 15–20 minutes**

Build a complete data processing pipeline:
- Read CSV transaction files
- Transform records into a different structure
- Route records based on content
- Write to multiple output files
- Add optional trailer calculations with JavaScript

This is a hands-on tutorial — you'll create Assets, configure processors, and see data flow through your pipeline.

### 6. [Where Next](./quickstart-where-next)
**Time: 2 minutes**

Recommended paths after completing Quickstart:
- Explore sample projects (Docker installations)
- Browse the [Asset Reference](../assets/index.mdx)
- Dive into [JavaScript/Python scripting](../language-reference/index.mdx)
- Contact support@layline.io for questions

---

## Time Summary

| Section | Time |
|---------|------|
| layline.io at a Glance | 5 min |
| Core Concepts | 5 min |
| Installation Overview | 2 min |
| Installation (Local or Docker) | 5–15 min |
| Your First Workflow | 15–20 min |
| **Total** | **32–47 min** |

---

## Common Questions

**Do I need to read everything?**

If you're eager to get hands-on: Install first, then come back to Core Concepts if you get stuck.

If you prefer understanding before doing: Read layline.io at a Glance and Core Concepts first.

**Can I skip the tutorial?**

The [Your First Workflow](./first-workflow) tutorial teaches patterns used throughout layline.io. Even experienced developers benefit from walking through it once.

**What if I get stuck?**

- Check the [Asset Reference](../assets/index.mdx) for detailed configuration options
- Review [Core Concepts](./core-concepts) if the terminology feels unfamiliar
- Email [support@layline.io](mailto:support@layline.io) — the team responds to real questions

---

## See Also

- [**Concepts**](../concept/introduction.md) — Deeper dive into layline.io's design philosophy and architecture
- [**Project**](../project/index.md) — Working with projects in the Configuration Center
- [**Assets**](../assets/index.mdx) — Complete reference for all source, processor, and sink types
- [**Operations**](../operations/) — Monitoring and managing running workflows
