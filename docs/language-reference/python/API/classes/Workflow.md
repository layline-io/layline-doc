---
id: py-Workflow
---

# Workflow

The `Workflow` class provides access to the current workflow's metadata — its name and data dictionary. It is available globally as `workflow` in every Python processor.

---

## At a Glance

```python
# Log which workflow is processing this message
stream.log_info(f"Running in workflow: {workflow.name}")

# Access the workflow's data dictionary for type introspection
dict_entity = workflow.dataDictionary
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | `str` | The name of the current workflow |
| `dataDictionary` | `Any` | The data dictionary associated with this workflow |

### name

The workflow name as defined in the UI.

```python
workflow_name = workflow.name
stream.log_info(f"Processing in workflow: {workflow_name}")
```

### dataDictionary

Access to the workflow's data dictionary. Same as the global `dataDictionary` variable in most cases.

```python
dict_entity = workflow.dataDictionary
```

---

## Methods

### getName()

Returns the workflow name.

**Returns:** `str`

```python
name = workflow.getName()  # Same as workflow.name
```

### getDataDictionary()

Returns the data dictionary entity for this workflow.

**Returns:** [`DataDictionaryEntity`](DataDictionaryEntity.md)

```python
dict_entity = workflow.getDataDictionary()
```

---

## See Also

- [`DataDictionary`](DataDictionary.md) — Create messages and access types
- [`Processor`](Processor.md) — Access the current processor's properties
