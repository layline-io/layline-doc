---
title: Language Reference
sidebar_position: 8
---

# Language Reference

> API documentation and scripting guides for extending layline.io with custom JavaScript and Python code.

## Overview

The Language Reference section provides comprehensive documentation for scripting within layline.io. While many integration challenges can be solved using built-in Assets, scripting processors give you the flexibility to implement custom business logic, data transformations, and complex processing workflows.

layline.io supports multiple scripting approaches, from full-featured JavaScript and Python runtimes to simplified QuickScript for common operations. This section contains the complete API reference, lifecycle documentation, and practical examples for each language.

## Available Scripting Languages

| Language | Description |
|----------|-------------|
| [JavaScript](./javascript/javascript_introduction.md) | Full-featured JavaScript scripting using GraalVM. Supports ECMAScript standards with access to the complete layline.io API for message processing, service integration, and workflow control. |
| [Python](./python/python_introduction.md) | Native Python runtime for data processing and integration. Provides identical capabilities to JavaScript with Pythonic syntax and patterns. |
| [QuickScript](./quickscript/quickscript.md) | Simplified expression language for quick data transformations and conditional logic without writing full scripts. |
| [Macros](./macros.md) | Reusable script fragments that can be shared across multiple processors to avoid code duplication. |

## How to Choose a Scripting Language

| If you need to... | Use this approach |
|-------------------|-------------------|
| Write complex business logic with full control over message processing | [JavaScript](./javascript/javascript_introduction.md) or [Python](./python/python_introduction.md) |
| Access external services and databases from within a Workflow | [JavaScript](./javascript/javascript_introduction.md) or [Python](./python/python_introduction.md) |
| Perform simple data transformations or field mappings | [QuickScript](./quickscript/quickscript.md) |
| Share common functions across multiple scripts | [Macros](./macros.md) |
| Implement custom error handling and retry logic | [JavaScript](./javascript/javascript_introduction.md) or [Python](./python/python_introduction.md) |
| Work with team members who prefer Python over JavaScript | [Python](./python/python_introduction.md) |

## API Reference

Each scripting language has a complete API reference documenting:

- **Processor Classes** — Lifecycle hooks (`onMessage`, `onInit`, `onStreamStart`, etc.) and core processing methods
- **Global Objects** — Access to `message`, `stream`, `processor`, `services`, and other runtime objects
- **Type Definitions** — Interfaces and enumerations for working with messages, ports, and data dictionaries
- **Utility Functions** — Helper methods for common operations like logging, data conversion, and error handling

### JavaScript API

The JavaScript API is organized into:
- [Classes](./javascript/API/classes/) — Core processor and utility classes
- [Interfaces](./javascript/API/interfaces/) — Type definitions for messages, streams, and configuration objects
- [Enumerations](./javascript/API/enumerations/) — Constants for states, error codes, and configuration options
- [Variables](./javascript/API/variables/) — Global variables available in the scripting context

### Python API

The Python API mirrors the JavaScript API with Pythonic naming conventions:
- [Classes](./python/API/classes/) — Core processor classes (note: Python uses `snake_case` for lifecycle methods)
- [Interfaces](./python/API/interfaces/) — Type definitions and protocols
- [Enumerations](./python/API/enumerations/) — Constants and enums
- [Variables](./python/API/variables/) — Global variables and constants

---

import DocCardList from '@theme/DocCardList';

<DocCardList />
