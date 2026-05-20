---
title: Advanced Concepts
sidebar_position: 6
---

# Advanced Concepts

> Advanced topics for production deployments, security management, and extending layline.io capabilities.

## Overview

This section covers advanced concepts for layline.io deployments. While the Quickstart and Core Concepts sections focus on building basic Workflows and understanding fundamental principles, the topics here address production-grade concerns: managing users across distributed systems, securing sensitive data, monitoring cluster performance, and leveraging artificial intelligence.

These concepts become relevant once you have a solid understanding of layline.io basics and are preparing for or managing production deployments.

## Available Topics

### Infrastructure & Deployment

| Topic | Description |
|-------|-------------|
| [Multi-Node Cluster Setup](./multi-node-cluster-setup.md) | Deploy layline.io across multiple machines with MySQL persistence, dedicated configuration server, and reactive engine clustering. Complete tutorial for production-grade deployments. |
| [User and Role Management](./advanced-user-storage.md) | Manage users and privileges across Configuration Server and Reactive Engine Cluster. Understanding the separation of user stores is essential for multi-environment deployments. |
| [Security Storage](./secret-management.md) | Secure management of keys, certificates, and other security tokens. Covers both Configuration Server and Cluster security storage with different trust models. |

### Observability & Operations

| Topic | Description |
|-------|-------------|
| [Gathering Statistics through Metrics](./prometheus-extension.md) | Export metrics to Prometheus for monitoring cluster health, workflow performance, and custom business metrics via JavaScript. |

### Intelligence & Automation

| Topic | Description |
|-------|-------------|
| [Artificial Intelligence in Workflows](./artificial-intelligence.md) | Train and use AI/ML models within your Workflows using supervised learning algorithms. Includes model training, classification, and prediction. |

## Upcoming Topics

The following advanced topics are planned for future releases:

| Topic | Description |
|-------|-------------|
| Deployment Patterns | Strategies for deploying Workflows including blue-green deployments, canary releases, and rolling updates to minimize downtime. |

## When to Read This

**Read this section when:**

- You're moving from development to production environments
- You need to set up user access controls across multiple teams
- You're configuring TLS/SSL or encryption for data in transit
- You want to monitor cluster performance and health metrics
- You're exploring AI/ML capabilities within your data pipelines
- You're planning a distributed multi-node deployment

**Before reading this section, you should understand:**

- Basic Workflow creation and deployment ([Quickstart](../../quickstart/))
- Core layline.io concepts ([Concepts](../introduction.md))
- How to configure Sources, Sinks, and Processors ([Assets](../../assets/))

