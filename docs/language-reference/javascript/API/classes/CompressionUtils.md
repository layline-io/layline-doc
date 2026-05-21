---
description: Utility class for compressing and decompressing data, plus reading ZIP archives. All methods are static.
---

# CompressionUtils

Utility class for compressing and decompressing data, plus reading ZIP archives. All methods are static.

---

## At a Glance

```js
// Compress data before sending
const data = StringUtils.toBytes("Large payload...");
const compressed = CompressionUtils.compress('gzip', data);

// Decompress received data
const decompressed = CompressionUtils.decompress('gzip', compressed);

// Read ZIP archive contents
const files = CompressionUtils.zipList(zipData);
const content = CompressionUtils.zipRead(zipData, 'data.csv');
```

---

## Compression

### compress(algorithm, data)

Compresses a byte array using the specified algorithm.

| Parameter | Type | Description |
|-----------|------|-------------|
| `algorithm` | `string` | Compression algorithm |
| `data` | `Uint8Array` | Byte array to compress |

**Returns:** `Uint8Array`

```js
const data = StringUtils.toBytes("Hello, World!");
const compressed = CompressionUtils.compress('gzip', data);
```

### decompress(algorithm, data)

Decompresses a byte array.

| Parameter | Type | Description |
|-----------|------|-------------|
| `algorithm` | `string` | Compression algorithm (or `'auto'` to detect) |
| `data` | `Uint8Array` | Compressed byte array |

**Returns:** `Uint8Array`

```js
const decompressed = CompressionUtils.decompress('gzip', compressed);
const text = StringUtils.fromBytes(decompressed);
```

### Supported Algorithms

| Algorithm | Description |
|-----------|-------------|
| `gzip` / `gz` | Gzip (most common) |
| `deflate` | Deflate |
| `bzip2` / `bz` | Bzip2 |
| `lz4framed` | LZ4 framed |
| `lz4block` | LZ4 block |
| `lzma` | LZMA |
| `snappy` | Snappy (fast) |
| `xz` | XZ |
| `zstd` | Zstandard |
| `auto` | Auto-detect (decompress only) |

---

## ZIP Archives

### zipList(data, password?)

Lists all file names in a ZIP archive.

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `Uint8Array` | ZIP archive bytes |
| `password` | `string` (optional) | Password if encrypted |

**Returns:** `string[]`

```js
const files = CompressionUtils.zipList(zipData);
stream.logInfo(`Files in archive: ${files.join(', ')}`);
```

### zipRead(data, file, password?)

Reads a specific file from a ZIP archive.

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `Uint8Array` | ZIP archive bytes |
| `file` | `string` | File name to extract |
| `password` | `string` (optional) | Password if encrypted |

**Returns:** `string[]`

```js
// Read a file
const lines = CompressionUtils.zipRead(zipData, 'data.csv');
for (const line of lines) {
    stream.logInfo(line);
}

// Read with password
const lines = CompressionUtils.zipRead(zipData, 'sensitive.csv', 'password123');
```

---

## Complete Example

```js
export function onMessage() {
    const fileContent = message.getByteString(dataDictionary.type.File.RAW_CONTENT);
    const bytes = StringUtils.toBytes(fileContent);

    // Compress for storage
    const compressed = CompressionUtils.compress('zstd', bytes);
    message.setByteString(dataDictionary.type.File.COMPRESSED, compressed);

    stream.emit(message, OUTPUT_PORT);
}
```

---

## See Also

- [`StringUtils`](StringUtils.md) — Convert between strings and bytes
