---
title: Services
description: Monitor and inspect running services across your cluster, including their runtime state, initialization status, and function testing capabilities.
---

# Service State

> Real-time monitoring of services — Timer, HTTP, JDBC, and custom services — running on your layline.io cluster.

## Purpose

The Service State view provides detailed visibility into every service instance running on your cluster. While the Engine State overview shows you which services exist and their general health, the Service State drill-down reveals the specifics: exactly which nodes are running each service, the current initialization state, any startup failures, and the ability to test service functions interactively.

Use Service State to:
- Verify services started successfully across all intended nodes
- Debug initialization failures and configuration errors
- Monitor service startup and shutdown progress
- Test service functions with custom parameters
- View service logs for troubleshooting
- Restart services when needed

## Layout

The Service State interface uses a three-tab layout:

<!-- SCREENSHOT: Service State view showing the Service tab with state badge, initialization status, and details -->

### Service Tab

The primary view showing runtime state and configuration:

**Header Fields:**

| Field | Description |
|-------|-------------|
| **State** | Current execution state as a colored badge (green/yellow/red). See [Service States](#service-states) for all possible values. |
| **Name** | The service name as defined in the project |
| **Running on cluster node** | The specific cluster node address where this service instance is executing |
| **Activation digest** | Short hash of the deployment activation (first 6 characters; hover for full value). Only present when service is activated. |

**Initialization Status:**

Displays a list of initialization failures if the service failed to start properly. Shows "No problems reported" when initialization completed successfully. Common failures include:
- Missing or invalid dependencies (connections, resources)
- Configuration validation errors
- Network connectivity issues (for external services)
- Authentication failures

**Service Details:**

The lower portion of the panel displays detailed service configuration retrieved from the runtime. This varies by service type and may include:
- Connection parameters
- Service-specific configuration
- Runtime metadata

**Actions:**

- **Restart** — If an **Activation digest** is displayed, a Restart button appears. Clicking this opens a confirmation dialog, then restarts the service instance on the current node. The service transitions through shutdown, then startup states. Monitor the state indicators to track restart progress.

### Functions Tab

<!-- SCREENSHOT: Service Functions tab showing the function list on the left and parameter testing interface on the right -->

The Functions tab provides an interactive testing interface for service functions. This is useful for:
- Debugging service logic during development
- Verifying service connectivity and behavior
- Testing functions with custom parameter values

**Layout:**

The tab is split into two panels:

**Left Panel: Function List**

Displays all functions exposed by the service:
- **Function name** — The name of the function as defined in the service
- Click any function to select it and configure its test parameters

**Right Panel: Parameter Testing**

When you select a function, this panel displays two subtabs:

**Input Parameter tab:**

| Element | Description |
|---------|-------------|
| **Parameter Type** | The expected parameter type for this function (if any) |
| **Parameter Message** | A message editor for constructing the input parameter. Populated with a template based on the parameter type's data dictionary definition. |
| **Execute** | Button to invoke the function with the configured parameter |

Edit the parameter message using the message editor. The editor provides type-aware assistance based on the service's data dictionary.

**Result tab:**

Displays the outcome of the function execution:

| Element | Description |
|---------|-------------|
| **Status icon** | Green check (success), red X (failure), or question mark (not yet executed) |
| **Result Type** | The return type of the function, or "Function does not return a result" for void functions |
| **Result Message** | The returned message data (if any), displayed in a tree view |
| **Failure** | Error details if the function execution failed |
| **Execute again** | Re-run the function with the same or modified parameters |

**Note:** Function testing is performed against the live service instance on the selected cluster node. Changes made during testing may affect production data depending on the service implementation.

### Log Tab

<!-- SCREENSHOT: Service Log tab showing log entries for a service -->

Displays the runtime log for this specific service instance. Use this to:
- View initialization messages
- Trace service activity
- Debug errors and exceptions
- Monitor service lifecycle events

Logs are streamed in real-time from the cluster node running the service.

## Service States

Services transition through various states during their lifecycle. The state displayed in the detail panel reflects the current point in this lifecycle.

### State Categories

States are grouped into three severity categories indicated by badge color:

| Color | Category | Meaning |
|-------|----------|---------|
| **Green** | OK | Service is healthy and operating normally |
| **Yellow** | Warning | Service is in a transitional state or requires attention |
| **Red** | Failure | Service has encountered an error and is not operating correctly |

### All Service States

| State | Category | Description |
|-------|----------|-------------|
| **CLUSTER_ROLE_MISMATCH** | OK | Service's cluster role assignment doesn't match current node (intentional non-placement) |
| **UNUSED** | OK | Service is configured but not currently in use |
| **USED** | OK | Service is active and being used by workflows |
| **VERIFYING_CONFIGURATION** | Warning | Service is validating its configuration during startup |
| **VERIFYING_DEPENDENCIES** | Warning | Service is checking that all required dependencies are available |
| **SHUTTING_DOWN** | Warning | Service is shutting down and releasing resources |
| **TERMINATED** | Failure | Service was forcibly terminated |
| **INITIALIZATION_FAILED** | Failure | Service failed to initialize |
| **CONFIGURATION_FAILURE** | Failure | Configuration validation failed |
| **DEPENDENCY_FAILURE** | Failure | Required dependency (connection, resource) is missing or unavailable |

## State Indicators

In the Engine State left panel service list, icons provide at-a-glance status:

| Icon | Meaning |
|------|---------|
| Green checkmark | Service is in an OK state (running normally) |
| Yellow warning triangle | Service is in a transitional or warning state |
| Red error icon | Service has failures and needs attention |
| Spinning/animated icon | Service is currently starting up |
| Power/shutdown icon | Service is shutting down |

## Common Tasks

### Checking If a Service Started Successfully

1. Locate the service in the Engine State left panel
2. Look for the green checkmark icon
3. Verify the **State** field shows `USED`
4. Check **Initialization status** shows "No problems reported"

### Debugging a Failed Service

1. Find the service with a red error icon in the left panel
2. Select it to view the detail panel
3. Check the **State** field for the specific failure state
4. Review **Initialization status** for failure messages
5. Switch to the **Log** tab for detailed error traces
6. Common fixes:
   - `CONFIGURATION_FAILURE` — Review service configuration in the Project
   - `DEPENDENCY_FAILURE` — Verify required connections or resources are deployed and healthy
   - `INITIALIZATION_FAILED` — Check service logs; may indicate invalid credentials or unreachable endpoints

### Monitoring Service Startup

1. After deploying a service, locate it in the left panel
2. Watch for the spinning startup icon
3. Select the service to view detail panel
4. Observe state transitions:
   - `VERIFYING_CONFIGURATION` → `VERIFYING_DEPENDENCIES` → `USED`
5. Yellow warning states during startup are normal and transient
6. If startup hangs in a warning state for an extended period, check the Log tab

### Testing a Service Function

1. Select the service from the Engine State left panel
2. Click the **Functions** tab
3. Select a function from the list on the left
4. Review the **Parameter Type** displayed
5. Edit the **Parameter Message** in the message editor (if the function requires input)
6. Click **Execute**
7. The view automatically switches to the **Result** tab showing:
   - Success: The returned result type and message
   - Failure: Error details and diagnostic information

### Restarting a Service

1. Select the service from the left panel
2. Verify the **Activation digest** field is displayed (restart requires this)
3. Click the **Restart** button in the header
4. Confirm the restart in the dialog
5. Monitor the state indicators — the service will transition through shutdown and startup states
6. Wait for the state to return to `USED` with a green checkmark

**Note:** Restart only affects the service instance on the currently selected cluster node. Other instances on different nodes are not affected.

### Viewing Service Logs

1. Select the service from the left panel
2. Click the **Log** tab
3. Logs stream in real-time from the cluster node
4. Use log entries to trace:
   - Initialization sequences
   - Service activity
   - Error conditions and stack traces

## Service Types

The Services category in Engine State includes all service assets deployed to your cluster:

| Service Type | Purpose |
|--------------|---------|
| **Timer Service** | Scheduled execution and cron-like triggers |
| **HTTP Service** | HTTP client for REST API calls |
| **JDBC Service** | Database connectivity and queries |
| **Message Service** | Message queue integration |
| **SOAP Service** | SOAP web service client |
| **Proxy Service** | Network proxy configuration |
| **AI Service** | AI/ML model integration |
| **DynamoDB Service** | AWS DynamoDB access |
| **Virtual File System Service** | Abstracted file system operations |
| **Queue File Service** | File-based queue operations |
| **Custom Services** | Extension-provided service types |

Each service type exposes different functions and accepts different parameters. Refer to the service-specific documentation in [Service Assets](../../assets/service-assets/) for configuration details.

## See Also

- [Engine State Overview](./index.mdx) — Understanding the full Engine State interface
- [Workflow State](./workflows.md) — Monitoring workflow instances
- [Source State](./sources.md) — Monitoring input sources
- [Sink State](./sinks.md) — Monitoring output sinks
- [Cluster Monitor](../cluster/cluster-monitor.md) — Infrastructure-level cluster health
- [Service Assets](../../assets/service-assets/) — Configuring services in projects
