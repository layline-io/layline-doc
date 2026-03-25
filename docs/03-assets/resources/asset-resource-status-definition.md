---
title: StatusDefinition
description: StatusDefinition Resource. Define vendors, status codes, and multilingual message texts for a centralized status message registry.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# StatusDefinition

## Purpose

The **StatusDefinition** Resource defines a set of **vendors**, each with a collection of named **status codes** and their associated **multilingual message texts**. When the Reactive Engine starts, this Resource registers all of this information with the engine's central **Status Registry** singleton.

The Status Registry provides a lookup service used throughout the engine: any component that needs to report or retrieve a status message calls `StatusRegistry.getMessage(vendorId, code)` to get the appropriate human-readable text in the configured language. This means status messages from external systems (EDI servers, HTTP APIs, database engines, etc.) can be mapped to clear, localized descriptions rather than raw numeric codes.

Use this Resource to:

- Define custom status codes for an external system or protocol you are integrating with
- Provide multilingual translations for status messages (e.g., English, German, French)
- Organize status codes under logical vendor groupings
- Override or extend the built-in layline.io status code set

## How It Works

### The Status Registry

The Status Registry is a JVM-wide singleton (`StatusRegistry.getInstance()`) that acts as a centralized phone book for status messages. It is initialized at engine startup:

1. The built-in `LAY` vendor (vendor ID `1`) is registered first with layline.io's built-in status messages
2. Each StatusDefinition Resource then adds its vendors and status messages on top
3. Throughout the engine, code calls `StatusRegistry.getMessage(vendorId, code, language)` to look up the text for a given status

### Vendor IDs

Vendor IDs are numeric identifiers. The range `1–9` is reserved:

| ID | Vendor |
|----|--------|
| 1 | `LAY` (layline.io built-in) |
| 10+ | Available for custom vendors |

Vendor IDs must be **10 or greater** for custom vendors. Vendor short names cannot be `LAY` (reserved).

### Language Codes

Language codes follow **ISO 639-1** (e.g., `en`, `de`, `fr`, `ja`). The registry searches through all configured language tables in order when resolving a message, returning the first match. This allows fallback chains (e.g., if a message is not available in German, fall back to English).

## Configuration

### Name & Description

**`Name`**: Name of the Asset. Spaces are not allowed in the name.

**`Description`**: Enter a description.

### Vendors and Statuses

This section contains two nested editors: the **Vendor selector** at the top, and the **Status table** below the selected vendor.

#### Vendor Selector

A dropdown listing all vendors defined in this Asset. Select a vendor to edit its details and its status codes. The dropdown also offers **Add a new vendor** as the first option.

#### Vendor Fields

When a vendor is selected, the following fields appear:

**`Vendor ID`** — a numeric identifier for the vendor. Must be `10` or greater for custom vendors. Must be unique within the Asset. Auto-assigned to the next available ID when created.

**`Vendor Long Name`** — the full name of the vendor (e.g., `Acme EDI Server`).

**`Vendor Short Name`** — a short identifier for the vendor (e.g., `ACM`). Cannot be `LAY` (reserved). Must be unique within the Asset.

#### Status Table

For the selected vendor, a table lists all defined status codes. Each row has four columns:

**`ID`** — the numeric status code. Must be a positive integer. Assigned automatically for new entries; editable for custom entries.

**`Logical Name`** — a human-readable identifier for the status (e.g., `CONNECTION_TIMEOUT`, `AUTH_FAILED`). This is the key used to look up the message at runtime alongside the vendor ID and language.

**`Languages`** — the multilingual message text entries. Each entry has a language code (ISO 639-1) and a corresponding translated message string. Click the **+** button on a status row to add a language entry. Language codes for inherited entries are not editable.

**`Operations`** — add a language entry to this status, or delete the status entirely.

#### Adding a Language Entry

Click the **+** button on a status row to add a new language entry. A new row appears with:

- **Language code** dropdown — select the language (e.g., `en`, `de`)
- **Translation** — the message text for this language

Clicking the trash icon on a language entry removes that translation. At least one language entry must remain per status.

## Behavior

- Both vendors and status codes support inheritance: a child Asset can override or extend its parent's definitions
- Deleting a vendor also deletes all status codes associated with it
- Inherited vendors and status codes show a reset-to-parent button that restores the parent's definition
- At engine startup, all vendors and status codes from all StatusDefinition Resources are registered with the Status Registry
- The Status Registry resolves messages by searching language tables in order — if a message is not found in the requested language, the first available translation is returned
- Duplicate Vendor IDs, duplicate short names, and duplicate status IDs within the same vendor are validated and produce errors

## Example

A project integrates with an external EDI server called **Acme EDI**. The EDI server communicates status codes as numeric values — the integration layer needs to map these to human-readable messages in English and German.

**Vendor definition:**

| Field | Value |
|-------|-------|
| Vendor ID | `10` |
| Vendor Long Name | `Acme EDI Server` |
| Vendor Short Name | `ACM` |

**Status definitions for vendor `ACM`:**

| ID | Logical Name | Languages |
|----|-------------|-----------|
| `1` | `CONNECTION_TIMEOUT` | `en` → `Connection to EDI server timed out`; `de` → `Zeitüberschreitung der Verbindung zum EDI-Server` |
| `2` | `AUTH_FAILED` | `en` → `Authentication with EDI server failed`; `de` → `Authentifizierung mit EDI-Server fehlgeschlagen` |
| `3` | `MESSAGE_REJECTED` | `en` → `EDI message rejected by server`; `de` → `EDI-Nachricht vom Server abgelehnt` |

When the integration layer encounters status `(vendor=10, code=2)` and the configured language is `de`, the Status Registry returns `Authentifizierung mit EDI-Server fehlgeschlagen`.

## Screenshots Needed

1. **Vendor selected with status table** — showing a vendor with multiple statuses, language entries expanded, and the Operations column visible
2. **Language entry detail** — close-up of the language dropdown and translation text area for a single status

## See Also

- [Secret](../resources/asset-resource-secret) — for storing secret values alongside status definitions
- [Environment](../resources/asset-resource-environment) — for environment-specific configuration

---

<WipDisclaimer></WipDisclaimer>
