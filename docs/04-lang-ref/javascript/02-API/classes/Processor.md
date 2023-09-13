---
id: "Processor"
title: "Class: Processor"
sidebar_label: "Processor"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### expandString

▸ **expandString**(`toExpand`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toExpand` | `string` |

#### Returns

`string`

___

### getArguments

▸ **getArguments**(): `object`

Returns arguments which you have configured via the UI as part of a Javascript Asset.
The list of provided arguments are in JSON-Format. You enter them using the Javascript Asset editor
and then retrieve them using this method.

Example:
```js
// Get the Processor's configured arguments:
const args = processor.getArguments();

// Now access the individual arguments like this:
let myProp = args.myProp;
```

#### Returns

`object`

Configured arguments as a Javascript object

___

### getName

▸ **getName**(): `string`

Get the name of the current Processor.

Example:
```js
// Get the Processor's name:
processor.getName();
```

#### Returns

`string`

Processor name

___

### getOutputPort

▸ **getOutputPort**(`portName`): [`OutputPort`](OutputPort.md)

Get the [OutputPort](OutputPort.md) information for a given output port.

Example:
```js
// Set stream output name:
let OUTPUT_PORT = processor.getOutputPort('Output');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `portName` | `string` |

#### Returns

[`OutputPort`](OutputPort.md)

Output port instance information.

___

### logError

▸ **logError**(`msg`): `void`

Logs a message with [Severity](../enums/Severity.md).ERROR to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

Example:
```js
processor.logError('Ran into the following problem: ' + problem);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | Information you want to log. |

#### Returns

`void`

___

### logFatal

▸ **logFatal**(`msg`): `void`

Logs a message with [Severity](../enums/Severity.md).FATAL to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

Example:
```js
processor.logFatal('Ran into the following problem: ' + problem);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | Information you want to log. |

#### Returns

`void`

___

### logInfo

▸ **logInfo**(`msg`): `void`

Logs a message with [Severity](../enums/Severity.md).INFO to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

Example:
```js
processor.logInfo('Here is some interesting information: ' + info);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | Information you want to log. |

#### Returns

`void`

___

### logWarning

▸ **logWarning**(`msg`): `void`

Logs a message with [Severity](../enums/Severity.md).WARNING to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

Example:
```js
processor.logWarning('Here is a warning: ' + warning);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | Information you want to log. |

#### Returns

`void`
