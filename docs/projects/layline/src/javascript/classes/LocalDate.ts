import TimeZone from "@site/layline/src/javascript/classes/TimeZone";
import Duration from "@site/layline/src/javascript/classes/Duration";

/**
 * Represents a date without a time-zone in the ISO-8601 calendar system.
 * This is an abstract class and cannot be instantiated directly.
 *
 * @class
 */
class LocalDate {

    /** @hidden **/
    constructor() {}

    /**
     * The day of the month, from 1 to 31.
     * @example
     * const date = LocalDate.of(2023, 9, 15);
     * print(date.dayOfMonth); // Output: 15
     */
    dayOfMonth: number;

    /**
     * The day of the week, from 1 (Monday) to 7 (Sunday).
     * @example
     * const date = LocalDate.of(2023, 9, 15); // September 15, 2023 is a Friday
     * print(date.dayOfWeek); // Output: 5
     */
    dayOfWeek: number;

    /**
     * The day of the year, from 1 to 365 (or 366 in a leap year).
     * @example
     * const date = LocalDate.of(2023, 9, 15);
     * print(date.dayOfYear); // Output: 258 (as September 15 is the 258th day of 2023)
     */
    dayOfYear: number;

    /**
     * The month of the year, from 1 (January) to 12 (December).
     * @example
     * const date = LocalDate.of(2023, 9, 15);
     * print(date.month); // Output: 9
     */
    month: number;

    /**
     * The year.
     * @example
     * const date = LocalDate.of(2023, 9, 15);
     * print(date.year); // Output: 2023
     */
    year: number;

    /**
     * Adds a specified duration to this date.
     * @param {Duration} duration - The duration to add.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * // Assuming we have a LocalDate instance 'date' and a Duration 'duration'
     * const newDate = date.add(duration);
     */
    add(duration: Duration): LocalDate { return };

    /**
     * Compares this date to another.
     * @param {LocalDate} other - The date to compare to.
     * @returns {number} A negative integer, zero, or a positive integer if this date is before, equal to, or after the given date.
     * @example
     * const date1 = LocalDate.of(2023, 1, 1);
     * const date2 = LocalDate.of(2023, 1, 2);
     * print(date1.compareTo(date2)); // Output: -1
     */
    compareTo(other: LocalDate): number { return };

    /**
     * Checks if this date is after the specified date.
     * @param {LocalDate} other - The date to compare to.
     * @returns {boolean} True if this date is after the specified date.
     * @example
     * const date1 = LocalDate.of(2023, 1, 2);
     * const date2 = LocalDate.of(2023, 1, 1);
     * print(date1.isAfter(date2)); // Output: true
     */
    isAfter(other: LocalDate): boolean { return };

    /**
     * Checks if this date is before the specified date.
     * @param {LocalDate} other - The date to compare to.
     * @returns {boolean} True if this date is before the specified date.
     * @example
     * const date1 = LocalDate.of(2023, 1, 1);
     * const date2 = LocalDate.of(2023, 1, 2);
     * print(date1.isBefore(date2)); // Output: true
     */
    isBefore(other: LocalDate): boolean { return };

    /**
     * Checks if this date is equal to the specified date.
     * @param {LocalDate} other - The date to compare to.
     * @returns {boolean} True if the dates are equal.
     * @example
     * const date1 = LocalDate.of(2023, 1, 1);
     * const date2 = LocalDate.of(2023, 1, 1);
     * print(date1.isEqual(date2)); // Output: true
     */
    isEqual(other: LocalDate): boolean { return };

    /**
     * Returns a copy of this date minus the specified duration.
     * @param {Duration} duration - The duration to subtract.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * // Assuming we have a LocalDate instance 'date' and a Duration 'duration'
     * const newDate = date.minus(duration);
     */
    minus(duration: Duration): LocalDate { return };

    /**
     * Returns a copy of this date minus the specified number of days.
     * @param {number} days - The number of days to subtract.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 10);
     * const newDate = date.minusDays(5);
     * print(newDate.toString()); // Output: "2023-01-05"
     */
    minusDays(days: number): LocalDate { return };

    /**
     * Returns a copy of this date minus the specified number of months.
     * @param {number} months - The number of months to subtract.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 3, 15);
     * const newDate = date.minusMonths(2);
     * print(newDate.toString()); // Output: "2023-01-15"
     */
    minusMonths(months: number): LocalDate { return };

    /**
     * Returns a copy of this date minus the specified number of weeks.
     * @param {number} weeks - The number of weeks to subtract.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 15);
     * const newDate = date.minusWeeks(2);
     * print(newDate.toString()); // Output: "2023-01-01"
     */
    minusWeeks(weeks: number): LocalDate { return };

    /**
     * Returns a copy of this date minus the specified number of years.
     * @param {number} years - The number of years to subtract.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 1);
     * const newDate = date.minusYears(3);
     * print(newDate.toString()); // Output: "2020-01-01"
     */
    minusYears(years: number): LocalDate { return };

    /**
     * Returns a copy of this date plus the specified duration.
     * @param {Duration} duration - The duration to add.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * // Assuming we have a LocalDate instance 'date' and a Duration 'duration'
     * const newDate = date.plus(duration);
     */
    plus(duration: Duration): LocalDate { return };

    /**
     * Returns a copy of this date plus the specified number of days.
     * @param {number} days - The number of days to add.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 1);
     * const newDate = date.plusDays(5);
     * print(newDate.toString()); // Output: "2023-01-06"
     */
    plusDays(days: number): LocalDate { return };

    /**
     * Returns a copy of this date plus the specified number of months.
     * @param {number} months - The number of months to add.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 15);
     * const newDate = date.plusMonths(2);
     * print(newDate.toString()); // Output: "2023-03-15"
     */
    plusMonths(months: number): LocalDate { return };

    /**
     * Returns a copy of this date plus the specified number of weeks.
     * @param {number} weeks - The number of weeks to add.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 1);
     * const newDate = date.plusWeeks(2);
     * print(newDate.toString()); // Output: "2023-01-15"
     */
    plusWeeks(weeks: number): LocalDate { return };

    /**
     * Returns a copy of this date plus the specified number of years.
     * @param {number} years - The number of years to add.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 1);
     * const newDate = date.plusYears(3);
     * print(newDate.toString()); // Output: "2026-01-01"
     */
    plusYears(years: number): LocalDate { return };

    /**
     * Returns a copy of this date with the day of month altered.
     * @param {number} day - The new day of the month.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 15);
     * const newDate = date.withDayOfMonth(20);
     * print(newDate.toString()); // Output: "2023-01-20"
     */
    withDayOfMonth(day: number): LocalDate { return };

    /**
     * Returns a copy of this date with the month altered.
     * @param {number} month - The new month of the year.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 15);
     * const newDate = date.withMonth(3);
     * print(newDate.toString()); // Output: "2023-03-15"
     */
    withMonth(month: number): LocalDate { return };

    /**
     * Returns a copy of this date with the year altered.
     * @param {number} year - The new year.
     * @returns {LocalDate} A new LocalDate representing the result.
     * @example
     * const date = LocalDate.of(2023, 1, 15);
     * const newDate = date.withYear(2024);
     * print(newDate.toString()); // Output: "2024-01-15"
     */
    withYear(year: number): LocalDate { return };

    /**
     * Converts this date to a string representation.
     * @param {string} [format] - The format to use for the string representation.
     * @returns {string} A string representation of this date.
     * @example
     * const date = LocalDate.of(2023, 1, 15);
     * print(date.toString()); // Output: "2023-01-15"
     * print(date.toString("dd/MM/uuuu")); // Output: "15/01/2023"
     */
    toString(format?: string): string { return };

    /**
     * Obtains the current date from the system clock in the default time-zone.
     * @param {TimeZone} [zone] - The time zone to use, defaults to the system default if not specified.
     * @returns {LocalDate} The current date.
     * @example
     * const today = LocalDate.now();
     * print(today.toString()); // Output: Current date, e.g., "2023-09-03"
     */
    static now(zone?: TimeZone): LocalDate { return };

    /**
     * Obtains an instance of LocalDate from year, month, and day values.
     * @param {number} year - The year to represent.
     * @param {number} [month=1] - The month-of-year to represent, from 1 (January) to 12 (December).
     * @param {number} [day=1] - The day-of-month to represent, from 1 to 31.
     * @returns {LocalDate} The local date.
     * @example
     * const date = LocalDate.of(2023, 9, 3);
     * print(date.toString()); // Output: "2023-09-03"
     */
    static of(year: number, month?: number, day?: number): LocalDate { return };

    /**
     * Obtains an instance of LocalDate from a text string using a specific format.
     * @param {string} value - The text to parse.
     * @param {string} [format] - The format to use for parsing.
     * See [Java Documentation for DateTimeFormatter](https://docs.oracle.com/en%2Fjava%2Fjavase%2F22%2Fdocs%2Fapi%2F%2F/java.base/java/time/format/DateTimeFormatter.html) for more information on supported date and time patterns.
     * @returns {LocalDate} The parsed local date.
     * @example
     * const date = LocalDate.parse("2023-09-03");
     * print(date.toString()); // Output: "2023-09-03"
     *
     * const customDate = LocalDate.parse("03/09/2023", "dd/MM/uuuu");
     * print(customDate.toString()); // Output: "2023-09-03"
     */
    static parse(value: string, format?: string): LocalDate { return };
}

export default LocalDate;
