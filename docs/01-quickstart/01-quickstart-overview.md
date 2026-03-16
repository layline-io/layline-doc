---
title: Overview
description: Short overview of installation and run options for layline.io.
---

## Getting started with layline.io

Welcome to layline.io. This section helps you get up and running on a single-instance standalone installation — either on your laptop or a standalone server. Distributed cluster setups and container orchestration (e.g. Kubernetes) are covered separately.

If you are new to layline.io, start with [What is layline.io?](what-is-layline-io) to understand what the platform does and who it is for.

### General Prerequisites

#### Hardware Requirements

| Type     | Requirement                                          |
|----------|------------------------------------------------------|
| Platform | Windows: x86 / macOS: x86 or Apple Silicon / Linux: AMD or ARM |
| RAM      | 2 GB minimum                                         |
| Disk     | 350 MB                                               |

#### Browser Requirements

| Browser | Supported versions |
|---------|-------------------|
| Chrome  | Last 10 versions  |
| Firefox | Last 10 versions  |
| Edge    | Last 4 versions   |
| Safari  | Last 7 versions   |
| Opera   | Last 5 versions   |

Mobile browsers are not officially tested. Internet Explorer is not supported.

### Installation options

We provide two ways to get started quickly:

| # | Option                                      | Advantages                                                                                    | Limitations                                                          |
|---|---------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| 1 | [Full local installation](install-local)    | Complete setup · Persistent state · Run multiple versions side-by-side | No pre-installed sample projects (can be imported manually) |
| 2 | [Docker image](install-docker) | No installer required · Pre-installed sample projects · Non-intrusive | Requires Docker · State is not persisted on shutdown |

If you do not have [Docker](https://docs.docker.com/get-docker/) installed, choose **Full local installation**.

### Running layline.io

After a local installation, follow the [start-up instructions](install-local#starting-everything) to launch the Configuration Server and Reactive Engine.

When using the Docker image, both components start automatically — no additional steps required.
