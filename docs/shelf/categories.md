---
title: Categories
sidebar_position: 1
description: Categories are the top-level groupings in the Shelf — Assets and Messages.
---

# Categories

> Categories are the top-level groupings that organize Shelf Elements. There are two built-in categories: Assets and Messages.

## What Are Categories?

Categories provide the first level of organization in the Shelf. They separate two distinct types of content that can be stored and reused.

<!-- SCREENSHOT: Shelf sidebar showing Category list with Assets and Messages -->

## Built-in Categories

layline.io provides two Categories:

| Category | Purpose | Contents |
|----------|---------|----------|
| **Assets** | Reusable Asset configurations | Connections, Services, Formats, Processors, and other Asset types |
| **Messages** | Data format definitions | Message schemas, format definitions, and data structure templates |

These Categories are fixed and cannot be created, renamed, or deleted.

<!-- SCREENSHOT: Category sidebar showing Assets selected with folder list -->

## Assets Category

The **Assets** Category contains copies of Project Assets that have been saved to the Shelf for reuse. This includes:

- **Connections** — Database connections, API endpoints, file system configurations
- **Services** — HTTP services, email configurations, message queue connections
- **Formats** — Data format definitions and parsing configurations
- **Processors** — Flow processors and transformation logic
- **Other Asset Types** — Any Asset that can be copied from a Project

When you copy an Asset from a Project and paste it into the Shelf, it is stored in the Assets Category within a Folder you select or create.

## Messages Category

The **Messages** Category contains copies of messages that have been saved to the Shelf for later investigation or reuse.

### What Are Messages?

**Messages are generic runtime structures** created by layline.io at runtime. They hold data that is read from data sources or travels through the system. The structure of messages is completely dynamic and based on a combination of all defined data formats (through format definitions, data dictionary, etc.).

### Where Do Shelf Messages Come From?

Messages that are pasted into the Shelf are usually taken from:

- **Audit trail** — Historical message records from processed data
- **Service function execution results** — Messages returned from function calls (see **Engine State → Services → Functions**)

### Using Shelf Messages

Copy a Message from the Shelf and paste it wherever message pasting is supported. A common use case is pasting into the Engine State when executing service functions.

## Navigating Categories

### Selecting a Category

1. Navigate to the **Shelf** tab
2. Click on **Assets** or **Messages** in the left sidebar
3. The middle panel updates to show Folders within that Category
4. The selected Category is highlighted

<!-- SCREENSHOT: Category selection showing visual highlight -->

### Category Icons

Each Category has a distinct icon for quick visual identification:

- **Assets** — Cube/box icon (representing packaged configurations)
- **Messages** — Document/message icon (representing data formats)

## Organizing Within Categories

Since Categories are fixed, all organization happens at the Folder level:

- Create Folders within Categories to group related Elements
- Use clear, descriptive Folder names
- Consider organizing by project, environment, or function

See [Folders](./folders) for detailed guidance on Folder organization.

## Copying Between Projects

The key benefit of Categories is that they enable cross-project reuse:

1. **Assets** — Copy an Asset from Project A, paste to Shelf, then copy from Shelf and paste into Project B
2. **Messages** — Copy a Message definition from one context, save to Shelf, reuse in multiple Projects

The Category structure (Assets vs Messages) remains consistent across all Projects.

## Best Practices

1. **Use both Categories** — Don't store everything in one Category; use Assets for configurations and Messages for data formats
2. **Create meaningful Folders** — Since you can't create Categories, invest in good Folder structure
3. **Name consistently** — Use the same naming patterns across Categories
4. **Review periodically** — Clean up unused Elements in both Categories

## See Also

- [**Folders**](./folders) — Organizing Elements within Categories
- [**Elements**](./elements) — The Assets and Messages stored in Categories
- [**Shelf Overview**](./) — Introduction to the Shelf concept
