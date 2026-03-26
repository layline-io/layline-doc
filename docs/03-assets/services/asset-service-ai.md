---
title: AI Service
description: AI Service Asset. Expose one or more trained AI models as callable service endpoints so that Workflows or external clients can send classification requests.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# AI Service

## Purpose

The **AI Service** exposes one or more trained AI models as callable service endpoints. Workflows or external clients can send requests to the endpoint, passing input data for classification. The service loads the trained model from AI Storage, runs inference, and returns the result.

An AI Service acts as the bridge between a trained model (stored in AI Storage after a training run) and the outside world. It is used when you want to classify individual records through a service call rather than as part of a streaming pipeline.

## Prerequisites

- One or more **AI Model Resources** defining the model type, input/output schema, and hyperparameters
- One or more **trained models** stored in AI Storage (trained by an [AI Trainer](../processors-flow/asset-flow-ai-trainer))
- Optionally, a **Data Dictionary** with attributes defined for the service request and response parameters

:::tip
If you are not familiar with the AI workflow in layline.io, read [Using Artificial Intelligence in Workflows](../../concept/advanced/artificial-intelligence) first.
:::

## Configuration

### Name & Description

**`Name`** — Name of the Asset. Spaces are not allowed.

**`Description`** — Free-text description of this service.

### Required roles

If you are deploying to a Cluster with Reactive Engine Nodes that have specific Roles configured, you can restrict use of this Asset to those Nodes with matching roles. Leave empty to match all Nodes (no restriction).

### AI Service Settings

**`Data dictionary namespace for the service parameters`** — The Data Dictionary namespace used to define the request and response parameters for this service. Supports [macros](../../language-reference/macros) for per-environment values.

#### AI Models

The AI Models table lists the models this service exposes. Each row maps a logical parameter name to an AI Model Resource and a trained model version in AI Storage.

Click **+ Add model** to add a row:

| Column | Description |
|--------|-------------|
| **Logical name** | The parameter name exposed to service callers. Callers pass input data using this name. |
| **Model** | Reference to an **AI Model Resource** in the Project — defines the input/output schema and algorithm type. Select from the filtered list of AI Model Resources. |
| **Trained model** | The path in AI Storage where the trained model is stored (e.g., `models/usage-classifier`). Append `:<version>` for a specific version (e.g., `models/usage-classifier:3`) or `:latest` for the most recent version. |

<div className="frame">

![AI Service Settings — data dictionary namespace and AI Models table](.asset-service-ai_images/ai-service-settings.png)

</div>

## Behavior

### Service requests

When a request arrives at the AI Service endpoint:

1. The service validates the request payload against the Data Dictionary namespace
2. It looks up the trained model path for each logical name in the request
3. It loads the corresponding trained model from AI Storage
4. It runs inference and returns the classification result

### Model versioning

Each training run of the same model path creates a new version in AI Storage. Use `:latest` to always use the most recent version, or specify `:<version-number>` to pin to a known version.

### Inheritance

All settings are inheritable — define base configuration on a parent AI Service and override specific logical names or model references on child instances.

## Example

An AI Service exposes a trained credit scoring model for use by external callers.

**Step 1 — Prerequisites:**

- AI Model Resource: `AI-Model-J48` (Weka J48, defines input attributes and class attribute)
- Trained model in AI Storage: `models/usage-classifier:latest` (latest version)

**Step 2 — Configure the AI Service:**

| Setting | Value |
|---------|-------|
| Name | `CreditScoringService` |
| Data dictionary namespace | `CreditScore` |
| Logical name | `CreditScoreGerman` |
| Model | `AI-Model-J48` |
| Trained model | `models/usage-classifier:latest` |

**Step 3 — Test the service:**

Use the **Test** tab in the Service Editor to create test cases and send requests to the service endpoint. Configure a test case with the input data matching the Data Dictionary namespace (`CreditScore`). Execute the test to verify the service returns the correct classification result.

**Step 4 — Invoke at runtime:**

At runtime, callers send HTTP requests to the service endpoint. The request payload must include the input attributes defined in the Data Dictionary namespace. The service loads the trained model from AI Storage, runs inference, and returns the predicted class label in the response.

## See Also

- [AI Trainer](../processors-flow/asset-flow-ai-trainer) — train and store models in AI Storage
- [AI Classifier](../processors-flow/asset-flow-ai-classifier) — use a trained model directly within a Workflow stream
- [AI Model Resource](../resources/asset-resource-ai-model) — define the model specification used for training and by this service
- [Using Artificial Intelligence in Workflows](../../concept/advanced/artificial-intelligence) — conceptual overview of supervised learning in layline.io

---

<WipDisclaimer></WipDisclaimer>
