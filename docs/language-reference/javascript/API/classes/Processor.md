# Processor

## Properties

### arguments

> **arguments**: `object`

Returns arguments which you have configured via the UI as part of a Javascript Asset.
The list of provided arguments are in JSON-Format.
You enter them using the Javascript Asset editor and then retrieve them using this method.

#### Example

```js
// Get the Processor's configured arguments:
const args = processor.arguments;

// Now access the individual arguments like this:
let myProp = args.myProp;
```

#### Returns

Configured arguments as a Javascript object

***

### name

> **name**: `string`

Get the name of the current Processor.
Same as [getName](#getname)

#### Example

```js
// Get the Processor's name:
const name = processor.name; // Returns the name of the Processor, e.g. 'My-Processor'.
```

#### Returns

Processor name

## Methods

### expandString()

> **expandString**(`toExpand`): `string`

Expands all macros contained in a string.
For example, if you want to use the `USERNAME` environment variable, which you have defined in an [Environment Resource](/docs/assets/workflow-assets/resources/asset-resource-environment) you can do so like this:

#### Parameters

##### toExpand

`string`

#### Returns

`string`

Expanded string

#### Example

```js
// Get the username which is defined in one of your environment resources:
let username = processor.expandString('The username is ${lay:USERNAME}.');

// Output: "The username is layline.", where "layline" is the value of the USERNAME environment variable.
```

Check out the [macro](../../../macros) documentation for more information on how to address expandable strings.

***

### getArguments()

> **getArguments**(): `object`

Returns arguments which you have configured via the UI as part of a Javascript Asset.
The list of provided arguments are in JSON-Format. You enter them using the Javascript Asset editor
and then retrieve them using this method.

#### Returns

`object`

Configured arguments as a Javascript object

#### Example

```js
// Get the Processor's configured arguments:
const args = processor.getArguments();

// Now access the individual arguments like this:
let myProp = args.myProp;
```

***

### getName()

> **getName**(): `string`

Get the name of the current Processor.
Same as [name](#name)

#### Returns

`string`

Processor name

#### Example

```js
// Get the Processor's name:
processor.getName();
```

***

### getOutputPort()

> **getOutputPort**(`portName`): [`OutputPort`](OutputPort.md)

Get the [OutputPort](OutputPort.md) information for a given output port.

#### Parameters

##### portName

`string`

#### Returns

[`OutputPort`](OutputPort.md)

Output port instance information.

#### Example

```js
// Set stream output name:
let OUTPUT_PORT = processor.getOutputPort('Output'); // Returns the OutputPort instance for the output port named 'Output'.
```

***

### logError()

> **logError**(`param`): `void`

Logs a message with [Severity](../enumerations/Severity.md).ERROR to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

#### Parameters

##### param

`string` \| [`Status`](Status.md)

Information you want to log. Can be either a string message or a Status object.

#### Returns

`void`

#### Example

```js
// Log a simple string message
processor.logError('Ran into the following problem: ' + problem);

// Log a Status object
const status = Status.create(VENDOR, 'ERROR_CODE', 'param1', 'param2');
processor.logError(status);
```

***

### logFatal()

> **logFatal**(`param`): `void`

Logs a message with [Severity](../enumerations/Severity.md).FATAL to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

#### Parameters

##### param

`string` \| [`Status`](Status.md)

Information you want to log. Can be either a string message or a Status object.

#### Returns

`void`

#### Example

```js
// Log a simple string message
processor.logFatal('Ran into the following problem: ' + problem);

// Log a Status object
const status = Status.create(VENDOR, 'FATAL_ERROR', 'param1', 'param2');
processor.logFatal(status);
```

***

### logInfo()

> **logInfo**(`param`): `void`

Logs a message with [Severity](../enumerations/Severity.md).INFO to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

#### Parameters

##### param

`string` \| [`Status`](Status.md)

Information you want to log. Can be either a string message or a Status object.

#### Returns

`void`

#### Example

```js
// Log a simple string message
processor.logInfo('Here is some interesting information: ' + info);

// Log a Status object
const status = Status.create(VENDOR, 'INFO_CODE', 'param1', 'param2');
processor.logInfo(status);
```

***

### logWarning()

> **logWarning**(`param`): `void`

Logs a message with [Severity](../enumerations/Severity.md).WARNING to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

#### Parameters

##### param

`string` \| [`Status`](Status.md)

Information you want to log. Can be either a string message or a Status object.

#### Returns

`void`

#### Example

```js
// Log a simple string message
processor.logWarning('Here is a warning: ' + warning);

// Log a Status object
const status = Status.create(VENDOR, 'WARNING_CODE', 'param1', 'param2');
processor.logWarning(status);
```
