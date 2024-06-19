import EntityDeclaration from "./EntityDeclaration";
import Message from "./Message";

/**
 * @property type
 */
class DataDictionary {

    /** @hidden **/
    constructor() {
    }

    /**
     * Creates a message from a data dictionary access path.
     *
     * All configured data formats and data dictionary structures which you have configured in your Project are compiled into one
     * coherent overarching data dictionary.
     *
     * With this method you can create a message from such a data dictionary structure by providing the access path to the structure which you intend to create.
     *
     * ```js
     * let message = dataDictionary.createMessage(dataDictionary.type.MyCorp.MyStructure.MySubstructure.Record);
     * ```
     * @param {EntityDeclaration} entity - Data dictionary access path
     * @return {Message} Message created from the data dictionary structure
     */
    createMessage(entity: EntityDeclaration) : Message {
        return;
    }
}

export default DataDictionary;
