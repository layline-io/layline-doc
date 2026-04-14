---
title: Deployment Storage
description: View and manage deployments on a running layline.io cluster.
---

# Deployment Storage

> Manage and assign deployments to Reactive Engine nodes in a live cluster.

## Purpose

Deployment Storage is the central hub for managing which deployments are active on your cluster and how they are distributed across Reactive Engine nodes. It provides a real-time view of deployment assignments, allows uploading new deployments, and lets you configure assignment rules that determine which deployment each node runs.

The Deployment Storage interface is divided into two main tabs:
- **Deployment Storage**: View controller status and manage deployment configuration
- **Log**: Monitor deployment-storage component logs

## Deployment Storage Tab

The main tab displays controller information at the top and deployment configuration below.

### Controller Information

The Controller panel displays the current state of the Deployment Storage component:

| Field | Description |
|-------|-------------|
| **State** | Current operational state of the deployment storage controller |
| **Number of tags** | Total deployment tags stored in the deployment database |
| **Number of objects** | Total objects stored in the object database |
| **Running on cluster node** | The cluster node address where the deployment storage controller is currently running |

### Deployment Configuration

The Deployment Configuration section contains two sub-tabs for managing deployments and their assignments.

#### Deployments Tab

The Deployments tab shows all deployments that are available on the cluster in a table. The rightmost column of the table displays a graph that visualizes the dependency relationships between deployments hierarchically.

The table columns include:

| Column | Description |
|--------|-------------|
| **Action** | Indicates whether a deployment is the cluster default, or a button to make the selected deployment the default |
| **Digest** | Short digest label for the deployment. A `DUP` badge appears if the deployment is identical to a previous one |
| **Created** | Timestamp when the deployment was created (toggleable via **Show time**) |
| **Name** | The deployment tag name. Select a row to view its details in the panel below |
| **Graph** | SVG visualization showing how this deployment relates to others in the hierarchy |

At the top of the table, you can switch the view mode:

- **View by time** — Displays deployments in chronological order, with ascending/descending sort options
- **View by digest** — Groups deployments by their digest to identify identical or related deployments

When you select a deployment from the table, the bottom panel shows its details:

- **Tag** — The selected deployment's name
- **Other tags for this digest** — Any alternate tags pointing to the same deployment content
- **Digest** — The full deployment digest
- **Description** — Deployment description (if provided)
- **Created at / Created by** — Timestamp and user who created the deployment
- **Assignment Details** — Whether this is the default deployment and which nodes it is explicitly assigned to

The bottom panel also provides the **Upload Deployments** button for adding new deployments to the cluster.

<!-- SCREENSHOT: Deployment Storage > Deployments tab showing the deployment table with the dependency graph column -->

#### Assignments Tab

The Assignments tab shows how deployments are assigned to Reactive Engine nodes and lets you configure assignment rules.

##### Current Node Assignments

The top section displays a table showing the calculated deployment tag for each node in the cluster:

| Column | Description |
|--------|-------------|
| **Status** | Whether the node is active (green) or inactive (red) |
| **Node** | The cluster node address |
| **Node Roles** | Roles assigned to this node (e.g., "worker", "primary") |
| **Calculated Deployment Tag** | The deployment tag currently assigned to this node |
| **Tag assigned through** | Which rule determined this assignment (Node Assignment, Role, or Default) |

The assignments are calculated using the following precedence (highest to lowest):

1. **Node Assignment** — A deployment explicitly assigned to a specific node
2. **Role Assignment** — A deployment assigned to a role that the node has
3. **Default Assignment** — The fallback deployment used when no other rule matches

##### Assignment Rules

Below the **Current Node Assignments** table, an arrow indicates that the calculated assignments above are a result of the rules configured below. The **Rules to override default Deployment Tags for Nodes** section contains three configuration areas:

**Direct Node Assignments**

Assign specific deployments to individual nodes. These take highest precedence and override both role and default assignments.

<!-- SCREENSHOT: Assignments tab > Node Assignments section showing the node assignment table -->

**Role Assignments**

Assign deployments to node roles. Any node with that role will receive the assigned deployment unless a direct node assignment overrides it.

<!-- SCREENSHOT: Assignments tab > Role Assignments section showing the role assignment table -->

**Default Assignment**

Set the fallback deployment tag that applies to all nodes not matched by either a direct node assignment or a role assignment.

<!-- SCREENSHOT: Assignments tab > Default Assignment section showing the default tag selector -->

## Log Tab

The Log tab displays real-time logs from the deployment-storage component. This is useful for:

- Troubleshooting deployment upload issues
- Monitoring deployment activation and deactivation
- Debugging assignment-related problems

## Common Tasks

### Uploading a New Deployment

1. In the **Deployments** tab, click the **Upload Deployments** button in the bottom panel
2. Select or drag-and-drop a deployment file (`.llproj` file)
3. The deployment will be uploaded and added to the deployment table
4. Once uploaded, the deployment can be assigned to nodes

<!-- SCREENSHOT: Modal dialog for uploading a deployment file -->

### Assigning a Deployment to a Node

1. Go to the **Assignments** tab
2. In the **Node Assignments** section, click "Add Node Assignment"
3. Select the node and the deployment tag to assign
4. The assignment takes effect immediately

### Assigning a Deployment via Role

1. Go to the **Assignments** tab
2. In the **Role Assignments** section, click "Add Role Assignment"
3. Select the role and the deployment tag
4. All nodes with that role will receive this deployment (unless they have a direct node assignment)

### Setting the Default Deployment

1. Go to the **Assignments** tab
2. In the **Default Assignment** section, select the deployment tag to use as fallback
3. This deployment will be used for any node not matched by node or role assignments

## See Also

- [**Cluster Login**](../cluster-login) — Connect to a cluster to access Deployment Storage
- [**Engine Deployment**](../../assets/deployment-assets/asset-deployment-engine.md) — Asset for configuring deployment settings
- [**Engine State**](../engine-state) — Monitor running engines and their deployments
