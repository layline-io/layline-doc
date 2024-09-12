import Message from "./Message";

/**
 * This isn't an actual class, but a placeholder for _hooks_ which are available within a Javascript Asset.
 * Hooks are automatically invoked as part of a Javascript Assets normal lifecycle.
 * Read more about JS-lifecycle in the [introduction](../../javascript_introduction).
 *
 *
 */
class JavaScriptProcessor {

    /** @hidden **/
    constructor() {
    }

    /**
     * Invoked when a Stream is committed.
     * Use this to perform potential final tasks when a stream ends.
     *
     * @example
     * ```js
     * export function onCommit() {
     *     if (connection) {
     *         connection.commitTransaction();
     *         connection.closeConnection();
     *         connection = null;
     *     }
     * }
     * ```
     */
    onCommit(): void {
    }

    /**
     * `onInit` is invoked upon instantiation of the Javascript Asset.
     * Use this method to perform any initialization actions, e.g. acquiring a database connection, initializing data structures which are used within the script, etc.
     * Note, that this method is only invoked one upon startup of the Project.
     *
     * ```js
     * export function onInit() {
     *     OUTPUT_PORT = processor.getOutputPort('Output');
     * }
     * ```
     */
    onInit(): void {
    }

    /**
     * This is one of the most important methods which you will use every time within a Javascript Asset.
     * layline.io is a reactive messaging system, meaning a script within a Javascript Asset is triggered by the delivery of a message to this Javascript Asset.
     * You can consider the `onMessage` method as a starting point for processing within Javascript Asset.
     *
     * @example
     * ```js
     *
     * // Get the output port
     * const OUTPUT_PORT = processor.getOutputPort('MyOutput');
     *
     * export function onMessage() {
     *    if (message.typeName === 'Header') {
     *        // do nothing
     *    } else if (message.typeName === 'Trailer') {
     *        // do something with the trailer
     *    } else if (message.typeName === 'Detail') {
     *         // invoke a self-defined function which handles the message.
     *         handleDetail(message);
     *    }
     *
     *    stream.emit(message, OUTPUT_PORT);
     * }
     *
     * function handleDetail(detail) {
     *     // do something with the message
     * }
     *
     * ```
     *
     */
    onMessage(): void {
    }


    /**
     * Invoked before a Stream is finally committed.
     * Use this method to do any preparatory work before a Stream is finally committed.
     *
     * @example
     * ```js
     * export function onPrepareCommit() {
     *     // Invoke custom function to write errors which we gathered during stream processing
     *     WriteAllRejectErrors();
     * }
     *
     * functionWriteAllRejectErrors () {
     *     // ...
     * }
     * ```
     */
    onPrepareCommit(): void {

    }

    /**
     * Invoked when a "prepare-retry" signal is emitted by layline.io.
     *
     * @example
     * ```js
     * export function onPrepareRetry() {
     *     if (connection) {
     *         try {
     *             connection.rollbackTransaction();
     *             connection.closeConnection();
     *         } catch (err) {
     *         } finally {
     *             connection = null;
     *         }
     *     }
     * }
     * ```
     */
    onPrepareRetry(): void {
    }

    /**
     * layline.io is a reactive system and works according to the principle of “dynamic push / pull mode”.
     * This means, that in a network of Processors, each Processor can signal to connected Processors that it wants to push, or pull messages, thus managing smooth message flow without the risk of clogging.
     *
     * * **Push-mode**: the downstream processor (“Consumer”) consumes messages at the same or even a faster rate than the source processor (“Producer”) produces the messages (= Slow Producer, fast Consumer)
     * * **Pull-mode**: the source processor produces messages faster than a downstream processor can consume them (= Fast Producer, slow Consumer)
     *
     * Using layline.io you usually do not have to think about “push”- or “pull”-mode and how it is applied throughout the Workflow processing.
     * It is all built-in! Making use of the {@link onMessage} method will ensure that your JavaScript processor is receiving available messages at an applicable signaling rate.
     *
     * Only in case your JavaScript processor includes logic to become a “producer” of (additional) messages, there is a need to
     * explicitly implement the `onPullMessage` method making sure to receive the signals for readiness to receive next messages
     * from connected downstream Processors within your Workflow.
     *
     * **Practical example:**
     *
     * A Workflow is processing Streams.
     * Each Stream has 100,000 messages where two records each need to be correlated to form a new message to then be sent downstream, resulting in a total of 50,000 downstream messages.
     * You cannot correlate them, however until all 100,000 messages have been received.
     * This implies, that no messages leave Processor A, until the Stream has been completely received (e.g. marked by an ending message) and all messages have been correlated.
     * _(To not store all of them in memory, Processor A may use a queue Service for storage. See example below.)_
     * During that phase Processor B is idling.
     *
     * Normally, you would say that once the last message has been received, we can instantly correlate all messages to then send the resulting 50,000 messages downstream to Processor B all in one go.
     * A sudden spike of a wave of these messages is not economical for a reactive system and may take a toll on memory consumption and performance.
     * To avoid this, instead of simply emitting messages when Processor A is ready, you can wait for Processor B to be ready and then send one message at a time until all messages have been emitted.
     *
     * This is what `onPullMessage` allows you to implement.
     *
     * @example
     * ```js
     * // Invoked each a downstream Processor is ready for the next message.
     * export function onPullMessage() {
     *     let message = null;
     *     let emitted = false;
     *     if (streamComplete) { // Stream was fully received
     *        message = queue.ReadMessage(); // Read one message
     *        if (message) {
     *            stream.emit(message, MY_OUTPUT_PORT); // emit the message
     *        }
     *     }
     *
     *     if (!message) {
     *         queue.closeConnection();
     *         queue = null;
     *     }
     * }
     * ```
     *
     * **NOTE:**
     * In case you have two or more downstream Processors connected to the current Javascript processor, you are unable to tell which of the downstream Processors is ready for the next message.
     * This should be of no concern. You can simply send the next message out to the correct Processor.
     * The system will behave in a balanced manner following standard reactive rules.
     *
     */
    onPullMessage(): void {
    }


    /**
     * Invoked when a rollback signal is issued by the system.
     * Perform and "undo" and cleanup tasks here.
     *
     * @example
     * ```js
     * export function onRollback() {
     *   if (connection) {
     *       try {
     *           connection.rollbackTransaction();
     *           connection.closeConnection();
     *       } catch (err) {
     *       } finally {
     *           connection = null;
     *       }
     *   }
     * }
     * ```
     */
    onRollback(): void {
    }

    /**
     * Invoked when current stream ends.
     * Use this to run potential clean up tasks.
     *
     * @example
     * ```js
     * export function onStreamEnd() {
     *      // Report in case some customer data could not be found during stream processing
     *      if (numCustomerDataNotFound > 0) {
     *          stream.logInfo(numCustomerDataNotFound + ' customers could not be found in the database.')
     *      }
     * }
     * ```
     */
    onStreamEnd(): void {
    }


    /**
     * Invoked when current stream is starting.
     * Use this to run potential stream startup initialization tasks on every new Stream.
     *
     * @example
     * ```js
     * export function onStreamStart() {
     *     streamId = stream.getId();
     *     fileName = stream.getName();
     * }
     * ```
     */
    onStreamStart(): void {
    }
}

export default JavaScriptProcessor;
