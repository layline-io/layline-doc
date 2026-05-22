---
description: >-
  Utility class for common string operations: encoding, decoding, validation, and charset conversion. All methods are static.
---

# StringUtils

Utility class for common string operations: encoding, decoding, validation, and charset conversion. All methods are static.

---

## At a Glance

```js
// Validation
if (StringUtils.isNullOrBlank(message.getString(dataDictionary.type.Customer.EMAIL))) {
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'EMAIL_REQUIRED'));
}

// Encoding
const bytes = StringUtils.toBytes("Hello, World!");
const base64 = StringUtils.base64Encode(bytes);

// Decoding
const decoded = StringUtils.base64Decode(base64);
const text = StringUtils.fromBytes(decoded);
```

---

## Validation

| Method | Returns | Description |
|--------|---------|-------------|
| `isNullOrEmpty(value)` | `boolean` | True if null, undefined, or empty string `""` |
| `isNullOrBlank(value)` | `boolean` | True if null, undefined, empty, or whitespace only |
| `isNumeric(value)` | `boolean` | True if string contains only digits (0–9) |

```js
StringUtils.isNullOrEmpty(null);       // true
StringUtils.isNullOrEmpty("");         // true
StringUtils.isNullOrEmpty("  ");       // false

StringUtils.isNullOrBlank(null);       // true
StringUtils.isNullOrBlank("  ");       // true

StringUtils.isNumeric("12345");        // true
StringUtils.isNumeric("12.3");         // false
StringUtils.isNumeric("abc");          // false
```

---

## Encoding & Decoding

### base64Encode(bytes)

Encodes a byte array to a Base64 string.

| Parameter | Type | Description |
|-----------|------|-------------|
| `bytes` | `Uint8Array` | Byte array to encode |

**Returns:** `string`

```js
const bytes = StringUtils.toBytes("Hello");
const base64 = StringUtils.base64Encode(bytes);  // "SGVsbG8="
```

### base64Decode(value)

Decodes a Base64 string to a byte array.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `string` | Base64 string to decode |

**Returns:** `Uint8Array`

```js
const bytes = StringUtils.base64Decode("SGVsbG8=");
const text = StringUtils.fromBytes(bytes);  // "Hello"
```

---

## Charset Conversion

### toBytes(value, charset?)

Converts a string to a byte array.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `string` | String to convert |
| `charset` | `string` (optional) | Charset — defaults to UTF-8 |

**Returns:** `Uint8Array`

```js
const bytes = StringUtils.toBytes("Hello");              // UTF-8
const ascii = StringUtils.toBytes("Hello", "US-ASCII");  // ASCII
```

### fromBytes(bytes, charset?)

Converts a byte array to a string.

| Parameter | Type | Description |
|-----------|------|-------------|
| `bytes` | `Uint8Array` | Byte array to convert |
| `charset` | `string` (optional) | Charset — defaults to UTF-8 |

**Returns:** `string`

```js
const text = StringUtils.fromBytes(bytes);              // UTF-8
const text2 = StringUtils.fromBytes(bytes, "ISO-8859-1");  // Latin-1
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

```js
export function onMessage() {
    const email = message.getString(dataDictionary.type.Customer.EMAIL);

    // Validate
    if (StringUtils.isNullOrBlank(email)) {
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'EMAIL_REQUIRED'));
    } else if (!email.includes('@')) {
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'EMAIL_INVALID'));
    }

    // Encode payload for external API
    const payload = JSON.stringify({ email: email });
    const bytes = StringUtils.toBytes(payload);
    const encoded = StringUtils.base64Encode(bytes);
    message.setString(dataDictionary.type.Customer.ENCODED_PAYLOAD, encoded);

    stream.emit(message, OUTPUT_PORT);
}
```

---

## See Also

- [`CompressionUtils`](CompressionUtils.md) — Compress and decompress byte arrays
