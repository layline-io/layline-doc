# Class: OutputPort

Instance of an output port of a Processor.
This class represents the output port through which data is sent from a processor to another processor's input port.

## Properties

### name

> **name**: str

The name of this output port.
Same as [getName](#getname).

#### Example

```python
output_port_name = output_port.name  # Returns the name of the output port, e.g. 'My-Output-Port'.
```

### peerPortName

> **peerPortName**: str

The name of the peer port (input port of the connected processor) that this output port is connected to.

#### Example

```python
peer_port_name = output_port.peerPortName  # Returns the name of the peer port, e.g. 'My-Input-Port'.
```

### peerProcessorName

> **peerProcessorName**: str

The name of the processor to which this output port's peer port belongs.

#### Example

```python
connected_processor_name = output_port.peerProcessorName  # Returns the name of the processor to which the peer port belongs, e.g. 'My-Processor'.
```

## Methods

### getName()

> **getName**() -> str

Returns the name of this output port.

#### Returns

str - The name of the output port.

#### Example

```python
# Get the output port by name
output_port = processor.getOutputPort('My-Output-Port')

# Get the name of the output port
name = output_port.getName()  # Returns the name of the output port, e.g. 'My-Output-Port'.
```

### getPeerPort()

> **getPeerPort**() -> str

Returns the name of the peer port (input port of the connected processor) that this output port is connected to.

#### Returns

str - The name of the peer port.

#### Example

```python
# Get the output port by name
output_port = processor.getOutputPort('My-Output-Port')

# Get the name of the peer port
peer_port = output_port.getPeerPort()  # Returns the name of the peer port, e.g. 'My-Input-Port'.
```

### getPeerProcessorName()

> **getPeerProcessorName**() -> str

Returns the name of the processor that this output port is connected to.

#### Returns

str - The name of the processor to which this output port is connected.

#### Example

```python
# Get the output port by name
output_port = processor.getOutputPort('My-Output-Port')

# Now get the name of the processor that this output port is connected to
peer_processor_name = output_port.getPeerProcessorName()  # Returns the name of the connected processor, e.g. 'My-Processor'.
```

### getProcessorName()

> **getProcessorName**() -> str

Returns the name of the processor to which this output port belongs.

#### Returns

str - The name of the processor that owns this output port.

#### Example

```python
# Get the output port by name
output_port = processor.getOutputPort('My-Output-Port')

# Get the name of the processor that owns this output port
processor_name = output_port.getProcessorName()  # Returns the name of the processor, e.g. 'My-Processor'.
```
