---
title: Directories
description: Directories Resource. Define and provision directory paths and symbolic links for a Project at engine startup.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# Directories

## Purpose

The **Directories** Resource lets you define a set of named directory paths and symbolic links that are provisioned automatically when the Reactive Engine starts.

When the engine starts up, before any Workflow begins processing, it calls `setupForSystem()` on this Resource. For each entry, it:

1. **Creates the directory** if it does not already exist (`Files.createDirectories()`)
2. **Applies the specified POSIX permissions** if a permission string is provided and the filesystem supports it
3. **Creates any symbolic links** that do not already exist

This means the Resource acts as a **filesystem bootstrap** — it ensures a known directory layout exists and is correctly permissioned before the engine begins processing, rather than requiring directories to be pre-created manually on every target host.

Use this Resource to:

- Ensure required directories (`/data/input`, `/mnt/nfs/archive`, etc.) exist on the engine host at startup
- Apply consistent POSIX permissions across environments without manual setup
- Create symbolic links that point to shared or network-mounted paths

## Configuration

### Name & Description

**`Name`**: Name of the Asset. Spaces are not allowed in the name.

**`Description`**: Enter a description.

### Directories

A table of directory path / permission pairs:

**`Directory`** — the directory path. Can be relative (resolved against the Reactive Engine base directory) or absolute. Supports [macros](../../language-reference/macros) for environment-specific values.

**`Permissions`** — a Unix permission string (e.g. `rw-r--r--`). Optional. If omitted, the filesystem's default umask applies.

### Symbolic Links

A table of symlink path / target pairs:

**`Symbolic link`** — the path where the symlink is created. Can be relative or absolute. Supports [macros](../../language-reference/macros).

**`Target`** — the path the symlink points to. Must already exist at the time of symlink creation.

## Behavior

- Both sections support inheritance: a child Asset can override individual entries while inheriting the rest from its parent
- Directory creation is idempotent — existing directories are not modified, only created if absent
- If a directory cannot be created (e.g. permission denied, parent path missing), engine startup fails with a `DIRECTORY_CREATION_FAILED` error
- If a symbolic link already exists and points to a different target, it is updated to point to the configured target
- Both paths and permissions support [macro substitution](../../language-reference/macros), enabling per-environment configuration through inheritance

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

When the Reactive Engine starts, it creates `input/`, `archive/`, and `error/` directories under `/data/` if they do not exist, applies the specified permissions, and creates the `/data/shared` symlink pointing to `/mnt/nfs/shared`.

## See Also

- [Secret](../resources/asset-resource-secret) — for managing sensitive credentials alongside directory paths
- [Environment](../resources/asset-resource-environment) — for environment-specific variable substitution
- [Macros](../../language-reference/macros) — for using macros in directory paths and permission strings

---

<WipDisclaimer></WipDisclaimer>
