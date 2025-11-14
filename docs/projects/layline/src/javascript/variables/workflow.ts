import Workflow from "@site/layline/src/javascript/classes/Workflow";

/**
 * ## What
 * Global workflow instance automatically available in all JavaScript Processors.
 * 
 * This constant provides access to the current workflow's configuration and data dictionary.
 * It is automatically instantiated and made available in the scope of every JavaScript Processor Asset.
 *
 * ## How to use
 * Use this to:
 * - Access the workflow's data dictionary
 * - Get the workflow name
 * - Reference workflow-level configuration
 * 
 * See {@link Workflow} class for all available methods and properties.
 * 
 * @example
 * ```js
 * // Get workflow name
 * const workflowName = workflow.name;
 * 
 * // Access the data dictionary
 * const dataDictionary = workflow.getDataDictionary();
 * 
 * // Alternative property access
 * const dd = workflow.dataDictionary;
 * ```
 * 
 * @global
 * @constant
 */
const workflow: Workflow = new Workflow();

export default workflow;
