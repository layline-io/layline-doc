---
title: Glossary
description: Comprehensive definitions of layline.io terminology and concepts.
sidebar_position: 10
---

# Glossary

> Definitions of terms and concepts used throughout layline.io.

---

## Core Concepts

### Project

A **Project** is the top-level container for everything you build in layline.io. It contains all configured Assets, Workflows, Deployment Assets, and project-specific configurations. Projects are created and managed in the **Configuration Center**.

See also: [Core Concepts](../quickstart/core-concepts.md#1-projects)

### Asset

An **Asset** is a reusable building block that captures a specific piece of configuration — a connection, data format, processing step, or service — independently of any particular Workflow. Assets can be shared across multiple Workflows within a Project and support inheritance.

See also: [Core Concepts](../quickstart/core-concepts.md#2-assets)

### Asset Class

An **Asset Class** represents a category of functionality. layline.io includes the following Asset Classes:

| Asset Class | Purpose |
|-------------|---------|
| **Workflows** | Executable data flow definitions |
| **Formats** | Data structure definitions |
| **Connections** | Connectivity to external systems |
| **Services** | Shared service definitions |
| **Sources** | Read data from external systems |
| **Sinks** | Write data to external systems |
| **Input Processors** | Entry point processing for Workflows |
| **Output Processors** | Exit point processing for Workflows |
| **Flow Processors** | Transform, route, enrich, filter data |
| **Resources** | Environment variables, secrets, and configuration |
| **Extensions** | Custom processing components |

### Asset Type

An **Asset Type** is a specific implementation within an Asset Class. For example, the **Format** Asset Class includes ASN.1, Data Dictionary, Generic, HTTP, and XML types. Each Asset Class provides one or more Asset Types.

### Workflow

A **Workflow** is the core unit of execution in layline.io. It defines how data flows from a single Input Processor through a series of Flow Processors to one or more Output Processors. Each Workflow has exactly one Input Processor that drives execution.

See also: [Core Concepts](../quickstart/core-concepts.md#3-workflows)

### Processor

A **Processor** is a runtime instance of an Asset within a Workflow. Processors come in three types:

- **Input Processor** — The single driver of a Workflow; reads from sources and initiates processing
- **Flow Processor** — Transforms, routes, enriches, or filters data in the middle of a Workflow
- **Output Processor** — Writes results to destinations at the end of a Workflow

### Deployment

A **Deployment** defines which Workflows, Environment Assets, and Secret Assets are deployed to a Reactive Cluster. Deploying sends the configuration to one Reactive Engine, which propagates it to all cluster members.

See also: [Core Concepts](../quickstart/core-concepts.md#5-deployment)

### Data Dictionary

The **Data Dictionary** is a unified schema built from all configured Format Assets in a Project. It represents the superset of all data structures, allowing data to flow through the system without intermediate mapping steps.

See also: [Data Dictionary](./data-dictionary)

---

## System Components

### Configuration Server

The **Configuration Server** is the central design-time component that:
- Stores all Projects, Workflows, and Assets
- Serves the web-based Configuration Center
- Manages deployment state and versioning
- Maintains a filesystem-based store of Project configurations

The Configuration Server does not process data — it is the authoritative source of "what should be running."

See also: [Architecture Overview](./architecture-overview.md#configuration-server)

### Configuration Center

The **Configuration Center** is the web-based UI served by the Configuration Server. It provides:
- Project editor with visual workflow designer
- Asset configuration interface
- Deployment interface to push configurations to Reactive Engines
- Operations dashboard for monitoring clusters and workflows

See also: [Architecture Overview](./architecture-overview.md#configuration-center)

### Reactive Engine

A **Reactive Engine** is the runtime component that executes Workflows. It:
- Runs data pipelines designed in the Configuration Center
- Manages connections to sources and sinks
- Handles stream processing, backpressure, and flow control
- Participates in clusters for distributed execution

Each Reactive Engine is an independent process that can run standalone or as part of a cluster.

See also: [Architecture Overview](./architecture-overview.md#reactive-engine)

### Reactive Cluster

A **Reactive Cluster** (also called **Cluster**) is a logical grouping of one or more Reactive Engines that:
- Shares workload across available engines
- Provides resilience — if one engine fails, others pick up its work
- Enables horizontal scaling by adding or removing engines dynamically

A single Reactive Engine running alone is technically a Reactive Cluster with one node.

See also: [Architecture Overview](./architecture-overview.md#reactive-cluster)

### Node

A **Node** is a host machine (physical or virtual) where a Reactive Engine runs. Nodes can be:
- Your local development machine
- A Docker container
- A Kubernetes pod
- A cloud VM instance

### Configuration

**Configuration** refers to the complete set of Assets, Workflows, and settings that define how data is processed. Configuration is created in the Configuration Center and deployed to Reactive Engines.

---

## Operations Terminology

### Engine State

**Engine State** is the live view of what is currently running on a Reactive Engine or Cluster. It shows active workflows, services, sources, sinks, and their current status. Engine State is accessed through the Operations tab in the Configuration Center.

See also: [Engine State](../operations/engine-state)

### Activation Digest

An **Activation Digest** is a short hash (first 6 characters displayed, full value in tooltip) that identifies a specific deployment activation. It helps track which version of a configuration is running on a given engine.

### Alarm

An **Alarm** is a notification triggered by the system when something requires attention — such as a workflow failure, resource exhaustion, or configuration error. Alarms are managed in the Alarm Center.

See also: [Alarm Center](../operations/cluster/alarm-center)

### Audit Trail

The **Audit Trail** is a log of workflow executions, stream events, and system activities. It provides a historical record for debugging, compliance, and performance analysis.

See also: [Audit Trail](../operations/audit-trail)

### Stream Monitor

The **Stream Monitor** is an operations view that provides real-time visibility into data flowing through the system, including throughput metrics and processing latency.

See also: [Stream Monitor](../operations/cluster/stream-monitor)

### Scheduler

The **Scheduler** is a component that manages time-based execution of workflows, allowing scheduled starts, stops, and recurring processing windows.

See also: [Scheduler](../operations/cluster/scheduler)

---

## Asset Relationships

### Asset Inheritance

**Asset Inheritance** allows a child Asset to derive from a parent Asset of the same Class and Type. The child inherits all parent settings and can override individual parameters. This enables building portfolios of reusable, slightly varied Asset configurations.

### Asset Dependency

An **Asset Dependency** exists when one Asset requires another to function. For example:
- An Input Processor typically requires a Format Asset and a Source Asset
- A Sink may require a Connection Asset
- A Service may require Resource Assets (Environment or Secret)

Dependencies must be resolved for an Asset to operate correctly.

### Hidden Asset

A **Hidden Asset** is an Asset created automatically when you add a Processor directly in a Workflow without first creating a standalone Asset. Hidden Assets are single-use and embedded within the Workflow, while regular Assets are reusable across Workflows.

### Environment Asset

An **Environment Asset** defines environment variables that can be referenced in other Assets using `${VAR_NAME}` syntax. Environment Assets enable environment-agnostic configuration — the same Assets can be deployed to different environments with different variable values.

### Secret Asset

A **Secret Asset** stores sensitive configuration values (passwords, API keys, certificates) separately from regular configuration. Secret values are masked in the UI and can be referenced by name in other Assets.

---

## Data Processing Terms

### Source

A **Source** is an Asset that defines where data enters the system — such as a file directory, message queue, HTTP endpoint, or database. Sources are used by Input Processors to read data.

See also: [Sources](../assets/workflow-assets/sources)

### Sink

A **Sink** is an Asset that defines where data exits the system — such as a file, database, message queue, or API endpoint. Sinks are used by Output Processors to write results.

See also: [Sinks](../assets/workflow-assets/sinks)

### Format

A **Format** is an Asset that defines the structure of data — such as XML, JSON, ASN.1, or custom schemas. Formats enable layline.io to parse and validate incoming data and serialize outgoing data.

See also: [Formats](../assets/workflow-assets/formats)

### Connection

A **Connection** is an Asset that defines connectivity parameters to external systems — such as AWS credentials, Kafka brokers, or FTP servers. Connections are reusable across multiple Sources, Sinks, or Services.

See also: [Connections](../assets/workflow-assets/connections)

### Service

A **Service** is an Asset that provides shared functionality — such as database access, HTTP clients, message queues, or AI/ML inference. Services can be called from Processors using the JavaScript or Python API.

See also: [Services](../assets/workflow-assets/services)

### Message / Event

In layline.io, **Message** and **Event** are often used interchangeably to refer to a unit of data flowing through the system. A Message has a structure defined by the Data Dictionary and may contain payload data, headers, and metadata.

### Dead Letter

A **Dead Letter** is a message that failed processing and was routed to a special error handling path. Dead letter routing can be configured on Processors to handle failures gracefully.

### Backpressure

**Backpressure** is a flow control mechanism where downstream components signal upstream components to slow down when they cannot keep up with the data rate. layline.io handles backpressure automatically in stream processing.

---

## UI Terminology

### Project Tab

The **Project Tab** is the section of the Configuration Center where you build and manage Workflows and Assets. It provides the visual workflow designer and asset configuration interface.

### Operations Tab

The **Operations Tab** is the section of the Configuration Center where you monitor and control running deployments. It provides views for cluster status, engine state, alarms, and audit trails.

### Shelf Tab

The **Shelf Tab** is the section of the Configuration Center that serves as a reusable Asset library. Assets published to the Shelf can be shared across Projects.

See also: [Shelf](../shelf)

### Settings Tab

The **Settings Tab** is the section of the Configuration Center for administrative functions — managing users, roles, clusters, and application settings.

See also: [Settings](../settings)

### Asset Viewer

The **Asset Viewer** is the configuration panel where you define and edit Asset settings. Different Asset types have different viewer layouts based on their configuration requirements.

### Workflow Viewer

The **Workflow Viewer** is the visual canvas where you design Workflows by connecting Processors. It shows the data flow from Input through Flow to Output Processors.

---

## Deployment Terms

### Deployment Asset

A **Deployment Asset** is configuration that controls how Workflows are deployed and executed, including:
- Engine Deployment — defines cluster membership and resource allocation
- Scheduler — manages time-based execution
- Tag — labels for organizing and selecting Assets

### Engine Deployment

An **Engine Deployment** is a Deployment Asset that defines which Workflows and Assets are deployed to which Reactive Engines, along with runtime parameters like parallelism and resource limits.

See also: [Engine Deployment](../assets/deployment-assets/engine-deployment)

### Activation

An **Activation** is the process of applying a Deployment to a Reactive Cluster. When a Deployment is activated, the configuration is distributed to all engines in the cluster, and the specified Workflows begin executing.

### Digest

A **Digest** is a hash that uniquely identifies a specific version of a Deployment or Asset configuration. Digests enable tracking of configuration changes and ensure consistency across cluster nodes.

---

## See Also

- [Core Concepts](../quickstart/core-concepts.md) — Mental models for understanding layline.io
- [Architecture Overview](./architecture-overview) — System components and how they fit together
- [What is layline.io?](./introduction) — Product overview and motivation
- [Assets Overview](../assets) — Reference documentation for all Asset types
