/**
 * Enumeration for use of Severity levels in [Message](../Class/Message)
 *
 * Example use:
 * ```js
 *  if (error) {
 *      message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', valueString));
 *  }
 * ```
 *
 * @enum
 */
enum Severity {
    INFO = 0,
    WARNING = 1,
    ERROR = 2,
    FATAL = 3
}

export default Severity;
