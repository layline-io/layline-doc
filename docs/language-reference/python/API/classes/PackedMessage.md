---
description: A memory-efficient compressed representation of a [`Message. Use `PackedMessage` when you need to retain many messages in memory (e.g., buffering, aggregatio...
---

---
id: py-PackedMessage
---

# PackedMessage

A memory-efficient compressed representation of a [`Message`](Message.md). Use `PackedMessage` when you need to retain many messages in memory (e.g., buffering, aggregation, or caching) and want to reduce memory overhead.

Create a `PackedMessage` by calling [`message.pack()`](Message.md#pack). Unpack it back to a full `Message` when you need to access or modify the data.

---

## At a Glance

```python
# Pack a message for efficient storage
packed = message.pack()

# Store in a buffer or cache
message_buffer.append(packed)

# Later: unpack and process
restored = packed.unpack()
stream.emit(restored, OUTPUT_PORT)
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `type` | [`DataDictionary`](DataDictionary.md) | Reference to the data dictionary used when packing |

```python
packed = message.pack()
stream.logInfo(f'Packed type: {packed.type}')
```

---

## Methods

### unpack()

Restores the packed message to a full [`Message`](Message.md) instance.

**Returns:** [`Message`](Message.md)

```python
packed = message.pack()
restored = packed.unpack()

# restored is a full Message with all methods available
restored.getString(dataDictionary.type.Order.ID)
restored.addStatus(Severity.INFO, Status.create(VENDOR, 'RESTORED'))
```

---

## When to Use

| Scenario | Approach |
|----------|----------|
| Buffering messages for batch processing | Pack to reduce memory |
| Caching messages in a queue service | Pack before storing |
| Aggregating many records before emitting | Pack intermediate results |
| Passing messages between processors | Use regular Message (no packing needed) |

---

## Complete Example

```python
buffer = []
BATCH_SIZE = 100

def on_message():
    # Pack and buffer
    buffer.append(message.pack())

    # When buffer is full, process batch
    if len(buffer) >= BATCH_SIZE:
        process_batch(buffer)
        buffer.clear()

def on_stream_end():
    # Process remaining messages
    if len(buffer) > 0:
        process_batch(buffer)

def process_batch(packed_messages):
    for packed in packed_messages:
        msg = packed.unpack()
        # Process...
        stream.emit(msg, OUTPUT_PORT)
```

---

## See Also

- [`Message#pack`](Message.md#pack) — Create a PackedMessage from a Message
- [`Message#clone`](Message.md#clone) — Alternative: create a full copy instead of packing
