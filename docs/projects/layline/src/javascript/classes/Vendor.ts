import {StatusCode} from "@site/layline/src/javascript";

/**
 * ## What
 * The Vendor class represents information and methods which are specific to a Vendor.
 * A Vendor is a logical entity that groups a number of StatusCodes.
 * Each Vendor has a long name, short name and a number of StatusCodes.
 * Vendors available in a Project are defined in the "**Resource Status Definition Asset**".
 *
 * You typically use the Vendor class to access the {@link StatusCode | StatusCodes} for a specific Vendor.
 * Please check the documentation for the "**Resource Status Definition Asset**" for more information.
 *
 * ## How to use
 * In your typical Project you usually never have to access vendor information directly.
 * But if you do, this is how you can access it.
 *
 */

class Vendor {

    /** @hidden **/
    constructor() {
    }

    /**
     * Provides the ID which you have assigned to the Vendor.
     * ID 1 is reserved for the internal vendor "LAY" (layline.io).
     * Your own Vendors will have IDs starting from 2.
     *
     * @example
     * ```js
     * // You can access all defined Vendors via the global statusRegistry object.
     *
     * const vendors = statusRegistry.vendors;
     *
     * // This returns an array of all defined Vendors for the vendor with index 0.
     * // Index 0 is reserved and pre-filled by internal vendor "LAY" (layline.io).
     * // You define additional vendors in the "**Resource Status Definition Asset**".
     *
     * // To return the id for the first Vendor with index 0:
     *
     * const code = statusRegistry.vendors[0].id
     * // Returns a Vendor object
     * ```
     *
     * @type {number}
     */
    id: number;


    /**
     * The long name of the Vendor.
     * This is the name that you have defined in the "**Resource Status Definition Asset**".
     *
     * @type {string}
     */
    longName: string;

    /**
     * The short name of the Vendor.
     * This is the short name that you have defined in the "**Resource Status Definition Asset**".
     *
     * @type {string}
     */
    shortName: string;

    /**
     * The StatusCodes which are registered for this Vendor.
     * This is an array of {@link StatusCode} objects that you have defined for this Vendor in the "**Resource Status Definition Asset**".
     * @type {StatusCode[]}
     */
    statusCodes: StatusCode[];

}

export default Vendor;
