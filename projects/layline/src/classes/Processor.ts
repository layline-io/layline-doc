/**
 * Instantiated Processor.
 * Every Javascript Processor has access to its Processor instance via `processor`.
 *
 * Example:
 * ```js
 * // Set stream output name:
 * let OUTPUT_PORT = processor.getOutputPort('Output');
 * ```
 */
import OutputPort from "./OutputPort";

class Processor {

    expandString(toExpand: string): string {
        return;
    }

    /**
     * Returns arguments which you have configured via the UI as part of a Javascript Asset.
     * The list of provided arguments are in JSON-Format. You enter them using the Javascript Asset editor
     * and then retrieve them using this method.
     *
     * Example:
     * ```js
     * // Get the Processor's configured arguments:
     * const args = processor.getArguments();
     *
     * // Now access the individual arguments like this:
     * let myProp = args.myProp;
     * ```
     *
     * @return {object} Configured arguments as a Javascript object
     */
    getArguments(): object {
        return;
    }


    /**
     * Get the name of the current Processor.
     *
     * Example:
     * ```js
     * // Get the Processor's name:
     * processor.getName();
     * ```
     *
     * @return {string} Processor name
     */
    getName(): string {
        return
    }

    /**
     * Get the {@link OutputPort} information for a given output port.
     *
     * Example:
     * ```js
     * // Set stream output name:
     * let OUTPUT_PORT = processor.getOutputPort('Output');
     * ```
     *
     * @param portName
     * @return {OutputPort} {@link Output} port instance information.
     */
    getOutputPort(portName: string): OutputPort {
        return;
    }


    /**
     * Logs a message with {@link Severity}.ERROR to the processor log.
     * You can view this both via the Audit Trail in the UI and output in the process terminal output.
     *
     * Example:
     * ```js
     * processor.logError('Ran into the following problem: ' + problem);
     * ```
     *
     * @param msg - Information you want to log.
     */
    logError(msg: string): void {
    }


    /**
     * Logs a message with {@link Severity}.FATAL to the processor log.
     * You can view this both via the Audit Trail in the UI and output in the process terminal output.
     *
     * Example:
     * ```js
     * processor.logFatal('Ran into the following problem: ' + problem);
     * ```
     *
     * @param msg - Information you want to log.
     */
    logFatal(msg: string): void {
    }


    /**
     * Logs a message with {@link Severity}.INFO to the processor log.
     * You can view this both via the Audit Trail in the UI and output in the process terminal output.
     *
     * Example:
     * ```js
     * processor.logInfo('Here is some interesting information: ' + info);
     * ```
     *
     * @param msg - Information you want to log.
     */
    logInfo(msg: string): void {
    }


    /**
     * Logs a message with {@link Severity}.WARNING to the processor log.
     * You can view this both via the Audit Trail in the UI and output in the process terminal output.
     *
     * Example:
     * ```js
     * processor.logWarning('Here is a warning: ' + warning);
     * ```
     *
     * @param msg - Information you want to log.
     */
    logWarning(msg: string): void {
    }

}

export default Processor;
