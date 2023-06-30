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
 if (error) {
     message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', valueString));
 }
```

## Enumeration Members

### ERROR

• **ERROR** = ``2``

#### Defined in

Enums/Severity.ts:16

___

### FATAL

• **FATAL** = ``3``

#### Defined in

Enums/Severity.ts:17

___

### INFO

• **INFO** = ``0``

#### Defined in

Enums/Severity.ts:14

___

### WARNING

• **WARNING** = ``1``

#### Defined in

Enums/Severity.ts:15
