import Metrics from "@site/layline/src/javascript/classes/Metrics";

/**
 * ## What
 * metrics is an instance of the {@link Metrics} class.
 * It is automatically created when a deployment is started.
 * It provides methods to interact with various types of metrics like counters.
 *
 * ## How to use
 * Please check the {@link Metrics} documentation for more information.
 * 
 * @example
 * ```js
 * // Retrieve a counter named 'Counter.Workflow.*.Instances'
 * const signalCount = metrics.getCounter('Counter.Signals.*.MyCounter');
 * 
 * // Increment the counter by 1
 * signalCount.increment();
 * 
 * // Decrement the counter by 1
 * signalCount.decrement();
 * ```
 * 
 * @global
 * @constant
 */
const metrics: Metrics = new Metrics();

export default metrics;
