---
title: Source TCP
description: Source TCP Asset. Use this to define the technical parameters for receiving data over TCP.
tags:
  - source
  - tcp
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';

# Source TCP

## Purpose

Defines the parameters for receiving data over a TCP connection.

TCP is a connection-oriented (stateful) protocol — unlike UDP, a TCP connection is established before data transfer begins, and both endpoints maintain state throughout the session. This makes TCP suitable for reliable, ordered data streams where message boundaries need to be preserved.

### This Asset can be used by:

| Asset type | Link |
|---|---|
| Input Processors | [Stream Input Processor](../processors-input/asset-input-stream) |
| Output Processors | [Stream Output Processor](../processors-output/asset-output-stream) |

### Prerequisite

None. The TCP Source defines its own connection parameters directly — no separate Connection asset is required.

## Configuration

### Name & Description

<NameAndDescription></NameAndDescription>

### Required Roles

<RequiredRoles></RequiredRoles>

### Host

* **`Bind host`** : The network interface address on which the TCP Source listens. Leave empty to bind to all interfaces.
* **`Bind port`** : The TCP port number on which to listen for incoming connections.

### Advanced Parameters

* **`Connection backlog`** : Number of pending connections the operating system holds in the queue while waiting for acceptance. Increase this value if many clients connect simultaneously.
* **`Receive buffer size [bytes]`** : Size of the socket's receive buffer in bytes. Set to `0` to use the operating system default. Set to a specific value to control memory usage for high-throughput scenarios.
* **`Idle timeout [sec]`** : Number of seconds after which an idle connection is automatically closed. If `0`, connections are held open indefinitely.

---

<WipDisclaimer></WipDisclaimer>
