# OutputPort

Instance of an output port of a Processor.
This class represents the output port through which data is sent from a processor to another processor's input port.

## Properties

### name

> **name**: `string`

The name of this output port.
Same as [getName](#getname).

#### Example

```ts
const outputPortName = outputPort.name; // Returns the name of the output port, e.g. 'My-Output-Port'.
```

***

### peerPortName

> **peerPortName**: `string`

The name of the peer port (input port of the connected processor) that this output port is connected to.

#### Example

```ts
const peerPortName = outputPort.peerPortName; // Returns the name of the peer port, e.g. 'My-Input-Port'.
```

***

### peerProcessorName

> **peerProcessorName**: `string`

The name of the processor to which this output port's peer port belongs.

#### Example

```ts
const connectedProcessorName = outputPort.peerProcessorName; // Returns the name of the processor to which the peer port belongs, e.g. 'My-Processor'.
```

## Methods

### getName()

> **getName**(): `string`

Returns the name of this output port.

#### Returns

`string`

The name of the output port.

#### Example

```ts
// Get the output port by name
const outputPort = processor.getOutputPort('My-Output-Port');

// Get the name of the output port
const name = outputPort.getName(); // Returns the name of the output port, e.g. 'My-Output-Port'.
```

***

### getPeerPort()

> **getPeerPort**(): `string`

Returns the name of the peer port (input port of the connected processor) that this output port is connected to.

#### Returns

`string`

The name of the peer port.

#### Example

```ts
// Get the output port by name
const outputPort = processor.getOutputPort('My-Output-Port');

// Get the name of the peer port
const peerPort = outputPort.getPeePort(); // Returns the name of the peer port, e.g. 'My-Input-Port'.
```

***

### getPeerProcessorName()

> **getPeerProcessorName**(): `string`

Returns the name of the processor that this output port is connected to.

#### Returns

`string`

The name of the processor to which this output port is connected.

#### Example

```ts
// Get the output port by name
const outputPort = processor.getOutputPort('My-Output-Port');

// Now get the name of the processor that this output port is connected to
const peerProcessorName = outputPort.getPeerProcessorName(); // Returns the name of the connected processor, e.g. 'My-Processor'.
```

***

### getProcessorName()

> **getProcessorName**(): `string`

Returns the name of the processor to which this output port belongs.

#### Returns

`string`

The name of the processor that owns this output port.

#### Example

```ts
// Get the output port by name
const outputPort = processor.getOutputPort('My-Output-Port');

// Get the name of the processor that owns this output port
const processorName = outputPort.getProcessorName(); // Returns the name of the processor, e.g. 'My-Processor'.
```
