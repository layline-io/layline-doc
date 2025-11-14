# Class: Processor

## Properties

### arguments

> **arguments**: dict

Returns arguments which you have configured via the UI as part of a Python Asset.
The list of provided arguments are in JSON-Format.
You enter them using the Python Asset editor and then retrieve them using this method.

#### Example

```python
# Get the Processor's configured arguments:
args = processor.arguments

# Now access the individual arguments like this:
my_prop = args['myProp']
```

### name

> **name**: str

Get the name of the current Processor.
Same as [getName](#getname)

#### Example

```python
# Get the Processor's name:
name = processor.name  # Returns the name of the Processor, e.g. 'My-Processor'.
```

## Methods

### expandString()

> **expandString**(to_expand: str) -> str

Expands all macros contained in a string.
For example, if you want to use the `USERNAME` environment variable, which you have defined in an [Environment Resource](../../../../assets/resources/asset-resource-environment) you can do so like this:

#### Parameters

- **to_expand**: str

#### Returns

str - Expanded string

#### Example

```python
# Get the username which is defined in one of your environment resources:
username = processor.expandString('The username is ${lay:USERNAME}.')

# Output: "The username is layline.", where "layline" is the value of the USERNAME environment variable.
```

Check out the [macro](../../../macros) documentation for more information on how to address expandable strings.

### getArguments()

> **getArguments**() -> dict

Returns arguments which you have configured via the UI as part of a Python Asset.
The list of provided arguments are in JSON-Format. You enter them using the Python Asset editor
and then retrieve them using this method.

#### Returns

dict - Configured arguments as a Python dictionary

#### Example

```python
# Get the Processor's configured arguments:
args = processor.getArguments()

# Now access the individual arguments like this:
my_prop = args['myProp']
```

### getName()

> **getName**() -> str

Get the name of the current Processor.
Same as [name](#name)

#### Returns

str - Processor name

#### Example

```python
# Get the Processor's name:
processor.getName()
```

### getOutputPort()

> **getOutputPort**(port_name: str) -> OutputPort

Get the [OutputPort](OutputPort.md) information for a given output port.

#### Parameters

- **port_name**: str

#### Returns

OutputPort - Output port instance information.

#### Example

```python
# Set stream output name:
OUTPUT_PORT = processor.getOutputPort('Output')  # Returns the OutputPort instance for the output port named 'Output'.
```

### logError()

> **logError**(param: str | Status) -> None

Logs a message with [Severity](../enumerations/Severity.md).ERROR to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

#### Parameters

- **param**: str | Status - Information you want to log. Can be either a string message or a Status object.

#### Returns

None

#### Example

```python
# Log a simple string message
processor.logError(f'Ran into the following problem: {problem}')

# Log a Status object
status = Status.create(VENDOR, 'ERROR_CODE', 'param1', 'param2')
processor.logError(status)
```

### logFatal()

> **logFatal**(param: str | Status) -> None

Logs a message with [Severity](../enumerations/Severity.md).FATAL to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

#### Parameters

- **param**: str | Status - Information you want to log. Can be either a string message or a Status object.

#### Returns

None

#### Example

```python
# Log a simple string message
processor.logFatal(f'Ran into the following problem: {problem}')

# Log a Status object
status = Status.create(VENDOR, 'FATAL_ERROR', 'param1', 'param2')
processor.logFatal(status)
```

### logInfo()

> **logInfo**(param: str | Status) -> None

Logs a message with [Severity](../enumerations/Severity.md).INFO to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

#### Parameters

- **param**: str | Status - Information you want to log. Can be either a string message or a Status object.

#### Returns

None

#### Example

```python
# Log a simple string message
processor.logInfo(f'Here is some interesting information: {info}')

# Log a Status object
status = Status.create(VENDOR, 'INFO_CODE', 'param1', 'param2')
processor.logInfo(status)
```

### logWarning()

> **logWarning**(param: str | Status) -> None

Logs a message with [Severity](../enumerations/Severity.md).WARNING to the processor log.
You can view this both via the Audit Trail in the UI and output in the process terminal output.

#### Parameters

- **param**: str | Status - Information you want to log. Can be either a string message or a Status object.

#### Returns

None

#### Example

```python
# Log a simple string message
processor.logWarning(f'Here is a warning: {warning}')

# Log a Status object
status = Status.create(VENDOR, 'WARNING_CODE', 'param1', 'param2')
processor.logWarning(status)
```
