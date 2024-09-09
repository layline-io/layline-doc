# Class: PackedMessage

A packed message represents an ordinary [Message](Message.md), but in a compressed format.
This is useful in case you need to retain a large number of messages in memory, and reduce memory overhead.

The only way to create a packed message is by invoking the '[Message.pack](./Message#pack)' method.

## Properties

### type

> **type**: DataDictionary

The type of the packed message.
This is a reference to the data dictionary that was used to pack the message.

#### Example

```python
# Pack message
packed_msg = message.pack()
type_ = packed_msg.type  # Returns the data dictionary used to pack the message

# Unpack message
unpacked_msg = packed_msg.unpack()
```

## Methods

### unpack()

> **unpack**() -> Message

Unpacks a previously packed message.

#### Returns

Message - Unpacked [Message](Message.md)

#### Example

```python
# Pack message
packed_msg = message.pack()

# Unpack message
unpacked_msg = packed_msg.unpack()
```

## Usage Notes

1. **Memory Efficiency**: Use PackedMessage when you need to store multiple messages in memory efficiently. The packed format reduces memory usage compared to full Message objects.

2. **Read-Only Access**: Once a message is packed, you cannot modify its contents directly. You need to unpack it first, make changes, and then pack it again if needed.

3. **Type Information**: The `type` property allows you to inspect the structure of the packed message without unpacking it, which can be useful for routing or filtering packed messages.

4. **Serialization**: PackedMessage objects are typically more suitable for serialization and transmission compared to full Message objects, due to their compressed nature.

5. **Performance Considerations**: While packing and unpacking introduce some overhead, the memory savings can be significant when dealing with large numbers of messages. Consider the trade-off between processing time and memory usage in your specific use case.

6. **Error Handling**: When unpacking a message, be prepared to handle potential errors, especially if the packed message might have been corrupted or if the data dictionary has changed since the message was packed.

Example of error handling:

```python
try:
    unpacked_msg = packed_msg.unpack()
except Exception as e:
    print(f"Error unpacking message: {e}")
    # Handle the error appropriately
```

Remember to refer to the latest layline.io documentation for the most up-to-date information on using PackedMessage in your Python scripts.
