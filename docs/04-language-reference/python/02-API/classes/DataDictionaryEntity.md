# Class: DataDictionaryEntity

Represents an individual node in a [Message](Message.md)'s data structure.

The DataDictionaryEntity class corresponds to a specific element within the hierarchical
structure of a message's data dictionary. It can represent both intermediate nodes
(like a record type) and leaf nodes (like individual fields).

## Description

Assuming we have a data dictionary structure:
```
CSV
 ├── RECORD_TYPE
 ├── FIRST_NAME
 ├── LAST_NAME
 └── ...
```
Then:
- `message.data.CSV` is a DataDictionaryEntity
- `message.data.CSV.RECORD_TYPE` is also a DataDictionaryEntity

## Examples

### Accessing a DataDictionaryEntity

```python
# Accessing a DataDictionaryEntity
csv_entity = message.data.CSV
record_type_entity = message.data.CSV.RECORD_TYPE

# Using DataDictionaryEntity with Message methods
record_type = message.getString(record_type_entity)
print(f"Record Type: {record_type}")
```

### Using DataDictionaryEntity to check field existence and access values

```python
# Using DataDictionaryEntity to check field existence and access values
if message.exists(message.data.CSV.LAST_NAME):
    last_name = message.getString(message.data.CSV.LAST_NAME)
    print(f"Last Name: {last_name}")
else:
    print("Last Name field does not exist in this message")
```

## Notes

- In Python, attribute access is used to navigate the data dictionary structure (e.g., `message.data.CSV.LAST_NAME`).
- The `exists()` method is used to check for the presence of a field in the message.
- Methods like `getString()` are used to retrieve values from the message using DataDictionaryEntity as a reference.

## See Also

- [Message](Message.md) for more information on how DataDictionaryEntity is used in message processing.
- [Message.exists()](Message.md#exists) for checking the existence of a field in a message.
- [Message.getString()](Message.md#getstring) for retrieving string values using DataDictionaryEntity.
