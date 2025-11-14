/**
 * Utility class for string operations.
 * This class cannot be instantiated and all methods are static.
 *
 * @class
 */
class StringUtils {
    /** @hidden */
    constructor() { }

    /**
     * Decodes a Base64 encoded string into an array of bytes.
     * 
     * @static
     * @param {string} value - The Base64 encoded string to decode.
     * @returns {Uint8Array} The decoded array of bytes.
     * @example
     * // Decode Base64 string to bytes
     * const base64String = "SGVsbG8=";
     * const byteArray = StringUtils.base64Decode(base64String);
     * console.log(byteArray); // Output: Uint8Array([72, 101, 108, 108, 111])
     */
    static base64Decode(value: string): Uint8Array[] { return };

    /**
     * Encodes an array of bytes into a Base64 string.
     *
     * @static
     * @param {Uint8Array[]} bytes - The array of bytes to encode.
     * @returns {string} The Base64 encoded string.
     *
     * @example
     * // Encode bytes to Base64 string
     * const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
     * const base64String = StringUtils.base64Encode(byteArray);
     * console.log(base64String); // Output: "SGVsbG8="
     */
    static base64Encode(bytes: Uint8Array[]): string { return };

    /**
     * Checks if a string is null, undefined, or contains only whitespace characters.
     *
     * @static
     * @param {string} value - The string to check.
     * @returns {boolean} True if the string is null, undefined, or contains only whitespace; otherwise, false.
     *
     * @example
     * // Returns true
     * StringUtils.isNullOrBlank(null);
     * StringUtils.isNullOrBlank(undefined);
     * StringUtils.isNullOrBlank("");
     * StringUtils.isNullOrBlank("   ");
     *
     * // Returns false
     * StringUtils.isNullOrBlank("Hello");
     * StringUtils.isNullOrBlank(" Hello ");
     */
    static isNullOrBlank(value: string): boolean { return };

    /**
     * Checks if a string is null, undefined, or empty.
     *
     * @static
     * @param {string} value - The string to check.
     * @returns {boolean} True if the string is null, undefined, or empty; otherwise, false.
     *
     * @example
     * // Returns true
     * StringUtils.isNullOrEmpty(null);
     * StringUtils.isNullOrEmpty(undefined);
     * StringUtils.isNullOrEmpty("");
     *
     * // Returns false
     * StringUtils.isNullOrEmpty("Hello");
     * StringUtils.isNullOrEmpty(" ");
     */
    static isNullOrEmpty(value: string): boolean { return };

    /**
     * Checks if a string contains only numeric characters.
     *
     * @static
     * @param {string} value - The string to check.
     * @returns {boolean} True if the string contains only numeric characters; otherwise, false.
     *
     * @example
     * // Returns true
     * StringUtils.isNumeric("123");
     * StringUtils.isNumeric("0");
     *
     * // Returns false
     * StringUtils.isNumeric("12.3");
     * StringUtils.isNumeric("abc");
     * StringUtils.isNumeric("1a2b3c");
     */
    static isNumeric(value: string): boolean { return };

    /**
     * Converts an array of bytes to a string using the specified charset.
     *
     * @static
     * @param {Uint8Array[]} bytes - The array of bytes to convert.
     * @param {string} [charset] - The charset to use for conversion. Defaults to UTF-8 if not specified.
     * | Charset |	Description |
     * | --- | --- |
     * | US-ASCII |	Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the Unicode character set |
     * | ISO-8859-1 | ISO Latin Alphabet No. 1, a.k.a. ISO-LATIN-1 |
     * | UTF-8 | Eight-bit UCS Transformation Format |
     * | UTF-16BE |	Sixteen-bit UCS Transformation Format, big-endian byte order |
     * | UTF-16LE |	Sixteen-bit UCS Transformation Format, little-endian byte order |
     * | UTF-16 | Sixteen-bit UCS Transformation Format, byte order identified by an optional byte-order mark |
     * | The UTF-8 | charset is specified by RFC 2279; the transformation format upon which it is based is specified in Amendment 2 of ISO 10646-1 and is also described in the Unicode Standard. |
     *
     * The UTF-16 charsets are specified by RFC 2781; the transformation formats upon which they are based are specified in Amendment 1 of ISO 10646-1 and are also described in the Unicode Standard.
     *
     * The UTF-16 charsets use sixteen-bit quantities and are therefore sensitive to byte order. In these encodings the byte order of a stream may be indicated by an initial byte-order mark represented by the Unicode character '\uFEFF'. Byte-order marks are handled as follows:
     *
     * When decoding, the UTF-16BE and UTF-16LE charsets interpret the initial byte-order marks as a ZERO-WIDTH NON-BREAKING SPACE; when encoding, they do not write byte-order marks.
     *
     * When decoding, the UTF-16 charset interprets the byte-order mark at the beginning of the input stream to indicate the byte-order of the stream but defaults to big-endian if there is no byte-order mark; when encoding, it uses big-endian byte order and writes a big-endian byte-order mark.
     *
     * In any case, byte order marks occurring after the first element of an input sequence are not omitted since the same code is used to represent ZERO-WIDTH NON-BREAKING SPACE.
     * Every instance of the Java virtual machine has a default charset, which may or may not be one of the standard charsets. The default charset is determined during virtual-machine startup and typically depends upon the locale and charset being used by the underlying operating system.
     *
     * The StandardCharsets class defines constants for each of the standard charsets.
     * @returns {string} The resulting string.
     *
     * @example
     * // Convert bytes to string using default UTF-8 charset
     * const helloArray = new Uint8Array([72, 101, 108, 108, 111]);
     * const result = StringUtils.fromBytes(helloArray); // Assuming someByteContent is a Uint8Array of bytes. Could be a buffer or any other byte array.
     *
     * // Convert bytes to string using a specific charset
     * const resultWithCharset = StringUtils.fromBytes(helloArray, "US-ASCII");
     * console.log(resultWithCharset); // Output: "Hello"
     */
    static fromBytes(bytes: Uint8Array[], charset?: string): string { return };

    /**
     * Converts a string to an array of bytes using the specified charset.
     *
     * @static
     * @param {string} value - The string to convert.
     * @param {string} [charset] - The charset to use for conversion. Defaults to UTF-8 if not specified.
     * | Charset |	Description |
     * | --- | --- |
     * | US-ASCII |	Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the Unicode character set |
     * | ISO-8859-1 | ISO Latin Alphabet No. 1, a.k.a. ISO-LATIN-1 |
     * | UTF-8 | Eight-bit UCS Transformation Format |
     * | UTF-16BE |	Sixteen-bit UCS Transformation Format, big-endian byte order |
     * | UTF-16LE |	Sixteen-bit UCS Transformation Format, little-endian byte order |
     * | UTF-16 | Sixteen-bit UCS Transformation Format, byte order identified by an optional byte-order mark |
     * | The UTF-8 | charset is specified by RFC 2279; the transformation format upon which it is based is specified in Amendment 2 of ISO 10646-1 and is also described in the Unicode Standard. |
     *
     * The UTF-16 charsets are specified by RFC 2781; the transformation formats upon which they are based are specified in Amendment 1 of ISO 10646-1 and are also described in the Unicode Standard.
     *
     * The UTF-16 charsets use sixteen-bit quantities and are therefore sensitive to byte order. In these encodings the byte order of a stream may be indicated by an initial byte-order mark represented by the Unicode character '\uFEFF'. Byte-order marks are handled as follows:
     *
     * When decoding, the UTF-16BE and UTF-16LE charsets interpret the initial byte-order marks as a ZERO-WIDTH NON-BREAKING SPACE; when encoding, they do not write byte-order marks.
     *
     * When decoding, the UTF-16 charset interprets the byte-order mark at the beginning of the input stream to indicate the byte-order of the stream but defaults to big-endian if there is no byte-order mark; when encoding, it uses big-endian byte order and writes a big-endian byte-order mark.
     *
     * In any case, byte order marks occurring after the first element of an input sequence are not omitted since the same code is used to represent ZERO-WIDTH NON-BREAKING SPACE.
     * Every instance of the Java virtual machine has a default charset, which may or may not be one of the standard charsets. The default charset is determined during virtual-machine startup and typically depends upon the locale and charset being used by the underlying operating system.
     *
     * The StandardCharsets class defines constants for each of the standard charsets.
     * @returns {Uint8Array[]} The resulting array of bytes.
     *
     * @example
     * // Convert string to bytes using default UTF-8 charset
     * const helloString = "Hello";
     * const result = StringUtils.toBytes(helloString); // Assuming someStringContent is a string.
     *
     * // Convert string to bytes using a specific charset
     * const resultWithCharset = StringUtils.toBytes(helloString, "US-ASCII");
     * console.log(resultWithCharset); // Output: [72, 101, 108, 108, 111]
     */
    static toBytes(value: string, charset?: string): Uint8Array[] { return };
   
    
    
}

export default StringUtils;
