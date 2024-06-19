---
title: Javascript
description: Javascript Asset. Use this to add custom logic to modify event content, filter, route, enrich, etc.
---

import AssetDependency from '/docs/snippets/assets/_asset-dependency.md';
import FailureHandling from '/docs/snippets/assets/_failure-handling-flow.md';
import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import InputPorts from '/docs/snippets/assets/_input-ports.md';
import OutputPorts from '/docs/snippets/assets/_output-ports.md';

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
configured [here](../../assets/services/asset-service-introduction#purpose-of-services). These methods could be database
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

Please see section [Forced Errors](../../language-reference/javascript/javascript_introduction#forced-errors) to understand how to use these settings.

![](.asset-flow-javascript_images/9f6e7657.png "Failure Handling (Javascript)")

---

<WipDisclaimer></WipDisclaimer>


