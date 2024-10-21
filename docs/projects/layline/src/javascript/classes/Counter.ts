/**
 * Represents a counter that can be incremented or decremented.
 * This class cannot be instantiated directly, but is obtained through the {@link metrics.getCounter} method.
 *
 * @class
 */
class Counter {
    /** @hidden */
    constructor() { }

    /**
     * The current count value.
     * Same as {@link getCount}.
     *
     * @type {number}
     *
     * @example
     * const myCounter = metrics.getCounter("Counter.Signals.*.MyCounter");
     * print(myCounter.count); // Output: 0 (or whatever the initial value is)
     *
     * myCounter.increment();
     * print(myCounter.count); // Output: 1
     */
    count: number;

    /**
     * Increments the counter by the specified value or by 1 if no value is provided.
     *
     * @param {number} [value=1] - The value to increment by. Defaults to 1 if not specified.
     * @returns {Counter} The Counter instance for method chaining.
     *
     * @example
     * const myCounter = metrics.getCounter("Counter.Signals.*.MyCounter");
     *
     * // Increment by 1
     * myCounter.increment();
     * print(myCounter.count); // Output: 1
     *
     * // Increment by a specific value
     * myCounter.increment(5);
     * print(myCounter.count); // Output: 6
     *
     * // Method chaining
     * myCounter.increment(2).increment(3);
     * print(myCounter.count); // Output: 11
     */
    increment(value?: number): Counter { return };

    /**
     * Decrements the counter by the specified value or by 1 if no value is provided.
     *
     * @param {number} [value=1] - The value to decrement by. Defaults to 1 if not specified.
     * @returns {Counter} The Counter instance for method chaining.
     *
     * @example
     * const myCounter = metrics.getCounter("Counter.Signals.*.MyCounter");
     * myCounter.increment(10); // Set initial value to 10
     *
     * // Decrement by 1
     * myCounter.decrement();
     * print(myCounter.count); // Output: 9
     *
     * // Decrement by a specific value
     * myCounter.decrement(3);
     * print(myCounter.count); // Output: 6
     *
     * // Method chaining
     * myCounter.decrement(2).decrement();
     * print(myCounter.count); // Output: 3
     */
    decrement(value?: number): Counter { return };

    /**
     * Returns the current count value.
     * Same as accessing the {@link count} property directly.
     *
     * @returns {number} The current count value.
     *
     * @example
     * const myCounter = metrics.getCounter("Counter.Signals.*.MyCounter");
     * myCounter.increment(5);
     *
     * const currentCount = myCounter.getCount();
     * print(currentCount); // Output: 5
     */
    getCount(): number { return };
}
export default Counter;
