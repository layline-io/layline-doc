---
title: Workflows
id: workflows
description: Monitor and inspect running workflow instances across your cluster, including state transitions, processor status, and alarm configurations.
---

# Workflow State

> Real-time monitoring of workflow instances, their execution states, and runtime behavior across all cluster nodes.

## Purpose

The Workflow State view provides detailed visibility into every workflow instance running on your layline.io cluster. While the Engine State overview shows you which workflows exist and their general health, the Workflow State drill-down reveals the specifics: exactly which nodes are running each workflow, the current execution state of each instance, startup and shutdown progress, initialization failures, and alarm configurations.

Use Workflow State to:
- Verify workflow instances started successfully across all intended nodes
- Debug initialization failures and configuration errors
- Monitor workflow startup and shutdown progress
- Inspect alarm settings for stream processing events
- View workflow diagrams with live metrics overlay
- Access workflow logs for troubleshooting

## Layout

The Workflow State interface uses a split-panel layout:

<!-- SCREENSHOT: Workflow State view showing the left panel with workflow list and the detail panel with workflow information -->

### Left Panel: Workflow List

The left panel displays all workflows currently deployed to the cluster, organized in an expandable list:

- **Workflow name** — The name of the workflow as defined in the project
- **Status icon** — Visual indicator of the workflow's current state (see [State Indicators](#state-indicators))
- **Instance count badge** — Number of running instances across the cluster (shown when fully started)
- **Startup/shutdown icons** — Animated indicators when a workflow is transitioning states

Click any workflow name to view its detailed state in the right panel.

### Detail Panel: Workflow Information

When you select a workflow, the detail panel displays comprehensive information across two tabs:

#### Workflow Tab

The primary view showing runtime state and configuration:

**Header Fields:**

| Field | Description |
|-------|-------------|
| **State** | Current execution state as a colored badge (green/yellow/red). See [Workflow States](#workflow-states) for all possible values. |
| **Name** | The workflow name |
| **Started** | Timestamp when this workflow instance began running |
| **Running on cluster node** | The specific cluster node address where this instance is executing |
| **Activation digest** | Short hash of the deployment activation (first 6 characters; hover for full value). Only present when workflow is activated. |

**Timeouts:**

| Field | Description |
|-------|-------------|
| **Watchdog timeout** | Maximum time allowed between stream processing events before the workflow is considered stalled |
| **Restart timeout** | Time window for automatic restart attempts after a failure |

**Initialization Status:**

Displays a list of initialization failures if the workflow failed to start properly. Shows "No problems reported" when initialization completed successfully. Common failures include:
- Missing or invalid dependencies (resources, connections, formats)
- Configuration validation errors
- Activation failures from the reactive engine

**Alarm Settings:**

Configuration for alarms triggered by stream processing events:

| Alarm | Trigger Condition |
|-------|-------------------|
| **Stream is rolled back** | A stream was rolled back due to an error during processing |
| **Stream is retried** | A stream is being retried after a transient failure |
| **Stream is committed (warning)** | A stream was committed, but with warnings |
| **Stream is committed** | A stream was successfully committed |

<!-- SCREENSHOT: Workflow detail panel showing alarm settings section -->

**Workflow Diagram:**

The lower portion of the panel displays the workflow's processor graph with live metrics:

- Visual representation of all processors in the workflow
- Throughput metrics overlaid on connections
- State coloring of individual processors
- Click processors to view their individual state

#### Log Tab

<!-- SCREENSHOT: Workflow Log tab showing log entries for a workflow -->

Displays the runtime log for this specific workflow instance. Use this to:
- View initialization messages
- Trace processing events
- Debug errors and exceptions
- Monitor stream lifecycle events

Logs are streamed in real-time from the cluster node running the workflow.

## Workflow States

Workflows transition through various states during their lifecycle. The state displayed in the detail panel reflects the current point in this lifecycle.

### State Categories

States are grouped into three severity categories indicated by badge color:

| Color | Category | Meaning |
|-------|----------|---------|
| **Green** | OK | Workflow is healthy and operating normally |
| **Yellow** | Warning | Workflow is in a transitional state or requires attention |
| **Red** | Failure | Workflow has encountered an error and is not operating correctly |

### All Workflow States

| State | Category | Description |
|-------|----------|-------------|
| **OFF** | OK | Workflow is configured but not currently running |
| **ON** | OK | Workflow is active and ready to process (but not currently processing) |
| **PROCESSING** | OK | Workflow is actively processing streams |
| **ACTIVATING** | OK | Workflow is being activated on the reactive engine |
| **CLUSTER_ROLE_MISMATCH** | OK | Workflow's cluster role assignment doesn't match current node (intentional non-placement) |
| **VERIFYING_CONFIGURATION** | Warning | Workflow is validating its configuration during startup |
| **VERIFYING_DEPENDENCIES** | Warning | Workflow is checking that all required dependencies are available |
| **STOP_PROCESSING** | Warning | Workflow is gracefully stopping stream processing |
| **SHUTTING_DOWN** | Warning | Workflow is shutting down and releasing resources |
| **TERMINATED** | Failure | Workflow was forcibly terminated |
| **INTERNAL_ERROR** | Failure | An unexpected internal error occurred |
| **CONFIGURATION_FAILURE** | Failure | Configuration validation failed |
| **DEPENDENCY_FAILURE** | Failure | Required dependency (resource, connection, format) is missing or unavailable |
| **ACTIVATION_FAILURE** | Failure | Failed to activate on the reactive engine |
| **PROCESSING_PREPARATION_FAILED** | Failure | Failed to prepare for stream processing |

## State Indicators

In the left panel workflow list, icons provide at-a-glance status:

| Icon | Meaning |
|------|---------|
| Green checkmark | Workflow is in an OK state (running normally) |
| Yellow warning triangle | Workflow is in a transitional or warning state |
| Red error icon | Workflow has failures and needs attention |
| Spinning/animated icon | Workflow is currently starting up |
| Power/shutdown icon | Workflow is shutting down |

## Actions

### Restart Workflow

If a workflow has an **Activation digest** displayed, a **Restart** button appears in the header. Clicking this:

1. Opens a confirmation dialog
2. Upon confirmation, restarts the workflow instance on the current node
3. The workflow transitions through shutdown, then startup states
4. Monitor the state indicators to track restart progress

**Note:** Restart only affects the workflow instance on the currently selected cluster node. Other instances on different nodes are not affected.

## Common Tasks

### Checking If a Workflow Started Successfully

1. Locate the workflow in the left panel
2. Look for the green checkmark icon
3. Verify the **State** field shows `ON` or `PROCESSING`
4. Check **Initialization status** shows "No problems reported"
5. Note the **Started** timestamp to confirm recent startup

### Debugging a Failed Workflow

1. Find the workflow with a red error icon in the left panel
2. Select it to view the detail panel
3. Check the **State** field for the specific failure state
4. Review **Initialization status** for failure messages
5. Switch to the **Log** tab for detailed error traces
6. Common fixes:
   - `CONFIGURATION_FAILURE` — Review workflow configuration in the Project
   - `DEPENDENCY_FAILURE` — Verify required resources, connections, or formats are deployed and healthy
   - `ACTIVATION_FAILURE` — Check reactive engine logs; may indicate resource constraints

### Monitoring Workflow Startup

1. After deploying a workflow, locate it in the left panel
2. Watch for the spinning startup icon
3. Select the workflow to view detail panel
4. Observe state transitions:
   - `VERIFYING_CONFIGURATION` → `VERIFYING_DEPENDENCIES` → `ACTIVATING` → `ON`/`PROCESSING`
5. Yellow warning states during startup are normal and transient
6. If startup hangs in a warning state for an extended period, check the Log tab

### Viewing Workflow Logs

1. Select the workflow from the left panel
2. Click the **Log** tab
3. Logs stream in real-time from the cluster node
4. Use log entries to trace:
   - Initialization sequences
   - Stream processing events
   - Error conditions and stack traces

## Instance Counts

The badge displayed next to workflow names in the left panel shows the number of running instances across the entire cluster:

- **Positive number (green)** — That many instances are currently running
- **Zero (yellow)** — Workflow is configured but no instances are running (may be starting up or shutting down)

For workflows running on multiple nodes, each node runs an independent instance. The count aggregates across all nodes.

## See Also

- [Engine State Overview](./index.mdx) — Understanding the full Engine State interface
- [Cluster Monitor](../cluster/cluster-monitor.md) — Infrastructure-level cluster health
- [Audit Trail](../audit-trail/index.md) — Historical record of workflow executions
- [Workflow Assets](../../assets/workflow-assets/workflows/index.mdx) — Configuring workflows in projects
