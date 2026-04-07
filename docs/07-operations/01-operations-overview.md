---
title: Operations Overview
description: An introduction to the Operations section of the layline.io Configuration Center.
sidebar_position: 1
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

- [**Cluster Overview**](/docs/operations/cluster) — High-level cluster health, node status, and aggregate metrics
- [**Cluster Login**](/docs/operations/cluster-login) — How to connect to and authenticate with a cluster
- [**Cluster Tab Overview**](/docs/operations/cluster-tab-overview) — Navigating the cluster-level interface
- [**Alarm Center**](/docs/operations/alarm-center) — Real-time alerts, thresholds, and notification routing
- [**Deployment Storage**](/docs/operations/deployment-storage) — Where deployment configurations live and how to manage them
- [**Scheduler**](/docs/operations/scheduler) — Job scheduling, cron expressions, and execution history
- [**Stream Monitor**](/docs/operations/stream-monitor) — Live data flow visualization and throughput metrics
- [**Sniffer Directory**](/docs/operations/sniffer-directory) — Packet capture and network analysis tools
- [**Access Coordinator**](/docs/operations/access-coordinator) — Managing access control and permissions
- [**Operations User Storage**](/docs/operations/operations-user-storage) — User-specific operational data and preferences
- [**Operations Secret Storage**](/docs/operations/operations-secret-storage) — Secure credential management for operations
- [**AI Storage**](/docs/operations/ai-storage) — Storage for AI/ML model artifacts and training data
- [**Cluster Node Detail**](/docs/operations/cluster-node-detail) — Deep-dive into individual node metrics and logs

### Engine State

While Cluster Management shows you the infrastructure, Engine State shows you what's actually running on it. This is the live runtime view:

- [**Engine State Overview**](/docs/operations/engine-state) — The main dashboard for runtime monitoring
- [**Workflow State**](/docs/operations/workflow) — Active workflows, their status, and execution context
- [**Service State**](/docs/operations/services) — Running services and their health
- [**Connection State**](/docs/operations/connections) — Active connections to external systems
- [**Source State**](/docs/operations/sources) — Input sources and their read positions
- [**Sink State**](/docs/operations/sinks) — Output sinks and their write status
- [**Format State**](/docs/operations/formats) — Format handlers and parsing statistics
- [**Resource State**](/docs/operations/resources) — Resource utilization and availability

Engine State is particularly useful for debugging: you can see exactly which workflow is processing which message, trace a record through the system, and identify bottlenecks in real time.

### Audit Trail

The Audit Trail provides a comprehensive record of all actions taken within the system:

- [**Audit Trail Overview**](/docs/operations/audit-trail) — Understanding the audit log structure and retention

Audit logs capture:
- Configuration changes (who deployed what, when)
- Access events (logins, permission changes)
- Operational actions (manual interventions, restarts)
- Data access (reads/writes to sensitive systems)

## Navigating the Operations UI

The Operations section uses a three-level navigation pattern:

1. **Section Tabs** — Switch between Cluster, Engine State, and Audit Trail
2. **Category Sidebar** — Within each section, navigate between specific tools (e.g., Alarm Center, Scheduler)
3. **Detail Panels** — Drill into specific entities (a node, a workflow, a log entry)

Most operational screens follow a similar layout:
- **Top bar** — Context selector (cluster, environment, time range)
- **Main panel** — Primary data (lists, graphs, diagrams)
- **Sidebar** — Filters, quick actions, related links
- **Detail drawer** — Slide-out panel for deep-dives without losing context

## Common Workflows

### Investigating an Alarm

1. Alarm fires → Notification sent (email/Slack/webhook)
2. Open [**Alarm Center**](/docs/operations/alarm-center) to see the alert details
3. Check [**Cluster Overview**](/docs/operations/cluster) for node health
4. Drill into [**Engine State**](/docs/operations/engine-state) to find the affected workflow
5. Review [**Audit Trail**](/docs/operations/audit-trail) for recent changes
6. Take corrective action (restart, redeploy, or escalate)

### Tracing a Data Flow Issue

1. Start in [**Stream Monitor**](/docs/operations/stream-monitor) to identify throughput drops
2. Check [**Source State**](/docs/operations/sources) to confirm data is arriving
3. Review [**Workflow State**](/docs/operations/workflow) to see processing status
4. Inspect [**Connection State**](/docs/operations/connections) for external system issues
5. Check [**Sink State**](/docs/operations/sinks) to verify output

### Reviewing System Changes

1. Go to [**Audit Trail**](/docs/operations/audit-trail)
2. Filter by time range and user
3. Review deployment history in [**Deployment Storage**](/docs/operations/deployment-storage)
4. Cross-reference with [**Alarm Center**](/docs/operations/alarm-center) for any incidents

## Key Concepts

### Cluster vs. Engine

- **Cluster** — The physical or virtual infrastructure (nodes, networks, storage)
- **Engine** — The layline.io runtime process executing workflows

A cluster can run multiple engines. An engine belongs to one cluster.

### Live State vs. Configuration

- **Configuration** (Assets section) — What *should* be running (the blueprint)
- **Live State** (Operations section) — What *is* running right now (the reality)

Operations shows live state. If you see a discrepancy (e.g., a workflow shown as "running" in Operations but "disabled" in Assets), it usually means a deployment is pending or an error has occurred.

### Alarms vs. Logs

- **Alarms** — Notifications about *current* problems requiring attention
- **Logs** — Historical record of *past* events for analysis

Alarms are actionable now. Logs are searchable history.

## Security Considerations

Operations provides powerful visibility into running systems. Access is typically restricted:

- **Read-only access** — View metrics, logs, and state (typical for developers)
- **Operational access** — Restart workflows, acknowledge alarms, trigger deployments (typical for ops engineers)
- **Administrative access** — Full control including user management and audit log access (typical for admins)

See [**Access Coordinator**](/docs/operations/access-coordinator) for details on permission management.

## See Also

- [**Deployment**](/docs/assets/deployment) — How deployments are configured and created
- [**Workflow**](/docs/assets/workflow) — Workflow design and configuration
- [**Assets Overview**](/docs/assets) — Building the components that run in Operations
