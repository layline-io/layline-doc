import Message from "./Message";

/**
 * Abstract class which defines a Service Connection.
 * This connection must have been acquired via using the `services` keyword within a Javascript Asset script.
 *
 * **NOTE:** Not all services provide a connection.
 * Please refer to the documentation of the respective Service Asset to understand how to use it within Javascript.
 *
 *  **Opening a connection:**
 *  To open a connection, use the respective method of the Service.
 *
 *  Example: Assume we have a JDBC Service `MyDBService`, we can then open a connection using the Service's `openConnection()`method:
 * ```js
 *
 * let OUTPUT_PORT = null;
 * let connection = null;
 *
 * // Initial setup
 * export function onInit() {
 *     OUTPUT_PORT = processor.getOutputPort('MyOutput');
 * }
 *
 * export function onStreamStart() {
 *     if (!connection) {
 *        // Open a connection to the DB service. Note the use of "services" below:
 *         connection = services.MyDBService.openConnection();
 *     }
 *     connection.beginTransaction();
 * }
 * ```
 */
class Connection {

    /** @hidden **/
    constructor() {
    }

    /**
     * Starts a new transaction, if the Service supports transactions (e.g. the JDBC Service).
     *
     * ```js
     *  if (connection) {
     *      connection.beginTransaction();
     *  }
     * ```
     *
     * @return {void} Nothing
     */
    beginTransaction() : void {
    }


    /**
     * Closes an open connection
     *
     * ```js
     * if (connection) {
     *     connection.closeConnection();
     * }
     * ```
     *
     * @return {void} Nothing
     */
    closeConnection() : void {
    }


    /**
     * Commits a transaction, in case the underlying Service supports transactions (e.g. JDBC Service).
     *
     * ```js
     * if (connection) {
     *     connection.commitTransaction();
     * }
     * ```
     *
     * @return {void} Nothing
     */
    commitTransaction() : void {
    }


    /**
     * When defining a Service which supports connections, you normally also define one or more **functions** to perform actions.
     * With a JDBC Service this could be functions like `INSERT`, `UPDATE`, `SELECT`, and so on.
     * In the process you will also have defined a name for each function, e.g. `MyInsert`.
     *
     * #### Invocation
     *
     * Let's assume you have defined a function named `MyInsert` which inserts a record into a database.
     * `MyInsert` expects three parameters `DeviceID`, `Measurement`, and `Timestamp`.
     * All of these functions expect a {@link Message} as input. The message must contain the expected parameters.
     * You can pass this in either
     * * As an already existing message
     * * A message which you created using [datadictionary.createMessage](./DataDictionary#createmessage)
     * * A JSON object in the expected format (see example below). This will then be implicitly converted to a message format.
     *
     * Example:
     * ```js
     * // Record insert
     * export function onMessage() {
     *     // Insert record to the DB using function "MyInsert"
     *     // Please note that we pass a JSON object here, which will be automatically
     *     // converted to a {@link Message} to match the expected parameter
     *     const insertResult = connection.MyInsert(
     *         {
     *             DeviceID: message.data.IOT.DEVICE_ID,
     *             Measurement: message.data.IOT.MEASUREMENT,
     *             Timestamp: message.data.IOT.TIMESTAMP
     *         }
     *     )
     * }
     *
     * ```
     *
     * **FUNCTION_NAME** therefore is a placeholder for the actual function name which you have assigned to the Insert statement in our example.
     *
     * #### Result handling
     *
     * A call to the Service always returns a {@link Message} as well.
     *
     * The structure of the result Message depends on the Service function we invoked.
     *
     * Let's assume we have a function to select all customer data by last name and zip code from a database.
     * The function's name shall be `SelectCustomersByNameAndZip`.
     * It receives two arguments `ZipCode` and `LastName` and returns an array which includes the former two parameters as well as `FirstName`.
     * For the purpose of demonstration we simply output the result to the stream log. Normally you would use the data for your further processing requirements.
     *
     * Example:
     * ```js
     * export function onMessage() {
     *     let resultMessage = null;
     *     let firstName = null;
     *     let lastName = null;
     *
     *     if (connection) {
     *         // Selecting all customers with the same zip code and last name
     *         resultMessage = connection.SelectCustomersByNameAndZip(
     *             {
     *                 ZipCode: message.data.CUSTOMER.ZIP_CODE,
     *                 LastName: message.data.CUSTOMER.LAST_NAME
     *             }
     *         );
     *     }
     *
     *     // Because we know that we invoked a function from a JDBC Service, we also know that the
     *     // result data is in the form of an array. This depends on the type of Service involved.
     *     // We cycle through result set and output to stream log.
     *     // NOTE the use of record.data to access the result.
     *     resultMessage.data.forEach(function(record) {
     *         stream.logInfo("Full Name: ", record.FirstName, " ", record.LastName, ", Zip: ", record.ZipCode);
     *     });
     *
     *     // Access the third element in the result set:
     *     if (record.data.length > 2) {
     *          const thirdRecord = record.data[2];
     *     }
     * }
     * ```
     *
     * @param {Message} message - You pass a {@link Message} in which contains the necessary parameters for the function to execute.
     * @return {Message} The returned result is also in the form of a {@link Message}. Access the data through `result.data`.
     */
    FUNCTION_NAME(message: Message) : Message {
        return;
    }

    /**
     * Rolls a transaction back, in case the Service connection supports transactions.
     *
     * ```js
     *  if (connection) {
     *      connection.rollbackTransaction();
     *  }
     * ```
     *
     * @return {void} Nothing
     */
    rollbackTransaction() : void {
    }
}

export default Connection;
