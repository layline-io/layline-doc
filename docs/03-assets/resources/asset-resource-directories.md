---
title: Directories
description: Directories Resource. Define directory paths, permissions, and symbolic links for a Project.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Directories

## Purpose

The **Directories** Resource lets you define a set of named directory paths with associated Unix permission strings, and a set of symbolic links with target paths. These definitions are resolved relative to the Reactive Engine's configured base directory at runtime.

Use this Resource to:

- Declare well-known directory paths with consistent permissions across Environments
- Centralize directory path definitions so they can be referenced by name (e.g. via [macros](../../language-reference/macros)) rather than hardcoded throughout a Project
- Define symbolic links that map a logical path to a physical target

## Configuration

### Name & Description

**`Name`**: Name of the Asset. Spaces are not allowed in the name.

**`Description`**: Enter a description.

### Directories

A table of directory path / permission pairs. Each row has three columns:

**`Directory`** — the directory path. Can be a relative or absolute path. Resolved relative to the Reactive Engine base directory at runtime.

**`Permissions`** — a Unix permission string (e.g. `rw-r--r--`). Controls read/write access for the Reactive Engine process.

**`Del.`** — delete this entry. Deleted entries can be reset to their parent Asset's definition using the reset button.

Click **Add directory** to add a new row.

### Symbolic Links

A table of symlink path / target pairs. Each row has three columns:

**`Symbolic link`** — the path where the symlink will appear. Resolved relative to the Reactive Engine base directory.

**`Target`** — the path that the symlink points to. Can be a relative or absolute path.

**`Del.`** — delete this entry. Deleted entries can be reset to their parent Asset's definition using the reset button.

Click **Add symbolic link** to add a new row.

## Behavior

- Both sections support inheritance: a child Asset can override individual entries while inheriting the rest from its parent
- Entries marked as deleted show a reset button — click it to restore the parent Asset's definition
- Directory paths and symbolic link targets are not validated at configuration time; incorrect paths produce runtime errors
- Permission strings are passed directly to the Reactive Engine's file system layer

## See Also

- [Secret](../../assets/resources/asset-resource-secret) — for managing sensitive credentials alongside directory paths
- [Environment](../../assets/resources/asset-resource-environment) — for environment-specific variable substitution

---

<WipDisclaimer></WipDisclaimer>
