import Stream from "../classes/Stream";
import StatusRegistry from "../classes/StatusRegistry";

/**
 * ## What
 * `stream` represents the stream which is being processed at the time.
 * The `stream` object is available in any script-based Processor, e.g. the Javascript Processor.
 *
 * ## How to use
 * You can access it directly without the need to instantiate it.
 * It provides a number of functions which can - and sometimes have to - be invoked to control stream processing.
 *
 * Please check the {@link Stream} documentation for more information.
 */
const stream: Stream = new Stream();


export default stream;
