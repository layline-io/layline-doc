# Class: DataDictionary

The DataDictionary class provides access to the data dictionary structures defined in your layline.io Project.
It allows you to create messages based on these structures and access type definitions.

## Usage Notes

1. The DataDictionary is automatically available in your scripts as the `dataDictionary` object.
2. Use the `type` property to navigate through your data dictionary structure.
3. The `createMessage` method is useful when you need to create new messages based on your defined structures, for example when splitting or aggregating messages.

Remember to refer to your Project's specific data dictionary structure when using these methods and properties.

## Properties

### type

> **type**: str

The type of the data dictionary.
Provides access to all data dictionary types defined in your Project.

#### Example

```python
# Accessing a specific type in the data dictionary
my_record_type = dataDictionary.type.MyFormat.Detail
```

## Methods

### createMessage()

> **createMessage**(entity: DataDictionaryEntity) -> Message

Creates a message from a data dictionary access path.

All configured data formats and data dictionary structures which you have configured in your Project are compiled into one
coherent overarching data dictionary.

With this method you can create a message from such a data dictionary structure by providing the access path to the structure which you intend to create.

#### Parameters

- **entity**: DataDictionaryEntity

  DataDictionaryEntity. The data dictionary access path to the structure you want to create a message from.

#### Returns

Message - A new Message instance created from the data dictionary structure

#### Example

```python
# Create a message based on a specific data dictionary structure
new_message = dataDictionary.createMessage(dataDictionary.type.MyCorp.MyStructure.MySubstructure.Record)

# You can then set values on this message
new_message.data.MyFormat.Header.RECORD_TYPE = "HDR"
new_message.data.MyFormat.Header.TIMESTAMP = DateTime.now()

# Emit the message to an output port
stream.emit(new_message, OUTPUT_PORT)
```
