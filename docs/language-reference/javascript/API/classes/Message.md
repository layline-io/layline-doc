---
description: 'Message class is the central data structure in layline.io. Every event that flows through a workflow is encapsulated as a Message — a typed envelope carryi...'
---

# Message

The `Message` class is the central data structure in layline.io. Every event that flows through a workflow is encapsulated as a Message — a typed envelope carrying structured data, metadata, and a history of processing status.

In every JavaScript processor, the current message is available as the global variable `message`. No import or setup required.

---

## At a Glance

```js
export function onMessage() {
    // Every message has an identity, a type, and data
    stream.logInfo(`Processing message ${message.id} of type "${message.typeName}"`);

    // Branch by message type
    if (message.typeName === 'Header') {
        onHeader(message);
    } else if (message.typeName === 'Detail') {
        onDetail(message);
    }

    // Forward to the next processor
    stream.emit(message, OUTPUT_PORT);
}
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`data`](#data) | `Object` | The message payload — a nested object reflecting your data dictionary structure |
| [`id`](#id) | `string` | Unique message identifier (e.g., `"1"`, `"1.1"`, `"1.2"` for clones) |
| [`typeName`](#typename) | `string` | The data dictionary type this message represents |

### data

The message payload. Its structure mirrors the data dictionary definition for this message type.

```js
// Read nested fields directly
const productName = message.data.PRODUCT.NAME;
const price       = message.data.PRODUCT.PRICE;

// Create a new message and populate it
const detail = dataDictionary.createMessage(dataDictionary.type.Detail);
detail.data.PRODUCT = {
    RECORD_TYPE : "D",
    ID          : message.data.Id,
    NAME        : message.data.Name,
    PRICE       : message.data.Price,
};

stream.emit(detail, OUTPUT_PORT);
```

### id

A unique identifier assigned to each message. The first message in a stream is `"1"`, the second `"2"`, and so on. When you [clone](#clone) a message, the clone gets a suffix: `"1.1"`, `"1.2"`, etc.

```js
const id = message.id;  // "42" or "42.3"
```

### typeName

The name of the data dictionary type this message was created from. Use this to branch your processing logic.

```js
if (message.typeName === 'MyType') {
    // Handle this specific type
}
```

---

## Type Checking

### is(type)

Check if a message matches a specific data dictionary type.

```js
if (message.is(dataDictionary.type.Detail.CSV)) {
    // Message is a Detail CSV record
}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | [`DataDictionaryEntity`](DataDictionaryEntity.md) | The type to check against |

**Returns:** `boolean`

### exists(entity)

Check if a specific data structure is present within the message. Useful when a format defines optional structures.

```js
const recordType = dataDictionary.type.MyFormat.Detail;

if (message.exists(recordType)) {
    // This message contains a Detail structure
}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `entity` | [`DataDictionaryEntity`](DataDictionaryEntity.md) | Path to the structure to test |

**Returns:** `boolean`

---

## Reading Data

Message fields are accessed through typed getter methods. Each method takes a [`DataDictionaryEntity`](DataDictionaryEntity.md) that describes the path to the field.

### Text & Boolean

| Method | Returns | Description |
|--------|---------|-------------|
| `getString(entity)` | `String` | Read a string value |
| `getBoolean(entity)` | `boolean` | Read a boolean value |

```js
const name     = message.getString(dataDictionary.type.Detail.CSV.NAME);
const isActive = message.getBoolean(dataDictionary.type.Detail.CSV.IS_ACTIVE);
```

### Numbers: Which Type to Use?

| Method | Returns | Java Type | Use When... |
|--------|---------|-----------|-------------|
| `getInt(entity)` | `Integer` | `java.lang.Integer` | Whole number, -2 billion to +2 billion |
| `getLong(entity)` | `Long` | `java.lang.Long` | Whole number, larger than 2 billion |
| `getDouble(entity)` | `Double` | `java.lang.Double` | Floating point, precision not critical |
| `getDecimal(entity)` | `BigDecimal` | `java.math.BigDecimal` | Decimal with exact precision (money, rates) |
| `getBigInteger(entity)` | `BigInteger` | `java.math.BigInteger` | Arbitrary-size whole numbers |

```js
const count     = message.getInt(dataDictionary.type.Order.QUANTITY);
const timestamp = message.getLong(dataDictionary.type.Order.TS_EPOCH);
const price     = message.getDecimal(dataDictionary.type.Order.UNIT_PRICE);
```

:::caution Java Native Types
`getBigInteger()`, `getDecimal()`, `getLong()`, and `getDouble()` return Java native types — not JavaScript numbers. Simple operators may trigger implicit conversion and lose precision.

Use `.equals()` for comparisons and type-specific methods for math:

```js
const BigInteger = Java.type("java.math.BigInteger");
const x = new BigInteger("9007199254740993");

x == 9007199254740993;        // ⚠️ true (but precision lost!)
x.equals(9007199254740993);   // false — different types
x.equals(new BigInteger("9007199254740993")); // true ✓
```
:::

### Date & Time

| Method | Returns | Description |
|--------|---------|-------------|
| `getDate(entity)` | [`LocalDate`](LocalDate.md) | Date without timezone (e.g., `2024-03-15`) |
| `getDateTime(entity)` | [`DateTime`](DateTime.md) | Date-time with UTC offset (e.g., `2024-03-15T10:30:00+01:00`) |

```js
const birthDate = message.getDate(dataDictionary.type.Customer.BIRTH_DATE);
const createdAt = message.getDateTime(dataDictionary.type.Order.CREATED_AT);
```

### Binary & Specialized

| Method | Returns | Description |
|--------|---------|-------------|
| `getByte(entity)` | `Byte` | Single byte value |
| `getByteString(entity)` | `ByteString` | Byte array as string |
| `getCharacter(entity)` | `Character` | Single character |
| `getObject(entity)` | `Object` | Generic object (use sparingly) |

### Checksums

| Method | Returns | Description |
|--------|---------|-------------|
| `getCrc64(entity)` | `string` | CRC-64 checksum of the specified node |
| `getMessageDigest(algorithm?, toLowerCase?, accessors?)` | `string` | MD5 digest of full or partial message |

```js
// CRC-64 of a specific structure
const crc = message.getCrc64(message.data.CSV);

// MD5 of the entire message
const digest = message.getMessageDigest();

// MD5 of selected fields only
const fields = [
    dataDictionary.type.Detail.CSV.RECORD_TYPE,
    dataDictionary.type.Detail.CSV.LAST_NAME,
    dataDictionary.type.Detail.CSV.FIRST_NAME
];
const partialDigest = message.getMessageDigest("MD5", true, fields);
```

---

## Writing Data

All setters follow the same pattern: `setX(entity, value)`. The `value` can often be a JavaScript primitive — layline.io handles the conversion.

### Quick Reference

| Category | Setter | Accepts | Example |
|----------|--------|---------|---------|
| **Text** | `setString(entity, value)` | `string` | `message.setString(path, "Hello")` |
| | `setCharacter(entity, value)` | `string` (single char) | `message.setCharacter(path, 'A')` |
| | `setByteString(entity, value)` | `string` | `message.setByteString(path, "XYZ")` |
| **Boolean** | `setBoolean(entity, value)` | `boolean` | `message.setBoolean(path, true)` |
| **Numbers** | `setInt(entity, value)` | `number`, `String`, various | `message.setInt(path, 42)` |
| | `setLong(entity, value)` | `number`, `String`, various | `message.setLong(path, 9999999999)` |
| | `setDouble(entity, value)` | `number`, `String`, various | `message.setDouble(path, 3.14159)` |
| | `setDecimal(entity, value)` | `number`, `String`, various | `message.setDecimal(path, 123.45)` |
| | `setBigInteger(entity, value)` | `BigInteger`, convertible | `message.setBigInteger(path, bigInt)` |
| **Binary** | `setByte(entity, value)` | `number`, `string` | `message.setByte(path, 7)` |
| **Date/Time** | `setDate(entity, value)` | [`LocalDate`](LocalDate.md) | `message.setDate(path, localDate)` |
| | `setDateTime(entity, value)` | [`DateTime`](DateTime.md) | `message.setDateTime(path, dt)` |
| **Generic** | `setObject(entity, value)` | `Object` | `message.setObject(path, [1, 2, 3])` |

### Direct Assignment Shortcut

For simple cases, assign directly via `data`:

```js
// These are equivalent:
message.setString(dataDictionary.type.Detail.CSV.NAME, "Acme Corp");
message.data.CSV.NAME = "Acme Corp";
```

---

## Status Management

Messages carry a [`Status`](Status.md) array that tracks processing events — errors, warnings, or custom business states.

### Adding Status

```js
const VENDOR = Status.getVendorByName('MyVendor');

if (measurement < 0) {
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_MEASUREMENT', measurement));
}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `severity` | [`Severity`](../enumerations/Severity.md) | `INFO`, `WARNING`, `ERROR`, etc. |
| `status` | [`Status`](Status.md) | The status object to attach |
| `addToLog` | `boolean` (default: `true`) | Also log to the audit trail? |

### Querying Status

| Method | Returns | Description |
|--------|---------|-------------|
| `numStatusAttached()` | `number` | Count of attached statuses |
| `hasStatusAttached(severity?)` | `boolean` | Check for any (or specific severity) status |
| `getStatus(index)` | [`Status`](Status.md) \| `undefined` | Get status by index |
| `findStatus(filter)` | [`Status`](Status.md)[] | Find statuses matching a filter |

```js
// Check for errors
if (message.hasStatusAttached(Severity.ERROR)) {
    stream.logError("Message has errors — routing to failure port");
    stream.emit(message, ERROR_PORT);
    return;
}

// Find all warnings
const warnings = message.findStatus(Severity.WARNING);
warnings.forEach(s => stream.logWarn(`${s.code}: ${s.message}`));

// Find statuses from a specific vendor
const vendorStatuses = message.findStatus(VENDOR);

// Custom filter
const critical = message.findStatus(s => s.code === 'CRITICAL');
```

---

## Message Lifecycle

### clone()

Creates a deep copy of the message with a new ID suffix.

```js
const original = message;           // id: "5"
const copy = message.clone();       // id: "5.1"
const another = message.clone();    // id: "5.2"
```

**Returns:** `Message` — the cloned instance

### pack()

Compresses the message into a memory-efficient [`PackedMessage`](PackedMessage.md) for storage or transmission.

```js
const packed = message.pack();      // Compact representation
const restored = packed.unpack();   // Back to full Message
```

**Returns:** [`PackedMessage`](PackedMessage.md)

### commit()

Acknowledges successful processing. Behavior depends on the source:

- **SQS:** Deletes the message from the queue
- **Kafka:** Commits the consumer offset
- **File:** Marks the file as processed

```js
try {
    processMessage(message);
    message.commit();  // Acknowledge success
} catch (err) {
    // Don't commit — message will be redelivered
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'PROCESSING_FAILED', err));
}
```

**Returns:** `Message` (supports chaining)

---

## Serialization

| Method | Returns | Description |
|--------|---------|-------------|
| `toJson()` | `string` | JSON representation of the message |
| `toString()` | `string` | Human-readable string representation |

```js
stream.logInfo("Received: " + message.toJson());
stream.logDebug("Message dump: " + message.toString());
```

---

## Complete Example

A realistic order processor demonstrating type checking, field access, validation, cloning, and status:

```js
export function onMessage() {
    // Only process Detail records
    if (!message.is(dataDictionary.type.Order.Detail)) {
        stream.emit(message, OUTPUT_PORT);
        return;
    }

    // Extract fields
    const orderId   = message.getString(dataDictionary.type.Order.Detail.ORDER_ID);
    const quantity  = message.getInt(dataDictionary.type.Order.Detail.QUANTITY);
    const unitPrice = message.getDecimal(dataDictionary.type.Order.Detail.UNIT_PRICE);

    stream.logInfo(`Processing order ${orderId} (message ${message.id})`);

    // Business validation
    const VENDOR = Status.getVendorByName('OrderValidation');

    if (quantity <= 0) {
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'INVALID_QUANTITY', quantity));
    }

    if (unitPrice.compareTo(new BigDecimal("0")) <= 0) {
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'INVALID_PRICE', unitPrice));
    }

    // If valid, enrich and clone for fulfillment
    if (!message.hasStatusAttached(Severity.ERROR)) {
        const total = unitPrice.multiply(new BigDecimal(quantity));
        message.setDecimal(dataDictionary.type.Order.Detail.TOTAL, total);

        // Clone for parallel fulfillment pipeline
        const fulfillment = message.clone();
        stream.emit(fulfillment, FULFILLMENT_PORT);
    }

    // Always emit original for audit trail
    stream.emit(message, OUTPUT_PORT);
}
```

---

## Common Pitfalls

| Problem | Cause | Solution |
|---------|-------|----------|
| `getLong()` returns a Java object, not a JS number | Long exceeds JS safe integer range | Use `.longValue()` or treat as Java `Long` |
| `getDecimal()` comparison with `===` fails | Returns `BigDecimal`, not primitive | Use `.compareTo()` or `.equals()` |
| Field appears missing | Optional structure not present in this message | Use [`exists()`](#existsentity) before accessing |
| `message.data.X = Y` doesn't persist | Direct assignment bypasses type validation | Use `setX()` methods for type safety |
| Status not visible in audit trail | `addToLog` parameter set to `false` | Omit the parameter (defaults to `true`) |

---

## See Also

- [`DataDictionary`](DataDictionary.md) — Create messages from dictionary definitions
- [`DataDictionaryEntity`](DataDictionaryEntity.md) — Type-safe field accessors
- [`Status`](Status.md) & [`Severity`](../enumerations/Severity.md) — Message status tracking
- [`PackedMessage`](PackedMessage.md) — Compact message serialization
