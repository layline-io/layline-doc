---
description: >-
  ---.
---

---
id: py-message
---

# message

> `const` **message**: [`Message`](../classes/Message.md)

The current message being processed. Automatically available in every Python processor — no import needed.

---

## At a Glance

```python
def on_message():
    # Read fields
    name = message.getString(dataDictionary.type.Order.NAME)

    # Write fields
    message.setString(dataDictionary.type.Order.STATUS, 'processed')

    # Forward to next processor
    stream.emit(message, OUTPUT_PORT)
```

---

## See Also

- [`Message`](../classes/Message.md) — Full class reference with all methods and properties
