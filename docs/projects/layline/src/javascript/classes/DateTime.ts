
import TimeZone from "./TimeZone";
import Time from "@site/layline/src/javascript/classes/Time";
import LocalDate from "@site/layline/src/javascript/classes/LocalDate";
import ZoneOffset from "@site/layline/src/javascript/classes/ZoneOffset";


/**
 * Represents a point in time, encapsulating date and time information.
 * This class cannot be instantiated directly but provides various methods
 * for manipulating and interacting with date-time values.
 *
 * @class
 */
class DateTime {

    /** @hidden */
    constructor() {}

    /**
     * The date part of this DateTime.
     * @type {LocalDate}
     * @example
     * const date = dateTime.date; // The date part, e.g. "2024-12-25"
     */
    date: LocalDate;

    /**
     * The day of the month, from 1 to 31.
     * @type {number}
     * @example
     * const dayOfMonth = dateTime.dayOfMonth; // The day of the month, e.g. 25
     */
    dayOfMonth: number;

    /**
     * The day of the week, from 1 (Monday) to 7 (Sunday).
     * @type {number}
     * @example
     * const dayOfWeek = dateTime.dayOfWeek; // The day of the week, e.g. 5 (Friday)
     */
    dayOfWeek: number;

    /**
     * The day of the year, from 1 to 365 (or 366 in a leap year).
     * @type {number}
     * @example
     * const dayOfYear = dateTime.dayOfYear; // The day of the year, e.g. 360
     */
    dayOfYear: number;

    /**
     * The hour of the day, from 0 to 23.
     * @type {number}
     * @example
     * const hour = dateTime.hour; // The hour of the day, e.g. 14
     */
    hour: number;

    /**
     * The minute of the hour, from 0 to 59.
     * @type {number}
     * @example
     * const minute = dateTime.minute; // The minute of the hour, e.g. 30
     */
    minute: number;

    /**
     * The month of the year, from 1 (January) to 12 (December).
     * @type {number}
     * @example
     * const month = dateTime.month; // The month of the year, e.g. 12
     */
    month: number;

    /**
     * The nanosecond of the second, from 0 to 999,999,999.
     * @type {number}
     * @example
     * const nano = dateTime.nano; // The nanosecond of the second, e.g. 500000000
     */
    nano: number;

    /**
     * The second of the minute, from 0 to 59.
     * @type {number}
     * @example
     * const second = dateTime.second; // The second of the minute, e.g. 0
     */
    second: number;

    /**
     * The time part of this DateTime.
     * @type {Time}
     * @example
     * const time = dateTime.time; // The time part, e.g. "14:30:00"
     */
    time: Time;

    /**
     * The year part of this DateTime.
     * @type {number}
     * @example
     * const year = dateTime.year; // The year part, e.g. 2024
     */
    year: number;

    /**
     * Associates this DateTime with a specific time zone.
     *
     * @param {TimeZone} zone - The time zone to associate with.
     * @returns {DateTime} A new DateTime instance representing the same moment in time in the specified zone.
     * @example
     * const zonedDateTime = dateTime.atZone(TimeZone.of('America/New_York')); // Same moment in New York
     */
    atZone(zone: TimeZone): DateTime {
        return;
    }

    /**
     * Checks if this DateTime is after the specified DateTime.
     *
     * @param {DateTime} value - The DateTime to compare against.
     * @returns {boolean} True if this DateTime is after the specified DateTime.
     * @example
     * const isAfter = dateTime.isAfter(anotherDateTime); // True if after
     */
    isAfter(value: DateTime): boolean {
        return;
    }

    /**
     * Checks if this DateTime is before the specified DateTime.
     *
     * @param {DateTime} value - The DateTime to compare against.
     * @returns {boolean} True if this DateTime is before the specified DateTime.
     * @example
     * const isBefore = dateTime.isBefore(anotherDateTime); // True if before
     */
    isBefore(value: DateTime): boolean {
        return;
    }

    /**
     * Checks if this DateTime is equal to the specified DateTime.
     *
     * @param {DateTime} value - The DateTime to compare against.
     * @returns {boolean} True if this DateTime is equal to the specified DateTime.
     * @example
     * const isEqual = dateTime.isEqual(anotherDateTime); // True if equal
     */
    isEqual(value: DateTime): boolean {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of years subtracted.
     *
     * @param {number} years - The number of years to subtract.
     * @returns {DateTime} A new DateTime instance with the years subtracted.
     * @example
     * const newDateTime = dateTime.minusYears(5); // Five years
     */
    minusYears(years: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of months subtracted.
     *
     * @param {number} months - The number of months to subtract.
     * @returns {DateTime} A new DateTime instance with the months subtracted.
     * @example
     * const newDateTime = dateTime.minusMonths(3); // Three months
     */
    minusMonths(months: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of days subtracted.
     *
     * @param {number} days - The number of days to subtract.
     * @returns {DateTime} A new DateTime instance with the days subtracted.
     * @example
     * const newDateTime = dateTime.minusDays(10); // Ten days
     */
    minusDays(days: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of hours subtracted.
     *
     * @param {number} hours - The number of hours to subtract.
     * @returns {DateTime} A new DateTime instance with the hours subtracted.
     * @example
     * const newDateTime = dateTime.minusHours(2); // Two hours
     */
    minusHours(hours: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of minutes subtracted.
     *
     * @param {number} minutes - The number of minutes to subtract.
     * @returns {DateTime} A new DateTime instance with the minutes subtracted.
     * @example
     * const newDateTime = dateTime.minusMinutes(30); // Half an hour
     */
    minusMinutes(minutes: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of seconds subtracted.
     *
     * @param {number} seconds - The number of seconds to subtract.
     * @returns {DateTime} A new DateTime instance with the seconds subtracted.
     * @example
     * const newDateTime = dateTime.minusSeconds(45); // Three-quarters of a minute
     */
    minusSeconds(seconds: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of nanoseconds subtracted.
     *
     * @param {number} nanos - The number of nanoseconds to subtract.
     * @returns {DateTime} A new DateTime instance with the nanoseconds subtracted.
     * @example
     * const newDateTime = dateTime.minusNanos(1000000); // One millisecond
     */
    minusNanos(nanos: number): DateTime {
        return;
    }

    /**
     * Returns the current DateTime in the specified time zone.
     *
     * @param {TimeZone} [zone] - The time zone to use. If not provided, the system default time zone is used.
     * @returns {DateTime} The current DateTime in the specified time zone.
     * @example
     * const now = DateTime.now(TimeZone.of('America/New_York')); // Current date and time in New York
     */
    static now(zone?: TimeZone): DateTime { return; }

    /**
     * Creates a DateTime instance with the specified date and time components.
     *
     * @param {number} year - The year to set.
     * @param {number} [month] - The month to set (1 = January, 12 = December).
     * @param {number} [day] - The day of the month to set.
     * @param {number} [hour] - The hour of the day to set (0-23).
     * @param {number} [minute] - The minute of the hour to set (0-59).
     * @param {number} [second] - The second of the minute to set (0-59).
     * @param {number} [nano] - The nanosecond of the second to set (0-999999999).
     * @param {ZoneOffset} [zone] - The time zone to associate with. If not provided, the system default time zone is used.
     * @returns {DateTime} A new DateTime instance with the specified components.
     * @example
     * const dateTime = DateTime.of(2024, 12, 25, 14, 30, 0, 0); // Christmas Day 2024 at 2:30 PM
     * const dateTime = DateTime.of(2024, 12, 25, 14, 30, 0, 0, ZoneOffset(5, 30)); // Christmas Day 2024 at 2:30 PM +05:30
     */
    static of(year: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, nano?: number, zone?: ZoneOffset): DateTime { return; }

    /**
     * Parses a string to create a DateTime instance based on the specified format.
     *
     * @param {string} value - The string representation of the date-time.
     * @param {string} [format] - The format to use for parsing. If not provided, a default format is used.
     * See {@link https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html|DateTimeFormatter | Java Documentation} for more information.
     * @returns {DateTime} A new DateTime instance parsed from the string.
     * @example
     * const dateTime = DateTime.parse('2024-12-25 14:30:00', 'uuuu-MM-dd HH:mm:ss'); // Christmas Day 2024 at 2:30 PM
     */
    static parse(value: string, format?: string): DateTime { return; }

    /**
     * Returns a new DateTime with the specified number of years added.
     *
     * @param {number} years - The number of years to add.
     * @returns {DateTime} A new DateTime instance with the years added.
     * @example
     * const newDateTime = dateTime.plusYears(5); // Five years
     */
    plusYears(years: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of months added.
     *
     * @param {number} months - The number of months to add.
     * @returns {DateTime} A new DateTime instance with the months added.
     * @example
     * const newDateTime = dateTime.plusMonths(3); // Three months
     */
    plusMonths(months: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of days added.
     *
     * @param {number} days - The number of days to add.
     * @returns {DateTime} A new DateTime instance with the days added.
     * @example
     * const newDateTime = dateTime.plusDays(10); // Ten days
     */
    plusDays(days: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of hours added.
     *
     * @param {number} hours - The number of hours to add.
     * @returns {DateTime} A new DateTime instance with the hours added.
     * @example
     * const newDateTime = dateTime.plusHours(2); // Two hours
     */
    plusHours(hours: number): DateTime {
        return;
    }

    /**
     * Returns a new DateTime with the specified number of minutes added.
     *
     * @param {number} minutes - The number of minutes to add.
     * @returns {DateTime} A new DateTime instance with the minutes added.
     * @example
     * const newDateTime = dateTime.plusMinutes(30); // Half an hour
     */
    plusMinutes(minutes: number): DateTime { return; }

    /**
     * Returns a new DateTime with the specified number of seconds added.
     *
     * @param {number} seconds - The number of seconds to add.
     * @returns {DateTime} A new DateTime instance with the seconds added.
     * @example
     * const newDateTime = dateTime.plusSeconds(45); // Three-quarters of a minute
     */
    plusSeconds(seconds: number): DateTime { return; }

    /**
     * Returns a new DateTime with the specified number of nanoseconds added.
     *
     * @param {number} nanos - The number of nanoseconds to add.
     * @returns {DateTime} A new DateTime instance with the nanoseconds added.
     * @example
     * const newDateTime = dateTime.plusNanos(1000000); // One millisecond
     */
    plusNanos(nanos: number): DateTime { return; }

    /**
     * Converts this DateTime to the number of milliseconds since the epoch (1970-01-01T00:00:00Z).
     *
     * @returns {number} The number of milliseconds since the epoch.
     * @example
     * const epochMilli = dateTime.toEpochMilli(); // Number of milliseconds since the epoch
     */
    toEpochMilli(): number { return; }

    /**
     * Converts this DateTime to the number of seconds since the epoch (1970-01-01T00:00:00Z).
     *
     * @returns {number} The number of seconds since the epoch.
     * @example
     * const epochSecond = dateTime.toEpochSecond(); // Number of seconds since the epoch
     */
    toEpochSecond(): number { return; }

    /**
     * Converts this DateTime to a string representation based on the specified format.
     *
     * @param {string} [format] - The format string. If not provided, a default format will be used.
     * See {@link https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html|DateTimeFormatter | Java Documentation} for more information.
     * @returns {string} The string representation of this DateTime.
     * @example
     * const dateTimeString = dateTime.toString('uuuu-MM-dd HH:mm:ss'); // Custom format
     */
    toString(format?: string): string { return; }

    /**
     * Returns a new DateTime with the specified year.
     *
     * @param {number} year - The year to set.
     * @returns {DateTime} A new DateTime instance with the specified year.
     * @example
     * const newDateTime = dateTime.withYear(2025);
     */
    withYear(year: number): DateTime { return; }

    /**
     * Returns a new DateTime with the specified month.
     *
     * @param {number} month - The month to set (1 = January, 12 = December).
     * @returns {DateTime} A new DateTime instance with the specified month.
     * @example
     * const newDateTime = dateTime.withMonth(12);
     */
    withMonth(month: number): DateTime { return; }

    /**
     * Returns a new DateTime with the specified day of the month.
     *
     * @param {number} day - The day of the month to set.
     * @returns {DateTime} A new DateTime instance with the specified day.
     * @example
     * const newDateTime = dateTime.withDayOfMonth(25);
     */
    withDayOfMonth(day: number): DateTime { return; }

    /**
     * Returns a new DateTime with the specified hour of the day.
     *
     * @param {number} hour - The hour of the day to set (0-23).
     * @returns {DateTime} A new DateTime instance with the specified hour.
     * @example
     * const newDateTime = dateTime.withHour(14); // 14:00
     */
    withHour(hour: number): DateTime { return; }

    /**
     * Returns a new DateTime with the specified minute of the hour.
     *
     * @param {number} minute - The minute of the hour to set (0-59).
     * @returns {DateTime} A new DateTime instance with the specified minute.
     * @example
     * const newDateTime = dateTime.withMinute(45); // Three-quarters of an hour
     */
    withMinute(minute: number): DateTime { return; }

    /**
     * Returns a new DateTime with the specified second of the minute.
     *
     * @param {number} second - The second of the minute to set (0-59).
     * @returns {DateTime} A new DateTime instance with the specified second.
     * @example
     * const newDateTime = dateTime.withSecond(30); // Half a minute
     */
    withSecond(second: number): DateTime { return; }

    /**
     * Returns a new DateTime with the specified nanosecond of the second.
     *
     * @param {number} nano - The nanosecond of the second to set (0-999999999).
     * @returns {DateTime} A new DateTime instance with the specified nanosecond.
     * @example
     * const newDateTime = dateTime.withNano(500000000); // Half a second
     */
    withNano(nano: number): DateTime { return; }

}

export default DateTime;
