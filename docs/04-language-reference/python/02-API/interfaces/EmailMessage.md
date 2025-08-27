# EmailMessage

Interface representing an email message structure.
Used by the Email service to send emails.
Used in the [`Email.Send()`](../classes/Email.md#send) method.

## Properties

### Bcc

> **Bcc**: `list[{Address: str, PersonalName: str}]`

List of BCC recipient information with address and personal name.

Each entry in the list should contain:
- `Address`: The email address
- `PersonalName`: The personal name (optional)

***

### BccList

> **BccList**: `str`

Comma or semicolon separated list of BCC recipient email addresses.

***

### Body

> **Body**: `str`

The body content of the email.

***

### Cc

> **Cc**: `list[{Address: str, PersonalName: str}]`

List of CC recipient information with address and personal name.

Each entry in the list should contain:
- `Address`: The email address
- `PersonalName`: The personal name (optional)

***

### CcList

> **CcList**: `str`

Comma or semicolon separated list of CC recipient email addresses.

***

### From

> **From**: `list[{Address: str, PersonalName: str}]`

List of sender information with address and personal name.

Each entry in the list should contain:
- `Address`: The email address
- `PersonalName`: The personal name (optional)

***

### Subject

> **Subject**: `str`

The subject line of the email.

***

### To

> **To**: `list[{Address: str, PersonalName: str}]`

List of recipient information with address and personal name.

Each entry in the list should contain:
- `Address`: The email address
- `PersonalName`: The personal name (optional)

***

### ToList

> **ToList**: `str`

Comma or semicolon separated list of recipient email addresses.

## Example

```python
# Example email message structure
email_message = {
    "From": [{
        "Address": "sender@example.com",
        "PersonalName": "John Doe"
    }],
    "To": [{
        "Address": "recipient@example.com",
        "PersonalName": "Jane Doe"
    }],
    "Cc": [{
        "Address": "cc@example.com",
        "PersonalName": "CC Recipient"
    }],
    "Bcc": [{
        "Address": "bcc@example.com",
        "PersonalName": "BCC Recipient"
    }],
    "Subject": "Test Email",
    "Body": "This is a test email message."
}

# Alternative using string lists
email_message_simple = {
    "From": "sender@example.com",
    "ToList": "recipient1@example.com;recipient2@example.com",
    "CcList": "cc@example.com",
    "BccList": "bcc@example.com",
    "Subject": "Test Email",
    "Body": "This is a test email message."
}
```
