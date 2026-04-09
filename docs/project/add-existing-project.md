---
title: Add Existing Project
sidebar_position: 4
description: How to register a project folder that already exists on the file system.
---

# Add Existing Project

> Register a project folder that already lives on the file system with the Configuration Center.

Use **Add Existing Project** when you have a project folder on disk that is not yet visible in layline.io — for example, a project cloned from version control, copied from another machine, or previously removed from the Configuration Center.

<!-- SCREENSHOT: Add Existing Project panel expanded in the Get Started section, showing the Project folder path field and Add Project button -->

## Steps

1. In the **Project** tab, expand the **Add Existing Project** panel on the right side.
2. Enter the **Project folder path** — the full file system path to the existing project folder.
3. Click **Add Project**.

If successful, a confirmation banner appears with the project name and an **Open** button to load the project immediately. The project also appears in the **All Projects** list.

Click **Add Another** to register a second project without navigating away.

## What counts as a valid project folder?

A valid project folder is one that was previously created by layline.io (either through **Create New Project** or **Import from Archive**). It must contain the layline.io project structure — the Configuration Center recognises it by the internal metadata files inside the folder.

:::info File system paths
The path must be accessible from the machine running the Configuration Center, not your local browser. If you are connecting to a remote Configuration Center, enter the path as it appears on the server's file system.
:::

## Error handling

If the path does not exist, is not a valid layline.io project folder, or cannot be read by the server, a failure banner appears. Check that:
- The path is correct and accessible on the server's file system
- The folder contains a valid layline.io project structure
- The Configuration Center process has read permissions on the folder

## See Also

- [**Create New Project**](create-project) — Start a fresh project from scratch
- [**Import from Archive**](import-project) — Restore a project from a ZIP archive
- [**Project Hub**](index.md) — Overview of the Project tab
