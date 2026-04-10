---
title: Categories
sidebar_position: 1
description: Categories are top-level groupings that organize Shelf Elements by function, team, or technology.
---

# Categories

> Categories are top-level groupings that organize Shelf Elements by function, team, or technology.

## What Are Categories?

Categories provide the first level of organization in the Shelf. They help users find Assets by grouping related Elements together. Think of Categories like the main sections of a library — each contains related books (Folders) that hold specific titles (Elements).

<!-- SCREENSHOT: Shelf sidebar showing Category list with icons and counts -->

## Default Categories

layline.io provides several default Categories out of the box:

| Category | Purpose | Typical Contents |
|----------|---------|------------------|
| **Messages** | Data formats and schemas | Format Assets, data dictionaries, message definitions |
| **Connections** | External system connections | Database connections, API credentials, file system configs |
| **Services** | Reusable service configurations | HTTP services, email configurations, message queues |
| **Flows** | Workflow templates and processors | Flow processors, input/output processors |
| **Resources** | Supporting resources | Data dictionaries, status definitions |

<!-- SCREENSHOT: Default Categories view showing the five standard categories with descriptions -->

## Creating a Category

To create a new Category:

1. Navigate to the **Shelf** tab
2. Click the **+** button next to the Categories header
3. Enter a **Name** for the Category
4. Optionally add a **Description**
5. Choose an **Icon** to visually identify the Category
6. Click **Create**

<!-- SCREENSHOT: Create Category dialog with Name, Description, and Icon selection -->

### Category Naming Guidelines

- Use clear, descriptive names (e.g., "Finance Data", "AWS Connections")
- Avoid overly generic names like "Misc" or "Other"
- Consider using team or domain names for organization-specific Categories
- Keep names concise (2-3 words maximum)

## Managing Categories

### Editing a Category

1. Hover over the Category in the sidebar
2. Click the **...** menu
3. Select **Edit**
4. Modify the name, description, or icon
5. Click **Save**

<!-- SCREENSHOT: Category context menu showing Edit and Delete options -->

### Deleting a Category

:::caution
Deleting a Category permanently removes all Folders and Elements within it. This action cannot be undone.
:::

1. Hover over the Category in the sidebar
2. Click the **...** menu
3. Select **Delete**
4. Confirm the deletion
5. Optionally, choose to move Elements to another Category before deletion

## Category Organization Strategies

### By Function

Group Assets by what they do:

```
├── Data Inputs
├── Data Outputs
├── Transformations
├── Integrations
└── Monitoring
```

### By Technology

Group Assets by the technology they connect to:

```
├── Databases
├── Cloud Storage
├── Message Queues
├── APIs
└── File Systems
```

### By Team

Group Assets by ownership:

```
├── Finance
├── Engineering
├── Marketing
├── Operations
└── Shared
```

### Hybrid Approach

Combine strategies for large organizations:

```
├── Messages (universal data formats)
├── Connections (shared infrastructure)
├── Finance (team-specific)
├── Engineering (team-specific)
└── Templates (reusable patterns)
```

## Category Permissions

Categories inherit permissions from the Shelf:

- **View** — All authenticated users can see Categories
- **Create/Edit** — Requires Shelf Admin role
- **Delete** — Requires Shelf Admin role

## Best Practices

1. **Start with defaults** — Use the built-in Categories before creating custom ones
2. **Don't over-categorize** — 5-10 Categories is usually sufficient
3. **Use Folders for detail** — Create Folders within Categories for finer organization
4. **Document with descriptions** — Help teammates understand Category purpose
5. **Review periodically** — Merge or split Categories as your library grows

## See Also

- [**Folders**](./folders) — Organizing Elements within Categories
- [**Elements**](./elements) — The Assets stored in Categories
- [**Shelf Overview**](./) — Introduction to the Shelf concept
