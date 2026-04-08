---
title: Data Dictionary Updates
description: Data Dictionary Updates Resource. Extend the global Data Dictionary with custom type definitions.
---

import WipDisclaimer from '../../../snippets/common/_wip-disclaimer.md'
import DataDictionaryCard from '../../../snippets/assets/data-dictionary-card.md';

# Data Dictionary Updates

## Purpose

The **Data Dictionary** is the global type system that layline.io maintains internally — a superset of all format definitions in a Project.

You can extend this global dictionary in two ways:

1. **Data Dictionary Format** — a full Format Asset with encoding/decoding support for reading and writing data in a specific format
2. **Data Dictionary Updates Resource** — a lightweight alternative for types that are used only internally or as a matter of convenience

The Resource exists for situations where you need a small data structure — for example a shared enum, a simple sequence used for internal bookkeeping, or a reusable type across Workflows — but where defining a complete Format Asset with input/output handling would be excessive.

For full details of supported element types (Namespace, Sequence, Choice, Enumeration, Array, Map), see the [Data Dictionary Format](../formats/asset-format-data-dictionary.md) documentation.

## Configuration

### Name & Description

**`Name`**: Name of the Asset. Spaces are not allowed in the name.

**`Description`**: Enter a description.

<DataDictionaryCard />

## Example

The following defines a `Customer` namespace with shared types used across multiple Workflows:

```
Customer (Namespace)
├── Profile (Sequence)
│   ├── CustomerId  (System.Long)
│   ├── Tier        (Customer.Tier)
│   ├── Name        (System.String)
│   └── Address     (Customer.Address)  [optional]
├── Address (Sequence)
│   ├── Street  (System.String)
│   ├── City    (System.String)
│   ├── Zip     (System.Integer)
│   └── Country (System.String)
└── Tier (Enumeration)
    ├── Standard   (1)
    ├── Premium    (2)
    └── Enterprise  (3)
```

Once defined, any Asset in the Project can reference `Customer.Profile.CustomerId`, `Customer.Tier.Standard`, or `Customer.Address.Country` when mapping or transforming data.

<div className="frame">

![Customer namespace in the Format Types tree editor](.asset-resource-data-dictionary-updates_images/customer-dict-tree.png)

</div>

## Behavior

- Types declared in this Resource are merged into the global Data Dictionary at Project startup
- Types with identical names defined in multiple Format Assets or this Resource are merged; conflicting definitions produce a runtime error
- Inheritance is supported: a type can be overridden at a child Asset level and reset to the parent definition at any time
- The clipboard supports copy and paste of individual entity sub-trees within or across Data Dictionary Assets

## See Also

- [Data Dictionary Format](../formats/asset-format-data-dictionary.md) — full reference for all element types, encoding configuration, and examples
- [Data Dictionary Concept](../../../concept/data-dictionary.md) — architectural overview of how layline.io maintains and uses the global Data Dictionary

---

<WipDisclaimer></WipDisclaimer>
