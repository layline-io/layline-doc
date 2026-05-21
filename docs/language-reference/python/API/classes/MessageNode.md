---
description: Individual node of a [`Message.
---

---
id: py-MessageNode
---

# MessageNode

Individual node of a [`Message`](Message.md).

## At a Glance

```python
csv: MessageNode = message.data.CSV
record_type: MessageNode = message.data.CSV.RECORD_TYPE

if message.data.CSV.RECORD_TYPE == "CUSTOMER":
    ...
```

## Description

A `MessageNode` represents a nested element within a [`Message`](Message.md) data structure. You access nodes using dot notation, similar to Python object attributes. Each dot traversal returns another `MessageNode`, allowing deep navigation into hierarchical message data.

`MessageNode` is commonly used with [`Message`](Message.md) methods such as `findStatus()` to inspect or traverse message contents.
