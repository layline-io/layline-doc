# Email

Send emails through a configured Email Service. Access the service via `services.YourEmailServiceName`.

---

## At a Glance

```js
// Simple text email
services.EmailService.Send({
    from: 'system@company.com',
    toList: 'user@company.com',
    subject: 'Order Confirmation',
    body: 'Your order has been processed.'
});

// HTML email with multiple recipients
services.EmailService.Send({
    from: {
        Address: 'noreply@company.com',
        PersonalName: 'Company System'
    },
    to: [
        { Address: 'user1@company.com', PersonalName: 'User One' },
        { Address: 'user2@company.com', PersonalName: 'User Two' }
    ],
    cc: [{ Address: 'manager@company.com' }],
    subject: 'Monthly Report',
    body: '<h1>Report</h1><p>See attachment.</p>'
});
```

---

## Send(params)

Sends an email. Two addressing styles are supported — don't mix similar properties (e.g., use `to` **or** `toList`, not both).

### Simple Address Strings

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `string` | Sender email address |
| `toList` | `string` | Semicolon-separated recipient addresses |
| `ccList` | `string` (optional) | Semicolon-separated CC addresses |
| `bccList` | `string` (optional) | Semicolon-separated BCC addresses |
| `subject` | `string` | Email subject |
| `body` | `string` | Email body (text or HTML) |

```js
services.EmailService.Send({
    from: 'alerts@company.com',
    toList: 'team@company.com;manager@company.com',
    ccList: 'archive@company.com',
    subject: 'Alert: High Error Rate',
    body: `Errors in last hour: ${errorCount}`
});
```

### Structured Addresses

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `object` | `{ Address, PersonalName }` |
| `to` | `object[]` | Array of `{ Address, PersonalName }` |
| `cc` | `object[]` (optional) | Array of `{ Address, PersonalName }` |
| `bcc` | `object[]` (optional) | Array of `{ Address, PersonalName }` |
| `subject` | `string` | Email subject |
| `body` | `string` | Email body |

```js
services.EmailService.Send({
    from: {
        Address: 'noreply@company.com',
        PersonalName: 'Order System'
    },
    to: [{
        Address: 'customer@example.com',
        PersonalName: 'John Doe'
    }],
    subject: 'Order #12345 Confirmed',
    body: 'Thank you for your order!'
});
```

---

## Complete Example

```js
export function onMessage() {
    const orderId = message.getString(dataDictionary.type.Order.ID);
    const customerEmail = message.getString(dataDictionary.type.Order.CUSTOMER_EMAIL);

    // Send confirmation
    services.EmailService.Send({
        from: 'orders@company.com',
        toList: customerEmail,
        subject: `Order ${orderId} Confirmed`,
        body: `Your order ${orderId} has been received and is being processed.`
    });

    stream.emit(message, OUTPUT_PORT);
}
```

---

## See Also

- [`EmailMessage`](../interfaces/EmailMessage.md) — Full message structure reference
- [`Service`](Service.md) — Service access patterns
