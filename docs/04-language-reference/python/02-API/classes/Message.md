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
    if message.type.Header:
        on_header(message)
    elif message.type.Detail:
        on_detail(message)
    elif message.type.Trailer:
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

> **data**: object

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

### exists()

> **exists**(entity_declaration: EntityDeclaration) -> bool

Checks if a known data structure is recognized within a given [Message](Message.md).
Data structures are spawned into existence by the definition of data formats (Format Assets).
You can test a particular [Message](Message.md) on whether a specific structure is present within
a message by using this method.

This is typically used to check whether a message is of a certain type, or not.

#### Parameters

- **entity_declaration**: EntityDeclaration

  Path to data dictionary structure which you want to test for existence in the message ([EntityDeclaration](EntityDeclaration.md).)

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

> **findStatus**(callback: Callable) -> List[Status]

Check whether a message carries a specified status.

```python
VENDOR = Status.getVendorByName('MyVendorLongName')

found_status_array = detail.findStatus(lambda status: status.vendorId == VENDOR.id and status.code == 9)
```

#### Parameters

- **callback**: Callable

#### Returns

List[Status] - List of found States. Empty list if nothing found.

### getBigInteger()

> **getBigInteger**(accessor: EntityDeclaration) -> int

Return a BigInteger typed value from a message field.
Important!: Please note that this method returns a Python `int` object, which can handle arbitrarily large integers.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

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

> **getBoolean**(accessor: EntityDeclaration, default_value: bool = None) -> bool

Return the Boolean typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

- **default_value**: bool, optional

  Default value if no Boolean value could be retrieved from message.

#### Returns

bool - Python boolean value.

#### Example

```python
b = message.getBoolean(dataDictionary.type.Detail.CSV.A_BOOLEAN_FIELD)
```

### getByte()

> **getByte**(accessor: EntityDeclaration) -> int

Return the Byte typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

#### Returns

int - Python integer representing a byte value (0-255).

#### Example

```python
b = message.getByte(dataDictionary.type.Detail.CSV.A_BYTE_FIELD)
```

### getByteString()

> **getByteString**(accessor: EntityDeclaration) -> bytes

Return the ByteString typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

#### Returns

bytes - Python bytes object.

#### Example

```python
b = message.getByteString(dataDictionary.type.Detail.CSV.FIELD)
```

### getCharacter()

> **getCharacter**(accessor: EntityDeclaration) -> str

Return a Character typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

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

### getDateTime()

> **getDateTime**(accessor: EntityDeclaration) -> datetime.datetime

Return a datetime typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

#### Returns

datetime.datetime - A date-time with an offset from UTC/Greenwich.

#### Example

```python
dt = message.getDateTime(dataDictionary.type.Detail.CSV.FIELD)
```

### getDecimal()

> **getDecimal**(accessor: EntityDeclaration) -> Decimal

Return a Decimal typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

#### Returns

Decimal - Python Decimal type.

#### Example

```python
dec = message.getDecimal(dataDictionary.type.Detail.CSV.FIELD)
```

### getDouble()

> **getDouble**(accessor: EntityDeclaration) -> float

Return a Double typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

#### Returns

float - Python float type.

#### Example

```python
dbl = message.getDouble(dataDictionary.type.Detail.CSV.FIELD)
```

### getInt()

> **getInt**(accessor: EntityDeclaration) -> int

Return an Int typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

#### Returns

int - Python int type.

#### Example

```python
integer = message.getInt(dataDictionary.type.Detail.CSV.FIELD)
```

### getLong()

> **getLong**(accessor: EntityDeclaration) -> int

Return a Long typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

#### Returns

int - Python int type (which can handle arbitrarily large values).

#### Example

```python
l = message.getLong(dataDictionary.type.Detail.CSV.FIELD)
```

### getMessageDigest()

> **getMessageDigest**(algorithm: str = "MD5", to_lower_case: bool = False, accessor_array: List[EntityDeclaration] = None) -> str

Returns a calculated digest for a given message

#### Parameters

- **algorithm**: str, optional

  Algorithm with which to calculate the digest. Currently only supports "MD5".

- **to_lower_case**: bool, optional

  Set to true if digest should be lower-case only.

- **accessor_array**: List[EntityDeclaration], optional

  List of [EntityDeclaration](EntityDeclaration.md) on which to calculate the digest.

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

### getNumStatusAttached()

> **getNumStatusAttached**() -> int

Gets the number of States [Status](Status.md) attached.

```python
result = message.getNumStatusAttached()
```

#### Returns

int - Number of States attached to the message.

### getObject()

> **getObject**(accessor: EntityDeclaration) -> Any

Return an Object value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

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

> **getString**(accessor: EntityDeclaration) -> str

Return a String typed value from a message field.

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

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

- **severity**: Severity

  Severity to check against.

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

> **setBigInteger**(accessor: EntityDeclaration, value: int) -> None

Sets a BigInteger value in a message target field.

```python
big_int = 123  # Python int can handle arbitrarily large integers

message.setBigInteger(dataDictionary.type.Detail.CSV.FIELD, big_int)
```

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

- **value**: int

  A Python int value (which can handle arbitrarily large integers).

#### Returns

None

### setBoolean()

> **setBoolean**(accessor: EntityDeclaration, value: bool) -> None

Sets a Boolean value in a message target field.

```python
message.setBoolean(dataDictionary.type.Detail.CSV.FIELD, True)
```

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

- **value**: bool

  A Python bool value.

#### Returns

None

### setByte()

> **setByte**(accessor: EntityDeclaration, value: Union[int, str]) -> None

Sets a Byte value in a message target field.

```python
message.setByte(dataDictionary.type.Detail.CSV.FIELD, 7)
# or
message.setByte(dataDictionary.type.Detail.CSV.FIELD, 'X')
```

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

- **value**: Union[int, str]

  A value which can be represented as a Byte (0-255 or a single character).

#### Returns

None

### setByteString()

> **setByteString**(accessor: EntityDeclaration, value: bytes) -> None

Sets a ByteString value in a message target field.

```python
b = b"XYZ"  # b is now a Python bytes object

message.setByteString(dataDictionary.type.Detail.CSV.FIELD, b)
```

#### Parameters

- **accessor**: EntityDeclaration

  [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value.

- **value**: bytes

  A Python bytes object.

#### Returns

None

### setCharacter()

> **setCharacter**(accessor: EntityDeclaration, value: str) -> None

Sets a Character value in a message target field.

```python
message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, 'c
