/**
 * Service is an abstract class which is only instantiated by layline.io itself and not for your direct use.
 * It is directly related to the Services which you can define within layline.io. Examples are
 *
 * * Cassandra Service
 * * JDBC Service
 * * Hazelcast Service
 * * HTTP Service
 * * Aerospike Service
 * * more
 *
 * When configuring a Javascript Asset, you may also define one or more Services for use within that Javascript Asset.
 * layline.io then exposes these assigned Services to Javascript via the `services` pseudo.class.
 *
 * Let's assume you have a Javascript Asset with two assigned Services `MyService_A` and `MyService_B`.
 * You can then access these Services within Javascript like this:
 *
 * ```js
 * const SvcA = services.MyService_A;
 * const SvcB = services.MyService_B;
 * ```
 *
 * The way layline.io exposes this class is by providing an object `services` within a Javascript Asset.
 * This is then used to access linked Services and their configured functions.
 *
 * **Let's look at this using an example:**
 *
 * Let's assume we have configured a Javascript Asset which is linked to A JDBC Service Asset by the name of `MyDBService`.
 * The Service `MyDBService` has one Function `MyInsert` which you have defined when you set up the JDBC Service Asset using the UI.
 *
 * You can access all Services which you may have linked to a Javascript Asset by using the `services` keyword like so:
 *
 * **Opening a connection:**
 * ```js
 *
 * let OUTPUT_PORT = null;
 * let connection = null;
 *
 * // Initial setup
 * function onInit() {
 *     OUTPUT_PORT = processor.getOutputPort('MyOutput');
 * }
 *
 * function onStreamStart() {
 *     // Open a connection to the DB service
 *     if (!connection) {
 *         connection = services.MyDBService.openConnection();
 *     }
 *     connection.beginTransaction();
 * }
 * ```
 *
 * Depending on the type of service you are addressing you have different options which you have to understand and know.
 * A JDBC Service for example exposes a {@link Connection} whereas a HTTP Service does not.
 *
 * **Check the respective Service Asset documentation on how to use the Service within a Javascript Asset.**
 *
 * @abstract
 * @class
 *
 */
class Service {
    /** @hidden **/
    constructor() {
    }

}

export default Service;
