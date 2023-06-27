---
title: User Storage (Operations)
description: Learn how to configure cluster based users and roles.
---

# User Storage (Operations)

## Concept

layline.io divides the management of Users and Roles between 
1. Configuration Server, and
2. Reactive Engine Cluster

Users and Roles managed on each of these entities are completely separated, hence they need to be managed separately and also carry different privileges.

![](.operations-user-storage_images/2021-11-16-16-00-56.png "User Storage Concept (Operations --> User Storage)")

The concept of Users and Roles should be familiar to most:
The concept of Users and Roles should be familiar to most:
- Configuration Servers and Reactive Engines each may have a set of Users.
- Each User can be assigned to one or more Roles.
- Each Role has a number of assigned Privileges.
- Privileges are different between Configuration Server and Reactive Engine Cluster

The following chapters describe the setup of users, roles, and privileges for a **Reactive Engine Cluster**.
If you want to set up users, roles, and privileges for a Configuration Server, you can check how to do so [here](/doc/settings/settings-user-storage.md)

## Users and Roles on the Configuration Server

To manage Users and Roles on the Configuration Server navigate to `Settings --> User Storage` **(1)** and **(2)**.


![](.operations-user-storage_images/2021-11-16-16-19-51.png "Users and Roles on the Configuration Server (Operations --> User Storage)")

### User Storage Tab

The `User Storage Tab` shows information about the Controller and the current User:

![](.operations-user-storage_images/2021-11-16-16-14-47.png "User Storage Tab (Operations --> User Storage)")

The _Controller_ **(3)** shows where these Users and Roles are managed and how many Users and Roles are available on this Controller (the Configuration Server in this case).

The current User which is displayed here, is the User which is logged in to the Configuration Server **(4)** and their current privileges **(5)**. The privileges displayed is the condensed result of all privileges inherited through the roles that this user has been assigned to.

You can edit basic parameters of the current User by clicking on `Edit User`:

![](.operations-user-storage_images/2021-11-16-16-23-53.png "Edit user data (Operations --> User Storage)")

You cannot change the User name here. But please note that you can change the password here.

### Users Tab

The `Users Tab` **(1)** allows to manage Users. 

#### Add a User

To add a User click the `+` next to _"Users"_ **(2)**:

![](.operations-user-storage_images/2021-11-16-16-29-50.png "Add user (Operations --> User Storage)")

You need to define a user name.
:::caution
Please note that you cannot change the username later.
:::

![](.operations-user-storage_images/2021-11-16-16-36-03.png "Create new user (Operations --> User Storage)")

You can define whether a User should be enabled or not **(2)** and which Roles the User should be assigned to **(3)**. Click `OK`. You can then see the details of the newly created user on the right panel.

#### Change a User's settings.

Click `Edit User` **(4)** to change the User's settings.

![](.operations-user-storage_images/2021-11-16-16-41-38.png "Change a User's settings (Operations --> User Storage)")

#### Delete a User

To remove a User select the User in the tree. Then click on the down arrow and select `Remove`.

![](.operations-user-storage_images/2021-11-16-16-43-11.png "Delete a User (Operations --> User Storage)")

### Roles Tab

The `Roles Tab` allows to manage Roles **(1)**.

![](.operations-user-storage_images/2021-11-16-16-50-31.png "Roles Tab (Operations --> User Storage)")

Existing Roles are on the left-hand tree **(2)**. Details for a selected Role can be found on the right-hand panel showing the description **(3)** and assigned privileges.

#### Available privileges

The following privileges can be defined per Role on the Configuration Server:

Category | Privilege 
| --- | --- | --- |
| **User storage** | Rights to manage users and roles
| **Key storage** | Rights to manage key-pairs on the Configuration Server
| **Assets** | Rights to manage Assets in a Project
| **Projects** | Rights to manage Projects


#### Adding a Role

To add a Role click the `+` next to _"Roles"_ **(2)**.

A dialog will open, allowing you to edit description and privileges.

![](.operations-user-storage_images/2021-11-16-16-53-42.png "Adding a role (Operations - User Storage)")

:::caution
Please note that you cannot change the Role name later.
:::

#### Change a Role's settings

Click `Edit Role` on the right-hand paned to change the Role's settings.

#### Delete a Role

To delete a Role select the Role in the tree. Then click on the down arrow next to the Role and select `Remove`.

