---
title: Cluster 
sidebar_position: 2
description: Get an overview of the Cluster concept and its components in layline.io.
slug: cluster
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Cluster

To understand what we mean by Cluster, let's take a look at the topology of layline.io.

All _Projects_ are created through the Configuration Center. The Configuration Center is hosted by the Configuration Server. The Server also stores the Projects in its file system.

_Clusters_ are a logical assembly of 1 to n _Reactive Engine_ instances. Each instance lives on a _Node_. A Node can be anything that runs a supported operating system. So it is either a physical server, a virtual server, a docker image, etc. Please note, a setup with only one Reactive Engine is a logical Cluster as well.

These Nodes and the Engine(s) living on them can be physically and geographically distributed. As said above, a Reactive Cluster is formed logically. All that's necessary is for the nodes to be able to "see" each other (network-wise).

Multiple clusters can be managed from the same Configuration Center/Server.

![](.index_images/93a2caa6.png "Cluster architecture (Operations --> ")

## Controllers

layline.io Clusters have a number of _**Controllers**_ which provide services to the Cluster and allow monitoring and management of how the Cluster performs. Each Controller has set of tasks that it is specialized in.

### Deployment Storage

This Controller manages the Deployments in the selected Cluster.

![](.index_images/25.png "Deployment Storage (Operations --> ")

Let's go through the parts:

#### Controller
Shows which Reactive Engine the Controller Service "lives" on in the Cluster. If the Engine fails, the Controller will automatically switch to another available Engine.

#### How Deployments are stored

For the next steps it is important to understand how Deployments are stored in a Cluster: 

:::tip 

- Once you have transferred a Deployment to a Cluster, the Cluster saves it in its own internal persistent storage.
- All _**initial**_ Deployments are based on the so-called "_**Deployment Root**_" as you can tell from the example above. 
- If you change an existing Deployment "_D.1.1_" you can let layline.io know upon Deployment, that this new Deployment "_D.1.2_" is based on the previous Deployment "_D.1.1_". The tree will reflect such dependencies:

![](.index_images/18.png "How Deployments are stored (Operations --> ")

In the above example the both the yellow and green Deployment are based on the purple Deployment. The concept is similar to modern Version Control Systems like Git. layline.io also stores the data in a similar fashion in that it only store the differences from version to version.
:::





#### Deployment Configuration

The Deployment Configuration gives you an overview over the Deployments which are available on the Cluster, and allows you to operate them. Let's take a look:

![](.index_images/43.png "Deployment Configuration (Operations --> Cluster)")

There are two tabs "_**Deployments**_" **(1)** and "**Node Assignments**" **(2)**.

##### Deployments Tab

The _Deployments_ Tab gives you a tree view of the Deployments **(3)** which are known to the Cluster and also persisted thereon. 
We have explained earlier [how the Deployments are sent to a Cluster](../../concept/projects-workflows/deployment.md#deploy-to-cluster).

One of the Deployments is set to "_Default_" **(4)**, which means this would be the Deployment which the Cluster is executing if nothing else has been configured.  "_DeploymentRoot_" has a special role in that it marks an empty Deployment. If this is set to "_Default_" then the Cluster is not executing at all (no Workflows).

Highlighting a Deployment in the list, details its properties to the right **(5)**.

The Box "_**Assignment Details**_" **(6)** shows which Nodes (Engines) the selected Deployment is currently assigned to.

##### Node Assignment Tab

_Node Assignments_ **(1)** shows which which Nodes run which Deployments. In our example there is only one Node. This Node was directly assigned the displayed Sample-Mapping Deployment **(2)**. 

![](.index_images/53.png "Node Assignment Tab (Operations --> Cluster)")


#### Activating / Deactivating a Deployment

:::warning Important Action
This action is something which is used commonly to start and stop a Deployment. Read carefully.
:::

Deployments are activated by
1. making it the Default Deployment, or
2. assigning a Deployment to one or more Cluster Nodes.


**Making a Deployment a Default Deployment**

![](.index_images/43.png "Making a Deployment a Default Deployment (Operations --> Cluster)")

In many cases (if not most) one Cluster will only run one Deployment at a time, and do so on all available Reactive Engines.

To activate a Deployment for a whole Cluster, make that Deployment the Default Deployment by 
- selecting it **(1)**, and then
- clicking on the checkbox "is the cluster's default deployment" **(2)**.

This simple action will activate the selected Deployment on the whole cluster.

**Activating a Deployment on selected Nodes (Assginment)**

You can activate a Deployment on a selection of one or more Nodes, instead of the whole Cluster.

To do so
- select the Deployment **(1)**,
- click on "Configure Assignments" **(3)**.

In the dialog that opens, you can assign the Deployment to one or more available Reactive Engines. If you want to assign it to all Engines, you can just make it the default (see above).

![](.index_images/43.png "Activating a Deployment on selected Nodes (Operations --> Cluster)")

:::warning One Deployment per Engine
One Reactive Engine can only process one Deployment. If the Engine has been previously assigned a Deployment _D1_ and is now assigned another Deployment _D2_, the Engine will discard D1 and start activating D2.
:::

#### Deleting a Deployment

To remove a Deployment from a Cluster, click the trash can next to the Deployment name.

You can only delete Deployments which are not active. It is also not possible to delete the "_DeploymentRoot_".

#### Deploy from File

As explained [here](../../concept/projects-workflows/deployment.md#deploy-to-file) a Deployment can be written to a file. To install this Deployment on the Cluster you can select `Upload Deployments` **(1)**:

![](.index_images/59.png "Deploy from File (Operations --> Cluster)")

A upload dialog will open. You can add the Deployment file through the "_+_" sign **(1)** or via drag and drop **(2)**.

![](.index_images/58.png "Upload Deployment from File (Operations --> Cluster)")

Upon successful upload **(1)** the dialog will expand to show the meta data of the Deployment file under "_Contained Deployment Tag and Description_".

![](.index_images/11.png "Upload Deployment --> Confirmation (Operations --> Cluster)")

You can override the Tag name **(2)** as well as the Description **(3)**. Remember that the tag name must be unique to the Cluster.

The box **(4)** shows the base Deployment that this Deployment will be attached to. It is filled with the Deployment which was pre-selected by you when you clicked on `Upload Deployment` before.

You can change the base Deployment by selecting it from `Browse by Tags` **(5)**.

Finally, click `Apply Deployment` **(6)** to execute the Deployment.

![](.index_images/10.png "Execute Deployment (Operations --> Cluster)")




### Scheduler

The Scheduler is the controller that decides which node runs which workflow instances. It continuously balances the load, respects min/max limits you define, and considers workflow weights to keep the cluster evenly utilized.

For a full description of the Scheduler Master view, the Scheduler Settings panel, and the scheduling model, see the [Scheduler](./scheduler.md) page.


### Access Coordinator

The "_**Access Coordinator**_" **(1)** is a process (Controller) which manages access to sources and resources. 

It supports you in:

1. checking which Sources were processed,
2. resetting Sources,
3. checking which Resources are available or occupied

**Sources** **(2)** are data sources which deliver data to layline.io. This could be dynamic sources like File- or Service-sources. 

**Resources** **(3)** are Sources and Sinks which are static and limited in nature. A great example is a partitioned Kafka topic with a fixes number of partitions. Each partition can then be reserved and released as required. If all partitions are reserved, the resource is depleted until released.

![](.index_images/04.png "Access Coordinator (Operations --> Cluster)")


On the Access Coordinator section you can see whether all moving parts are operational. In our example we see:

- Controller: Operational and running on the displayed Engine URL.
- Sources Coordinator: Running and handling a total of 8 different sources
- Resource Coordinator: Running and handling a total of 10 different resource groups

#### Sources Coordinator Tab (2)

This is where you can view and manage processed Sources. In the example below we do have 8 Sources **(1)**. Sources displayed here, wil be recognized as having been configured as part of a Workflow. 

Selecting a Source will display it's processing history (Files in our example to the right). It is possible to then filter the Sources by name, or by their processing state. 
##### Removing an item from the Source list

:::tip Important to know: Source tracking
The Cluster keeps track of all processed Source items **(6)**. It will not process them again, unless they are removed from the Sources list.
:::

We may want to remove an item from the processing history of a given Source so that we can reprocess the item. In case you are wondering why a reprocessing may not work when you resupply the item to the source, there is a good chance that layline.io still recognizes this item as already processed and will therefore ignore it.

To remove the item select the it from the list **(6)** and then click `Reset selected`. To delete the complete list, select `Reset all`. If you then resupply the item you deleted from the list, it will be reprocessed. 

![](.index_images/10.png "Removing an item from the Source list (Operations --> Cluster)")

#### Resources Coordinator (3)

The "_**Resource Coordinator (3)**_" is like the Source Coordinator, except that it monitors the static resources (see above).

On the left is the list of individual Resource Groups. Again, selecting an entry **(4)** will display the details on the right. In the example below you see that the selected Resource Group is a Kafka topic separated into 10 partitions. You can see partitions 5 and 6 are currently reserved **(5)**. The other partitions are not occupied at the time.

##### Freeing up resources

To free up a resource you need to select it **(5)** and click `Revoke selected` **(6)**. Click `Revoke all`  **(7)** to reset all partitions in this example.


![](.index_images/53.png "Freeing up resources (Operations --> Cluster)")


### AI Storage

The "_**AI Storage**_" is a process (Controller) which manages AI models.
![](./.index_images/1705932603589.png)

### User Storage

To learn how to manage Users, Roles and permissions within layline.io, please check [User Storage](./operations-user-storage) for user management on the cluster, or .

### Security Storage

layline.io by its nature is destined to connect to a multitude of systems and APIs which are usually protected by security mechanisms --> the "_Secrets_". 
These Secrets can be very sensitive in nature. But when working with such Secrets, there are always some risks in them being exposed, 
especially in Software and Configuration Projects where Secrets may end up in clear text more often than not, for lack of better mechanisms. 

To learn how to manage secrets resp. security within layline.io, 
please check [Security Storage](./operations-secret-storage) for security management on the cluster.

### Stream Monitor




### Starting / stopping Workflows

<WipDisclaimer></WipDisclaimer>
