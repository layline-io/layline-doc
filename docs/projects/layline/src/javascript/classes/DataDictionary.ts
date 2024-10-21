import DataDictionaryEntity from "./DataDictionaryEntity";
import Message from "./Message";
import DataDictionaryTypes from "../interfaces/DataDictionaryTypes";

/**
 * The DataDictionary class provides access to the data dictionary structures defined in your layline.io Project.
 * It allows you to create messages based on these structures and access type definitions.
 *
 * ## Usage Notes
 *
 * 1. The DataDictionary is automatically available in your scripts as the `dataDictionary` object.
 * 2. Use the `type` property to navigate through your data dictionary structure.
 * 3. The `createMessage` method is useful when you need to create new messages based on your defined structures, for example when splitting or aggregating messages.
 *
 * Remember to refer to your Project's specific data dictionary structure when using these methods and properties.
 */
class DataDictionary {

    /** @hidden **/
    constructor() {
    }

    /**
     * The type of the data dictionary.
     * Provides access to all data dictionary types defined in your Project.
     *
     * @type {DataDictionaryTypes} Defined data dictionary types
     *
     * @example
     * // Accessing a specific type in the data dictionary
     * const myRecordType = dataDictionary.type.MyFormat.Detail;
     */
    type: DataDictionaryTypes;

    /**
     * Creates a message from a data dictionary access path.
     *
     * All configured data formats and data dictionary structures which you have configured in your Project are compiled into one
     * coherent overarching data dictionary.
     *
     * With this method you can create a message from such a data dictionary structure by providing the access path to the structure which you intend to create.
     *
     * @param {DataDictionaryEntity} entity - DataDictionaryEntity. The data dictionary access path to the structure you want to create a message from.
     * @return {Message} A new Message instance created from the data dictionary structure
     *
     * @example
     * // Create a message based on a specific data dictionary structure
     * const newMessage = dataDictionary.createMessage(dataDictionary.type.MyCorp.MyStructure.MySubstructure.Record);
     *
     * // You can then set values on this message
     * newMessage.data.MyFormat.Header.RECORD_TYPE = "HDR";
     * newMessage.data.MyFormat.Header.TIMESTAMP = new Date();
     *
     * // Emit the message to an output port
     * stream.emit(newMessage, OUTPUT_PORT);
     */
    createMessage(entity: DataDictionaryEntity) : Message {
        return;
    }
}

export default DataDictionary;
