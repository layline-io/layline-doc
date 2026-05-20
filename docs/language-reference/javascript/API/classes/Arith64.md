# Arith64

Performs correct 64-bit arithmetic and bitwise operations in JavaScript. Use `Arith64` when working with large integers (above `Number.MAX_SAFE_INTEGER` = 9,007,199,254,740,991) or when bitwise operations need more than 32 bits.

---

## The Problem

JavaScript uses IEEE 754 double-precision floats, which can only safely represent integers up to 2^53 - 1. Beyond that, precision is lost:

```js
// JavaScript fails with large numbers
const a = 9007199254740992;  // 2^53
const b = 1;
a - b;  // 9007199254740992  ❌ Wrong! Should be 9007199254740991

// Bitwise ops are limited to 32 bits
const c = 0x1FFFFFFFFFFFFF;  // 9007199254740991
c >> 10;  // -1024  ❌ Wrong! Should be 8796093022207
```

---

## At a Glance

```js
// Correct arithmetic with large numbers
const result = Arith64.sub(9007199254740992, 1);  // 9007199254740991 ✓

// Correct 64-bit bitwise operations
const shifted = Arith64.shiftRight(0x1FFFFFFFFFFFFF, 10);  // 8796093022207 ✓
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

```js
const big = 9007199254740991;  // Number.MAX_SAFE_INTEGER

Arith64.add(big, 10);   // 9007199254741001 ✓ (JS gives 9007199254741000)
Arith64.sub(big + 1, 1); // 9007199254740991 ✓ (JS gives 9007199254740992)
Arith64.mul(3037000499, 3037000499);  // 9223372036854775801 ✓
```

---

## Bitwise Operations

| Method | Description |
|--------|-------------|
| `and(a, b)` | Bitwise AND |
| `or(a, b)` | Bitwise OR |
| `xor(a, b)` | Bitwise XOR |
| `shiftLeft(a, shifts)` | Left shift |
| `shiftRight(a, shifts)` | Right shift |

```js
const large = 0x1FFFFFFFFFFFFF;  // 9007199254740991

Arith64.and(large, 0x1000000000000);   // 4503599627370496 ✓ (JS gives 0)
Arith64.or(large, 0x1000000000000);    // 13510798882111487 ✓ (JS gives -1)
Arith64.shiftLeft(large, 10);          // 9223372036854774784 ✓ (JS gives -1024)
Arith64.shiftRight(large, 10);         // 8796093022207 ✓
```

---

## When to Use Arith64

| Scenario | Use Arith64? |
|----------|-------------|
| Numbers below 9,007,199,254,740,991 | No — JavaScript is fine |
| Numbers above MAX_SAFE_INTEGER | Yes |
| Bitwise operations on values > 32 bits | Yes |
| Working with 64-bit IDs, hashes, or timestamps | Yes |
| Simple arithmetic with small integers | No |

---

## See Also

- [Number.MAX_SAFE_INTEGER on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
