---
description: >-
  > const stream: Stream(../classes/Stream.md).
---

# stream

> `const` **stream**: [`Stream`](../classes/Stream.md)

The current stream being processed. Controls message flow, logging, and lifecycle operations like retry and rollback.

---

## At a Glance

```js
export function onStreamStart() {
    stream.logInfo('Started: ' + stream.getName());
}

export function onMessage() {
    // Process and emit
    stream.emit(message, OUTPUT_PORT);
}

export function onStreamEnd() {
    stream.logInfo('Finished: ' + stream.getName());
}
```

---

## Common Tasks

| Task | Method |
|------|--------|
| Emit message | `stream.emit(message, port)` |
| Log info | `stream.logInfo(msg)` |
| Log warning | `stream.logWarning(msg)` |
| Log error | `stream.logError(msg)` |
| Get stream name | `stream.getName()` |
| Get stream ID | `stream.getId()` |
| Get metadata | `stream.getMetadata()` |
| Set output name | `stream.setOutputName(name)` |
| Set output path | `stream.setOutputPath(path)` |
| Request retry | `stream.requestRetry(status, delayMs)` |
| Request rollback | `stream.requestRollback(status)` |

---

## See Also

- [`Stream`](../classes/Stream.md) — Full class reference
