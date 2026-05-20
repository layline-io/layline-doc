---
id: py-processor
---

# processor

> `const` **processor**: [`Processor`](../classes/Processor.md)

The current processor instance. Provides access to ports, arguments, logging, and processor-specific configuration.

---

## At a Glance

```python
def on_init():
    # Resolve output port once at init
    global OUTPUT_PORT
    OUTPUT_PORT = processor.getOutputPort('Output')

def on_message():
    # Log with processor context
    processor.logInfo(f'Processing message {message.id}')

    # Access custom arguments
    args = processor.getArguments()
    timeout = args.get('timeoutMs', 5000)

    # Expand environment variables in strings
    path = processor.expandString('${lay:DATA_DIR}/input.csv')
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
