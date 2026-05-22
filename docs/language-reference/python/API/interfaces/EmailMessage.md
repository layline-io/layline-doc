---
description: Email structure used with [`Email.send().
---

---
id: py-EmailMessage
---

# EmailMessage

Email structure used with [`Email.send()`](../classes/Email.md).

---

## At a Glance

```python
Email.send({
    "From": [{"Address": "sender@example.com", "PersonalName": "Sender Name"}],
    "To":   [{"Address": "recipient@example.com", "PersonalName": "Recipient Name"}],
    "Subject": "Hello from layline.io",
    "Body": "This is the email body."
})
```

---

## Properties

### To / Cc / Bcc

Array of recipient objects, each with `Address` and `PersonalName`.

| Property | Type | Description |
|----------|------|-------------|
| `Address` | `str` | Email address |
| `PersonalName` | `str` | Display name |

```python
"To": [
    {"Address": "alice@example.com", "PersonalName": "Alice"},
    {"Address": "bob@example.com",   "PersonalName": "Bob"}
]
```

### ToList / CcList / BccList

Comma or semicolon separated string of email addresses. Use as a shortcut when you don't need display names.

```python
"ToList": "alice@example.com; bob@example.com"
```

### From

Array of sender objects with the same structure as `To`.

```python
"From": [{"Address": "noreply@example.com", "PersonalName": "System"}]
```

### Subject

`str` — The email subject line.

### Body

`str` — The email body content.
