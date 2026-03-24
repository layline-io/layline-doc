---
title: Proxy Service
description: Proxy Service Asset. Use this to proxy requests to another service with optional authentication.
tags:
  - service
  - proxy
---

import Testcase from '../../snippets/assets/_asset-service-test.md';

# Proxy Service

## Purpose

Define a Proxy Service. The Proxy Service acts as a relay or gateway to another service (the "Remote service") — adding authentication credentials and routing requests to one or more remote URLs.

It is useful when:

- A downstream service requires fixed credentials that should not be exposed in individual processors
- Requests need to be routed to one of several remote URLs (load balancing or failover)
- Authentication tokens or passwords need to be centrally managed and inherited by child projects

:::info
The Proxy Service does **not** provide built-in functions. It is a configuration wrapper that enriches requests to the referenced Remote service with the configured credentials and URL list.
:::

## Configuration

### Name & Description

* **`Service Name`** : Name of the Asset. Spaces are not allowed in the name.

* **`Service Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it.
Click to expand and then click to follow, if any.

### Required Roles

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles
configured, then you **can** restrict use of this Asset to those Nodes with matching roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all
Nodes (no restriction).

### Proxy Settings

* **`Remote service`** : The name of the service to proxy to. This is the target service that will receive the proxied requests. Leave empty to use the value inherited from a parent project.

* **`User`** : Username to include in proxied requests. Leave empty to use the value inherited from a parent project.

* **`Password`** : Password to include in proxied requests. Stored as a secret. Leave empty to use the value inherited from a parent project.

* **`Remote urls`** : List of remote URLs to proxy to. Each URL is entered on a separate line. When multiple URLs are provided, requests are routed to one of them (behaviour depends on the target service configuration).

To add a URL, click **Add URL** and enter the URL in the text field. To remove a URL, click the remove button next to it. URLs can also be reset to parent values if inherited from a parent project.

<Testcase></Testcase>
