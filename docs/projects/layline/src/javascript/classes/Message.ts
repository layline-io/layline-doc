import Status from "./Status";
import PackedMessage from "./PackedMessage";
import Severity from "../enumerations/Severity";
import JavaType from "../enumerations/JavaType";
import LocalDate from "@site/layline/src/javascript/classes/LocalDate";
import DateTime from "@site/layline/src/javascript/classes/DateTime";
import DataDictionaryEntity from "@site/layline/src/javascript/classes/DataDictionaryEntity";
import Vendor from "@site/layline/src/javascript/classes/Vendor";

/**
 * Events traversing layline.io Workflows are instantiated as a {@link Message}.
 * This class exposes a number of properties and methods to extract and set data within messages.
 *
 * To understand the anatomy of a message please read the respective [chapter in the documentation](../../../../concept/data-dictionary).
 *
 *
 * ## Example Message Structure
 * Assume we have the following data dictionary structure
 * * Header
 *   * IOT
 *     * RECORD_TYPE
 *     * DEVICE_NO
 * * Detail
 *   * IOT
 *     * RECORD_TYPE
 *     * TIME
 *     * MEASUREMENT
 * * Trailer
 *   * IOT
 *     * RECORD_TYPE
 *     * COUNT
 *
 * Then in a Javascript processor we can do this:
 *
 * ```js
 * ...
 * export function onMessage() {
 *     if (message.typeName === 'Header') {
 *         onHeader (message);
 *     } else if (message.typeName === 'Detail') {
 *         onDetail(message);
 *     } else if (message.typeName === 'Trailer') {
 *         onDetail(message);
 *     }
 *
 *     // send the message on through OUTPUT_PORT of Processor
 *     stream.emit(message, OUTPUT_PORT);
 * }
 * ...
 *
 * ```
 *
 * And this:
 *
 * ```js
 * ...
 * // Handle a detail record type
 * function onDetail (message) {
 *     const m = message.data.IOT.MEASUREMENT;
 *
 *     const VENDOR = Status.getVendorByName('MyVendorLongName');
 *
 *     if (m < 0) {
 *          message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_MEASUREMENT', m));
 *     }
 * }
 * ...
 *
 * ```
 *
 * @property {Object} data
 * @property {Object} type
 *
 */
class Message {

    /** @hidden **/
    constructor() {
    }

    /**
     * The data of the message.
     * It is a nested object structure that reflects the structure of the data dictionary.
     *
     * @type {Object}
     * @example
     * ```js
     * // Accessing the data of a message
     * const data = message.data;
     * ```
     *
     */
    data: object;

    /**
     * The unique identifier of the message.
     * This is a UUID string that is generated for each message.
     * It is used to uniquely identify a message within the system.
     *
     * @type {string}
     * @example
     * ```js
     * // Accessing the id of a message
     * const id = message.id;
     * ```
     *
     */
    id: string;

    /**
     * Gets the number of States {@link Status} attached.
     * Same as {@link getNumStatusAttached}.
     *
     * ```js
     * const result = message.numStatusAttached;
     * ```
     *
     * @return {number} - Number of States attached to the message.
     */
    numStatusAttached: number;


    /**
     * Adds a {@link Status} to a message.
     * The {@link Status} must have been created with [Status.create](Status#create) or otherwise instantiated.
     *
     * @example
     * ```js
     *  if (error) {
     *      message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', valueString));
     *  }
     * ```
     *
     * @param {Severity} severity - [Severity](../enumerations/Severity) value.
     * @param {Status} status - The {@link Status} which should be added.
     * @param {boolean} [addToLog=true] - Signals whether the {@link Status} shall also be added to the log, or not. Will be added by default if not specified.
     * If `true` then the Status will be visible in the Stream Log of the Audit Trail.
     *
     */
    addStatus(severity: Severity, status: Status, addToLog: boolean = true): void {
    }

    /**
     * Creates a full clone of a {@link Message}
     *
     * ```js
     * clonedMessage = message.clone();
     * ```
     *
     * @return {Message} A copy of a Message
     */
    clone(): Message {
        return;
    }


    /**
     * Commits the message, typically used with message queues or streaming platforms.
     *
     * This method is used to acknowledge the successful processing of a message.
     * The exact behavior depends on the underlying system:
     *
     * - For an SQS queue, it deletes the message from the queue.
     * - For a Kafka topic, it commits the offset of the consumer.
     *
     * Calling this method indicates that the message has been successfully processed
     * and should not be redelivered.
     *
     * @returns {Message} Returns the message instance for method chaining.
     *
     * @example
     * ```javascript
     * export function onMessage() {
     *   try {
     *     // Process the message
     *     const result = processMessage(message);
     *
     *     if (result.success) {
     *       // If processing was successful, commit the message
     *       message.commit();
     *       print("Message processed and committed successfully");
     *     } else {
     *       print("Message processing failed, not committing");
     *     }
     *   } catch (error) {
     *     print("Error processing message:", error);
     *     // In case of an error, you might choose not to commit
     *     // so that the message can be reprocessed
     *   }
     * }
     *
     * function processMessage(msg) {
     *   // Implement your message processing logic here
     *   // Return an object indicating success or failure
     * }
     * ```
     */
    commit(): Message {
        return this;
    }

    /**
     * Checks if a known data structure is recognized within a given {@link Message}.
     * Data structures are spawned into existence by the definition of data formats (Format Assets).
     * You can test a particular {@link Message} on whether a specific structure is present within
     * a message by using this method.
     *
     * This is typically used to check whether a message is of a certain type, or not.
     *
     * @example
     * ```js
     * // Get the access path to a structure within the compiled data dictionary
     * const MY_RECORD_TYPE = dataDictionary.type.MyFormat.Detail;
     *
     * // Test message against the existence of the data dictionary structure.
     * if (message.exists(MY_RECORD_TYPE)) {
     *     ...
     * }
     * ```
     *
     * @param {DataDictionaryEntity} type - Path to data dictionary structure which you want to test for existence in the message ({@link DataDictionaryEntity}.)
     * @return {boolean} True, if it exists, else false.
     */
    exists(type: DataDictionaryEntity): boolean {
        return;
    }

    /**
     * Finds and returns an array of status entries attached to the message based on the provided filter.
     *
     * This method allows you to search for status entries using three different approaches:
     * 1. By Vendor: Find all statuses from a specific vendor.
     * 2. By Severity: Find all statuses of a specific severity level.
     * 3. By Custom Function: Use a custom filter function to find statuses based on any criteria.
     *
     * @param {(Vendor | Severity | function(Status): boolean)} value - The filter to apply:
     *   - If a {@link Vendor} is provided, it returns all statuses from that vendor.
     *   - If a {@link Severity} is provided, it returns all statuses of that severity level.
     *   - If a function is provided, it should take a {@link Status} as input and return a boolean.
     *     The method will return all statuses for which this function returns `true`.
     *
     * @returns {Status[]} An array of Status objects that match the provided filter.
     *                     Returns an empty array if no matching statuses are found.
     *
     * @example
     * // Finding statuses by Vendor
     * const VENDOR = Status.getVendorByName('MyVendorName');
     * const vendorStatuses = message.findStatus(VENDOR);
     * vendorStatuses.forEach(status => {
     *     print(`Found status: ${status.code} - ${status.message}`);
     * });
     *
     * @example
     * // Finding statuses by Severity
     * const errorStatuses = message.findStatus(Severity.ERROR);
     * if (errorStatuses.length > 0) {
     *     print(`Message has ${errorStatuses.length} error statuses`);
     * }
     *
     * @example
     * // Finding statuses using a custom filter function
     * function hasSpecificCode(status) {
     *     return status.code === "SPECIFIC_CODE";
     * }
     * const specificStatuses = message.findStatus(hasSpecificCode);
     * specificStatuses.forEach(status => {
     *     print(`Found status with specific code: ${status.message}`);
     * });
     *
     * @example
     * // Using an arrow function for filtering
     * const highPriorityStatuses = message.findStatus(s => [Severity.WARNING, Severity.ERROR].includes(s.severity));
     * highPriorityStatuses.forEach(status => {
     *     print(`High priority status: ${status.severity} - ${status.message}`);
     * });
     */
    findStatus(value: Vendor | Severity | ((status: Status) => boolean)): Status[] { return }


    /**
     * Return a BigInteger typed value from a message field.
     * Important!: Please note that this method returns a Java object "Big Integer" (a Java native data type).
     * Because of this you cannot reliably use simple Javascript number operators without risking implicit conversion errors.
     *
     *
     * @example
     * ```js
     * const n = message.getBigInteger(dataDictionary.type.Detail.CSV.A_REALLY_BIG_NUMBER_FIELD);
     *
     * // Compare BigInteger to another BigInteger
     * const BigInteger = Java.type("java.math.BigInteger");
     * x = new BigInteger(123); // x now a java type BigInteger
     *
     * x == 123; // -> "true", via implicit conversion --> be careful here, because x will be implicitly be converted to JS number and may lose precision
     * x.equals(123); // -> "false", because comparing different data types (BigInteger / Number)
     * x.equals(new BigInteger(123)); // -> "true"
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {BigInteger} Number in Java native BigInteger type.
     */
    getBigInteger(entity: DataDictionaryEntity): BigInteger {
        return
    }


    /**
     * Retrieves a Boolean value from a specific field in the message's data dictionary.
     *
     * This method accesses a boolean value from the message using the provided data dictionary entity.
     *
     * @param {DataDictionaryEntity} entity - The data dictionary entity that specifies the path to the boolean value in the message.
     *
     * @returns {boolean} The boolean value from the specified field in the message.
     *
     * @example
     * // Assuming we have a data dictionary entity for an "isActive" field
     * const isActiveEntity = dataDictionary.type.MyFormat.Detail.IS_ACTIVE;
     *
     * // Get the boolean value, defaulting to false if not found
     * const isActive = message.getBoolean(isActiveEntity);
     *
     * if (isActive) {
     *     print("The item is active");
     * } else {
     *     print("The item is not active");
     * }
     *
     */
    getBoolean(entity: DataDictionaryEntity): boolean { return }

    /**
     * Return the Byte typed value from a message field.
     * Important!: Please note that this method returns a Java object "Byte" (a Java native data type).
     *
     * @example
     * ```js
     * const b = message.getByte(dataDictionary.type.Detail.CSV.A_BYTE_FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {JavaType.Byte} Java native Byte type.
     */
    getByte(entity: DataDictionaryEntity): JavaType.Byte {
        return
    }

    /**
     * Return the ByteString typed value from a message field.
     * Important!: Please note that this method returns a "ByteString" typed value (a Java native data type).
     *
     * @example
     * ```js
     * const b = message.getByteString(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {JavaType.ByteString} ByteString type.
     */
    getByteString(entity: DataDictionaryEntity): JavaType.ByteString {
        return
    }

    /**
     * Creates a CRC 64 checksum from specified node within a {@link Message}.
     *
     * @example
     * ```js
     * const crc64 = message.getCrc64(message.data.CSV);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} for which to create the CRC64 checksum.
     * @return {string} CRC 64 checksum
     */
    getCrc64(entity: DataDictionaryEntity): string {
        return;
    }

    /**
     * Returns a calculated digest for a given message
     * @example
     * ```js
     *
     * // Option: 1. Return digest considering complete message content.
     * // Digest calculation defaults to MD5 hash and no lower case.
     * const md5DigestFull = message.getMessageDigest();
     *
     * // Option: 2. Return digest for full message content based on MD5 hash.
     * // Returned digest will be lower case only.
     * const md5DigestFullLower = message.getMessageDigest("MD5", true);
     *
     * // Option: 3. Calculate digest considering specific data structures within message only.
     * recordAccessorForMD5 = [
     *     dataDictionary.type.Detail.CSV.RECORD_TYPE,
     *     dataDictionary.type.Detail.CSV.LAST_NAME,
     *     dataDictionary.type.Detail.CSV.FIRST_NAME
     * ]
     *
     * const md5Digest = message.getMessageDigest("MD5", true, recordAccessorForMD5);
     * ```
     *
     * @param {"MD5"} [algorithm] - Algorithm with which to calculate the digest. Currently only supprts "MD5".
     * @param {boolean} [toLowerCase=false] - Set to true if digest should be lower-case only.
     * @param {DataDictionaryEntity[]} [accessorArray] - Array of {@link DataDictionaryEntity} on which to calculate the digest.
     */
    getMessageDigest(algorithm: string, toLowerCase: boolean = false, [accessorArray]: DataDictionaryEntity[]): string {
        return;
    }

    /**
     * Retrieves a Status by index from the list of States attached to a message.
     * A message keeps track of related States in a Status array attached to it.
     * This list may be empty or filled with one more States.
     *
     * @example
     * ```js
     * // Retrieve the first Status from the list of States attached to the message.
     * const status = message.getStatus(0);
     * ```
     *
     *
     * @param {number} index - Index of Status to retrieve.
     * @return {Status | undefined} - Status or undefined if no Status found with that index.
     */
    getStatus(index: number): Status {
        return;
    }


    /**
     * Return a Character typed value from a message field.
     * Important!: Please note that this method returns a "char" typed value (a Java native data type).
     *
     * @example
     * ```js
     * const c = message.getCharacter(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {JavaType.Character} Character in Java native char type.
     */
    getCharacter(entity: DataDictionaryEntity): JavaType.Character {
        return
    }

    /**
     * Return a LocalDate typed value from a message field.
     * Important!: Please note that this method returns a "[LocalDate](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html)" typed value (a Java native data type).
     * LocalDate is a date without a time-zone in the ISO-8601 calendar system, such as "2022-12-03".
     * This method is useful when you need to extract a date from a message field.
     * If you need to extract a date-time with an offset from UTC/Greenwich, use the {@link getDateTime} method instead.
     * @example
     * ```js
     * const dt = message.getDate(dataDictionary.type.Detail.CSV.A_DATE_FIELD);
     * ```
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {LocalDate} A date without a time-zone in the ISO-8601 calendar system, such as "2022-12-03".
     *
     */
    getDate(entity: DataDictionaryEntity): LocalDate {
        return
    }


    /**
     * Return a [DateTime](DateTime.md) typed value from a message field.
     *
     * @example
     * ```js
     * const dt = message.getDateTime(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {DateTime} A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as "2022-12-03T10:15:30+01:00".
     */
    getDateTime(entity: DataDictionaryEntity): DateTime {
        return
    }


    /**
     * Return a BigDecimal typed value from a message field.
     * Important!: Please note that this method returns a "BigDecimal" typed value (a Java native data type).
     *
     * @example
     * ```js
     * const dec = message.getDecimal(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {JavaType.BigDecimal} BigDecimal in Java native char type.
     */
    getDecimal(entity: DataDictionaryEntity):JavaType.BigDecimal {
        return
    }


    /**
     * Return a Double typed value from a message field.
     * Important!: Please note that this method returns a "Double" typed value (a Java native data type).
     *
     * @example
     * ```js
     * const dbl = message.getDouble(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {JavaType.Double} Double in Java native char type.
     */
    getDouble(entity: DataDictionaryEntity): JavaType.Double {
        return
    }

    /**
     * Return a Int typed value from a message field.
     * Important!: Please note that this method returns a "Integer" typed value (a Java native data type).
     *
     * @example
     * ```js
     * const int = message.getInt(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {JavaType.Integer} Integer in Java native char type.
     */
    getInt(entity: DataDictionaryEntity): JavaType.Integer {
        return
    }

    /**
     * Return a Long typed value from a message field.
     * Important!: Please note that this method returns a "Long" typed value (a Java native data type).
     *
     * @example
     * ```js
     * const l = message.getLong(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {JavaType.Long} Long in Java native char type.
     */
    getLong(entity: DataDictionaryEntity): JavaType.Long {
        return
    }

    /**
     * Return a Object value a message field.
     *
     * @example
     * ```js
     * const o = message.getObject(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {Object} Object in Java native char type.
     */
    getObject(entity: DataDictionaryEntity): Object {
        return;
    }


    /**
     * Return a String typed value from a message field.
     *
     * @example
     * ```js
     * const l = message.getLong(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @return {string} The value as string.
     */
    getString(entity: DataDictionaryEntity): String {
        return;
    }

    /**
     * Checks if a message has a {@link Status} attached which matches a particular Severity.
     *
     * ```js
     * const result = message.hasStatusAttached(Severity.ERROR);
     * ```
     *
     * @param {Severity} severity - Severity to check against.
     * @return {boolean} - True, if match found, else false.
     */
    hasStatusAttached(severity: Severity) {
        return;
    }


    /**
     * Gets the number of States {@link Status} attached.
     * Same as {@link numStatusAttached}.
     *
     * ```js
     * const result = message.getNumStatusAttached();
     * ```
     *
     * @return {number} - Number of States attached to the message.
     */
    getNumStatusAttached() {
        return;
    }

    /**
     * Checks if a message is of a certain type.
     * This is typically used to check whether a message is of a certain type, or not.
     * @example
     * ```js
     * // Check if message is of a certain type
     * if (message.is(dataDictionary.type.Detail.CSV)) {
     *    ...
     *    // Do something
     *    ...
     *    }
     *    ```
     *
     * @param type
     */
    is(type: DataDictionaryEntity): boolean {
        return
    }


    /**
     * Packs the message into a memory efficient format.
     *
     * ```js
     * // Pack message
     * const packedMsg = message.pack();
     *
     * // Unpack message
     * const unpackedMsg = packedMsg.unpack();
     * ```
     *
     * @return {PackedMessage} - Packed message.
     */
    pack() : PackedMessage {
        return;
    }

    /**
     * Sets a BigInteger value in a message target field.
     *
     * ```js
     * const BigInteger = Java.type("java.math.BigInteger");
     * bigInt = new BigInteger(123); // x now a java type BigInteger
     *
     * message.setBigInteger(dataDictionary.type.Detail.CSV.FIELD, bigInt)
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {BigInteger} value - A native BigInteger value or a value which can be implicitly converted to such.
     * */
    setBigInteger(entity: DataDictionaryEntity, value: BigInteger): void {
    }


    /**
     * Sets a Boolean value in a message target field.
     *
     * ```js
     * message.setBoolean(dataDictionary.type.Detail.CSV.FIELD, true)
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {Byte} value - A native Byte value or a value which can be implicitly converted to such.
     * */
    setBoolean(entity: DataDictionaryEntity, value: Boolean): void {
    }


    /**
     * Sets a Byte value in a message target field.
     *
     * ```js
     * const Byte = Java.type("java.math.Byte");
     * b = new Byte(123); // b now a java type Byte
     *
     * message.setByte(dataDictionary.type.Detail.CSV.FIELD, b)
     * // or
     * message.setByte(dataDictionary.type.Detail.CSV.FIELD, 7)
     * // or
     * message.setByte(dataDictionary.type.Detail.CSV.FIELD, 'X')
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {number|string} value - A native Byte value or a value which can be implicitly converted to such.
     * */
    setByte(entity: DataDictionaryEntity, value: number | string): void {
    }


    /**
     * Sets a ByteString value in a message target field.
     *
     * ```js
     * const ByteString = Java.type("java.math.ByteString");
     * b = new ByteString("XYZ"); // b now a java type ByteString
     *
     * message.setByteString(dataDictionary.type.Detail.CSV.FIELD, b)
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {ByteString} value - A native ByteString value or a value which can be implicitly converted to such.
     * */
    setByteString(entity: DataDictionaryEntity, value: string): void {
    }


    /**
     * Sets a Character value in a message target field.
     *
     * ```js
     * message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, 'c')
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {JavaType.Character} value - A native Character value or a value which can be implicitly converted to such.
     * */
    setCharacter(entity: DataDictionaryEntity, value: JavaType.Character): void {
    }


    /**
     * Sets a DateTime value in a message target field.
     *
     * ```js
     * message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, "2022-12-03T10:15:30+01:00")
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {DateTime} value - A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as "2022-12-03T10:15:30+01:00".
     * */
    setDateTime(entity: DataDictionaryEntity, value: DateTime): void {
    }


    /**
     * Sets a Decimal value in a message target field.
     * Internally represented as a Java BigDecimal.
     * Will try to infer result from passed value.
     *
     * ```js
     * message.setDecimal(dataDictionary.type.Detail.CSV.FIELD, 123.45)
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number} value - A value which can be represented as a Decimal.
     * */
    setDecimal(entity: DataDictionaryEntity, value: JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number): void {
    }


    /**
     * Sets a Double value in a message target field.
     * Internally represented as a Java Double.
     * Will try to infer result from passed value.
     *
     * ```js
     * message.setDouble(dataDictionary.type.Detail.CSV.FIELD, 123.45)
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number} value - A value which can be represented as a Double.
     * */
    setDouble(entity: DataDictionaryEntity, value: JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | Number): void {
    }


    /**
     * Sets a Int value in a message target field.
     * Internally represented as a Java Int.
     * Will try to infer result from passed value.
     *
     * ```js
     * message.setInt(dataDictionary.type.Detail.CSV.FIELD, 123)
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {JavaType.String | JavaType.Integer | JavaType.Long | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number} value - A value which can be represented as a Int.
     * */
    setInt(entity: DataDictionaryEntity, value: JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | BigInteger | Number): void {
    }


    /**
     * Sets a Long value in a message target field.
     * Internally represented as a Java Long.
     * Will try to infer result from passed value.
     *
     * ```js
     * message.setLong(dataDictionary.type.Detail.CSV.FIELD, 12345)
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number} value - A value which can be represented as a Long.
     * */
    setLong(entity: DataDictionaryEntity, value: JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number): void {
    }


    /**
     * Sets a Object value in a message target field.
     *
     * ```js
     * const obj = [1, 2, 3, 4, 5];
     * message.setObject(dataDictionary.type.Detail.CSV.FIELD, obj)
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {Object} value - A value which can be represented as a Object.
     * */
    setObject(entity: DataDictionaryEntity, value: Object): void {
    }


    /**
     * Sets a Object value in a message target field.
     *
     * ```js
     * message.setString(dataDictionary.type.Detail.CSV.FIELD, "XYZ")
     * // or simply
     * message.data.CSV.FIELD = "XYZ"
     * ```
     *
     * @param {DataDictionaryEntity} entity - {@link DataDictionaryEntity} describing the access path to the field value.
     * @param {String} value - A value which can be represented as a String.
     * */
    setString(entity: DataDictionaryEntity, value: Object): void {
    }

    /**
     * Returns the message in a JSON representation.
     * @example
     * ```js
     * const json = message.toJson();
     * ```
     */
    toJson(): string {
        return;
    }


    /**
     * Returns the message in a string representation.
     *
     * @example
     * ```js
     * stream.logInfo("Current message: " + message.toString());
     * ```
     *
     * */
    toString(): void {
    }


}


export default Message;
