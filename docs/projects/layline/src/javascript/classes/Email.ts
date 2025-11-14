import EmailMessage from "../interfaces/EmailMessage";

/**
 * Abstract class which defines a Email Service.
 * This service must have been acquired via using the `services` keyword within a Javascript Asset script.
 *
 * **NOTE:** Only the Email Service is supports this class.
 * Please refer to the documentation of the respective Service Asset to understand how to use it within Javascript.
 *
 *
 * @class
 */
class Email {

    /** @hidden **/
    constructor() {
    }

    /**
     * Sends an email.
     *
     * ```js
     * // EmailService is the name which was assigned to the Email Service Asset in the Javascript Asset Configuration.
     * 
     * // Example #1:
     *  services.EmailService.Send({
     *      from: {
     *          Address: "john.doe@example.com",
     *          PersonalName: "John Doe"
     *      },
     *      to: [{
     *          Address: "jane.doe@example.com",
     *          PersonalName: "Jane Doe"
     *      }],
     *      cc: [{
     *          Address: "cc@example.com",
     *          PersonalName: "CC"
     *      }],
     *      subject: "Hello",
     *      body: "Hello, world!"
     *  });
     * 
     * // Example #2:
     *  services.EmailService.Send({
     *      from: "john.doe@example.com",
     *      toList: "jane.doe@example.com;kate.doe@example.com",
     *      ccList: "cc@example.com",
     *      bccList: "bcc@example.com",
     *      subject: "Hello",
     *      body: "Hello, world!"
     *  });
     *      }],
     *      subject: "Hello",
     *      body: "Hello, world!"
     *  });
     * ```
     *
     * You can mix the use of `to` and `ccList` for example. Do not use similar properties like `to` and `toList` at the same time, for example, however.
     * 
     * @param {EmailMessage} message - The email message to send.
     * @return {void} Nothing
     */
    Send(message: EmailMessage) : void {
    }


}

export default Email;
