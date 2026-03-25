---
title: Directories
description: Directories Resource. Define and validate directory paths and symbolic links for a Project.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Directories

## Purpose

The **Directories** Resource lets you define named directory paths with Unix permission strings, and symbolic links with target paths. These definitions serve as the canonical directory layout for a Project.

At deployment, the Reactive Engine uses this Resource to perform a pre-flight check — it verifies that all listed directories exist on the target filesystem before the engine starts processing. If any directory is missing and failures are not explicitly allowed, the engine reports an error and fails to start.

Use this Resource to:

- Declare a consistent directory layout (e.g., `input/`, `archive/`, `error/`) that is validated at startup
- Define symbolic links that map logical paths to physical locations
- Share directory definitions across Environments using inheritance

## Configuration

### Name & Description

**`Name`**: Name of the Asset. Spaces are not allowed in the name.

**`Description`**: Enter a description.

### Directories

A table of directory path / permission pairs:

**`Directory`** — the directory path. Can be relative (resolved against the Reactive Engine base directory) or absolute.

**`Permissions`** — a Unix permission string (e.g. `rw-r--r--`). Passed to the Reactive Engine's file system layer.

### Symbolic Links

A table of symlink path / target pairs:

**`Symbolic link`** — the path where the symlink appears. Resolved against the Reactive Engine base directory.

**`Target`** — the path the symlink points to. Can be relative or absolute.

## Behavior

- Both sections support inheritance: a child Asset can override individual entries while inheriting the rest from its parent
- At activation, the engine checks that all listed directories are reachable on the target filesystem
- If a directory is unreachable and the connection does not allow directory failures, the engine logs an error and fails to start
- Symbolic links are resolved by the underlying file system; ensure targets exist before deployment
- Permission strings and paths are not validated at configuration time — incorrect values produce runtime errors

## Example

The following defines a layout for a file processing workflow:

**Directories:**

| Directory | Permissions |
|----------|-------------|
| `/data/input` | `rw-r--r--` |
| `/data/archive` | `r--r--r--` |
| `/data/error` | `rw-r--r--` |

**Symbolic Links:**

| Symbolic link | Target |
|----------------|--------|
| `/data/shared` | `/mnt/nfs/shared` |

At deployment, the Reactive Engine verifies that `input/`, `archive/`, and `error/` all exist before starting. If `allowUnusableFolderSetups` is not enabled on the connection and `archive/` is missing, activation fails with a directory error.

## See Also

- [Secret](../resources/asset-resource-secret) — for managing sensitive credentials alongside directory paths
- [Environment](../resources/asset-resource-environment) — for environment-specific variable substitution

---

<WipDisclaimer></WipDisclaimer>
