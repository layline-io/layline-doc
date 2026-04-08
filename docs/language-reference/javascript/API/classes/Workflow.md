# Workflow

## What
A workflow is a collection of processors and connections that are used to process messages.
It is a high-level abstraction that represents a business process.

## How to use
You typically use the Workflow class to access the data dictionary for a workflow.

## Example

```ts
// Accessing the name of the workflow
const workflowName = workflow.getName();
print(workflowName);

// Accessing the data dictionary of the workflow
const dataDict = workflow.getDataDictionary();
print(dataDict);
```

## Properties

### dataDictionary

> **dataDictionary**: `any`

The data dictionary associated with this workflow.
This can contain various metadata and information about the workflow's structure and data processing.
Same as [getDataDictionary](#getdatadictionary).

#### Example

```ts
const dataDictionary = workflow.dataDictionary;
```

***

### name

> **name**: `string`

The name of the workflow.
Same as [getName](#getname).

#### Example

```ts
const workflowName = workflow.name;
```

## Methods

### getDataDictionary()

> **getDataDictionary**(): [`DataDictionaryEntity`](DataDictionaryEntity.md)

Retrieves the data dictionary entity associated with this workflow.
The data dictionary provides detailed information about the data used within the workflow.

#### Returns

[`DataDictionaryEntity`](DataDictionaryEntity.md)

The data dictionary entity for the workflow.

#### Example

```ts
const dataDictEntity = workflow.getDataDictionary();
```

***

### getName()

> **getName**(): `string`

Retrieves the name of the workflow.

#### Returns

`string`

The name of the workflow.

#### Example

```ts
const workflowName = workflow.getName();
print(workflowName); // Outputs the name of the workflow
```
