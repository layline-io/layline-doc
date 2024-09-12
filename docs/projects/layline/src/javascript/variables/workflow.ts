import Workflow from "@site/layline/src/javascript/classes/Workflow";

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
 *
 * @example
 * function on_init():
 *     # Accessing the name of the workflow
 *     workflowName = workflow.getName()
 *     print("Current workflow: " + workflowName)
 *
 *     # Accessing the data dictionary of the workflow
 *     dataDict = workflow.getDataDictionary()
 *
 * function onMessage():
 *     # Using workflow information in message processing
 *     message.data.WorkflowInfo.Name = workflow.name
 *
 *     # Emit the modified message
 *     stream.emit(message, OUTPUT_PORT)
 */
const workflow: Workflow = new Workflow();

export default workflow;
