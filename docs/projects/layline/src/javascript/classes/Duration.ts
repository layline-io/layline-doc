import Temporal from "@site/layline/src/javascript/interfaces/Temporal";

/**
 * Represents a duration of time, which can be positive or negative.
 * This is an abstract class and cannot be instantiated directly.
 * Use static methods to create Duration instances.
 * @class
 */
class Duration {
    /**
     * The number of days in the duration.
     *
     * @type {number}
     * @example
     * const duration = Duration.ofDays(5);
     * print(duration.days); // Outputs: 5
     */
    days: number;

    /**
     * The number of hours in the duration.
     *
     * @type {number}
     * @example
     * const duration = Duration.ofHours(12);
     * print(duration.hours); // Outputs: 12
     */
    hours: number;

    /**
     * The number of minutes in the duration.
     *
     * @type {number}
     * @example
     * const duration = Duration.ofMinutes(45);
     * print(duration.minutes); // Outputs: 45
     */
    minutes: number;

    /**
     * The number of nanoseconds in the duration.
     *
     * @type {number}
     * @example
     * const duration = Duration.ofNano(1000);
     * print(duration.nanos); // Outputs: 1000
     */
    nanos: number;

    /**
     * The number of seconds in the duration.
     *
     * @type {number}
     * @example
     * const duration = Duration.ofSeconds(60);
     * print(duration.seconds); // Outputs: 60
     */
    seconds: number;


    /**
     * Creates a Duration representing the time between two temporal objects.
     * @static
     * @param {Temporal} startInclusive - The start temporal object.
     * @param {Temporal} endInclusive - The end temporal object.
     * @returns {Duration} A Duration representing the time between start and end.
     * @example
     * const start = DateTime.parse('2023-01-01T00:00:00Z');
     * const end = DateTime.parse('2023-01-02T12:30:45Z');
     * const duration = Duration.between(start, end);
     * print(duration.days); // 1
     * print(duration.hours); // 12
     * print(duration.minutes); // 30
     * print(duration.seconds); // 45
     */
    static between(startInclusive: Temporal, endInclusive: Temporal): Duration { return };

    /**
     * Creates a Duration representing the specified number of days.
     * @static
     * @param {number} days - The number of days.
     * @returns {Duration} A Duration representing the specified number of days.
     * @example
     * const duration = Duration.ofDays(5);
     * print(duration.days); // 5
     */
    static ofDays(days: number): Duration {return };

    /**
     * Creates a Duration representing the specified number of hours.
     * @static
     * @param {number} hours - The number of hours.
     * @returns {Duration} A Duration representing the specified number of hours.
     * @example
     * const duration = Duration.ofHours(3);
     * print(duration.hours); // 3
     */
    static ofHours(hours: number): Duration {return };

    /**
     * Creates a Duration representing the specified number of minutes.
     * @static
     * @param {number} minutes - The number of minutes.
     * @returns {Duration} A Duration representing the specified number of minutes.
     * @example
     * const duration = Duration.ofMinutes(45);
     * print(duration.minutes); // 45
     */
    static ofMinutes(minutes: number): Duration {return };

    /**
     * Creates a Duration representing the specified number of seconds.
     * @static
     * @param {number} seconds - The number of seconds.
     * @returns {Duration} A Duration representing the specified number of seconds.
     * @example
     * const duration = Duration.ofSeconds(30);
     * print(duration.seconds); // 30
     */
    static ofSeconds(seconds: number): Duration {return };

    /**
     * Creates a Duration representing the specified number of milliseconds.
     * @static
     * @param {number} millis - The number of milliseconds.
     * @returns {Duration} A Duration representing the specified number of milliseconds.
     * @example
     * const duration = Duration.ofMillis(500);
     * print(duration.nanos); // 500000000
     */
    static ofMillis(millis: number): Duration {return };

    /**
     * Creates a Duration representing the specified number of nanoseconds.
     * @static
     * @param {number} nano - The number of nanoseconds.
     * @returns {Duration} A Duration representing the specified number of nanoseconds.
     * @example
     * const duration = Duration.ofNanos(1000000);
     * print(duration.nanos); // 1000000
     */
    static ofNanos(nano: number): Duration {return };

    /**
     * Returns the absolute value of this duration.
     * @returns {Duration} A new Duration representing the absolute value of this duration.
     * @example
     * const negativeDuration = Duration.ofDays(-1);
     * const absoluteDuration = negativeDuration.abs();
     * print(absoluteDuration.days); // 1
     */
    abs(): Duration { return };

    /**
     * Adds this duration to the given temporal object.
     * @param {Temporal} temporal - The temporal object to add this duration to.
     * @returns {Temporal} A new temporal object with this duration added.
     * @example
     * const duration = Duration.ofHours(2);
     * const date = DateTime.parse('2023-01-01T00:00:00Z');
     * const newDate = duration.addTo(date);
     * print(newDate.toISOString()); // '2023-01-01T02:00:00.000Z'
     */
    addTo(temporal: Temporal): Temporal { return };

    /**
     * Checks if this duration is negative.
     * @returns {boolean} True if this duration is negative, false otherwise.
     * @example
     * const negativeDuration = Duration.ofDays(-1);
     * print(negativeDuration.isNegative()); // true
     */
    isNegative(): boolean { return };

    /**
     * Checks if this duration is zero.
     * @returns {boolean} True if this duration is zero, false otherwise.
     * @example
     * const zeroDuration = Duration.ofSeconds(0);
     * print(zeroDuration.isZero()); // true
     */
    isZero(): boolean { return };

    /**
     * Adds the specified duration to this duration.
     * @param {Duration} duration - The duration to add.
     * @returns {Duration} A new Duration representing the sum.
     * @example
     * const duration1 = Duration.ofDays(1);
     * const duration2 = Duration.ofHours(12);
     * const sum = duration1.plus(duration2);
     * print(sum.days); // 1
     * print(sum.hours); // 12
     */
    plus(duration: Duration): Duration { return };

    /**
     * Adds the specified number of days to this duration.
     * @param {number} days - The number of days to add.
     * @returns {Duration} A new Duration with the days added.
     * @example
     * const duration = Duration.ofDays(1);
     * const newDuration = duration.plusDays(2);
     * print(newDuration.days); // 3
     */
    plusDays(days: number): Duration { return };

    /**
     * Adds the specified number of hours to this duration.
     * @param {number} hours - The number of hours to add.
     * @returns {Duration} A new Duration with the hours added.
     * @example
     * const duration = Duration.ofHours(1);
     * const newDuration = duration.plusHours(2);
     * print(newDuration.hours); // 3
     */
    plusHours(hours: number): Duration { return };

    /**
     * Adds the specified number of milliseconds to this duration.
     * @param {number} millis - The number of milliseconds to add.
     * @returns {Duration} A new Duration with the milliseconds added.
     * @example
     * const duration = Duration.ofSeconds(1);
     * const newDuration = duration.plusMillis(500);
     * print(newDuration.seconds); // 1
     * print(newDuration.nanos); // 500000000
     */
    plusMillis(millis: number): Duration { return };

    /**
     * Adds the specified number of minutes to this duration.
     * @param {number} minutes - The number of minutes to add.
     * @returns {Duration} A new Duration with the minutes added.
     * @example
     * const duration = Duration.ofMinutes(30);
     * const newDuration = duration.plusMinutes(15);
     * print(newDuration.minutes); // 45
     */
    plusMinutes(minutes: number): Duration { return };

    /**
     * Adds the specified number of seconds to this duration.
     * @param {number} seconds - The number of seconds to add.
     * @returns {Duration} A new Duration with the seconds added.
     * @example
     * const duration = Duration.ofSeconds(30);
     * const newDuration = duration.plusSeconds(15);
     * print(newDuration.seconds); // 45
     */
    plusSeconds(seconds: number): Duration { return };

    /**
     * Adds the specified number of nanoseconds to this duration.
     * @param {number} nanos - The number of nanoseconds to add.
     * @returns {Duration} A new Duration with the nanoseconds added.
     * @example
     * const duration = Duration.ofNano(500000000);
     * const newDuration = duration.plusNanos(250000000);
     * print(newDuration.nanos); // 750000000
     */
    plusNanos(nanos: number): Duration { return };

    /**
     * Subtracts the specified duration from this duration.
     * @param {Duration} duration - The duration to subtract.
     * @returns {Duration} A new Duration representing the difference.
     * @example
     * const duration1 = Duration.ofDays(2);
     * const duration2 = Duration.ofHours(12);
     * const difference = duration1.minus(duration2);
     * print(difference.days); // 1
     * print(difference.hours); // 12
     */
    minus(duration: Duration): Duration { return };

    /**
     * Subtracts the specified number of days from this duration.
     * @param {number} days - The number of days to subtract.
     * @returns {Duration} A new Duration with the days subtracted.
     * @example
     * const duration = Duration.ofDays(3);
     * const newDuration = duration.minusDays(1);
     * print(newDuration.days); // 2
     */
    minusDays(days: number): Duration { return };

    /**
     * Subtracts the specified number of hours from this duration.
     * @param {number} hours - The number of hours to subtract.
     * @returns {Duration} A new Duration with the hours subtracted.
     * @example
     * const duration = Duration.ofHours(5);
     * const newDuration = duration.minusHours(2);
     * print(newDuration.hours); // 3
     */
    minusHours(hours: number): Duration { return };

    /**
     * Subtracts the specified number of milliseconds from this duration.
     * @param {number} millis - The number of milliseconds to subtract.
     * @returns {Duration} A new Duration with the milliseconds subtracted.
     * @example
     * const duration = Duration.ofSeconds(2);
     * const newDuration = duration.minusMillis(500);
     * print(newDuration.seconds); // 1
     * print(newDuration.nanos); // 500000000
     */
    minusMillis(millis: number): Duration { return };

    /**
     * Subtracts the specified number of minutes from this duration.
     * @param {number} minutes - The number of minutes to subtract.
     * @returns {Duration} A new Duration with the minutes subtracted.
     * @example
     * const duration = Duration.ofMinutes(60);
     * const newDuration = duration.minusMinutes(30);
     * print(newDuration.minutes); // 30
     */
    minusMinutes(minutes: number): Duration { return };

    /**
     * Subtracts the specified number of seconds from this duration.
     * @param {number} seconds - The number of seconds to subtract.
     * @returns {Duration} A new Duration with the seconds subtracted.
     * @example
     * const duration = Duration.ofSeconds(60);
     * const newDuration = duration.minusSeconds(30);
     * print(newDuration.seconds); // 30
     */
    minusSeconds(seconds: number): Duration { return };

    /**
     * Subtracts the specified number of nanoseconds from this duration.
     * @param {number} nanos - The number of nanoseconds to subtract.
     * @returns {Duration} A new Duration with the nanoseconds subtracted.
     * @example
     * const duration = Duration.ofNano(1000000000);
     * const newDuration = duration.minusNanos(500000000);
     * print(newDuration.nanos); // 500000000
     */
    minusNanos(nanos: number): Duration { return };

    /**
     * Returns a new Duration with the opposite sign of this duration.
     * @returns {Duration} A new Duration with the opposite sign.
     * @example
     * const duration = Duration.ofDays(1);
     * const negatedDuration = duration.negated();
     * print(negatedDuration.days); // -1
     */
    negated(): Duration { return };
}
export default Duration;
