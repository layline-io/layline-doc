# Email

Abstract class which defines a Email Service.
This service must have been acquired via using the `services` keyword within a Javascript Asset script.

**NOTE:** Only the Email Service is supports this class.
Please refer to the documentation of the respective Service Asset to understand how to use it within Javascript.

## Abstract

## Methods

### Send()

> **Send**(`message`): `void`

Sends an email.

```js
// EmailService is the name which was assigned to the Email Service Asset in the Javascript Asset Configuration.

// Example #1:
 services.EmailService.Send({
     From: {
         Address: "john.doe@example.com",
         PersonalName: "John Doe"
     },
     To: [{
         Address: "jane.doe@example.com",
         PersonalName: "Jane Doe"
     }],
     Cc: [{
         Address: "cc@example.com",
         PersonalName: "CC"
     }],
     Subject: "Hello",
     Body: "Hello, world!"
 });

// Example #2:
 services.EmailService.Send({
     From: "john.doe@example.com",
     ToList: "jane.doe@example.com;kate.doe@example.com",
     CcList: "cc@example.com",
     BccList: "bcc@example.com",
     Subject: "Hello",
     Body: "Hello, world!"
 });
     }],
     Subject: "Hello",
     Body: "Hello, world!"
 });
```

You can mix the use of `to` and `ccList` for example. Do not use similar properties like `to` and `toList` at the same time, for example, however.

#### Parameters

• **message**: [`EmailMessage`](../interfaces/EmailMessage.md)

The email message to send.

#### Returns

`void`

Nothing
