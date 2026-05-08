---
title: Deployment Issues
description: Troubleshoot when deployments fail to start or activate.
---

# Deployment Issues

> My deployment won't start or fails to activate.

<!-- SCREENSHOT: Operations > Engine State view showing a deployment in error state with initialization failures visible -->

## Common Symptoms

- Deployment shows **error state** in Operations → Engine State
- **Initialization failures** listed in the deployment details
- Deployment **hangs in transitional state** (starting/stopping)
- **Validation errors** when attempting to deploy

---

## Diagnosis Checklist

### 1. Check Validation Errors

Before deploying, run validation in the Project view:

1. Open your Project
2. Click the **Validate** button in the toolbar
3. Review any errors or warnings

**Common validation failures:**
- Missing required fields in Assets
- Invalid references to other Assets
- Syntax errors in JavaScript/Python processors

### 2. Verify Required Assets

Every deployment needs:

| Asset Type | Purpose | Check |
|------------|---------|-------|
| **Workflows** | At least one workflow to execute | Confirm workflows are saved and valid |
| **Environment Assets** | Runtime configuration values | Verify all `${VAR}` references have matching Environment Assets |
| **Secret Assets** | Credentials and sensitive data | Check all secret references exist in Secret Storage |

### 3. Check Environment Variables

<!-- SCREENSHOT: Project view showing an Environment Asset with variable definitions highlighted -->

If your Assets use `${VAR_NAME}` syntax:

1. Navigate to **Project → Deployment Assets → Environments**
2. Verify an Environment Asset exists with matching variable names
3. Ensure the Environment Asset is included in the deployment

### 4. Review Secret Storage

<!-- SCREENSHOT: Settings > Secret Storage view showing stored secrets -->

For Assets referencing secrets:

1. Go to **Settings → Secret Storage**
2. Confirm the referenced secret exists
3. Verify the secret value is correct

---

## Common Error Scenarios

### Error: "Missing Environment Asset"

**Cause:** A workflow or asset references an environment variable that isn't defined in any deployed Environment Asset.

**Resolution:**
1. Identify the missing variable from the error message
2. Create or update an Environment Asset with that variable
3. Include the Environment Asset in your deployment

### Error: "Asset Validation Failed"

**Cause:** One or more assets have configuration errors.

**Resolution:**
1. Go to Project view
2. Look for assets with red error indicators
3. Open each asset and correct the highlighted issues

### Error: "Cyclic Dependency Detected"

**Cause:** Assets reference each other in a circular chain.

**Resolution:**
1. Review asset dependencies
2. Break the cycle by refactoring the asset structure
3. Consider using a different asset type or restructuring workflows

---

## Still Having Issues?

If the deployment still won't start:

1. **Check the logs:** Operations → Engine State → select deployment → Log tab
2. **Review alarms:** Operations → Alarm Center for system-level issues
3. **Verify cluster health:** Operations → Cluster → Nodes for node status

---

## See Also

- [**Deployment Assets**](../assets/deployment-assets) — Understanding deployment configuration
- [**Environment Assets**](../assets/deployment-assets/asset-deployment-environment) — Runtime configuration
- [**Secret Assets**](../assets/deployment-assets/asset-deployment-secret) — Managing credentials
- [**Alarm Center**](../operations/cluster/alarm-center) — System alarm management
