/**
 * Represents the dynamically generated structure of a data dictionary based on the specific configuration.
 *
 * This interface provides access to the root elements of the data dictionary, which are
 * generated at runtime based on the individual setup. It allows for navigation through
 * the hierarchical structure of the data dictionary using dot notation.
 *
 * The actual properties available on this interface depend entirely on the specific
 * configuration of the data dictionary in the layline.io project and are not known
 * at compile time.
 *
 * @interface
 * @example
 * // Accessing elements of the data dictionary
 * const someDetail = dataDictionary.type.SomeNamespace.Detail;
 * const someField = dataDictionary.type.AnotherNamespace.Header.SomeField;
 *
 * @example
 * // Using in a message processing context
 * if (message.is(dataDictionary.type.SomeNamespace.SomeMessageType)) {
 *     // Process specific message type
 * }
 */
interface DataDictionaryTypes {
    /**
     * Allows for dynamic properties based on the specific configuration.
     * These can be namespaces, sequences, or other types of declarations.
     */
    [key: string]: any;
}

export default DataDictionaryTypes;
