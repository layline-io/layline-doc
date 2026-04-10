---
title: Elements
sidebar_position: 3
description: Elements are the individual Assets stored on the Shelf — publish, import, and manage reusable configurations.
---

# Elements

> Elements are the individual Assets stored on the Shelf — publish, import, and manage reusable configurations.

## What Are Elements?

An Element is a published Asset that lives on the Shelf. It contains all the configuration, metadata, and version history for a reusable Asset. When you import an Element into a Project, you get a complete copy of that Asset that you can use and customize.

<!-- SCREENSHOT: Element detail view showing configuration, metadata, and version tabs -->

## Element Structure

Each Element contains:

| Component | Description |
|-----------|-------------|
| **Configuration** | The complete Asset settings (all fields, values, and parameters) |
| **Metadata** | Name, description, tags, creation date, author |
| **Version History** | All published versions with change notes |
| **Usage Info** | Which Projects have imported this Element |
| **Dependencies** | Other Shelf Elements this Asset depends on |

## Publishing an Element

### From a Project Asset

To publish an existing Project Asset to the Shelf:

1. Open the Project containing the Asset
2. Navigate to the Asset in the Asset tree
3. Right-click the Asset and select **Publish to Shelf**
4. Or select the Asset and click **Publish** in the toolbar

<!-- SCREENSHOT: Right-click context menu on Asset showing "Publish to Shelf" option -->

### Publish Dialog

The Publish dialog guides you through the process:

1. **Select Location** — Choose Category and Folder (or create new)
2. **Name** — Provide a display name for the Element
3. **Description** — Add context about what this Element does
4. **Tags** — Add searchable tags (optional)
5. **Version Notes** — Document what changed in this version
6. **Click Publish**

<!-- SCREENSHOT: Publish to Shelf dialog with all fields filled out -->

### Publishing Behavior

- **New Element** — If no Element with this name exists, a new one is created
- **New Version** — If an Element with this name exists, a new version is added
- **Validation** — The Asset is validated before publishing; errors must be fixed first
- **Dependencies** — Required dependent Assets are noted but not auto-published

## Importing an Element

### Into a Project

To import a Shelf Element into your Project:

1. Navigate to the **Shelf** tab
2. Browse or search for the Element
3. Click on the Element to view details
4. Click **Import to Project**
5. Select the target Project (defaults to current Project)
6. Click **Import**

<!-- SCREENSHOT: Element detail panel with "Import to Project" button highlighted -->

### Import Dialog

The Import dialog provides options:

- **Target Project** — Which Project receives the imported Asset
- **Asset Name** — Customize the name (defaults to Element name)
- **Update Existing** — If an Asset with this name exists, update it instead of creating new

<!-- SCREENSHOT: Import Element dialog with Project selection dropdown -->

### Import Behavior

- **Copy** — The imported Asset is an independent copy; changes don't affect the Shelf Element
- **Reference** — The Asset remembers it came from the Shelf (for update checking)
- **Validation** — Imported Assets are validated against the Project's existing Assets

## Versioning

### Version Numbers

Shelf Elements use semantic versioning (or simple incrementing):

```
Major.Minor.Patch  (e.g., 2.1.3)
```

- **Major** — Breaking changes requiring Project updates
- **Minor** — New features, backward compatible
- **Patch** — Bug fixes, backward compatible

### Viewing Version History

1. Open an Element detail view
2. Click the **Versions** tab
3. See all published versions with:
   - Version number
   - Publish date
   - Author
   - Change notes
   - Option to view or import specific version

<!-- SCREENSHOT: Versions tab showing version history with dates and change notes -->

### Comparing Versions

To see what changed between versions:

1. In the Versions tab, select two versions
2. Click **Compare**
3. View the differences in configuration

<!-- SCREENSHOT: Version comparison view showing side-by-side diff -->

### Updating Imported Assets

When a Shelf Element has new versions:

1. A notification appears on imported Assets
2. Click **Update Available** on the Asset
3. Review the changes
4. Choose to **Update** or **Ignore**

<!-- SCREENSHOT: Asset in Project showing "Update Available" badge -->

## Element Details

### Configuration Tab

Shows the complete Asset configuration in read-only view:

- All fields and values
- Connection references
- Format definitions
- Script content (if applicable)

<!-- SCREENSHOT: Configuration tab showing Asset settings -->

### Metadata Tab

Displays Element information:

- Name and description
- Tags
- Created by / date
- Last modified by / date
- Total imports (how many Projects use this)

<!-- SCREENSHOT: Metadata tab showing Element information -->

### Usage Tab

Shows where this Element is used:

- List of Projects that imported this Element
- Version each Project is using
- Last import date
- Option to notify Project owners of updates

<!-- SCREENSHOT: Usage tab showing Projects that imported this Element -->

### Dependencies Tab

Lists other Shelf Elements this Asset depends on:

- Required connections
- Referenced formats
- Dependent services
- Status of each dependency

<!-- SCREENSHOT: Dependencies tab showing required Shelf Elements -->

## Managing Elements

### Editing an Element

Elements are edited by:

1. Importing into a Project
2. Making changes to the Asset
3. Re-publishing with updated version notes

There is no direct "edit on Shelf" — the workflow is always Project → Shelf.

### Moving an Element

To move an Element to a different Folder or Category:

1. Open the Element detail view
2. Click **Move**
3. Select new Category and/or Folder
4. Click **Move**

All version history moves with the Element.

<!-- SCREENSHOT: Move Element dialog with Category/Folder selection -->

### Deleting an Element

:::caution
Deleting an Element removes it from the Shelf permanently. Projects that imported it keep their copies, but can no longer check for updates.
:::

1. Open the Element detail view
2. Click **Delete**
3. Confirm the deletion
4. Optionally notify Project owners

<!-- SCREENSHOT: Delete Element confirmation dialog -->

## Best Practices

1. **Version everything** — Always add version notes when publishing
2. **Use semantic versioning** — Help consumers understand impact of updates
3. **Document dependencies** — Note what other Assets are required
4. **Test before publishing** — Verify Assets work in a Project first
5. **Clean up old versions** — Remove obsolete versions to reduce clutter
6. **Monitor usage** — Check which Elements are heavily used vs. abandoned

## See Also

- [**Categories**](./categories) — Top-level organization
- [**Folders**](./folders) — Secondary organization
- [**Navigation**](./navigation) — Finding Elements efficiently
- [**Shelf Overview**](./) — Introduction to the Shelf concept
