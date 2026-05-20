---
id: py-dataDictionary
---

# dataDictionary

> `const` **dataDictionary**: [`DataDictionary`](../classes/DataDictionary.md)

Global instance providing access to your project's data dictionary structures. Use it to navigate types and create new messages.

---

## At a Glance

```python
# Navigate to a type
detail_type = dataDictionary.type.MyFormat.Detail

# Create a message from a data dictionary structure
new_message = dataDictionary.createMessage(dataDictionary.type.MyCorp.MyStructure.Record)

# Populate and emit
new_message.data.HEADER.RECORD_TYPE = 'HDR'
new_message.data.HEADER.TIMESTAMP = datetime.now()
stream.emit(new_message, OUTPUT_PORT)
```

---

## Key Points

| | |
|---|---|
| **Scope** | Globally available in all script-based processors |
| **Read-only** | The structure itself cannot be modified at runtime |
| **Dynamic** | `dataDictionary.type.*` reflects your project's specific configuration |

---

## See Also

- [`DataDictionary`](../classes/DataDictionary.md) — Full class reference
- [`Message`](../classes/Message.md) — Working with messages
