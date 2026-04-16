---
title: Audit Trail
description: Browse workflow instances, streams, and sniffer sessions in the Audit Trail.
---

# Audit Trail

> The Audit Trail provides a comprehensive view of workflow executions, data streams, and message capture sessions for monitoring and debugging your layline.io deployments.

## Purpose

The Audit Trail is your operational window into what's happening inside your running workflows. While the [Engine State](../engine-state/) shows you the current configuration and status of assets, the Audit Trail shows you the actual execution history and live data flows. It's where you go to answer questions like:

- Which workflows are currently running and what state are they in?
- How many messages have flowed through a particular stream?
- What did a specific message look like as it passed through the system?
- Why did a workflow instance fail or restart?

The Audit Trail is organized into three distinct views, each serving a different operational need:

- **Workflow Instances** — See every execution of your workflows, their current state, and performance metrics
- **Streams** — Monitor data flows through your pipelines with lifecycle and throughput information
- **Sniffer Sessions** — Capture and inspect actual messages flowing through the system for deep debugging

## Prerequisites

Before using the Audit Trail, you need:

- A connected [cluster](../cluster/cluster-login) with running workflows
- Workflows deployed and actively processing data (for meaningful data to appear)
- Appropriate permissions to view operational data

## Navigation

The Audit Trail interface is organized around three main tabs and a split-view layout.

### View Tabs

At the top of the Audit Trail panel, three tabs let you switch between different operational views:

| Tab | Purpose |
|-----|---------|
| **Workflow Instances** | Browse and inspect workflow executions |
| **Streams** | Monitor data streams and their lifecycle |
| **Sniffer Sessions** | Create and manage message capture sessions |

### Split View Layout

Each tab uses a split-pane layout with two areas:

- **Master pane (left or top)** — Lists all items with filtering and grouping controls
- **Detail pane (right or bottom)** — Shows detailed information for the selected item

**Split Orientation Toggle** — Use the toolbar button to switch between:
- **Horizontal split** — Master on top, detail below (good for wide tables)
- **Vertical split** — Master on left, detail on right (default, good for browsing)

Your split position preference is saved per session.

## Workflow Instances Tab

The Workflow Instances tab shows every execution instance of your deployed workflows. This is the primary view for understanding what your system is doing right now and what it has done recently.

### Workflow Instance List

The master pane displays workflow instances in a table with the following columns:

| Column | Description |
|--------|-------------|
| **State** | Visual indicator showing the instance state (running, completed, failed, etc.) and type icon |
| **Workflow** | Workflow Name |
| **Node / Instance** | URL of node for this Workflow and instance number of Workflow |
| **Restarts** | Number of times this instance has been restarted |
| **State Description** | Additional state information or error details |
| **Messages** | Total number of messages processed by this instance |
| **Stream** | Stream Name of processed data, if applicable |

### Grouping by Workflow

Toggle the **Group by Workflow** button to organize instances by their parent workflow:

- When enabled, instances are grouped under expandable workflow headers
- Each group shows aggregate statistics: total instances, total messages, and combined state
- Groups use color-coded state indicators based on the most severe state in the group
- Expand or collapse all groups using the **Expand** / **Collapse** buttons

Grouping is useful when you have many instances across multiple workflows and want to see the big picture.

### Filtering

Click the **Filter** button to open the filter editor. You can filter workflow instances by:

- **Workflow** — Show only instances of specific workflows
- **State** — Filter by instance state (Running, Completed, Failed, etc.)
- **Time range** — Show instances that started within a specific window
- **Message count** — Filter by volume of processed messages

Filters are applied immediately and persist for the session.

### Instance Details

Click any workflow instance to open the detail pane, which shows:

**Summary Section**
- Workflow name and version
- Instance ID and correlation ID (if set)
- Start time and duration (or current runtime if active)
- Current state with detailed description

**Statistics Section**
- Messages processed (total, per second)
- Restart count and history
- Peak memory usage
- Thread allocation

**Stream Associations**
- Input streams feeding this instance
- Output streams produced by this instance
- Quick links to view stream details

**Error Information** (when applicable)
- Stack traces for failed instances
- Error messages and error codes
- Suggested remediation steps

### Actions

Right-click a workflow instance or use toolbar buttons to:

- **Terminate** — Gracefully stop a running instance
- **Abort** — Forcefully terminate an instance
- **Restart** — Stop and restart the instance with the same configuration
- **View in Engine State** — Switch to the Engine State view for this workflow

## Streams Tab

The Streams tab monitors the lifecycle of data streams moving through your workflows. While Workflow Instances show you the execution context, Streams show you the data itself.

### Stream List

The master pane displays active and recently completed streams:

| Column | Description |
|--------|-------------|
| **State** | Stream state (Open, Closing, Closed) with type indicator |
| **Workflow** | The workflow this stream belongs to |
| **Stream** | Stream name and identifier |
| **Messages** | Total messages in this stream |
| **Start** | When the stream opened |
| **End** | When the stream closed (blank if open) |
| **Duration** | How long the stream was/has been open |

### Stream Lifecycle

Streams move through well-defined states:

| State | Description |
|-------|-------------|
| **Open** | Stream is actively receiving and/or emitting messages |
| **Closing** | Stream has been marked for closure but hasn't fully terminated |
| **Closed** | Stream has completed and been archived |

### Grouping by Workflow

Similar to Workflow Instances, you can group streams by their parent workflow to see aggregate throughput and identify which workflows are most active.

### Stream Filtering

The Streams tab has a powerful filter editor supporting:

- **Workflow filter** — Show streams for specific workflows only
- **State filter** — Show only open, closing, or closed streams
- **Time range** — Streams active within a window
- **Message count threshold** — High-volume or low-volume streams

**Log Filter** — When paginating through history, you can apply additional text filters to search within the loaded results.

### Stream Details

Click a stream to view its complete lifecycle:

**Overview Tab**
- Stream ID and type (Input, Output, or Internal)
- Parent workflow and workflow instance
- State timeline with state transitions
- Message count and throughput metrics

**Messages Tab**
- Sample messages from the stream (when sniffer data is available)
- Message rate graphs over time
- Peak throughput indicators

**Associations Tab**
- Source or sink this stream connects to
- Related workflow instances
- Parent or child streams in multi-step workflows

### Actions

Available actions for streams:

- **View Associated Instance** — Jump to the workflow instance processing this stream
- **Create Sniffer Session** — Start capturing messages from this stream
- **Terminate** — Close an open stream (use with caution)

## Sniffer Sessions Tab

Sniffer Sessions are diagnostic tools that capture actual messages flowing through your workflows. Unlike the passive monitoring of Workflow Instances and Streams, Sniffers actively intercept and store messages for inspection.

### What Sniffers Capture

A Sniffer Session captures:
- Raw message content as it enters or exits a workflow
- Message headers and metadata
- Timestamps and ordering information
- Processing context (which workflow, which stream)

Captured messages are stored temporarily and automatically purged based on retention policies.

### Sniffer Session List

The master pane shows all active and historical sniffer sessions:

| Column | Description |
|--------|-------------|
| **State** | Session state (Active, Paused, Closed) |
| **Workflow** | Target workflow for this session |
| **Session Name** | User-defined or auto-generated name |
| **Messages** | Number of messages captured |
| **Start** | When the session began |
| **End** | When the session closed (blank if active) |

### Creating a Sniffer Session

1. Click **Create Session** to open the session creation dialog
2. Select the target **Workflow** from the dropdown
3. Optionally select a specific **Stream** (or leave as "All Streams")
4. Set a **Filter** to capture only matching messages (optional)
5. Configure **Message Limit** to auto-close after N messages (optional)
6. Give the session a **Name** (or accept the auto-generated name)
7. Click **Start Sniffing**

The session immediately begins capturing messages. Active sessions show a pulsing indicator.

### Filter Editor

Sniffer Sessions support sophisticated filtering to capture only relevant messages:

**Basic Filters**
- Message content contains / does not contain
- Message size greater than / less than
- Header field equals / not equals

**Advanced Filters**
- JavaScript/JSONPath expressions evaluated against message content
- Regular expression matching
- Compound conditions (AND/OR logic)

The filter editor provides real-time validation and shows estimated match rates against recent traffic.

### Message Table

Select an active or closed session to view captured messages in the detail pane:

| Column | Description |
|--------|-------------|
| **#** | Sequence number in capture order |
| **Timestamp** | When the message was captured |
| **Stream** | Which stream this message was on |
| **Size** | Message size in bytes |
| **Preview** | First 100 characters of content |

### Message Detail View

Click any message in the table to open the full detail view:

**Content Panel**
- Full message body with syntax highlighting
- Format detection and pretty-printing (JSON, XML, etc.)
- Raw hex view for binary content
- Search within message body

**Metadata Panel**
- All message headers and properties
- Capture timestamp and processing latency
- Stream and workflow context
- Previous/next message navigation

### Session Actions

**For Active Sessions:**
- **Pause/Resume** — Temporarily stop/resume capture
- **Close** — End the session and preserve captured data
- **Edit Filter** — Modify the filter without closing the session

**For Closed Sessions:**
- **Reopen** — Create a new session with the same configuration
- **Export** — Download captured messages (JSON, CSV, or raw)
- **Delete** — Remove the session and free storage

## Common Workflows

### Investigating a Failed Workflow

1. Go to **Workflow Instances** tab
2. Filter by state "Failed" or look for red state indicators
3. Click the failed instance to view details
4. Check the **Error Information** section for stack traces
5. Note the **Correlation ID** if available
6. Switch to **Streams** tab and filter by the same time range
7. Check if input data was reaching the workflow
8. Create a **Sniffer Session** on the input stream to capture sample messages
9. Compare captured messages against expected format

### Monitoring High-Volume Data Flows

1. Go to **Streams** tab
2. Enable **Group by Workflow** to see aggregate volumes
3. Sort by **Messages** column to identify highest-throughput workflows
4. Click into high-volume workflows to see individual streams
5. Watch for streams stuck in "Closing" state (indicates potential issues)
6. Use **Sniffer Sessions** with message count limits to sample traffic without overwhelming storage

### Debugging Message Processing Issues

1. Identify the workflow with issues in **Workflow Instances**
2. Note the stream names in the **Stream Associations** section
3. Go to **Sniffer Sessions** tab
4. Create a new session targeting the specific workflow and stream
5. Use a filter to narrow to messages of interest (by content, size, or header)
6. Trigger the workflow or wait for natural traffic
7. Examine captured messages in the **Message Detail View**
8. Check for format issues, encoding problems, or unexpected content

### Analyzing Performance

1. Go to **Workflow Instances** tab
2. Sort by **Duration** to find slow executions
3. Group by workflow to identify systematically slow processes
4. Check **Messages/Second** in instance details
5. Compare with **Streams** tab throughput metrics
6. Look for workflows with high restart counts
7. Correlate performance drops with specific time periods

## Best Practices

### Sniffer Session Hygiene

- **Always set message limits** for high-traffic sniffers to prevent storage exhaustion
- **Name sessions descriptively** — "Debug_OrderFlow_2024_01_15" not "Session_12345"
- **Close sessions when done** — Active sessions consume resources
- **Use filters aggressively** — Capture only what you need to diagnose
- **Export important captures** — Sniffer data is purged automatically; export if you need it long-term

### Filter Strategies

- Start broad, then narrow — Remove filters that return zero results
- Use time ranges to limit result sets on busy systems
- Combine multiple filter types (workflow + state + time)
- Save complex filters as presets (if your deployment supports it)

### Navigation Tips

- The split view orientation can be changed per tab — set it how you like it
- Column widths are resizable and persist
- Use the expand/collapse buttons to manage grouped views
- Right-click on most items for context-specific actions

## Limitations and Retention

**Data Retention:**
- Workflow instance history is retained based on cluster configuration (typically 7-30 days)
- Stream history follows the same retention policy
- Sniffer session data is short-term (hours to days depending on volume)

**Performance Impact:**
- Sniffer Sessions add minimal overhead when filtered properly
- Unfiltered sniffers on high-volume streams can impact performance
- Historical queries (beyond current data) may be slower

**Security:**
- Sniffer Sessions may capture sensitive data — use filters to exclude PII when possible
- Access to Audit Trail data is governed by your cluster's permission model
- Exported sniffer data should be handled according to your data governance policies

## See Also

- [**Engine State**](../engine-state/) — View current runtime state of workflows, services, and connections
- [**Alarm Center**](../cluster/alarm-center) — Real-time alerts for operational issues
- [**Stream Monitor**](../cluster/stream-monitor) — Controller-level stream observation and management
- [**Cluster Node Detail**](../cluster/cluster-node-detail) — Deep-dive into node logs and metrics
- [**Workflow Assets**](../../assets/workflow-assets/) — Designing the workflows you monitor in Audit Trail
