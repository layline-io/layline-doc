---
description: Send emails through a configured Email Service. Access the service via `services.YourEmailServiceName`.
---

---
id: py-Email
---

# Email

Send emails through a configured Email Service. Access the service via `services.YourEmailServiceName`.

---

## At a Glance

```python
# Simple text email
services.EmailService.send({
    "from": "system@company.com",
    "toList": "user@company.com",
    "subject": "Order Confirmation",
    "body": "Your order has been processed."
})

# HTML email with multiple recipients
services.EmailService.send({
    "from": {
        "Address": "noreply@company.com",
        "PersonalName": "Company System"
    },
    "to": [
        {"Address": "user1@company.com", "PersonalName": "User One"},
        {"Address": "user2@company.com", "PersonalName": "User Two"}
    ],
    "cc": [{"Address": "manager@company.com"}],
    "subject": "Monthly Report",
    "body": "<h1>Report</h1><p>See attachment.</p>"
})
```

---

## Send(params)

Sends an email. Two addressing styles are supported — don't mix similar properties (e.g., use `to` **or** `toList`, not both).

### Simple Address Strings

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `str` | Sender email address |
| `toList` | `str` | Semicolon-separated recipient addresses |
| `ccList` | `str` (optional) | Semicolon-separated CC addresses |
| `bccList` | `str` (optional) | Semicolon-separated BCC addresses |
| `subject` | `str` | Email subject |
| `body` | `str` | Email body (text or HTML) |

```python
services.EmailService.send({
    "from": "alerts@company.com",
    "toList": "team@company.com;manager@company.com",
    "ccList": "archive@company.com",
    "subject": "Alert: High Error Rate",
    "body": f"Errors in last hour: {error_count}"
})
```

### Structured Addresses

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `dict` | `{"Address": str, "PersonalName": str}` |
| `to` | `List[dict]` | Array of `{"Address": str, "PersonalName": str}` |
| `cc` | `List[dict]` (optional) | Array of `{"Address": str, "PersonalName": str}` |
| `bcc` | `List[dict]` (optional) | Array of `{"Address": str, "PersonalName": str}` |
| `subject` | `str` | Email subject |
| `body` | `str` | Email body |

```python
services.EmailService.send({
    "from": {
        "Address": "noreply@company.com",
        "PersonalName": "Order System"
    },
    "to": [{
        "Address": "customer@example.com",
        "PersonalName": "John Doe"
    }],
    "subject": "Order #12345 Confirmed",
    "body": "Thank you for your order!"
})
```

---

## Complete Example

```python
def on_message():
    order_id = message.getString(dataDictionary.type.Order.ID)
    customer_email = message.getString(dataDictionary.type.Order.CUSTOMER_EMAIL)

    # Send confirmation
    services.EmailService.send({
        "from": "orders@company.com",
        "toList": customer_email,
        "subject": f"Order {order_id} Confirmed",
        "body": f"Your order {order_id} has been received and is being processed."
    })

    stream.emit(message, OUTPUT_PORT)
```

---

## See Also

- [`EmailMessage`](../interfaces/EmailMessage.md) — Full message structure reference
- [`Service`](Service.md) — Service access patterns
