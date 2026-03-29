## Data Dictionary Card {#data-dictionary-card}

### Purpose

The **Data Dictionary Card** is a split-pane component used throughout the layline.io SPA wherever a Data Dictionary needs to be configured — in the Data Dictionary Format Asset, Service configurations, and Resource configurations. It provides a visual interface for browsing, adding, editing, and deleting Data Dictionary entity declarations.

### UI Layout

The component is divided into two panes:

| Pane | Content |
|------|---------|
| **Left** | Tree view of entity declarations with a toolbar above |
| **Right** | Entity detail panel — shows the selected entity's fields and configuration options |

The split position is adjustable via a vertical divider.

### Toolbar Controls

The toolbar above the tree pane provides controls for navigating and manipulating the entity tree:

- **Filter** — enter a value in the text field to filter tree nodes by name. Click the **×** button to clear the filter.
- **Expand All** — expands all collapsed tree nodes so the full hierarchy is visible.
- **Collapse All** — collapses all tree nodes to the top level.
- **Sort Ascending** — sorts tree nodes alphabetically A → Z.
- **Sort Descending** — sorts tree nodes alphabetically Z → A.
- **Copy Entity** — copies the selected entity (including all its children) to the clipboard. Disabled if no entity is selected.
- **Paste Entity** — pastes the clipboard entity as a child of the selected target node. Disabled if the clipboard is empty or no target is selected.

### Tree View

The left pane displays all declared entities in a hierarchical tree. Each node shows the entity icon and name. Inherited entities — those that originate from a parent format or resource — appear in a distinct inherited style and are read-only unless overridden. Entities that have been deleted or overridden show a disabled overlay. Click a node to select it and load its details in the right pane.

### Entity Operations

Each entity node exposes a context menu via the **▼** arrow on the right side of the node. The following operations are available:

| Operation | Description |
|-----------|-------------|
| **Add Root Type** | Adds a new top-level entity to the dictionary. Only visible when no node is selected in the tree. |
| **Add Sibling** | Adds a new entity at the same hierarchical level as the selected node. |
| **Add Child** | Adds a new child entity nested under the selected node. |
| **Delete** | Removes the entity and all its children from the dictionary. |
| **Reset to Parent** | Resets the entity to its inherited definition from the parent format. Only available for entities that have been overridden. |

### Declaring a Root Type

To start building a data structure, click **Declare Root Type** in the toolbar. A new root-level node will be created with the default type `Namespace`. Click the node to select it and configure it in the right pane.

### Adding Members to a Sequence

Once a sequence type is selected, click **Add Child** in the right pane to declare individual fields. Each member requires:

- **`Name`** — a unique identifier within the sequence
- **`Type`** — the data type of the member (a System type or any type defined in this Data Dictionary or another format)
- **`Optional`** — check this if the member is not required to be present

### Entity Type Reference

Configuration options vary by entity type:

- **Namespace** — name, type, description. A namespace groups related types. If a namespace with the same name already exists elsewhere in the Project, the two namespaces merge automatically.
- **Sequence** — name, type, description, optional members, extendable flag. A sequence is an ordered list of typed members accessed by name.
- **Enumeration** — name, type, description, named elements with integer values. An enumeration is a fixed set of named integer constants.
- **Choice** — name, type, description, exclusive member list. A choice type holds exactly one of several possible member types.
- **Array** — name, type, description, contained type. An array is a sequence of elements of a single contained type.
