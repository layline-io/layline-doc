import Vendor from "@site/layline/src/javascript/classes/Vendor";


/**
 * ## What
 * The StatusRegistry class provides methods to access all defined Vendors and Languages for the current Project.
 * You define additional vendors and languages in the "**Resource Status Definition Asset**".
 *
 * ## How to use
 * The statusRegistry object is created automatically when the Project is started,
 * based on the internal "LAY" vendor instance plus any additional vendors you have defined in the "**Resource Status Definition Asset**".
 *
 */

export class StatusRegistry {

    /** @hidden **/
    constructor() {}

    /**
     * An array of all defined Vendors for the current Project.
     * You can access all defined Vendors via the global {@link statusRegistry} constant.
     * Index 0 is reserved and pre-filled by internal vendor "LAY" (layline.io).
     * You define additional vendors in the "**Resource Status Definition Asset**".
     *
     * ```js
     * const code = statusRegistry.vendors[0]
     * // Returns a Vendor object
     * ```
     *
     * @type {Vendor[]}
     *
     */
    vendors: Vendor[];

    /**
     * An array of defined and used {@link https://en.wikipedia.org/wiki/ISO_639-1 | ISO 639-1} language codes for the current Project.
     * You can access all defined languages via the global {@link statusRegistry} constant.
     *
     * ```js
     * const code = statusRegistry.languages
     * // Returns an array of defined language codes, eg. ["en", "de", "fr"]
     * ```
     *
     * @type {string[]}
     */
    languages: string[];

    /**
     * Get the vendor instance from the list of defined vendors according to the given ID of the vendor.
     * You must have defined the vendor in a "**Resource Status Definition Asset**".
     * The number passed in `statusRegistry.getVendorById(1)` is the ID of the Vendor definition within that Asset.
     * Check documentation for "**Resource Status Definition Asset**" for more info.
     * You can access all defined Vendors via the global {@link statusRegistry} constant.
     *
     * @param {number} id The ID of the vendor as defined in the specific "**Resource Status Definition Asset**".
     * @returns {Vendor} Instance of {@link Vendor}
     *
     * @example
     * ```js
     * const VENDOR_ID = statusRegistry.getVendorById(1);
     * // Returns the Vendor instance for the Vendor with the ID 1
     * ```
     *
     */
    getVendorById(id: number): Vendor {
        return;
    }


    /**
     * Get the vendor instance from the list of defined vendors according to the given long name of the vendor.
     * You must have defined the vendor in a "**Resource Status Definition Asset**".
     * The string passed in `statusRegistry.getVendorByLongName('myVendorLongName')`
     * is the long name of the Vendor definition within that Asset.
     * Check documentation for "**Resource Status Definition Asset**" for more info.
     * You can access all defined Vendors via the global {@link statusRegistry} constant.
     *
     * @param {string} vendorLongName The long name of the vendor as defined in the specific "**Resource Status Definition Asset**".
     * @returns {Vendor} Instance of {@link Vendor}
     *
     * @example
     * ```js
     * const VENDOR = statusRegistry.getVendorByLongName('MyVendorLongName');
     * // Returns the Vendor instance for the Vendor with the long name 'MyVendorLongName'
     * ```
     */
    getVendorByLongName(vendorLongName: string): Vendor {
        return;
    }

    /**
     * Get the vendor instance from the list of defined vendors according to the given short name of the vendor.
     * You must have defined the vendor in a "**Resource Status Definition Asset**".
     * The string passed in `statusRegistry.getVendorByShortName('myVendorShortName')`
     * is the short name of the Vendor definition within that Asset.
     * Check documentation for "**Resource Status Definition Asset**" for more info.
     * You can access all defined Vendors via the global {@link statusRegistry} constant.
     *
     * @param {string} vendorShortName
     * @returns {Vendor} Instance of {@link Vendor}
     *
     * @example
     * ```js
     * const VENDOR = statusRegistry.getVendorByShortName('MyVendorShortName');
     * // Returns the Vendor instance for the Vendor with the short name 'MyVendorShortName'
     * ```
     */
    getVendorByShortName(vendorShortName: string): Vendor {
        return;
    }

}

export default StatusRegistry;
