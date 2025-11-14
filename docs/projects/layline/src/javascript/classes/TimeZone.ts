/**
 * The abstract TimeZone class is a class that represents time zones, and is helpful when doing calendar arithmetics across time zones.
 * It is used in conjunction with the {@link DateTime}, {@link Time}, and {@link LocalDate} classes.
 *
 * @class
 */
class TimeZone {

    /** @hidden **/
    constructor() {}

    /**
     * This is the display name of the time zone.
     * @type {string}
     *
     * @example
     * ```js
     * const timeZone = TimeZone.of('America/New_York');
     * // Returns the TimeZone instance for the time zone with the ID 'America/New_York'
     * timeZone.displayName; // Returns "Eastern Time"
     * ```
     *
     */
    displayName: string;

    /**
     * This is the unique identifier of the time zone.
     * @type {string}
     *
     * @example
     * ```js
     * const timeZone = TimeZone.of('America/New_York');
     * // Returns the TimeZone instance for the time zone with the ID 'America/New_York'
     * timeZone.id; // Returns "America/New_York"
     * ```
     */
    id: string;

    /**
     * Get the {@link displayName} and {@link id} and id of the time zone
     * @param {string} zoneId The long name (!) of the time zone. You can find a good list of all available time zones [here](https://howtodoinjava.com/java/date-time/supported-zone-ids-offsets/).
     * @returns {TimeZone}
     *
     * @example
     * ```js
     * const timeZone = TimeZone.of('America/New_York');
     * // Returns the TimeZone instance for the time zone with the ID 'America/New_York'
     * timeZone.displayName; // Returns "Eastern Time"
     * timeZone.id; // Returns "America/New_York"
     * ```
     */
    static of(zoneId: string): TimeZone { return;}

    /**
     * Get the system default time zone
     * @returns {TimeZone} The system default time zone
     *
     * @example
     * ```js
     * const timeZone = TimeZone.systemDefault();
     * // Returns the system default time zone
     * timeZone.displayName; // Returns the display name of the system default time zone, e.g. "Eastern Time"
     * timeZone.id; // Returns the ID of the system default time zone, e.g. "America/New_York"
     * ```
     */
    static systemDefault(): TimeZone { return;}

    /**
     * Get the UTC time zone
     * @returns {TimeZone}
     * @example
     * ```js
     * const timeZone = TimeZone.UTC();
     * // Returns the UTC time zone
     * timeZone.displayName; // Returns "Coordinated Universal Time"
     * timeZone.id; // Returns "UTC"
     * ```
     */
    static UTC: TimeZone;

}

export default TimeZone;
