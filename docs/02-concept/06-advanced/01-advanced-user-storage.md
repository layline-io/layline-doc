---
title: User and Role Management
description: Learn how to manage Users and Privileges on Configuration Server and Reactive Cluster.
---


# User and Role Management

## Concept

layline.io divides the management of Users and Roles between 
1. Configuration Server, and
2. Reactive Engine Cluster

Users and Roles managed on each of these entities are completely separated, hence they need to be managed separately and also carry different privileges.

![User and Role Management (Advanced - User Storage](.01-advanced-user-storage_images/ddb3aef6.png "User and Role Management (Advanced - User Storage)")

The concept of Users and Roles should be familiar to most:
- Configuration Servers and Reactive Engines each may have a set of Users.
- Each User can be assigned to one or more Roles.
- Each Role has a number of assigned Privileges.
- Privileges are different between Configuration Server and Reactive Engine Cluster

---

## Where next?

Pick which User Storage you want to learn about and manage:
* [User Storage on the Configuration Server](../concept/settings/settings-user-storage) 
* [User Storage on the Reactive Engine Cluster](../concept/operations/cluster/operations-user-storage) 


