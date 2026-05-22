---
description: >-
  > const processor: Processor(../classes/Processor.md).
---

# processor

> `const` **processor**: [`Processor`](../classes/Processor.md)

The current processor instance. Provides access to ports, arguments, logging, and processor-specific configuration.

---

## At a Glance

```js
export function onInit() {
    // Resolve output port once at init
    OUTPUT_PORT = processor.getOutputPort('Output');
}

export function onMessage() {
    // Log with processor context
    processor.logInfo('Processing message ' + message.id);

    // Access custom arguments
    const args = processor.getArguments();
    const timeout = args.timeoutMs || 5000;

    // Expand environment variables in strings
    const path = processor.expandString('${lay:DATA_DIR}/input.csv');
}
```

---

## Common Tasks

| Task | Method |
|------|--------|
| Get output port | `processor.getOutputPort(name)` |
| Get input port | `processor.getInputPort(name)` |
| Read arguments | `processor.getArguments()` |
| Expand variables | `processor.expandString(template)` |
| Log info | `processor.logInfo(msg)` |
| Log warning | `processor.logWarning(msg)` |
| Log error | `processor.logError(msg)` |

---

## See Also

- [`Processor`](../classes/Processor.md) — Full class reference
