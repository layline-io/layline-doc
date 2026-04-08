# EmailMessage

Interface representing an email message structure.
Used in the [`Email.Send()`](../classes/Email.md#send) method.

## Properties

### Bcc

> **Bcc**: `object`[]

Array of BCC recipient information with address and personal name.

#### Address

> **Address**: `string`

#### PersonalName

> **PersonalName**: `string`

***

### BccList

> **BccList**: `string`

Comma or semicolon separated list of BCC recipient email addresses.

***

### Body

> **Body**: `string`

The body content of the email.

***

### Cc

> **Cc**: `object`[]

Array of CC recipient information with address and personal name.

#### Address

> **Address**: `string`

#### PersonalName

> **PersonalName**: `string`

***

### CcList

> **CcList**: `string`

Comma or semicolon separated list of CC recipient email addresses.

***

### From

> **From**: `object`[]

Array of sender information with address and personal name.

#### Address

> **Address**: `string`

#### PersonalName

> **PersonalName**: `string`

***

### Subject

> **Subject**: `string`

The subject line of the email.

***

### To

> **To**: `object`[]

Array of recipient information with address and personal name.

#### Address

> **Address**: `string`

#### PersonalName

> **PersonalName**: `string`

***

### ToList

> **ToList**: `string`

Comma or semicolon separated list of recipient email addresses.
