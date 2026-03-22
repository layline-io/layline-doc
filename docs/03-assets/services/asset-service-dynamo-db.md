---
title: DynamoDB Service
description: DynamoDB Service Asset. Use this to connect to an AWS DynamoDB database.
tags:
  - dynamodb
  - aws
  - database
  - nosql
  - service
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import Testcase from '../../snippets/assets/_asset-service-test.md';

# DynamoDB Service

## Purpose

Define a service to interface with an AWS DynamoDB database.

## Prerequisites

* An AWS Connection asset configured and available.
* AWS credentials (access key / secret key) or an IAM role with appropriate DynamoDB permissions.

## Configuration

### Name & Description

* **`Name`** : Name of the Asset. Spaces are not allowed in the name.

* **`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it.
Click to expand and then click to follow, if any.

### Required Roles

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles
configured, then you **can** restrict use of this Asset to those Nodes with matching roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all
Nodes (no restriction).

### Dynamo DB Settings

#### Connection

* **`Connection`** : The AWS Connection asset to use for DynamoDB access.
  This field supports inheritance from a parent Service definition.

#### Target Data Dictionary Namespace

* **`Target data dictionary namespace`** : Namespace for auto-generated data types in the Data Dictionary.
  If left empty, the namespace defaults to `{ServiceName}Types`.
  This field supports inheritance from a parent Service definition.

### Collections

Collections provide a convenient way to define DynamoDB table access. A Collection defines a table schema and
automatically generates **Read**, **Write**, and **Delete** functions for that table.

Use Collections when you want a general-purpose way to access a table. Use [Functions](#functions) when you need
granular control over individual operations.

#### Add a Collection

Click **Add Collection** to create a new Collection.

##### Collection Name & Description

* **`Collection name`** : Name of the Collection. Must be unique within the Service. Must not contain spaces.

* **`Collection description`** : Optional description of the Collection.

##### AWS Table Name

* **`AWS table name`** : The name of the DynamoDB table as defined in AWS.

##### Key Attributes

Key attributes define the primary key of the DynamoDB table. You must define at least one key attribute.

Each key attribute maps a DynamoDB primary key component to a message property.

* **`AWS attribute name`** : The name of the attribute in DynamoDB.

* **`Property name in parameter/result message`** : The name of the corresponding field in the layline.io message.

For each key attribute, configure the [Mapping](#attribute-mapping) as described below.

##### Value Attributes

Value attributes define the non-key attributes of the DynamoDB item. These are optional depending on your access pattern.

Each value attribute has the same fields as key attributes, plus additional mapping options.

#### Delete / Copy / Paste

* **Delete Collection** : Removes the selected Collection. A confirmation dialog appears.
* **Copy** : Copies the Collection to the clipboard.
* **Paste** : Pastes a Collection from the clipboard (if one has been copied).
* **Reset to parent** : Resets the Collection to the inherited value from a parent Service (if any).

### Functions

Functions give granular control over DynamoDB operations. Unlike Collections, you define each function type explicitly.

#### Add a Function

Click **Add Function** to create a new Function.

##### Function Name & Description

* **`Function name`** : Name of the Function. Must be unique within the Service. Must not contain spaces.

* **`Function description`** : Optional description of the Function.

##### AWS Table Name

* **`AWS table name`** : The name of the DynamoDB table. Can be overridden per function if different from the Collection-level table name.

##### Function Type

* **`Function type`** : The type of DynamoDB operation. Options:

| Value | Description |
|-------|-------------|
| Delete | Delete an item from the table |
| Read | Read an item from the table |
| Write | Write an item to the table |

##### Key Attributes

Key attributes define the primary key of the DynamoDB table, just as in Collections.

##### Value Attributes

Value attributes are available for **Read** and **Write** function types only.

#### Delete / Copy / Paste / Reset to parent

Same behavior as Collections.

### Attribute Mapping

Each attribute (key or value) has a configurable mapping that defines how the attribute is stored in DynamoDB
and how it maps to the layline.io message.

#### Mapping Type

* **`Mapping type`** : How the attribute value is resolved. Options:

| Value | Description |
|-------|-------------|
| Data Dictionary | Maps to a data dictionary type (complex types) |
| Value | Uses a static value type (string, binary) |
| TTL | Maps to a DynamoDB TTL (time-to-live) attribute |

#### Value Mapping

Used when `Mapping type` is set to `Value`.

* **`AWS attribute type`** : The DynamoDB attribute type. Options: `Binary`, `String`.

* **`Data dictionary type`** : The layline.io data dictionary type (e.g., `System.String`).

For **value attributes only** (not key attributes):

* **`Attribute is optional`** : Marks the attribute as optional in the DynamoDB item.

* **`Use AWS null attribute`** : When the attribute is `null`, stores it as a DynamoDB null attribute instead of omitting it.

#### Data Dictionary Mapping

Used when `Mapping type` is set to `Data Dictionary`.

* **`AWS attribute type`** : The DynamoDB attribute type. Options: `Binary`, `Binary Set`, `Boolean`, `List`, `Map`, `Number`, `Number Set`, `String`, `String Set`.

* **`Data dictionary type`** : The layline.io data dictionary type to map to/from.

* **`Serialization type`** : How complex types are serialized. Currently: `Json`.

For **value attributes only**:

* **`Attribute is optional`** : Marks the attribute as optional.

* **`Use AWS null attribute`** : When the attribute is `null`, stores it as a DynamoDB null attribute.

#### TTL Mapping

Used when `Mapping type` is set to `TTL`.

* **`Default TTL`** : Default time-to-live value in seconds. The DynamoDB item will be automatically deleted by AWS after this many seconds from the TTL attribute value.

### Data Dictionary

The Data Dictionary defines the custom data types used by the Service's Functions and Collections.
These types specify the structure of request parameters and response data for DynamoDB operations.

The namespace for these types is determined by the **Target data dictionary namespace** setting.
If not specified, it defaults to `{ServiceName}Types`.

For example, if your Service is named `CustomerData` and your namespace is `CustomerDataTypes`, a
Read function's parameter type would be `CustomerDataTypes.ReadCustomerData.Parameter` and its result type
would be `CustomerDataTypes.ReadCustomerData.Result`.

Define types using the Data Dictionary editor. Each type consists of members that map to DynamoDB attributes
via the attribute mapping configuration.

### Auto-Generated Function Names

DynamoDB Service auto-generates Function names that are used to invoke the service from Workflows:

**From Collections:**

| Operation | Function Name Pattern |
|-----------|----------------------|
| Delete | `{Namespace}.Delete{CollectionName}` |
| Read | `{Namespace}.Read{CollectionName}` |
| Write | `{Namespace}.Write{CollectionName}` |

**From Functions:**

| Operation | Function Name Pattern |
|-----------|----------------------|
| Delete | `{Namespace}.{FunctionName}` |
| Read | `{Namespace}.Read{FunctionName}` |
| Write | `{Namespace}.Write{FunctionName}` |

Parameter and result types follow the pattern `{Namespace}.{Operation}{Name}.Parameter` and
`{Namespace}.{Operation}{Name}.Result` respectively.

<Testcase></Testcase>

---

<WipDisclaimer></WipDisclaimer>
