---
title: Connections
---

# Connections

> Connections define **how to reach external systems** — reusable connection parameters for services, storage, and messaging endpoints.

## What are Connections?

A Connection Asset stores the technical parameters needed to connect to an external system. Unlike Sources and Sinks (which define *what* to read or write), Connections define *how* to reach the system itself:

- **Endpoint configuration** — hostnames, ports, regions, and URLs
- **Authentication** — credentials, tokens, certificates, and OAuth settings
- **Protocol specifics** — connection timeouts, encryption modes, and protocol versions
- **Connection pooling** — reuse and lifecycle management settings

Connections are **referenced by Sources, Sinks, and Services**, allowing you to define connection parameters once and reuse them across multiple Assets.

## Connections vs Sources/Sinks

Understanding the separation helps you build maintainable integrations:

| Connections | Sources / Sinks |
|-------------|-----------------|
| Define **how** to connect (endpoint, credentials) | Define **what** to do (read from, write to) |
| Reusable across multiple Source/Sink | Specific to a particular operation |
| Configure once, reference many times | Configure location and behavior |
| Example: Kafka broker URLs and TLS settings | Example: Topic name, consumer group, offset strategy |

### Benefits of separating Connections

**Define a Connection Asset when:**
- The same external system is used across multiple Sources or Sinks
- You need to centralize credential management for security
- Connection parameters change infrequently compared to operational settings
- You're connecting to shared infrastructure (Kafka clusters, cloud storage, email servers)

**Example workflow:**
1. Create one `Connection Kafka` with your broker URLs and TLS configuration
2. Reference it from multiple `Kafka Source` and `Kafka Sink` Assets
3. When brokers change, update the Connection once — all Sources and Sinks automatically use the new settings

## Connections Overview

| Connection | Purpose | Common Use Case |
|------------|---------|-----------------|
| [AWS](./asset-connection-aws) | Connect to Amazon Web Services | S3, SQS, SNS, Kinesis, EventBridge integration |
| [Email](./asset-connection-email) | Connect to mail servers | SMTP, IMAP, POP3, MS 365 email services |
| [FTP](./asset-connection-ftp) | Connect to FTP/SFTP servers | File transfer with FTP, FTPS, or SFTP |
| [Google Cloud](./asset-connection-google-cloud) | Connect to Google Cloud Platform | GCS buckets and Google Cloud services |
| [Kafka](./asset-connection-kafka) | Connect to Apache Kafka clusters | Stream processing infrastructure |
| [MSGraph](./asset-connection-msgraph) | Connect to Microsoft Graph API | OneDrive, SharePoint, Teams integration |
| [NFS](./asset-connection-nfs) | Connect to NFS shares | Network file system access |
| [SMB](./asset-connection-smb) | Connect to SMB/CIFS shares | Windows file sharing and NAS devices |
| [Virtual File System](./asset-connection-virtual-fs) | Abstracted file system connections | Unified access to multiple storage types |
| [WebDAV](./asset-connection-webdav) | Connect to WebDAV servers | Web-based distributed authoring and versioning |

## Common Configuration Patterns

Most Connection Assets share these configuration sections:

- **Name & Description** — Asset identification and documentation
- **Required Roles** — Restrict usage to specific cluster node roles
- **Endpoint Settings** — Hosts, ports, regions, and connection URLs
- **Authentication** — Credentials, API keys, certificates, or OAuth configuration
- **Advanced Options** — Timeouts, encryption, connection pooling, and protocol-specific settings

## See Also

- [Sources](../sources) — Use Connections to define where data comes from
- [Sinks](../sinks) — Use Connections to define where data goes
- [Services](../services) — Use Connections for database, cache, and API service access
