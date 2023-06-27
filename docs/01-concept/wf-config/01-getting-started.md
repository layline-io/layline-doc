---
title: Getting started with Workflows
description: Getting started with Workflows
---

## Getting Started

## Download, Installation & Start

In case you haven't installed layline.io yet, then check [here](/quickstart/quickstart-overview.md) for
* where to download 
* how to install, and
* how to start. 

Return here after that.

You should now be able to start the three components post install:
1. Configuration Server
2. Configuration Center
3. Reactive Engine


## Directory Structure

At this point you should have the following directory structure at your installation location:


```
# Linux example
.
└── /usr/
    └── local/
        └── layline/
            ├── bin/
            │   ├── config-server // --> Configuration Server
            │   ├── config-server.vmoptions
            │   ├── ConfigServer // --> UI invoked Configuration Server
            │   ├── ConfigServer.vmoptions
            │   ├── layctl // --> layline Command Line Interface
            │   ├── layctl.vmoptions
            │   ├── reactive-engine // --> Reactive Engine
            │   ├── reactive-engine.vmoptions
            │   ├── ReactiveEngine // --> UI invoked Reactive Engine
            │   └── ReactiveEngine.vmoptions
            ├── config/
            │   ├── config-server/
            │   │   └── application.conf // --> configurattion file for Configuration Server
            │   └── reactive-engine/
            │       └── application.conf // --> configurattion file for Reactive Engine
            ├── jre/
            │   └── .../
            ├── lib/
            │   └── .../
            ├── licenses/
            ├── samples/
            └── templates/
```

