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

* **`Password`** : Password to include in proxied requests. This field does **not** accept a plain-text password. Instead, it is a dropdown that lists all secrets defined in your project's [Secret](../resources/asset-resource-secret) assets. Select the named secret you want to use. The secret value is resolved at runtime — it is never stored in clear text in the project configuration. Leave empty to use the value inherited from a parent project.

  To create or manage secrets, see the [Secret Asset](../resources/asset-resource-secret) documentation.

* **`Remote urls`** : List of remote URLs to proxy to. Each URL is entered on a separate line. When multiple URLs are provided, requests are routed to one of them (behaviour depends on the target service configuration).

  To add a URL, click **Add URL** and enter the URL in the text field. To remove a URL, click the remove button next to it. URLs can also be reset to parent values if inherited from a parent project.

### Inheritance

All fields in the Proxy Settings tab support inheritance from a parent project. If this service is part of a Project that extends another Project, fields left empty here will adopt the values from the parent. This allows you to define base proxy configurations in a parent project and override specific values (such as credentials or URLs) in child projects.

## Example — Real-Life Scenario

### Background

Imagine you have a layline.io project that monitors industrial equipment at multiple customer sites. Each site has its own instance of a REST-based monitoring API, all hosted at different URLs, and each API requires HTTP Basic Auth.

Rather than configuring credentials in every processor that calls the API, you centralise the connection details in a Proxy Service. Processors simply reference the Proxy Service and inherit the correct URL and credentials automatically.

### Step 1 — Create a Secret Asset

Before configuring the Proxy Service, create a [Secret Asset](../resources/asset-resource-secret) (e.g., named `SiteA Credentials`). Add a key-value pair such as:

| Key | Value |
|-----|-------|
| `api-password` | `S3cr3tP@ssw0rd!` |

Make sure the Secret is encrypted with the appropriate key for the target cluster.

### Step 2 — Create the Proxy Service

Create a new **Proxy Service** Asset. Fill in:

* **Remote service**: `SiteA Monitoring API`
* **User**: `monitoring-user`
* **Password**: Open the dropdown — you will see `api-password` listed among your project's secrets. Select it.
* **Remote urls**: Add the base URL of the SiteA API, e.g. `https://sitea.example.com/api/v2`

### Step 3 — Reference from a Processor

In a JavaScript Processor or any processor that needs to call the external API, reference the Proxy Service instead of hard-coding credentials. The Proxy Service injects the correct URL and authentication headers into every outgoing request at runtime.

### Result

When the project deploys to the SiteA cluster, the Reactive Engine resolves the `api-password` secret from the Secret Asset and includes it in requests to `https://sitea.example.com/api/v2`. If you later need to deploy the same project to SiteB (with different credentials), you create a separate Proxy Service in the SiteB project — or override individual fields via inheritance — without touching the processor logic.

## Service Testing

<Testcase></Testcase>

## See Also

- [Secret Asset](../resources/asset-resource-secret) — managing encrypted credentials
- [Project Inheritance](../../concept/03-project) — overriding proxy settings via child projects
