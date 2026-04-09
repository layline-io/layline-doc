---
title: Project
sidebar_position: 2
description: The Project tab is where you build data pipelines — create and manage Projects, define Assets and Workflows, and configure deployments.
---

# Project

> The Project tab is where you build. Every data pipeline in layline.io lives inside a Project.

A **Project** contains all the Assets and Workflows that define how your data moves and transforms — what data comes in, how it's processed, and where results go. It also includes everything needed to deploy those Workflows to a Reactive Cluster.

When you open layline.io and navigate to the **Project** tab, you land on the **Project Hub** — a split-panel screen for selecting an existing project or starting a new one.

<!-- SCREENSHOT: Project Hub — full view showing the split layout with Recent Projects + All Projects on the left, and Get Started panel on the right -->

## Project Hub layout

The Project Hub is divided into two panels:

- **Left panel** — Browse your projects (Recent and All), filter by name, and manage project details.
- **Right panel** — Actions to create, add, or import projects.

You can drag the divider between the panels to adjust how much space each side takes.

---

## Recent Projects

The **Recent Projects** section shows up to 5 projects you've opened most recently. It only appears when at least one project has been opened before.

<!-- SCREENSHOT: Recent Projects list showing 2–3 items with project name, path, and remove-from-recent button -->

Each entry shows:
- **Project name** (or display name if set) — click to select, double-click to open
- **File system path** — shown below the project name
- **Remove from recent** (×) — removes the entry from the recent list; does not delete the project itself

Hovering over a project shows a tooltip with its full name, display name (if different), description, path, and version.

---

## All Projects

The **All Projects** section lists every project registered in your Configuration Center.

<!-- SCREENSHOT: All Projects list with filter field visible, showing several projects -->

### Filtering

Type in the **Filter projects...** field to narrow the list by name. The filter matches against both the project's internal name and its display name (if set). Clear the field to restore the full list.

### Sorting

Use the **Sort A–Z** and **Sort Z–A** toolbar buttons to sort the list alphabetically. The default order is A–Z.

### Refreshing

Click the **Refresh** button to reload the project list from the Configuration Center.

### Opening a project

Single-click a project to select it. Double-click to open it directly. Alternatively, select a project and use the **Open** button in the detail panel below the list.

---

## Project details panel

When a project is selected in the All Projects list, a detail panel appears below it.

<!-- SCREENSHOT: Project details panel showing Display Name input field, Open button, and Remove button for a selected project -->

### Display Name

Projects are stored on the file system with a fixed **name** (the folder/internal identifier). The **Display Name** field lets you assign a human-friendly label that appears throughout the UI instead of the technical name.

- If a display name is set, the list shows it as `Display Name [internal-name]`
- Leave the field empty to use the project's internal name
- Press **Enter** or click **Save** to apply changes

### Opening

Click **Open** to load the selected project in the editor.

### Removing

Click **Remove** to unregister the project from the Configuration Center. A confirmation dialog appears — you must type `remove` to confirm.

:::caution
Removing a project does not delete the files from the file system. The project folder remains in place and can be re-added later using **Add Existing Project**.
:::

---

## Get Started panel

The right panel contains three actions for bringing projects into layline.io:

| Action | When to use |
|--------|-------------|
| [**Create New Project**](create-project) | Start a fresh project from scratch |
| [**Add Existing Project**](add-existing-project) | Register a project folder that already exists on the file system |
| [**Import from Archive**](import-project) | Restore a project from a ZIP archive |

Click any action to expand it. Only one panel is open at a time.

---

## What a Project contains

Once a project is open, you define **Assets** and **Workflows** inside it. Every data pipeline is built from assets:

- **Workflow Assets** — Input Processors, Flow Processors, and Output Processors that define how data moves
- **Services** — Connections to external systems (databases, queues, APIs)
- **Formats** — Definitions of the data structures you read and write
- **Resources** — Shared configurations like Environments and Secrets
- **Extensions** — Custom code that extends the system's capabilities
- **Connections** — Configured connections to external systems
- **Sinks** — Data output destinations
- **Sources** — Data input sources
- **Deployment Assets** — Engine Deployments, Schedulers, and Cluster configurations

:::info All asset classes are project members
Every asset class is part of a Project — not just the ones listed above as examples. See the [Assets Reference](../assets) for the full list.
:::

## See Also

- [**Create New Project**](create-project) — Start a fresh project from scratch
- [**Add Existing Project**](add-existing-project) — Register an existing project folder
- [**Import from Archive**](import-project) — Restore a project from a ZIP archive
- [**Building Workflows**](building-workflows) — How to define data pipelines inside a project
- [**Assets Reference**](../assets) — Reference documentation for all asset types
- [**Core Concepts**](../quickstart/core-concepts) — Mental models for understanding Projects and Workflows
- [**Quickstart**](../quickstart) — Get started with your first pipeline
