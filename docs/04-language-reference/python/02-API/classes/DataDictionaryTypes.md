# DataDictionaryTypes

Represents the dynamically generated structure of a data dictionary based on the specific configuration.

This class provides access to the root elements of the data dictionary, which are
generated at runtime based on the individual setup. It allows for navigation through
the hierarchical structure of the data dictionary using attribute access.

The actual attributes available on this class depend entirely on the specific
configuration of the data dictionary in the layline.io project and are not known
at runtime.

## Examples

Accessing elements of the data dictionary:

```python
some_detail = data_dictionary.type.SomeNamespace.Detail
some_field = data_dictionary.type.AnotherNamespace.Header.SomeField
```

Using in a message processing context:

```python
if message.is(data_dictionary.type.SomeNamespace.SomeMessageType):
    # Process specific message type
    pass
```

## Notes

- This class uses Python's dynamic attribute access, allowing for flexible navigation of the data dictionary structure.
- The exact structure and available attributes are determined by the layline.io project configuration.
- Attempts to access non-existent attributes may raise an error.

## Dynamic Attribute Access

All attributes of this class are dynamically generated based on the project configuration. These can represent namespaces, sequences, or other types of declarations within the data dictionary.

```python
# Example of dynamic attribute access
namespace_attribute = data_dictionary.type.SomeNamespace
detail_attribute = data_dictionary.type.SomeNamespace.Detail
```

## See Also

- [DataDictionary](DataDictionary.md) for the parent class containing this type information.
- [Message](Message.md) for information on how to use DataDictionaryTypes in message processing.
