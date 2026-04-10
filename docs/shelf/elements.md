---
title: Elements
sidebar_position: 3
description: Elements are individual Assets or Messages stored on the Shelf — copy them between Projects using the clipboard.
---

# Elements

> Elements are individual Assets or Messages stored on the Shelf. Copy them to the Shelf, then paste them into any Project.

## What Are Elements?

An Element is a copy of an Asset or Message that lives on the Shelf. It contains the complete configuration of the original item, ready to be copied and pasted into Projects.

<!-- SCREENSHOT: Element detail view showing configuration overview -->

## Element Structure

Each Element contains:

| Component | Description |
|-----------|-------------|
| **Configuration** | The complete settings of the copied Asset or Message |
| **Metadata** | Name, description, creation date, author |
| **Type** | The Asset type (Connection, Service, Format, etc.) or Message format |

Unlike Project Assets, Elements on the Shelf are static — you don't edit them directly. To update an Element, you copy a new version from a Project.

## Adding Elements to the Shelf

### Copying an Asset

To save an Asset to the Shelf:

1. Open the Project containing the Asset
2. Navigate to the **Asset Editor**
3. Select the Asset you want to save
4. **Copy** the Asset (using the application's copy function)
5. Switch to the **Shelf** tab
6. Select the desired Category and Folder
7. **Paste** the Asset into the Folder

<!-- SCREENSHOT: Copying an Asset from Asset Editor -->

### Copying a Message

To save a Message to the Shelf:

1. Navigate to where the Message is defined or used
2. **Copy** the Message
3. Switch to the **Shelf** tab
4. Select the **Messages** Category and a Folder
5. **Paste** the Message into the Folder

<!-- SCREENSHOT: Copying a Message to the Shelf -->

### What Gets Copied

When you copy an Element to the Shelf:

- ✅ The complete configuration of the Asset/Message
- ✅ All settings, parameters, and values
- ❌ **Not** the dependencies (other Assets it references)

## Using Shelf Elements

### Copying an Asset to a Project

To use a Shelf Asset in your Project:

1. Navigate to the **Shelf** tab
2. Browse or search for the Asset you need
3. **Copy** the Asset from the Shelf
4. Switch to your Project's **Asset Editor**
5. **Paste** the Asset into the Asset tree

The Asset is now available in your Project as a local copy. Changes you make to this copy don't affect the Shelf Element.

<!-- SCREENSHOT: Shelf Asset selected with copy action -->

### Copying a Message

To use a Shelf Message:

1. Navigate to the **Shelf** and find the Message
2. **Copy** the Message
3. Navigate to where you want to use it (e.g., Engine State → Service Asset Functions)
4. **Paste** the Message into the appropriate field

<!-- SCREENSHOT: Message pasted into Engine State function parameters -->

### Cross-Project Workflow

The Shelf enables copying between Projects:

1. In Project A, **copy** an Asset
2. **Paste** it into the Shelf
3. Close Project A and open Project B
4. **Copy** the Asset from the Shelf
5. **Paste** it into Project B's Asset tree

This works because the Shelf is stored on the Configuration Server, not within any single Project.

## Understanding Dependencies

**Critical:** When you copy an Element, only that specific Element is copied — **not its dependencies**.

### Example

You have an Input Stream Processor that references a Format:

```
Input Stream Processor (Asset)
└── References: Customer Format (another Asset)
```

When you copy the Input Stream Processor to the Shelf:

- ✅ The Input Stream Processor configuration is saved
- ❌ The Customer Format is **not** automatically saved

When you paste this into another Project:

- The pasted Asset still references "Customer Format"
- **If that Format doesn't exist in Project B, the Asset will fail**

### Managing Dependencies

To avoid broken references:

1. **Check dependencies before copying** — Note what other Assets are referenced
2. **Copy dependencies too** — If needed, copy dependent Assets to the Shelf as well
3. **Verify in target Project** — Ensure referenced Assets exist before or after pasting
4. **Update references** — After pasting, you may need to reconnect dependencies

<!-- SCREENSHOT: Asset detail showing referenced dependencies -->

## Element Metadata

Each Element displays:

| Field | Description |
|-------|-------------|
| **Name** | The Element name (from the original Asset/Message) |
| **Type** | Asset type or Message format |
| **Description** | Optional description added when created |
| **Created** | Date and time the Element was added |
| **Author** | User who created the Element |
| **Folder** | Which Folder contains this Element |

<!-- SCREENSHOT: Element detail panel showing metadata -->

## Managing Elements

### Moving an Element

To move an Element to a different Folder:

1. Open the Element detail view
2. Click **Move**
3. Select the destination Folder
4. Click **Move**

### Renaming an Element

To rename an Element:

1. Open the Element detail view
2. Click **Rename**
3. Enter the new name
4. Confirm

Renaming only affects the Shelf Element, not Assets already pasted into Projects.

### Deleting an Element

:::caution
Deleting an Element removes it from the Shelf permanently. Projects that have already copied the Element keep their copies, but the Element is no longer available on the Shelf.
:::

1. Open the Element detail view
2. Click **Delete**
3. Confirm the deletion

<!-- SCREENSHOT: Delete Element confirmation dialog -->

## Updating Elements

There is no "update" mechanism for Shelf Elements. To refresh an Element with a new version:

1. Delete the old Element from the Shelf
2. Copy the updated Asset/Message from your Project
3. Paste it into the Shelf

Projects that imported the old version keep their copies unchanged.

## Best Practices

1. **Name clearly** — Use descriptive names that indicate purpose
2. **Add descriptions** — Help teammates understand what the Element does
3. **Organize in Folders** — Don't leave Elements at the root; use Folders
4. **Document dependencies** — Note what other Assets are required
5. **Clean up periodically** — Remove outdated Elements to reduce clutter
6. **Test after pasting** — Verify imported Assets work in the target Project

## See Also

- [**Categories**](./categories) — Top-level organization (Assets and Messages)
- [**Folders**](./folders) — Secondary organization
- [**Navigation**](./navigation) — Finding Elements efficiently
- [**Shelf Overview**](./) — Introduction to the Shelf concept
