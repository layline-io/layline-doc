---
title: Filter & Routing
description: Filter & Routing Asset. Use this to filter unwanted events and/or route events based on content.
tags:
  - filter
  - route
  - quickscript
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';
import AssetDependency from '/docs/snippets/assets/_asset-dependency.md';
import AssetConditions from '/docs/snippets/assets/_asset-conditions.md';
import FailureHandling from '/docs/snippets/assets/_failure-handling-flow.md';
import InputPorts from '/docs/snippets/assets/_input-ports.md';
import OutputPorts from '/docs/snippets/assets/_output-ports.md';

# Filter & Routing Flow Processor

## Purpose

![Filter & Routing Processor (FR Flow Asset)](.asset-flow-filterrouting_images/6f1f14ca.png)

A common task during message stream handling is to filter and/or route messages based on their content.
The Filter & Routing Processor helps to accomplish this task based on simple routing rules which you can edit using the UI.

## Prerequisites

None

## Configuration

### Name & Description

![Name & Description (FR Flow Asset)](.asset-flow-filterrouting_images/91f8dc02.png)

* **`Name`** : Name of the Asset. Spaces are not allowed in the name.

* **`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand
and then click to follow, if any.

### Asset Dependencies

<AssetDependency></AssetDependency>

### Input Ports

<InputPorts></InputPorts>

In the case of this Asset, any message received through one of the Input Ports will be subjected to the rules which will be defined below.

### Output Ports

<OutputPorts></OutputPorts>

The routing rules you define can target any of the Output Ports defined here.

### Filter & Routing Rules

This section is where you can define the actual rules upon which to filter and route message.

![Filter & Routing Beginning (FR Flow Asset)](.asset-flow-filterrouting_images/af4bd9e2.png)

Let's add a rule by clicking on `+ ADD AT END`:

![Filter & Routing Adding Rule (FR Flow Asset)](.asset-flow-filterrouting_images/0410396f.png)

A new rule is added. The details of the rule are represented in the panel to the right

#### Basics

* **`Name`**: The name of the rule. This is just to better distinguish the rules from one another.

#### Rule Name & Type

* **`Rule type`**:  
  There are two different types of rules:
    1. **`Routing Rule`**: Routing rules let you forward messages to a specific Output Port based on a match to the rule.

    2. **`Filter Rule`**: Filter rules let you filter out messages based on a match to the rule.
       Nothing is forwarded to a code. The message is essentially destroyed.

* **`Evaluation mode`**:
  As you can have a list of rules and filters, you can decide how the system should behave when a rule matches the currently evaluated message.

  ![Evaluation mode (FR Flow Asset)](.asset-flow-filterrouting_images/a38faebb.png)

  Pick either of the two options:
    1. **`Stop rule evaluation when this rule matches`**:   
       When this rule matches the message, all **following rules** in the list will be disregarded.
       For example if this rule is a Routing Rule "_R_", and a **subsequent rule** is a Filter Rule "_F_" which would filter the current message and discard it, then that rule "_F_" would not be
       evaluated if this rule "_R_" matches first.

    2. **`Continue rule evaluation when this rule matches`**:  
       When this rule matches, subsequent rules will continue to evaluate.
       In effect, ALL rules will be evaluated on the order of the list.
       Execution of the rule list only ends either when there are no other rules to evaluate or until a rule with the option from above (_Stop rule evaluation when this rule matches_), that does
       match, is fired.
       For example if you have a Routing Rule "_R-1_" and a Routing Rule "_R-2_" which on match output the current message to Output Port "_P-1_" and "_P-2_" respectively.
       In the case that the message matches both rules, then it will be output to both defined ports.

#### Conditions that must be fulfilled

You can choose whether you want none, at least one (OR) or all rules (AND) of the configured conditions condition to be true in order to have a positive outcome of the complete rule:

![Conditions that must be fulfilled (FR Flow Asset)](.asset-flow-filterrouting_images/e025c16d.png)

* **`None`**: The rule will always evaluate to true. No conditions for the rule can be configured.
  Use this setting if you simply want to pass through the message, regardless of any conditions.

* **`At least one`**: At least one of the defined conditions must be met, for the rule to return true.

* **`All`**: All of the conditions have to be met for the rule to evaluate to true.

#### Conditions

<AssetConditions></AssetConditions>

#### Emit Ports

When the rule with its conditions evaluates to true, the message is then forwarded to the Output Ports defined here:

![Emit Ports (FR Flow Asset)](.asset-flow-filterrouting_images/48e8f672.png)

Pick as many Output Ports as you require for your scenario.
If you pick more than one, then the message will be output to all the ports selected.

#### Repeat

You have just defined your first Rule.
Create additional rules as you see fit for your Workflow and scenario.

:::caution Order of Rules matters
As you enter more rules, please recall, that rules are evaluated in the order as presented in the rules list.
If any of the rules follows an `Evaluation Mode` of "_Stop rule evaluation when this rule matches_", and the rule does match a message, then evaluation of all other rules following that respective
rule will not be done.
:::

### Failure Handling

<FailureHandling></FailureHandling>

Processing within a Flow Processor like this one can fail for various reasons.

In this section you can define how the system should behave in case of such problems.

## My filter and routing requirements cannot be met.

If this Filter & Routing Asset is not sufficient because your requirements are based on more complex rules and potentially require additional information to determine what to filter and where to
route, you can always use the [Javascript Flow Processor Asset](/docs/assets/processors-flow/asset-flow-javascript) to freely handle message filtering, routing, and whatever else you plan to do with
the message.


---

<WipDisclaimer></WipDisclaimer>
