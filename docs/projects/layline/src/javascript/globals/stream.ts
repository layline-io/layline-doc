import Stream from "../classes/Stream";

/**
 * ## What
 * `stream` represents the stream which is being processed at the time.
 * The `stream` object is available in any script-based Processor, e.g. the JavaScript Processor.
 *
 * ## How to use
 * You can access it directly without the need to instantiate it.
 * It provides a number of functions which can - and sometimes have to - be invoked to control stream processing.
 * 
 * Please check the {@link Stream} documentation for more information.
 * 
 * @example
 * ```js
 * // Get stream information
 * const streamId = stream.getId();
 * const streamName = stream.getName();
 * 
 * // Emit a message to an output port
 * const outputPort = processor.getOutputPort('MyOutput');
 * stream.emit(message, outputPort);
 * 
 * // Log information
 * stream.logInfo('Processing stream: ' + streamName);
 * stream.logWarning('Unusual data encountered in stream');
 * stream.logError('An error occurred during stream processing');
 * 
 * // Get stream metadata
 * const metadata = stream.getMetadata();
 * const fileSize = metadata.data.Size;  // For a file-based stream
 * 
 * // Set stream properties
 * stream.setOutputName('new_stream_name');
 * stream.setOutputPath('/new/output/path');
 * 
 * // Request retry or rollback
 * if (errorCondition) {
 *     stream.requestRetry(Status.create(VENDOR, 'TEMPORARY_ERROR'), 30000);  // Retry after 30 seconds
 * }
 * if (fatalError) {
 *     stream.requestRollback(Status.create(VENDOR, 'FATAL_ERROR'));
 * }
 * 
 * // Using stream in lifecycle hooks
 * export function onStreamStart() {
 *     const streamId = stream.getId();
 *     const fileName = stream.getName();
 *     stream.logInfo('Started processing stream: ' + fileName);
 * }
 * 
 * export function onStreamEnd() {
 *     stream.logInfo('Finished processing stream: ' + fileName);
 * }
 * 
 * export function onMessage() {
 *     // Process the message
 *     // ...
 *     // Emit the processed message
 *     stream.emit(message, outputPort);
 * }
 * 
 * export function onCommit() {
 *     stream.logInfo('Stream ' + streamId + ' committed successfully');
 * }
 * 
 * export function onRollback() {
 *     stream.logError('Stream ' + streamId + ' rolled back due to errors');
 * }
 * ```
 * 
 * Note: The exact methods and properties available on the `stream` object may vary depending on your specific layline.io configuration and the type of stream being processed. Always refer to the most up-to-date documentation provided by layline.io for the definitive guide on using the `stream` object in JavaScript scripts.
 * 
 * @global
 * @constant
 */
const stream: Stream = new Stream();

export default stream;
