---
id: py-Service
---

# Service

Services in layline.io provide integrations with external systems — databases, message queues, HTTP APIs, email servers, and more. You configure services through Service Assets in the UI, then access them in Python via the `services` object.

Available service types include JDBC, HTTP, Email, Cassandra, Hazelcast, Aerospike, and more.

---

## At a Glance

```python
# Access a configured service
db_service = services.MyDBService
email_service = services.EmailService

# Open a connection (for connection-based services like JDBC)
connection = db_service.openConnection()

# Call service functions
result = connection.MyQuery(message)
```

---

## Accessing Services

Services linked to your Python Asset are available through the `services` object using their configured names.

```python
# In your Python Asset configuration, you linked:
# - MyDBService (JDBC Service)
# - EmailService (Email Service)

db = services.MyDBService
mail = services.EmailService
```

---

## Connection-Based Services

Some services (like JDBC) provide connections that support transactions:

```python
connection = None

def on_stream_start():
    global connection
    if not connection:
        connection = services.MyDBService.openConnection()
    connection.beginTransaction()

def on_commit():
    global connection
    if connection:
        connection.commitTransaction()
        connection.closeConnection()
        connection = None
```

See [`Connection`](Connection.md) for full details on transactions and function calls.

---

## Direct Services

Some services (like HTTP, Email) don't use connections — you call methods directly:

```python
# Send email
services.EmailService.Send({
    'from': 'alert@company.com',
    'toList': 'admin@company.com',
    'subject': 'System Alert',
    'body': 'Processing completed.'
})
```

See [`Email`](Email.md) for email-specific options.

---

## See Also

- [`Connection`](Connection.md) — Connection lifecycle and transactions
- [`Email`](Email.md) — Email service methods
- [`TimerService`](TimerService.md) — Timer scheduling service
