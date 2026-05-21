---
description: Utility class for compressing and decompressing data, plus reading ZIP archives. All methods are static.
---

---
id: py-CompressionUtils
---

# CompressionUtils

Utility class for compressing and decompressing data, plus reading ZIP archives. All methods are static.

---

## At a Glance

```python
# Compress data before sending
data = b"Large payload..."
compressed = CompressionUtils.compress('gzip', [data])

# Decompress received data
decompressed = CompressionUtils.decompress('gzip', compressed)

# Read ZIP archive contents
files = CompressionUtils.zipList(zip_data)
content = CompressionUtils.zipRead(zip_data, 'data.csv')
```

---

## Compression

### compress(algorithm, data)

Compresses a list of byte arrays using the specified algorithm.

| Parameter | Type | Description |
|-----------|------|-------------|
| `algorithm` | `str` | Compression algorithm |
| `data` | `List[bytes]` | List of byte arrays to compress |

**Returns:** `List[bytes]`

```python
data = b"Hello, World!"
compressed = CompressionUtils.compress('gzip', [data])
```

### decompress(algorithm, data)

Decompresses a list of byte arrays.

| Parameter | Type | Description |
|-----------|------|-------------|
| `algorithm` | `str` | Compression algorithm (or `'auto'` to detect) |
| `data` | `List[bytes]` | List of compressed byte arrays |

**Returns:** `List[bytes]`

```python
decompressed = CompressionUtils.decompress('gzip', compressed)
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

### zipList(data, password)

Lists all file names in a ZIP archive.

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `bytes` | ZIP archive bytes |
| `password` | `Optional[str]` | Password if encrypted |

**Returns:** `List[str]`

```python
files = CompressionUtils.zipList(zip_data)
stream.logInfo(f"Files in archive: {', '.join(files)}")
```

### zipRead(data, file, password)

Reads a specific file from a ZIP archive.

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `bytes` | ZIP archive bytes |
| `file` | `str` | File name to extract |
| `password` | `Optional[str]` | Password if encrypted |

**Returns:** `List[str]`

```python
# Read a file
lines = CompressionUtils.zipRead(zip_data, 'data.csv')
for line in lines:
    stream.logInfo(line)

# Read with password
lines = CompressionUtils.zipRead(zip_data, 'sensitive.csv', 'password123')
```

---

## Complete Example

```python
def on_message():
    file_content = message.getByteString(dataDictionary.type.File.RAW_CONTENT)
    bytes_data = file_content.encode('utf-8')

    # Compress for storage
    compressed = CompressionUtils.compress('zstd', [bytes_data])
    message.setByteString(dataDictionary.type.File.COMPRESSED, compressed[0])

    stream.emit(message, OUTPUT_PORT)
```

---

## See Also

- [`StringUtils`](StringUtils.md) — Convert between strings and bytes
