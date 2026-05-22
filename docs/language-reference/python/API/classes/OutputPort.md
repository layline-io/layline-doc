---
description: An `OutputPort` represents a connection from one processor to another within a workflow. You obtain output ports through `processor.getOutputPort(), then use...
---

---
id: py-OutputPort
---

# OutputPort

An `OutputPort` represents a connection from one processor to another within a workflow. You obtain output ports through [`processor.getOutputPort()`](Processor.md), then use them with [`stream.emit()`](Stream.md) to send messages downstream.

---

## At a Glance

```python
# Get an output port by name (typically done in on_init)
OUTPUT_PORT = processor.getOutputPort('Output')

# Emit a message to it
stream.emit(message, OUTPUT_PORT)
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`name`](#name) | `str` | The name of this output port |
| [`peerPortName`](#peerportname) | `str` | The name of the connected input port on the downstream processor |
| [`peerProcessorName`](#peerprocessorname) | `str` | The name of the downstream processor |

### name

The output port name as defined in the workflow diagram.

```python
port_name = output_port.name  # e.g., "Output", "Error", "Valid"
```

### peerPortName

The name of the input port on the connected downstream processor.

```python
connected_to = output_port.peerPortName  # e.g., "Input"
```

### peerProcessorName

The name of the processor this port connects to.

```python
next_processor = output_port.peerProcessorName  # e.g., "Transform-Data"
```

---

## Methods

### getName()

Returns the output port name. Same as [`name`](#name).

**Returns:** `str`

```python
name = output_port.getName()
```

### getPeerPort()

Returns the name of the connected peer input port. Same as [`peerPortName`](#peerportname).

**Returns:** `str`

```python
peer = output_port.getPeerPort()
```

### getPeerProcessorName()

Returns the name of the downstream processor. Same as [`peerProcessorName`](#peerprocessorname).

**Returns:** `str`

```python
processor_name = output_port.getPeerProcessorName()
```

### getProcessorName()

Returns the name of the processor that owns this output port (the current processor).

**Returns:** `str`

```python
my_name = output_port.getProcessorName()
```

---

## Complete Example

```python
# Initialize ports in on_init
OUTPUT_PORT = None
ERROR_PORT = None

def on_init():
    global OUTPUT_PORT, ERROR_PORT
    OUTPUT_PORT = processor.getOutputPort('Output')
    ERROR_PORT = processor.getOutputPort('Error')

def on_message():
    # Route based on validation
    if message.hasStatusAttached(Severity.ERROR):
        stream.emit(message, ERROR_PORT)
    else:
        stream.emit(message, OUTPUT_PORT)
```

---

## See Also

- [`Processor#getOutputPort`](Processor.md) — Obtain output ports by name
- [`Stream#emit`](Stream.md) — Send messages through output ports
