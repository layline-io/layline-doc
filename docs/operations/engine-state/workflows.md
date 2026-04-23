---
title: Workflows
description: Monitor and inspect active workflow instances, their processors, performance metrics, and runtime state across the cluster.
---

# Workflow State

> Real-time monitoring of workflow instances, processor states, and performance metrics across all cluster nodes.

## Purpose

The Workflow State view provides deep visibility into running workflow instances. While the Engine State overview shows which workflows are active, this page lets you drill down into individual instances to inspect their state, view processor-level metrics, diagnose issues, and understand performance characteristics.

Use Workflow State to:
- Verify workflow instances are running correctly on specific nodes
- Inspect individual processor states within a workflow
- View real-time throughput and performance metrics
- Analyze processing bottlenecks via the metrics table
- Monitor alarm configurations and initialization status
- Restart workflow instances when needed

## Layout

The Workflow State interface follows the standard Engine State three-panel layout:

![Workflow State overview showing filter components, cluster nodes, and workflow detail panels](./.workflows_images/workflow-state-overview.png)

### Left Panel: Filter Components

The left panel lists all asset categories with **Workflows** expanded by default when you navigate to this view. Each category shows:

- **Category header** with health indicator (green checkmark = all healthy)
- **Expandable asset list** showing individual workflows
- **Instance count badge** showing how many instances are running across the cluster

![Filter components panel showing Workflows, Sources, Sinks, Formats, and Resources sections](./.workflows_images/filter-components.png)

When you select a workflow from the list, the middle and right panels update to show details for that specific workflow.

### Middle Panel: Filter Addresses

The middle panel displays a table of cluster nodes where the selected workflow is running:

| Column | Description |
|--------|-------------|
| **State** | Current state of the workflow on this node (color-coded badge) |
| **#** | Number of workflow instances on this node |
| **Address** | Cluster node address (e.g., `pekko://layline@127.0.0.1:58443`) |

![Filter addresses table showing cluster nodes with workflow states and instance counts](./.workflows_images/filter-addresses.png)

#### Expanding to View Processor States

Each row in the address table can be expanded to reveal the **Processor States** list for that node. Click the expand button (+) to see:

- All processors within the workflow instance
- Processor icons indicating their type (Input, Output, Flow, Script)
- Selectable list for inspecting individual processor details

![Expanded workflow row showing processor states including File-Input, Mapping, Router, and Trailer-Calc processors](./.workflows_images/processor-states.png)

When you select a processor from this list, the right panel updates to show processor-specific details. For JavaScript and Python processors, you can also view the source code files and their content.

### Right Panel: Workflow Detail

The right panel provides comprehensive details about the selected workflow instance. It has two tabs:

#### Workflow Tab

The **Workflow** tab displays detailed information about the workflow instance:

![Workflow detail panel showing state, name, started time, cluster node address, timeouts, and initialization status](./.workflows_images/workflow-detail-info.png)

**Workflow Info Panel**

| Field | Description |
|-------|-------------|
| **State** | Current lifecycle state of the workflow (e.g., `ON`, `PROCESSING`, `ACTIVATING`) shown as a color-coded badge |
| **Name** | The workflow asset name |
| **Started** | Timestamp when this instance started (format: `YYYY-MM-DD HH:MM:SS`) |
| **Running on cluster node** | The cluster node address where this instance is executing |
| **Activation digest** | Short hash of the deployment activation (first 6 characters shown; hover for full value) |

**Restart Button**

If an activation digest is present, a restart button appears in the top-right corner of the panel. Clicking it opens a confirmation dialog to restart the workflow instance. This is useful when:
- The workflow is stuck in an error state
- You need to reload configuration changes
- Troubleshooting requires a fresh start

**Timeout Settings**

| Field | Description |
|-------|-------------|
| **Watchdog timeout** | Maximum time allowed before the workflow is considered unresponsive (e.g., `15 minute(s) [PT15M]`) |
| **Restart timeout** | Time before the workflow will attempt to restart if it fails (e.g., `2 minute(s) [PT2M]`) |

**Initialization Status**

Displays the result of workflow startup initialization:

- **No problems reported** — Shown with a green checkmark when initialization succeeded
- **Failure list** — If initialization encountered errors, they are listed here with details

The initialization status area has a scrollable view (max height: 25vh) for workflows with extensive startup diagnostics.

#### Alarm Settings

Below the workflow info panel, the **Workflow Details** section contains **Alarm Settings** showing the configured alarm behavior:

![Alarm settings panel showing checkboxes for rollback, retry, warning, and commit alarms](./.workflows_images/alarm-settings.png)

| Alarm Type | Description |
|------------|-------------|
| **Stream is rolled back** | Triggered when a stream transaction is rolled back due to processing errors |
| **Stream is retried** | Triggered when a failed stream is being retried |
| **Stream is committed (warning)** | Triggered when a stream commits but with warnings |
| **Stream is committed** | Triggered when a stream successfully commits |

Each alarm setting shows whether it's enabled and configured for notification routing.

#### Workflow Diagram Viewer

The lower portion of the Workflow tab displays an interactive diagram of the workflow:

![Workflow diagram showing processors connected by data flow edges with metrics badges](./.workflows_images/workflow-diagram.png)

The diagram viewer shows:
- **Processors** as nodes (colored by state; orange when running)
- **Data flow** as edges connecting processors
- **Metrics badges** on nodes showing message counts
- **JavaScript/Python icons** on script processors

**Diagram Toolbar Controls**

| Control | Action |
|---------|--------|
| **Workflow / Table Toggle** | Switch between diagram view and metrics table view |
| **Refresh Button** | Manually refresh the workflow diagram |
| **Auto Refreshing Indicator** | Shows when live metrics updates are active |

**Diagram Navigation**

Right-click and drag to pan, use mouse wheel to zoom, or use the toolbar buttons:

| Button | Action |
|--------|--------|
| **Zoom In** | Increase diagram magnification |
| **Zoom Out** | Decrease diagram magnification |
| **Zoom to Fit** | Auto-scale diagram to fit the view |
| **Layout Toggle** | Switch between vertical and horizontal port layouts |
| **Arrange** | Auto-layout the diagram nodes |
| **Show Map** | Toggle the minimap overview |

#### Table Mode (Performance Metrics)

Click the **Table** toggle to switch from the diagram view to a performance metrics table:

![Workflow metrics table showing relative duration, total duration, messages, and timing statistics for each processor](./.workflows_images/workflow-metrics-table.png)

The metrics table provides detailed performance data for each processor:

| Column | Description |
|--------|-------------|
| **Name** | Processor name |
| **Relative Duration** | Percentage of total workflow time spent in this processor (shown as progress bar) |
| **Σ Duration [s]** | Total time spent processing messages in this processor (seconds) |
| **Messages** | Number of messages processed by this processor |
| **Avg Duration [ms]** | Average processing time per message (milliseconds) |
| **Min Duration [ms]** | Fastest message processing time (milliseconds) |
| **Max Duration [ms]** | Slowest message processing time (milliseconds) |

**Total Row**

The bottom row (highlighted in green) shows aggregates:
- **Total Σ Duration** — Sum of all processor durations
- **Total Messages** — Sum of all messages processed by individual processors
- **Min/Max Duration** — Minimum and maximum across all processors

:::tip Interpreting the Metrics
- A high **Relative Duration** percentage indicates a bottleneck processor
- Compare **Avg Duration** across processors to find slow steps
- **Max Duration** outliers may indicate intermittent issues
- The metrics update in real-time when auto-refresh is enabled
:::

#### Log Tab

The **Log** tab displays the live log output from the workflow instance:

<!-- SCREENSHOT: Workflow Log tab showing timestamped log entries with level indicators -->

The log view uses the shared log component and shows:
- Timestamped events
- Log levels (INFO, WARN, ERROR, DEBUG)
- Message details
- Filtering and search capabilities

Use the log to diagnose runtime issues, trace execution flow, and investigate errors.

## Workflow States

Workflow instances can be in various lifecycle states. The state is displayed as a color-coded badge:

### Healthy States (Green)

| State | Description |
|-------|-------------|
| `ON` | Workflow is active and ready to process |
| `PROCESSING` | Workflow is currently processing data |
| `ACTIVATING` | Workflow is starting up (transitional) |
| `CLUSTER_ROLE_MISMATCH` | Workflow role doesn't match cluster (healthy but not scheduled) |

### Transitional/Warning States (Yellow)

| State | Description |
|-------|-------------|
| `VERIFYING_CONFIGURATION` | Validating workflow configuration during startup |
| `VERIFYING_DEPENDENCIES` | Checking that required assets are available |
| `STOP_PROCESSING` | Gracefully stopping message processing |
| `SHUTTING_DOWN` | Workflow is shutting down |

### Error States (Red)

| State | Description |
|-------|-------------|
| `TERMINATED` | Workflow has terminated unexpectedly |
| `INTERNAL_ERROR` | An internal error occurred |
| `CONFIGURATION_FAILURE` | Configuration validation failed |
| `DEPENDENCY_FAILURE` | Required dependency is missing or failed |
| `ACTIVATION_FAILURE` | Failed to activate the workflow |
| `PROCESSING_PREPARATION_FAILED` | Failed to prepare for processing |

## Common Tasks

### Inspecting a Running Workflow

1. In the left panel, expand the **Workflows** section
2. Click on the workflow name you want to inspect
3. The middle panel shows cluster nodes running this workflow
4. Click on a specific node to view its details in the right panel
5. Review the state badge, initialization status, and alarm settings

### Viewing Processor States

1. Select a workflow and node as described above
2. In the middle panel, click the expand (+) button on the node row
3. The **Processor States** list appears showing all processors
4. Click on any processor to view its details in the right panel

### Analyzing Performance Bottlenecks

1. Navigate to the workflow instance detail view
2. In the diagram viewer, click the **Table** toggle
3. Sort by **Relative Duration** to find the slowest processors
4. Look for processors with high **Avg Duration** or **Max Duration** values
5. Switch back to the **Workflow** diagram view to see the processor in context

### Restarting a Workflow Instance

1. Select the workflow instance you want to restart
2. In the right panel's **Workflow** tab, locate the restart button (circular arrow icon)
3. Click the restart button
4. Confirm the restart in the dialog
5. The workflow will restart, and the state will transition through startup phases

### Monitoring During Startup

1. Deploy a new workflow or restart an existing one
2. Watch the **State** badge in the right panel
3. The state will progress: `VERIFYING_CONFIGURATION` → `VERIFYING_DEPENDENCIES` → `ACTIVATING` → `ON`
4. Check the **Initialization Status** for any problems
5. Once `ON`, the workflow is ready to process data

## Processor Inspection

When you select an individual processor from the expanded processor list in the middle panel, the right panel shows processor-specific details:

<!-- SCREENSHOT: Processor detail view showing configuration, metrics, and code for a script processor -->

For **JavaScript and Python processors**, you can view:
- Source code files
- Function definitions
- Configuration parameters
- Runtime metrics

For **Input/Output processors**, you can view:
- Connection status
- Read/write positions
- Error counts
- Throughput metrics

## Auto-Refresh Behavior

The Workflow State view automatically refreshes:

- **Workflow info panel** — Refreshes every 2 seconds when active
- **Metrics and diagram** — Refreshes every 1 second when the workflow is in `ON`, `WAITING_FOR_SOURCE`, or `PROCESSING` state
- **Auto-refresh indicator** — Shows "Auto Refreshing" badge when live updates are active

The auto-refresh pauses if the workflow is not in an active state to reduce server load.

## See Also

- [**Engine State Overview**](./index.mdx) — Introduction to the Engine State monitoring interface
- [**Cluster Monitor**](../cluster/cluster-monitor.md) — Aggregate cluster health and statistics
- [**Deployment Storage**](../cluster/deployment-storage.md) — Managing deployments and activations
- [**Workflow Assets**](../../assets/workflow-assets/workflows/index.mdx) — Designing and configuring workflows
- [**Audit Trail**](../audit-trail/index.md) — Historical record of workflow executions
