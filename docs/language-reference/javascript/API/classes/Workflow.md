# Workflow

The `Workflow` class provides access to the current workflow's metadata — its name and data dictionary. It is available globally as `workflow` in every JavaScript processor.

---

## At a Glance

```js
// Log which workflow is processing this message
stream.logInfo(`Running in workflow: ${workflow.name}`);

// Access the workflow's data dictionary for type introspection
const dict = workflow.dataDictionary;
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`name`](#name) | `string` | The name of the current workflow |
| [`dataDictionary`](#datadictionary) | `any` | The data dictionary associated with this workflow |

### name

The workflow name as defined in the UI.

```js
const workflowName = workflow.name;
stream.logInfo(`Processing in workflow: ${workflowName}`);
```

### dataDictionary

Access to the workflow's data dictionary. Same as the global [`dataDictionary`](DataDictionary.md) variable in most cases.

```js
const dict = workflow.dataDictionary;
const types = Object.keys(dict.type);
stream.logInfo(`Available types: ${types.join(', ')}`);
```

---

## Methods

### getName()

Returns the workflow name.

**Returns:** `string`

```js
const name = workflow.getName();  // Same as workflow.name
```

### getDataDictionary()

Returns the data dictionary entity for this workflow.

**Returns:** [`DataDictionaryEntity`](DataDictionaryEntity.md)

```js
const dict = workflow.getDataDictionary();
```

---

## See Also

- [`DataDictionary`](DataDictionary.md) — Create messages and access types
- [`Processor`](Processor.md) — Access the current processor's properties
