---
title: Using Artificial Intelligence in Workflows
description: Learn how to use layline-io's artificial intelligence .
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';

## Synopsis

In layline.io we try to make it as easy as possible to use artificial intelligence in your Workflows.
This includes both training and using AI models.

## Concept

Machine learning is a method of data analysis that automates analytical model building.
It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.

Machine learning algorithms are often categorized as supervised or unsupervised.

### Supervised vs. Unsupervised
Supervised machine learning algorithms can apply what has been learned in the past to new data using labeled examples to predict future events.
Starting from the analysis of a known training dataset, the learning algorithm produces an inferred function to make predictions about the output values.
The system is able to provide targets for any new input after sufficient training.
The learning algorithm can also compare its output with the correct, intended output and find errors in order to modify the model accordingly.

In contrast, unsupervised machine learning algorithms are used when the information used to train is neither classified nor labeled.
Unsupervised learning studies how systems can infer a function to describe a hidden structure from unlabeled data.
The system doesn’t figure out the right output, but it explores the data and can draw inferences from datasets to describe hidden structures from unlabeled data.

---

In layline.io for the moment we support only supervised learning.

This feature is still in its infancy, but growing fast.
For starters, we started implementing [Waikato Environment for Knowledge Analysis](https://www.cs.waikato.ac.nz/~ml/weka/ "Waikato Environment for Knowledge Analysis") (Weka).
Weka is a collection of machine learning algorithms for data mining tasks developed and provided by the Waikato University, New Zealand.

It mainly contains classification machine learning algorithms which have been widely adopted by others.

Over time, we will add more AI frameworks and features to layline.io.

### How supervised learning works in a nutshell

#### 1. Training
Supervised learning is a process of providing input data as well as correct output data to the machine learning model.
The aim of the model is to map the input to the output.
The model is trained using the training set of data (1a).
The training set contains input data and the corresponding output data.
The model is trained until it achieves an acceptable level of performance (1b).
This results in a model that can be used to predict the output for a given input (1c).
It is also possible to use an existing model to predict the output for a new input.

![Supervised machine learning train and test](./.03-artificial-intelligence_images/1705920719983.png "Supervised machine learning train and test")

#### 2. Testing
Once the model is trained, it is tested using the test set of data (2a).
The test set contains input data and the corresponding output data.
The model which was created in the training phase is used to predict the output for the test data (2b).
This results in a predicted output (2c).

The predicted output is then compared with the correct output (2d).
The performance of the model is evaluated by calculating the error rate.

If the error rate reaches an acceptable level, the model is ready to be used for prediction. 

### How this works in layline.io

In layline.io the process is basically the same
* You provide a training set of data
* You train a model
* You provide a test set of data
* You test the model
* You use the model to predict the output for new input data

Results analysis is not yet supported, however.
(We recommend using 3rd party tools to analyze the results of your AI models (e.g. [kaggle](https://www.kaggle.com/ or for Weka use their [desktop application](https://waikato.github.io/weka-wiki/downloading_weka/)).)

You can train and use AI models in layline.io in 3 steps:

#### 1. Create the AI Model Resource

The [AI Model Resource](/docs/assets/resources/asset-resource-ai-model) is used to define the technical details of the AI model.
You should create this resource before you start creating the Workflow.

![](./.03-artificial-intelligence_images/1705935659227.png "AI Model Resource")

In this resource you define things like:
* The AI algorithm to be used (e.g. _Weka J48_)
* The input attributes which are used to train the model
* Settings specific to the selected AI algorithm

This resource is used by the AI Training Asset to train the AI model and by the AI Classifier Asset to use the model to infer the result.
It is later referenced by both the [AI Training Asset](/docs/assets/processors-flow/asset-flow-ai-trainer) and the [AI Classifier Asset](/docs/assets/processors-flow/asset-flow-ai-classifier).

#### 2. Create a Training Workflow

In the first step, you create a Workflow which will be used to train your AI model based on a set of training data.

![Training Workflow](./.03-artificial-intelligence_images/1705930468563.png "Training Workflow")

The result is a trained AI model that can be used in a production Workflow in which data needs to be inferred from the input and the model.

At the center of the Workflow is a [AI Training Processor](/docs/assets/processors-flow/asset-flow-ai-trainer) which is used to train the AI model.
Based on the incoming training data, the AI Training Asset will train the AI model and store it in the [AI Model Storage](/docs/concept/operations/cluster#ai-storage).

![](./.03-artificial-intelligence_images/1705936281980.png "AI Storage")

Each time the Workflow is executed, the AI Training Asset will train the AI model again.
This is useful if you want to retrain your AI model based on new training data.
A new version of the model will be stored in the AI Model Storage each time you train it.

Alternatively, you can also use the [AI Model Storage](/docs/concept/operations/cluster#ai-storage) to import and store a model that was trained outside of layline.io.
Once imported, you can use that model to infer data in a production Workflow.

#### 3. Create a Production Workflow

To use the trained model, you create a production Workflow in which you want to infer data based on the input and the model.

![](./.03-artificial-intelligence_images/1705935241883.png "AI Production Workflow")

At the center of the Workflow is a [AI Classifier Processor](/docs/assets/processors-flow/asset-flow-ai-classifier) which is used to infer data based on the input and the referenced AI model.
The AI Classifier Processor will load the AI model from the [AI Model Storage](/docs/concept/operations/cluster#ai-storage) and use it to come up with the data based on the input parameters.

#### 4. That's it

You have now created:
* An AI Model Resource which is used to define the technical details of the AI model
* A Workflow which is used to train your AI model based on a set of training data
* A Workflow which is used to infer data based on the input and the model

#### One more thing: AI Service

In addition to this, you can also define an AI Service which you can use to access the AI Model Store within a [Javascript Asset](/docs/assets/processors-flow/asset-flow-javascript).

![](./.03-artificial-intelligence_images/1705936929043.png)

The Service provides a number of functions which allow you to train the model and/or use the model to infer results from it by providing the necessary parameters. 

## Further resources

* [AI Model Resource](/docs/assets/resources/asset-resource-ai-model)
* [AI Training Asset](/docs/assets/processors-flow/asset-flow-ai-trainer)
* [AI Classifier Asset](/docs/assets/processors-flow/asset-flow-ai-classifier)
* [AI Service](/docs/assets/processors-flow/asset-flow-javascript#ai-service)
* [AI Model Storage](/docs/concept/operations/cluster#ai-storage)

---

<WipDisclaimer></WipDisclaimer>


