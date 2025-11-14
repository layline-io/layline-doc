# Workflow

## What
A workflow is a collection of processors and connections that are used to process messages.
It is a high-level abstraction that represents a business process.

## How to use
You typically use the Workflow class to access the data dictionary for a workflow.

## Example

```python
# Accessing the name of the workflow
workflow_name = workflow.getName()
print(workflow_name)

# Accessing the data dictionary of the workflow
data_dict = workflow.getDataDictionary()
print(data_dict)
```

## Properties

### dataDictionary

> **dataDictionary**: Any

The data dictionary associated with this workflow.
This can contain various metadata and information about the workflow's structure and data processing.
Same as [getDataDictionary](#getdatadictionary).

#### Example

```python
data_dictionary = workflow.dataDictionary
```

### name

> **name**: str

The name of the workflow.
Same as [getName](#getname).

#### Example

```python
workflow_name = workflow.name
```

## Methods

### getDataDictionary()

> **getDataDictionary**() -> DataDictionaryEntity

Retrieves the data dictionary entity associated with this workflow.
The data dictionary provides detailed information about the data used within the workflow.

#### Returns

DataDictionaryEntity - The data dictionary entity for the workflow.

#### Example

```python
data_dict_entity = workflow.getDataDictionary()
```

### getName()

> **getName**() -> str

Retrieves the name of the workflow.

#### Returns

str - The name of the workflow.

#### Example

```python
workflow_name = workflow.getName()
print(workflow_name)  # Outputs the name of the workflow
```
