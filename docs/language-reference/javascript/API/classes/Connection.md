# Connection

A `Connection` represents an active link to a service (e.g., JDBC database, HTTP endpoint). Connections are obtained through the `services` object and support transactions for compatible services.

Not all services provide connections — check the specific service documentation.

---

## At a Glance

```js
let connection = null;

export function onStreamStart() {
    if (!connection) {
        connection = services.MyDBService.openConnection();
    }
    connection.beginTransaction();
}

export function onMessage() {
    // Call a service function
    const result = connection.MyInsert({
        DeviceID: message.data.IOT.DEVICE_ID,
        Value: message.data.IOT.MEASUREMENT
    });
}

export function onCommit() {
    if (connection) {
        connection.commitTransaction();
        connection.closeConnection();
        connection = null;
    }
}

export function onRollback() {
    if (connection) {
        connection.rollbackTransaction();
        connection.closeConnection();
        connection = null;
    }
}
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

```js
// Open
connection = services.MyDBService.openConnection();

// Transaction
connection.beginTransaction();
// ... operations ...
connection.commitTransaction();

// Close
connection.closeConnection();
```

---

## Calling Service Functions

Service functions are called as methods on the connection. Pass parameters as a JSON object or [`Message`](Message.md).

```js
// Insert with JSON object
connection.MyInsert({
    DeviceID: message.data.IOT.DEVICE_ID,
    Measurement: message.data.IOT.MEASUREMENT,
    Timestamp: message.data.IOT.TIMESTAMP
});

// Query with JSON object
const result = connection.SelectCustomersByNameAndZip({
    ZipCode: message.data.CUSTOMER.ZIP_CODE,
    LastName: message.data.CUSTOMER.LAST_NAME
});

// Iterate results (array of records)
result.data.forEach(record => {
    stream.logInfo(`Name: ${record.FirstName} ${record.LastName}`);
});

// Access specific record
if (result.data.length > 2) {
    const third = result.data[2];
    stream.logInfo(third.FirstName);
}
```

---

## Complete Example

```js
let OUTPUT_PORT;
let connection = null;

export function onInit() {
    OUTPUT_PORT = processor.getOutputPort('Output');
}

export function onStreamStart() {
    if (!connection) {
        connection = services.MyDBService.openConnection();
    }
    connection.beginTransaction();
}

export function onMessage() {
    try {
        // Insert record
        connection.MyInsert({
            OrderID: message.getString(dataDictionary.type.Order.ID),
            Amount: message.getDecimal(dataDictionary.type.Order.AMOUNT),
            Status: 'PENDING'
        });

        stream.emit(message, OUTPUT_PORT);
    } catch (err) {
        stream.requestRollback(Status.create(VENDOR, 'DB_ERROR', err));
    }
}

export function onCommit() {
    if (connection) {
        connection.commitTransaction();
        connection.closeConnection();
        connection = null;
    }
}

export function onRollback() {
    if (connection) {
        connection.rollbackTransaction();
        connection.closeConnection();
        connection = null;
    }
}
```

---

## See Also

- [`Service`](Service.md) — Service overview and access patterns
- [`Message`](Message.md) — Pass messages as function parameters
