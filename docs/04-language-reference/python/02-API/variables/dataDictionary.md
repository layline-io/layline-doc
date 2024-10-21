# Variable: dataDictionary

> **dataDictionary**: DataDictionary

## What
`dataDictionary` is an instance of the [DataDictionary](../classes/DataDictionary.md) class.
It is automatically created and made available in any Python script-based Processor within layline.io.
The `dataDictionary` provides access to the data dictionary structures defined in your Project and allows you to create messages based on these structures.

## Usage Notes

1. The `dataDictionary` variable is globally available in your Python scripts within layline.io, without need for import statements.
2. Use the `type` property to navigate through your data dictionary structure using dot notation.
3. The `createMessage` method returns a new `Message` object based on the specified data dictionary structure.
4. Python's dynamic typing allows for flexible interaction with the data dictionary structures.
5. Remember to use Python naming conventions (snake_case) for your variables when working with `dataDictionary`.
6. The `dataDictionary` object is read-only in Python scripts. You cannot modify the data dictionary structure through this object.

Remember that the exact structure accessible through `dataDictionary.type` depends on the data formats and structures you've defined in your layline.io Project. 
Always consult your Project's configuration to understand the available types and structures in Python context.

Please check the [DataDictionary](../classes/DataDictionary.md) documentation for more information on available methods and properties.

## Example

```python
def on_message():
    # Accessing a specific type in the data dictionary
    my_record_type = dataDictionary.type.MyFormat.Detail

    # Creating a new message based on a data dictionary structure
    new_message = dataDictionary.createMessage(dataDictionary.type.MyCorp.MyStructure.MySubstructure.Record)

    # Setting values on the new message
    new_message.data.MyFormat.Header.RECORD_TYPE = "HDR"
    new_message.data.MyFormat.Header.TIMESTAMP = datetime.now()

    # Emitting the new message
    stream.emit(new_message, OUTPUT_PORT)
```
