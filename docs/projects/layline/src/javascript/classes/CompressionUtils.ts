/**
 * This abstract class provides utility functions for compression and decompression of data.
 *
 * @abstract
 * @class
 *
 */
class CompressionUtils {

    /** @hidden **/
    constructor() {}

    /**
     * The purpose of this function is to provide a way to programmatically compress data using a specific algorithm.
     * This functionality can be useful in scenarios where you need to compress data before storing it or sending it over a network.
     * The function takes an array of Uint8Array objects as input and returns an array of compressed Uint8Array objects.
     * The algorithm parameter specifies the compression algorithm to use, such as "gzip" or "deflate".
     * If the algorithm is not supported, the function will throw an error.
     *
     * @param {string} algorithm - The compression algorithm to use, such as "gzip" or "deflate".
     * The following algorithms are supported:
     * - `bz`, "bzip2: Bzip2 compression algorithm.
     * - `deflate`: Deflate compression algorithm.
     * - `gz`, "gzip": Gzip compression algorithm.
     * - `lz4framed`: LZ4 compression algorithm.
     * - `lz4block`": LZ4 block compression algorithm.
     * - `lzma`: LZMA compression algorithm.
     * - `snappy`: Snappy compression algorithm.
     * - `xz`: XZ compression algorithm.
     * - `zstd`: Zstandard compression algorithm.
     *
     * @param {Uint8Array[]} data - An array of Uint8Array objects to compress.
     * @returns {Uint8Array[]} - An array of compressed Uint8Array objects.
     *
     * @example
     * ```js
     * // Compress data using the gzip algorithm.
     * const data = getUncompressedData(); // Assume this returns the data as a byte array
     * const compressedData = CompressionUtils.compress('gzip', [data]);
     * ```
     *
     */
    static compress(algorithm: string, data: Uint8Array[]): Uint8Array[] {return null;}

    /**
     * The purpose of this function is to provide a way to programmatically decompress data using a specific algorithm.
     * This functionality can be useful in scenarios where you need to decompress data that was previously compressed.
     * The function takes an array of Uint8Array objects as input and returns an array of decompressed Uint8Array objects.
     * The algorithm parameter specifies the compression algorithm to use, such as "gzip" or "deflate".
     * If the algorithm is not supported, the function will throw an error.
     *
     * @param {string} algorithm - The compression algorithm to use, such as "gzip" or "deflate".
     * The following algorithms are supported:
     * - `auto`: Automatically detect the compression algorithm.
     * - `brotli`: Brotli compression algorithm.
     * - `bz`, "bzip2: Bzip2 compression algorithm.
     * - `deflate`: Deflate compression algorithm.
     * - `deflate64`: Deflate64 compression algorithm.
     * - `gz`, "gzip": Gzip compression algorithm.
     * - `lz4framed`: LZ4 compression algorithm.
     * - `lz4block`": LZ4 block compression algorithm.
     * - `lzma`: LZMA compression algorithm.
     * - `snappy`: Snappy compression algorithm.
     * - `xz`: XZ compression algorithm.
     * - `z`: Zlib compression algorithm.
     * - `zstd`: Zstandard compression algorithm.
     *
     * @param {Uint8Array[]} data - An array of Uint8Array objects to decompress.
     * @returns {Uint8Array[]} - An array of decompressed Uint8Array objects.
     *
     * @example
     * ```js
     * // Decompress data using the gzip algorithm.
     * const compressedData = getCompressedData(); // Assume this returns the compressed data as a byte array
     * const decompressedData = CompressionUtils.decompress('gzip', [compressedData]);
     * ```
     *
     */
    static decompress(algorithm: string, data: Uint8Array[]): Uint8Array[] {return null;}


    /**
     * The purpose of this code is to provide a way to extract the list of file names from a zip archive, optionally using a password to decrypt the content.
     * This functionality can be useful in scenarios where you need to programmatically access the contents of a zip file without actually extracting the entire archive.
     *
     * @param {Uint8Array[]} data - The zip archive data as a Uint8Array.
     * @param {string} [password] - Optional password to use for reading the zip archive.
     * @returns {string[]} - The list of file names in the zip archive.
     *
     * @example
     * ```js
     * // Extract the list of file names from a zip archive.
     * const zipData = getZipData(); // Assume this returns the zip file as a byte array
     * const fileNames = CompressionUtils.zipList(zipData);
     * ```
     *
     */
    static zipList(data: Uint8Array[], password?: string): string[] {return null;}

    /**
     * The purpose of this function is to provide a way to read the contents of a specific file from a zip archive, either with or without a password.
     * This functionality can be useful in scenarios where you need to programmatically access the contents of a file inside a zip archive without extracting the entire archive.
     *
     * @param {Uint8Array[]} data - The zip archive data as a Uint8Array.
     * @param {string} file - The name of the file to read from the zip archive.
     * @param {string} [password] - Optional password to use for reading the zip archive.
     * @returns {string[]} - The contents of the file as a string array.
     *
     * @example
     * ```js
     * // Read the contents of a file from a zip archive.
     * const zipData = getZipData(); // Assume this returns the zip file as a byte array
     * const fileContents = CompressionUtils.zipRead(zipData, 'file.txt');
     * ```
     *
     ```js
     * // Reading a file with password
     * const zipData = getZipData(); // Assume this returns the zip file as a byte array
     * const fileContent = CompressionUtils.zipRead(zipData, "example.txt", "password123");
     * ```
     */
    static zipRead(data: Uint8Array[], file: string, password?: string): string[] {return null;}

}

export default CompressionUtils;
