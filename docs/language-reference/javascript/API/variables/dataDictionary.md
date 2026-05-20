# dataDictionary

> `const` **dataDictionary**: [`DataDictionary`](../classes/DataDictionary.md)

Global instance providing access to your project's data dictionary structures. Use it to navigate types and create new messages.

---

## At a Glance

```js
// Navigate to a type
const detailType = dataDictionary.type.MyFormat.Detail;

// Create a message from a data dictionary structure
const newMessage = dataDictionary.createMessage(dataDictionary.type.MyCorp.MyStructure.Record);

// Populate and emit
newMessage.data.HEADER.RECORD_TYPE = 'HDR';
newMessage.data.HEADER.TIMESTAMP = DateTime.now();
stream.emit(newMessage, OUTPUT_PORT);
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
