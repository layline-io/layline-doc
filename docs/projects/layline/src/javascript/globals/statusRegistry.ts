import StatusRegistry from "@site/layline/src/javascript/classes/StatusRegistry";

/**
 * ## What
 * Global statusRegistry instance automatically available in all JavaScript Processors.
 * 
 * This constant provides access to all defined vendors and status codes for the current project.
 * It is automatically instantiated when the project starts, based on the internal "LAY" vendor 
 * plus any additional vendors defined in "Resource Status Definition Assets".
 * 
 * The statusRegistry is made available in the scope of every JavaScript Processor Asset.
 *
 * ## How to use
 * Use this to:
 * - Access defined vendors by ID, long name, or short name
 * - Retrieve all available vendors
 * - Get the list of defined language codes
 * - Access status codes for specific vendors
 * 
 * See {@link StatusRegistry} class for all available methods and properties.
 * 
 * @example
 * ```js
 * // Get all vendors
 * const allVendors = statusRegistry.vendors;
 * 
 * // Get vendor by ID (0 is reserved for internal "LAY" vendor)
 * const layVendor = statusRegistry.getVendorById(0);
 * 
 * // Get vendor by long name
 * const myVendor = statusRegistry.getVendorByLongName('MyCompany');
 * 
 * // Get vendor by short name
 * const vendor = statusRegistry.getVendorByShortName('MYCO');
 * 
 * // Get all defined language codes
 * const languages = statusRegistry.languages; // e.g., ["en", "de", "fr"]
 * 
 * // Access status codes for a vendor
 * const statusCodes = statusRegistry.vendors[0].statusCodes;
 * ```
 * 
 * @global
 * @constant
 */
const statusRegistry: StatusRegistry = new StatusRegistry();

export default statusRegistry;
