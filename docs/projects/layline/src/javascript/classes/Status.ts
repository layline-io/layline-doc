import Vendor from "@site/layline/src/javascript/classes/Vendor";

/**
 * ## What
 * The abstract Status class provides methods to create a new Status object based on an existing *Status Code*.
 *
 * Status codes are defined by creating an **Resource Status Definition Asset** within your Project.
 * Within this Asset you can create one or more **Vendors** which in turn may have a number of `Status` entries.
 *
 * Each of those Status entries has the following structure:
 * * ID: A unique number
 * * Logical name: A name which uniquely identifies a Status, e.g. `FIELD_UNKNOWN`
 * * Language: One of the supported language codes, e.g. `en`
 * * Message: The actual Status message. The message may contain placeholders, e.g. `The field with name %1 is unknown`.
 *   In this example, the placeholder `%1` is filled with the respective value when creating the *Status* using method {@link Status.create}.
 *
 * ## How to use
 *
 * Based on the Vendor and the logical status name which you have defined, you can create a new Status.
 * The `Status` can then be attached to a message or a passed as a result code when rolling back a stream (example).
 *
 */
class Status {

    /** @hidden **/
    constructor() {
    }

    /**
     * The code of the Status which was assigned when the Status was created.
     *
     * @type {number}
     *
     * @example
     * ```js
     * // Create a new Status
     * const status = Status.create(VENDOR, 42);
     * // Get the code
     * const c = status.code; // returns 42
     * ```
     */
    code: number;

    /**
     * The message of the Status which was assigned when the Status was created.
     * The message may contain placeholders which can be filled with parameters when creating the Status.
     * Same as {@link getMessage}.
     *
     * @type {string}
     *
     * @example
     * ```js
     * // Create a new Status
     * const status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Putin');
     * // Get the message
     * const m = status.message; // returns "Field with name '%1' contains illegal value '%2'"
     * ```
     */
    message: string;

    /**
     * The parameters which were passed when the Status was created.
     * These parameters are used to fill in placeholders in the message.
     * Same as {@link getParameters}.
     *
     * @type {string[]}
     *
     * @example
     * ```js
     * // Create a new Status
     * const status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Putin');
     * // Get the parameters
     * const p = status.parameters; // returns ["LastName", "Putin"]
     *
     * // In the above, the message placeholders %1 and %2 will be replaced by "LastName" and "Putin".
     * // So the final message may be "Field with name 'LastName' contains illegal value 'Putin'."
     * ```
     */
    parameters: string[]

    /**
     * Returns an array of States which are sub states to the current Status.
     * Same as {@link getSubStatus}.
     *
     * @example
     * ```js
     * // Get array of States.
     * const statusArray = status.subStatus;
     * ```
     * @return {Status[]} - Array of States which are sub states to the current Status.
     */
    subStatus: Status[];

    /**
     * The vendor of the Status. See also {@link Status.getVendor}.
     * Same as {@link getVendor}.
     *
     * @example
     * ```js
     * // Create a new Status
     * const status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Putin');
     * // Get the vendor
     * const v = status.vendor; // returns VENDOR
     * ```
     * @type {Vendor}
     */
    vendor: Vendor;

    /**
     * The ID of the {@link Vendor} which is associated with this Status.
     * Same as {@link getVendorId}.
     *
     * @type {number}
     *
     * @example
     * ```js
     * // Create a new Status
     * const status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Putin');
     * // Get the vendor
     * const vId = status.vendorId; // returns 42
     * ```
     */
    vendorId: number;

    /**
     * Invoke to create a Status.
     * @param {VendorInfo} vendor Status messages can be distinguished by vendor. Pass a {@link VendorInfo} here. Obtain it with {@link Status.getVendorByName}
     * @param {string} statusCode The `statusCode` which must be defined within your "**Resource Status Definition Asset**" of your Project. This code will be used to identify the Status which you want to add.
     * @param {...string} args A comma separated list of arguments which will be used to fill in the placeholders in the predefined Status message, if any
     * @return {Status} Instance of newly created Status.
     *
     * @example
     * ```js
     * // Assume we have - among others - the following status defined using a "**Resource Status Definition Asset**":
     * // Logical name: "ILLEGAL_VALUE"
     * // Message: "Field with name '%1' contains illegal value '%2'."
     *
     *
     * // Get the vendor instance from the list of defined vendors.
     * // You must have defined the vendor in a "**Resource Status Definition Asset**".
     * // The string passed in `Status.getVendorByName('myVendorLongName')`
     * // is the long name of the Vendor definition within that Asset.
     * // Check documentation for "**Resource Status Definition Asset**" for more info.
     * const VENDOR = Status.getVendorByName('MyVendorLongName');
     *
     * // Create the Status
     * const STATUS = Status.create(
     *      VENDOR,
     *      'ILLEGAL_VALUE',
     *      'LastName',
     *      'Putin'
     * );
     *
     * // In the above, the message placeholders %1 and %2 will be replaced by "LastName" and "Putin".
     * // So the final message is "Field with name 'LastName' contains illegal value 'Putin'."
     * ```
     */
    static create(vendor: Vendor, statusCode: string, ...args: string[]): Status {
        return;
    }

    /**
     * Returns the code of a Status.
     *
     * @return {string} - Status code
     *
     * @example
     * ```js
     * // Get the status code
     * const code = status.getCode();
     * // Result: 4711
     * ```
     */
    getCode(): string {
        return;
    }


    /**
     * Returns the uncompiled message of a Status.
     * If it includes placeholders, these will not be filled.
     * Sames as {@link message}.
     *
     * @return {string} - Status message
     *
     * @example
     * ```js
     * // Get the status message. Placeholders defined in a Status are not replaced with parameters, if any.
     * const message = status.getMessage();
     * // Result: "The name is %1, %2."
     * ```
     */
    getMessage(): string {
        return;
    }

    /**
     * Returns an array of parameters which may have been passed to the Status upon creation.
     * See: {@link create}.
     * Same as {@link parameters}.
     *
     * @example
     * ```js
     * // Get array of parameters.
     * const paramArray = status.getParameters();
     * // Result: ["Doe", "John"]
     * ```
     * @return {string[]} - Array of Status parameters which were passed when Status was created.
     */
    getParameters(): string[] {
        return;
    }


    /**
     * Returns an array of States which are sub states to the current Status.
     *
     * @example
     * ```js
     * // Get array of States.
     * const statusArray = status.getSubStatus();
     * ```
     * @return {Status[]} - Array of States which are sub states to the current Status.
     */
    getSubStatus(): Status[] {
        return;
    }


    /**
     * Returns the vendor of a Status.
     * Same as {@link vendor}.
     *
     * @example
     * ```js
     * // Get array of parameters.
     * const VENDOR_INFO = status.getVendor();
     * ```
     * @return {Vendor} - {@link VendorInfo} structure.
     */
    getVendor(): Vendor {
        return;
    }

    /**
     * Returns the ID of the vendor of a Status.
     * Same as {@link vendorId}.
     *
     * @return {number} - ID of the vendor of a Status.
     *
     * @example
     * ```js
     * // Get the vendor ID
     * const vendorId = status.getVendorId();
     * // Result: 42
     * ```
     */
    getVendorId(): number {
        return;
    }


    /**
     * Get the vendor instance from the list of defined vendors by using the vendor's long name.
     * You must have defined the vendor in a "**Resource Status Definition Asset**".
     * The string passed in `Status.getVendorByName('myVendorLongName')`
     * is the long name of the Vendor definition within that Asset.
     * Check documentation for "**Resource Status Definition Asset**" for more info.
     *
     * @param {string} vendorLongName The long name of the vendor as defined in the specific "**Resource Status Definition Asset**".
     * @returns {Vendor} Instance of {@link Vendor}
     *
     * @example
     * ```js
     * const VENDOR_INFO = Status.getVendorByName('MyVendorLongName');
     * ```
     */
    static getVendorByName(vendorLongName: string): Vendor { return }

    /**
     * Get the vendor instance from the list of defined vendors by using the vendor's ID.
     * You must have defined the vendor in a "**Resource Status Definition Asset**".
     * The number passed in `Status.getVendorById(1)` is the ID of the Vendor definition within that Asset.
     * Check documentation for "**Resource Status Definition Asset**" for more info.
     *
     * @param {number} id The ID of the vendor as defined in the specific "**Resource Status Definition Asset**".
     * @returns {Vendor} Instance of {@link Vendor}
     *
     * @example
     * ```js
     * const VENDOR_INFO = Status.getVendorById(1); // Returns the Vendor instance for the Vendor with the ID 1
     * ```
     */
    static getVendorById(id: number): Vendor { return }

    /**
     * Get the vendor instance from the list of defined vendors by using the vendor's short name.
     * You must have defined the vendor in a "**Resource Status Definition Asset**".
     * The string passed in `Status.getVendorByShortName('myVendorShortName')`
     * is the short name of the Vendor definition within that Asset.
     * Check documentation for "**Resource Status Definition Asset**" for more info.
     *
     * @param {string} name The short name of the vendor as defined in the specific "**Resource Status Definition Asset**".
     * @returns {Vendor} Instance of {@link Vendor}
     *
     * @example
     * ```js
     * const VENDOR_INFO = Status.getVendorByShortName('MyVendorShortName');
     * ```
     */
    static getVendorByShortName(name: string): Vendor { return };

}

export default Status;
