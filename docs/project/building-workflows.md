---
title: Building Workflows
sidebar_position: 3
description: How to build data pipelines by assembling Workflows inside a layline.io Project.
---

# Building Workflows

> A Workflow is a data pipeline defined visually. You build it by placing processors on a canvas, connecting them to define data flow, and configuring each step.

## What Is a Workflow?

A **Workflow** is the executable unit of data processing in layline.io. It defines the complete path data takes from ingestion through transformation to output. Workflows live inside a **Project** and are composed of **Processors** — configurable nodes that perform specific operations on data as it moves through the pipeline.

When you deploy a Project to a Reactive Cluster, you are deploying its Workflows. Each Workflow runs as an independent stream processor, handling data continuously or on demand depending on its configuration.

## The Mental Model

Think of a Workflow as an assembly line:

- **Input** receives raw materials (data) from outside
- **Processing stations** transform, route, inspect, or enrich the materials
- **Output** delivers finished goods to their destination

Unlike a physical assembly line, a Workflow can:
- **Branch** — one input can feed multiple parallel processing paths
- **Route conditionally** — data can be sent down different paths based on its content
- **Merge** — multiple streams can converge into a single output
- **Iterate** — data can loop back for reprocessing when needed

## Workflow Components

Every Workflow is built from three categories of Processors:

| Category | Purpose | Examples |
|----------|---------|----------|
| **Input Processors** | Receive data from external sources | File Input, Kafka Input, HTTP Input |
| **Flow Processors** | Transform, route, or analyze data in flight | Mapping, Router, JavaScript, Filter |
| **Output Processors** | Write data to external destinations | File Output, Kafka Output, Database Output |

A Workflow must have at least one Input and one Output Processor to be valid. Flow Processors are optional but typically form the core processing logic.

## The Workflow Editor

You build Workflows in the **Workflows** sub-tab of an open Project. The editor has three main regions:

<!-- SCREENSHOT: Workflow editor full view showing the three-panel layout: workflow selector toolbar at top, canvas in center, configuration panel on right -->

### 1. Workflow Selector (Top Toolbar)

The toolbar displays the currently open Workflow and provides controls to:

- **Select a different Workflow** — switch between existing Workflows in the Project
- **Add a new Workflow** — create a blank Workflow Asset
- **Delete the current Workflow** — remove the Workflow from the Project

### 2. Canvas (Center Panel)

The canvas is the visual workspace where you assemble your pipeline. It uses a node-and-wire paradigm:

- **Nodes** represent Processors — each node is an instance of an Input, Flow, or Output Processor
- **Ports** are connection points on nodes — input ports (left side) receive data, output ports (right side) emit data
- **Links** are the wires connecting ports — they define the direction of data flow

The canvas supports standard interactions:
- **Drag** to move nodes
- **Click and drag** from a port to create a link to another port
- **Pan** the canvas by dragging the background
- **Zoom** with the mouse wheel or zoom controls

### 3. Configuration Panel (Right Panel)

When you select a Processor on the canvas, the right panel shows its configuration options. This is where you:

- Assign **Source** or **Sink** connections
- Select **Format** definitions
- Configure **processing logic** (mappings, scripts, routing rules)
- Set **execution parameters** (parallelism, error handling)

## Building a Workflow: Step by Step

### Step 1: Create the Workflow Asset

Before adding processors, you need a Workflow Asset to contain them:

1. Open the **Workflows** sub-tab in your Project
2. Click **Add a new Workflow** in the toolbar selector
3. Name the Workflow and confirm

The new Workflow opens on the canvas, empty and ready for processors.

### Step 2: Add Input Processors

Every Workflow starts with data ingestion:

1. Click **Add Processor** in the toolbar
2. Select an Input Processor type (e.g., **Stream Input** for file-based sources)
3. Name the processor instance
4. Choose whether to **create a new Asset** or **use an existing Asset**

**Best practice:** Create processors without Assets first, then configure them. This keeps the canvas uncluttered while you build the structure.

### Step 3: Configure the Input

Select the Input Processor on the canvas to open its configuration panel:

- **Format** — select or create a Format Asset that defines the structure of incoming data
- **Source** — select a Source Asset that defines where data comes from (file path, Kafka topic, HTTP endpoint, etc.)

Without these assignments, the processor cannot receive data.

### Step 4: Add Flow Processors

Flow Processors sit between Input and Output, performing transformations:

1. **Add Processor** → select a Flow Processor type
2. **Connect** the Input Processor's output port to the Flow Processor's input port
3. **Configure** the processing logic in the right panel

Common Flow Processors:

| Processor | When to Use |
|-----------|-------------|
| **Mapping** | Transform record structure, rename fields, compute values |
| **Router** | Send records to different outputs based on conditions |
| **JavaScript** | Custom logic that can't be expressed in other processors |
| **Filter** | Drop records that don't meet criteria |
| **Aggregator** | Group and summarize records over windows |

### Step 5: Add Output Processors

Every data path needs a destination:

1. **Add Processor** → select an Output Processor type
2. **Connect** the upstream processor's output port to the Input port
3. **Configure** the Format and Sink assignments

You can have multiple Output Processors receiving data from the same upstream processor (fan-out) or from different branches of a Router.

### Step 6: Connect and Validate

As you add processors, link them to define data flow:

1. **Click and drag** from an output port to an input port
2. **Route around obstacles** — links can be curved and repositioned
3. **Validate** the Workflow by checking that:
   - Every path starts with an Input Processor
   - Every path ends with an Output Processor
   - No ports are left unconnected (unless intentionally optional)

### Step 7: Save and Test

Save the Project (`Ctrl+S` / `⌘S`) to persist your Workflow. Test it via:

- **Deployment** to a Reactive Cluster
- **Test Cases** in the Tests sub-tab (for testing individual processors)

## Processor Connections: Rules and Patterns

### Connection Rules

- **One-to-many** — one output port can connect to multiple input ports (data fans out)
- **Many-to-one** — multiple output ports can connect to one input port (data merges)
- **No cycles** — Workflows are directed acyclic graphs by default (though advanced patterns can introduce controlled loops via specific processors)

### Common Patterns

**Linear Pipeline:**
```
Input → Mapping → Output
```

**Split and Process:**
```
Input → Router → Output A
            └→ Output B
```

**Enrich and Route:**
```
Input → JavaScript (enrichment) → Router → Output A
                              └→ Output B
```

**Parallel Processing:**
```
         ├→ Flow A → Output A
Input → Router
         ├→ Flow B → Output B
         └→ Flow C → Output C
```

## Relationship to Assets

Workflows and Assets have a dependency relationship:

| Workflow Uses | Asset Provides |
|---------------|----------------|
| Input Processor | Source Asset (where to read), Format Asset (how to parse) |
| Output Processor | Sink Asset (where to write), Format Asset (how to serialize) |
| Flow Processor | Service Assets (external lookups), Resource Assets (configuration) |

When you deploy a Workflow, layline.io automatically includes the Assets it references. If an Asset is shared across multiple Workflows, it is deployed once and referenced by all.

## Relationship to Deployment

A Workflow exists as a definition inside a Project. To run it:

1. **Create a Deployment Asset** that specifies which Workflows to deploy
2. **Assign the Deployment** to a Reactive Cluster
3. **Activate** the Deployment to start the Workflows

Multiple Workflows can be deployed together as part of the same Deployment. They run independently but share the same deployment lifecycle (start, stop, update together).

## Best Practices

**Name processors clearly.** Use descriptive names like `CustomerFileInput` rather than `FileInput1`. This makes the Workflow self-documenting.

**Group related logic.** If you have multiple Flow Processors performing a cohesive transformation, place them near each other on the canvas and consider naming conventions that show the relationship.

**Validate early.** Check that processors are properly configured (Format and Source/Sink assigned) before attempting deployment. Unconfigured processors are highlighted in the UI.

**Use the Tests sub-tab.** For complex Flow Processors, create test cases that verify the processing logic with sample data before deploying to a live cluster.

**Document with layout.** Position processors on the canvas to reflect data flow direction (left-to-right or top-to-bottom). A well-organized canvas is easier to understand and maintain.

## See Also

- [**Your First Workflow**](../quickstart/first-workflow) — step-by-step tutorial building a complete Workflow
- [**Project**](./index) — overview of the Project container and its sub-tabs
- [**Input Processors**](../assets/processors-input) — reference for all Input Processor types
- [**Flow Processors**](../assets/processors-flow) — reference for all Flow Processor types
- [**Output Processors**](../assets/processors-output) — reference for all Output Processor types
- [**Deployment Assets**](../assets/deployment-assets) — how to deploy Workflows to a cluster
