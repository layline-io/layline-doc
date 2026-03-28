[//]: # (snippet: data-dictionary-card)
[//]: # (Internal use — do not edit. Purpose: describe the DataDictionaryCard.vue UI component.)
[//]: # (Usage in a doc page:)
[//]: # `import DataDictionaryCardDetails from '@site/snippets/assets/data-dictionary-card.md';`
[//]: # `<DataDictionaryCardDetails />`)

## Data Dictionary Card {#data-dictionary-card}

### Purpose

The **Data Dictionary Card** is a split-pane Vue component (`DataDictionaryCard.vue`) used throughout the layline.io SPA wherever a Data Dictionary needs to be configured — for example in the Data Dictionary Format Asset, Service configurations, and Resource configurations.

It provides a visual interface for browsing, adding, editing, and deleting Data Dictionary entity declarations (namespaces, sequences, enumerations, arrays, and choices).

### UI Layout

The component is divided into two panes:

| Pane | Content |
|------|---------|
| **Left** | Tree view of entity declarations with a toolbar above |
| **Right** | Entity detail panel — shows the selected entity's fields and configuration options |

The split position is draggable via a vertical divider.

### Toolbar Controls

The toolbar above the tree pane provides the following controls:

| Control | Icon | Action |
|---------|------|--------|
| **Filter** | text input | Enter a value to filter tree nodes by name. Click the **×** button to clear. |
| **Expand All** | expand icon | Expands all collapsed tree nodes |
| **Collapse All** | collapse icon | Collapses all tree nodes |
| **Sort Ascending** | A→Z | Sorts tree nodes alphabetically A → Z |
| **Sort Descending** | Z→A | Sorts tree nodes alphabetically Z → A |
| **Copy Entity** | copy icon | Copies the selected entity to the clipboard (disabled if nothing selected) |
| **Paste Entity** | paste icon | Pastes the clipboard entity as a child/sibling of the selected node (disabled if clipboard is empty or no target selected) |

### Tree View

The left pane displays all declared entities in a hierarchical tree:

- **Each node** shows the entity icon and name
- **Inherited entities** (from parent formats) appear in a distinct inherited-text style
- **Context menu** (click the **▼** arrow): offers per-entity operations (see below)
- **Deleted/overridden entities** are shown with a disabled overlay

Click a node to select it and load its details in the right pane.

### Entity Operations

Each entity node supports the following operations via its context menu:

| Operation | Description |
|-----------|-------------|
| **Add Root Type** | Adds a new top-level entity to the dictionary (only visible when no node is selected) |
| **Add Sibling** | Adds a new entity at the same hierarchical level as the selected node |
| **Add Child** | Adds a new child entity nested under the selected node |
| **Delete** | Removes the entity from the dictionary |
| **Reset to Parent** | Resets the entity to its inherited definition from the parent format (only visible for overridden entities) |

### Right Pane — Entity Detail

When an entity is selected, the right pane shows an **Entity Detail** panel with fields relevant to that entity type (Name, Type, Description, Members, etc.). Configuration options vary by entity type:

- **Namespace** — name, type, description
- **Sequence** — name, type, description, optional members, extendable flag
- **Enumeration** — name, type, description, named elements with integer values
- **Choice** — name, type, description, exclusive member list
- **Array** — name, type, description, contained type

### Importing This Snippet

In a Docusaurus doc page, import and use this snippet as follows:

```mdx
import DataDictionaryCardDetails from '@site/snippets/assets/data-dictionary-card.md';

<DataDictionaryCardDetails />
```
