import TimeZone from "@site/layline/src/javascript/classes/TimeZone";
import Duration from "@site/layline/src/javascript/classes/Duration";

/**
 * Represents a time without a date or time zone.
 * This is an abstract class and cannot be instantiated directly.
 * Use the static methods to create Time instances.
 *
 * @class
 */
class Time {

    /** @hidden **/
    constructor() {}

    /**
     * The hour component of the time.
     * @type {number}
     * @example
     * const time = Time.of(14, 30);
     * print(time.hour); // 14
     */
    hour: number;

    /**
     * The minute component of the time.
     * @type {number}
     * @example
     * const time = Time.of(14, 30);
     * print(time.minute); // 30
     */
    minute: number;

    /**
     * The nanosecond component of the time.
     * @type {number}
     * @example
     * const time = Time.of(14, 30, 15, 123456789);
     * print(time.nano); // 123456789
     */
    nano: number;

    /**
     * The second component of the time.
     * @type {number}
     * @example
     * const time = Time.of(14, 30, 15);
     * print(time.second); // 15
     */
    second: number;

    /**
     * Adds a duration to this time.
     * @param {Duration} duration - The duration to add.
     * @returns {Time} A new Time instance with the duration added.
     * @example
     * const time = Time.of(10, 30);
     * const newTime = time.add(Duration.ofHours(2));
     * print(newTime.toString()); // Output: "12:30:00"
     */
    add(duration: Duration): Time { return };

    /**
     * Compares this time to another time.
     * @param {Time} other - The other time to compare to.
     * @returns {number} A negative integer, zero, or a positive integer as this time is before, equal to, or after the specified time.
     * @example
     * const time1 = Time.of(10, 30);
     * const time2 = Time.of(11, 0);
     * print(time1.compareTo(time2)); // Output: -1
     */
    compareTo(other: Time): number { return };

    /**
     * Checks if this time is after the specified time.
     * @param {Time} other - The time to compare to.
     * @returns {boolean} true if this time is after the specified time, false otherwise.
     * @example
     * const time1 = Time.of(10, 30);
     * const time2 = Time.of(9, 0);
     * print(time1.isAfter(time2)); // Output: true
     */
    isAfter(other: Time): boolean { return };

    /**
     * Checks if this time is before the specified time.
     * @param {Time} other - The time to compare to.
     * @returns {boolean} true if this time is before the specified time, false otherwise.
     * @example
     * const time1 = Time.of(10, 30);
     * const time2 = Time.of(11, 0);
     * print(time1.isBefore(time2)); // Output: true
     */
    isBefore(other: Time): boolean { return };

    /**
     * Checks if this time is equal to the specified time.
     * @param {Time} other - The time to compare to.
     * @returns {boolean} true if this time is equal to the specified time, false otherwise.
     * @example
     * const time1 = Time.of(10, 30);
     * const time2 = Time.of(10, 30);
     * print(time1.isEqual(time2)); // Output: true
     */
    isEqual(other: Time): boolean { return };

    /**
     * Subtracts a duration from this time.
     * @param {Duration} duration - The duration to subtract.
     * @returns {Time} A new Time instance with the duration subtracted.
     * @example
     * const time = Time.of(10, 30);
     * const newTime = time.minus(Duration.ofHours(1));
     * print(newTime.toString()); // Output: "09:30:00"
     */
    minus(duration: Duration): Time { return };

    /**
     * Returns a copy of this time with the specified number of hours subtracted.
     * @param {number} hours - The number of hours to subtract.
     * @returns {Time} A new Time instance with the hours subtracted.
     * @example
     * const time = Time.of(10, 30);
     * const newTime = time.minusHours(2);
     * print(newTime.toString()); // Output: "08:30:00"
     */
    minusHours(hours: number): Time { return };

    /**
     * Returns a copy of this time with the specified number of minutes subtracted.
     * @param {number} minutes - The number of minutes to subtract.
     * @returns {Time} A new Time instance with the minutes subtracted.
     * @example
     * const time = Time.of(10, 30);
     * const newTime = time.minusMinutes(15);
     * print(newTime.toString()); // Output: "10:15:00"
     */
    minusMinutes(minutes: number): Time { return };

    /**
     * Returns a copy of this time with the specified number of seconds subtracted.
     * @param {number} seconds - The number of seconds to subtract.
     * @returns {Time} A new Time instance with the seconds subtracted.
     * @example
     * const time = Time.of(10, 30, 30);
     * const newTime = time.minusSeconds(15);
     * print(newTime.toString()); // Output: "10:30:15"
     */
    minusSeconds(seconds: number): Time { return };

    /**
     * Returns a copy of this time with the specified number of nanoseconds subtracted.
     * @param {number} nanos - The number of nanoseconds to subtract.
     * @returns {Time} A new Time instance with the nanoseconds subtracted.
     * @example
     * const time = Time.of(10, 30, 0, 500000000);
     * const newTime = time.minusNanos(250000000);
     * print(newTime.toString()); // Output: "10:30:00.250000000"
     */
    minusNanos(nanos: number): Time { return };

    /**
     * Adds a duration to this time.
     * @param {Duration} duration - The duration to add.
     * @returns {Time} A new Time instance with the duration added.
     * @example
     * const time = Time.of(10, 30);
     * const newTime = time.plus(Duration.ofHours(2));
     * print(newTime.toString()); // Output: "12:30:00"
     */
    plus(duration: Duration): Time { return };

    /**
     * Returns a copy of this time with the specified number of hours added.
     * @param {number} hours - The number of hours to add.
     * @returns {Time} A new Time instance with the hours added.
     * @example
     * const time = Time.of(10, 30);
     * const newTime = time.plusHours(2);
     * print(newTime.toString()); // Output: "12:30:00"
     */
    plusHours(hours: number): Time { return };

    /**
     * Returns a copy of this time with the specified number of minutes added.
     * @param {number} minutes - The number of minutes to add.
     * @returns {Time} A new Time instance with the minutes added.
     * @example
     * const time = Time.of(10, 30);
     * const newTime = time.plusMinutes(15);
     * print(newTime.toString()); // Output: "10:45:00"
     */
    plusMinutes(minutes: number): Time { return };

    /**
     * Returns a copy of this time with the specified number of seconds added.
     * @param {number} seconds - The number of seconds to add.
     * @returns {Time} A new Time instance with the seconds added.
     * @example
     * const time = Time.of(10, 30, 30);
     * const newTime = time.plusSeconds(15);
     * print(newTime.toString()); // Output: "10:30:45"
     */
    plusSeconds(seconds: number): Time { return };

    /**
     * Returns a copy of this time with the specified number of nanoseconds added.
     * @param {number} nanos - The number of nanoseconds to add.
     * @returns {Time} A new Time instance with the nanoseconds added.
     * @example
     * const time = Time.of(10, 30, 0, 500000000);
     * const newTime = time.plusNanos(250000000);
     * print(newTime.toString()); // Output: "10:30:00.750000000"
     */
    plusNanos(nanos: number): Time { return };

    /**
     * Returns a string representation of this time.
     * @param {string} [format] - The format to use for the string representation.
     * @returns {string} A string representation of this time.
     * @example
     * const time = Time.of(10, 30, 15);
     * print(time.toString()); // Output: "10:30:15"
     * print(time.toString("HH:mm")); // Output: "10:30"
     */
    toString(format?: string): string { return };

    /**
     * Returns a copy of this time with the hour changed.
     * @param {number} hour - The new hour value (0-23).
     * @returns {Time} A new Time instance with the updated hour.
     * @example
     * const time = Time.of(10, 30);
     * const newTime = time.withHour(14);
     * print(newTime.toString()); // Output: "14:30:00"
     */
    withHour(hour: number): Time { return };

    /**
     * Returns a copy of this time with the minute changed.
     * @param {number} minute - The new minute value (0-59).
     * @returns {Time} A new Time instance with the updated minute.
     * @example
     * const time = Time.of(10, 30);
     * const newTime = time.withMinute(45);
     * print(newTime.toString()); // Output: "10:45:00"
     */
    withMinute(minute: number): Time { return };

    /**
     * Returns a copy of this time with the second changed.
     * @param {number} second - The new second value (0-59).
     * @returns {Time} A new Time instance with the updated second.
     * @example
     * const time = Time.of(10, 30, 0);
     * const newTime = time.withSecond(30);
     * print(newTime.toString()); // Output: "10:30:30"
     */
    withSecond(second: number): Time { return };

    /**
     * Returns a copy of this time with the nanosecond changed.
     * @param {number} nano - The new nanosecond value (0-999,999,999).
     * @returns {Time} A new Time instance with the updated nanosecond.
     * @example
     * const time = Time.of(10, 30, 0, 0);
     * const newTime = time.withNano(500000000);
     * print(newTime.toString()); // Output: "10:30:00.500000000"
     */
    withNano(nano: number): Time { return };

    /**
     * Returns the current time.
     * @param {TimeZone} [zone] - The time zone to use (optional).
     * @returns {Time} The current time.
     * @example
     * const currentTime = Time.now();
     * print(currentTime.toString()); // Output: Current time, e.g., "15:30:45"
     */
    static now(zone?: TimeZone): Time { return };

    /**
     * Creates a new Time instance with the specified hour, minute, second, and nanosecond.
     * @param {number} hour - The hour of the day (0-23).
     * @param {number} [minute=0] - The minute of the hour (0-59).
     * @param {number} [second=0] - The second of the minute (0-59).
     * @param {number} [nano=0] - The nanosecond of the second (0-999,999,999).
     * @returns {Time} A new Time instance.
     * @example
     * const time1 = Time.of(10, 30);
     * print(time1.toString()); // Output: "10:30:00"
     *
     * const time2 = Time.of(14, 45, 30, 500000000);
     * print(time2.toString()); // Output: "14:45:30.500000000"
     */
    static of(hour: number, minute?: number, second?: number, nano?: number): Time { return };

    /**
     * Parses a string representation of time into a Time instance.
     * @param {string} value - The string to parse.
     * @param {string} [format] - The format of the input string (optional).
     * @returns {Time} A new Time instance parsed from the input string.
     * @example
     * const time1 = Time.parse("10:30");
     * print(time1.toString()); // Output: "10:30:00"
     *
     * const time2 = Time.parse("14:45:30", "HH:mm:ss");
     * print(time2.toString()); // Output: "14:45:30"
     */
    static parse(value: string, format?: string): Time { return };
}
export default Time;
