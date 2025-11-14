import Workflow from "@site/layline/src/javascript/classes/Workflow";

/**
 * ## What
 * A workflow is a collection of processors and connections that are used to process messages.
 * It is a high-level abstraction that represents a business process.
 * The `workflow` variable is an instance of the {@link Workflow} class which provides methods to access the data dictionary for a workflow.
 * It is automatically created for each workflow instance when started.
 * You can simply access it using the `workflow` variable within a JavaScript script in layline.io.
 *
 * ## How to use
 * You typically use the `workflow` variable to access the data dictionary for a workflow.
 * It's available globally in your JavaScript scripts within layline.io, without the need for import statements.
 * 
 * See the {@link Workflow} documentation for more information on available methods and properties.
 * 
 * @example
 * ```js
 * export function onInit() {
 *     // Accessing the name of the workflow
 *     const workflowName = workflow.getName();
 *     print('Current workflow: ' + workflowName);
 * 
 *     // Accessing the data dictionary of the workflow
 *     const dataDict = workflow.getDataDictionary();
 * }
 * 
 * export function onMessage() {
 *     // Using workflow information in message processing
 *     message.data.WorkflowInfo.Name = workflow.name;
 *     
 *     // Emit the modified message
 *     stream.emit(message, OUTPUT_PORT);
 * }
 * ```
 * 
 * @global
 * @constant
 */
const workflow: Workflow = new Workflow();

export default workflow;
