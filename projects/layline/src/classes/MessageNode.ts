/**
 * Individual node of a {@link Message}
 *
 * Assume that we have a data dictionary structure of
 * * CSV
 *      * RECORD_TYPE ...
 *      * FIRST_NAME ...
 *      * LAST_NAME ...
 *      * ...
 *
 * Then `message.data.CSV` is a MessageNode as is `message.data.CSV.RECORD_TYPE`.
 * As an example of use check [Message.findStatus](Message#findStatus).
 *
 * @class
 */
class MessageNode {

}

export default MessageNode;
