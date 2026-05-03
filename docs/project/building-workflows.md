---
title: Building Workflows
sidebar_position: 3
description: How to build data pipelines by assembling Workflows inside a layline.io Project.
---

# Building Workflows

> A Workflow is the executable blueprint of your data pipeline. This page explains how to design and assemble Workflows within a Project — the concepts, the flow, and the practical steps.

## What Is a Workflow?

In layline.io, a **Workflow** is the core unit of data processing. It defines the complete path data takes from ingestion through transformation to delivery.

Think of a Workflow as a directed graph: nodes represent processing steps, and edges represent the flow of data between them. When you deploy a Workflow to a cluster, it becomes a running process that continuously ingests, transforms, and outputs data according to your design.

Workflows are created and configured inside a **Project** — the development environment where you design, test, and version your data pipelines before deployment.

## The Building Blocks

Every Workflow is assembled from three fundamental processor types:

| Processor Type | Purpose | Examples |
|----------------|---------|----------|
| **Input Processor** | Ingests data from external sources | File readers, message queue consumers, HTTP endpoints |
| **Flow Processor** | Transforms, routes, or enriches data in transit | Mappers, filters, aggregators, validators |
| **Output Processor** | Delivers processed data to destinations | File writers, message publishers, database loaders |

These processors are not hardcoded components — they are **Asset instances**. You define Sources, Sinks, Formats, and Services as reusable Assets in your Project, then reference them when configuring processors in your Workflow.

### Assets as Building Blocks

Assets are the reusable, independently versioned components that make up your Workflows:

- **Source** — Defines *where* data comes from (filesystem path, message broker, API endpoint)
- **Sink** — Defines *where* data goes (destination connection and parameters)
- **Format** — Defines *how* data is structured (JSON, XML, CSV, custom schemas)
- **Service** — Defines *auxiliary capabilities* (caching, external API calls, data lookups)

When you add an Input Processor to a Workflow, you don't configure connection strings inline — you select a Source Asset. This separation of concerns means the same Workflow can be deployed to different environments (dev, staging, production) simply by swapping the Source/Sink Assets it references.

## The Workflow Editor

The visual editor is where you assemble your pipeline. The interface presents a canvas where you drag, connect, and configure processors.

### Canvas Layout

The editor displays processors as nodes and data flows as connecting lines:

- **Left panel** — Asset palette: available processor types organized by category
- **Center canvas** — The Workflow diagram: add, move, and connect processors
- **Right panel** — Configuration inspector: edit the selected processor's settings
- **Bottom panel** — Logs and validation messages

### Adding Processors

To build a Workflow:

1. **Drag an Input Processor** from the palette onto the canvas — this is your entry point
2. **Drag Flow Processors** to transform the data — add as many as needed
3. **Drag an Output Processor** to define where results go
4. **Connect the nodes** — click and drag from an output port to an input port

Data flows in one direction: Input → Flow → Output. The editor enforces this topology — you cannot create cycles or connect outputs to inputs.

### Configuring Processors

Each processor node has its own configuration panel. When you select a node, the right inspector panel displays its settings:

**Input Processors** require:
- A **Source** Asset (where to read from)
- A **Format** Asset (how to parse incoming data)
- Optional: filtering criteria, rate limits, or error handling policies

**Flow Processors** require:
- Transformation logic (often expressed in JavaScript or Python)
- Routing rules (which output path to take based on data content)
- Optional: lookup configurations, enrichment parameters

**Output Processors** require:
- A **Sink** Asset (where to write to)
- A **Format** Asset (how to serialize outgoing data)
- Optional: batching settings, retry policies, idempotency controls

## Data Flow Semantics

Understanding how data actually moves through a Workflow is critical to designing effective pipelines.

### Message-Based Processing

layline.io processes data as discrete **messages**. Each message consists of:
- **Payload** — the actual data content
- **Metadata** — system-generated properties (timestamp, source ID, routing history)
- **Headers** — optional user-defined key-value pairs

When an Input Processor reads data, it parses the raw bytes into a message using the configured Format. This message then flows through the Workflow, potentially being transformed by each Flow Processor, until it reaches an Output Processor where it is serialized and written to the destination.

### Routing and Branching

Flow Processors can have multiple output ports, enabling conditional routing:

- A **Filter** processor might have "Pass" and "Fail" outputs
- A **Router** might distribute messages to different paths based on content analysis
- A **Splitter** might break one message into many, sending them down parallel branches

Each output port connects to a subsequent processor. Messages flow down exactly one path unless explicitly duplicated by a Splitter processor.

### Error Handling

By default, if any processor encounters an error, the entire message is rejected. You can configure alternative behaviors:

- **Dead letter routing** — send failed messages to a designated error handling path
- **Retry with backoff** — automatically retry transient failures
- **Skip and continue** — log the error but process subsequent messages

Error handling is configured per-processor, allowing fine-grained control over fault tolerance.

## Testing Workflows

Before deploying a Workflow, you validate and test it within the Project environment.

### Validation

The editor continuously validates your Workflow as you build:

- **Structural validation** — Are all required connections present? Are there orphaned processors?
- **Configuration validation** — Are all referenced Assets defined? Are required fields populated?
- **Semantic validation** — Will this Workflow actually process data correctly?

Validation errors appear in the bottom panel. You cannot deploy a Workflow with validation errors.

### Test Runs

For interactive testing:

1. **Upload sample data** — Provide a test file or message that matches your expected input
2. **Run the Workflow** — Execute a single pass through the pipeline
3. **Inspect results** — View the output at each processor node
4. **Debug** — Step through transformations to understand how data changes

Test runs execute against the configured Assets, so if your Source points to a development filesystem, test runs read from that location.

## Workflow Assets

Once you've designed a Workflow in the editor, you encapsulate it in a **Workflow Asset** — the deployable unit that references your pipeline definition.

The Workflow Asset serves several purposes:
- **Versioning** — Track changes to your pipeline over time
- **Reusability** — Reference the same Workflow from multiple Deployment configurations
- **Configuration** — Override specific settings at deployment time (e.g., different Sources for different environments)

Workflow Assets appear in your Project's asset list alongside Sources, Sinks, Formats, and Services. They can be imported, exported, and shared between Projects.

## From Workflow to Production

A Workflow in the editor is a design. To make it operational:

1. **Create a Workflow Asset** — Save your canvas design as a versioned asset
2. **Create a Deployment Asset** — Define which Workflows to run, on which clusters, with which resource allocations
3. **Deploy** — Submit the Deployment to a Reactive Cluster
4. **Monitor** — Use the Operations interface to observe running Workflows, inspect message flow, and manage lifecycle

The same Workflow Asset can be deployed multiple times with different configurations — for example, the same data processing logic applied to different customer data streams.

## Design Patterns

Common Workflow patterns that emerge in practice:

### Extract-Transform-Load (ETL)
A single Input Processor reads files, Flow Processors clean and transform the data, and an Output Processor writes to a database or data warehouse.

### Event-Driven Processing
An Input Processor listens to a message bus (Kafka, SQS), Flow Processors apply business logic, and Output processors publish results or trigger downstream actions.

### Fan-Out / Fan-In
A single Input splits into multiple parallel processing branches (fan-out), each handling a different aspect of the data, then rejoins into a single Output (fan-in).

### Content-Based Router
A Flow Processor inspects message content and routes to different Outputs based on business rules — orders to the order system, alerts to the monitoring system, etc.

## Best Practices

**Design for failure.** Assume network partitions, corrupted data, and unavailable services. Configure appropriate retry, timeout, and dead-letter handling.

**Keep transformations focused.** Each Flow Processor should do one thing well. Complex business logic spread across many small processors is easier to maintain than monolithic transformations.

**Use Assets for environment differences.** Never hardcode connection strings in processor configuration. Use Source and Sink Assets so the same Workflow works in dev, staging, and production.

**Test with realistic data.** Sample files that match production volume and edge cases reveal issues before deployment.

**Version your Workflows.** Treat Workflow Assets like code — commit changes, tag releases, and document breaking changes.

## See Also

- [**Your First Workflow**](../quickstart/first-workflow) — Step-by-step tutorial for building your first pipeline
- [**Workflow Asset**](../assets/workflow-assets) — Reference documentation for Workflow assets
- [**Assets Overview**](../assets) — Complete guide to all asset types
- [**Deployment Assets**](../assets/deployment-assets) — How to deploy Workflows to production
- [**Reactive Clusters**](../operations/clusters) — Understanding the runtime environment
