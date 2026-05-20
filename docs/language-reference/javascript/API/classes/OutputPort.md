# OutputPort

An `OutputPort` represents a connection from one processor to another within a workflow. You obtain output ports through [`processor.getOutputPort()`](Processor.md), then use them with [`stream.emit()`](Stream.md) to send messages downstream.

---

## At a Glance

```js
// Get an output port by name (typically done in onInit)
const OUTPUT_PORT = processor.getOutputPort('Output');

// Emit a message to it
stream.emit(message, OUTPUT_PORT);
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`name`](#name) | `string` | The name of this output port |
| [`peerPortName`](#peerportname) | `string` | The name of the connected input port on the downstream processor |
| [`peerProcessorName`](#peerprocessorname) | `string` | The name of the downstream processor |

### name

The output port name as defined in the workflow diagram.

```js
const portName = outputPort.name;  // e.g., "Output", "Error", "Valid"
```

### peerPortName

The name of the input port on the connected downstream processor.

```js
const connectedTo = outputPort.peerPortName;  // e.g., "Input"
```

### peerProcessorName

The name of the processor this port connects to.

```js
const nextProcessor = outputPort.peerProcessorName;  // e.g., "Transform-Data"
```

---

## Methods

### getName()

Returns the output port name. Same as [`name`](#name).

**Returns:** `string`

```js
const name = outputPort.getName();
```

### getPeerPort()

Returns the name of the connected peer input port. Same as [`peerPortName`](#peerportname).

**Returns:** `string`

```js
const peer = outputPort.getPeerPort();
```

### getPeerProcessorName()

Returns the name of the downstream processor. Same as [`peerProcessorName`](#peerprocessorname).

**Returns:** `string`

```js
const processorName = outputPort.getPeerProcessorName();
```

### getProcessorName()

Returns the name of the processor that owns this output port (the current processor).

**Returns:** `string`

```js
const myName = outputPort.getProcessorName();
```

---

## Complete Example

```js
// Initialize ports in onInit
let OUTPUT_PORT;
let ERROR_PORT;

export function onInit() {
    OUTPUT_PORT = processor.getOutputPort('Output');
    ERROR_PORT  = processor.getOutputPort('Error');
}

export function onMessage() {
    // Route based on validation
    if (message.hasStatusAttached(Severity.ERROR)) {
        stream.emit(message, ERROR_PORT);
    } else {
        stream.emit(message, OUTPUT_PORT);
    }
}
```

---

## See Also

- [`Processor#getOutputPort`](Processor.md) — Obtain output ports by name
- [`Stream#emit`](Stream.md) — Send messages through output ports
