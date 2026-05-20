# DataDictionaryTypes

Dynamically generated structure of a data dictionary. The available properties depend entirely on your project's data dictionary configuration and are resolved at runtime.

---

## At a Glance

```js
// Access message types via dot notation
const detailType = dataDictionary.type.SomeNamespace.Detail;
const field      = dataDictionary.type.AnotherNamespace.Header.SomeField;

// Use with Message methods
if (message.is(dataDictionary.type.SomeNamespace.SomeMessageType)) {
    // Process specific message type
}
```

---

## Indexable

\[`key`: `string`\]: `any`

Allows dynamic property access based on your data dictionary configuration — namespaces, sequences, message types, and fields.
