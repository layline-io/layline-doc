/**
 * Interface representing an email message structure.
 * Used in the [`Email.Send()`](../classes/Email.md#send) method.
 */
export default interface EmailMessage {
    /**
     * Array of sender information with address and personal name.
     */
    From: {
        Address: string;
        PersonalName: string;
    }[];
    /**
     * Array of recipient information with address and personal name.
     */
    To: {
        Address: string;
        PersonalName: string;
    }[];
    /**
     * Comma or semicolon separated list of recipient email addresses.
     */
    ToList: string;
    /**
     * Array of CC recipient information with address and personal name.
     */
    Cc: {
        Address: string;
        PersonalName: string;
    }[];
    /**
     * Comma or semicolon separated list of CC recipient email addresses.
     */
    CcList: string;
    /**
     * Array of BCC recipient information with address and personal name.
     */
    Bcc: {
        Address: string;
        PersonalName: string;
    }[];
    /**
     * Comma or semicolon separated list of BCC recipient email addresses.
     */
    BccList: string;
    /**
     * The subject line of the email.
     */
    Subject: string;
    /**
     * The body content of the email.
     */
    Body: string;
}