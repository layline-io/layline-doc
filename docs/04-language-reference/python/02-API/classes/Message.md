# Class: Message

Events traversing layline.io Workflows are instantiated as a [Message](Message.md).
This class exposes a number of properties and methods to extract and set data within messages.

To understand the anatomy of a message please read the respective [chapter in the documentation](../../../../concept/data-dictionary).

## Example Message Structure
Assume we have the following data dictionary structure
* Header
    * IOT
        * RECORD_TYPE
        * DEVICE_NO
* Detail
    * IOT
        * RECORD_TYPE
        * TIME
        * MEASUREMENT
* Trailer
    * IOT
        * RECORD_TYPE
        * COUNT

Then in a Python processor we can do this:

```python
def on_message():
    if message.typeName ==  'Header':
        on_header(message)
    elif message.typeName == 'Detail':
        on_detail(message)
    elif message.typeName == 'Trailer':
        on_detail(message)

    # send the message on through OUTPUT_PORT of Processor
    stream.emit(message, OUTPUT_PORT)

```

And this:

```python
# Handle a detail record type
def on_detail(message):
    m = message.data.IOT.MEASUREMENT

    VENDOR = Status.getVendorByName('MyVendorLongName')

    if m < 0:
         message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_MEASUREMENT', m))

```

## Properties

### data

> **data**: `object`

The data of the message.
It is a nested object structure that reflects the structure of the data dictionary of this message.

#### Example

```python
# Create Detail
detailMessage = dataDictionary.createMessage(dataDictionary.type.Detail);
detailMessage.data.PRODUCT = {
    "RECORD_TYPE"       : "D",
    "ID"                : message.data.Id,
    "CODE"              : message.data.Code,
    "NAME"              : message.data.Name,
    "CATEGORY"          : message.data.Category,
    "PRICE"             : message.data.Price,
    "STOCK_QUANTITY"    : message.data.StockQuantity,
    "COLOR"             : message.data.Color,
    "LAUNCH_DATE"       : message.data.LaunchDate,
}
# stream.logInfo(f"detailMessage: {detailMessage.toJson()})")
stream.emit(detailMessage, OUTPUT_PORT);
```

***

### id

> **id**: `string`

The unique identifier of the message.
This is a consecutive number starting with "1" for the first message.
It is used to uniquely identify a message within a stream.
Cloning a message will generate a new id, whereas the original message will keep its id and the cloned message will have the original message number appended by a "." and a new consecutive number.
For example, "1.1", "1.2", "1.3", ... for each clone of the original message.

#### Example

```python
# Accessing the id of a message
id = message.id;
```

***

### numStatusAttached

> **numStatusAttached**: `number`

Gets the number of States [Status](../../../python/02-API/classes/Status.md) attached.
Same as getNumStatusAttached.

```python
result = message.numStatusAttached;
```

***

### typeName

> **typeName**: `string`

The type name of the message.
This is the name of the data dictionary type that the message represents.

#### Example

```python
typeName = message.typeName;
# e.g, If in your data dictionary you have a type called "MyType", then this will return "MyType"
if typeName == 'MyType':
    # do something
```



## Methods

### addStatus()

> **addStatus**(severity: Severity, status: Status, add_to_log: bool = True) -> None

Adds a [Status](Status.md) to a message.
The [Status](Status.md) must have been created with [Status.create](Status#create) or otherwise instantiated.

#### Parameters

- **severity**: Severity

  [Severity](../enumerations/Severity.md) value.

- **status**: Status

  The [Status](Status.md) which should be added.

- **add_to_log**: bool, optional

  Signals whether the [Status](Status.md) shall also be added to the log, or not. Will be added by default if not specified.
  If `True` then the Status will be visible in the Stream Log of the Audit Trail.

#### Returns

None

#### Example

```python
if error:
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', value_string))
```

### clone()

> **clone**() -> Message

Creates a full clone of a [Message](Message.md)

```python
cloned_message = message.clone()
```

#### Returns

Message - A copy of a Message

### commit()

> **commit**() -> Message

Commits the message, typically used with message queues or streaming platforms.

This method is used to acknowledge the successful processing of a message.
The exact behavior depends on the underlying system:

- For an SQS queue, it deletes the message from the queue.
- For a Kafka topic, it commits the offset of the consumer.

Calling this method indicates that the message has been successfully processed
and should not be redelivered.

#### Returns

Message - Returns the message instance for method chaining.

#### Example

```python
def on_message():
    try:
        # Process the message
        result = process_message(message)
        
        if result['success']:
            # If processing was successful, commit the message
            message.commit()
            print("Message processed and committed successfully")
        else:
            print("Message processing failed, not committing")
    except Exception as error:
        print(f"Error processing message: {error}")
        # In case of an error, you might choose not to commit
        # so that the message can be reprocessed

def process_message(msg):
    # Implement your message processing logic here
    # Return a dictionary indicating success or failure
    return {'success': True}
```

In this example, we demonstrate a common pattern for message processing:

1. We attempt to process the message.
2. If processing is successful, we commit the message to acknowledge its completion.
3. If processing fails or an error occurs, we don't commit the message, allowing it to be reprocessed.

This approach helps ensure message reliability and prevents data loss in distributed systems.

### exists()

> **exists**(entity_declaration: DataDictionaryEntity) -> bool

Checks if a known data structure is recognized within a given [Message](Message.md).
Data structures are spawned into existence by the definition of data formats (Format Assets).
You can test a particular [Message](Message.md) on whether a specific structure is present within
a message by using this method.

This is typically used to check whether a message is of a certain type, or not.

#### Parameters

- **entity_declaration**: DataDictionaryEntity

  Path to data dictionary structure which you want to test for existence in the message ([DataDictionaryEntity](DataDictionaryEntity.md).)

#### Returns

bool - True, if it exists, else false.

#### Example

```python
# Get the access path to a structure within the compiled data dictionary
MY_RECORD_TYPE = dataDictionary.type.MyFormat.Detail

# Test message against the existence of the data dictionary structure.
if message.exists(MY_RECORD_TYPE):
    ...
```

### findStatus()

> **findStatus**(value: Vendor | Severity | (status: Status) => boolean) -> List[Status]

Finds and returns a list of status entries attached to the message based on the provided filter.

This method allows you to search for status entries using three different approaches:
1. By Vendor: Find all statuses from a specific vendor.
2. By Severity: Find all statuses of a specific severity level.
3. By Custom Function: Use a custom filter function to find statuses based on any criteria.

#### Parameters

- **value**: Union[Vendor, Severity, Callable[[Status], bool]]
  - If a [`Vendor`](Vendor.md) is provided, it returns all statuses from that vendor.
  - If a [`Severity`](../enumerations/Severity.md) is provided, it returns all statuses of that severity level.
  - If a function is provided, it should take a `Status` as input and return a boolean. The method will return all statuses for which this function returns `True`.

#### Returns

List[Status] - A list of Status objects that match the provided filter. Returns an empty list if no matching statuses are found.

#### Examples

1. Finding statuses by Vendor:

```python
# Assume we have a vendor defined
VENDOR = Status.getVendorByName('MyVendorName')

# Find all statuses from this vendor
vendor_statuses = message.findStatus(VENDOR)
for status in vendor_statuses:
    print(f"Found status: {status.code} - {status.message}")
```

2. Finding statuses by Severity:

```python
# Find all ERROR statuses
error_statuses = message.findStatus(Severity.ERROR)
if error_statuses:
    print(f"Message has {len(error_statuses)} error statuses")
```

3. Finding statuses using a custom filter function:

```python
# Find all statuses with a specific code
def has_specific_code(status):
    return status.code == "SPECIFIC_CODE"

specific_statuses = message.findStatus(has_specific_code)
for status in specific_statuses:
    print(f"Found status with specific code: {status.message}")
```

4. Using a lambda function for filtering:

```python
# Find all WARNING or ERROR statuses
high_priority_statuses = message.findStatus(lambda s: s.severity in [Severity.WARNING, Severity.ERROR])
for status in high_priority_statuses:
    print(f"High priority status: {s.severity} - {s.message}")
```

#### Notes

- The method returns an empty list if no statuses match the provided filter.
- When using a custom filter function, you have full flexibility to implement complex filtering logic based on any properties of the Status object.
- This method is particularly useful for error handling, logging, and conditional processing based on the statuses attached to a message.

### getBigInteger()

> **getBigInteger**(entity: DataDictionaryEntity) -> int

Return a BigInteger typed value from a message field.
Important!: Please note that this method returns a Python `int` object, which can handle arbitrarily large integers.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

int - Python integer (which can handle arbitrarily large values).

#### Example

```python
n = message.getBigInteger(dataDictionary.type.Detail.CSV.A_REALLY_BIG_NUMBER_FIELD)

# Compare BigInteger to another BigInteger
x = 123  # x is now a Python int, which can handle arbitrarily large values

x == 123  # -> True
```

### getBoolean()

> **getBoolean**(entity: DataDictionaryEntity, default_value: bool) -> bool

Retrieves a Boolean value from a specific field in the message's data dictionary.

This method accesses a boolean value from the message using the provided data dictionary entity.

#### Parameters

- **entity**: DataDictionaryEntity

  The data dictionary entity that specifies the path to the boolean value in the message.

#### Returns

bool - The boolean value from the specified field in the message.

#### Examples

Basic usage:

```python
# Assuming we have a data dictionary entity for an "is_active" field
is_active_entity = dataDictionary.type.MyFormat.Detail.IS_ACTIVE

# Get the boolean value, defaulting to False if not found
is_active = message.getBoolean(is_active_entity)

if is_active:
    print("The item is active")
else:
    print("The item is not active")
```

### getByte()

> **getByte**(entity: DataDictionaryEntity) -> int

Return the Byte typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

int - Python integer representing a byte value (0-255).

#### Example

```python
b = message.getByte(dataDictionary.type.Detail.CSV.A_BYTE_FIELD)
```

### getByteString()

> **getByteString**(entity: DataDictionaryEntity) -> bytes

Return the ByteString typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

bytes - Python bytes object.

#### Example

```python
b = message.getByteString(dataDictionary.type.Detail.CSV.FIELD)
```

### getCharacter()

> **getCharacter**(entity: DataDictionaryEntity) -> str

Return a Character typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

str - Python string of length 1.

#### Example

```python
c = message.getCharacter(dataDictionary.type.Detail.CSV.FIELD)
```

### getCrc64()

> **getCrc64**(message: MessageNode) -> str

Creates a CRC 64 checksum from specified node within a [Message](Message.md).

#### Parameters

- **message**: MessageNode

  [MessageNode](MessageNode.md) for which to create the CRC64 checksum.

#### Returns

str - CRC 64 checksum

#### Example

```python
crc64 = message.getCrc64(message.data.CSV)
```

### getDate()

> **getDate**(entity: DataDictionaryEntity) -> [LocalDate](LocalDate.md)

Return a [LocalDate](LocalDate.md) typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[LocalDate](LocalDate.md) - A date-time with an offset from UTC/Greenwich.

#### Example

```python
dt = message.getDateTime(dataDictionary.type.Detail.CSV.A_DATE_FIELD)
```

### getDateTime()

> **getDateTime**(entity: DataDictionaryEntity) -> [DateTime](DateTime.md)

Return a [DateTime](DateTime.md) typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[DateTime](DateTime.md) - A date-time with an offset from UTC/Greenwich.

#### Example

```python
dt = message.getDateTime(dataDictionary.type.Detail.CSV.FIELD)
```

### getDecimal()

> **getDecimal**(entity: DataDictionaryEntity) -> Decimal

Return a Decimal typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

Decimal - Python Decimal type.

#### Example

```python
dec = message.getDecimal(dataDictionary.type.Detail.CSV.FIELD)
```

### getDouble()

> **getDouble**(entity: DataDictionaryEntity) -> float

Return a Double typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

float - Python float type.

#### Example

```python
dbl = message.getDouble(dataDictionary.type.Detail.CSV.FIELD)
```

### getInt()

> **getInt**(entity: DataDictionaryEntity) -> int

Return an Int typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

int - Python int type.

#### Example

```python
integer = message.getInt(dataDictionary.type.Detail.CSV.FIELD)
```

### getLong()

> **getLong**(entity: DataDictionaryEntity) -> int

Return a Long typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

int - Python int type (which can handle arbitrarily large values).

#### Example

```python
l = message.getLong(dataDictionary.type.Detail.CSV.FIELD)
```

### getMessageDigest()

> **getMessageDigest**(algorithm: str = "MD5", to_lower_case: bool = False, accessor_array: List[DataDictionaryEntity] = None) -> str

Returns a calculated digest for a given message

#### Parameters

- **algorithm**: str, optional

  Algorithm with which to calculate the digest. Currently only supports "MD5".

- **to_lower_case**: bool, optional

  Set to true if digest should be lower-case only.

- **accessor_array**: List[DataDictionaryEntity], optional

  List of [DataDictionaryEntity](DataDictionaryEntity.md) on which to calculate the digest.

#### Returns

str

#### Example

```python
# Option: 1. Return digest considering complete message content.
# Digest calculation defaults to MD5 hash and no lower case.
md5_digest_full = message.getMessageDigest()

# Option: 2. Return digest for full message content based on MD5 hash.
# Returned digest will be lower case only.
md5_digest_full_lower = message.getMessageDigest("MD5", True)

# Option: 3. Calculate digest considering specific data structures within message only.
record_accessor_for_md5 = [
    dataDictionary.type.Detail.CSV.RECORD_TYPE,
    dataDictionary.type.Detail.CSV.LAST_NAME,
    dataDictionary.type.Detail.CSV.FIRST_NAME
]

md5_digest = message.getMessageDigest("MD5", True, record_accessor_for_md5)
```

#### Returns

int - Number of States attached to the message.

### getObject()

> **getObject**(entity: DataDictionaryEntity) -> Any

Return an Object value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

Any - Python object.

#### Example

```python
o = message.getObject(dataDictionary.type.Detail.CSV.FIELD)
```

### getStatus()

> **getStatus**(index: int) -> Status

Retrieves a Status by index from the list of States attached to a message.
A message keeps track of related States in a Status array attached to it.
This list may be empty or filled with one or more States.

#### Parameters

- **index**: int

  Index of Status to retrieve.

#### Returns

Status - Status or None if no Status found with that index.

#### Example

```python
# Retrieve the first Status from the list of States attached to the message.
status = message.getStatus(0)
```

### getString()

> **getString**(entity: DataDictionaryEntity) -> str

Return a String typed value from a message field.

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

str - The value as string.

#### Example

```python
s = message.getString(dataDictionary.type.Detail.CSV.FIELD)
```

### hasStatusAttached()

> **hasStatusAttached**(severity: Severity) -> bool

Checks if a message has a [Status](Status.md) attached which matches a particular Severity.

```python
result = message.hasStatusAttached(Severity.ERROR)
```

#### Parameters

- **severity**: [`Severity`](../enumerations/Severity.md)

  Optional severity to check against.

#### Returns

bool - True, if match found, else False.

### pack()

> **pack**() -> PackedMessage

Packs the message into a memory efficient format.

```python
# Pack message
packed_msg = message.pack()

# Unpack message
unpacked_msg = packed_msg.unpack()
```

#### Returns

PackedMessage - Packed message.

### setBigInteger()

> **setBigInteger**(entity: DataDictionaryEntity, value: int) -> None

Sets a BigInteger value in a message target field.

```python
big_int = 123  # Python int can handle arbitrarily large integers

message.setBigInteger(dataDictionary.type.Detail.CSV.FIELD, big_int)
```

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

- **value**: int

  A Python int value (which can handle arbitrarily large integers).

#### Returns

None

### setBoolean()

> **setBoolean**(entity: DataDictionaryEntity, value: bool) -> None

Sets a Boolean value in a message target field.

```python
message.setBoolean(dataDictionary.type.Detail.CSV.FIELD, True)
```

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

- **value**: bool

  A Python bool value.

#### Returns

None

### setByte()

> **setByte**(entity: DataDictionaryEntity, value: Union[int, str]) -> None

Sets a Byte value in a message target field.

```python
message.setByte(dataDictionary.type.Detail.CSV.FIELD, 7)
# or
message.setByte(dataDictionary.type.Detail.CSV.FIELD, 'X')
```

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

- **value**: Union[int, str]

  A value which can be represented as a Byte (0-255 or a single character).

#### Returns

None

### setByteString()

> **setByteString**(entity: DataDictionaryEntity, value: bytes) -> None

Sets a ByteString value in a message target field.

```python
b = b"XYZ"  # b is now a Python bytes object

message.setByteString(dataDictionary.type.Detail.CSV.FIELD, b)
```

#### Parameters

- **entity**: DataDictionaryEntity

  [DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

- **value**: bytes

  A Python bytes object.

#### Returns

None

### setCharacter()

> **setCharacter**(entity: DataDictionaryEntity, value: str) -> None

Sets a Character value in a message target field.

```python
message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, 'c
