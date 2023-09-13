import Message from "./Message";

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
     * Unpacks a previously packed message.
     *
     * ```js
     * // Pack message
     * const packedMsg = message.pack();
     *
     * // Unpack message
     * const unpackedMsg = packedMsg.unpack();
     * ```
     *
     * @return {Message} Unpacked {@link Message}
     */
    unpack(): Message {
        return;
    }
}

export default PackedMessage;
