---
title: Alarm Center
description: Monitor, manage, and configure alarms for your layline.io cluster.
sidebar_position: 1
slug: alarm-center
---

# Alarm Center

The **Alarm Center** is the central place to monitor, manage, and configure alarms for your layline.io cluster. It lives under **Operations → Cluster → Alarm Center** and is organized into six tabs that cover the full alarm lifecycle — from active alerts to the configuration of where and how those alerts are delivered.

## What are alarms?

Alarms are notifications raised by the cluster when something needs your attention. This can include:

- Engine or node errors
- Workflow failures
- Resource exhaustion
- Connection issues
- Any condition explicitly configured to raise an alarm

Each alarm has a **severity** (`Error`, `Warning`, or `Info`), a **name** that describes what happened, and a **node** that tells you where it originated. Alarms can be **confirmed** by an operator to signal "I have seen this," or they can be **canceled** automatically when the underlying condition resolves.

## Alarm lifecycle

Understanding the lifecycle helps you use the Alarm Center effectively:

1. **Raised** — The cluster detects a condition and creates an alarm.
2. **Unconfirmed** — The alarm is visible and requires attention. Unconfirmed alarms are shown with a red close icon in the table.
3. **Confirmed** — An operator acknowledges the alarm. Confirmed alarms remain in the list for reference but are marked with a green check.
4. **Canceled** — The condition that caused the alarm is resolved. Canceled alarms are greyed out and can optionally be grouped under the alarm that canceled them.

:::tip
Canceled alarms do not mean they were "deleted." They are still visible (especially when "Group by canceled alarms" is enabled) so you can trace the history of an issue.
:::

## The six tabs

The Alarm Center is divided into six tabs. Each tab has a dedicated documentation page:

| Tab | Purpose |
|-----|---------|
| [**Alarms**](./alarms) | View, filter, confirm, and inspect active and historical alarms. |
| [**Alarm Targets**](./targets) | Configure notification endpoints such as Email (SMTP or MS 365) and Microsoft Teams. |
| [**Target Groups**](./target-groups) | Organize targets into named groups so rules can route to multiple recipients at once. |
| [**Rules**](./rules) | Define regex-based rules that match alarm names and route them to specific targets or target groups. |
| [**Templates**](./templates) | Create plain-text and HTML templates that control the content of alarm notifications. |
| [**Log**](./log) | Inspect the runtime log of the Alarm Center component itself. |

## Typical workflow

If you are setting up alarming for the first time, the recommended order is:

1. **Create Targets** — Define at least one Email or Teams target under **Alarm Targets**.
2. **Create Target Groups (optional)** — If you want to notify multiple people or systems, group targets under **Target Groups**.
3. **Create Rules** — Under **Rules**, write regex patterns that match the alarms you care about and assign them to targets or groups.
4. **Create Templates (optional)** — Customize the message format under **Templates** if the default content is not sufficient.
5. **Monitor Alarms** — Switch to the **Alarms** tab to watch for raised alarms, confirm them, and inspect their details.
6. **Check the Log** — If notifications are not arriving, use the **Log** tab to diagnose target or rule execution issues.

## Navigation

To open the Alarm Center:

1. Select **Operations** from the main navigation.
2. Select the **Cluster** you want to manage.
3. Click **Alarm Center** in the left sidebar or tab bar.

The Alarm Center will open with the **Alarms** tab active by default. Badge counters on the tab labels show:

- **Alarms** — Number of unconfirmed `Error` (red) and `Warning` (orange) alarms.
- **Alarm Targets** — Number of targets currently in an error state.
