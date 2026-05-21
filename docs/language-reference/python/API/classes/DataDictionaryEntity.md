---
description: A `DataDictionaryEntity` represents a single node in your data dictionary hierarchy — either an intermediate structure (like a record type) or a leaf field. ...
---

---
id: py-DataDictionaryEntity
---

# DataDictionaryEntity

A `DataDictionaryEntity` represents a single node in your data dictionary hierarchy — either an intermediate structure (like a record type) or a leaf field. You use these entities as type-safe accessors when reading from or writing to [`Message`](Message.md) fields.

Think of it as a typed pointer: it tells the Message exactly which field to access and what type to expect.

---

## At a Glance

```python
# DataDictionaryEntity is the bridge between your dictionary and message data
name_field = dataDictionary.type.Customer.Detail.NAME

# Use it with Message methods
customer_name = message.getString(name_field)
message.setString(name_field, "Acme Corp")
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

```python
# Intermediate nodes (structures)
customer_type = dataDictionary.type.Customer           # Customer root
detail_type   = dataDictionary.type.Customer.Detail    # Detail record

# Leaf nodes (fields) — these are DataDictionaryEntity instances
first_name_field = dataDictionary.type.Customer.Detail.FIRST_NAME
email_field     = dataDictionary.type.Customer.Detail.EMAIL
```

---

## Working with Messages

### Reading Fields

```python
first_name = message.getString(dataDictionary.type.Customer.Detail.FIRST_NAME)
age       = message.getInt(dataDictionary.type.Customer.Detail.AGE)
```

### Writing Fields

```python
message.setString(dataDictionary.type.Customer.Detail.FIRST_NAME, "John")
message.setInt(dataDictionary.type.Customer.Detail.AGE, 42)
```

### Checking Existence

```python
# Check if a structure exists in the message
if message.exists(dataDictionary.type.Customer.Detail):
    # Detail record is present
    pass

# Check if a specific field exists
if message.exists(dataDictionary.type.Customer.Detail.EMAIL):
    email = message.getString(dataDictionary.type.Customer.Detail.EMAIL)
```

### Type Checking

```python
# Check if message matches a specific type
if message.isType(dataDictionary.type.Customer.Detail):
    # Process detail record
    pass
```

---

## See Also

- [`DataDictionary`](DataDictionary.md) — Navigate the full type hierarchy
- [`Message`](Message.md) — Read and write message data using DataDictionaryEntity accessors
- [`Message.getString()`](Message.md) — Get string values
- [`Message.exists()`](Message.md) — Check field existence
