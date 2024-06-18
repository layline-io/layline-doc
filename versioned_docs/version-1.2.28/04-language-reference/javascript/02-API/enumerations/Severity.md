# Enumeration: Severity

Enumeration for use of Severity levels in [Message](../classes/Message)

Example use:
```js
// Adding a severity status to a message:
 if (error) {
     message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', valueString));
 }
```

## Enumeration Members

### ERROR

> **ERROR**: `2`

***

### FATAL

> **FATAL**: `3`

***

### INFO

> **INFO**: `0`

***

### WARNING

> **WARNING**: `1`
