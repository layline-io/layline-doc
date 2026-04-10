---
title: Folders
sidebar_position: 2
description: Folders provide secondary organization within Categories, helping you group related Elements together.
---

# Folders

> Folders provide secondary organization within Categories, helping you group related Elements together.

## What Are Folders?

Folders exist within Categories and provide a second level of organization. While Categories group Assets by broad function or domain, Folders let you organize by project, environment, or any other criteria that makes sense for your team.

<!-- SCREENSHOT: Folder list view showing folders within a Category with Element counts -->

## Folder Hierarchy

The Shelf supports a two-level hierarchy:

```
Category
└── Folder
    └── Elements (Assets)
```

Folders cannot contain sub-folders. If you need deeper organization, consider:

- Using naming conventions (e.g., "Production-DB", "Staging-DB")
- Creating additional Categories
- Using tags on Elements

## Creating a Folder

To create a new Folder:

1. Navigate to the desired Category
2. Click the **New Folder** button (or right-click in the folder area)
3. Enter a **Name** for the Folder
4. Optionally add a **Description**
5. Click **Create**

<!-- SCREENSHOT: Create Folder dialog with Name and Description fields -->

### Folder Naming Guidelines

- Use consistent naming patterns across Categories
- Include environment indicators when relevant (Prod, Staging, Dev)
- Use clear, searchable names
- Avoid special characters that might cause issues in paths

Common naming patterns:

| Pattern | Example | Use Case |
|---------|---------|----------|
| By Environment | `Production`, `Staging`, `Development` | Environment-specific Assets |
| By Project | `Invoice-Processing`, `Data-Sync` | Project-specific Assets |
| By Type | `Databases`, `APIs`, `File-Systems` | Type grouping within Category |
| By Version | `v1-Legacy`, `v2-Current` | Version management |

## Managing Folders

### Renaming a Folder

1. Navigate to the Category containing the Folder
2. Right-click the Folder or click the **...** menu
3. Select **Rename**
4. Enter the new name
5. Press Enter or click outside to save

<!-- SCREENSHOT: Folder rename in-place editing -->

### Moving a Folder

Folders can be moved between Categories:

1. Right-click the Folder
2. Select **Move to Category**
3. Choose the destination Category
4. Click **Move**

All Elements within the Folder move with it.

<!-- SCREENSHOT: Move Folder dialog showing Category selection -->

### Deleting a Folder

:::caution
Deleting a Folder permanently removes all Elements within it. Consider moving Elements to another Folder first.
:::

1. Right-click the Folder
2. Select **Delete**
3. Choose an action:
   - **Delete Folder and Elements** — Permanently removes everything
   - **Move Elements to...** — Moves Elements to another Folder before deleting
4. Confirm the action

<!-- SCREENSHOT: Delete Folder confirmation dialog with options -->

## Folder Organization Patterns

### Environment-Based

Organize by deployment environment:

```
Connections/
├── Production/
│   ├── Primary-DB
│   ├── Backup-DB
│   └── API-Gateway
├── Staging/
│   ├── Staging-DB
│   └── Test-API
└── Development/
    ├── Local-DB
    └── Mock-Services
```

### Project-Based

Organize by project or application:

```
Messages/
├── Invoice-System/
│   ├── Invoice-Format
│   ├── Customer-Schema
│   └── Payment-Types
├── HR-Platform/
│   ├── Employee-Schema
│   └── Timesheet-Format
└── Common/
    ├── Error-Response
    └── Standard-Headers
```

### Type-Based

Organize by specific type within Category:

```
Connections/
├── Databases/
│   ├── PostgreSQL-Prod
│   ├── MySQL-Analytics
│   └── MongoDB-Logs
├── Cloud-Storage/
│   ├── S3-Primary
│   ├── GCS-Archive
│   └── Azure-Backup
└── Message-Queues/
    ├── Kafka-Main
    └── RabbitMQ-Events
```

## Folder Metadata

Each Folder displays:

- **Name** — The Folder name
- **Description** — Optional explanatory text
- **Element Count** — Number of Elements in the Folder
- **Last Modified** — Date of most recent change
- **Created By** — User who created the Folder

<!-- SCREENSHOT: Folder details panel showing metadata -->

## Best Practices

1. **Be consistent** — Use the same organizational pattern across Categories
2. **Don't nest concepts** — Folders are the final level; use naming for further grouping
3. **Keep it flat** — Aim for 3-7 Folders per Category; create more Categories if needed
4. **Review regularly** — Merge empty or duplicate Folders
5. **Use descriptions** — Help teammates understand Folder purpose at a glance

## See Also

- [**Categories**](./categories) — Top-level Shelf organization
- [**Elements**](./elements) — The Assets stored in Folders
- [**Shelf Overview**](./) — Introduction to the Shelf concept
