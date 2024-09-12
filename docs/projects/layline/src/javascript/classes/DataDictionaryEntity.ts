/**
 * Represents an individual node in a {@link Message}'s data structure.
 *
 * The DataDictionaryEntity class corresponds to a specific element within the hierarchical
 * structure of a message's data dictionary. It can represent both intermediate nodes
 * (like a record type) and leaf nodes (like individual fields).
 *
 * @class
 * @example
 * Assuming we have a data dictionary structure:
 * ```
 * CSV
 *  ├── RECORD_TYPE
 *  ├── FIRST_NAME
 *  ├── LAST_NAME
 *  └── ...
 * ```
 * Then:
 * - `message.data.CSV` is a DataDictionaryEntity
 * - `message.data.CSV.RECORD_TYPE` is also a DataDictionaryEntity
 *
 * @example
 * // Accessing a DataDictionaryEntity
 * const csvEntity = message.data.CSV;
 * const recordTypeEntity = message.data.CSV.RECORD_TYPE;
 *
 * // Using DataDictionaryEntity with Message methods
 * const recordType = message.getString(recordTypeEntity);
 * print(`Record Type: ` + recordType);
 *
 * @example
 * // Using DataDictionaryEntity to check field existence and access values
 * if (message.exists(message.data.CSV.LAST_NAME)) {
 *     const lastName = message.getString(message.data.CSV.LAST_NAME);
 *     print(`Last Name: ` + lastName);
 * } else {
 *     print("Last Name field does not exist in this message");
 * }
 *
 * @see {@link Message} for more information on how DataDictionaryEntity is used in message processing.
 * @see {@link Message#exists} for checking the existence of a field in a message.
 * @see {@link Message#getString} for retrieving string values using DataDictionaryEntity.
 */
class DataDictionaryEntity {

    /** @hidden */
    constructor( ) {
    }
}

export default DataDictionaryEntity;
