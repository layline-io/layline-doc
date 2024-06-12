---
title: Source Http
description: Source Http Asset. Use this to define the technical parameters for a Http source connection.
tags:
  - source
  - http
  - request
  - response
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';
import NameAndDescription from '/docs/snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '/docs/snippets/assets/_asset-required-roles.md';

# Source Http

## Purpose

Defines the specific source parameters for a Http connected endpoint. 

### This Asset can be used by:

| Asset type       | Link                                                                                           |
|------------------|------------------------------------------------------------------------------------------------|
| Input Processors | [Request-Response Input Processor](/docs/assets/processors-input/asset-input-request-response) |

### Prerequisite

* [Http-Format(s)](/docs/assets/formats/asset-format-http)

## Configuration

### Name & Description

![Name & Description (Http Source)](./.asset-source-http_images/1715702208038.png "Name & Description (Http Source)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### Format dependencies

Assign 1-n configured [Http-Format(s)](/docs/assets/formats/asset-format-http) that should be handled through the configured Http-Server.
You can assign more than one Http-Format in order to handle multiple "Request-Response"s through the configured Http-Server Port (see next).

![Format dependencies (Http Source)](./.asset-source-http_images/1715763201303.png "Format dependencies (Http Source)")

The configuration of a [Request-Response Input Processor](/docs/assets/processors-input/asset-input-request-response) using this Http Source Asset 
allows the definition of the dedicated format to be processed for a specific Workflow.
 
### HTTP / HTTPS Server

In here you need to define the parameters forming the Http-Server. It is possible to configure your Server as unsecured Http-Server. 
Adding an obtained SSL/TLS certificate within the Https setup ensures that data is exchanged in an encrypted approach.

![Http(s) Server (Http Source)](./.asset-source-http_images/1715766782323.png "Http(s) Server (Http Source)")

Simply start keying in your **`Bind host`** interface address under which your Http(s) Server should be reachable 
and the full dialogue for the detailed configuration will open. 

![Http(s) Server parameters (Http Source)](./.asset-source-http_images/1715767963547.png "Http(s) Server parameters (Http Source)")

* **`Bind port`** : the Port to communicate with your interface address.

* **`Server identity certificate`** : (only in Https configuration) SSL/TSL certificate to enable secure HTTP.

* **`Connection backlog`** : defines the maximum number of connections allowed to wait before the server will refuse them.

* **`Maximum number of connections`** : Configure the limit of connections that will be handled by this Http(s)-Server.

* **`Pipelining limit on a single connection`** : A setting of 1 disables HTTP pipelining, since only one request per connection 
can be "open" (i.e. being processed by the application) at any time. Set to higher values to enable HTTP pipelining. 
This value must be greater than 0 and less or equal 1024.

Please note: configuring an (unsecured) Http-Server provides the same parameter set except for the server identity certificate.

### Logging

![](./.asset-source-http_images/1715771190829.png)

Activating these check-boxes allow investigations through logs made available within the [Sources Operations - Engine State](../../concept/operations/engine-state/sources).
Simply choose your configured Http Source component in the Engine State overview and select the LOG tab.

---

<WipDisclaimer></WipDisclaimer>
