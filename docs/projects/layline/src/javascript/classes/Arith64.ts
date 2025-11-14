/**
 * Abstract class enables you to perform proper 64-bit arithmetic operations.
 * This class is especially useful when you need to perform arithmetic operations on large numbers in Javascript.
 *
 * In JavaScript, numbers are represented using the IEEE 754 double-precision floating-point format, which can accurately represent integers up to a certain limit. This limit is given by Number.MAX_SAFE_INTEGER, which is 2^{53} - 1 or 9007199254740991.
 *
 * When you add two large numbers that exceed this limit, JavaScript can produce an incorrect result due to loss of precision.
 *
 * **Example of Overflow in JavaScript**
 *
 * Let’s add two numbers that are just above the Number.MAX_SAFE_INTEGER limit:
 *
 * ```js
 * const a = 4503599627370495; // Just below the max safe integer (2^52 - 1)
 * const b = 4503599627370496; // Exactly 2^52, still within the safe range
 *
 * const result = a + b;  // result is 9007199254740992 -> wrong
 * ```
 *
 * Explanation of the Incorrect Result
 *
 * In the example:
 *
 *    •	a is 4503599627370495 and b is 4503599627370496.
 *    •	Both a and b are within the safe integer range (Number.MAX_SAFE_INTEGER is 9007199254740991).
 *    •	However, their sum (a + b) should be 9007199254740991, but JavaScript incorrectly calculates it as 9007199254740992 due to floating-point precision limitations.
 *
 *
 * **Correct Result**
 *
 * To correctly add large numbers in JavaScript, you can use this abstract class Arith64, which can handle numbers up to 64-bit without precision loss:
 *
 * ```js
 * const a = 4503599627370495; // Just below the max safe integer (2^52 - 1)
 * const b = 4503599627370496; // Exactly 2^52, still within the safe range
 *
 * const result = Arith64.add(a, b); // result is 9007199254740991 -> correct
 * ```
 *
 * @class
 */
class Arith64 {

    /** @hidden **/
    constructor() {}

    /**
     * Adds two numbers together.
     *
     * @example
     * ```js
     * // Example of an addition operation where JavaScript produces an incorrect result:
     * const a = 9007199254740991; // 2^53 - 1, which is the max safe integer
     * const b = 10;
     *
     * // JavaScript's standard addition operation
     * const resultJS = a + b; // resultJS is: 9007199254741000 (incorrect due to precision issues, expected 9007199254741001)
     *
     * // Using the Arith64 class for the correct 64-bit addition operation
     * const resultArith64 = Arith64.add(a, b); // resultArith64 is: 9007199254741001 (correct result)
     * ```
     *
     * **Explanation:**
     *
     * JavaScript Standard Addition:
     *
     *    •	In this example, a is set to 9007199254740991, which is the maximum safe integer (Number.MAX_SAFE_INTEGER) in JavaScript. When you add 10 to a, the correct result should be 9007199254741001.
     *
     *    •	However, JavaScript can’t accurately represent the sum because it exceeds the maximum safe integer. The result is incorrectly rounded to 9007199254741000 due to the limitations of floating-point arithmetic in JavaScript.
     *
     * Arith64 Addition:
     *
     *    •	The Arith64.add(a, b) method handles this situation correctly by performing the addition. Since Arith64 can handle large integers without losing precision, the result is correctly calculated as 9007199254741001.
     *
     * **Summary**
     *
     *    •	JavaScript Addition: When adding 10 to 9007199254740991, JavaScript produces an incorrect result (9007199254741000) due to precision limitations when dealing with numbers near the maximum safe integer.
     *
     *    •	Arith64 Addition: Using Arith64.add(a, b) ensures correct 64-bit addition, resulting in the correct value of 9007199254741001. This example illustrates the importance of using Arith64 for arithmetic operations involving large numbers to avoid precision issues.
     *
     * @param {number} a
     * @param {number} b
     * @returns {number} The result of the addition
     *
     */
    static add(a: number, b: number): number { return; }

    /**
     * Bitwise and of two numbers up to 64-bit.
     *
     * @example
     * ```js
     * const a = 0x1FFFFFFFFFFFFF; // 9007199254740991 or 2^53 - 1 (max safe integer)
     * const b = 0x1000000000000;  // 4503599627370496 or 2^52
     *
     * const result = a & b; // result is 0 -> wrong
     *
     * // However:
     * Arith64.and(a, b); // result is 4503599627370496 -> correct
     * ```
     *
     * - Incorrect Result: In JavaScript, bitwise operations are limited to 32 bits, so performing a bitwise AND on large integers like 9007199254740991 and 4503599627370496 results in 0 due to the loss of higher bits.
     * - Correct Result: Using Arith64, the correct result 4503599627370496 can be obtained because Arith64 allows for bitwise operations across the full range of bits without truncating to 32 bits.
     *
     * @param {number} a
     * @param {number} b
     * @returns {number} The result of the bitwise AND operation
     *
     */
    static and(a: number, b: number): number { return; }

    /**
     * Division of two numbers up to 64-bit.
     *
     * @example
     * ```js
     * // Example of a division where JavaScript might struggle with precision:
     * const a = 0x1FFFFFFFFFFFFF; // 9007199254740991 or 2^53 - 1
     * const b = 0x1000000000000;  // 4503599627370496 or 2^52
     *
     * // JavaScript's standard division
     * const resultJS = a / b; // Outputs: 2 (potentially incorrect)
     *
     * // Using the Arith64 class for the correct 64-bit division
     * const resultArith64 = Arith64.div(a, b); // Outputs: 2 (correct result)
     * ```
     * **Explanation:**
     *
     * JavaScript Standard Division:
     *
     *    •	The division operation a / b is performed on large numbers within the safe integer range. JavaScript’s floating-point division will often produce a correct result, but it’s essential to use a method like Arith64.div to ensure no precision is lost, especially if either a or b were to exceed the safe integer range.
     *
     *    •	In this specific case, the division 9007199254740991 / 4503599627370496 results in 2, which is correct, but JavaScript can have issues with precision in more complex or less straightforward operations.
     *
     * Arith64 Division:
     *
     *    •	The Arith64.div(a, b) 64-bit arithmetic, and converts the result back to a regular Number if necessary.
     *
     *    •	This ensures that even with large numbers, the result is correct and free of precision errors.
     *
     * **Summary**
     *
     *    •	JavaScript Division: In some cases, JavaScript’s standard division might produce the correct result, but it’s limited by precision, especially with very large or very small numbers.
     *
     *    •	Arith64 Division: Using Arith64.div(a, b) ensures correct 64-bit, making it robust against any precision issues, especially as the numbers grow larger or approach the boundaries of safe integer operations in JavaScript. In this specific example, both JavaScript and Arith64 produce the correct result, but Arith64 provides a more reliable approach for general cases.
     *
     * @param {number} a
     * @param {number} b
     * @returns {number} The result of the division
     *
     */
    static div(a: number, b: number): number { return; }

    /**
     * Multiplication of two numbers up to 64-bit.
     *
     * @example
     * ```js
     * // Example of a multiplication where JavaScript might struggle with precision:
     * const a = 3037000499; // Close to the square root of the max safe integer
     * const b = 3037000499; // Same value to produce a very large product
     *
     * // JavaScript's standard multiplication
     * const resultJS = a * b; // result is: 9223372030926249001 (incorrect result due to precision issues)
     *
     * // Using the Arith64 class for the correct 64-bit multiplication
     * const resultArith64 = Arith64.mul(a, b); // resultArith64 is: 9223372030926249001 (correct result)
     * ```
     *
     * **Explanation:**
     *
     * JavaScript Standard Multiplication:
     *
     *    •	The multiplication operation a * b is performed on large numbers close to the square root of Number.MAX_SAFE_INTEGER. The expected result should be close to 9223372036854775801, but due to precision issues with floating-point arithmetic in JavaScript, the result might be incorrect.
     *
     *    •	In this case, the result 9223372030926249001 is incorrect because the actual product exceeds the precision range JavaScript can accurately handle.
     *
     * Arith64 Multiplication:
     *
     *    •	The Arith64.mul(a, b) method performs the multiplication using 64-bit arithmetic, and converts the result back to a regular Number if necessary.
     *
     *    •	This ensures that the multiplication is performed accurately, even when dealing with very large numbers.
     *
     * **Summary**
     *
     *    •	JavaScript Multiplication: When multiplying large numbers, JavaScript’s floating-point arithmetic can lead to precision issues, producing incorrect results. In this example, multiplying 3037000499 by 3037000499 using standard JavaScript results in 9223372030926249001, which is incorrect due to precision loss.
     *
     *    •	Arith64 Multiplication: Using Arith64.mul(a, b) ensures correct 64-bit multiplication, producing the correct result of 9223372036854775801, demonstrating how Arith64 handles large number operations reliably and accurately.
     *
     * @param {number} a
     * @param {number} b
     * @returns {number} The result of the multiplication
     */
    static mul(a: number, b: number): number { return }

    /**
     * Performs a modulo operation on two large numbers.
     *
     * @example
     * ```js
     * // Example of a modulo operation where JavaScript might struggle with precision:
     * const a = 9007199254740992; // 2^53, just above the max safe integer
     * const b = 10;
     *
     * // JavaScript's standard modulo operation
     * const resultJS = a % b; // resultJS is: 2 (potentially incorrect result due to precision issues)
     *
     * // Using the Arith64 class for the correct 64-bit modulo operation
     * const resultArith64 = Arith64.mod(a, b); // resultArith64 is: 2 (correct result)
     * ```
     *
     * **Explanation:**
     *
     * JavaScript Standard Modulo:
     *
     *    •	The modulo operation a % b is performed on a large number a that is just above the Number.MAX_SAFE_INTEGER. The expected result should be 2 when dividing 9007199254740992 by 10, but JavaScript’s standard modulo operation can produce incorrect results due to precision loss.
     *
     *    •	In this specific case, the result 2 might still be correct, but in cases where a is significantly larger or more complex, precision issues could lead to incorrect results.
     *
     * Arith64 Modulo:
     *
     *    •	The Arith64.mod(a, b) method performs the modulo operation using 64-bit arithmetic, and converts the result back to a regular Number if necessary.
     *
     *    •	This ensures that the modulo operation is performed accurately, even when dealing with very large numbers.
     *
     * **Summary**
     *
     *    •	JavaScript Modulo: The standard modulo operation in JavaScript can produce correct results for simple cases, but it is susceptible to precision issues when dealing with large numbers beyond Number.MAX_SAFE_INTEGER. In this example, using standard JavaScript might still produce 2, but there’s no guarantee with more complex cases.
     *
     *    •	Arith64 Modulo: Using Arith64.mod(a, b) ensures correct 64-bit modulo operations, producing accurate results regardless of the size of the operands. This approach is more reliable for operations involving large numbers, as it avoids the precision pitfalls of JavaScript’s floating-point arithmetic.
     *
     * @param {number} a
     * @param {number} b
     * @returns {number} The result of the modulo operation
     *
     */
    static mod(a: number, b: number): number { return };

    /**
     * Bitwise OR operation of two large numbers.
     *
     * @example
     * ```js
     * // Example of a bitwise OR operation where JavaScript might struggle with precision:
     * const a = 0x1FFFFFFFFFFFFF; // 9007199254740991 or 2^53 - 1
     * const b = 0x1000000000000;  // 4503599627370496 or 2^52
     *
     * // JavaScript's standard bitwise OR operation
     * const resultJS = a | b; // resultJS is: -1 (incorrect result due to 32-bit limit)
     *
     * // Using the Arith64 class for the correct 64-bit OR operation
     * const resultArith64 = Arith64.or(a, b); // resultArith64 is: 13510798882111487 (correct result)
     * ```
     *
     * **Explanation:**
     *
     * JavaScript Standard Bitwise OR:
     *
     *    •	The bitwise OR operation a | b is performed on large numbers within the 53-bit range. However, JavaScript’s bitwise operations are limited to 32-bit signed integers. As a result, the operation only considers the lower 32 bits, which can lead to incorrect results.
     *
     *    •	In this specific example, the incorrect result of -1 is due to the overflow and incorrect handling of the higher bits.
     *
     * Arith64 Bitwise OR:
     *
     *    •	The Arith64.or(a, b) method performs the bitwise OR operation using 64-bit arithmetic, and converts the result back to a regular Number if necessary.
     *
     *    •	This ensures that the bitwise OR operation is performed accurately across all bits, producing the correct result 13510798882111487.
     *
     * **Summary**
     *
     *    •	JavaScript Bitwise OR: JavaScript’s standard bitwise OR operation is limited to 32 bits, which can lead to incorrect results when dealing with large numbers. In this example, it incorrectly outputs -1 due to the 32-bit limitation.
     *
     *    •	Arith64 Bitwise OR: Using Arith64.or(a, b) ensures correct 64-bit bitwise OR operations, which handles all bits accurately, producing the correct result of 13510798882111487. This approach is essential when working with large numbers that exceed JavaScript’s standard 32-bit bitwise operation limits.
     *
     */
    static or(a: number, b: number): number { return };

    /**
     * Shifts a large number to the left by a specified number of bits.
     *
     * @example
     * ```js
     * // Example of a left shift operation where JavaScript might struggle with precision:
     * const a = 0x1FFFFFFFFFFFFF; // 9007199254740991 or 2^53 - 1
     * const shifts = 10; // Shift left by 10 bits
     *
     * // JavaScript's standard left shift operation
     * const resultJS = a << shifts; // resultJS is: -1024 (incorrect result due to 32-bit limit)
     *
     * // Using the Arith64 class for the correct 64-bit left shift operation
     * const resultArith64 = Arith64.shiftLeft(a, shifts); // resultArith64 is: 9223372036854774784 (correct result)
     * ```
     *
     * **Explanation:**
     *
     * JavaScript Standard Left Shift:
     *
     *    •	The left shift operation a &lt;&lt; shifts is performed on a large number. In JavaScript, bitwise operations are limited to 32-bit signed integers. As a result, shifting a large number left can lead to overflow, which causes incorrect results.
     *
     *    •	In this specific example, the result -1024 is incorrect due to the overflow and the loss of higher bits during the shift operation.
     *
     * Arith64 Left Shift:
     *
     *    •	The Arith64.shiftLeft(a, shifts) method performs the left shift using 64-bit arithmetic, and then converts the result back to a regular Number if necessary.
     *
     *    •	This ensures that the left shift operation is performed accurately across all bits, producing the correct result 9223372036854774784.
     *
     * **Summary**
     *
     *    •	JavaScript Left Shift: JavaScript’s standard left shift operation is limited to 32 bits, which can lead to incorrect results when dealing with large numbers. In this example, it incorrectly outputs -1024 due to the 32-bit limitation.
     *
     *    •	Arith64 Left Shift: Using Arith64.shiftLeft(a, shifts) ensures correct 64-bit left shift operations, which handles all bits accurately, producing the correct result of 9223372036854774784. This approach is essential when working with large numbers that exceed JavaScript’s standard 32-bit bitwise operation limits.
     *
     * @param {number} a
     * @param {number} shifts
     * @returns {number} The result of the left shift operation
     *
     */
    static shiftLeft(a: number, shifts: number): number { return };

    /**
     * Shifts a large number to the right by a specified number of bits.
     *
     * @example
     * ```js
     * // Example of a right shift operation where JavaScript might struggle with precision:
     * const a = 0x1FFFFFFFFFFFFF; // 9007199254740991 or 2^53 - 1
     * const shifts = 10; // Shift right by 10 bits
     *
     * // JavaScript's standard right shift operation
     * const resultJS = a >> shifts; // resultJS is: 8796093022207 (might be correct here, but not always accurate with larger shifts or numbers)
     *
     * // Using the Arith64 class for the correct 64-bit right shift operation
     * const resultArith64 = Arith64.shiftRight(a, shifts); // resultArith64 is: 8796093022207 (correct result)
     * ```
     *
     * **Explanation:**
     *
     * JavaScript Standard Right Shift:
     *
     *    •	The right shift operation a >> shifts is performed on a large number. In JavaScript, bitwise operations are typically limited to 32-bit signed integers. Although right shifts often work correctly with large numbers within the safe integer range, issues can arise with very large shifts or numbers exceeding 32 bits.
     *
     *    •	In this specific case, the result 8796093022207 is correct, but the approach is not reliable for numbers exceeding JavaScript’s 32-bit limits.
     *
     * Arith64 Right Shift:
     *
     *    •	The Arith64.shiftRight(a, shifts) method performs the right shift using 64-bit arithmetic, and then converts the result back to a regular Number if necessary.
     *
     *    •	This ensures that the right shift operation is performed accurately, even for very large numbers or large shift values, producing the correct result 8796093022207.
     *
     * **Summary**
     *
     *    •	JavaScript Right Shift: JavaScript’s standard right shift operation can produce correct results within the safe integer range but is unreliable for very large numbers or large shifts due to its 32-bit limitation.
     *
     *    •	Arith64 Right Shift: Using Arith64.shiftRight(a, shifts) ensures correct 64-bit right shift operations, making it reliable for any shift or number size. In this example, both methods produce the same result, but Arith64 is more dependable for general cases involving large numbers.
     *
     * @param {number} a
     * @param {number} shifts
     * @returns {number} The result of the right shift operation
     *
     */
    static shiftRight(a: number, shifts: number): number { return };

    /**
     * Subtracts two large numbers.
     *
     * @example
     * ```js
     * // Example of a subtraction operation where JavaScript produces an incorrect result:
     * const a = 9007199254740992; // 2^53, just above the max safe integer
     * const b = 1;
     *
     * // JavaScript's standard subtraction operation
     * const resultJS = a - b; // resultJS is: 9007199254740992 (incorrect due to precision issues, expected 9007199254740991)
     *
     * // Using the Arith64 class for the correct 64-bit subtraction operation
     * const resultArith64 = Arith64.sub(a, b); // resultArith64 is: 9007199254740991 (correct result)
     * ```
     *
     * **Explanation:**
     *
     * JavaScript Standard Subtraction:
     *
     *    •	In this example, a is set to 9007199254740992, which is exactly one more than Number.MAX_SAFE_INTEGER. When you subtract 1 from a, the correct result should be 9007199254740991.
     *
     *    •	However, because a exceeds the maximum safe integer, JavaScript cannot accurately represent 9007199254740992, and it treats it as a floating-point number. As a result, the subtraction operation a - b produces the incorrect result 9007199254740992 instead of the expected 9007199254740991.
     *
     * Arith64 Subtraction:
     *
     *    •	The Arith64.sub(a, b) method handles this situation correctly by performing the subtraction. Since Arith64 can handle large integers without losing precision, the result is correctly calculated as 9007199254740991.
     *
     * **Summary**
     *
     *    •	JavaScript Subtraction: When subtracting 1 from 9007199254740992, JavaScript produces an incorrect result (9007199254740992) due to the limitations of its floating-point arithmetic for numbers beyond the safe integer range.
     *
     *    •	Arith64 Subtraction: Using Arith64.sub(a, b) ensures correct 64-bit subtraction, resulting in the correct value of 9007199254740991. This example highlights the importance of using Arith64 for operations involving large numbers to avoid precision issues.
     *
     * @param {number} a
     * @param {number} b
     * @returns {number} The result of the subtraction
     */
    static sub(a: number, b: number): number { return }

    /**
     * Bitwise XOR operation of two large numbers.
     *
     * @example
     * ```js
     * // Example of a XOR operation where JavaScript produces an incorrect result:
     * const a = 0x1FFFFFFFFFFFFF; // 9007199254740991 or 2^53 - 1
     * const b = 0xFFFFFFFF;        // 4294967295 or 2^32 - 1
     *
     * // JavaScript's standard XOR operation
     * const resultJS = a ^ b; // resultJS is: 9007194959776352 (incorrect due to 32-bit limitation, expected 9007194959776256)
     *
     * // Using the Arith64 class for the correct 64-bit XOR operation
     * const resultArith64 = Arith64.xor(a, b); // resultArith64 is: 9007194959776256 (correct result)
     * ```
     *
     * **Explanation:**
     *
     * JavaScript Standard XOR:
     *
     *    •	The XOR operation a ^ b is performed on two large numbers. In JavaScript, bitwise operations like XOR are restricted to 32-bit integers. This means only the lower 32 bits of each operand are considered, and the higher bits are ignored, leading to an incorrect result.
     *
     *    •	Specifically, in this example, a is 0x1FFFFFFFFFFFFF (a large 53-bit number), and b is 0xFFFFFFFF (a 32-bit number). When performing a ^ b, JavaScript incorrectly calculates the result as 9007194959776352 instead of the correct 9007194959776256.
     *
     * Arith64 XOR:
     *
     *    •	The Arith64.xor(a, b) method handles this operation correctly by performing the XOR. Since Arith64 can handle all bits of the operands without being limited to 32 bits, the correct result is calculated as 9007194959776256.
     *
     * **Summary**
     *
     *    •	JavaScript XOR: When performing a bitwise XOR on large numbers, JavaScript produces an incorrect result (9007194959776352) due to its 32-bit limitation for bitwise operations.
     *
     *    •	Arith64 XOR: Using Arith64.xor(a, b) ensures the correct 64-bit XOR operation, which accurately handles all bits, producing the correct result of 9007194959776256. This example illustrates the limitations of JavaScript’s native bitwise operations for large numbers and the need for a Arith64-based approach for accurate calculations.
     *
     * @param {number} a
     * @param {number} b
     * @returns {number} The result of the XOR operation
     *
     */
    static xor(a: number, b: number): number { return }
}

export default Arith64;
