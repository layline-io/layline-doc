---
title: Alarms and Error States
description: Troubleshoot system alarms and error states in Operations.
---

# Alarms and Error States

> I'm seeing alarms or red error states in the Operations view.

<!-- SCREENSHOT: Operations > Alarm Center showing active alarms with severity indicators and details -->

## Common Symptoms

- **Red/Orange badges** in Engine State
- **Alarms appearing** in Alarm Center
- **Error states** on workflows, services, or connections
- **Notifications** about system issues

---

## Understanding Alarm Severity

| Severity | Color | Meaning | Action Required |
|----------|-------|---------|-----------------|
| **CRITICAL** | 🔴 Red | System failure, data loss risk | Immediate attention |
| **MAJOR** | 🟠 Orange | Significant impact, degraded service | Address soon |
| **MINOR** | 🟡 Yellow | Limited impact, workaround available | Address when convenient |
| **WARNING** | 🟡 Yellow | Potential issue, monitoring recommended | Review |
| **INFO** | 🔵 Blue | Informational only | None |

---

## Diagnosis Checklist

### 1. Check the Alarm Center

<!-- SCREENSHOT: Operations > Alarm Center with list of alarms showing source, message, and timestamp -->

1. Go to **Operations → Alarm Center**
2. Review active alarms
3. Click on an alarm for details

**Key information to note:**
- Source component (which workflow/service)
- Alarm message
- First occurrence time
- Count (how many times it fired)

### 2. Check Engine State

<!-- SCREENSHOT: Operations > Engine State overview showing color-coded status of all components -->

In **Operations → Engine State**:

1. Look for red/orange status indicators
2. Expand workflows to see processor-level states
3. Check the middle panel for node-specific issues

### 3. Review Component Logs

<!-- SCREENSHOT: Engine State detail view with Log tab selected showing error stack traces -->

For any component showing errors:

1. Select the component in Engine State
2. Click the **Log** tab
3. Look for error messages around the alarm time
4. Check for stack traces or exception details

---

## Common Alarm Types

### Runtime Errors

**Symptoms:** Processor failures, script errors, exceptions

**Resolution:**
1. Check processor logs for the specific error
2. Fix JavaScript/Python code issues
3. Verify resource availability (memory, disk)
4. Restart the component if needed

### Connection Failures

**Symptoms:** Source/sink connection alarms, timeout errors

**Resolution:**
1. Check Connection Asset configuration
2. Verify network connectivity
3. Confirm external service availability
4. See [Connection Issues](./connection-issues)

### Resource Exhaustion

**Symptoms:** Disk full, memory low, thread pool exhausted

**Resolution:**
1. Check cluster node resources
2. Free disk space or add storage
3. Adjust memory settings
4. Review processing load and scale if needed

### State Synchronization Issues

**Symptoms:** CLUSTER_ROLE_MISMATCH, deployment sync failures

**Resolution:**
1. Check cluster node health
2. Verify network between nodes
3. Review cluster configuration
4. May require cluster restart in severe cases

---

## Engine State Reference

### Workflow States

| State | Color | Meaning |
|-------|-------|---------|
| HEALTHY | 🟢 Green | Running normally |
| PROCESSING | 🟢 Green | Actively processing messages |
| STARTING | 🟡 Yellow | Initializing |
| STOPPING | 🟡 Yellow | Shutting down |
| INITIALIZATION_FAILED | 🔴 Red | Failed to start |
| ERROR | 🔴 Red | Runtime error |

### Service States

| State | Color | Meaning |
|-------|-------|---------|
| UNUSED | 🟢 Green | Available but not used by any workflow |
| USED | 🟢 Green | Active and in use |
| VERIFYING_CONFIGURATION | 🟡 Yellow | Checking config |
| INITIALIZATION_FAILED | 🔴 Red | Failed to initialize |
| DEPENDENCY_FAILURE | 🔴 Red | Required dependency failed |

### Resource States

| State | Color | Meaning |
|-------|-------|---------|
| USABLE | 🟢 Green | Available and working |
| UNUSABLE | 🔴 Red | Failed or unavailable |

---

## Responding to Alarms

### Acknowledging Alarms

<!-- SCREENSHOT: Alarm Center with acknowledge action button highlighted -->

When you've started working on an issue:

1. Select the alarm in Alarm Center
2. Click **Acknowledge**
3. This silences notifications but keeps the alarm visible

### Clearing Alarms

Alarms typically clear automatically when:
- The underlying issue is resolved
- The component recovers
- The alarm condition no longer exists

Some alarms may need manual clearing after verification.

---

## Prevention

### Proactive Monitoring

1. **Regular review:** Check Alarm Center daily
2. **Dashboard setup:** Use Engine State for at-a-glance health
3. **Trend analysis:** Look for recurring issues

### Configuration Best Practices

1. **Validate before deploy:** Always run validation
2. **Test in dev:** Verify changes in development first
3. **Monitor resources:** Watch disk, memory, CPU trends
4. **Set up alerts:** Configure notifications for critical alarms

---

## See Also

- [**Alarm Center**](../operations/cluster/alarm-center) — Managing system alarms
- [**Engine State**](../operations/engine-state) — Live system monitoring
- [**Cluster Management**](../operations/cluster) — Cluster health and configuration
