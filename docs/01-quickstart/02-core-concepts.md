---
title: Core Concepts in 5 Minutes
sidebar_position: 2
---

# Core Concepts in 5 Minutes

This page gives you the mental model you need before building your first workflow. Five concepts cover 90% of what layline.io does.

---

## 1. Projects

A **Project** is the top-level container for everything you build in layline.io. It holds your workflows, assets, data format definitions, and connection settings.

You create and manage Projects in the **Configuration Center**. When you're ready to run, you deploy a Project to a **Reactive Engine**.

Think of a Project as an application: you design it once, deploy it to one or more engines, and it runs continuously (or on schedule).

---

## 2. Workflows

A **Workflow** is a directed graph of connected processors. Data flows through the graph from one or more **sources** (inputs) through **processing steps** to one or more **sinks** (outputs).

```
[Input Source] → [Parse] → [Transform] → [Route] → [Output A]
                                              ↓
                                          [Output B]
```

Workflows are the core unit of execution. A Project can contain multiple workflows, and workflows can be run independently or in dependency chains.

---

## 3. Assets

**Assets** are the building blocks you connect inside a workflow. Each asset has a specific role:

| Asset type | What it does |
|------------|-------------|
| **Service** | Shared resources (connections, credentials, secrets) used by other assets |
| **Source** | Reads data in — from files, Kafka topics, databases, HTTP endpoints, etc. |
| **Processor** | Transforms, filters, enriches, maps, or routes data |
| **Sink** | Writes data out — to files, Kafka, databases, object storage, etc. |

Assets are configured once and can be reused across multiple workflows within the same project.

---

## 4. Data Formats & Layouts

layline.io needs to understand your data to process it. You define the structure of your data using **Format** assets (also called Layouts or Schemas).

A Format describes the shape of a record: its fields, types, delimiters, and hierarchy. Once defined, the Reactive Engine can parse incoming data into structured messages and serialize them back to any output format.

Common supported formats include CSV, fixed-width, JSON, XML, ASN.1, and binary.

---

## 5. Deployment & the Reactive Engine

Designing a workflow in the Configuration Center does not run it. You must **deploy** it to a **Reactive Engine**.

The Reactive Engine is the runtime process that executes your workflows. It can run:

- As a single node on a laptop or server (for development and small workloads)
- As a multi-node **Cluster** (for production, high availability, and horizontal scale)

Once deployed, the engine processes data continuously (stream mode) or runs through a dataset and stops (batch mode), depending on how your sources and sinks are configured.

---

## Putting it together

Here is how the pieces fit:

```
Project
 ├── Formats (define data schemas)
 ├── Services (connections, credentials)
 └── Workflows
      ├── Source assets (read data in)
      ├── Processor assets (transform / route)
      └── Sink assets (write data out)
          ↓ deployed to ↓
      Reactive Engine (executes it all)
```

---

## Next steps

- **[Install layline.io](install-local)** — get it running on your machine
- **[Your First Workflow](first-workflow)** — walk through a complete end-to-end example
- **[Asset Reference](/docs/assets)** — browse all available source, processor, and sink types
