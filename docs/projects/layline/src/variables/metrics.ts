import Metrics from "@site/layline/src/classes/Metrics";

/**
 * ## What
 * metrics is an instance of the {@link Metrics} class.
 * It is automatically created when a deployment is started.
 * It provides methods to interact with various types of metrics like counters.
 *
 * ## How to use
 * Please check the {@link Metrics} documentation for more information.
 */
const metrics: Metrics = new Metrics();

export default metrics;
