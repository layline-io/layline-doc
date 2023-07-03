---
id: "Message"
title: "Class: Message"
sidebar_label: "Message"
sidebar_position: 0
custom_edit_url: null
---

Events traversing layline.io Workflows are instantiated as a [Message](Message.md).
This class exposes a number of properties and methods to extract and set data within messages.

To understand the anatomy of a message please read the respective [chapter in the documentation](/docs/concept/message/message).

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
onMessage(message) {
    if (message.type.Header) {
        onHeader (message);
    } else if (message.type.Detail) {
        onDetail(message);
    } else if (message.type.Trailer) {
        onDetail(message);
    }

    // send the message on through OUTPUT_PORT of Processor
    stream.emit(OUTPUT_PORT, message);
}
...

```

And this:

```js
...
// Handle a detail record type
onDetail (message) {
    const m = message.data.IOT.MEASUREMENT;

    const VENDOR = Status.getVendorByName('MyVendorLongName');

    if (m < 0) {
         message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_MEASUREMENT', m));
    }
}
...

```
## Definition

## Constructors

### constructor

• **new Message**()

## Properties

### data

• **data**: `object` = `null`

## Methods

### addStatus

▸ **addStatus**(`severity`, `status`, `addToLog?`): `void`

Adds a [Status](Status.md) to a message.
The [Status](Status.md) must have been created with [Status.create](Status#Status.create) or otherwise instantiated.

Example:
```js
 if (error) {
     message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', valueString));
 }
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `severity` | [`Severity`](../enums/Severity.md) | `undefined` | [Severity](../enums/Severity) value. |
| `status` | [`Status`](Status.md) | `undefined` | The [Status](Status.md) which should be added. |
| `addToLog?` | `boolean` | `true` | Signals whether the [Status](Status.md) shall also be added to the log, or not. Will be added by default if not specified. If `true` then the Status will be visible in the Stream Log of the Audit Trail. |

#### Returns

`void`

___

### clone

▸ **clone**(): [`Message`](Message.md)

Creates a full clone of a [Message](Message.md)

```js
clonedMessage = message.clone();
```

#### Returns

[`Message`](Message.md)

A copy of a Message

___

### exists

▸ **exists**(`entityDeclaration`): `boolean`

Checks if a known data structure is recognized within a given [Message](Message.md).
Data structures are spawned into existence by the definition of data formats (Format Assets).
You can test a particular [Message](Message.md) on whether a specific structure is present within
a message by using this method.

This is typically used to check whether a meessage is of a certain type, or not.

Example:
```js
// Get the access path to a structure within the compiled data dictionary
const MY_RECORD_TYPE = dataDictionary.type.MyFormat.Detail;

// Test message against the existence of the data dictionary structure.
if (message.exists(MY_RECORD_TYPE)) {
    ...
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityDeclaration` | [`EntityDeclaration`](EntityDeclaration.md) |

#### Returns

`boolean`

- True, if it exists, else false.

___

### findStatus

▸ **findStatus**(`callback`): [`Status`](Status.md)

Check whether a message carries a specified status.
```js
const VENDOR = Status.getVendorByName('MyVendorLongName');

const foundStatusArray = detail.findStatus(function(status) { ",
     // Code 9 means 'DISCARD'",
     return status.vendorId === VENDOR.id && status.code === 9; ",
 });",
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

[`Status`](Status.md)

- Array of found States. Empty array if nothing found.

___

### getBigInteger

▸ **getBigInteger**(`accessor`): `Uint8Array`

Return a BigInteger typed value from a message field.
Important!: Please note that this method returns a Java object "Big Integer" (a Java native data type).
Because of this you cannot reliably use simple Javascript number operators without risking implicit conversion errors.

Example:
```js
const n = message.getBigInteger(dataDictionary.type.Detail.CSV.A_REALLY_BIG_NUMBER_FIELD);

// Compare BigInteger to another BigInteger
const BigInteger = Java.type("java.math.BigInteger");
x = new BigInteger(123); // x now a java type BigInteger

x == 123; // -> "true", via implicit conversion --> be careful here, because x will be implicitly be converted to JS number and may lose precision
x.equals(123); // -> "false", because comparing different data types (BigInteger / Number)
x.equals(new BigInteger(123)); // -> "true"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

`Uint8Array`

Number in Java native BigInteger type.

___

### getBoolean

▸ **getBoolean**(`accessor`): `Boolean`

Return the Boolean typed value from a message field.
Important!: Please note that this method returns a Java object "Boolean" (a Java native data type).

Example:
```js
const b = message.getBoolean(dataDictionary.type.Detail.CSV.A_BOOLEAN_FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

`Boolean`

Number in Java native Boolean type.

___

### getByte

▸ **getByte**(`accessor`): [`Byte`](../enums/JavaType.md#byte)

Return the Byte typed value from a message field.
Important!: Please note that this method returns a Java object "Byte" (a Java native data type).

Example:
```js
const b = message.getByte(dataDictionary.type.Detail.CSV.A_BYTE_FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

[`Byte`](../enums/JavaType.md#byte)

Java native Byte type.

___

### getByteString

▸ **getByteString**(`accessor`): [`ByteString`](../enums/JavaType.md#bytestring)

Return the ByteString typed value from a message field.
Important!: Please note that this method returns a "ByteString" typed value (a Java native data type).

Example:
```js
const b = message.getByteString(dataDictionary.type.Detail.CSV.FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

[`ByteString`](../enums/JavaType.md#bytestring)

ByteString type.

___

### getCharacter

▸ **getCharacter**(`accessor`): [`Character`](../enums/JavaType.md#character)

Return a Character typed value from a message field.
Important!: Please note that this method returns a "char" typed value (a Java native data type).

Example:
```js
const c = message.getCharacter(dataDictionary.type.Detail.CSV.FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

[`Character`](../enums/JavaType.md#character)

Character in Java native char type.

___

### getCrc64

▸ **getCrc64**(`message`): `string`

Creates a CRC 64 checksum from specified node within a [Message](Message.md).

Example:
```js
const crc64 = message.getCrc64(message.data.CSV);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`MessageNode`](MessageNode.md) | [MessageNode](MessageNode.md) for which to create the CRC64 checksum. |

#### Returns

`string`

CRC 64 checksum

___

### getDateTime

▸ **getDateTime**(`accessor`): [`OffsetDateTime`](../enums/JavaType.md#offsetdatetime)

Return a OffsetDateTime typed value from a message field.
Important!: Please note that this method returns a "[OffsetDateTime](https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html)" typed value (a Java native data type).

Example:
```js
const dt = message.getDateTime(dataDictionary.type.Detail.CSV.FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

[`OffsetDateTime`](../enums/JavaType.md#offsetdatetime)

A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as "2022-12-03T10:15:30+01:00".

___

### getDecimal

▸ **getDecimal**(`accessor`): [`BigDecimal`](../enums/JavaType.md#bigdecimal)

Return a BigDecimal typed value from a message field.
Important!: Please note that this method returns a "BigDecimal" typed value (a Java native data type).

Example:
```js
const dec = message.getDecimal(dataDictionary.type.Detail.CSV.FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

[`BigDecimal`](../enums/JavaType.md#bigdecimal)

BigDecimal in Java native char type.

___

### getDouble

▸ **getDouble**(`accessor`): [`Double`](../enums/JavaType.md#double)

Return a Double typed value from a message field.
Important!: Please note that this method returns a "Double" typed value (a Java native data type).

Example:
```js
const dbl = message.getDouble(dataDictionary.type.Detail.CSV.FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

[`Double`](../enums/JavaType.md#double)

Double in Java native char type.

___

### getInt

▸ **getInt**(`accessor`): [`Integer`](../enums/JavaType.md#integer)

Return a Int typed value from a message field.
Important!: Please note that this method returns a "Integer" typed value (a Java native data type).

Example:
```js
const int = message.getInt(dataDictionary.type.Detail.CSV.FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

[`Integer`](../enums/JavaType.md#integer)

Integer in Java native char type.

___

### getLong

▸ **getLong**(`accessor`): [`Long`](../enums/JavaType.md#long)

Return a Long typed value from a message field.
Important!: Please note that this method returns a "Long" typed value (a Java native data type).

Example:
```js
const l = message.getLong(dataDictionary.type.Detail.CSV.FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

[`Long`](../enums/JavaType.md#long)

Long in Java native char type.

___

### getMessageDigest

▸ **getMessageDigest**(`algorithm?`, `toLowerCase?`, `accessorArray?`): `string`

Returns a calculated digest for a given message
Example:
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

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `algorithm?` | `string` | `undefined` | Algorithm with which to calculate the digest. Currently only supprts "MD5". |
| `toLowerCase?` | `boolean` | `false` | Set to true if digest should be lower-case only. |
| `accessorArray?` | [`EntityDeclaration`](EntityDeclaration.md)[] | `undefined` | Array of [EntityDeclaration](EntityDeclaration.md) on which to calculate the digest. |

#### Returns

`string`

___

### getNumStatusAttached

▸ **getNumStatusAttached**(): `void`

Gets the number of States [Status](Status.md) attached.

```js
const result = message.getNumStatusAttached();
```

#### Returns

`void`

- Number of States attached to the message.

___

### getObject

▸ **getObject**(`accessor`): `Object`

Return a Object value a message field.

Example:
```js
const o = message.getObject(dataDictionary.type.Detail.CSV.FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

`Object`

Object in Java native char type.

___

### getStatus

▸ **getStatus**(`index`): [`Status`](Status.md)

Retrieves a Status by index from the list of States attached to a message.
A message keeps track of related States in a Status array attached to it.
This list may be empty or filled with one more States.

Example:
```js
// Retrieve the first Status from the list of States attached to the message.
const status = message.getStatus(0);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index of Status to retrieve. |

#### Returns

[`Status`](Status.md)

- Status or undefined if no Status found with that index.

___

### getString

▸ **getString**(`accessor`): `String`

Return a String typed value from a message field.

Example:
```js
const l = message.getLong(dataDictionary.type.Detail.CSV.FIELD);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |

#### Returns

`String`

The value as string.

___

### hasStatusAttached

▸ **hasStatusAttached**(`severity`): `void`

Checks if a message has a [Status](Status.md) attached which matches a particular Severity.

```js
const result = message.hasStatusAttached(Severity.ERROR);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `severity` | [`Severity`](../enums/Severity.md) | Severity to check against. |

#### Returns

`void`

- True, if match found, else false.

___

### pack

▸ **pack**(): [`PackedMessage`](PackedMessage.md)

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

___

### setBigInteger

▸ **setBigInteger**(`accessor`, `value`): `void`

Sets a BigInteger value in a message target field.

```js
const BigInteger = Java.type("java.math.BigInteger");
bigInt = new BigInteger(123); // x now a java type BigInteger

message.setBigInteger(dataDictionary.type.Detail.CSV.FIELD, bigInt)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | `Uint8Array` | A native BigInteger value or a value which can be implicitly converted to such. |

#### Returns

`void`

___

### setBoolean

▸ **setBoolean**(`accessor`, `value`): `void`

Sets a Boolean value in a message target field.

```js
message.setBoolean(dataDictionary.type.Detail.CSV.FIELD, true)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | `Boolean` | A native Byte value or a value which can be implicitly converted to such. |

#### Returns

`void`

___

### setByte

▸ **setByte**(`accessor`, `value`): `void`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | `string` \| `number` | A native Byte value or a value which can be implicitly converted to such. |

#### Returns

`void`

___

### setByteString

▸ **setByteString**(`accessor`, `value`): `void`

Sets a ByteString value in a message target field.

```js
const ByteString = Java.type("java.math.ByteString");
b = new ByteString("XYZ"); // b now a java type ByteString

message.setByteString(dataDictionary.type.Detail.CSV.FIELD, b)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | `string` | A native ByteString value or a value which can be implicitly converted to such. |

#### Returns

`void`

___

### setCharacter

▸ **setCharacter**(`accessor`, `value`): `void`

Sets a Character value in a message target field.

```js
message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, 'c')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | [`Character`](../enums/JavaType.md#character) | A native Character value or a value which can be implicitly converted to such. |

#### Returns

`void`

___

### setDateTime

▸ **setDateTime**(`accessor`, `value`): `void`

Sets a OffsetDateTime value in a message target field.

```js
message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, "2022-12-03T10:15:30+01:00")
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | [`OffsetDateTime`](../enums/JavaType.md#offsetdatetime) | A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as "2022-12-03T10:15:30+01:00". |

#### Returns

`void`

___

### setDecimal

▸ **setDecimal**(`accessor`, `value`): `void`

Sets a Decimal value in a message target field.
Internally represented as a Java BigDecimal.
Will try to infer result from passed value.

```js
message.setDecimal(dataDictionary.type.Detail.CSV.FIELD, 123.45)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | [`BigDecimal`](../enums/JavaType.md#bigdecimal) \| [`BigInteger`](../enums/JavaType.md#biginteger) \| [`Double`](../enums/JavaType.md#double) \| [`Integer`](../enums/JavaType.md#integer) \| [`Long`](../enums/JavaType.md#long) \| [`Number`](../enums/JavaType.md#number) \| [`String`](../enums/JavaType.md#string) | A value which can be represented as a Decimal. |

#### Returns

`void`

___

### setDouble

▸ **setDouble**(`accessor`, `value`): `void`

Sets a Double value in a message target field.
Internally represented as a Java Double.
Will try to infer result from passed value.

```js
message.setDouble(dataDictionary.type.Detail.CSV.FIELD, 123.45)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | `Number` \| [`BigDecimal`](../enums/JavaType.md#bigdecimal) \| [`BigInteger`](../enums/JavaType.md#biginteger) \| [`Double`](../enums/JavaType.md#double) \| [`Integer`](../enums/JavaType.md#integer) \| [`Long`](../enums/JavaType.md#long) \| [`String`](../enums/JavaType.md#string) | A value which can be represented as a Double. |

#### Returns

`void`

___

### setInt

▸ **setInt**(`accessor`, `value`): `void`

Sets a Int value in a message target field.
Internally represented as a Java Int.
Will try to infer result from passed value.

```js
message.setInt(dataDictionary.type.Detail.CSV.FIELD, 123)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | `Number` \| `Uint8Array` \| [`BigDecimal`](../enums/JavaType.md#bigdecimal) \| [`Double`](../enums/JavaType.md#double) \| [`Integer`](../enums/JavaType.md#integer) \| [`Long`](../enums/JavaType.md#long) \| [`String`](../enums/JavaType.md#string) | A value which can be represented as a Int. |

#### Returns

`void`

___

### setLong

▸ **setLong**(`accessor`, `value`): `void`

Sets a Long value in a message target field.
Internally represented as a Java Long.
Will try to infer result from passed value.

```js
message.setLong(dataDictionary.type.Detail.CSV.FIELD, 12345)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | [`BigDecimal`](../enums/JavaType.md#bigdecimal) \| [`BigInteger`](../enums/JavaType.md#biginteger) \| [`Double`](../enums/JavaType.md#double) \| [`Integer`](../enums/JavaType.md#integer) \| [`Long`](../enums/JavaType.md#long) \| [`Number`](../enums/JavaType.md#number) \| [`String`](../enums/JavaType.md#string) | A value which can be represented as a Long. |

#### Returns

`void`

___

### setObject

▸ **setObject**(`accessor`, `value`): `void`

Sets a Object value in a message target field.

```js
const obj = [1, 2, 3, 4, 5];
message.setObject(dataDictionary.type.Detail.CSV.FIELD, obj)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | `Object` | A value which can be represented as a Object. |

#### Returns

`void`

___

### setString

▸ **setString**(`accessor`, `value`): `void`

Sets a Object value in a message target field.

```js
message.setString(dataDictionary.type.Detail.CSV.FIELD, "XYZ")
// or simply
message.data.CSV.FIELD = "XYZ"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessor` | [`EntityDeclaration`](EntityDeclaration.md) | [EntityDeclaration](EntityDeclaration.md) describing the access path to the field value. |
| `value` | `Object` | A value which can be represented as a String. |

#### Returns

`void`

___

### toString

▸ **toString**(): `void`

Returns the message in a string representation.

Example:
```js
stream.logInfo("Current message: " + message.toString());
```

#### Returns

`void`
