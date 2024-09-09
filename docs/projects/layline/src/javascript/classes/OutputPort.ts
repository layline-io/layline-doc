/**
 * Instance of an output port of a Processor.
 * This class represents the output port through which data is sent from a processor to another processor's input port.
 */
class OutputPort {

    /** @hidden **/
    constructor() {
    }

    /**
     * The name of this output port.
     * Same as {@link getName}.
     *
     * @type {string}
     * @example
     * const outputPortName = outputPort.name; // Returns the name of the output port, e.g. 'My-Output-Port'.
     */
    name: string;

    /**
     * The name of the peer port (input port of the connected processor) that this output port is connected to.
     *
     * @type {string}
     * @example
     * const peerPortName = outputPort.peerPortName; // Returns the name of the peer port, e.g. 'My-Input-Port'.
     */
    peerPortName: string;

    /**
     * The name of the processor to which this output port's peer port belongs.
     *
     * @type {string}
     * @example
     * const connectedProcessorName = outputPort.peerProcessorName; // Returns the name of the processor to which the peer port belongs, e.g. 'My-Processor'.
     */
    peerProcessorName: string;

    /**
     * Returns the name of the processor that this output port is connected to.
     *
     * @returns {string} The name of the processor to which this output port is connected.
     * @example
     * // Get the output port by name
     * const outputPort = processor.getOutputPort('My-Output-Port');
     *
     * // Now get the name of the processor that this output port is connected to
     * const peerProcessorName = outputPort.getPeerProcessorName(); // Returns the name of the connected processor, e.g. 'My-Processor'.
     */
    getPeerProcessorName(): string {
        return;
    }

    /**
     * Returns the name of this output port.
     *
     * @returns {string} The name of the output port.
     * @example
     * // Get the output port by name
     * const outputPort = processor.getOutputPort('My-Output-Port');
     *
     * // Get the name of the output port
     * const name = outputPort.getName(); // Returns the name of the output port, e.g. 'My-Output-Port'.
     */
    getName(): string {
        return;
    }

    /**
     * Returns the name of the peer port (input port of the connected processor) that this output port is connected to.
     *
     * @returns {string} The name of the peer port.
     * @example
     * // Get the output port by name
     * const outputPort = processor.getOutputPort('My-Output-Port');
     *
     * // Get the name of the peer port
     * const peerPort = outputPort.getPeePort(); // Returns the name of the peer port, e.g. 'My-Input-Port'.
     */
    getPeerPort(): string {
        return;
    }

    /**
     * Returns the name of the processor to which this output port belongs.
     *
     * @returns {string} The name of the processor that owns this output port.
     * @example
     * // Get the output port by name
     * const outputPort = processor.getOutputPort('My-Output-Port');
     *
     * // Get the name of the processor that owns this output port
     * const processorName = outputPort.getProcessorName(); // Returns the name of the processor, e.g. 'My-Processor'.
     */
    getProcessorName(): string {
        return;
    }

}

export default OutputPort;
