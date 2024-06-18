# Class: OutputPort

Instance of an output port of a Processor

## Methods

### getPeerProcessorName()

> **getPeerProcessorName**(): `string`

Returns the name of the processor that this processor is attached to.

```js
// Get the output port by name
const OUTPUT_PORT = processor.getOutputPort('My-Output-Port');

// Now get the name of the processor that this output port is connected ti.
let peerProcessorName = OUTPUT_PORT.getPeerProcessorName();
```

#### Returns

`string`

Name of Processor which this output port is connected to.
