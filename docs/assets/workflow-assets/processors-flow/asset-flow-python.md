---
title: Python
description: Python Asset. Use this to add custom logic to modify event content, filter, route, enrich, etc.
---

import AssetDependency from '../../../snippets/assets/_asset-dependency.md';
import FailureHandling from '../../../snippets/assets/_failure-handling-flow.mdx';
import WipDisclaimer from '../../../snippets/common/_wip-disclaimer.md'
import InputPorts from '../../../snippets/assets/_input-ports.md';
import OutputPorts from '../../../snippets/assets/_output-ports.md';

# Python Flow Processor

## Purpose

![Asset Dependency Graph (Python Flow Processor)](./.asset-flow-python_images/1725884548049.png "Asset Dependency Graph (Python Flow Processor)")

The Python Asset allows you to define detailed business logic which you may want to apply to a flow of messages.
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
* Knowledge on how to work with Python in layline.io. Please check
  the [Python Language Reference](../../../language-reference/python/python_introduction) to learn about this.

## Configuration

### Name & Description

![Name & Description (Python)](./.asset-flow-python_images/1725872378650.png "Name & Description (Python)")

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

The Python Asset obviously needs a Script to be executed. Prior to version 1.0 of layline.io the Script was
configured as part of this Asset. Starting with v1.0 all Scripts are defined in the `Sources` tab of the project (2):

![Assigned Source Script (Python)](./.asset-flow-python_images/1725872766201.png "Assigned Source Script (Python)")

The root script to be executed within this Asset is then selected here:

![Root Script (Python)](./.asset-flow-python_images/1725872547022.png "Root Script (Python)")

:::tip Python Language Reference
To understand how a Source must be structured to work in a Python Asset, please consult
the [Python Language Reference](../../../language-reference/python/python_introduction).
:::

### Service Mappings

Python scripts may make use of Services which you may have
configured [here](../services/asset-service-introduction#purpose-of-services). These methods could be database
operations, HTTP-request and whatever else Services do provide.

Let's say your Python script invokes an HTTP-Service which provides a method to retrieve the current Bitcoin price via a
REST-Api. Let's also assume that the name of the Service to be linked is `BTCService`.

1. Add a Service Mapping by clicking on `Add Service Mapping` (1).
2. Select the Service which you want to map (2).
3. Provide a `Logical Service Name`. This is the name by which the Service is used in the underlying Python script! If the
   name you enter here, is different to what you are using in your script, the script will not recognize the Service.

![Service Mappings (Python)](./.asset-flow-python_images/1725872914590.png "Service Mappings (Python)")

### Arguments

You can pass arguments to the assigned script. This may be useful when reusing the same script in various different
Python Assets and Workflows, but the script should behave slightly different in each of those instances.
Passing arguments from a Python Asset can provide this functionality. Please check the `getArguments()`
method [here](../../../language-reference/python/API/classes/Processor#getarguments), on how to retrieve arguments in the script.

![Arguments (Python)](./.asset-flow-python_images/1725873064705.png "Arguments (Python)")

In case you are entering arguments (1), the editor will check for valid JSON and outline this in case it is invalid.
You can format the JSON entries with a click on `Format JSON (2)`.

:::warning Invalid JSON
Entering invalid JSON will cause problems when using the Arguments in the underlying script.
:::

### Failure Handling

<FailureHandling></FailureHandling>

## Example

The following example reads inbound product records, filters them by category, and maps the matching records to a structured output format with Header, Detail, and Trailer records.

```mermaid
graph LR
    A["Input Records<br/>(File Source)"] --> B["MapProduct<br/>(Python Processor)"]
    B --> C["Structured Output<br/>(File Sink)"]
```

**Configuration:**

| Setting | Value |
|---------|-------|
| Root Script | `map_product.py` (defined in Sources) |
| Input Port | `Input` (default) |
| Output Port | `Output-1` |

**Script: `map_product.py`**

```python
"""
Filters inbound product records by category and maps them to a
structured output format (Header / Detail / Trailer).
"""

OUTPUT_PORT = processor.getOutputPort('Output-1')
TOTAL_RECORDS = 0
HEADER_EMITTED = False

# Category to filter on — set via Arguments (e.g. "Electronics")
CATEGORY_FILTER = None


def on_init():
    """Called once when the Project starts."""
    global CATEGORY_FILTER
    args = processor.getArguments()
    CATEGORY_FILTER = args.get('categoryFilter') if args else None


def on_shutdown():
    """Called when the processor shuts down."""
    pass


def on_stream_start():
    """Called when a new stream starts."""
    global TOTAL_RECORDS, HEADER_EMITTED
    stream.log_info("--- on_stream_start")
    TOTAL_RECORDS = 0
    HEADER_EMITTED = False


def on_message():
    """Called for every message arriving at the Input port."""
    global TOTAL_RECORDS, HEADER_EMITTED

    category = message.data.get('Category')

    # Skip records that don't match the filter
    if CATEGORY_FILTER and category != CATEGORY_FILTER:
        return

    stream.log_info("--- on_message. Message: " + message.to_json())

    # Write header on first matching record
    if not HEADER_EMITTED:
        header_message = dataDictionary.createMessage(dataDictionary.type.Header)
        header_message.data.PRODUCT = {
            "RECORD_TYPE": "H",
            "FILENAME": "Id;Code;Name;Category;Price;StockQuantity;Color;LaunchDate"
        }
        stream.emit(header_message, OUTPUT_PORT)
        HEADER_EMITTED = True

    # Create and emit a Detail record
    detail_message = dataDictionary.createMessage(dataDictionary.type.Detail)
    detail_message.data.PRODUCT = {
        "RECORD_TYPE": "D",
        "ID": message.data.get("Id"),
        "CODE": message.data.get("Code"),
        "NAME": message.data.get("Name"),
        "CATEGORY": message.data.get("Category"),
        "PRICE": message.data.get("Price"),
        "STOCK_QUANTITY": message.data.get("StockQuantity"),
        "COLOR": message.data.get("Color"),
        "LAUNCH_DATE": message.data.get("LaunchDate")
    }
    stream.emit(detail_message, OUTPUT_PORT)
    TOTAL_RECORDS += 1


def on_stream_end():
    """Called when the stream ends."""
    global TOTAL_RECORDS
    stream.log_info("--- on_stream_end")

    # Write trailer if any matching records were processed
    if TOTAL_RECORDS > 0:
        trailer_message = dataDictionary.createMessage(dataDictionary.type.Trailer)
        trailer_message.data.PRODUCT = {
            "RECORD_TYPE": "T",
            "RECORD_COUNT": TOTAL_RECORDS
        }
        stream.emit(trailer_message, OUTPUT_PORT)
```

**Arguments:**

To filter records by category, pass a `categoryFilter` argument in the Arguments editor:

![Arguments editor showing categoryFilter](./.asset-flow-python_images/asset-flow-python-arguments.png "Arguments editor with categoryFilter")


Only records whose `Category` field matches the filter value are emitted. Records that do not match are silently skipped. Omit the argument to emit all records without filtering.

**What happens at runtime:**

1. `on_stream_start` initialises the record counter and header flag
2. For each message, `on_message` checks the `Category` field against the filter — non-matching records are skipped
3. On the first matching record, `on_message` emits a Header record followed by the first Detail record
4. All subsequent matching records emit Detail records only
5. `on_stream_end` emits a Trailer record with the total count of matching records
6. `on_shutdown` is called when the processor stops (e.g., on workflow stop)


## See Also


- [Python Language Reference](../../../language-reference/python/python_introduction) — full Python language guide for layline.io
- [PythonProcessor API](../../../language-reference/python/API/classes/PythonProcessor) — available hooks and lifecycle methods
- [DataDictionary API (Python)](../../../language-reference/python/API/classes/DataDictionary) — working with Reference Data in Python scripts
- [PackedMessage API (Python)](../../../language-reference/python/API/classes/PackedMessage) — reading and writing message fields
- [Service Mappings](#service-mappings) — connecting external services (HTTP, DB, etc.) to a Python Asset

Please see section [Forced Errors](../../../language-reference/python/python_introduction#forced-errors) to understand how to use these settings.

---

<WipDisclaimer></WipDisclaimer>
