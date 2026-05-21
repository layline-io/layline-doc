---
description: >-
  ---.
---

---
id: py-workflow
---

# workflow

> `const` **workflow**: [`Workflow`](../classes/Workflow.md)

The current workflow instance. Provides access to workflow-level metadata and the data dictionary.

---

## At a Glance

```python
def on_init():
    workflow_name = workflow.getName()
    stream.logInfo(f'Running in workflow: {workflow_name}')

def on_message():
    # Attach workflow info to message
    message.data.WORKFLOW_NAME = workflow.getName()
    stream.emit(message, OUTPUT_PORT)
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
