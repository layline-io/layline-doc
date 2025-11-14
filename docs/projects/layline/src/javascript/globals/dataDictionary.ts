import DataDictionary from "@site/layline/src/javascript/classes/DataDictionary";

/**
 * ## What
 * `dataDictionary` is an instance of the DataDictionary class.
 * It is automatically created and made available in any script-based Processor within layline.io, such as the Python Processor.
 * The dataDictionary provides access to the data dictionary structures defined in your Project and allows you to create messages based on these structures.
 *
 * ## Usage Notes
 *
 * 1. The dataDictionary variable is globally available in your Python scripts within layline.io.
 * 2. You can access it directly without the need to instantiate it.
 * 3. Use the type property to navigate through your data dictionary structure.
 * 4. The createMessage method is particularly useful when you need to create new messages based on your defined structures, for example when splitting or aggregating messages.
 * 5. Always refer to your Project's specific data dictionary structure when using dataDictionary.
 * 6. The dataDictionary object is read-only. You cannot modify the data dictionary structure through this object; it's used for accessing the structure and creating messages based on it.
 *
 * Remember that the exact structure accessible through dataDictionary.type depends on the data formats and structures you've defined in your layline.io Project. Always consult your Project's configuration to understand the available types and structures.
 *
 * Please check the {@link DataDictionary} documentation for more information on available methods and properties.
 *
 * @example
 * # Accessing a specific type in the data dictionary
 * my_record_type = dataDictionary.type.MyFormat.Detail
 *
 * # Creating a new message based on a data dictionary structure
 * new_message = dataDictionary.createMessage(dataDictionary.type.MyCorp.MyStructure.MySubstructure.Record)
 *
 * # Setting values on the new message
 * new_message.data.MyFormat.Header.RECORD_TYPE = "HDR"
 * new_message.data.MyFormat.Header.TIMESTAMP = DateTime.now()
 *
 * # Emitting the new message
 * stream.emit(new_message, OUTPUT_PORT)
 *
 */
const dataDictionary: DataDictionary = new DataDictionary();

export default dataDictionary;
