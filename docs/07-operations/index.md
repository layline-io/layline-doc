---
title: Operations 
description: An introduction to the Operations section of the layline.io Configuration Center.
---

# Operations Overview

> The Operations section provides real-time visibility and control over your layline.io deployments, from cluster health to individual engine states.

## Purpose

Once you've designed and deployed your workflows, the Operations section becomes your mission control. This is where you monitor live systems, diagnose issues, and manage the day-to-day running of your data pipelines. Unlike the Assets section (where you build) or the Deployment section (where you configure), Operations is about observing and interacting with what's actually happening right now.

The Operations section is organized around three core concepts:

- **Cluster Management** — The infrastructure view: nodes, deployments, and system health
- **Engine State** — The runtime view: what's executing, what's connected, what's flowing
- **Audit Trail** — The history view: who did what, when, and with what result

## Who Uses Operations

- **Operations Engineers** — Monitor cluster health, respond to alarms, manage deployments
- **Developers** — Debug running workflows, inspect live state, trace data flow
- **Administrators** — Manage user access, review audit logs, configure system settings

## Main Areas

### Cluster Management

The cluster is the foundation — a collection of nodes running layline.io engines. This section covers:

- [**Cluster Login**](./cluster/cluster-login) — How to connect to and authenticate with a cluster
- [**Cluster Tab Overview**](./cluster/cluster-tab-overview) — Navigating the cluster-level interface
- [**Alarm Center**](./cluster/alarm-center) — Real-time alerts, thresholds, and notification routing
- [**Deployment Storage**](./cluster/deployment-storage) — Where deployment configurations live and how to manage them
- [**Scheduler**](./cluster/scheduler) — Workflow scheduling and execution history
- [**Stream Monitor**](./cluster/stream-monitor) — Controller to observe and manage data streams, throughput, and backpressure
- [**Sniffer Directory**](./cluster/sniffer-directory) — Controller to observer and manage message sniffing
- [**Access Coordinator**](./cluster/access-coordinator) — Managing access to sources and resources
- [**Operations User Storage**](./cluster/operations-user-storage) — User- and role-specific operational data and preferences
- [**Operations Secret Storage**](./cluster/operations-secret-storage) — Secure credential management for operations
- [**AI Storage**](./cluster/ai-storage) — Storage for AI/ML model artifacts and training data
- [**Cluster Node Detail**](./cluster/cluster-node-detail) — Deep-dive into individual node metrics and logs, as well as switching debugging context to a specific node

### Engine State

While Cluster Management shows you the infrastructure, Engine State shows you what's actually running on it. This is the live runtime view:

- [**Engine State Overview**](./engine-state/) — The main dashboard for runtime monitoring
- [**Workflow State**](./engine-state/workflow) — Active workflows, their status, and execution context
- [**Service State**](./engine-state/services) — Running services and their health
- [**Connection State**](./engine-state/connections) — Active connections to external systems
- [**Source State**](./engine-state/sources) — Input sources and their folders, read positions, etc.
- [**Sink State**](./engine-state/sinks) — Output sinks and their write status
- [**Format State**](./engine-state/formats) — Format parsers and logs
- [**Resource State**](./engine-state/resources) — Resource status and detail configs

Engine State is particularly useful for debugging: You can see whether all Assets are running as expected, and look at the detailed state of each as well as their configurations.

### Audit Trail

The Audit Trail provides a comprehensive record of all workflow and stream related actions taken within the system:

- [**Audit Trail Overview**](/docs/operations/audit-trail) — Understanding the audit log structure and retention

Audit logs capture:
- Workflow executions (start, completion, failure)
- Stream events (data arrival, processing milestones)

Other logging for system events (alarms, node status changes, etc.) can be found in the respective sections of Cluster Controllers and Engine State.

## Navigating the Operations UI

The Operations section uses a three-level navigation pattern:

1. **Section Tabs** — Switch between Cluster, Engine State, and Audit Trail
2. **Category Sidebar** — Within each section, navigate between specific tools (e.g., Alarm Center, Scheduler)
3. **Detail Panels** — Drill into specific entities (a node, a workflow, a log entry)

Most operational screens follow a similar layout:
- **Top bar** — Context selector (cluster, environment, time range)
- **Main panel** — Primary data (lists, graphs, diagrams)
- **Sidebar** — Filters, quick actions, related links

## Common Workflows

### Investigating an Alarm

1. Alarm fires → Notification sent (email/Teams)
2. Open [**Alarm Center**](./cluster/alarm-center) to see the alert details
3. Check [**Cluster Overview**](./cluster/cluster-overview) for node health
4. Drill into [**Engine State**](./engine-state) to find the affected workflow
5. Review [**Audit Trail**](./audit-trail) for recent changes
6. Take corrective action (restart, redeploy, or escalate)

### Tracing a Data Flow Issue

1. Start in [**Audit Trail Workflow**]( ./audit-trail) to identify workflow instances with errors
2. Check [**Audit Trail Stream**](./audit-trail) to confirm data is arriving and is being processed
3. Review [**Engine State**](./engine-state) to check workflow and service health
4. Use [**Cluster Node Detail**](./cluster/cluster-node-detail) to inspect logs and metrics on the node running the affected workflow
5. Identify bottlenecks or failures and take action (e.g., restart workflow, adjust resources, or fix configuration)

## Key Concepts

### Cluster vs. Engine

- **Cluster** — The physical or virtual infrastructure (nodes, networks, storage)
- **Engine** — The layline.io runtime process executing workflows

A cluster can run multiple engines. An engine belongs to one cluster.

### Live State vs. Configuration

- **Configuration** (Assets section) — What *should* be running (the blueprint)
- **Live State** (Operations section) — What *is* running right now (the reality)

Operations shows live state. If you see a discrepancy (e.g., a missing running workflow which is configured in a project), it usually means a deployment has failed or is pending or an error has occurred.

### Alarms vs. Logs

- **Alarms** — Notifications about *current* problems requiring attention
- **Logs** — Historical record of *past* events for analysis

Alarms are actionable now. Logs are searchable history.

## Security Considerations

Operations provides powerful visibility into running systems. Access is typically restricted:

- **Read-only access** — View metrics, logs, and state (typical for developers)
- **Operational access** — Restart workflows, acknowledge alarms, trigger deployments (typical for ops engineers)
- **Administrative access** — Full control including user management and audit log access (typical for admins)

See [**Access Coordinator**](/docs/operations/cluster/operations-user-storage) for details on permission management.

## See Also

- [**Deployment**](../assets/deployment-assets) — How deployments are configured and created
- [**Workflow**](../assets/workflow-assets) — Workflow design and configuration
- [**Assets Overview**](../assets) — Building the components that run in Operations
