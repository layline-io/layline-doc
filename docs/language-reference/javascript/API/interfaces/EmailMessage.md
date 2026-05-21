---
description: Email structure used with [`Email.
---

# EmailMessage

Email structure used with [`Email`](../classes/Email.md).

---

## At a Glance

```js
Email.send({
    From: [{ Address: 'sender@example.com', PersonalName: 'Sender Name' }],
    To:   [{ Address: 'recipient@example.com', PersonalName: 'Recipient Name' }],
    Subject: 'Hello from layline.io',
    Body: 'This is the email body.'
});
```

---

## Properties

### To / Cc / Bcc

Array of recipient objects, each with `Address` and `PersonalName`.

| Property | Type | Description |
|----------|------|-------------|
| `Address` | `string` | Email address |
| `PersonalName` | `string` | Display name |

```js
To: [
    { Address: 'alice@example.com', PersonalName: 'Alice' },
    { Address: 'bob@example.com',   PersonalName: 'Bob' }
]
```

### ToList / CcList / BccList

Comma or semicolon separated string of email addresses. Use as a shortcut when you don't need display names.

```js
ToList: 'alice@example.com; bob@example.com'
```

### From

Array of sender objects with the same structure as `To`.

```js
From: [{ Address: 'noreply@example.com', PersonalName: 'System' }]
```

### Subject

`string` — The email subject line.

### Body

`string` — The email body content.
