---
title: Services
description: Monitor and inspect running services across your cluster, including health status, service calls, failures, and function testing.
---

# Service State

> Real-time monitoring of services (Timer, HTTP, JDBC, and custom services) running on your cluster — their health, call statistics, and testing interface.

## Purpose

The Service State view provides detailed visibility into every service instance running on your layline.io cluster. Services are reusable components that provide functionality like scheduled triggers (Timer), HTTP endpoints, database connections (JDBC), and custom business logic. The Service State drill-down shows you which nodes are running each service, the current health state, service call statistics, initialization status, and a testing interface for service functions.

Use Service State to:

- Verify services started successfully across all intended nodes
- Debug initialization failures and configuration errors
- Monitor service health and call statistics
- Test service functions with custom input parameters
- View service logs for troubleshooting

## Layout

The Service State interface uses a tabbed layout within the detail panel:

<!-- SCREENSHOT: Service State view showing the Service tab with header fields and initialization status -->

### Service Tab

The primary view showing runtime state, configuration, and service details:

**Header Fields:**

| Field | Description |
|-------|-------------|
| **State** | Current execution state as a colored badge (green/yellow/red). See [Service States](#service-states) for all possible values. |
| **Name** | The service name as defined in the project |
| **Running on cluster node** | The specific cluster node address where this service instance is executing |
| **Activation digest** | Short hash of the deployment activation (first 6 characters; hover for full value). Only present when service is activated. |

**Initialization Status:**

Displays a list of initialization failures if the service failed to start properly. Shows "No problems reported" when initialization completed successfully. Common failures include:

- Missing or invalid dependencies (resources, connections)
- Configuration validation errors
- Activation failures from the reactive engine

**Service Details:**

The lower portion displays service-specific runtime information. The content varies by service type and may include:

- Service call statistics (total calls, failures)
- Connection pool status
- Endpoint URLs (for HTTP services)
- Schedule information (for Timer services)
- Database connection status (for JDBC services)

<!-- SCREENSHOT: Service Details section showing call statistics and health metrics -->

### Functions Tab

<!-- SCREENSHOT: Functions tab showing the function list and parameter input panel -->

Provides an interactive testing interface for service functions:

**Left Panel — Function List:**

Lists all functions exposed by the service:

- **Function name** — The name of the function as defined in the service
- Click any function to select it for testing

**Right Panel — Function Testing:**

Two sub-tabs for testing the selected function:

#### Input Parameter Tab

Configure and execute the function:

| Field | Description |
|-------|-------------|
| **Parameter Type** | The data type expected by the function (if applicable) |
| **Parameter Message** | Message editor for constructing the input payload. Uses the service's data dictionary for type-aware editing. |
| **Execute** | Button to invoke the function with the configured parameters |

#### Result Tab

View the function execution result:

| Element | Description |
|---------|-------------|
| **Status icon** | Success (✓), failure (✗), or not executed (?) |
| **Result Type** | The data type returned by the function, or "Function does not return a result" |
| **Result Message** | Tree view of the returned message data |
| **Failure** | Error details if the execution failed |
| **Execute again** | Re-run the function with the same or modified parameters |

### Log Tab

<!-- SCREENSHOT: Service Log tab showing log entries for a service -->

Displays the runtime log for this specific service instance. Use this to:

- View initialization messages
- Trace service function calls
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
| **Yellow** | Warning | Service is in a transitional state |
| **Red** | Failure | Service has encountered an error |

### All Service States

| State | Category | Description |
|-------|----------|-------------|
| **UNUSED** | OK | Service is configured but not currently in use |
| **USED** | OK | Service is active and being called by workflows |
| **CLUSTER_ROLE_MISMATCH** | OK | Service's cluster role assignment doesn't match current node (intentional non-placement) |
| **VERIFYING_CONFIGURATION** | Warning | Service is validating its configuration during startup |
| **VERIFYING_DEPENDENCIES** | Warning | Service is checking that all required dependencies are available |
| **SHUTTING_DOWN** | Warning | Service is shutting down and releasing resources |
| **TERMINATED** | Failure | Service was forcibly terminated |
| **INITIALIZATION_FAILED** | Failure | Service failed to initialize |
| **CONFIGURATION_FAILURE** | Failure | Configuration validation failed |
| **DEPENDENCY_FAILURE** | Failure | Required dependency is missing or unavailable |

## Actions

### Restart Service

If a service has an **Activation digest** displayed, a **Restart** button appears in the header. Clicking this:

1. Opens a confirmation dialog
2. Upon confirmation, restarts the service instance on the current node
3. The service transitions through shutdown, then startup states
4. Monitor the state indicators to track restart progress

**Note:** Restart only affects the service instance on the currently selected cluster node. Other instances on different nodes are not affected.

### Test Service Functions

1. Switch to the **Functions** tab
2. Select a function from the left panel list
3. In the **Input Parameter** tab, configure the input message (if the function accepts parameters)
4. Click **Execute** to invoke the function
5. Switch to the **Result** tab to view the output
6. If needed, modify parameters and execute again

## Common Tasks

### Checking If a Service Started Successfully

1. Locate the service in the Engine State left panel
2. Look for the green checkmark icon
3. Verify the **State** field shows `USED` or `UNUSED`
4. Check **Initialization status** shows "No problems reported"

### Debugging a Failed Service

1. Find the service with a red error icon in the left panel
2. Select it to view the detail panel
3. Check the **State** field for the specific failure state
4. Review **Initialization status** for failure messages
5. Switch to the **Log** tab for detailed error traces
6. Common fixes:
   - `CONFIGURATION_FAILURE` — Review service configuration in the Project
   - `DEPENDENCY_FAILURE` — Verify required resources or connections are deployed and healthy
   - `INITIALIZATION_FAILED` — Check service logs for stack traces

### Monitoring Service Calls

1. Select the service from the left panel
2. View the **Service Details** section
3. Look for call statistics (total invocations, failures)
4. High failure rates may indicate downstream issues

### Testing a Service Function

1. Select the service and switch to the **Functions** tab
2. Choose the function you want to test from the list
3. The **Input Parameter** tab opens automatically
4. If the function requires input, fill in the parameter message
5. Click **Execute**
6. Review the result in the **Result** tab — success shows the returned data, failure shows error details

## See Also

- [Engine State Overview](./index.mdx) — Understanding the full Engine State interface
- [Cluster Monitor](../cluster/cluster-monitor.md) — Infrastructure-level cluster health
- [Audit Trail](../audit-trail/index.md) — Historical record of workflow executions
- [Service Assets](../../assets/workflow-assets/services/asset-service-introduction.md) — Configuring services in projects
