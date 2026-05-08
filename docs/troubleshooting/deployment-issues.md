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

Upon deployment to Cluster the Config Server runs validations on the Deployment itself. Problems are pointed out, if any:

1. Go through the list of issues.
2. Click on each to navigate to the problem area
3. Review any errors or warnings

**Common validation failures:**
- Missing required fields in Assets
- Invalid references to other Assets
- Incoherent workflows
- More

### 2. Verify Required Assets

Deployments usually need:

| Asset Type | Purpose | Check |
|------------|---------|-------|
| **Workflows** | At least one workflow to execute | Confirm workflows are saved and valid |
| **Environment Assets** | Runtime configuration values | Verify all `${lay:VAR}` references have matching Environment Assets |
| **Secret Assets** | Credentials and sensitive data | Check all secret references exist in Secret Resource Asset |

### 3. Check Environment Variables

<!-- SCREENSHOT: Project view showing an Environment Asset with variable definitions highlighted -->

If your Assets use `${lay:VAR_NAME}` syntax:

1. Navigate to **Project → Assets → Environments**
2. Verify an Environment Asset exists with matching variable names
3. Ensure the Environment Asset is included in the deployment

### 4. Review Secrets Variables

<!-- SCREENSHOT: Settings > Secret Storage view showing stored secrets -->

For Assets referencing secrets:

1. Go to **Project → Assets → Resources → Secrets**
2. Verify a Secrets Asset exists with matching variable names
3. Ensure the Secret Asset is included in the deployment

---

## Common Error Scenarios

### Error: "missing environment variable name"

***Cause:*** An Environment Asset has an entry without a variable name defined.

***Resolution:***
1. Navigate to **Project → Resources → Environments**
2. Open the Environment Asset mentioned in the error
3. Check each entry and ensure all variables have a name filled in
4. Remove any empty entries or add the missing variable names

### Error: "asset has no valid name"

***Cause:*** An asset is missing a name or has an invalid name (e.g., contains special characters or is empty).

***Resolution:***
1. Go to Project view
2. Look for assets with red error indicators
3. Open each problematic asset and check the **Name** field
4. Enter a valid name (alphanumeric characters, underscores, and hyphens allowed)

### Error: "asset uses a reserved name '%1'"

***Cause:*** An asset is using a reserved keyword as its name.

***Resolution:***
1. Identify the asset with the reserved name from the error message
2. Open the asset in the Project view
3. Change the name to something that is not a reserved keyword

### Error: "cyclic inheritance relationship for asset %1"

***Cause:*** Assets inherit from each other in a circular chain (e.g., Asset A inherits from Asset B, which inherits from Asset A).

***Resolution:***
1. Identify the asset mentioned in the error message
2. Review the inheritance chain by checking each asset's **Base Asset** or parent reference
3. Break the cycle by changing one asset to inherit from a different parent
4. Alternatively, remove the inheritance relationship if not needed

---

## Still Having Issues?

If the deployment still won't start:

1. **Check the logs:** Operations → Engine State → select deployment → Log tab
2. **Review alarms:** Operations → Alarm Center for system-level issues
3. **Verify cluster health:** Operations → Cluster → Nodes for node status

---

## See Also

- [**Deployment Assets**](../assets/deployment-assets/index.md) — Understanding deployment configuration
- [**Environment Assets**](../assets/workflow-assets/resources/asset-resource-environment.md) — Runtime configuration
- [**Secret Assets**](../assets/workflow-assets/resources/asset-resource-secret.md) — Managing credentials
- [**Alarm Center**](../operations/cluster/alarm-center/index.md) — System alarm management
