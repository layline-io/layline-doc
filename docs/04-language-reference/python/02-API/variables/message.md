#  message

> **message**: Message

## What
`message` is an instance of the [Message](../classes/Message.md) class.
It is automatically created for each message that is processed, and directly accessible within a script.
It provides methods to interact with the message, like getting and setting message attributes.

## How to use
Please check the [Message](../classes/Message.md) documentation for more information.

## Example

```python
# Accessing message data
device_id = message.data.IOT.DEVICE_ID
measurement = message.data.IOT.MEASUREMENT

# Adding a status to the message
if measurement < 0:
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_MEASUREMENT', measurement))

# Checking message type
if message.typeName == 'Header':
    # Process header
    pass
elif message.typeName == 'Detail':
    # Process detail
    pass
elif message.typeName == 'Trailer':
    # Process trailer
    pass

# Getting a specific field value
timestamp = message.getString(dataDictionary.type.Detail.CSV.TIMESTAMP)

# Setting a field value
message.setString(dataDictionary.type.Detail.CSV.PROCESSED_FLAG, "Y")
```

Note: The exact structure and available methods of the `message` object may vary depending on your specific layline.io configuration and the type of message being processed. Always refer to the most up-to-date documentation provided by layline.io for the definitive guide on using the `message` object in Python scripts.
