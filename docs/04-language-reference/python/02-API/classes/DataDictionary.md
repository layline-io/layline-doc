# Class: DataDictionary

## Methods

### createMessage()

> **createMessage**(`entity`): [`Message`](Message.md)

Creates a message from a data dictionary access path.

All configured data formats and data dictionary structures which you have configured in your Project are compiled into one
coherent overarching data dictionary.

With this method you can create a message from such a data dictionary structure by providing the access path to the structure which you intend to create.

```python
let message = dataDictionary.createMessage(dataDictionary.type.MyCorp.MyStructure.MySubstructure.Record);
```

#### Parameters

• **entity**: [`EntityDeclaration`](EntityDeclaration.md)

Data dictionary access path

#### Returns

[`Message`](Message.md)

Message created from the data dictionary structure
