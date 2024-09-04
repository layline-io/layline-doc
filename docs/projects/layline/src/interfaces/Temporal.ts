/**
 * Temporal interface
 *
 * Framework-level interface defining read-write access to a temporal object, such as a date, time, offset or some combination of these.
 * This is the base interface type for date, time and offset objects that are complete enough to be manipulated using plus and minus.
 * It is implemented by those classes that can provide and manipulate information as fields or queries.
 *
 * Most date and time information can be represented as a number.
 * These are modeled using TemporalField with the number held using a long to handle large values.
 * Year, month and day-of-month are simple examples of fields, but they also include instant and offsets.
 *
 * Two pieces of date/time information cannot be represented by numbers, the chronology and the time-zone.
 *
 * This interface is a framework-level interface that should not be widely used in application code.
 * Instead, applications should create and pass around instances of concrete types, such as LocalDate.
 * There are many reasons for this, part of which is that implementations of this interface may be in calendar systems other than ISO.
 *
 * @example
 * ```js
 * DateTime.now(); // returns a new DateTime object which implements Temporal
 * ```
 */
/**
 * Interface representing a Temporal object, which includes methods for formatting the temporal data.
 */
interface Temporal {

    /**
     * Returns a string representation of the Temporal instance.
     *
     * @returns {string} A string representing the Temporal instance.
     * @example
     * const temporal = DateTime.now();
     * print(temporal.toString()); // Outputs something like: "2024-09-03T12:34:56.789Z"
     */
    toString(): string;

    /**
     * Returns an ISO 8601 string representation of the Temporal instance.
     *
     * @returns {string} An ISO 8601 formatted string representing the Temporal instance.
     * @example
     * const temporal = DateTime.now();
     * print(temporal.toISOString()); // Outputs something like: "2024-09-03T12:34:56.789Z"
     */
    toISOString(): string;
}
export default Temporal;
