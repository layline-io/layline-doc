# Class: CompressionUtils

This abstract class provides utility functions for compression and decompression of data.

## Abstract

## Methods

### compress()

> `@staticmethod` **compress**(algorithm: str, data: List[bytes]) -> List[bytes]

The purpose of this function is to provide a way to programmatically compress data using a specific algorithm.
This functionality can be useful in scenarios where you need to compress data before storing it or sending it over a network.
The function takes a list of bytes objects as input and returns a list of compressed bytes objects.
The algorithm parameter specifies the compression algorithm to use, such as "gzip" or "deflate".
If the algorithm is not supported, the function will raise an exception.

#### Parameters

- **algorithm**: `str`

  The compression algorithm to use, such as "gzip" or "deflate".
  The following algorithms are supported:
  - `bz`, "bzip2: Bzip2 compression algorithm.
  - `deflate`: Deflate compression algorithm.
  - `gz`, "gzip": Gzip compression algorithm.
  - `lz4framed`: LZ4 compression algorithm.
  - `lz4block`": LZ4 block compression algorithm.
  - `lzma`: LZMA compression algorithm.
  - `snappy`: Snappy compression algorithm.
  - `xz`: XZ compression algorithm.
  - `zstd`: Zstandard compression algorithm.

- **data**: `List[bytes]`

  A list of bytes objects to compress.

#### Returns

`List[bytes]`

- A list of compressed bytes objects.

#### Example

```python
# Compress data using the gzip algorithm.
data = get_uncompressed_data()  # Assume this returns the data as a byte array
compressed_data = CompressionUtils.compress('gzip', [data])
```

### decompress()

> `@staticmethod` **decompress**(algorithm: str, data: List[bytes]) -> List[bytes]

The purpose of this function is to provide a way to programmatically decompress data using a specific algorithm.
This functionality can be useful in scenarios where you need to decompress data that was previously compressed.
The function takes a list of bytes objects as input and returns a list of decompressed bytes objects.
The algorithm parameter specifies the compression algorithm to use, such as "gzip" or "deflate".
If the algorithm is not supported, the function will raise an exception.

#### Parameters

- **algorithm**: `str`

  The compression algorithm to use, such as "gzip" or "deflate".
  The following algorithms are supported:
  - `auto` Automatically detect the compression algorithm.
  - `brotli` Brotli compression algorithm.
  - `bz` "bzip2: Bzip2 compression algorithm.
  - `deflate` Deflate compression algorithm.
  - `deflate64` Deflate64 compression algorithm.
  - `gz` "gzip": Gzip compression algorithm.
  - `lz4framed` LZ4 compression algorithm.
  - `lz4block`: LZ4 block compression algorithm.
  - `lzma` LZMA compression algorithm.
  - `snappy` Snappy compression algorithm.
  - `xz` XZ compression algorithm.
  - `z` Zlib compression algorithm.
  - `zstd` Zstandard compression algorithm.

- **data**: `List[bytes]`

  A list of bytes objects to decompress.

#### Returns

`List[bytes]`

- A list of decompressed bytes objects.

#### Example

```python
# Decompress data using the gzip algorithm.
compressed_data = get_compressed_data()  # Assume this returns the compressed data as a byte array
decompressed_data = CompressionUtils.decompress('gzip', [compressed_data])
```

### zipList()

> `@staticmethod` **zipList**(data: bytes, password: Optional[str] = None) -> List[str]

The purpose of this code is to provide a way to extract the list of file names from a zip archive, optionally using a password to decrypt the content.
This functionality can be useful in scenarios where you need to programmatically access the contents of a zip file without actually extracting the entire archive.

#### Parameters

- **data**: `bytes`

  The zip archive data as a bytes object.

- **password**: `Optional[str]`

  Optional password to use for reading the zip archive.

#### Returns

`List[str]`

- The list of file names in the zip archive.

#### Example

```python
# Extract the list of file names from a zip archive.
zip_data = get_zip_data()  # Assume this returns the zip file as a byte array
file_names = CompressionUtils.zipList(zip_data)
```

### zipRead()

> `@staticmethod` **zipRead**(data: bytes, file: str, password: Optional[str] = None) -> List[str]

The purpose of this function is to provide a way to read the contents of a specific file from a zip archive, either with or without a password.
This functionality can be useful in scenarios where you need to programmatically access the contents of a file inside a zip archive without extracting the entire archive.

#### Parameters

- **data**: `bytes`

  The zip archive data as a bytes object.

- **file**: `str`

  The name of the file to read from the zip archive.

- **password**: `Optional[str]`

  Optional password to use for reading the zip archive.

#### Returns

`List[str]`

- The contents of the file as a list of strings.

#### Example

```python
# Read the contents of a file from a zip archive.
zip_data = get_zip_data()  # Assume this returns the zip file as a byte array
file_contents = CompressionUtils.zipRead(zip_data, 'file.txt')
```

```python
# Reading a file with password
zip_data = get_zip_data()  # Assume this returns the zip file as a byte array
file_content = CompressionUtils.zipRead(zip_data, "example.txt", "password123")
```
