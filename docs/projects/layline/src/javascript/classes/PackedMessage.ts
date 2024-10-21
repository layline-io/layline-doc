import Message from "./Message";
import DataDictionary from "@site/layline/src/javascript/classes/DataDictionary";

/**
 * A packed message represents an ordinary {@link Message}, but in a compressed format.
 * This is useful in case you need to retain a large number or messages in memory, and reduce memory overhead.
 *
 * The only way to create a packed message is by invoking the '[Message.pack](./Message#pack)' method.
 */
class PackedMessage {

    /** @hidden **/
    constructor() {
    }

    /**
     * The type of the packed message.
     * This is a reference to the data dictionary that was used to pack the message.
     * @type {DataDictionary}
     * @return {Message} Unpacked {@link Message}
     *
     * @example
     * // Pack message
     * const packedMsg = message.pack();
     * const type = packedMsg.type; // Returns the data dictionary used to pack the message
     *
     * // Unpack message
     * const unpackedMsg = packedMsg.unpack();
     */
    type: DataDictionary;

    /**
     * Unpacks a previously packed message.
     *
     * @return {Message} Unpacked {@link Message}
     *
     * @example
     * // Pack message
     * const packedMsg = message.pack();
     *
     * // Unpack message
     * const unpackedMsg = packedMsg.unpack();
     *
     */
    unpack(): Message {
        return;
    }
}

export default PackedMessage;
