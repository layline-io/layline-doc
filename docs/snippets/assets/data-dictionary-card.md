## Data Dictionary {#data-dictionary-editor}

The Data Dictionary allows you to define complex data structures which can be mapped onto external data types and vice versa. This is necessary whenever an asset needs to exchange structured data with an external system — for example, when reading from or writing to a database, an HTTP API, a message queue, or any other format that carries typed fields.

Rather than hard-coding external field names and types into your Workflow, you define your own internal data types here. These internal types are then mapped to the external system's fields at the asset level. This means your Workflow scripts work with consistent, self-documenting data structures regardless of which external system the data came from.

### When you need it

Whenever you configure an asset that exchanges structured data — a JDBC Service, a DynamoDB Service, an HTTP endpoint, an MQ message, a database Resource — you use the Data Dictionary to declare the types that represent:

- **Request parameters** — the data your Workflow sends to the external system
- **Result data** — the data the external system returns to your Workflow
- **Intermediate structures** — types that hold data during a transformation

### Entity Types

The Data Dictionary is organized as a tree of typed entities. The available entity types are:

| Entity | Description |
|--------|-------------|
| **Namespace** | Groups related types. Optional. If you reuse a namespace name that already exists in the Project, the two namespaces merge. |
| **Sequence** | An ordered list of typed members. Members are accessed by name, e.g. `MyNamespace.Customer.Name`. |
| **Enumeration** | A fixed set of named integer constants. |
| **Choice** | A type that holds exactly one of several possible member types. |
| **Array** | A sequence of elements of a single contained type. |

### Defining Types — Step by Step

The following walkthrough shows how to build a data structure using the Data Dictionary editor. The example assumes a SQL `customer` table with columns `id`, `name`, and `address` — but the same pattern applies whenever you need to declare types for any asset.

#### 1. Declare a new type

Click **Declare Root Type** in the toolbar to add a top-level entity.

![Declare root type](./.asset-service-jdbc_images/0cd537d7.png "Declare root type (Service JDBC)")

#### 2. Declare a namespace (optional)

Namespaces organize related types. To add one, right-click an existing node and select **Add Sibling**, then set the element type to `Namespace`.

![Declare namespace](./.asset-service-jdbc_images/9182150d.png "Declare namespace (Service JDBC)")

* **`Name`** — The name of the namespace. If a namespace with this name already exists elsewhere in the Project, their contents merge automatically. Otherwise the name must be unique and may not contain spaces.

* **`Type`** — Pick the entity type. For a namespace, select `Namespace`.

* **`Description`** — Optional free-text description.

#### 3. Declare a Sequence under the namespace

Right-click the namespace and choose **Add Child** to add a child element.

![Add child to namespace](./.asset-service-jdbc_images/14576d88.png "Add child to namespace (Service JDBC)")

Click the arrow next to the namespace name and select `Add child`. Then fill in the element details:

![Declare sequence](./.asset-service-jdbc_images/5821cb89.png "Declare customer sequence (Service JDBC)")

* **`Name`** — The name of the element, e.g. `Customer`.

* **`Type`** — Select `Sequence` as the element type. You will add individual fields (members) in the next step.

* **`Extendable Sequence`** — When checked, layline.io can dynamically extend the sequence's member list if incoming data contains fields that are not explicitly defined. Leave unchecked if all fields are known in advance.

#### 4. Add members to the Sequence

With the Sequence selected, click **Add Child** to add individual fields:

![Add sequence members](./.asset-service-jdbc_images/5ad3f74a.png "Add sequence members (Service JDBC)")

Each member maps to a column in the external data source. You can reference any member by its full path — for example, `MyNamespace.Customer.Name` — from your Workflow scripts.

### Common Entity Fields

These fields are available on all entity types:

| Field | Description |
|-------|-------------|
| **Name** | Unique identifier within the namespace. Reusing a namespace name from another part of the Project merges the two. |
| **Type** | The entity kind: Namespace, Sequence, Enumeration, Choice, or Array |
| **Description** | Optional free-text description |
| **Extendable Sequence** | (Sequence only) Allows the member list to be extended dynamically at runtime |
| **Members** | (Sequence) Ordered list of typed fields — click **Add Child** to add each one |
| **Elements** | (Enumeration) Named integer constants making up the enumeration |

### Advanced Features

**Inheritance and Override**  
Entities inherited from a parent format or resource appear in the tree in a distinct inherited style. These are read-only unless overridden. Click **Reset to Parent** on an overridden entity to restore the inherited definition.

**Copy and Paste**  
Use the toolbar buttons to copy a complete entity subtree and paste it elsewhere in the tree. All members and nested entities travel with it.

**Filter and Sort**  
Use the **Filter** field to search entities by name. The sort buttons order nodes ascending or descending alphabetically.

### See Also

- [Data Dictionary Format Asset](/docs/formats/asset-format-data-dictionary) — standalone Data Dictionary asset
- [DynamoDB Service](/docs/assets/01-workflow-assets/services/asset-service-dynamo-db) — Data Dictionary in context of a DynamoDB Service
- [JDBC Service](/docs/assets/01-workflow-assets/services/asset-service-jdbc) — worked example mapping Data Dictionary types to SQL columns
