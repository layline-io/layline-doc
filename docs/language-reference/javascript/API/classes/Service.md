# Service

Services in layline.io provide integrations with external systems — databases, message queues, HTTP APIs, email servers, and more. You configure services through Service Assets in the UI, then access them in JavaScript via the `services` object.

Available service types include JDBC, HTTP, Email, Cassandra, Hazelcast, Aerospike, and more.

---

## At a Glance

```js
// Access a configured service
const dbService = services.MyDBService;
const emailService = services.EmailService;

// Open a connection (for connection-based services like JDBC)
const connection = dbService.openConnection();

// Call service functions
const result = connection.MyQuery({ id: '123' });
```

---

## Accessing Services

Services linked to your JavaScript Asset are available through the `services` object using their configured names.

```js
// In your JavaScript Asset configuration, you linked:
// - MyDBService (JDBC Service)
// - EmailService (Email Service)

const db = services.MyDBService;
const mail = services.EmailService;
```

---

## Connection-Based Services

Some services (like JDBC) provide connections that support transactions:

```js
let connection = null;

export function onStreamStart() {
    if (!connection) {
        connection = services.MyDBService.openConnection();
    }
    connection.beginTransaction();
}

export function onCommit() {
    connection.commitTransaction();
    connection.closeConnection();
    connection = null;
}
```

See [`Connection`](Connection.md) for full details on transactions and function calls.

---

## Direct Services

Some services (like HTTP, Email) don't use connections — you call methods directly:

```js
// Send email
services.EmailService.Send({
    from: 'alert@company.com',
    toList: 'admin@company.com',
    subject: 'System Alert',
    body: 'Processing completed.'
});
```

See [`Email`](Email.md) for email-specific options.

---

## See Also

- [`Connection`](Connection.md) — Connection lifecycle and transactions
- [`Email`](Email.md) — Email service methods
- [`TimerService`](TimerService.md) — Timer scheduling service
