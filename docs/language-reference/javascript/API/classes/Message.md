# Message

Events traversing layline.io Workflows are instantiated as a Message.
This class exposes a number of properties and methods to extract and set data within messages.

To understand the anatomy of a message please read the respective [chapter in the documentation](/docs/concept/data-dictionary).

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

Then in a Javascript processor we can do this:

```js
...
export function onMessage() {
    if (message.typeName === 'Header') {
        onHeader (message);
    } else if (message.typeName === 'Detail') {
        onDetail(message);
    } else if (message.typeName === 'Trailer') {
        onDetail(message);
    }

    // send the message on through OUTPUT_PORT of Processor
    stream.emit(message, OUTPUT_PORT);
}
...

```

And this:

```js
...
// Handle a detail record type
function onDetail (message) {
    const m = message.data.IOT.MEASUREMENT;

    const VENDOR = Status.getVendorByName('MyVendorLongName');

    if (m < 0) {
         message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_MEASUREMENT', m));
    }
}
...

```

## Properties

### data

> **data**: `Object`

The data of the message.
It is a nested object structure that reflects the structure of the data dictionary of this message.

#### Example

```js
// Create Detail
const detailMessage = dataDictionary.createMessage(dataDictionary.type.Detail);
detailMessage.data.PRODUCT = {
    RECORD_TYPE       : "D",
    ID                : message.data.Id,
    CODE              : message.data.Code,
    NAME              : message.data.Name,
    CATEGORY          : message.data.Category,
    PRICE             : message.data.Price,
    STOCK_QUANTITY    : message.data.StockQuantity,
    COLOR             : message.data.Color,
    LAUNCH_DATE       : message.data.LaunchDate,
}
// stream.logInfo(f"detailMessage: {detailMessage.toJson()})")
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

```js
// Accessing the id of a message
const id = message.id;
```

***

### typeName

> **typeName**: `string`

The type name of the message.
This is the name of the data dictionary type that the message represents.

#### Example

```js
const typeName = message.typeName;
// e.g, If in your data dictionary you have a type called "MyType", then this will return "MyType"
if (message.typeName === 'MyType') {
    // do something
}
```

## Methods

### addStatus()

> **addStatus**(`severity`, `status`, `addToLog?`): `void`

Adds a [Status](Status.md) to a message.
The [Status](Status.md) must have been created with [Status.create](Status#create) or otherwise instantiated.

#### Parameters

##### severity

[`Severity`](../enumerations/Severity.md)

[Severity](../enumerations/Severity) value.

##### status

[`Status`](Status.md)

The [Status](Status.md) which should be added.

##### addToLog?

`boolean` = `true`

Signals whether the [Status](Status.md) shall also be added to the log, or not. Will be added by default if not specified.
If `true` then the Status will be visible in the Stream Log of the Audit Trail.

#### Returns

`void`

#### Example

```js
 if (error) {
     message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', valueString));
 }
```

***

### clone()

> **clone**(): `Message`

Creates a full clone of a Message

```js
clonedMessage = message.clone();
```

#### Returns

`Message`

A copy of a Message

***

### commit()

> **commit**(): `Message`

Commits the message, typically used with message queues or streaming platforms.

This method is used to acknowledge the successful processing of a message.
The exact behavior depends on the underlying system:

- For an SQS queue, it deletes the message from the queue.
- For a Kafka topic, it commits the offset of the consumer.

Calling this method indicates that the message has been successfully processed
and should not be redelivered.

#### Returns

`Message`

Returns the message instance for method chaining.

#### Example

```javascript
export function onMessage() {
  try {
    // Process the message
    const result = processMessage(message);

    if (result.success) {
      // If processing was successful, commit the message
      message.commit();
      print("Message processed and committed successfully");
    } else {
      print("Message processing failed, not committing");
    }
  } catch (error) {
    print("Error processing message:", error);
    // In case of an error, you might choose not to commit
    // so that the message can be reprocessed
  }
}

function processMessage(msg) {
  // Implement your message processing logic here
  // Return an object indicating success or failure
}
```

***

### exists()

> **exists**(`type`): `boolean`

Checks if a known data structure is recognized within a given Message.
Data structures are spawned into existence by the definition of data formats (Format Assets).
You can test a particular Message on whether a specific structure is present within
a message by using this method.

This is typically used to check whether a message is of a certain type, or not.

#### Parameters

##### type

[`DataDictionaryEntity`](DataDictionaryEntity.md)

Path to data dictionary structure which you want to test for existence in the message ([DataDictionaryEntity](DataDictionaryEntity.md).)

#### Returns

`boolean`

True, if it exists, else false.

#### Example

```js
// Get the access path to a structure within the compiled data dictionary
const MY_RECORD_TYPE = dataDictionary.type.MyFormat.Detail;

// Test message against the existence of the data dictionary structure.
if (message.exists(MY_RECORD_TYPE)) {
    ...
}
```

***

### findStatus()

> **findStatus**(`value`): [`Status`](Status.md)[]

Finds and returns an array of status entries attached to the message based on the provided filter.

This method allows you to search for status entries using three different approaches:
1. By Vendor: Find all statuses from a specific vendor.
2. By Severity: Find all statuses of a specific severity level.
3. By Custom Function: Use a custom filter function to find statuses based on any criteria.

#### Parameters

##### value

[`Vendor`](Vendor.md) \| [`Severity`](../enumerations/Severity.md) \| ((`status`) => `boolean`)

The filter to apply:
  - If a [Vendor](Vendor.md) is provided, it returns all statuses from that vendor.
  - If a [Severity](../enumerations/Severity.md) is provided, it returns all statuses of that severity level.
  - If a function is provided, it should take a [Status](Status.md) as input and return a boolean.
    The method will return all statuses for which this function returns `true`.

#### Returns

[`Status`](Status.md)[]

An array of Status objects that match the provided filter.
                    Returns an empty array if no matching statuses are found.

#### Examples

```ts
// Finding statuses by Vendor
const VENDOR = Status.getVendorByName('MyVendorName');
const vendorStatuses = message.findStatus(VENDOR);
vendorStatuses.forEach(status => {
    print(`Found status: ${status.code} - ${status.message}`);
});
```

```ts
// Finding statuses by Severity
const errorStatuses = message.findStatus(Severity.ERROR);
if (errorStatuses.length > 0) {
    print(`Message has ${errorStatuses.length} error statuses`);
}
```

```ts
// Finding statuses using a custom filter function
function hasSpecificCode(status) {
    return status.code === "SPECIFIC_CODE";
}
const specificStatuses = message.findStatus(hasSpecificCode);
specificStatuses.forEach(status => {
    print(`Found status with specific code: ${status.message}`);
});
```

```ts
// Using an arrow function for filtering
const highPriorityStatuses = message.findStatus(s => [Severity.WARNING, Severity.ERROR].includes(s.severity));
highPriorityStatuses.forEach(status => {
    print(`High priority status: ${status.severity} - ${status.message}`);
});
```

***

### getBigInteger()

> **getBigInteger**(`entity`): `Uint8Array`

Return a BigInteger typed value from a message field.
Important!: Please note that this method returns a Java object "Big Integer" (a Java native data type).
Because of this you cannot reliably use simple Javascript number operators without risking implicit conversion errors.

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

`Uint8Array`

Number in Java native BigInteger type.

#### Example

```js
const n = message.getBigInteger(dataDictionary.type.Detail.CSV.A_REALLY_BIG_NUMBER_FIELD);

// Compare BigInteger to another BigInteger
const BigInteger = Java.type("java.math.BigInteger");
x = new BigInteger(123); // x now a java type BigInteger

x == 123; // -> "true", via implicit conversion --> be careful here, because x will be implicitly be converted to JS number and may lose precision
x.equals(123); // -> "false", because comparing different data types (BigInteger / Number)
x.equals(new BigInteger(123)); // -> "true"
```

***

### getBoolean()

> **getBoolean**(`entity`): `boolean`

Retrieves a Boolean value from a specific field in the message's data dictionary.

This method accesses a boolean value from the message using the provided data dictionary entity.

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

The data dictionary entity that specifies the path to the boolean value in the message.

#### Returns

`boolean`

The boolean value from the specified field in the message.

#### Example

```ts
// Assuming we have a data dictionary entity for an "isActive" field
const isActiveEntity = dataDictionary.type.MyFormat.Detail.IS_ACTIVE;

// Get the boolean value, defaulting to false if not found
const isActive = message.getBoolean(isActiveEntity);

if (isActive) {
    print("The item is active");
} else {
    print("The item is not active");
}
```

***

### getByte()

> **getByte**(`entity`): [`Byte`](../enumerations/JavaType.md#byte)

Return the Byte typed value from a message field.
Important!: Please note that this method returns a Java object "Byte" (a Java native data type).

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[`Byte`](../enumerations/JavaType.md#byte)

Java native Byte type.

#### Example

```js
const b = message.getByte(dataDictionary.type.Detail.CSV.A_BYTE_FIELD);
```

***

### getByteString()

> **getByteString**(`entity`): [`ByteString`](../enumerations/JavaType.md#bytestring)

Return the ByteString typed value from a message field.
Important!: Please note that this method returns a "ByteString" typed value (a Java native data type).

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[`ByteString`](../enumerations/JavaType.md#bytestring)

ByteString type.

#### Example

```js
const b = message.getByteString(dataDictionary.type.Detail.CSV.FIELD);
```

***

### getCharacter()

> **getCharacter**(`entity`): [`Character`](../enumerations/JavaType.md#character)

Return a Character typed value from a message field.
Important!: Please note that this method returns a "char" typed value (a Java native data type).

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[`Character`](../enumerations/JavaType.md#character)

Character in Java native char type.

#### Example

```js
const c = message.getCharacter(dataDictionary.type.Detail.CSV.FIELD);
```

***

### getCrc64()

> **getCrc64**(`entity`): `string`

Creates a CRC 64 checksum from specified node within a Message.

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) for which to create the CRC64 checksum.

#### Returns

`string`

CRC 64 checksum

#### Example

```js
const crc64 = message.getCrc64(message.data.CSV);
```

***

### getDate()

> **getDate**(`entity`): [`LocalDate`](LocalDate.md)

Return a LocalDate typed value from a message field.
Important!: Please note that this method returns a "[LocalDate](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html)" typed value (a Java native data type).
LocalDate is a date without a time-zone in the ISO-8601 calendar system, such as "2022-12-03".
This method is useful when you need to extract a date from a message field.
If you need to extract a date-time with an offset from UTC/Greenwich, use the [getDateTime](#getdatetime) method instead.

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[`LocalDate`](LocalDate.md)

A date without a time-zone in the ISO-8601 calendar system, such as "2022-12-03".

#### Example

```js
const dt = message.getDate(dataDictionary.type.Detail.CSV.A_DATE_FIELD);
```

***

### getDateTime()

> **getDateTime**(`entity`): [`DateTime`](DateTime.md)

Return a DateTime typed value from a message field.

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[`DateTime`](DateTime.md)

A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as "2022-12-03T10:15:30+01:00".

#### Example

```js
const dt = message.getDateTime(dataDictionary.type.Detail.CSV.FIELD);
```

***

### getDecimal()

> **getDecimal**(`entity`): [`BigDecimal`](../enumerations/JavaType.md#bigdecimal)

Return a BigDecimal typed value from a message field.
Important!: Please note that this method returns a "BigDecimal" typed value (a Java native data type).

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[`BigDecimal`](../enumerations/JavaType.md#bigdecimal)

BigDecimal in Java native char type.

#### Example

```js
const dec = message.getDecimal(dataDictionary.type.Detail.CSV.FIELD);
```

***

### getDouble()

> **getDouble**(`entity`): [`Double`](../enumerations/JavaType.md#double)

Return a Double typed value from a message field.
Important!: Please note that this method returns a "Double" typed value (a Java native data type).

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[`Double`](../enumerations/JavaType.md#double)

Double in Java native char type.

#### Example

```js
const dbl = message.getDouble(dataDictionary.type.Detail.CSV.FIELD);
```

***

### getInt()

> **getInt**(`entity`): [`Integer`](../enumerations/JavaType.md#integer)

Return a Int typed value from a message field.
Important!: Please note that this method returns a "Integer" typed value (a Java native data type).

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[`Integer`](../enumerations/JavaType.md#integer)

Integer in Java native char type.

#### Example

```js
const int = message.getInt(dataDictionary.type.Detail.CSV.FIELD);
```

***

### getLong()

> **getLong**(`entity`): [`Long`](../enumerations/JavaType.md#long)

Return a Long typed value from a message field.
Important!: Please note that this method returns a "Long" typed value (a Java native data type).

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

[`Long`](../enumerations/JavaType.md#long)

Long in Java native char type.

#### Example

```js
const l = message.getLong(dataDictionary.type.Detail.CSV.FIELD);
```

***

### getMessageDigest()

> **getMessageDigest**(`algorithm?`, `toLowerCase?`, `accessorArray?`): `string`

Returns a calculated digest for a given message

#### Parameters

##### algorithm?

`string`

Algorithm with which to calculate the digest. Currently only supprts "MD5".

##### toLowerCase?

`boolean` = `false`

Set to true if digest should be lower-case only.

##### accessorArray?

[`DataDictionaryEntity`](DataDictionaryEntity.md)[]

Array of [DataDictionaryEntity](DataDictionaryEntity.md) on which to calculate the digest.

#### Returns

`string`

#### Example

```js

// Option: 1. Return digest considering complete message content.
// Digest calculation defaults to MD5 hash and no lower case.
const md5DigestFull = message.getMessageDigest();

// Option: 2. Return digest for full message content based on MD5 hash.
// Returned digest will be lower case only.
const md5DigestFullLower = message.getMessageDigest("MD5", true);

// Option: 3. Calculate digest considering specific data structures within message only.
recordAccessorForMD5 = [
    dataDictionary.type.Detail.CSV.RECORD_TYPE,
    dataDictionary.type.Detail.CSV.LAST_NAME,
    dataDictionary.type.Detail.CSV.FIRST_NAME
]

const md5Digest = message.getMessageDigest("MD5", true, recordAccessorForMD5);
```

***

### getObject()

> **getObject**(`entity`): `Object`

Return a Object value a message field.

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

`Object`

Object in Java native char type.

#### Example

```js
const o = message.getObject(dataDictionary.type.Detail.CSV.FIELD);
```

***

### getStatus()

> **getStatus**(`index`): [`Status`](Status.md)

Retrieves a Status by index from the list of States attached to a message.
A message keeps track of related States in a Status array attached to it.
This list may be empty or filled with one more States.

#### Parameters

##### index

`number`

Index of Status to retrieve.

#### Returns

[`Status`](Status.md)

- Status or undefined if no Status found with that index.

#### Example

```js
// Retrieve the first Status from the list of States attached to the message.
const status = message.getStatus(0);
```

***

### getString()

> **getString**(`entity`): `String`

Return a String typed value from a message field.

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

#### Returns

`String`

The value as string.

#### Example

```js
const l = message.getLong(dataDictionary.type.Detail.CSV.FIELD);
```

***

### hasStatusAttached()

> **hasStatusAttached**(`severity?`): `void`

Checks if a message has a [Status](Status.md) attached which matches a particular Severity.

```js
const result = message.hasStatusAttached(Severity.ERROR);
```

#### Parameters

##### severity?

[`Severity`](../enumerations/Severity.md)

Optional severity to check against.

#### Returns

`void`

- True, if match found, else false.

***

### is()

> **is**(`type`): `boolean`

Checks if a message is of a certain type.
This is typically used to check whether a message is of a certain type, or not.

#### Parameters

##### type

[`DataDictionaryEntity`](DataDictionaryEntity.md)

#### Returns

`boolean`

#### Example

```js
// Check if message is of a certain type
if (message.is(dataDictionary.type.Detail.CSV)) {
   ...
   // Do something
   ...
   }
   ```

***

### numStatusAttached()

> **numStatusAttached**(): `number`

Gets the number of States [Status](Status.md) attached.

```js
const result = message.numStatusAttached();
```

#### Returns

`number`

- Number of States attached to the message.

***

### pack()

> **pack**(): [`PackedMessage`](PackedMessage.md)

Packs the message into a memory efficient format.

```js
// Pack message
const packedMsg = message.pack();

// Unpack message
const unpackedMsg = packedMsg.unpack();
```

#### Returns

[`PackedMessage`](PackedMessage.md)

- Packed message.

***

### setBigInteger()

> **setBigInteger**(`entity`, `value`): `void`

Sets a BigInteger value in a message target field.

```js
const BigInteger = Java.type("java.math.BigInteger");
bigInt = new BigInteger(123); // x now a java type BigInteger

message.setBigInteger(dataDictionary.type.Detail.CSV.FIELD, bigInt)
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

`Uint8Array`

A native BigInteger value or a value which can be implicitly converted to such.

#### Returns

`void`

***

### setBoolean()

> **setBoolean**(`entity`, `value`): `void`

Sets a Boolean value in a message target field.

```js
message.setBoolean(dataDictionary.type.Detail.CSV.FIELD, true)
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

`Boolean`

A native Byte value or a value which can be implicitly converted to such.

#### Returns

`void`

***

### setByte()

> **setByte**(`entity`, `value`): `void`

Sets a Byte value in a message target field.

```js
const Byte = Java.type("java.math.Byte");
b = new Byte(123); // b now a java type Byte

message.setByte(dataDictionary.type.Detail.CSV.FIELD, b)
// or
message.setByte(dataDictionary.type.Detail.CSV.FIELD, 7)
// or
message.setByte(dataDictionary.type.Detail.CSV.FIELD, 'X')
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

`string` \| `number`

A native Byte value or a value which can be implicitly converted to such.

#### Returns

`void`

***

### setByteString()

> **setByteString**(`entity`, `value`): `void`

Sets a ByteString value in a message target field.

```js
const ByteString = Java.type("java.math.ByteString");
b = new ByteString("XYZ"); // b now a java type ByteString

message.setByteString(dataDictionary.type.Detail.CSV.FIELD, b)
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

`string`

A native ByteString value or a value which can be implicitly converted to such.

#### Returns

`void`

***

### setCharacter()

> **setCharacter**(`entity`, `value`): `void`

Sets a Character value in a message target field.

```js
message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, 'c')
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

[`Character`](../enumerations/JavaType.md#character)

A native Character value or a value which can be implicitly converted to such.

#### Returns

`void`

***

### setDateTime()

> **setDateTime**(`entity`, `value`): `void`

Sets a DateTime value in a message target field.

```js
message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, "2022-12-03T10:15:30+01:00")
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

[`DateTime`](DateTime.md)

A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as "2022-12-03T10:15:30+01:00".

#### Returns

`void`

***

### setDecimal()

> **setDecimal**(`entity`, `value`): `void`

Sets a Decimal value in a message target field.
Internally represented as a Java BigDecimal.
Will try to infer result from passed value.

```js
message.setDecimal(dataDictionary.type.Detail.CSV.FIELD, 123.45)
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

[`BigDecimal`](../enumerations/JavaType.md#bigdecimal) \| [`BigInteger`](../enumerations/JavaType.md#biginteger) \| [`Double`](../enumerations/JavaType.md#double) \| [`Integer`](../enumerations/JavaType.md#integer) \| [`Long`](../enumerations/JavaType.md#long) \| [`Number`](../enumerations/JavaType.md#number) \| [`String`](../enumerations/JavaType.md#string)

A value which can be represented as a Decimal.

#### Returns

`void`

***

### setDouble()

> **setDouble**(`entity`, `value`): `void`

Sets a Double value in a message target field.
Internally represented as a Java Double.
Will try to infer result from passed value.

```js
message.setDouble(dataDictionary.type.Detail.CSV.FIELD, 123.45)
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

`Number` \| [`BigDecimal`](../enumerations/JavaType.md#bigdecimal) \| [`BigInteger`](../enumerations/JavaType.md#biginteger) \| [`Double`](../enumerations/JavaType.md#double) \| [`Integer`](../enumerations/JavaType.md#integer) \| [`Long`](../enumerations/JavaType.md#long) \| [`String`](../enumerations/JavaType.md#string)

A value which can be represented as a Double.

#### Returns

`void`

***

### setInt()

> **setInt**(`entity`, `value`): `void`

Sets a Int value in a message target field.
Internally represented as a Java Int.
Will try to infer result from passed value.

```js
message.setInt(dataDictionary.type.Detail.CSV.FIELD, 123)
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

`Number` \| `Uint8Array` \| [`BigDecimal`](../enumerations/JavaType.md#bigdecimal) \| [`Double`](../enumerations/JavaType.md#double) \| [`Integer`](../enumerations/JavaType.md#integer) \| [`Long`](../enumerations/JavaType.md#long) \| [`String`](../enumerations/JavaType.md#string)

A value which can be represented as a Int.

#### Returns

`void`

***

### setLong()

> **setLong**(`entity`, `value`): `void`

Sets a Long value in a message target field.
Internally represented as a Java Long.
Will try to infer result from passed value.

```js
message.setLong(dataDictionary.type.Detail.CSV.FIELD, 12345)
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

[`BigDecimal`](../enumerations/JavaType.md#bigdecimal) \| [`BigInteger`](../enumerations/JavaType.md#biginteger) \| [`Double`](../enumerations/JavaType.md#double) \| [`Integer`](../enumerations/JavaType.md#integer) \| [`Long`](../enumerations/JavaType.md#long) \| [`Number`](../enumerations/JavaType.md#number) \| [`String`](../enumerations/JavaType.md#string)

A value which can be represented as a Long.

#### Returns

`void`

***

### setObject()

> **setObject**(`entity`, `value`): `void`

Sets a Object value in a message target field.

```js
const obj = [1, 2, 3, 4, 5];
message.setObject(dataDictionary.type.Detail.CSV.FIELD, obj)
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

`Object`

A value which can be represented as a Object.

#### Returns

`void`

***

### setString()

> **setString**(`entity`, `value`): `void`

Sets a Object value in a message target field.

```js
message.setString(dataDictionary.type.Detail.CSV.FIELD, "XYZ")
// or simply
message.data.CSV.FIELD = "XYZ"
```

#### Parameters

##### entity

[`DataDictionaryEntity`](DataDictionaryEntity.md)

[DataDictionaryEntity](DataDictionaryEntity.md) describing the access path to the field value.

##### value

`Object`

A value which can be represented as a String.

#### Returns

`void`

***

### toJson()

> **toJson**(): `string`

Returns the message in a JSON representation.

#### Returns

`string`

#### Example

```js
const json = message.toJson();
```

***

### toString()

> **toString**(): `void`

Returns the message in a string representation.

#### Returns

`void`

#### Example

```js
stream.logInfo("Current message: " + message.toString());
```
