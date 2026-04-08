# CompressionUtils

This abstract class provides utility functions for compression and decompression of data.

## Methods

### compress()

> `static` **compress**(`algorithm`, `data`): `Uint8Array`[]

The purpose of this function is to provide a way to programmatically compress data using a specific algorithm.
This functionality can be useful in scenarios where you need to compress data before storing it or sending it over a network.
The function takes an array of Uint8Array objects as input and returns an array of compressed Uint8Array objects.
The algorithm parameter specifies the compression algorithm to use, such as "gzip" or "deflate".
If the algorithm is not supported, the function will throw an error.

#### Parameters

##### algorithm

`string`

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

##### data

`Uint8Array`[]

An array of Uint8Array objects to compress.

#### Returns

`Uint8Array`[]

- An array of compressed Uint8Array objects.

#### Example

```js
// Compress data using the gzip algorithm.
const data = getUncompressedData(); // Assume this returns the data as a byte array
const compressedData = CompressionUtils.compress('gzip', [data]);
```

***

### decompress()

> `static` **decompress**(`algorithm`, `data`): `Uint8Array`[]

The purpose of this function is to provide a way to programmatically decompress data using a specific algorithm.
This functionality can be useful in scenarios where you need to decompress data that was previously compressed.
The function takes an array of Uint8Array objects as input and returns an array of decompressed Uint8Array objects.
The algorithm parameter specifies the compression algorithm to use, such as "gzip" or "deflate".
If the algorithm is not supported, the function will throw an error.

#### Parameters

##### algorithm

`string`

The compression algorithm to use, such as "gzip" or "deflate".
The following algorithms are supported:
- `auto`: Automatically detect the compression algorithm.
- `brotli`: Brotli compression algorithm.
- `bz`, "bzip2: Bzip2 compression algorithm.
- `deflate`: Deflate compression algorithm.
- `deflate64`: Deflate64 compression algorithm.
- `gz`, "gzip": Gzip compression algorithm.
- `lz4framed`: LZ4 compression algorithm.
- `lz4block`": LZ4 block compression algorithm.
- `lzma`: LZMA compression algorithm.
- `snappy`: Snappy compression algorithm.
- `xz`: XZ compression algorithm.
- `z`: Zlib compression algorithm.
- `zstd`: Zstandard compression algorithm.

##### data

`Uint8Array`[]

An array of Uint8Array objects to decompress.

#### Returns

`Uint8Array`[]

- An array of decompressed Uint8Array objects.

#### Example

```js
// Decompress data using the gzip algorithm.
const compressedData = getCompressedData(); // Assume this returns the compressed data as a byte array
const decompressedData = CompressionUtils.decompress('gzip', [compressedData]);
```

***

### zipList()

> `static` **zipList**(`data`, `password?`): `string`[]

The purpose of this code is to provide a way to extract the list of file names from a zip archive, optionally using a password to decrypt the content.
This functionality can be useful in scenarios where you need to programmatically access the contents of a zip file without actually extracting the entire archive.

#### Parameters

##### data

`Uint8Array`[]

The zip archive data as a Uint8Array.

##### password?

`string`

Optional password to use for reading the zip archive.

#### Returns

`string`[]

- The list of file names in the zip archive.

#### Example

```js
// Extract the list of file names from a zip archive.
const zipData = getZipData(); // Assume this returns the zip file as a byte array
const fileNames = CompressionUtils.zipList(zipData);
```

***

### zipRead()

> `static` **zipRead**(`data`, `file`, `password?`): `string`[]

The purpose of this function is to provide a way to read the contents of a specific file from a zip archive, either with or without a password.
This functionality can be useful in scenarios where you need to programmatically access the contents of a file inside a zip archive without extracting the entire archive.

#### Parameters

##### data

`Uint8Array`[]

The zip archive data as a Uint8Array.

##### file

`string`

The name of the file to read from the zip archive.

##### password?

`string`

Optional password to use for reading the zip archive.

#### Returns

`string`[]

- The contents of the file as a string array.

#### Example

```js
// Read the contents of a file from a zip archive.
const zipData = getZipData(); // Assume this returns the zip file as a byte array
const fileContents = CompressionUtils.zipRead(zipData, 'file.txt');
```

```js
// Reading a file with password
const zipData = getZipData(); // Assume this returns the zip file as a byte array
const fileContent = CompressionUtils.zipRead(zipData, "example.txt", "password123");
```
