---
title: Extension Prometheus
description: Extension Prometheus Asset. Maps layline.io metrics to Prometheus for export and visualization.
tags:
  - extension
  - prometheus
  - metrics
  - monitoring
---

import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';

# Extension Prometheus

## Purpose

Exports layline.io processing metrics to Prometheus. The Prometheus Extension maps internal metric names (defined by your workflow configuration) to the names under which Prometheus will expose them.

Metrics are named using dot notation — all layline.io metric names start with `Counter.` (e.g., `Counter.Source.MySource.Files`). Prometheus converts these dots to underscores in the exported metric name. For example:

```
Counter.Source.MySource.Files  →  io_layline_counter_source_mysource_files
```

The Prometheus Extension is assigned to a [Project](../projects-workflows/project) or an [Engine Configuration](../deployment/asset-configuration-engine) to enable metric export.

:::tip See Also
For a full list of available default metrics and how to configure Prometheus + Grafana, see [Gathering Statistics through Metrics](../../concept/06-advanced/04-prometheus-extension).
:::

## This Asset can be used by:

| Asset type | Link |
|---|---|
| Projects | [Project](../projects-workflows/project) |
| Deployment | [Engine Configuration](../deployment/asset-configuration-engine) |

## Configuration

### Name & Description

<NameAndDescription></NameAndDescription>

### Required Roles

<RequiredRoles></RequiredRoles>

### Prometheus Mappings

A table of mapping rules. Each row defines how one internal metric is named and labelled when exported to Prometheus.

| Column | Description |
|--------|-------------|
| **Match** | A regex pattern that matches the internal metric name to export (e.g., `Counter.Source.*.Files`) |
| **Name** | The name under which Prometheus will expose this metric (e.g., `io_layline_counter_source_files`) |
| **Labels** | One or more key–value label pairs that add dimensions to the exported metric, making it filterable in Prometheus queries |
| **Operations** | Action buttons per row: add a label, delete the mapping, reorder with up/down arrows |

**How Match works:** The regex is evaluated against the full internal metric name. Use `.*` as a wildcard. The first matching row wins — ordering matters when multiple patterns could match the same metric.

**How Labels work:** Labels are key–value pairs (Label Name → Label Value). Both fields accept static strings or variable placeholders derived from the metric name's path segments (e.g., extracting the source name from `Counter.Source.MySource.Files`).

Press **Add Mapping** to add a new row. Press **+** in the Operations column of a row to add label pairs to that mapping.

## Example

Export the file count metric for a source named `OrderFileSource`, adding a label so the metric can be filtered by source name in Prometheus.

**Internal metric:** `Counter.Source.OrderFileSource.Files`

**Match (regex):**
```
Counter\.Source\.OrderFileSource\.Files
```

**Name:**
```
io_layline_counter_source_orderfilesource_files
```

**Labels:**
| Label Name | Label Value |
|------------|-------------|
| `source` | `OrderFileSource` |

**Resulting Prometheus metric:**
```
io_layline_counter_source_orderfilesource_files{source="OrderFileSource"}
```

**What this enables in Prometheus:**

* Query all source file counts: `io_layline_counter_source_*_files`
* Filter to a specific source: `io_layline_counter_source_orderfilesource_files{source="OrderFileSource"}`
* Plot over time in Grafana

**Export URL:** Once the Extension is assigned to a Project or Engine Configuration, metrics are available at:

```
http://<engine-host>:5842/engine/prometheus
```
