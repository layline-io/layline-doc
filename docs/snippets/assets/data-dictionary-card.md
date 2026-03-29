## Data Dictionary {#data-dictionary-editor}

The Data Dictionary allows you to define custom data structures which can be mapped onto external data types and vice versa. Types are declared in a hierarchical tree of entities — namespaces contain sequences and enumerations, which contain members that map to typed fields.

### UI Layout

The Data Dictionary editor is a split-pane component:

| Pane | Content |
|------|---------|
| **Left** | Entity declaration tree with toolbar |
| **Right** | Entity detail for the selected node |

The split position is adjustable via a drag handle.

![Data Dictionary editor](https://raw.githubusercontent.com/layline-io/layline-doc/main/docs/03-assets/01-workflow-assets/services/.asset-service-dynamo-db_images/05-data-dictionary.png)

### Defining Types — Step by Step

The following walkthrough uses a DynamoDB Service as context, but the same pattern applies whenever the Data Dictionary editor appears.

#### 1. Declare a root type

Click **Declare Root Type** in the toolbar to add a top-level entity to the dictionary.

#### 2. Declare a namespace (optional)

Namespaces group related types. To add one, right-click an existing node and select **Add Sibling**, then set its type to `Namespace`. Namespaces can be reused across a Project — if you assign the same namespace name elsewhere, the elements merge into that namespace.

#### 3. Declare a Sequence or Enumeration under the namespace

Right-click the namespace and choose **Add Child**. Select `Sequence` or `Enumeration` as the element type:

- **Sequence** — an ordered list of typed members; fields are accessed by name (e.g., `MyNamespace.Customer.Name`)
- **Enumeration** — a fixed set of named integer constants

#### 4. Add members

For a Sequence, click **Add Child** on the sequence node to add individual fields. For an Enumeration, add elements with their named integer values.

### Common Entity Fields

| Field | Applies to | Description |
|-------|-----------|-------------|
| **Name** | All | Unique identifier for the entity. Reusing a namespace name from another part of the Project merges the two. |
| **Type** | All | The entity kind: Namespace, Sequence, Enumeration, Choice, Array |
| **Description** | All | Optional free-text description |
| **Extendable Sequence** | Sequence | When checked, layline.io can dynamically extend the member list if incoming data contains undefined fields |
| **Members** | Sequence | Ordered list of typed fields; click **Add Child** to add each one |
| **Elements** | Enumeration | Named integer constants making up the enumeration |

### Advanced Features

- **Inheritance**: Entities inherited from a parent format or resource appear in the tree in a distinct inherited style. Inherited entities are read-only unless you override them.
- **Override**: Click **Reset to Parent** on an overridden entity to restore the inherited definition.
- **Copy/Paste**: Copy a complete entity node and paste it elsewhere in the tree (toolbar buttons). All member definitions travel with it.
- **Filter & Sort**: Use the Filter field to search by name, and the sort buttons to order nodes ascending or descending.

### See Also

- [Data Dictionary Format Asset](/docs/formats/asset-format-data-dictionary) — standalone Data Dictionary asset
- [DynamoDB Service](/docs/assets/01-workflow-assets/services/asset-service-dynamo-db) — Data Dictionary in context of a Service
- [JDBC Service](/docs/assets/01-workflow-assets/services/asset-service-jdbc) — worked example mapping Data Dictionary types to SQL columns
