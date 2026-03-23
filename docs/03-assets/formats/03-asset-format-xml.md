---
title: XML Format
description: XML Format Asset. Use this to define an XML data format based on an XSD schema.
tags:
  - format
  - xml
  - xsd
  - schema
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# XML Format

## Purpose

Define an XML data format based on an XSD schema. The XSD schema is parsed to extract type information, and each schema type is mapped to a corresponding entry in the layline.io Data Dictionary.

The editor enables you to:

1. **Select** an XSD schema file from the project.
2. **Override** namespace and naming settings per schema element.
3. **Configure** how XML elements map to layline.io messages.
4. **Add** converters to transform data during parsing/serialization.
5. **Test** the format with sample XML data in edit mode.

Formats defined this way may be used to both read and write XML data.

### This Asset can be used by:

| Asset type | Link |
|------------|------|
| Input Processors | [Stream Input](../processors-input/asset-input-stream) |
| | [Frame Input](../processors-input/asset-input-frame) |
| Output Processors | [Stream Output](../processors-output/asset-output-stream) |
| | [Frame Output](../processors-output/asset-output-frame) |

## Configuration

### Name & Description

* **`Name`** : Name of the Asset. Spaces are not allowed in the name.

* **`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it.
Click to expand and then click to follow, if any.

### XML Settings

#### XSD Schema

* **`XSD Schema`** : Select the XSD schema file from the project. The schema is parsed to extract type information and populate the Schema setup table.

#### Schema setup

The Schema setup table lists all schema types discovered in the XSD. For each schema location, you can override how it is mapped into layline.io:

| Column | Description |
|--------|-------------|
| **Location** | Schema location identifier (read-only) |
| **Target Namespace** | The target namespace of this schema (read-only) |
| **Name** | Override the name used for this schema in layline.io. Leave empty to use the default. |
| **Namespace Prefix** | Override the XML namespace prefix used when serializing. Leave empty to use the default. |
| **Data Dictionary Namespace** | Override the Data Dictionary namespace for types from this schema. Leave empty to use the default. |

Click **Add Schema Override** to add an override entry. Only override entries you add are persisted — the table is populated automatically from the XSD.

#### Use pretty printing on output side

* **`Use pretty printing on output side`** : When enabled, XML output is formatted with indentation and line breaks for readability. When disabled, XML is output as a single line.

### Message Creation

Message Creation defines how XML elements map to layline.io message structures.

* **`Context`** : The XML element or type name from the schema that identifies this message type.
* **`Element path`** : The path in the layline.io message structure where this element's data will be accessible.

Click **Add Message Creation Data** to add a new mapping entry.

### Converters

Converters allow you to transform data during XML parsing or serialization. Each converter maps a context to a definition:

* **`Context`** : The XML context (element or type name) to which this converter applies.
* **`Definition`** : The converter definition script.

Click **Add Converter** to add a new converter entry.

---

<WipDisclaimer></WipDisclaimer>
