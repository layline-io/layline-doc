---
title: Navigation
sidebar_position: 4
description: Efficiently find and use Shelf content with browsing, search, filters, and shortcuts.
---

# Navigation

> Efficiently find and use Shelf content with browsing, search, filters, and shortcuts.

## Shelf Interface Layout

The Shelf interface is organized into three main areas:

```
┌─────────────────┬─────────────────┬─────────────────┐
│   CATEGORIES    │    FOLDERS      │    ELEMENTS     │
│   (Sidebar)     │   (List View)   │   (Grid/Detail) │
├─────────────────┼─────────────────┼─────────────────┤
│                 │                 │                 │
│ • Messages      │ □ Production    │ ┌─────────────┐ │
│ • Connections   │ □ Staging       │ │ Element 1   │ │
│ • Services      │ □ Development   │ │ (preview)   │ │
│ • Custom...     │                 │ └─────────────┘ │
│                 │                 │ ┌─────────────┐ │
│                 │                 │ │ Element 2   │ │
│                 │                 │ │ (preview)   │ │
│                 │                 │ └─────────────┘ │
└─────────────────┴─────────────────┴─────────────────┘
```

<!-- SCREENSHOT: Shelf three-panel layout overview -->

## Browsing

### Category Navigation

The left sidebar lists all Categories:

- Click a Category to see its Folders
- The selected Category is highlighted
- Category icons help visual identification
- Badge numbers show total Elements in each Category

<!-- SCREENSHOT: Category sidebar with Messages category selected -->

### Folder Navigation

The middle panel shows Folders within the selected Category:

- Click a Folder to see its Elements
- Use **All** to see Elements across all Folders in the Category
- Sort Folders by name, date modified, or Element count

<!-- SCREENSHOT: Folder list showing multiple folders with Element counts -->

### Element Grid

The right panel displays Elements in a grid or list view:

- **Grid view** — Visual cards with preview and metadata
- **List view** — Compact rows with sortable columns
- Click an Element to open its detail view

<!-- SCREENSHOT: Element grid view showing multiple Asset cards -->

## Search

### Global Search

The search bar at the top of the Shelf searches across all Categories:

1. Click the search bar (or press `/`)
2. Type your search term
3. Results appear instantly as you type
4. Press Enter to see full results

<!-- SCREENSHOT: Search bar with active search showing results dropdown -->

### Search Scope

Search looks for matches in:

- Element names
- Element descriptions
- Tags
- Asset type names
- Configuration field values (if indexed)

### Search Filters

Narrow search results with filters:

| Filter | Options |
|--------|---------|
| **Asset Type** | Format, Connection, Service, Processor, etc. |
| **Category** | Limit to specific Categories |
| **Date Range** | Published/Modified within time range |
| **Author** | Published by specific user |
| **Tags** | Match specific tags |

<!-- SCREENSHOT: Search results with filter panel expanded -->

### Search Syntax

Advanced search supports:

- **Exact phrase** — `"connection string"`
- **Exclude** — `-deprecated`
- **Tag filter** — `tag:production`
- **Type filter** — `type:format`
- **Author filter** — `author:jsmith`

## Quick Access

### Recent Elements

The Shelf tracks recently viewed Elements:

1. Click **Recent** in the sidebar (or press `R`)
2. See last 20 viewed Elements
3. Click to jump directly to Element details

<!-- SCREENSHOT: Recent Elements view showing last viewed items -->

### Favorites

Mark frequently used Elements:

1. Open an Element detail view
2. Click the **Star** icon
3. Access favorites via **Favorites** in sidebar
4. Unstar by clicking the icon again

<!-- SCREENSHOT: Element detail view with star icon highlighted -->

### Imported Elements

See Elements you've imported:

1. Click **My Imports** in sidebar
2. Shows all Elements imported to your Projects
3. Indicates if updates are available

<!-- SCREENSHOT: My Imports view with update indicators -->

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `/` | Focus search bar |
| `R` | Show Recent Elements |
| `F` | Show Favorites |
| `Esc` | Clear selection / Close detail view |
| `↑` `↓` | Navigate list items |
| `→` | Open selected Element |
| `Cmd/Ctrl + I` | Import selected Element |
| `Cmd/Ctrl + Enter` | Import and close |

## Import Workflows

### Quick Import

For trusted Elements, use Quick Import:

1. Hover over Element in grid
2. Click **Quick Import** button
3. Select target Project
4. Done — no detail view needed

<!-- SCREENSHOT: Element card with Quick Import button visible on hover -->

### Bulk Import

Import multiple Elements at once:

1. Switch to List view
2. Select checkboxes on desired Elements
3. Click **Import Selected**
4. Choose target Project
5. All selected Elements import together

<!-- SCREENSHOT: List view with multiple Elements selected and bulk import action -->

### Import with Dependencies

When importing Elements with dependencies:

1. Select Element to import
2. Review dependency list in dialog
3. Choose how to handle each dependency:
   - **Import from Shelf** — Import the dependent Element too
   - **Use Existing** — Use a matching Asset already in Project
   - **Skip** — Import without this dependency (may cause errors)

<!-- SCREENSHOT: Import dialog showing dependency resolution options -->

## Detail View Navigation

### Opening Elements

Open an Element detail view by:

- Clicking an Element card in grid view
- Double-clicking an Element row in list view
- Pressing `→` on a selected Element

### Detail View Tabs

The detail view has several tabs:

| Tab | Content |
|-----|---------|
| **Overview** | Summary, description, tags, quick actions |
| **Configuration** | Full Asset settings (read-only) |
| **Versions** | Version history and comparison |
| **Usage** | Projects using this Element |
| **Dependencies** | Required Shelf Elements |

<!-- SCREENSHOT: Element detail view showing tab navigation -->

### Closing Detail View

Close the detail view by:

- Clicking the **X** button
- Pressing `Esc`
- Clicking outside the panel (if configured)

## Best Practices

1. **Use favorites** — Star Elements you use frequently
2. **Search first** — Faster than browsing for specific Assets
3. **Filter by type** — When you know what kind of Asset you need
4. **Check recent** — Often faster than searching for recently used items
5. **Read descriptions** — Helpful context before importing
6. **Review versions** — Check version notes for breaking changes

## See Also

- [**Categories**](./categories) — Top-level organization
- [**Folders**](./folders) — Secondary organization
- [**Elements**](./elements) — Working with Shelf Elements
- [**Shelf Overview**](./) — Introduction to the Shelf concept
