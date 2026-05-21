---
description: >-
  > const workflow: Workflow(../classes/Workflow.md).
---

# workflow

> `const` **workflow**: [`Workflow`](../classes/Workflow.md)

The current workflow instance. Provides access to workflow-level metadata and the data dictionary.

---

## At a Glance

```js
export function onInit() {
    const workflowName = workflow.getName();
    stream.logInfo('Running in workflow: ' + workflowName);
}

export function onMessage() {
    // Attach workflow info to message
    message.data.WORKFLOW_NAME = workflow.getName();
    stream.emit(message, OUTPUT_PORT);
}
```

---

## Common Tasks

| Task | Method |
|------|--------|
| Get workflow name | `workflow.getName()` |
| Get data dictionary | `workflow.getDataDictionary()` |

---

## See Also

- [`Workflow`](../classes/Workflow.md) — Full class reference
- [`dataDictionary`](dataDictionary.md) — Direct access to the data dictionary
