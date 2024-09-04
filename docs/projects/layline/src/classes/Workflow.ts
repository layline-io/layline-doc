import DataDictionaryEntity from "@site/layline/src/classes/DataDictionaryEntity";

/**
 * ## What
 * A workflow is a collection of processors and connections that are used to process messages.
 * It is a high-level abstraction that represents a business process.
 *
 * ## How to use
 * You typically use the Workflow class to access the data dictionary for a workflow.
 *
 * @example
 * // Accessing the name of the workflow
 * const workflowName = workflow.getName();
 * print(workflowName);
 *
 * // Accessing the data dictionary of the workflow
 * const dataDict = workflow.getDataDictionary();
 * print(dataDict);
 */
class Workflow {

    /** @hidden **/
    constructor() {}


    /**
     * The data dictionary associated with this workflow.
     * This can contain various metadata and information about the workflow's structure and data processing.
     * Same as {@link getDataDictionary}.
     *
     * @type {any}
     * @example
     * const dataDictionary = workflow.dataDictionary;
     */
    dataDictionary: any;

    /**
     * The name of the workflow.
     * Same as {@link getName}.
     *
     * @type {string}
     * @example
     * const workflowName = workflow.name;
     */
    name: string;

    /**
     * Retrieves the data dictionary entity associated with this workflow.
     * The data dictionary provides detailed information about the data used within the workflow.
     *
     * @returns {DataDictionaryEntity} The data dictionary entity for the workflow.
     * @example
     * const dataDictEntity = workflow.getDataDictionary();
     */
    getDataDictionary(): DataDictionaryEntity { return; }

    /**
     * Retrieves the name of the workflow.
     *
     * @returns {string} The name of the workflow.
     * @example
     * const workflowName = workflow.getName();
     * print(workflowName); // Outputs the name of the workflow
     */
    getName(): string { return; }
}

export default Workflow;
