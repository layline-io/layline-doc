# Connection

Abstract class which defines a Service Connection.
This connection must have been acquired via using the `services` keyword within a Python Asset script.

**NOTE:** Not all services provide a connection.
Please refer to the documentation of the respective Service Asset to understand how to use it within Python.

**Opening a connection:**
To open a connection, use the respective method of the Service.

Example: Assume we have a JDBC Service `MyDBService`, we can then open a connection using the Service's `openConnection()` method:
```python
OUTPUT_PORT = None
connection = None

# Initial setup
def onInit():
    global OUTPUT_PORT
    OUTPUT_PORT = processor.getOutputPort('MyOutput')

def onStreamStart():
    global connection
    if not connection:
       # Open a connection to the DB service. Note the use of "services" below:
        connection = services.MyDBService.openConnection()
    connection.beginTransaction()
```

## Abstract

## Methods

### FUNCTION_NAME()

> **FUNCTION_NAME**(message: Message) -> Message

When defining a Service which supports connections, you normally also define one or more **functions** to perform actions.
With a JDBC Service this could be functions like `INSERT`, `UPDATE`, `SELECT`, and so on.
In the process you will also have defined a name for each function, e.g. `MyInsert`.

#### Invocation

Let's assume you have defined a function named `MyInsert` which inserts a record into a database.
`MyInsert` expects three parameters `DeviceID`, `Measurement`, and `Timestamp`.
All of these functions expect a [Message](Message.md) as input. The message must contain the expected parameters.
You can pass this in either
* As an already existing message
* A message which you created using [datadictionary.createMessage](./DataDictionary#createmessage)
* A dict object in the expected format (see example below). This will then be implicitly converted to a message format.

#### Parameters

- **message**: Message

  You pass a [Message](Message.md) in which contains the necessary parameters for the function to execute.

#### Returns

Message - The returned result is also in the form of a [Message](Message.md). Access the data through `result.data`.

#### Examples

```python
# Record insert
def onMessage():
    # Insert record to the DB using function "MyInsert"
    # Please note that we pass a dict object here, which will be automatically
    # converted to a Message to match the expected parameter
    insert_result = connection.MyInsert(
        {
            "DeviceID": message.data.IOT.DEVICE_ID,
            "Measurement": message.data.IOT.MEASUREMENT,
            "Timestamp": message.data.IOT.TIMESTAMP
        }
    )
```

**FUNCTION_NAME** therefore is a placeholder for the actual function name which you have assigned to the Insert statement in our example.

#### Result handling

A call to the Service always returns a [Message](Message.md) as well.

The structure of the result Message depends on the Service function we invoked.

Let's assume we have a function to select all customer data by last name and zip code from a database.
The function's name shall be `SelectCustomersByNameAndZip`.
It receives two arguments `ZipCode` and `LastName` and returns an array which includes the former two parameters as well as `FirstName`.
For the purpose of demonstration we simply output the result to the stream log. Normally you would use the data for your further processing requirements.

```python
def onMessage():
    result_message = None
    first_name = None
    last_name = None

    if connection:
        # Selecting all customers with the same zip code and last name
        result_message = connection.SelectCustomersByNameAndZip(
            {
                "ZipCode": message.data.CUSTOMER.ZIP_CODE,
                "LastName": message.data.CUSTOMER.LAST_NAME
            }
        )

    # Because we know that we invoked a function from a JDBC Service, we also know that the
    # result data is in the form of an array. This depends on the type of Service involved.
    # We cycle through result set and output to stream log.
    # NOTE the use of record.data to access the result.
    for record in result_message.data:
        stream.logInfo(f"Full Name: {record.FirstName} {record.LastName}, Zip: {record.ZipCode}")

    # Access the third element in the result set:
    if len(result_message.data) > 2:
         third_record = result_message.data[2]
```

### beginTransaction()

> **beginTransaction**() -> None

Starts a new transaction, if the Service supports transactions (e.g. the JDBC Service).

```python
if connection:
    connection.beginTransaction()
```

See also [commitTransaction](#committransaction)

#### Returns

None

### closeConnection()

> **closeConnection**() -> None

Closes an open connection

```python
if connection:
    connection.closeConnection()
```

See also [openConnection](#openconnection)

#### Returns

None

### commitTransaction()

> **commitTransaction**() -> None

Commits a transaction, in case the underlying Service supports transactions (e.g. JDBC Service).

```python
if connection:
    connection.commitTransaction()
```

See also [beginTransaction](#begintransaction)

#### Returns

None

### openConnection()

> **openConnection**() -> None

Opens a connection to the Service.


```python
if not connection:
    connection = services.MyDBService.openConnection()
    connection.beginTransaction()
    # ...
```

See also [closeConnection](#closeconnection)

#### Returns

None

### rollbackTransaction()

> **rollbackTransaction**() -> None

Rolls a transaction back, in case the Service connection supports transactions.

```python
if connection:
    connection.rollbackTransaction()
```

#### Returns

None
