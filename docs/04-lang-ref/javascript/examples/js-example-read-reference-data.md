---
title: Use Services
description: Example on how to use Services and Service Functions.
---

# Use Services within your Script

## Introduction

A typical thing you would want to do in your script is to access external data sources for read and write.
Access to such data sources/sinks is typically provided via [Services](/assets/services/asset-service-introduction)
which can be accessed from within your script.
We will show you an example on how this works in principle, which can then be used with any type of service.

## Defining a Service

layline.io provides the feature of [Service Assets](/assets/services/asset-service-introduction) in order to
transparently access external data sources/sinks. Please refer to that part of the documentation on how Services in
layline.io work and how to set them up.

## Example: Using the JDBC Service

Example outline:

* Create a Service which accesses a database
* Linking your Javascript Asset to the Service
* Using the Service within

To learn how to create a JDBC Service please refer
to [Service JDBC](/assets/services/asset-service-jdbc.html#link-enrichcustomer-processor-to-jdbc-service).

### Service Configuration

#### Definition of Service Function

We have defined the following query:

![7eda9354.png](.js-example-read-reference-data_images%2F7eda9354.png "Function definition (Example JDB Service)")

* (1) Function by the name of `GetCallTypeData`
* (2) A SQL-statement which queries a table for specific information
* (3) Bind-Variables of type `Training.CallType` (defined below)

#### Results Mapping

Results are also mapped to the `Training.CallType` data type:

![951ffe7b.png](.js-example-read-reference-data_images%2F951ffe7b.png "Result mapping (Example JDB Service)")

#### Data Dictionary

Finally, here is the definition for `Training.CallType`:

![e2c0753d.png](.js-example-read-reference-data_images%2Fe2c0753d.png "Data Dictionary Training.CallType Definition (Example JDB Service)")

### Assign Service to Javascript Asset

Assign the Service to the Javascript Asset in which you want to use the Service:

![9c1ebd28.png](.js-example-read-reference-data_images%2F9c1ebd28.png "Assign JDB Service to Javascript Asset (Example JDB Service)")

Please note that we have checked `Use synchronous services as default`. This means that all Service Function calls will
be handled synchronously (wait until done). In case you want asynchronous function handling (Promise style), then
uncheck this box. We will show examples on how to use either setting below.

Note also that we have also named the Service `ReferenceDataService` in the mapping; the same as the Service name.
This name is important. We are using it to reference the Service from within a Javascript.

### Invoking a Service Function from within Javascript

Now that all preparatory work is done to create the Service, we can actually use it in a script:

```js
/**
 * Retrieve call type name from database by its call type
 */
function getCallTypeNameById(callType) {
    let callTypeName = null;

    try {
        // Synchronous function invocation:
        const callTypeResult = services.ReferenceDataService.GetCallTypeData(
            {
                CallType: callType
            }
        );

        // Returned callTypeResult is a message
        if (callTypeResult && callTypeResult.data.length > 0) {
            callTypeName = callTypeResult.data[0].Description;
        } else {
            callTypeName = 'NA';
        }

        processor.logInfo('callType: ' + callType + ' --> callTypeName: ' + callTypeName); // DEBUG

    } catch (error) {
        // handle error
    } finally {
        // do final actions
    }

    return callTypeName;
}
```

:::note: Service functions return a Message
Note how the Service function returns a [Message](/lang-ref/javascript/api/classes/Message.html#message-2) as a result
type.

Since SQL-queries always return arrays, you can find the results in `message.data` as an array. If we are only expecting
one row as a result we can test it with `jdbcData.data.length > 0` and access the first row with `jdbcData.data[0]`.
:::

The example above uses synchronous service invocation. In case you have unchecked `Use synchronous services as default`
then you have to consider this when you code your script:

```js
/**
 * Retrieve call type name from database by its call type
 */
function getCallTypeNameById(callType) {
    let callTypeName = null;

    // asynchronous service invocation
    services.ReferenceDataService.GetCallTypeData(
        {
            CallType: callType
        }
    ).then(function (callTypeResult) {

        // Returned callTypeResult is a message
        if (callTypeResult && callTypeResult.data.length > 0) {
            callTypeName = callTypeResult.data[0].Description;
        } else {
            callTypeName = 'NA';
        }

        processor.logInfo('callType: ' + callType + ' --> callTypeName: ' + callTypeName); // DEBUG

        return callTypeName;

    }).catch(function (error) {
        // handle error
    });
}
```

### INSERT / UPDATE / DELETE

Instead of querying data, you can - of course - also issue other valid DML statements against the data source.

Here is an example of an INSERT. Let's assume we have configured the following Function in a JDBC Service:

![5d2c4d85.png](.js-example-read-reference-data_images%2F5d2c4d85.png "Service Function for Insert (Example JDB Service)")

Note, how the INSERT-statement returns `file_id`. This is an auto-increment field in the database which is returned
after an insert into table `file_all_tbl`.

```js
let connection = null; // Database connection.

try {
    // Establish specific database connection
    if (!connection) {
        connection = services.DBService.openConnection();
    }

    connection.beginTransaction(); // Go DB transactional

    // Snychronous service invocation
    let fileId = connection.InsertFileInfo({
        FileName: fileInfo.fileName,
        FileStatus: fileInfo.fileStatus,
        RecTotal: fileInfo.recTotal,
        RecFiltered: fileInfo.recFiltered,
        RecUploaded: fileInfo.recUploaded,
        RecRejected: fileInfo.recRejected,
        FileSize: fileInfo.fileSize,
        AggFlag: fileInfo.aggFlag,
        EarliestRecordTime: fileInfo.earliestRecordTime,
        LastRecordTime: fileInfo.lastRecordTime,
        OrgId: fileInfo.orgId,
        UserName: fileInfo.userName
    });

    fileInfo.fileId = fileId.data[0];

    connection.commitTransaction();
} catch (error) {
    // handle error
    connection.rollbackTransaction();
} finally {
    connection.closeConnection();
    connection = null;
}

```

### Connection Handling

As you may have noticed in the examples above, we have a way to explicitly acquire a `connection` or use an implicit
default connection.

If we do this ...

```js
const callTypeResult = services.ReferenceDataService.GetCallTypeData(
    {
        CallType: callType
    }
);
```

... then we make use of an implicit connection which is provided by the Service itself.
This is sufficient for many simple scenarios. For other use cases we may want to acquire one or many individual connections.
Especially if we want to handle individual transactions. For this purpose you can create individual connections like so:

```js
let connection = null; // Database connection.

try {
    // Establish specific database connection
    if (!connection) {
        connection = services.DBService.openConnection();
    }

    connection.beginTransaction(); // Go DB transactional

    // Snychronous service invocation
    let fileId = connection.InsertFileInfo({
        ...
    });
    connection.commitTransaction();
} catch (error) {
    // handle error
    connection.rollbackTransaction();
} finally {
    connection.closeConnection();
    connection = null;
}

```

:::caution Nullify connection after use
Make sure you always do `connection = null` after use of your connection, in order to release the connection object.
:::


### Conclusion

These examples should explain how to use Services in principle. Small differences may apply based on the type of Service
you are using.
There is for example a difference between [Service Aerospike](/assets/services/asset-service-aerospike.html)
and [Service JDBC](/assets/services/asset-service-jdbc.html#link-enrichcustomer-processor-to-jdbc-service).
For details on how to use the individual service please refer to the respective Service documentation.

---

:::note Can't find what you are looking for?
Please note, that the creation of the online documentation is **Work-In-Progress**. It is constantly being updated.
Should you have questions or suggestions, please don't hesitate to contact us at support@layline.io .
:::
