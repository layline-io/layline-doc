---
title: Email Service
description: Email Service Asset. Use this to integrate an Email connection.
tags:
  - email
  - service
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';
import NameAndDescription from '/docs/snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '/docs/snippets/assets/_asset-required-roles.md';
import Testcase from '/docs/snippets/assets/_asset-service-test.md';

# Email Service

## Purpose

Define a service to interface with Email.

![](./.asset-service-email_images/1714402736038.png "Asset Dependency Graph (Service Email)")

## Prerequisites

For this to work, you need a configured [Email Connection](/docs/assets/connections/asset-connection-email).

## Configuration

### Name & Description

![Teams Email NameAndDescription](./.asset-service-email_images/1714390902726.png "Teams Email NameAndDescription")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### Email Service Settings

Configure the parameters for your Email Service:

![Email Service Settings](./.asset-service-email_images/1714394040643.png "Email Service Settings")

#### Connection

![Email Connection drop-down list](./.asset-service-email_images/1714391942849.png "Email Connection drop-down list")

Use the drop-down list to select a [Email Connection](/docs/assets/connections/asset-connection-email) that should
support this Email Service. If it does not exist, you need to create it first.

#### More Settings

The Email Service allows two functions: _**Send**_ and _**SendAndForget**_. 
Regardless of which function is used, the emails always go to into a queue that sends the email 
with a throttle setting defined by _**Max messages per time unit**_. With _**Send**_ you only get a response 
when the email has actually been sent (or in case of an error). With _**SendAndForget**_ you only get an error 
in case the queue reaches the limit defined in _**Send queue size**_. 
An attempt is then made to send the email, but you would no longer get an error.


![Email Service More Settings](./.asset-service-email_images/1714394372242.png "Email Service More Settings")

* **`Send queue size`** : Defines the maximum number of messages waiting to be send out before a further send request leads to a failure.
* **`Max. messages / per`** : defines the throttle setting as explained above.

### Example: Using the Email Service

The Email Service can be used from within a JavaScript Asset. In our example we have a simple Workflow which reads an
input file with some data (1), then in a next step (2) sends a simple message via Email (only on the StreamEnd event), and
simply outputs the incoming data back to an output file again. There is no other purpose in this Workflow than to demonstrate how to use the
Service.

![Example Workflow (Service Email)](./.asset-service-email_images/1714395407068.png "[Example Workflow (Service Email)")


In the middle of the Workflow we find a JavaScript Processor by the name of “_SendEmail_”. This Processor prepares
a message to be send via Email as configured in the Service Email asset.

How is it configured?

#### Link SendEmail Processor to Email Service

To use the Email Service in the JavaScript Processor, we first have to **assign the Service within the JavaScript
Processor** like so:

![Link Service to JavaScript Asset (Service Email)](./.asset-service-email_images/1714399931756.png "Link Service to JavaScript Asset (Service Email)")

* **`Physical Service`** (1): The Email Service which we have configured above.

* **`Logical Service Name`** (2): The name by which we want to use the Service within JavaScript. This could be the
  exact same name as the Service or a name which you can choose. Must not include whitespaces.

#### Access the Service from within JavaScript

Now let’s finally use the service within JavaScript:

##### Preparing Message to be Send via Email

```javascript
const OUTPUT_PORT = processor.getOutputPort('Output-1');

// We are defining a function "sendEmail" that will take emailMessage parameters 
// as input parameters
function sendEmail(emailMessage) {
    services.EmailService.Send({
        From: {
            Address: emailMessage.from
        },
        ToList:     emailMessage.to,
        Subject:    emailMessage.subject,
        Text:       emailMessage.body
    });  
}

/**
 * Handle a message
 */
export function onMessage() {
    stream.emit(message, OUTPUT_PORT);
}

// the onStreamEnd function will send an email about the  
// processing of a file including its name
export function onStreamEnd() {
    // populate the emailMessage structure to hand over input parameters for "sendEmail" function
    let emailMessage = {
        from:       "user@email.com",
        to:         "recipient@email.com",
        subject:    "Processing for Stream " + stream.getName(),
        body:       "The subject mentioned file has been processed"
    }
    // call function "sendEmail"
    sendEmail(email);
}
```

## Service Testing

<Testcase></Testcase>

---

<WipDisclaimer></WipDisclaimer>

