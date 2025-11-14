import Processor from "@site/layline/src/javascript/classes/Processor";

/**
 * ## What
 * Global processor instance automatically available in all JavaScript Processors.
 * 
 * This constant provides access to the current processor's configuration, methods, and properties.
 * It is automatically instantiated and made available in the scope of every JavaScript Processor Asset.
 * 
 * ## How to use
 * Use this to access processor-specific information such as:
 * - Configured arguments from the UI
 * - Processor name
 * - Output ports
 * - Logging methods
 * - String expansion with macros
 * 
 * See {@link Processor} class for all available methods and properties.
 * 
 * @example
 * ```js
 * // Access processor name
 * const name = processor.name;
 * 
 * // Get configured arguments
 * const args = processor.arguments;
 * const myValue = args.myConfiguredProperty;
 * 
 * // Get an output port
 * const OUTPUT_PORT = processor.getOutputPort('Output');
 * 
 * // Log a message
 * processor.logInfo('Processing started');
 * 
 * // Expand macros in strings
 * const expanded = processor.expandString('User: ${lay:USERNAME}');
 * ```
 * 
 * @global
 * @constant
 */
const processor: Processor = new Processor();

export default processor;
