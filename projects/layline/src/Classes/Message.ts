import Status from "./Status";
import Severity from "../Enums/Severity";
import JavaType from "../Enums/JavaType";
import EntityDeclaration from "./EntityDeclaration";
import MessageNode from "./MessageNode";
import PackedMessage from "./PackedMessage";

/**
 *
 * Events traversing layline.io Workflows are instantiated as a {@link Message}.
 * This class exposes a number of properties and methods to extract and set data within messages.
 *
 * To understand the anatomy of a message please read the respective [chapter in the documentation](/docs/concept/data-dictionary).
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
 * onMessage(message) {
 *     if (message.type.Header) {
 *         onHeader (message);
 *     } else if (message.type.Detail) {
 *         onDetail(message);
 *     } else if (message.type.Trailer) {
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
 * onDetail (message) {
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
 * ## Definition
 *
 *
 * @property {Object} data
 * @property {Object} type
 *
 */
class Message {
    /**
     *
     */
    data: object;

    /** @hidden **/
    constructor() {
    }


    /**
     * Adds a {@link Status} to a message.
     * The {@link Status} must have been created with [Status.create](Status#Status.create) or otherwise instantiated.
     *
     * Example:
     * ```js
     *  if (error) {
     *      message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', valueString));
     *  }
     * ```
     *
     * @param {Severity} severity [Severity](../enums/Severity) value.
     * @param {Status} status The {@link Status} which should be added.
     * @param {boolean} [addToLog=true] Signals whether the {@link Status} shall also be added to the log, or not. Will be added by default if not specified.
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
     * Checks if a known data structure is recognized within a given {@link Message}.
     * Data structures are spawned into existence by the definition of data formats (Format Assets).
     * You can test a particular {@link Message} on whether a specific structure is present within
     * a message by using this method.
     *
     * This is typically used to check whether a meessage is of a certain type, or not.
     *
     * Example:
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
     * @param {EntityDeclaration} - The Path to data dictionary structure which you want to test for existence in the message ({@link EntityDeclaration}.)
     * @return {boolean} True, if it exists, else false.
     */
    exists(entityDeclaration: EntityDeclaration): boolean {
        return;
    }

    /**
     * Check whether a message carries a specified status.
     * ```js
     * const VENDOR = Status.getVendorByName('MyVendorLongName');
     *
     * const foundStatusArray = detail.findStatus(function(status) { ",
     *      // Code 9 means 'DISCARD'",
     *      return status.vendorId === VENDOR.id && status.code === 9; ",
     *  });",
     * ```
     *
     * @return {Status[]} - Array of found States. Empty array if nothing found.
     * @param callback
     */
    findStatus(callback: Function): Status {
        return;
    }


    /**
     * Creates a CRC 64 checksum from specified node within a {@link Message}.
     *
     * Example:
     * ```js
     * const crc64 = message.getCrc64(message.data.CSV);
     * ```
     *
     * @param {MessageNode} message - {@link MessageNode} for which to create the CRC64 checksum.
     * @return {string} CRC 64 checksum
     */
    getCrc64(message: MessageNode): string {
        return;
    }

    /**
     * Returns a calculated digest for a given message
     * Example:
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
     * @param {EntityDeclaration[]} [accessorArray] - Array of {@link EntityDeclaration} on which to calculate the digest.
     */
    getMessageDigest(algorithm: string, toLowerCase: boolean = false, [accessorArray]: EntityDeclaration[]): string {
        return;
    }

    /**
     * Retrieves a Status by index from the list of States attached to a message.
     * A message keeps track of related States in a Status array attached to it.
     * This list may be empty or filled with one more States.
     *
     * Example:
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
     * Return a BigInteger typed value from a message field.
     * Important!: Please note that this method returns a Java object "Big Integer" (a Java native data type).
     * Because of this you cannot reliably use simple Javascript number operators without risking implicit conversion errors.
     *
     *
     * Example:
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
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {BigInteger} Number in Java native BigInteger type.
     */
    getBigInteger(accessor: EntityDeclaration): BigInteger {
        return
    }


    /**
     * Return the Boolean typed value from a message field.
     * Important!: Please note that this method returns a Java object "Boolean" (a Java native data type).
     *
     * Example:
     * ```js
     * const b = message.getBoolean(dataDictionary.type.Detail.CSV.A_BOOLEAN_FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {Boolean} [defaultValue] - Default value if no Boolean value could be retrieved from message.
     * @return {Boolean} Number in Java native Boolean type.
     */
    getBoolean(accessor: EntityDeclaration): Boolean {
        return
    }


    /**
     * Return the Byte typed value from a message field.
     * Important!: Please note that this method returns a Java object "Byte" (a Java native data type).
     *
     * Example:
     * ```js
     * const b = message.getByte(dataDictionary.type.Detail.CSV.A_BYTE_FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {JavaType.Byte} Java native Byte type.
     */
    getByte(accessor: EntityDeclaration): JavaType.Byte {
        return
    }


    /**
     * Return the ByteString typed value from a message field.
     * Important!: Please note that this method returns a "ByteString" typed value (a Java native data type).
     *
     * Example:
     * ```js
     * const b = message.getByteString(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {JavaType.ByteString} ByteString type.
     */
    getByteString(accessor: EntityDeclaration): JavaType.ByteString {
        return
    }


    /**
     * Return a Character typed value from a message field.
     * Important!: Please note that this method returns a "char" typed value (a Java native data type).
     *
     * Example:
     * ```js
     * const c = message.getCharacter(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {JavaType.Character} Character in Java native char type.
     */
    getCharacter(accessor: EntityDeclaration): JavaType.Character {
        return
    }


    /**
     * Return a OffsetDateTime typed value from a message field.
     * Important!: Please note that this method returns a "[OffsetDateTime](https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html)" typed value (a Java native data type).
     *
     * Example:
     * ```js
     * const dt = message.getDateTime(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {JavaType.OffsetDateTime} A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as "2022-12-03T10:15:30+01:00".
     */
    getDateTime(accessor: EntityDeclaration): JavaType.OffsetDateTime {
        return
    }


    /**
     * Return a BigDecimal typed value from a message field.
     * Important!: Please note that this method returns a "BigDecimal" typed value (a Java native data type).
     *
     * Example:
     * ```js
     * const dec = message.getDecimal(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {JavaType.BigDecimal} BigDecimal in Java native char type.
     */
    getDecimal(accessor: EntityDeclaration):JavaType.BigDecimal {
        return
    }


    /**
     * Return a Double typed value from a message field.
     * Important!: Please note that this method returns a "Double" typed value (a Java native data type).
     *
     * Example:
     * ```js
     * const dbl = message.getDouble(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {JavaType.Double} Double in Java native char type.
     */
    getDouble(accessor: EntityDeclaration): JavaType.Double {
        return
    }

    /**
     * Return a Int typed value from a message field.
     * Important!: Please note that this method returns a "Integer" typed value (a Java native data type).
     *
     * Example:
     * ```js
     * const int = message.getInt(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {JavaType.Integer} Integer in Java native char type.
     */
    getInt(accessor: EntityDeclaration): JavaType.Integer {
        return
    }

    /**
     * Return a Long typed value from a message field.
     * Important!: Please note that this method returns a "Long" typed value (a Java native data type).
     *
     * Example:
     * ```js
     * const l = message.getLong(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {JavaType.Long} Long in Java native char type.
     */
    getLong(accessor: EntityDeclaration): JavaType.Long {
        return
    }

    /**
     * Return a Object value a message field.
     *
     * Example:
     * ```js
     * const o = message.getObject(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {Object} Object in Java native char type.
     */
    getObject(accessor: EntityDeclaration): Object {
        return;
    }


    /**
     * Return a String typed value from a message field.
     *
     * Example:
     * ```js
     * const l = message.getLong(dataDictionary.type.Detail.CSV.FIELD);
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @return {string} The value as string.
     */
    getString(accessor: EntityDeclaration): String {
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
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {BigInteger} value - A native BigInteger value or a value which can be implicitly converted to such.
     * */
    setBigInteger(accessor: EntityDeclaration, value: BigInteger): void {
    }


    /**
     * Sets a Boolean value in a message target field.
     *
     * ```js
     * message.setBoolean(dataDictionary.type.Detail.CSV.FIELD, true)
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {Byte} value - A native Byte value or a value which can be implicitly converted to such.
     * */
    setBoolean(accessor: EntityDeclaration, value: Boolean): void {
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
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {number|string} value - A native Byte value or a value which can be implicitly converted to such.
     * */
    setByte(accessor: EntityDeclaration, value: number | string): void {
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
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {ByteString} value - A native ByteString value or a value which can be implicitly converted to such.
     * */
    setByteString(accessor: EntityDeclaration, value: string): void {
    }


    /**
     * Sets a Character value in a message target field.
     *
     * ```js
     * message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, 'c')
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {JavaType.Character} value - A native Character value or a value which can be implicitly converted to such.
     * */
    setCharacter(accessor: EntityDeclaration, value: JavaType.Character): void {
    }


    /**
     * Sets a OffsetDateTime value in a message target field.
     *
     * ```js
     * message.setCharacter(dataDictionary.type.Detail.CSV.FIELD, "2022-12-03T10:15:30+01:00")
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {JavaType.OffsetDateTime} value - A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as "2022-12-03T10:15:30+01:00".
     * */
    setDateTime(accessor: EntityDeclaration, value: JavaType.OffsetDateTime): void {
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
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number} value - A value which can be represented as a Decimal.
     * */
    setDecimal(accessor: EntityDeclaration, value: JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number): void {
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
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number} value - A value which can be represented as a Double.
     * */
    setDouble(accessor: EntityDeclaration, value: JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | Number): void {
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
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {JavaType.String | JavaType.Integer | JavaType.Long | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number} value - A value which can be represented as a Int.
     * */
    setInt(accessor: EntityDeclaration, value: JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | BigInteger | Number): void {
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
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number} value - A value which can be represented as a Long.
     * */
    setLong(accessor: EntityDeclaration, value: JavaType.String | JavaType.Integer | JavaType.Long | JavaType.Double | JavaType.BigDecimal | JavaType.BigInteger | JavaType.Number): void {
    }


    /**
     * Sets a Object value in a message target field.
     *
     * ```js
     * const obj = [1, 2, 3, 4, 5];
     * message.setObject(dataDictionary.type.Detail.CSV.FIELD, obj)
     * ```
     *
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {Object} value - A value which can be represented as a Object.
     * */
    setObject(accessor: EntityDeclaration, value: Object): void {
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
     * @param {EntityDeclaration} accessor - {@link EntityDeclaration} describing the access path to the field value.
     * @param {String} value - A value which can be represented as a String.
     * */
    setString(accessor: EntityDeclaration, value: Object): void {
    }


    /**
     * Returns the message in a string representation.
     *
     * Example:
     * ```js
     * stream.logInfo("Current message: " + message.toString());
     * ```
     *
     * */
    toString(): void {
    }


}


export default Message;
