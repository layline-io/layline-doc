---
id: "Severity"
title: "Enumeration: Severity"
sidebar_label: "Severity"
sidebar_position: 0
custom_edit_url: null
---

Enumeration for use of Severity levels in [Message](../Classes/Message)

Example use:
```js
// Adding a severity status to a message:
 if (error) {
     message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', valueString));
 }
```

## Enumeration Members

### ERROR

• **ERROR** = ``2``

___

### FATAL

• **FATAL** = ``3``

___

### INFO

• **INFO** = ``0``

___

### WARNING

• **WARNING** = ``1``
