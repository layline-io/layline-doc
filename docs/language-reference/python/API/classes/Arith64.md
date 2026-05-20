---
id: py-Arith64
---

# Arith64

Performs correct 64-bit arithmetic and bitwise operations. Use `Arith64` when working with large integers or when bitwise operations need more than 32 bits.

---

## The Problem

Python integers have arbitrary precision, so 64-bit arithmetic is less critical than in JavaScript. However, `Arith64` is still useful for:
- Consistency with other language implementations
- Specific use cases where 64-bit arithmetic semantics are required
- Bitwise operations that need more than 32 bits

```python
# Python handles large integers natively
a = 9007199254740992
b = 1
a - b  # 9007199254740991 ✓ (Python is correct)

# But Arith64 provides explicit 64-bit semantics
result = Arith64.sub(9007199254740992, 1)  # 9007199254740991
```

---

## At a Glance

```python
# Correct arithmetic with large numbers
result = Arith64.sub(9007199254740992, 1)  # 9007199254740991

# Correct 64-bit bitwise operations
shifted = Arith64.shiftRight(0x1FFFFFFFFFFFFF, 10)  # 8796093022207
```

---

## Arithmetic Operations

| Method | Description |
|--------|-------------|
| `add(a, b)` | Add two numbers |
| `sub(a, b)` | Subtract two numbers |
| `mul(a, b)` | Multiply two numbers |
| `div(a, b)` | Divide two numbers |
| `mod(a, b)` | Modulo operation |

```python
big = 9007199254740991  # Number.MAX_SAFE_INTEGER

Arith64.add(big, 10)                     # 9007199254741001
Arith64.sub(big + 1, 1)                  # 9007199254740991
Arith64.mul(3037000499, 3037000499)      # 9223372036854775801
```

---

## Bitwise Operations

| Method | Description |
|--------|-------------|
| `and_(a, b)` | Bitwise AND |
| `or_(a, b)` | Bitwise OR |
| `xor(a, b)` | Bitwise XOR |
| `shiftLeft(a, shifts)` | Left shift |
| `shiftRight(a, shifts)` | Right shift |

```python
large = 0x1FFFFFFFFFFFFF  # 9007199254740991

Arith64.and_(large, 0x1000000000000)   # 4503599627370496
Arith64.or_(large, 0x1000000000000)    # 13510798882111487
Arith64.shiftLeft(large, 10)           # 9223372036854774784
Arith64.shiftRight(large, 10)          # 8796093022207
```

---

## When to Use Arith64

| Scenario | Use Arith64? |
|----------|-------------|
| Numbers below 9,007,199,254,740,991 | No — Python handles these natively |
| Numbers above MAX_SAFE_INTEGER | Yes — explicit 64-bit semantics |
| Bitwise operations on values > 32 bits | Yes |
| Working with 64-bit IDs, hashes, or timestamps | Yes |
| Simple arithmetic with small integers | No |

---

## See Also

- [Number.MAX_SAFE_INTEGER on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
