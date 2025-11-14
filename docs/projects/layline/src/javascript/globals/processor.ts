import Processor from "@site/layline/src/javascript/classes/Processor";

/**
 * ## What
 * `processor` is an instance of the Processor class.
 * It is automatically created for each Processor within a Workflow when a deployment is started.
 * The Processor is the main entry point for processing data within a Workflow.
 * It provides methods to access InputPorts, OutputPorts, and other Processor-specific functionality.
 * 
 * ## How to use
 * Please check the {@link Processor} documentation for more information.
 * 
 * @example
 * ```js
 * // Get the Processor's name
 * const processorName = processor.getName();
 * print('Current processor: ' + processorName);
 * 
 * // Get an output port
 * const OUTPUT_PORT = processor.getOutputPort('MyOutput');
 * 
 * // Get configured arguments
 * const args = processor.getArguments();
 * const myCustomArg = args.myCustomArg;
 * 
 * // Expand a string using environment variables
 * const expandedString = processor.expandString('The username is ${lay:USERNAME}.');
 * 
 * // Logging
 * processor.logInfo('Processing started');
 * processor.logWarning('Unusual data encountered');
 * processor.logError('An error occurred during processing');
 * 
 * // Using processor in lifecycle hooks
 * export function onInit() {
 *     OUTPUT_PORT = processor.getOutputPort('Output');
 * }
 * 
 * export function onMessage() {
 *     // Process the message
 *     // ...
 *     // Emit the processed message
 *     stream.emit(message, OUTPUT_PORT);
 * }
 * 
 * export function onStreamStart() {
 *     processor.logInfo('Starting to process stream: ' + stream.getName());
 * }
 * 
 * export function onStreamEnd() {
 *     processor.logInfo('Finished processing stream: ' + stream.getName());
 * }
 * ```
 * 
 * Note: The exact methods and properties available on the `processor` object may vary depending on your specific layline.io configuration and the type of Processor being used. Always refer to the most up-to-date documentation provided by layline.io for the definitive guide on using the `processor` object in JavaScript scripts.
 * 
 * @global
 * @constant
 */
const processor: Processor = new Processor();

export default processor;
