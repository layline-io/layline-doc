---
title: Data Dictionary Updates
description: Data Dictionary Updates Resource. Extend the global Data Dictionary with custom type definitions.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Data Dictionary Updates

## Purpose

The **Data Dictionary** is the global type system that layline.io maintains internally, superset of all format definitions in a Project. The **Data Dictionary Updates** Resource allows you to further extend this global dictionary with custom type definitions beyond what is provided by individual Format Assets.

Use this Resource when you need to:

- Declare additional data structures that don't belong to any single input/output format
- Share common types across multiple Workflows and Formats
- Define types that are assembled at runtime from data processed through the system

For full details of supported element types (Namespace, Sequence, Choice, Enumeration, Array, Map), see the [Data Dictionary Format](../formats/03-asset-format-data-dictionary.md) documentation.

## Configuration

### Name & Description

**`Name`**: Name of the Asset. Spaces are not allowed in the name.

**`Description`**: Enter a description.

### Format Types

This section contains the Data Dictionary tree editor — the same component used by the [Data Dictionary Format](../formats/03-asset-format-data-dictionary.md). It allows you to declare, organize, and maintain a hierarchy of custom type definitions.


Each node in the tree represents a declared type. Click a node to select it and view/edit its details in the right panel.

Node icons indicate inheritance status:

- **Standard icon color** — the type is defined or overridden in this Asset
- **Inherited (grey) icon** — the type is inherited from a parent Asset

#### Context Menu

Right-click a node (or click the dropdown button) to access:

- **Add sibling** — adds a new type at the same level as the selected node
- **Add child** — adds a child type beneath the selected node (only available for types that support children, e.g. Namespace, Sequence, Choice)
- **Delete** — removes the type from this Asset

Deleted types can be reset to their parent definition using the reset button that appears on the node.

#### Entity Detail Panel

When a node is selected, the right panel shows its fields:

**`Name`**: The type's name. Must be unique within the same parent.

**`Type`**: The element type. Dropdown options include: `Namespace`, `Sequence`, `Choice`, `Enumeration`, `Array`, `Map`. Once set, changing the type clears all previously declared members.

**`Description`**: Free-text description of the type.

Type-specific sub-panels appear below based on the selected type:

- **Sequence / Choice**: Member declaration table — add Name, Type (from System types or other declared types), Optional flag, and Description per member
- **Enumeration**: Element declaration table — add Name, Integer Value, and Description per enumerator
- **Array / Map**: Contained type selector — pick a single element type for all items in the array/map

#### Root Types

Click **Declare Root Type** at the bottom of the tree to add a new top-level type declaration. Root types are not scoped under a parent Namespace.

## Behavior

- Types declared in this Resource are merged into the global Data Dictionary at Project startup
- Types with identical names defined in multiple Format Assets or this Resource are merged; conflicting definitions produce a runtime error
- Inheritance is supported: a type can be overridden at a child Asset level and reset to the parent definition at any time
- The clipboard supports copy/paste of individual entity sub-trees within or across Data Dictionary Assets

## See Also

- [Data Dictionary Format](../formats/03-asset-format-data-dictionary.md) — full reference for all element types, encoding configuration, and examples
- [Data Dictionary Concept](../../02-concept/03-data-dictionary) — architectural overview of how layline.io maintains and uses the global Data Dictionary

---

<WipDisclaimer></WipDisclaimer>
