---
sidebar_position: 9
title: Cluster Monitor
description: Monitor the overall state of the cluster — node count, active workflows, services, sources, sinks, and processor instances.
---

# Cluster Monitor

> A read-only view of the Cluster Monitor controller's current state, showing aggregate counts of nodes, deployments, and running components.

## Purpose

The Cluster Monitor gives you a bird's-eye view of what the cluster is currently running. It shows aggregate runtime statistics — how many nodes are connected, how many workflow instances are active, how many sources, sinks, and services are running — without drilling into any individual engine.

## Tabs

### Cluster Monitor Tab

Shows the controller status and a summary of runtime metrics for the cluster:

**State** — Current state of the Cluster Monitor controller (e.g., `Running`).

**Running on cluster node** — The address of the Reactive Engine node hosting the Cluster Monitor controller. If that node fails, the controller automatically migrates to another available node.

The following runtime counters are displayed:

| Counter | Description |
|---------|-------------|
| Number of nodes | Total Reactive Engine nodes currently connected to the cluster. |
| Number of activations | Total active deployment activations across all nodes. |
| Number of workflows | Total workflow definitions currently deployed. |
| Number of workflow instances | Total running workflow instances across all nodes. |
| Number of processors | Total processor definitions in active deployments. |
| Number of processor instances | Total running processor instances. |
| Number of services | Total service instances active in the cluster. |
| Number of sources | Total source instances active in the cluster. |
| Number of sinks | Total sink instances active in the cluster. |

### Log Tab

Shows the live log output of the Cluster Monitor controller. Useful for diagnosing controller startup issues or unexpected state transitions.

## See Also

- [**Engine State**](/docs/operations/engine-state) — Drill into individual workflow and component states per engine
- [**Scheduler**](/docs/operations/cluster/scheduler) — Understand how workloads are distributed across nodes
