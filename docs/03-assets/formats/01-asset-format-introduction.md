---
title: Formats Introduction
description: Understanding, configuring and using Formats.
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';

## Purpose

Event data commonly comes in some form of structured data format.
There are literally thousands of different standardized specifications and custom hacks of such formats.
Last not least, every company, every user may come up with their own format for their own purpose, just like they could come with their own data structure in a spreadsheet.

One of the big challenges for software therefore is its ability to ingest, interpret/understand, and output any of these data formats.

Many software packages provide custom coded "plug-ins" which work for one such format, or a small subset of close derivations of the same format.
This approach is not only expensive, but limits your freedom in working with such data as you run into new requirements.

layline.io tries to blaze a different trail in that it provides configurations for specific categories of data structures and APIs.

## Configuring formats

**Generic Format Grammar**

The _Generic Format Grammar_ for example features a whole grammar language to enable you to:

1. **Define** the grammar of an arbitrary structured data format.
2. **Test** the grammar with real-life data while in edit-mode.

**Data Dictionary Format**

The internal _Data Dictionary_  allows creating structured **internal** data formats in a UI-driven fashion instead of a grammar-language as you would with the Generic Format.

**HTTP Format**

An HTTP interface again requires a different approach in that you basically define different types of requests with data attached to them.
Therefore, configuration interface for this type of format looks very different also.

## What does layline.io do with configured formats

When deploying a Project with one or more formats, layline.io tries to compile all of them.
Upon success, it has put all of them into one large "tree" with each format in its own namespace (branch) within this tree.
It's important, that the naming of your formats at the top level is unique so that each format ends up in its own namespace.
In the Generic Format for example there are dedicated namespace fields so that you can uniquely name them.

Below you see an excerpt of a Generic Grammar format:

![](.asset-format-introduction_images/956bcc60.png "Grammar Format Example (Format Introduction)")

Note the element name at (1), as well as the part names at (2) and (3).

Now if you are for example referring to this format within the Mapping Asset, then this can be done like this:

![](.asset-format-introduction_images/6f770124.png "Grammar Format Example (Format Introduction)")

Or like this within a Scripting Asset:

![](.asset-format-introduction_images/6181d78f.png "Grammar Format Example (Format Introduction)")

## Information missing in the documentation?

---

<WipDisclaimer></WipDisclaimer>
