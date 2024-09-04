import {Status, Vendor} from "@site/layline/src";
import StatusRegistry from "@site/layline/src/classes/StatusRegistry";

/**
 * ## What
 * statusRegistry is an instance of the StatusRegistry class.
 * It is automatically created when a deployment is started.
 *
 * ## How to use
 * Please check the {@link StatusRegistry} documentation on the properties and methods available.
 *
 */

const statusRegistry: StatusRegistry = new StatusRegistry();


export default statusRegistry;
