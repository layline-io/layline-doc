#  processor

> **processor**: Processor

## What
`processor` is an instance of the Processor class.
It is automatically created for each Processor within a Workflow when a deployment is started.
The Processor is the main entry point for processing data within a Workflow.
It provides methods to access InputPorts, OutputPorts, and other Processor-specific functionality.

## How to use
Please check the [Processor](../classes/Processor.md) documentation for more information.

## Example

```python
# Get the Processor's name
processor_name = processor.getName()
print(f"Current processor: {processor_name}")

# Get an output port
OUTPUT_PORT = processor.getOutputPort('MyOutput')

# Get configured arguments
args = processor.getArguments()
my_custom_arg = args.get('myCustomArg')

# Expand a string using environment variables
expanded_string = processor.expandString('The username is ${lay:USERNAME}.')

# Logging
processor.logInfo("Processing started")
processor.logWarning("Unusual data encountered")
processor.logError("An error occurred during processing")

# Using processor in lifecycle hooks
def onInit():
    global OUTPUT_PORT
    OUTPUT_PORT = processor.getOutputPort('Output')

def onMessage():
    # Process the message
    # ...
    # Emit the processed message
    stream.emit(message, OUTPUT_PORT)

def onStreamStart():
    processor.logInfo(f"Starting to process stream: {stream.getName()}")

def onStreamEnd():
    processor.logInfo(f"Finished processing stream: {stream.getName()}")
```

Note: The exact methods and properties available on the `processor` object may vary depending on your specific layline.io configuration and the type of Processor being used. Always refer to the most up-to-date documentation provided by layline.io for the definitive guide on using the `processor` object in Python scripts.
