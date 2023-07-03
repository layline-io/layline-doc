---
title: Connection FTP/SFTP
description: Connection FTP/SFTP
tags:
  - connection
  - ftp
  - sftp

---

# Connection FTP

## Purpose

Defines the connection parameters for an FTP/SFTP endpoint.

### This Asset is required by:

| Asset type | Link                                                |
|------------|-----------------------------------------------------|
| Source     | [FTP Source](/docs/assets/sources/asset-source-ftp) |
| Sink       | [FTP Sink](/docs/assets/sinks/asset-sink-ftp)       |

## Configuration

### Name & Description

![1294e3a1.png](.asset-connection-ftp_images/1294e3a1.png "Name & Description (Connection FTP)")

**`Name`** : Name of the Asset. Whitespaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Required roles

![c2e6ec39.png](.asset-connection-ftp_images/c2e6ec39.png "Required Roles (Connection FTP)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching
roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### FTP Settings

#### Host

![c30f8a5b.png](.asset-connection-ftp_images/c30f8a5b.png "Host Settings (Connection FTP)")

* **`Host`** : Host name of the FTP host, e.g. 'ftp.myhost.com'.

* **`Port`** : FTP port number. Usually 21 for normal FTP connections. 22 for SFTP connections. Please consult with your endpoint-provider for the correct port number.

* **`Max. parallel FTP connections`** : This is the number of maximum parallel connections to an FTP endpoint.
  Entering `5` for example, will allow for 5 concurrent FTP connections from layline.io to your FTP-endpoint.
  Please note that this setting is true for each Reactive Engine Node in the cluster.
  If you are using this Asset in Workflows which are running on separate Reactive Engine Nodes in a Reactive Cluster, then this setting will apply per Reactive Engine Node.

#### Communication

![0f10f17e.png](.asset-connection-ftp_images/0f10f17e.png "Communication (Connection FTP)")

* **`Use SFTP`** : Activate if you want to use the SFTP protocol.

* **`Accept only known hosts`** : Activate this, if you want to enable server validation.
  Ensuring the SSH server is validated is an important issue in SFTP.
  By activating this option, only those hosts which have been previously registered in Secret Management will be allowed.
  You can define them [here](/docs/concept/advanced/secret-management#known-hosts-1).

#### Authentication

For FTP/SFTP, layline.io supports a number of different authentication methods:

![60f3285a.png](.asset-connection-ftp_images/60f3285a.png "Security Settings Authentication (Connection FTP)")

**`Authentication type`**:

**`Credential Type`**: Choice of

* **`User/Password`** : Enter a username & password combination in the fields `Username` and `Password` respectively.
  Tick the `Do not substitute macro terms in password` checkbox if you do not want to have macros (if any) replaced in a password, but rather keep the raw string as the password.
  If - for example - your password is `pass_${env:MYVAR}_word` and you do not want the term `${env:MYVAR}` to be interpreted as a macro and then replaced with the MYVAR environment variable, then tick
  this box to keep the raw string value.

* **`User/Secret`** : Enter a `Username` and select a `Secret` from the drop-down list. If the list is empty, then you need to first [create a secret](/docs/assets/resources/asset-resource-secret) to
  be
  able to assign it here.

  Please [follow this link to "Advanced Concepts"](/docs/concept/advanced/secret-management) to learn about the concept and use of the Security Storage.

* **`Private Key`** : Authentication by public/private key. Enter a `Username` and enter the `Fingerprint` of this private key. You can either enter the value manually, or pick from a list of known
  fingerprints If the list is empty, then you need to first [create a private/public key pair] (/advanced/secret-management#concept) to be able to assign it here.

#### Connection Test Result:

While you are entering and changing Kafka Settings parameters, layline.io frequently tries to connect to the endpoint.
The status of these attempts are displayed at the bottom of the Kafka Settings group box.

![d911654b.png](.asset-connection-ftp_images/d911654b.png "Connection Test Result positive (Connection FTP)")

In case of error, you can hover the mouse over the red output and view what the problem is:

![d57aef44.png](.asset-connection-ftp_images/d57aef44.png "Connection Test Result negative (Connection FTP)")

This usually helps to resolve the issue.

:::info Attention: Connection is not tested between browser and endpoint
Please note that the connection test is not performed between your web browser and the backend.
Connection data is rather sent to the Configuration Server first, which then tries to establish the connection between itself and the endpoint.
In case you run into a connection error, please therefore check whether the endpoint can be reached from the viewpoint of the Configuration Server.

This also does not warrant, that a connection can be established from your deployment on a Reactive Engine, as this will only be evaluated at runtime of the Workflow utilizing this Connection Asset.
The Reactive Engine must be able to reach the configured endpoint, or otherwise connection at runtime will fail.
:::

## Related Topics

### Internal

* [FTP Source](/docs/assets/sources/asset-source-ftp)
* [FTP Sink](/docs/assets/sinks/asset-sink-ftp)
* [Stream Input Processor](/docs/assets/processors-input/asset-input-stream)
* [Stream Output Processor](/docs/assets/processors-output/asset-output-stream)
* [Create and manage secrets](/docs/assets/resources/asset-resource-secret)

---

:::note Can't find what you are looking for?
Please note, that the creation of the online documentation is **Work-In-Progress**. It is constantly being updated.
Should you have questions or suggestions, please don't hesitate to contact us at support@layline.io .
:::

