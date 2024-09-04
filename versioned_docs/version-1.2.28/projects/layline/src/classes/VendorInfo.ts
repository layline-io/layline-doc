/**
 * Instance of Vendor information.
 * Vendors are defined within the configuration of a "**Resource Status Definition Asset**".
 * Status codes are then defined per Vendor within that Asset.
 *
 * To retrieve vendor information use the [getVendor()](./Status#getvendor) method
 *
 * @typedef {Object} VendorInfo
 * @property {number} id Internal ID of a Vendor
 * @property {string} shortName Short name of a vendor, e.g. "LAY"
 * @property {string} longName Long name of a vendor,, e.g. "layline.io"
 */
class VendorInfo {
    public id: number;
    public shortName: string;
    public longName: string;

    /** @hidden **/
    constructor() {
    }

}

export default VendorInfo;
