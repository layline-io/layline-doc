---
id: py-Message
---

# Message

The `Message` class is the central data structure in layline.io. Every event that flows through a workflow is encapsulated as a Message — a typed envelope carrying structured data, metadata, and a history of processing status.

In every Python processor, the current message is available as the global variable `message`. No import or setup required.

---

## At a Glance

```python
def on_message():
    # Every message has an identity, a type, and data
    stream.log_info(f"Processing message {message.id} of type '{message.typeName}'")

    # Branch by message type
    if message.typeName == 'Header':
        on_header(message)
    elif message.typeName == 'Detail':
        on_detail(message)

    # Forward to the next processor
    stream.emit(message, OUTPUT_PORT)
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| [`data`](#data) | `object` | The message payload — a nested object reflecting your data dictionary structure |
| [`id`](#id) | `str` | Unique message identifier (e.g., `"1"`, `"1.1"`, `"1.2"` for clones) |
| [`typeName`](#typename) | `str` | The data dictionary type this message represents |

### data

The message payload. Its structure mirrors the data dictionary definition for this message type.

```python
# Read nested fields directly
product_name = message.data.PRODUCT.NAME
price = message.data.PRODUCT.PRICE

# Create a new message and populate it
detail = dataDictionary.createMessage(dataDictionary.type.Detail)
detail.data.PRODUCT = {
    "RECORD_TYPE": "D",
    "ID": message.data.Id,
    "NAME": message.data.Name,
    "PRICE": message.data.Price,
}

stream.emit(detail, OUTPUT_PORT)
```

### id

A unique identifier assigned to each message. The first message in a stream is `"1"`, the second `"2"`, and so on. When you [clone](#clone) a message, the clone gets a suffix: `"1.1"`, `"1.2"`, etc.

```python
msg_id = message.id  # "42" or "42.3"
```

### typeName

The name of the data dictionary type this message was created from. Use this to branch your processing logic.

```python
if message.typeName == 'MyType':
    # Handle this specific type
    pass
```

---

## Type Checking

### is(type)

Check if a message matches a specific data dictionary type.

```python
if message.is(dataDictionary.type.Detail.CSV):
    # Message is a Detail CSV record
    pass
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | [`DataDictionaryEntity`](DataDictionaryEntity.md) | The type to check against |

**Returns:** `bool`

### exists(entity)

Check if a specific data structure is present within the message. Useful when a format defines optional structures.

```python
record_type = dataDictionary.type.MyFormat.Detail

if message.exists(record_type):
    # This message contains a Detail structure
    pass
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `entity` | [`DataDictionaryEntity`](DataDictionaryEntity.md) | Path to the structure to test |

**Returns:** `bool`

---

## Reading Data

Message fields are accessed through typed getter methods. Each method takes a [`DataDictionaryEntity`](DataDictionaryEntity.md) that describes the path to the field.

### Text & Boolean

| Method | Returns | Description |
|--------|---------|-------------|
| `getString(entity)` | `str` | Read a string value |
| `getBoolean(entity)` | `bool` | Read a boolean value |

```python
name = message.getString(dataDictionary.type.Detail.CSV.NAME)
is_active = message.getBoolean(dataDictionary.type.Detail.CSV.IS_ACTIVE)
```

### Numbers

| Method | Returns | Python Type | Use When... |
|--------|---------|-------------|-------------|
| `getInt(entity)` | `int` | `int` | Whole number, typical range |
| `getLong(entity)` | `int` | `int` | Whole number, larger range |
| `getDouble(entity)` | `float` | `float` | Floating point, precision not critical |
| `getDecimal(entity)` | `Decimal` | `Decimal` | Decimal with exact precision (money, rates) |
| `getBigInteger(entity)` | `int` | `int` | Arbitrary-size whole numbers |

```python
from decimal import Decimal

count = message.getInt(dataDictionary.type.Order.QUANTITY)
timestamp = message.getLong(dataDictionary.type.Order.TS_EPOCH)
price = message.getDecimal(dataDictionary.type.Order.UNIT_PRICE)
```

:::tip Python Integers
`getBigInteger()` and `getLong()` return Python `int` objects, which have arbitrary precision. No special handling needed.
:::

### Date & Time

| Method | Returns | Description |
|--------|---------|-------------|
| `getDate(entity)` | [`LocalDate`](LocalDate.md) | Date without timezone (e.g., `2024-03-15`) |
| `getDateTime(entity)` | [`DateTime`](DateTime.md) | Date-time with UTC offset (e.g., `2024-03-15T10:30:00+01:00`) |

```python
birth_date = message.getDate(dataDictionary.type.Customer.BIRTH_DATE)
created_at = message.getDateTime(dataDictionary.type.Order.CREATED_AT)
```

### Binary & Specialized

| Method | Returns | Description |
|--------|---------|-------------|
| `getByte(entity)` | `int` | Single byte value (0-255) |
| `getByteString(entity)` | `bytes` | Byte array |
| `getCharacter(entity)` | `str` | Single character |
| `getObject(entity)` | `Any` | Generic object (use sparingly) |

### Checksums

| Method | Returns | Description |
|--------|---------|-------------|
| `getCrc64(node)` | `str` | CRC-64 checksum of the specified node |
| `getMessageDigest(algorithm?, to_lower_case?, accessors?)` | `str` | MD5 digest of full or partial message |

```python
# CRC-64 of a specific structure
crc = message.getCrc64(message.data.CSV)

# MD5 of the entire message
digest = message.getMessageDigest()

# MD5 of selected fields only
fields = [
    dataDictionary.type.Detail.CSV.RECORD_TYPE,
    dataDictionary.type.Detail.CSV.LAST_NAME,
    dataDictionary.type.Detail.CSV.FIRST_NAME
]
partial_digest = message.getMessageDigest("MD5", True, fields)
```

---

## Writing Data

All setters follow the same pattern: `setX(entity, value)`. The `value` can often be a Python primitive — layline.io handles the conversion.

### Quick Reference

| Category | Setter | Accepts | Example |
|----------|--------|---------|---------|
| **Text** | `setString(entity, value)` | `str` | `message.setString(path, "Hello")` |
| | `setCharacter(entity, value)` | `str` (single char) | `message.setCharacter(path, 'A')` |
| | `setByteString(entity, value)` | `bytes` | `message.setByteString(path, b"XYZ")` |
| **Boolean** | `setBoolean(entity, value)` | `bool` | `message.setBoolean(path, True)` |
| **Numbers** | `setInt(entity, value)` | `int` | `message.setInt(path, 42)` |
| | `setLong(entity, value)` | `int` | `message.setLong(path, 9999999999)` |
| | `setDouble(entity, value)` | `float` | `message.setDouble(path, 3.14159)` |
| | `setDecimal(entity, value)` | `Decimal`, `str`, `float` | `message.setDecimal(path, Decimal("123.45"))` |
| | `setBigInteger(entity, value)` | `int` | `message.setBigInteger(path, 9007199254740993)` |
| **Binary** | `setByte(entity, value)` | `int`, `str` | `message.setByte(path, 7)` |
| **Date/Time** | `setDate(entity, value)` | [`LocalDate`](LocalDate.md) | `message.setDate(path, local_date)` |
| | `setDateTime(entity, value)` | [`DateTime`](DateTime.md) | `message.setDateTime(path, dt)` |
| **Generic** | `setObject(entity, value)` | `Any` | `message.setObject(path, [1, 2, 3])` |

### Direct Assignment Shortcut

For simple cases, assign directly via `data`:

```python
# These are equivalent:
message.setString(dataDictionary.type.Detail.CSV.NAME, "Acme Corp")
message.data.CSV.NAME = "Acme Corp"
```

---

## Status Management

Messages carry a [`Status`](Status.md) array that tracks processing events — errors, warnings, or custom business states.

### Adding Status

```python
VENDOR = Status.getVendorByName('MyVendor')

if measurement < 0:
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_MEASUREMENT', measurement))
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `severity` | [`Severity`](../enumerations/Severity.md) | `INFO`, `WARNING`, `ERROR`, etc. |
| `status` | [`Status`](Status.md) | The status object to attach |
| `add_to_log` | `bool` (default: `True`) | Also log to the audit trail? |

### Querying Status

| Method | Returns | Description |
|--------|---------|-------------|
| `numStatusAttached()` | `int` | Count of attached statuses |
| `hasStatusAttached(severity?)` | `bool` | Check for any (or specific severity) status |
| `getStatus(index)` | [`Status`](Status.md) \| `None` | Get status by index |
| `findStatus(filter)` | `List[Status]` | Find statuses matching a filter |

```python
# Check for errors
if message.hasStatusAttached(Severity.ERROR):
    stream.log_error("Message has errors — routing to failure port")
    stream.emit(message, ERROR_PORT)
    return

# Find all warnings
warnings = message.findStatus(Severity.WARNING)
for s in warnings:
    stream.log_warn(f"{s.code}: {s.message}")

# Find statuses from a specific vendor
vendor_statuses = message.findStatus(VENDOR)

# Custom filter
critical = message.findStatus(lambda s: s.code == 'CRITICAL')
```

---

## Message Lifecycle

### clone()

Creates a deep copy of the message with a new ID suffix.

```python
original = message           # id: "5"
copy = message.clone()       # id: "5.1"
another = message.clone()    # id: "5.2"
```

**Returns:** `Message` — the cloned instance

### pack()

Compresses the message into a memory-efficient [`PackedMessage`](PackedMessage.md) for storage or transmission.

```python
packed = message.pack()      # Compact representation
restored = packed.unpack()   # Back to full Message
```

**Returns:** [`PackedMessage`](PackedMessage.md)

### commit()

Acknowledges successful processing. Behavior depends on the source:

- **SQS:** Deletes the message from the queue
- **Kafka:** Commits the consumer offset
- **File:** Marks the file as processed

```python
try:
    process_message(message)
    message.commit()  # Acknowledge success
except Exception as err:
    # Don't commit — message will be redelivered
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'PROCESSING_FAILED', str(err)))
```

**Returns:** `Message` (supports chaining)

---

## Serialization

| Method | Returns | Description |
|--------|---------|-------------|
| `toJson()` | `str` | JSON representation of the message |
| `toString()` | `str` | Human-readable string representation |

```python
stream.log_info("Received: " + message.toJson())
stream.log_debug("Message dump: " + message.toString())
```

---

## Complete Example

A realistic order processor demonstrating type checking, field access, validation, cloning, and status:

```python
from decimal import Decimal

def on_message():
    # Only process Detail records
    if not message.is(dataDictionary.type.Order.Detail):
        stream.emit(message, OUTPUT_PORT)
        return

    # Extract fields
    order_id = message.getString(dataDictionary.type.Order.Detail.ORDER_ID)
    quantity = message.getInt(dataDictionary.type.Order.Detail.QUANTITY)
    unit_price = message.getDecimal(dataDictionary.type.Order.Detail.UNIT_PRICE)

    stream.log_info(f"Processing order {order_id} (message {message.id})")

    # Business validation
    VENDOR = Status.getVendorByName('OrderValidation')

    if quantity <= 0:
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'INVALID_QUANTITY', quantity))

    if unit_price <= Decimal("0"):
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'INVALID_PRICE', str(unit_price)))

    # If valid, enrich and clone for fulfillment
    if not message.hasStatusAttached(Severity.ERROR):
        total = unit_price * quantity
        message.setDecimal(dataDictionary.type.Order.Detail.TOTAL, total)

        # Clone for parallel fulfillment pipeline
        fulfillment = message.clone()
        stream.emit(fulfillment, FULFILLMENT_PORT)

    # Always emit original for audit trail
    stream.emit(message, OUTPUT_PORT)
```

---

## Common Pitfalls

| Problem | Cause | Solution |
|---------|-------|----------|
| Field appears missing | Optional structure not present in this message | Use [`exists()`](#existsentity) before accessing |
| `getDecimal()` returns `Decimal`, not `float` | Mixing with `float` causes comparison issues | Use `Decimal()` for comparisons: `d == Decimal("0.1")` |
| `message.data.X = Y` doesn't persist | Direct assignment bypasses type validation | Use `setX()` methods for type safety |
| Status not visible in audit trail | `add_to_log` parameter set to `False` | Omit the parameter (defaults to `True`) |

---

## See Also

- [`DataDictionary`](DataDictionary.md) — Create messages from dictionary definitions
- [`DataDictionaryEntity`](DataDictionaryEntity.md) — Type-safe field accessors
- [`Status`](Status.md) & [`Severity`](../enumerations/Severity.md) — Message status tracking
- [`PackedMessage`](PackedMessage.md) — Compact message serialization
