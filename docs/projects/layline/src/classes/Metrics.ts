import Counter from "@site/layline/src/classes/Counter";
import metrics from "@site/layline/src/variables/metrics";

/**
 * Abstract class representing a metrics system.
 * Provides methods to interact with various types of metrics like counters.
 * This class should not be instantiated directly.
 */
class Metrics {
    /** @hidden **/
    constructor() { }

    /**
     * Retrieves a counter metric by name.
     * A counter is a metric that can be incremented or decremented to track counts.
     * You access it using the internal constant {@link metrics}.
     *
     * @param {string} name - The name of the counter metric.
     * @returns {Counter} A Counter instance associated with the given name.
     * @example
     * // Retrieve a counter named 'Counter.Workflow.*.Instances'
     * const signalCount = metrics.getCounter('Counter.Signals.*.MyCounter');
     *
     * // Increment the counter by 1
     * signalCount.increment();
     *
     * // Decrement the counter by 1
     * signalCount.decrement();
     * */
    static getCounter(name: string): Counter {
        return;
    }
}
export default Metrics;
