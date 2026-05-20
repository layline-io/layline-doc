---
id: py-Connection
---

# Connection

A `Connection` represents an active link to a service (e.g., JDBC database, HTTP endpoint). Connections are obtained through the `services` object and support transactions for compatible services.

Not all services provide connections — check the specific service documentation.

---

## At a Glance

```python
connection = None

def on_stream_start():
    global connection
    if not connection:
        connection = services.MyDBService.openConnection()
    connection.beginTransaction()

def on_message():
    # Call a service function
    result = connection.MyInsert({
        "DeviceID": message.data.IOT.DEVICE_ID,
        "Value": message.data.IOT.MEASUREMENT
    })

def on_commit():
    global connection
    if connection:
        connection.commitTransaction()
        connection.closeConnection()
        connection = None

def on_rollback():
    global connection
    if connection:
        connection.rollbackTransaction()
        connection.closeConnection()
        connection = None
```

---

## Lifecycle Methods

| Method | Description |
|--------|-------------|
| `openConnection()` | Opens a new connection to the service |
| `closeConnection()` | Closes the connection |
| `beginTransaction()` | Starts a transaction (if supported) |
| `commitTransaction()` | Commits the current transaction |
| `rollbackTransaction()` | Rolls back the current transaction |

```python
# Open
connection = services.MyDBService.openConnection()

# Transaction
connection.beginTransaction()
# ... operations ...
connection.commitTransaction()

# Close
connection.closeConnection()
```

---

## Calling Service Functions

Service functions are called as methods on the connection. Pass parameters as a `dict` or [`Message`](../classes/Message.md).

```python
# Insert with dict
connection.MyInsert({
    "DeviceID": message.data.IOT.DEVICE_ID,
    "Measurement": message.data.IOT.MEASUREMENT,
    "Timestamp": message.data.IOT.TIMESTAMP
})

# Query with dict
result = connection.SelectCustomersByNameAndZip({
    "ZipCode": message.data.CUSTOMER.ZIP_CODE,
    "LastName": message.data.CUSTOMER.LAST_NAME
})

# Iterate results (list of records)
for record in result.data:
    stream.logInfo(f"Name: {record.FirstName} {record.LastName}")

# Access specific record
if len(result.data) > 2:
    third = result.data[2]
    stream.logInfo(third.FirstName)
```

---

## Complete Example

```python
OUTPUT_PORT = None
connection = None

def on_init():
    global OUTPUT_PORT
    OUTPUT_PORT = processor.getOutputPort('Output')

def on_stream_start():
    global connection
    if not connection:
        connection = services.MyDBService.openConnection()
    connection.beginTransaction()

def on_message():
    try:
        # Insert record
        connection.MyInsert({
            "OrderID": message.getString(dataDictionary.type.Order.ID),
            "Amount": message.getDecimal(dataDictionary.type.Order.AMOUNT),
            "Status": 'PENDING'
        })

        stream.emit(message, OUTPUT_PORT)
    except Exception as err:
        stream.requestRollback(Status.create(VENDOR, 'DB_ERROR', str(err)))

def on_commit():
    global connection
    if connection:
        connection.commitTransaction()
        connection.closeConnection()
        connection = None

def on_rollback():
    global connection
    if connection:
        connection.rollbackTransaction()
        connection.closeConnection()
        connection = None
```

---

## See Also

- [`Service`](Service.md) — Service overview and access patterns
- [`Message`](Message.md) — Pass messages as function parameters
