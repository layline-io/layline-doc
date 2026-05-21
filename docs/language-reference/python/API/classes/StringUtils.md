---
description: >-
  ---.
---

---
id: py-StringUtils
---

# StringUtils

Utility class for common string operations: encoding, decoding, validation, and charset conversion. All methods are static.

---

## At a Glance

```python
# Validation
if StringUtils.isNullOrBlank(message.getString(dataDictionary.type.Customer.EMAIL)):
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'EMAIL_REQUIRED'))

# Encoding
bytes_arr = StringUtils.toBytes("Hello, World!")
base64 = StringUtils.base64Encode(bytes_arr)

# Decoding
decoded = StringUtils.base64Decode(base64)
text = StringUtils.fromBytes(decoded)
```

---

## Validation

| Method | Returns | Description |
|--------|---------|-------------|
| `isNullOrEmpty(value)` | `bool` | True if None or empty string `""` |
| `isNullOrBlank(value)` | `bool` | True if None, empty, or whitespace only |
| `isNumeric(value)` | `bool` | True if string contains only digits (0–9) |

```python
StringUtils.isNullOrEmpty(None)       # True
StringUtils.isNullOrEmpty("")         # True
StringUtils.isNullOrEmpty("  ")       # False

StringUtils.isNullOrBlank(None)       # True
StringUtils.isNullOrBlank("  ")       # True

StringUtils.isNumeric("12345")        # True
StringUtils.isNumeric("12.3")         # False
StringUtils.isNumeric("abc")          # False
```

---

## Encoding & Decoding

### base64Encode(bytes)

Encodes a byte array to a Base64 string.

| Parameter | Type | Description |
|-----------|------|-------------|
| `bytes` | `List[int]` | Byte array to encode |

**Returns:** `str`

```python
bytes_arr = StringUtils.toBytes("Hello")
base64 = StringUtils.base64Encode(bytes_arr)  # "SGVsbG8="
```

### base64Decode(value)

Decodes a Base64 string to a byte array.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `str` | Base64 string to decode |

**Returns:** `List[int]`

```python
bytes_arr = StringUtils.base64Decode("SGVsbG8=")
text = StringUtils.fromBytes(bytes_arr)  # "Hello"
```

---

## Charset Conversion

### toBytes(value, charset?)

Converts a string to a byte array.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `str` | String to convert |
| `charset` | `str` (optional) | Charset — defaults to UTF-8 |

**Returns:** `List[int]`

```python
bytes_arr = StringUtils.toBytes("Hello")              # UTF-8
ascii = StringUtils.toBytes("Hello", "US-ASCII")      # ASCII
```

### fromBytes(bytes, charset?)

Converts a byte array to a string.

| Parameter | Type | Description |
|-----------|------|-------------|
| `bytes` | `List[int]` | Byte array to convert |
| `charset` | `str` (optional) | Charset — defaults to UTF-8 |

**Returns:** `str`

```python
text = StringUtils.fromBytes(bytes_arr)              # UTF-8
text2 = StringUtils.fromBytes(bytes_arr, "ISO-8859-1")  # Latin-1
```

### Supported Charsets

| Charset | Description |
|---------|-------------|
| `US-ASCII` | 7-bit ASCII |
| `ISO-8859-1` | Latin-1 |
| `UTF-8` | Default, 8-bit Unicode |
| `UTF-16` | 16-bit Unicode (with BOM) |
| `UTF-16BE` | Big-endian UTF-16 |
| `UTF-16LE` | Little-endian UTF-16 |

---

## Complete Example

```python
def on_message():
    email = message.getString(dataDictionary.type.Customer.EMAIL)

    # Validate
    if StringUtils.isNullOrBlank(email):
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'EMAIL_REQUIRED'))
    elif '@' not in email:
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'EMAIL_INVALID'))

    # Encode payload for external API
    import json
    payload = json.dumps({"email": email})
    bytes_arr = StringUtils.toBytes(payload)
    encoded = StringUtils.base64Encode(bytes_arr)
    message.setString(dataDictionary.type.Customer.ENCODED_PAYLOAD, encoded)

    stream.emit(message, OUTPUT_PORT)
```

---

## See Also

- [`CompressionUtils`](CompressionUtils.md) — Compress and decompress byte arrays
