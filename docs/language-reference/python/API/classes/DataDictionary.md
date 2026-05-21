---
description: 'DataDictionary provides access to all data structures defined in your layline.io project — message types, record formats, and field definitions. It is avai...'
---

---
id: py-DataDictionary
---

# DataDictionary

The `DataDictionary` provides access to all data structures defined in your layline.io project — message types, record formats, and field definitions. It is available globally as `dataDictionary` in every Python processor.

Use it to create new messages, navigate type hierarchies, and access field metadata.

---

## At a Glance

```python
# Navigate to a specific type
detail_type = dataDictionary.type.MyFormat.Detail

# Create a new message from that type
new_message = dataDictionary.createMessage(detail_type)

# Populate and emit
new_message.data.RECORD_TYPE = "D"
stream.emit(new_message, OUTPUT_PORT)
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`type`](#type) | [`DataDictionaryTypes`](DataDictionaryTypes.md) | Access all data dictionary types defined in your project |

### type

Navigate your data dictionary hierarchy through this property. The structure mirrors your project's format and data dictionary definitions.

```python
# Access a specific record type
header_type = dataDictionary.type.MyFormat.Header
detail_type = dataDictionary.type.MyFormat.Detail

# Access nested fields (returns DataDictionaryEntity for use with Message methods)
record_type_field = dataDictionary.type.MyFormat.Detail.RECORD_TYPE
name_field       = dataDictionary.type.MyFormat.Detail.NAME

# Use with Message getters/setters
name = message.getString(name_field)
```

---

## Methods

### createMessage(entity)

Creates a new [`Message`](Message.md) from a data dictionary structure. Use this when you need to construct messages for splitting, aggregation, or transformation.

| Parameter | Type | Description |
|-----------|------|-------------|
| `entity` | [`DataDictionaryEntity`](DataDictionaryEntity.md) | The data dictionary path to the structure you want to instantiate |

**Returns:** [`Message`](Message.md)

```python
# Create a message from a specific type
header = dataDictionary.createMessage(dataDictionary.type.MyFormat.Header)

# Populate fields
header.data.RECORD_TYPE = "HDR"
header.data.TIMESTAMP   = DateTime.now()

# Emit
stream.emit(header, OUTPUT_PORT)
```

---

## See Also

- [`DataDictionaryEntity`](DataDictionaryEntity.md) — Individual nodes in the dictionary hierarchy
- [`Message`](Message.md) — The messages you create and manipulate
