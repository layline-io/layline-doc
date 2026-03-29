[//]: # (snippet: data-dictionary-card)
[//]: # (Internal use — do not edit. Purpose: describe the DataDictionaryCard.vue UI component.)
[//]: # (Usage in a doc page:)
[//]: # `import DataDictionaryCardDetails from '@site/snippets/assets/data-dictionary-card.md';`
[//]: # `<DataDictionaryCardDetails />`)

## Data Dictionary Card {#data-dictionary-card}

### Purpose

A split-pane component for browsing, adding, editing, and deleting Data Dictionary entity declarations (namespaces, sequences, enumerations, arrays, and choices). Used wherever a Data Dictionary is configured — in the Data Dictionary Format Asset, Service configurations, and Resource configurations.

### UI Layout

| Pane | Content |
|------|---------|
| **Left** | Tree view of entity declarations with a toolbar |
| **Right** | Entity detail panel for the selected entity |

The split position is adjustable via a vertical divider.

### Toolbar Controls

Filter, expand/collapse, sort order, and copy/paste for entity nodes.

### Tree View

The left pane shows all declared entities in a hierarchical tree. Each node displays the entity icon and name. Inherited entities (from parent formats) appear in a distinct inherited style. Entities that have been deleted or overridden show a disabled overlay. Click a node to select it and load its details in the right pane.

### Entity Operations

Each entity node supports operations via its context menu (**▼** arrow):

| Operation | Description |
|-----------|-------------|
| **Add Root Type** | Adds a new top-level entity (visible only when no node is selected) |
| **Add Sibling** | Adds a new entity at the same hierarchical level |
| **Add Child** | Adds a new child entity nested under the selected node |
| **Delete** | Removes the entity from the dictionary |
| **Reset to Parent** | Resets the entity to its inherited definition (visible only for overridden entities) |

### Right Pane — Entity Detail

When an entity is selected, the right pane shows an **Entity Detail** panel. Configuration options vary by entity type:

- **Namespace** — name, type, description
- **Sequence** — name, type, description, optional members, extendable flag
- **Enumeration** — name, type, description, named elements with integer values
- **Choice** — name, type, description, exclusive member list
- **Array** — name, type, description, contained type
