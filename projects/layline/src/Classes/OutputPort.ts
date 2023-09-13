/**
 * Instance of an output port of a Processor
 */
class OutputPort {

    /** @hidden **/
    constructor() {
    }

    /**
     * Returns the name of the processor that this processor is attached to.
     *
     * ```js
     * // Get the output port by name
     * const OUTPUT_PORT = processor.getOutputPort('My-Output-Port');
     *
     * // Now get the name of the processor that this output port is connected ti.
     * let peerProcessorName = OUTPUT_PORT.getPeerProcessorName();
     * ```
     *
     * @return {string} Name of Processor which this output port is connected to.
     */
    getPeerProcessorName(): string {
        return ;
    }

}

export default OutputPort;
