import Processor from "@site/layline/src/classes/Processor";

/**
 * ## What
 * processor is an instance of the Processor class.
 * It is automatically created for each Processor within a Workflow when a deployment is started.
 * The Processor is the main entry point for processing data within a Workflow.
 * It provides methods to access InputPorts, OutputPorts, and other Processor-specific functionality.
 *
 * ## How to use
 * Please check the {@link Processor} documentation for more information.
 */
const processor: Processor = new Processor();

export default processor;
