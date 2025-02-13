# Class: StringUtils

Utility class for string operations.
This class cannot be instantiated and all methods are static.

## Abstract

## Methods

### fromBytes()

> @staticmethod
> **fromBytes**(bytes: List[int], charset: str = None) -> str

Converts a list of bytes to a string using the specified charset.

#### Parameters

- **bytes**: List[int]

  The list of bytes to convert.

- **charset**: str, optional

  The charset to use for conversion. Defaults to UTF-8 if not specified.

  | Charset |	Description |
    | --- | --- |
  | US-ASCII |	Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the Unicode character set |
  | ISO-8859-1 | ISO Latin Alphabet No. 1, a.k.a. ISO-LATIN-1 |
  | UTF-8 | Eight-bit UCS Transformation Format |
  | UTF-16BE |	Sixteen-bit UCS Transformation Format, big-endian byte order |
  | UTF-16LE |	Sixteen-bit UCS Transformation Format, little-endian byte order |
  | UTF-16 | Sixteen-bit UCS Transformation Format, byte order identified by an optional byte-order mark |
  | The UTF-8 | charset is specified by RFC 2279; the transformation format upon which it is based is specified in Amendment 2 of ISO 10646-1 and is also described in the Unicode Standard. |

  The UTF-16 charsets are specified by RFC 2781; the transformation formats upon which they are based are specified in Amendment 1 of ISO 10646-1 and are also described in the Unicode Standard.

  The UTF-16 charsets use sixteen-bit quantities and are therefore sensitive to byte order. In these encodings the byte order of a stream may be indicated by an initial byte-order mark represented by the Unicode character '\uFEFF'. Byte-order marks are handled as follows:

  When decoding, the UTF-16BE and UTF-16LE charsets interpret the initial byte-order marks as a ZERO-WIDTH NON-BREAKING SPACE; when encoding, they do not write byte-order marks.

  When decoding, the UTF-16 charset interprets the byte-order mark at the beginning of the input stream to indicate the byte-order of the stream but defaults to big-endian if there is no byte-order mark; when encoding, it uses big-endian byte order and writes a big-endian byte-order mark.

  In any case, byte order marks occurring after the first element of an input sequence are not omitted since the same code is used to represent ZERO-WIDTH NON-BREAKING SPACE.
  Every instance of the Java virtual machine has a default charset, which may or may not be one of the standard charsets. The default charset is determined during virtual-machine startup and typically depends upon the locale and charset being used by the underlying operating system.

  The StandardCharsets class defines constants for each of the standard charsets.

#### Returns

str - The resulting string.

#### Example

```python
# Convert bytes to string using default UTF-8 charset
hello_array = [72, 101, 108, 108, 111]
result = StringUtils.fromBytes(hello_array)  # Assuming some_byte_content is a list of bytes. Could be a bytes object or any other byte sequence.

# Convert bytes to string using a specific charset
result_with_charset = StringUtils.fromBytes(hello_array, "US-ASCII")
print(result_with_charset)  # Output: "Hello"
```

### toBytes()

> @staticmethod
> **toBytes**(value: str, charset: str = None) -> List[int]

Converts a string to an array of bytes using the specified charset.

#### Parameters

- **value**: str

  The string to convert.

- **charset**: str, optional

  The charset to use for conversion. Defaults to UTF-8 if not specified.

  | Charset |	Description |
    | --- | --- |
  | US-ASCII |	Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the Unicode character set |
  | ISO-8859-1 | ISO Latin Alphabet No. 1, a.k.a. ISO-LATIN-1 |
  | UTF-8 | Eight-bit UCS Transformation Format |
  | UTF-16BE |	Sixteen-bit UCS Transformation Format, big-endian byte order |
  | UTF-16LE |	Sixteen-bit UCS Transformation Format, little-endian byte order |
  | UTF-16 | Sixteen-bit UCS Transformation Format, byte order identified by an optional byte-order mark |
  | The UTF-8 | charset is specified by RFC 2279; the transformation format upon which it is based is specified in Amendment 2 of ISO 10646-1 and is also described in the Unicode Standard. |

  The UTF-16 charsets are specified by RFC 2781; the transformation formats upon which they are based are specified in Amendment 1 of ISO 10646-1 and are also described in the Unicode Standard.

  The UTF-16 charsets use sixteen-bit quantities and are therefore sensitive to byte order. In these encodings the byte order of a stream may be indicated by an initial byte-order mark represented by the Unicode character '\uFEFF'. Byte-order marks are handled as follows:

  When decoding, the UTF-16BE and UTF-16LE charsets interpret the initial byte-order marks as a ZERO-WIDTH NON-BREAKING SPACE; when encoding, they do not write byte-order marks.

  When decoding, the UTF-16 charset interprets the byte-order mark at the beginning of the input stream to indicate the byte-order of the stream but defaults to big-endian if there is no byte-order mark; when encoding, it uses big-endian byte order and writes a big-endian byte-order mark.

  In any case, byte order marks occurring after the first element of an input sequence are not omitted since the same code is used to represent ZERO-WIDTH NON-BREAKING SPACE.
  Every instance of the Java virtual machine has a default charset, which may or may not be one of the standard charsets. The default charset is determined during virtual-machine startup and typically depends upon the locale and charset being used by the underlying operating system.

  The StandardCharsets class defines constants for each of the standard charsets.

#### Returns

List[int] - The resulting array of bytes.

#### Example

```python
# Convert string to bytes using default UTF-8 charset
hello_string = "Hello"
result = StringUtils.toBytes(hello_string)  # Assuming someStringContent is a string.

# Convert string to bytes using a specific charset
result_with_charset = StringUtils.toBytes(hello_string, "US-ASCII")
print(result_with_charset)  # Output: [72, 101, 108, 108, 111]
```

### isNullOrBlank()

> @staticmethod
> **isNullOrBlank**(value: str) -> bool

Checks if a string is None or contains only whitespace characters.

#### Parameters

- **value**: str

  The string to check.

#### Returns

bool - True if the string is None or contains only whitespace; otherwise, False.

#### Example

```python
# Returns True
StringUtils.isNullOrBlank(None)
StringUtils.isNullOrBlank("")
StringUtils.isNullOrBlank("   ")

# Returns False
StringUtils.isNullOrBlank("Hello")
StringUtils.isNullOrBlank(" Hello ")
```

### isNullOrEmpty()

> @staticmethod
> **isNullOrEmpty**(value: str) -> bool

Checks if a string is None or empty.

#### Parameters

- **value**: str

  The string to check.

#### Returns

bool - True if the string is None or empty; otherwise, False.

#### Example

```python
# Returns True
StringUtils.isNullOrEmpty(None)
StringUtils.isNullOrEmpty("")

# Returns False
StringUtils.isNullOrEmpty("Hello")
StringUtils.isNullOrEmpty(" ")
```

### isNumeric()

> @staticmethod
> **isNumeric**(value: str) -> bool

Checks if a string contains only numeric characters.

#### Parameters

- **value**: str

  The string to check.

#### Returns

bool - True if the string contains only numeric characters; otherwise, False.

#### Example

```python
# Returns True
StringUtils.isNumeric("123")
StringUtils.isNumeric("0")

# Returns False
StringUtils.isNumeric("12.3")
StringUtils.isNumeric("abc")
StringUtils.isNumeric("1a2b3c")
```
