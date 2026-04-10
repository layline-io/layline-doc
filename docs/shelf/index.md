---
title: Shelf
sidebar_position: 4
description: The Shelf is layline.io's shared asset library — browse, publish, and reuse Assets across Projects.
---

# Shelf

> The Shelf is a shared library where reusable Assets live. Publish an Asset to the Shelf once, and any Project can import and use it.

## What Is the Shelf?

The Shelf provides a central catalog of Assets that can be shared across Projects and teams. Instead of recreating the same Format, Connection, or Service configuration in every Project, you define it once on the Shelf and reference it wherever it's needed.

<!-- SCREENSHOT: Shelf main view showing the three-panel layout (Categories sidebar, Folders list, Elements grid) -->

## Shelf Structure

The Shelf is organized hierarchically:

```
Shelf
├── Categories
│   ├── Folders
│   │   └── Elements (Assets)
```

### Categories

**Categories** are top-level groupings that help you organize Assets by team, data domain, or technology. Examples include:

- **Messages** — Data formats and schemas
- **Connections** — External system connections (databases, APIs, file systems)
- **Services** — Reusable service configurations
- **Team-specific** — Assets owned by particular teams (e.g., "Finance", "Engineering")

See [Categories](./categories) for details on creating and managing categories.

### Folders

**Folders** exist within Categories and provide additional organization. You might organize folders by:

- Environment (Production, Staging, Development)
- Project or application name
- Asset type sub-groupings

See [Folders](./folders) for details on folder management.

### Elements

**Elements** are the individual Assets stored on the Shelf. An Element contains:

- The Asset configuration (all settings and parameters)
- Version history
- Metadata (created by, modified date, tags)
- Usage information (which Projects import this Element)

See [Elements](./elements) for details on publishing, importing, and managing Elements.

## Key Workflows

### Publishing an Asset

When you publish an Asset from a Project to the Shelf:

1. Select the Asset in your Project
2. Choose **Publish to Shelf** from the actions menu
3. Select or create a Category and Folder
4. Provide a name and optional description
5. The Asset becomes available for import in other Projects

<!-- SCREENSHOT: Publish to Shelf dialog showing Category/Folder selection and metadata fields -->

### Importing an Element

When you import a Shelf Element into a Project:

1. Browse or search the Shelf for the desired Element
2. Click **Import** on the Element
3. Choose the target Project
4. The Element is copied to your Project as a local Asset
5. You can customize the imported Asset independently

<!-- SCREENSHOT: Import Element dialog showing Element details and Project selection -->

### Versioning

Shelf Elements support versioning:

- Each publish creates a new version
- Projects can reference specific versions
- Version history shows what changed between versions
- You can revert to previous versions if needed

<!-- SCREENSHOT: Element version history panel showing version numbers and change notes -->

## When to Use the Shelf

**Use the Shelf when:**

- Multiple Projects need the same Asset configuration
- You want to standardize connections to external systems
- Teams need to share approved data formats
- You want to maintain a single source of truth for complex configurations

**Don't use the Shelf when:**

- An Asset is truly Project-specific with no reuse potential
- You need tight control over changes (use Project-local Assets instead)

## Navigating the Shelf

The Shelf interface provides multiple ways to find Assets:

- **Browse** — Navigate the Category → Folder → Element hierarchy
- **Search** — Find Elements by name, type, or tag
- **Filter** — Narrow results by Asset type, owner, or date
- **Recent** — Quickly access recently viewed or imported Elements

See [Navigation](./navigation) for detailed guidance on finding and using Shelf content.

## Permissions

Access to Shelf operations is controlled by roles:

| Action | Required Role |
|--------|---------------|
| View Shelf | Any authenticated user |
| Import Elements | Project Editor or higher |
| Publish to Shelf | Shelf Publisher or Admin |
| Manage Categories | Shelf Admin |
| Delete Elements | Shelf Admin |

## Best Practices

1. **Organize by function, not by team** — Categories should reflect what Assets do, not who owns them
2. **Use descriptive names** — Element names should clearly indicate purpose
3. **Document with descriptions** — Always add descriptions when publishing
4. **Version thoughtfully** — Use semantic versioning or clear change notes
5. **Review before importing** — Check the version and last modified date

## See Also

- [**Categories**](./categories) — Organizing Assets into Categories
- [**Folders**](./folders) — Creating and managing Folders
- [**Elements**](./elements) — Publishing, importing, and versioning
- [**Navigation**](./navigation) — Finding and using Shelf content
- [**Project**](../project) — Where imported Assets are used
- [**Assets Overview**](../assets) — Reference documentation for all Asset types
