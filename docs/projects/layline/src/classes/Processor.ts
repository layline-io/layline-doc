/**
 * Instantiated Processor.
 * Every Javascript Processor has access to its Processor instance via `processor`.
 *
 * @example
 * ```js
 * // Set stream output name:
 * let OUTPUT_PORT = processor.getOutputPort('Output');
 * ```
 */
import OutputPort from "./OutputPort";

class Processor {

    /** @hidden **/
    constructor() {}

    /**
     * Returns arguments which you have configured via the UI as part of a Javascript Asset.
     * The list of provided arguments are in JSON-Format.
     * You enter them using the Javascript Asset editor and then retrieve them using this method.
     *
     * @example
     * ```js
     * // Get the Processor's configured arguments:
     * const args = processor.arguments;
     *
     * // Now access the individual arguments like this:
     * let myProp = args.myProp;
     * ```
     *
     * @return {object} Configured arguments as a Javascript object
     */
    arguments: object;

    /**
     * Get the name of the current Processor.
     * Same as {@link getName}
     *
     * @example
     * ```js
     * // Get the Processor's name:
     * const name = processor.name; // Returns the name of the Processor, e.g. 'My-Processor'.
     * ```
     *
     * @return {string} Processor name
     */
    name: string;

    /**
     * Expands all macros contained in a string.
     * For example, if you want to use the `USERNAME` environment variable, which you have defined in an [Environment Resource](../../../../assets/resources/asset-resource-environment) you can do so like this:
     *
     * @example
     * ```js
     * // Get the username which is defined in one of your environment resources:
     * let username = processor.expandString('The username is ${lay:USERNAME}.');
     *
     * // Output: "The username is layline.", where "layline" is the value of the USERNAME environment variable.
     * ```
     *
     * Check out the [macro](../../../macros) documentation for more information on how to address expandable strings.
     *
     * @return {string} Expanded string
     * @param toExpand
     */
    expandString(toExpand: string): string {
        return;
    }

    /**
     * Returns arguments which you have configured via the UI as part of a Javascript Asset.
     * The list of provided arguments are in JSON-Format. You enter them using the Javascript Asset editor
     * and then retrieve them using this method.
     *
     * @example
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
     * Same as {@link name}
     *
     * @example
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
     * @example
     * ```js
     * // Set stream output name:
     * let OUTPUT_PORT = processor.getOutputPort('Output'); // Returns the OutputPort instance for the output port named 'Output'.
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
     * @example
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
     * @example
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
     * @example
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
     * @example
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
