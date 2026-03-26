---
title: Javascript
description: Javascript Asset. Use this to add custom logic to modify event content, filter, route, enrich, etc.
---

import AssetDependency from '../../snippets/assets/_asset-dependency.md';
import FailureHandling from '../../snippets/assets/_failure-handling-flow.mdx';
import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import InputPorts from '../../snippets/assets/_input-ports.md';
import OutputPorts from '../../snippets/assets/_output-ports.md';

# Javascript Flow Processor

## Purpose

![](.asset-flow-javascript_images/f332d000.png "Asset Dependency Graph (Javascript Flow Processor)")

The Javascript Asset allows you to define detailed business logic which you may want to apply to a flow of messages.
Here are some examples:

* Convert message data from one format to another
* Filter information based on specific rules
* Enrich individual data using specific rules and/or external data sources (e.g. reference data)
* Route messages based on your own criteria
* Gather metrics and statistics, and store and forward them to other targets

and basically anything else you can imagine here.

## Prerequisites

You need:

* A Source Script which should be executed within this asset.
* Knowledge on how to work with Javascript in layline.io. Please check
  the [Javascript Language Reference](../../language-reference/javascript/javascript_introduction) to learn about this.

## Configuration

### Name & Description

![Name & Description (Javascript Flow Asset)](.asset-flow-javascript_images/0f67058e.png "Name & Description (Javascript)")

* **`Name`** : Name of the Asset. Spaces are not allowed in the name.

* **`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand
and then click to follow, if any.

### Asset Dependencies

<AssetDependency></AssetDependency>

### Input Ports

<InputPorts></InputPorts>

### Output Ports

<OutputPorts></OutputPorts>

### Root Script

The Javascript Asset obviously needs a Script to be executed. Prior to version 1.0 of layline.io the Script was
configured as part of this Asset. Starting with v1.0 all Scripts are defined in the `Sources` tab of the project (2):

![](.asset-flow-javascript_images/dfe7c5b3.png "Assigned Source Script (Javascript)")

The root script to be executed within this Asset is then selected here:

![](.asset-flow-javascript_images/03da4a4c.png "Root Script (Javascript)")

:::tip Javascript Language Reference
To understand how a Source must be structured to work in a Javascript Asset, please consult
the [Javascript Language Reference](../../language-reference/javascript/javascript_introduction).
:::

### Service Mappings

Javascripts may make use of Services which you may have
configured [here](../services/asset-service-introduction#purpose-of-services). These methods could be database
operations, HTTP-request and whatever else Services do provide.

Let's say your Javascript invokes an HTTP-Service which provides a method to retrieve the current Bitcoin price via a
REST-Api. Let's also assume that the name of the Service to be linked is `BTCService`.

1. Add a Service Mapping by clicking on `Add Service Mapping` (1).
2. Select the Service which you want to map (2).
3. Provide a `Logical Service Name`. This is the name by which the Service is used in the underlying Javascript! If the
   name you enter here, is different to what you are using in your script, the script will not recognize the Service.

![](.asset-flow-javascript_images/1ec904b5.png "Service Mappings (Javascript)")

### Arguments

You can pass arguments to the assigned script. This may be useful when reusing the same script in various different
Javascript Assets and Workflows, but the script should behave slightly different in each of those instances.
Passing arguments from a Javascript Asset to can provide this functionality. Please check the `getArguments()`
method [here](../../language-reference/javascript/API/classes/Processor#getarguments), on how to retrieve arguments in the script.

![](.asset-flow-javascript_images/140789d3.png "Arguments (Javascript)")

In case you are entering arguments (1), the editor will check for valid JSON and outline this in case it is invalid.
You can format the JSON entries with a click on `Format JSON (2)`.

:::warning Invalid JSON
Entering invalid JSON will cause problems when using the Arguments in the underlying script.
:::

### Failure Handling

<FailureHandling></FailureHandling>

## Example

A Workflow reads transaction records from a **File Source**. Each record carries a `transaction_id`, `customer_id`, `amount`, and `currency`. The JavaScript Processor enriches every record by looking up the customer's `name` and `loyalty_tier` from a **Reference Data** dictionary, then passes the enriched record downstream.

```mermaid
graph LR
    A["CSV File<br/>(File Source)"] --> B["EnrichTransaction<br/>(JavaScript Processor)"]
    B --> C["Output<br/>(File Sink)"]
```

**Workflow configuration:**

| Setting | Value |
|---------|-------|
| Root Script | `EnrichTransaction.js` (defined in Sources) |
| Input Port | `Input` (default) |
| Output Port | `Output` (default) |

**Script: `EnrichTransaction.js`**

```javascript
// Variable to hold the output port, initialized in onInit
let OUTPUT_PORT = null;

// Reference to the Reference Data dictionary
const CUSTOMER_DICT = dictionary.getDataDictionary('CustomerReference');

// Initialize output port on startup
export function onInit() {
    OUTPUT_PORT = processor.getOutputPort('Output');
}

// Process each incoming message
export function onMessage() {
    const customerId = message.data.getString('customer_id');
    const amount = message.data.getFloat('amount');
    const currency = message.data.getString('currency');

    // Look up customer data from the Reference Data dictionary
    let customerName = 'Unknown';
    let loyaltyTier = 'STANDARD';

    if (CUSTOMER_DICT.exists(customerId)) {
        const customer = CUSTOMER_DICT.get(customerId);
        customerName = customer.getString('name');
        loyaltyTier = customer.getString('loyalty_tier');
    } else {
        // Log a warning for unrecognised customer IDs
        stream.logWarn('Customer not found in Reference Data: ' + customerId);
    }

    // Write enriched fields back to the outgoing message
    message.data.setString('customer_name', customerName);
    message.data.setString('loyalty_tier', loyaltyTier);

    // Pass the enriched record to the next processor
    stream.emit(message, OUTPUT_PORT);
}
```

**What happens at runtime:**

1. The File Source reads a CSV record and produces a message with fields `transaction_id`, `customer_id`, `amount`, `currency`
2. The JavaScript Processor's `onMessage` hook fires for each message
3. The script extracts `customer_id` and looks it up in the `CustomerReference` Data Dictionary
4. If found, `customer_name` and `loyalty_tier` are written to the message
5. If not found, a warning is logged and default values are used
6. The enriched message is emitted to the `Output` port and continues downstream

**Arguments example:**

To make the same script reusable across different dictionaries, pass the dictionary name as an argument:

```json
[
  \{ "key": "dictionaryName", "value": "CustomerReference" \}
]
```

```javascript
export function onInit() {
    const args = processor.getArguments();
    const dictName = args?.dictionaryName ?? 'CustomerReference';
    CUSTOMER_DICT = dictionary.getDataDictionary(dictName);
    OUTPUT_PORT = processor.getOutputPort('Output');
}
```

## See Also

- [JavaScript Language Reference](../../language-reference/javascript/javascript_introduction) — full JavaScript language guide for layline.io
- [JavaScriptProcessor API](../../language-reference/javascript/02-API/classes/JavaScriptProcessor) — available hooks and lifecycle methods
- [DataDictionary API](../../language-reference/javascript/02-API/classes/DataDictionary) — working with Reference Data in scripts
- [PackedMessage API](../../language-reference/javascript/02-API/classes/PackedMessage) — reading and writing message fields
- [Service Mappings](#service-mappings) — connecting external services (HTTP, DB, etc.) to a JavaScript Asset

---

<WipDisclaimer></WipDisclaimer>


