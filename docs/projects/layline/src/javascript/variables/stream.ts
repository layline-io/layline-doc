import Stream from "../classes/Stream";

/**
 * ## What
 * Global stream instance automatically available in all JavaScript Processors.
 * 
 * This constant represents the stream currently being processed and is automatically instantiated 
 * and made available in the scope of every JavaScript Processor Asset.
 *
 * ## How to use
 * Use this to:
 * - Emit messages to output ports
 * - Access stream metadata (ID, name, path, etc.)
 * - Request stream retries or rollbacks
 * - Log stream-specific messages
 * - Control stream routing and output destinations
 * 
 * See {@link Stream} class for all available methods and properties.
 * 
 * @example
 * ```js
 * // Get stream information
 * const streamId = stream.id;
 * const streamName = stream.name;
 * 
 * // Emit a message to an output port
 * const OUTPUT_PORT = processor.getOutputPort('Output');
 * stream.emit(message, OUTPUT_PORT);
 * 
 * // Access stream metadata
 * const metadata = stream.getMetadata();
 * 
 * // Log a stream-specific message
 * stream.logInfo('Processing stream: ' + stream.name);
 * 
 * // Request a retry with backoff
 * stream.requestRetry(status, 5000);
 * 
 * // Set output paths
 * stream.setOutputName('processed_' + stream.name);
 * ```
 * 
 * @global
 * @constant
 */
const stream: Stream = new Stream();

export default stream;
