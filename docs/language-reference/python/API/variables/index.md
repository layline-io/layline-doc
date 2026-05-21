---
description: Python global variable reference for layline.io — workflow, processor, stream, message, metrics, and more.
---

# Global Variables

Instantly accessible objects available in every Python processor environment — no import needed.

---

| Variable | Type | Description |
|----------|------|-------------|
| [dataDictionary](dataDictionary.md) | [`DataDictionary`](../classes/DataDictionary.md) | Global instance providing access to your project's data dictionary structures. Use it to navigate types and create new messages. |
| [message](message.md) | [`Message`](../classes/Message.md) | The current message being processed. Automatically available in every Python processor. |
| [metrics](metrics.md) | [`Metrics`](../classes/Metrics.md) | Global metrics instance for tracking counters and other metrics across your deployment. |
| [processor](processor.md) | [`Processor`](../classes/Processor.md) | The current processor instance. Provides access to ports, arguments, logging, and processor-specific configuration. |
| [statusRegistry](statusRegistry.md) | [`StatusRegistry`](../classes/StatusRegistry.md) | Global registry of all defined status vendors and codes for the current project. Includes the built-in "LAY" vendor plus any custom vendors. |
| [stream](stream.md) | [`Stream`](../classes/Stream.md) | The current stream being processed. Controls message flow, logging, and lifecycle operations like retry and rollback. |
| [workflow](workflow.md) | [`Workflow`](../classes/Workflow.md) | The current workflow instance. Provides access to workflow-level metadata and the data dictionary. |
