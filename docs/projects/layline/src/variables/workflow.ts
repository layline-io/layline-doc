import Workflow from "@site/layline/src/classes/Workflow";

/**
 * ## What
 * A workflow is a collection of processors and connections that are used to process messages.
 * It is a high-level abstraction that represents a business process.
 * The workflow variable is an instance of the {@link Workflow} class which provides methods to access the data dictionary for a workflow.
 * It is automatically created for each workflow instance when started.
 * You simply access it using the internal constant {@link workflow} within a script.
 *
 * ## How to use
 * You typically use the Workflow class to access the data dictionary for a workflow.
 * See the {@link Workflow} documentation for more information.
 */
const workflow: Workflow = new Workflow();

export default workflow;
