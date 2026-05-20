# DataDictionary

The `DataDictionary` provides access to all data structures defined in your layline.io project — message types, record formats, and field definitions. It is available globally as `dataDictionary` in every JavaScript processor.

Use it to create new messages, navigate type hierarchies, and access field metadata.

---

## At a Glance

```js
// Navigate to a specific type
const detailType = dataDictionary.type.MyFormat.Detail;

// Create a new message from that type
const newMessage = dataDictionary.createMessage(detailType);

// Populate and emit
newMessage.data.RECORD_TYPE = "D";
stream.emit(newMessage, OUTPUT_PORT);
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`type`](#type) | [`DataDictionaryTypes`](../interfaces/DataDictionaryTypes.md) | Access all data dictionary types defined in your project |

### type

Navigate your data dictionary hierarchy through this property. The structure mirrors your project's format and data dictionary definitions.

```js
// Access a specific record type
const headerType = dataDictionary.type.MyFormat.Header;
const detailType = dataDictionary.type.MyFormat.Detail;

// Access nested fields (returns DataDictionaryEntity for use with Message methods)
const recordTypeField = dataDictionary.type.MyFormat.Detail.RECORD_TYPE;
const nameField       = dataDictionary.type.MyFormat.Detail.NAME;

// Use with Message getters/setters
const name = message.getString(nameField);
```

---

## Methods

### createMessage(entity)

Creates a new [`Message`](Message.md) from a data dictionary structure. Use this when you need to construct messages for splitting, aggregation, or transformation.

| Parameter | Type | Description |
|-----------|------|-------------|
| `entity` | [`DataDictionaryEntity`](DataDictionaryEntity.md) | The data dictionary path to the structure you want to instantiate |

**Returns:** [`Message`](Message.md)

```js
// Create a message from a specific type
const header = dataDictionary.createMessage(dataDictionary.type.MyFormat.Header);

// Populate fields
header.data.RECORD_TYPE = "HDR";
header.data.TIMESTAMP   = new Date();

// Emit
stream.emit(header, OUTPUT_PORT);
```

---

## See Also

- [`DataDictionaryEntity`](DataDictionaryEntity.md) — Individual nodes in the dictionary hierarchy
- [`Message`](Message.md) — The messages you create and manipulate
