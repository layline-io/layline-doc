# Class: Arith64

Abstract class enables you to perform proper 64-bit arithmetic operations.
This class is especially useful when you need to perform arithmetic operations on large numbers in Python.

In Python, integers have arbitrary precision, which means they can represent arbitrarily large numbers without loss of precision. However, this class can still be useful for consistency with other languages or for specific use cases where 64-bit arithmetic is required.

## Abstract

## Methods

### add()

> `@staticmethod` **add**(a: int, b: int) -> int

Adds two numbers together.

#### Parameters

- **a**: `int`
- **b**: `int`

#### Returns

`int`

The result of the addition

#### Example

```python
# Example of an addition operation:
a = 9007199254740991  # 2^53 - 1, which is the max safe integer in JavaScript
b = 10

# Using the Arith64 class for the 64-bit addition operation
result_arith64 = Arith64.add(a, b)  # result_arith64 is: 9007199254741001
```

### and_()

> `@staticmethod` **and_**(a: int, b: int) -> int

Bitwise AND of two numbers up to 64-bit.

#### Parameters

- **a**: `int`
- **b**: `int`

#### Returns

`int`

The result of the bitwise AND operation

#### Example

```python
a = 0x1FFFFFFFFFFFFF  # 9007199254740991 or 2^53 - 1
b = 0x1000000000000   # 4503599627370496 or 2^52

result = Arith64.and_(a, b)  # result is 4503599627370496
```

### div()

> `@staticmethod` **div**(a: int, b: int) -> int

Division of two numbers up to 64-bit.

#### Parameters

- **a**: `int`
- **b**: `int`

#### Returns

`int`

The result of the division

#### Example

```python
a = 0x1FFFFFFFFFFFFF  # 9007199254740991 or 2^53 - 1
b = 0x1000000000000   # 4503599627370496 or 2^52

result_arith64 = Arith64.div(a, b)  # Outputs: 2
```

### mod()

> `@staticmethod` **mod**(a: int, b: int) -> int

Performs a modulo operation on two large numbers.

#### Parameters

- **a**: `int`
- **b**: `int`

#### Returns

`int`

The result of the modulo operation

#### Example

```python
a = 9007199254740992  # 2^53, just above the max safe integer in JavaScript
b = 10

result_arith64 = Arith64.mod(a, b)  # result_arith64 is: 2
```

### mul()

> `@staticmethod` **mul**(a: int, b: int) -> int

Multiplication of two numbers up to 64-bit.

#### Parameters

- **a**: `int`
- **b**: `int`

#### Returns

`int`

The result of the multiplication

#### Example

```python
a = 3037000499  # Close to the square root of 2^53 - 1
b = 3037000499  # Same value to produce a very large product

result_arith64 = Arith64.mul(a, b)  # result_arith64 is: 9223372036854775801
```

### or_()

> `@staticmethod` **or_**(a: int, b: int) -> int

Bitwise OR operation of two large numbers.

#### Parameters

- **a**: `int`
- **b**: `int`

#### Returns

`int`

#### Example

```python
a = 0x1FFFFFFFFFFFFF  # 9007199254740991 or 2^53 - 1
b = 0x1000000000000   # 4503599627370496 or 2^52

result_arith64 = Arith64.or_(a, b)  # result_arith64 is: 13510798882111487
```

### shiftLeft()

> `@staticmethod` **shiftLeft**(a: int, shifts: int) -> int

Shifts a large number to the left by a specified number of bits.

#### Parameters

- **a**: `int`
- **shifts**: `int`

#### Returns

`int`

The result of the left shift operation

#### Example

```python
a = 0x1FFFFFFFFFFFFF  # 9007199254740991 or 2^53 - 1
shifts = 10  # Shift left by 10 bits

result_arith64 = Arith64.shiftLeft(a, shifts)  # result_arith64 is: 9223372036854774784
```

### shiftRight()

> `@staticmethod` **shiftRight**(a: int, shifts: int) -> int

Shifts a large number to the right by a specified number of bits.

#### Parameters

- **a**: `int`
- **shifts**: `int`

#### Returns

`int`

The result of the right shift operation

#### Example

```python
a = 0x1FFFFFFFFFFFFF  # 9007199254740991 or 2^53 - 1
shifts = 10  # Shift right by 10 bits

result_arith64 = Arith64.shiftRight(a, shifts)  # result_arith64 is: 8796093022207
```

### sub()

> `@staticmethod` **sub**(a: int, b: int) -> int

Subtracts two large numbers.

#### Parameters

- **a**: `int`
- **b**: `int`

#### Returns

`int`

The result of the subtraction

#### Example

```python
a = 9007199254740992  # 2^53, just above the max safe integer in JavaScript
b = 1

result_arith64 = Arith64.sub(a, b)  # result_arith64 is: 9007199254740991
```

### xor()

> `@staticmethod` **xor**(a: int, b: int) -> int

Bitwise XOR operation of two large numbers.

#### Parameters

- **a**: `int`
- **b**: `int`

#### Returns

`int`

The result of the XOR operation

#### Example

```python
a = 0x1FFFFFFFFFFFFF  # 9007199254740991 or 2^53 - 1
b = 0xFFFFFFFF        # 4294967295 or 2^32 - 1

result_arith64 = Arith64.xor(a, b)  # result_arith64 is: 9007194959776256
```

Note: In Python, these operations would typically be performed using built-in operators and functions, as Python natively supports arbitrary-precision integers. The Arith64 class would be more relevant in languages with fixed-size integers, like JavaScript.
