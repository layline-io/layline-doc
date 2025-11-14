import Metrics from "@site/layline/src/javascript/classes/Metrics";

/**
 * ## What
 * Global metrics instance automatically available in all JavaScript Processors.
 * 
 * This constant provides access to the metrics system for tracking and monitoring
 * workflow execution statistics. It is automatically instantiated and made available 
 * in the scope of every JavaScript Processor Asset.
 *
 * ## How to use
 * Use this to:
 * - Create and access counters for custom metrics
 * - Track processing statistics
 * - Monitor workflow performance
 * 
 * See {@link Metrics} class for all available methods and properties.
 * 
 * @example
 * ```js
 * // Get or create a counter
 * const processedCounter = metrics.getCounter('messages_processed');
 * 
 * // Increment the counter
 * processedCounter.increment();
 * 
 * // Increment by a specific value
 * processedCounter.increment(10);
 * 
 * // Decrement the counter
 * processedCounter.decrement();
 * 
 * // Get current count
 * const count = processedCounter.count;
 * ```
 * 
 * @global
 * @constant
 */
const metrics: Metrics = new Metrics();

export default metrics;
