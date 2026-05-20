# DataDictionaryEntity

A `DataDictionaryEntity` represents a single node in your data dictionary hierarchy — either an intermediate structure (like a record type) or a leaf field. You use these entities as type-safe accessors when reading from or writing to [`Message`](Message.md) fields.

Think of it as a typed pointer: it tells the Message exactly which field to access and what type to expect.

---

## At a Glance

```js
// DataDictionaryEntity is the bridge between your dictionary and message data
const nameField = dataDictionary.type.Customer.Detail.NAME;

// Use it with Message methods
const customerName = message.getString(nameField);
message.setString(nameField, "Acme Corp");
```

---

## Understanding the Hierarchy

Given a data dictionary structure like:

```
Customer
├── Header
│   ├── RECORD_TYPE
│   └── TIMESTAMP
└── Detail
    ├── RECORD_TYPE
    ├── FIRST_NAME
    ├── LAST_NAME
    └── EMAIL
```

You navigate it through `dataDictionary.type`:

```js
// Intermediate nodes (structures)
const customerType = dataDictionary.type.Customer;           // Customer root
const detailType   = dataDictionary.type.Customer.Detail;    // Detail record

// Leaf nodes (fields) — these are DataDictionaryEntity instances
const firstNameField = dataDictionary.type.Customer.Detail.FIRST_NAME;
const emailField     = dataDictionary.type.Customer.Detail.EMAIL;
```

---

## Working with Messages

### Reading Fields

```js
const firstName = message.getString(dataDictionary.type.Customer.Detail.FIRST_NAME);
const age       = message.getInt(dataDictionary.type.Customer.Detail.AGE);
```

### Writing Fields

```js
message.setString(dataDictionary.type.Customer.Detail.FIRST_NAME, "John");
message.setInt(dataDictionary.type.Customer.Detail.AGE, 42);
```

### Checking Existence

```js
// Check if a structure exists in the message
if (message.exists(dataDictionary.type.Customer.Detail)) {
    // Detail record is present
}

// Check if a specific field exists
if (message.exists(dataDictionary.type.Customer.Detail.EMAIL)) {
    const email = message.getString(dataDictionary.type.Customer.Detail.EMAIL);
}
```

### Type Checking

```js
// Check if message matches a specific type
if (message.is(dataDictionary.type.Customer.Detail)) {
    // Process detail record
}
```

---

## See Also

- [`DataDictionary`](DataDictionary.md) — Navigate the full type hierarchy
- [`Message`](Message.md) — Read and write message data using DataDictionaryEntity accessors
- [`Message#getString`](Message.md) — Get string values
- [`Message#exists`](Message.md) — Check field existence
