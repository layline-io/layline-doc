# JavaType

layline.io's primitive data types are based on Java's primitive data types. This is important to understand when working with data within layline.io.
This is relevant, for example, when:
* defining data formats (e.g. [Generic Formats]../../../../assets/formats/asset-format-generic))
* working with Python in the context of the [Python Flow Processor](../../../../assets/processors-flow/asset-flow-python)

This enumeration definition provides a map from layline.io's data types to the respective Java primitive data types. In Python, we don't directly use these Java types, but it's important to understand the correspondence for data handling and type conversion.

## Enumeration Members

In Python, we would typically represent this as a string enum or a set of constants. Here's how it might be defined:

```python
from enum import Enum

class JavaType(str, Enum):
    BigDecimal = "java.math.BigDecimal"
    BigInteger = "java.math.BigInteger"
    Byte = "java.lang.Byte"
    ByteString = "java.lang.ByteString"
    Character = "java.lang.Character"
    Double = "java.lang.Double"
    Integer = "java.lang.Integer"
    Long = "java.lang.Long"
    Number = "java.lang.Number"
    OffsetDateTime = "java.time.OffsetDateTime"
    String = "java.lang.String"
```

### BigDecimal

> **BigDecimal**: "java.math.BigDecimal"

Python equivalent: `decimal.Decimal`

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html)

### BigInteger

> **BigInteger**: "java.math.BigInteger"

Python equivalent: `int` (Python 3 integers have arbitrary precision)

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/math/BigInteger.html)

### Byte

> **Byte**: "java.lang.Byte"

Python equivalent: `int` (constrained to -128 to 127)

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Byte.html)

### ByteString

> **ByteString**: "java.lang.ByteString"

Python equivalent: `bytes`

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Byte.html)

### Character

> **Character**: "java.lang.Character"

Python equivalent: `str` (of length 1)

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Character.html)

### Double

> **Double**: "java.lang.Double"

Python equivalent: `float`

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html)

### Integer

> **Integer**: "java.lang.Integer"

Python equivalent: `int`

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)

### Long

> **Long**: "java.lang.Long"

Python equivalent: `int`

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)

### Number

> **Number**: "java.lang.Number"

Python equivalent: `numbers.Number` (abstract base class)

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Number.html)

### OffsetDateTime

> **OffsetDateTime**: "java.time.OffsetDateTime"

Python equivalent: `datetime.datetime` with `tzinfo`

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html)

### String

> **String**: "java.lang.String"

Python equivalent: `str`

[Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

## Usage in Python

While you won't directly use these Java types in Python, understanding their equivalents is crucial for correct data handling. When working with layline.io in Python, you'll typically use the Python equivalent types. For example:

```python
from datetime import datetime, timezone

# Equivalent to Java's BigDecimal
from decimal import Decimal
precise_number = Decimal('3.14159265359')

# Equivalent to Java's OffsetDateTime
current_time = datetime.now(timezone.utc)

# Equivalent to Java's BigInteger
big_number = 12345678901234567890  # Python 3 integers have arbitrary precision

# Equivalent to Java's Byte
byte_value = 127  # Ensure it's within -128 to 127 range

# Equivalent to Java's ByteString
byte_string = b'Hello, World!'

# Equivalent to Java's Character
char = 'A'

# Equivalent to Java's Double
double_value = 3.14

# Equivalent to Java's Integer and Long
integer_value = 42
long_value = 1234567890

# Equivalent to Java's String
string_value = "Hello, World!"
```

Remember to handle these types appropriately when interfacing with layline.io, especially when dealing with data conversion or when precise numeric representations are required.
