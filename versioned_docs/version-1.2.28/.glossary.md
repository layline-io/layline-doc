---
title: Glossary
description: Explanation of terms
---
## Glossary

### Configuration Server

### Reactive Engine

### Configuration Center


```mermaid
erDiagram
    PROJECT ||--o{ WORKFLOWS: "has 1..n"
    WORKFLOWS ||--o{ PROCESSOR : "has 1..n"
    PROJECT ||--o{ ASSET : "has 1..n"
    ASSET ||..|{ PROCESSOR: "can be derived from"
    ASSET ||..|{ ASSET: "can be derived from"
    PROJECT ||--o{ PROCESSOR : "has 1..n"
```

### Project

### Workflow

### Asset

### Asset Class

### Asset Type

What is an asset.

### Processor Instance

### Deployment Asset

### Reactive Engine

### Reactive Engine Cluster or simply Cluster

### Node

### Event / Message

## UI Elements

### Asset Viewer
### Workflow Viewer
