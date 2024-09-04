/**
 * Represents a time zone offset from UTC.
 * A `ZoneOffset` defines the difference in hours and minutes from UTC for a particular time zone.
 *
 * @example
 * // Creating a ZoneOffset for UTC+5:30
 * const offset = ZoneOffset.of(5, 30);
 *
 * // Using ZoneOffset with DateTime
 * const dateTime = DateTime.of(2023, 12, 1, 12, 34, 56, 0, offset;
 * print(dateTime.toString()); // Outputs the DateTime with the specified ZoneOffset "2023-12-01T12:34:56+05:30"
 */
class ZoneOffset {
    /**
     * The ID of the zone offset, typically in the format `+HH:MM` or `-HH:MM`.
     *
     * @type {string}
     * @example
     * const offset = ZoneOffset.of(5, 30);
     * print(offset.id); // Outputs: "+05:30"
     */
    id: string;

    /**
     * The total offset in seconds from UTC.
     * This is calculated as `hours * 3600 + minutes * 60`.
     *
     * @type {number}
     * @example
     * const offset = ZoneOffset.of(-7);
     * print(offset.totalSeconds); // Outputs: -25200 (for UTC-7:00)
     */
    totalSeconds: number;

    /**
     * Returns the string representation of the zone offset.
     * The format will be `+HH:MM` or `-HH:MM`.
     *
     * @returns {string} The string representation of the zone offset.
     * @example
     * const offset = ZoneOffset.of(2, 0);
     * print(offset.toString()); // Outputs: "+02:00"
     */
    toString(): string {
        return;
    }

    /**
     * Creates a `ZoneOffset` based on the provided hour and minute values.
     *
     * @param {number} hour - The hour component of the offset (can be negative for west of UTC).
     * @param {number} [minute=0] - The minute component of the offset.
     * @returns {ZoneOffset} A `ZoneOffset` instance representing the specified offset.
     * @example
     * // Create a ZoneOffset for UTC+5:30
     * const offset = ZoneOffset.of(5, 30);
     *
     * // Create a ZoneOffset for UTC-7:00
     * const offsetNegative = ZoneOffset.of(-7);
     */
    static of(hour: number, minute: number = 0): ZoneOffset {
        return;
    }
}

export default ZoneOffset;
