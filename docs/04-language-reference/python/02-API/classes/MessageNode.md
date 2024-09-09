# Class: MessageNode

Individual node of a [Message](Message.md)

Assume that we have a data dictionary structure of
* CSV
    * RECORD_TYPE ...
    * FIRST_NAME ...
    * LAST_NAME ...
    * ...

Then `message.data.CSV` is a MessageNode as is `message.data.CSV.RECORD_TYPE`.
As an example of use check [Message.findStatus](Message#findstatus).

## Usage in Python

In Python, you would typically access MessageNode attributes using dot notation, similar to accessing attributes of a Python object. Here's an example:

```python
# Assuming 'message' is an instance of the Message class
csv_node = message.data.CSV  # This is a MessageNode
record_type = message.data.CSV.RECORD_TYPE  # This is also a MessageNode

# Accessing data
first_name = message.data.CSV.FIRST_NAME
last_name = message.data.CSV.LAST_NAME

# Using in a condition
if message.data.CSV.RECORD_TYPE == "CUSTOMER":
    # Process customer record
    pass

# Iterating over all fields in a node
for field, value in message.data.CSV.__dict__.items():
    print(f"{field}: {value}")

# Using with Message.findStatus
status_array = message.findStatus(lambda status: status.vendorId == VENDOR.id and status.code == 9)
```

In this Python context, MessageNode behaves similar to a dynamic object where you can access its attributes directly. The actual implementation may vary depending on how layline.io's Python API is designed, but conceptually, it should allow for intuitive access to nested data structures within a Message.

Note: The exact behavior and available methods of MessageNode in Python would depend on the specific implementation of layline.io's Python API. Always refer to the most up-to-date documentation provided by layline.io for the definitive guide on using MessageNode in Python.
