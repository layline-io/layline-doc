---
title: JDBC Service
description: JDBC Service Asset. Use this to connect to a JDBC data source.
---

import WipDisclaimer from '../../../snippets/common/_wip-disclaimer.md'
import Testcase from '../../../snippets/assets/_asset-service-test.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DataDictionaryCard from '../../../snippets/assets/data-dictionary-card.md';

# JDBC Service

## Purpose

Define a service to interface with a JDBC data source.

![](.asset-service-jdbc_images/6ca59550.png "Asset Dependency Graph (Service JDBC)")

This service is specialized for interacting with JDBC (Java Database Connectivity) compatible databases. It allows you to configure functions that can execute SQL queries and statements against a connected database. Classical RDBMS (Relational Database Management Systems) that are JDBC compatible are:
1.	Oracle Database: Widely used in enterprise environments, Oracle’s JDBC drivers support various versions of the database.
2.	MySQL: An open-source RDBMS that’s very popular for web applications. It has a well-supported JDBC driver.
3.	PostgreSQL: Another open-source RDBMS known for its advanced features and standards compliance. It also has robust JDBC support.
4.	Microsoft SQL Server: A widely used RDBMS in enterprise environments, with comprehensive JDBC driver support.

These databases are commonly used and have strong JDBC support, making them suitable for various applications. While they are only examples. Other RDBMS or backends supporting JDBC functions could be connected through this JDBC Service Asset as well.

## Prerequisites

None

## Configuration

### Name & Description

![](.asset-service-jdbc_images/651091bb.png "Name & Description (Service JDBC)")

* **`Name`** : Name of the Asset. Spaces are not allowed in the name.

* **`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand
and then click to follow, if any.

### Required roles

![](.asset-service-jdbc_images/3fdedead.png "Required Roles (Service JDBC)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles
configured, then you **can** restrict use of this Asset to those Nodes with matching
roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all
Nodes (no restriction).

### JDBC Connection

JDBC requires a connection which is requires an address, username and password.

* **`URL`** : The URl on how to access the JDBC source. Consult with the data source on how this URL needs to be
  composed. It is exactly like you would use it in a tool like DBeaver for example.

* **`Username`** : Name of user to log in.

* **`Password`** : Associated password of the user.

![](.asset-service-jdbc_images/b1913a15.png "JDBC Connection (Service JDBC)")

You can use $\{...\} macros to expand variables defined
in [environment variables](../resources/asset-resource-environment):

![](.asset-service-jdbc_images/8d1cf687.png "JDBC Connection with placeholders (Service JDBC)")

### Service Functions

Services are accessed from other Assets via invocations of _Functions_.
This is where you define such functions.
In the context of JDBC, a Service Function encapsulates any valid DML (data manipulation) or even DDL (data definition)
statement.
Typically, you will be using `INSERT`, `SELECT` and `UPDATE` statements here.

#### Create Service Function

First create a new Function (1):

![](.asset-service-jdbc_images/e9eb2b65.png "Create Function (Service JDBC)")

Next fill out the details:

![](.asset-service-jdbc_images/fa5c3fce.png "Service Function Details (Service JDBC)")

* `Function name` (1): The name of the function. Must not have whitespaces.

* `Function description` : Something which describes the function (optional).

* `SQL Statement` (2): The actual SQL-Statement to access execute against the JDBC data source. Please note the use of
  the `:Id` bind-variable in the example above. The variables you can use here, must have been defined in the data
  dictionary and assigned via the `Parameter type`. See next section to learn how to do this.

* `Parameter type` (3): Reference to a data dictionary type which you must have defined below. All members of this type
  can
  be used as bind-variables in the SQL-Statement.

* `Result type` (4): Reference to a data dictionary type which you must have defined below. All members of this type can
  be used as result variables in the SQL-Statement. Note, that this can be the same type as used for
  the `Parameter type`. In our example they share the same variables.

* `Mappings` (5): Define how you map the results from the SQL-Statement to your `Result Type` data structure. On the
  left
  you enter (assisted) the bind-variable names to which members of the `Result Type` should be mapped. Member names are
  always preceded with `result.` and then followed by the member name. On the right hand side, enter the original field
  names used in your SQL-Statement.

<DataDictionaryCard></DataDictionaryCard>

### Example: Using the JDBC Service

The JDBC Service can be used from within a JavaScript Asset. In our example we have a simple Workflow which reads a
file with customer related data (1), then in a next step (2) reads corresponding customer date from a JDBC source, and
simply outputs this data to the log. There is no other purpose in this Workflow than to demonstrate how to use the
Service.

![](.asset-service-jdbc_images/3959df0c.png "Example Workflow (Service JDBC)")

In the middle of the Workflow we find a JavaScript Processor by the name of “_EnrichCustomer_”. This Processor reads
additional customer information from a JDBC compatible store using the JDBC Service.

How is it configured?

#### Link EnrichCustomer Processor to JDBC Service

To use the JDBC Service in the JavaScript Processor, we first have to **assign the Service within the JavaScript
Processor** like so:

![](.asset-service-jdbc_images/4b602e49.png "Link Service to JavaScript Asset (Service JDBC)")

* **`Physical Service`** (1): The JDBC Service which we have configured above.

* **`Logical Service Name`** (2): The name by which we want to use the Service within JavaScript. This could be the
#### Access the Service from within a Script Processor

Now let's use the service within a script processor:


##### Reading from JDBC Source

Now let’s finally use the service within JavaScript:

##### Reading from JDBC Source

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
let jdbcData = null; // will receive a message type
let customer_id = 1234;
try {
    // Invoke service function.
    // Service access defined as synchronous. Therefore no promise syntax here
    jdbcData = services.CustomerData.MyFunction(
        {Id: customer_id}
    );
    // services: fixed internal term to access linked services
    // CustomerData: The logical name of the service which we have given to it
    // MyFunction: Collection function to read the customer data with the given customer_id
} catch (error) {
    // handle error
}

// Output the customer data to the processor log
if (jdbcData && jdbcData.data.length > 0) {
    processor.logInfo('Name: ' + jdbcData.data[0].Name);
    processor.logInfo('Address: ' + jdbcData.data[0].Address);
} else {
    processor.logInfo('No customer data found for customer ID ' + customer_id);
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
jdbc_data = None  # will receive a message type
customer_id = 1234
try:
    # Invoke service function.
    # Service access defined as synchronous. Therefore no promise syntax here
    jdbc_data = services.CustomerData.MyFunction({
        'Id': customer_id
    })
    # services: fixed internal term to access linked services
    # CustomerData: The logical name of the service which we have given to it
    # MyFunction: Collection function to read the customer data with the given customer_id
except error:
    # handle error
    pass

# Output the customer data to the processor log
if jdbc_data and jdbc_data.data.length > 0:
    processor.log_info('Name: ' + jdbc_data.data[0].Name)
    processor.log_info('Address: ' + jdbc_data.data[0].Address)
else:
    processor.log_info('No customer data found for customer ID ' + str(customer_id))
```

  </TabItem>
</Tabs>

:::tip Note: Service functions return a Message
Note how the Service function returns a [Message](../../../language-reference/javascript/API/classes/Message.md) as a result
type.

Since SQL-queries always return arrays, you can find the results in `message.data` as an array. If we are only expecting
one row as a result we can test it with `jdbcData.data.length > 0` and access the first row with `jdbcData.data[0]`.
:::

##### Insert/Update to JDBC

Let's assume we also had defined a function `WriteCustomerData` which inserts a new customer:

```sql
insert into customer
values id = :Id, name = :Name, address = :Address;
```

We could then invoke this function and pass values to it like so:

:::tip Note: Service functions return a Message
Note how the Service function returns a [Message](../../../language-reference/javascript/API/classes/Message.md) as a result
type.

Since SQL-queries always return arrays, you can find the results in `message.data` as an array. If we are only expecting
one row as a result we can test it with `jdbcData.data.length > 0` and access the first row with `jdbcData.data[0]`.
:::

##### Insert/Update to JDBC

Let's assume we also had defined a function `WriteCustomerData` which inserts a new customer:

```sql
insert into customer
values id = :Id, name = :Name, address = :Address;
```

We could then invoke this function and pass values to it like so:

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
try {
    services.CustomerData.WriteCustomerData(
        {
            Id: 1235,
            Name: 'John Doe',
            Address: 'Main Street',
        }
    )
} catch (error) {
    // handle error
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
try:
    services.CustomerData.WriteCustomerData({
        'Id': 1235,
        'Name': 'John Doe',
        'Address': 'Main Street',
    })
except error:
    # handle error
    pass
```

  </TabItem>
</Tabs>

It works the same for any other JDBC compliant statement.

<Testcase></Testcase>

---

<WipDisclaimer></WipDisclaimer>