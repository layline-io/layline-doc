---
title: Overview
description: Short overview of installation and run options for layline.io.
---
## Getting started with layline.io

Greetings Earthling and a big THANK YOU for your interest in our brainchild: layline.io!

You probably came to this part of the documentation because you are interested in layline.io. If you still need to know more, you should take a look at [What is layline.io?](https://doc.layline.io/docs/concept/introduction) and then return here if you like what you read.

In this part of the documentation we will help you to get started with layline.io on a single-instance standalone installation. That is either on your laptop or another standalone machine. This section will not talk about how to install layline.io in an container orchestration environment such as Kubernetes or in a distributed Cluster (just to name some examples).

### General Prequisites

#### Hardware Requirements

| Type     | Requirement                                         |
| ---------- | ----------------------------------------------------- |
| Platform | Windows: x86 / MacOS: x86 or Mx / Linux: AMD or ARM |
| RAM      | 2GB                                                 |
| Disk     | 350MB                                               |

#### Software requirements


| Type    | Requirement      |
| --------- | ------------------ |
| Chrome  | last 10 versions |
| Firefox | last 10 versions |
| Edge    | last 4 versions  |
| Safari  | last 7 versions  |
| Opera   | last 5  versions |

Mobile browsers are not tested, but will likely work. In general, the web-UI is not designed for or tested for mobile platforms.

Internet Explorer is not supported.


### Installation

We provide two quick options on how you can quickly get started with layline.io:

| # | Option                                                     | Advantage                                                                                    | Disadvantage                                                          |
| --- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1 | [Full local installation](/docs/quickstart/install-local)    | * Complete setup<br />* Persistent state<br />* Run multiple different versions side-by-side | * No pre-installed sample Projects (but you can import them yourself) |
| 2 | [Ready-to-run Docker image](/docs/quickstart/install-docker) | * No need to run an installer<br />* Pre-installed sample Projects<br />* Non-intrusive      | * Requires Docker<br />* Does not persist state or data on shutdown   |

Pick either of the two links in the table. If you do not have [Docker](https://docs.docker.com/get-docker/) installed, or don't know what it is, then you should pick *Full local installation*.

### Running layline.io

When doing a *Full local installation*, the documentation describes how to then [start and run](/docs/quickstart/install-local#starting-everything) layline.io.

When running the Docker image, then all parts of layline.io are automatically started for you and you don't have to do anything to start it.

