#  stream

> **stream**: Stream

## What
`stream` represents the stream which is being processed at the time.
The `stream` object is available in any script-based Processor, e.g. the Python Processor.

## How to use
You can access it directly without the need to instantiate it.
It provides a number of functions which can - and sometimes have to - be invoked to control stream processing.

Please check the [Stream](../classes/Stream.md) documentation for more information.

## Example

```python
# Get stream information
stream_id = stream.getId()
stream_name = stream.getName()

# Emit a message to an output port
output_port = processor.getOutputPort('MyOutput')
stream.emit(message, output_port)

# Log information
stream.logInfo(f"Processing stream: {stream_name}")
stream.logWarning("Unusual data encountered in stream")
stream.logError("An error occurred during stream processing")

# Get stream metadata
metadata = stream.getMetadata()
file_size = metadata.data.Size  # For a file-based stream

# Set stream properties
stream.setOutputName('new_stream_name')
stream.setOutputPath('/new/output/path')

# Request retry or rollback
if error_condition:
    stream.requestRetry(Status.create(VENDOR, 'TEMPORARY_ERROR'), 30000)  # Retry after 30 seconds
if fatal_error:
    stream.requestRollback(Status.create(VENDOR, 'FATAL_ERROR'))

# Using stream in lifecycle hooks
def onStreamStart():
    global stream_id, file_name
    stream_id = stream.getId()
    file_name = stream.getName()
    stream.logInfo(f"Started processing stream: {file_name}")

def onStreamEnd():
    stream.logInfo(f"Finished processing stream: {file_name}")

def onMessage():
    # Process the message
    # ...
    # Emit the processed message
    stream.emit(message, output_port)

def onCommit():
    stream.logInfo(f"Stream {stream_id} committed successfully")

def onRollback():
    stream.logError(f"Stream {stream_id} rolled back due to errors")
```

Note: The exact methods and properties available on the `stream` object may vary depending on your specific layline.io configuration and the type of stream being processed. Always refer to the most up-to-date documentation provided by layline.io for the definitive guide on using the `stream` object in Python scripts.
