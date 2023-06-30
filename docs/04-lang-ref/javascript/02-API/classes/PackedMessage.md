---
id: "PackedMessage"
title: "Class: PackedMessage"
sidebar_label: "PackedMessage"
sidebar_position: 0
custom_edit_url: null
---

A packed message represents an ordinary [Message](Message.md), but in a compressed format.
This is useful in case you need to retain a large number or messages in memory, and reduce memory overhead.

The only way to create a packed message is by invoking the '[Message.pack](./Message#pack)' method.

## Constructors

### constructor

• **new PackedMessage**()

## Methods

### unpack

▸ **unpack**(): [`Message`](Message.md)

Unpacks a previously packed message.

```js
// Pack message
const packedMsg = message.pack();

// Unpack message
const unpackedMsg = packedMsg.unpack();
```

#### Returns

[`Message`](Message.md)

Unpacked [Message](Message.md)
