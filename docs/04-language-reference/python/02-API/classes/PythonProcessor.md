# Class: PythonProcessor

This isn't an actual class, but a placeholder for _hooks_ which are available within a Python Asset.
Hooks are automatically invoked as part of a Python Asset's normal lifecycle.
Read more about Python-lifecycle in the [introduction](../../python_introduction).

## Methods

### on_commit()

Invoked when a Stream is committed.
Use this to perform potential final tasks when a stream ends.

#### Example

```python
def on_commit():
    if connection:
        connection.commit_transaction()
        connection.close_connection()
        global connection
        connection = None
```

### on_init()

`on_init` is invoked upon instantiation of the Python Asset.
Use this method to perform any initialization actions, e.g. acquiring a database connection, initializing data structures which are used within the script, etc.
Note that this method is only invoked once upon startup of the Project.

#### Example

```python
def on_init():
    global OUTPUT_PORT
    OUTPUT_PORT = processor.get_output_port('Output')
```

### on_message()

This is one of the most important methods which you will use every time within a Python Asset.
layline.io is a reactive messaging system, meaning a script within a Python Asset is triggered by the delivery of a message to this Python Asset.
You can consider the `onMessage` method as a starting point for processing within Python Asset.

#### Example

```python
# Get the output port
OUTPUT_PORT = processor.get_output_port('MyOutput')

def on_message():
    if message.type_name == 'Header':
        # do nothing
    elif message.typeName == 'Trailer':
        # do something with the trailer
    elif message.typeName == 'Detail':
        # invoke a self-defined function which handles the message.
        handle_detail(message)

    stream.emit(message, OUTPUT_PORT)

def handle_detail(detail):
    # do something with the message
```

### on_prepare_commit()

Invoked before a Stream is finally committed.
Use this method to do any preparatory work before a Stream is finally committed.

#### Example

```python
def on_prepare_commit():
    # Invoke custom function to write errors which we gathered during stream processing
    write_all_reject_errors()

def write_all_reject_errors():
    # ...
```

### on_prepare_retry()

Invoked when a "prepare-retry" signal is emitted by layline.io.

#### Example

```python
def on_prepare_retry():
    global connection
    if connection:
        try:
            connection.rollback_transaction()
            connection.close_connection()
        except Exception:
            pass
        finally:
            connection = None
```

### on_pull_message()

layline.io is a reactive system and works according to the principle of "dynamic push / pull mode".
This means that in a network of Processors, each Processor can signal to connected Processors that it wants to push, or pull messages, thus managing smooth message flow without the risk of clogging.

* **Push-mode**: the downstream processor ("Consumer") consumes messages at the same or even a faster rate than the source processor ("Producer") produces the messages (= Slow Producer, fast Consumer)
* **Pull-mode**: the source processor produces messages faster than a downstream processor can consume them (= Fast Producer, slow Consumer)

Using layline.io you usually do not have to think about "push"- or "pull"-mode and how it is applied throughout the Workflow processing.
It is all built-in! Making use of the `onMessage` method will ensure that your Python processor is receiving available messages at an applicable signaling rate.

Only in case your Python processor includes logic to become a "producer" of (additional) messages, there is a need to
explicitly implement the `onPullMessage` method making sure to receive the signals for readiness to receive next messages
from connected downstream Processors within your Workflow.

**Practical example:**

A Workflow is processing Streams.
Each Stream has 100,000 messages where two records each need to be correlated to form a new message to then be sent downstream, resulting in a total of 50,000 downstream messages.
You cannot correlate them, however until all 100,000 messages have been received.
This implies, that no messages leave Processor A, until the Stream has been completely received (e.g. marked by an ending message) and all messages have been correlated.
_(To not store all of them in memory, Processor A may use a queue Service for storage. See example below.)_
During that phase Processor B is idling.

Normally, you would say that once the last message has been received, we can instantly correlate all messages to then send the resulting 50,000 messages downstream to Processor B all in one go.
A sudden spike of a wave of these messages is not economical for a reactive system and may take a toll on memory consumption and performance.
To avoid this, instead of simply emitting messages when Processor A is ready, you can wait for Processor B to be ready and then send one message at a time until all messages have been emitted.

This is what `onPullMessage` allows you to implement.

#### Example

```python
# Invoked each time a downstream Processor is ready for the next message.
def onPullMessage():
    message = None
    emitted = False
    if stream_complete:  # Stream was fully received
        message = queue.read_message()  # Read one message
        if message:
            stream.emit(message, MY_OUTPUT_PORT)  # emit the message

    if not message:
        queue.close_connection()
        global queue
        queue = None
```

**NOTE:**
In case you have two or more downstream Processors connected to the current Python processor, you are unable to tell which of the downstream Processors is ready for the next message.
This should be of no concern. You can simply send the next message out to the correct Processor.
The system will behave in a balanced manner following standard reactive rules.

### on_rollback()

Invoked when a rollback signal is issued by the system.
Perform any "undo" and cleanup tasks here.

#### Example

```python
def on_rollback():
    global connection
    if connection:
        try:
            connection.rollback_transaction()
            connection.close_connection()
        except Exception:
            pass
        finally:
            connection = None
```

### on_stream_end()

Invoked when current stream ends.
Use this to run potential clean up tasks.

#### Example

```python
def on_stream_end():
    # Report in case some customer data could not be found during stream processing
    if num_customer_data_not_found > 0:
        stream.log_info(f'{num_customer_data_not_found} customers could not be found in the database.')
```

### on_stream_start()

Invoked when current stream is starting.
Use this to run potential stream startup initialization tasks on every new Stream.

#### Example

```python
def on_stream_start():
    global stream_id, file_name
    stream_id = stream.get_id()
    file_name = stream.get_name()
```
