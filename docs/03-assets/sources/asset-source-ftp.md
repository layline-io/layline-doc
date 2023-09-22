---
title: Source FTP
description: Source FTP Asset. Use this to define the technical parameters for an FTP source.
tags:
  - source
  - ftp
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';

# Source FTP

## Purpose

Defines the specific bucket and folder source of a FTP connected endpoint.

### This Asset can be used by:

| Asset type       | Link                                                                       |
|------------------|----------------------------------------------------------------------------|
| Input Processors | [Stream Input Processor](/docs/assets/processors-input/asset-input-stream) |

### Prerequisite

You need:

* [FTP Connection](/docs/assets/connections/asset-connection-ftp)

## Configuration

### Name & Description

![](.asset-source-ftp_images/dfb72d7a.png "Name & Description (FTP Source)")

**`Name`** : Name of the Asset. Spaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Required roles

![](.asset-source-ftp_images/c2e6ec39.png "Required Roles (FTP Source)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching
roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### Polling & Processing

![](.asset-source-ftp_images/874d07cc.png "Polling & Processing (FTP Source)")

FTP is not a stream, but an object based storage source which does not signal the existence of new objects to observers.
We therefore need to define how often we want to look-up (poll) the source for new objects to process.

You can choose between `Fixed rate polling` and `Cron tab style` polling:

#### Fixed rate

Use `Fixed rate` if you want to poll in constant and frequent intervals.

* **`Polling interval [sec]`**: Enter the interval in seconds in which the configured source should be queried for new objects.

#### Cron tab

![](.asset-source-ftp_images/e1e03d17.png "Cron Tab (FTP Source)")

Use `Cron tab` if you want to poll at determined times. This follows the cron tab style conventioni which may be familiar to you.
In all other cases you can read more about crontab and the syntax [here](https://en.wikipedia.org/wiki/Cron).
You can simulate cron settings using [this smart website](https://crontab.guru/).

Examples:

* **[0/2 2 3 4 5](https://crontab.guru/#0/2_2_3_4_5)**: "_At every 2nd minute from 0 through 59 past hour 2 on day-of-month 3 and on Friday in April._"
* **[0 22 * * 1-5](https://crontab.guru/#0_22_*_*_1-5)**: "_At 22:00 on every day-of-week from Monday through Friday._"

#### Polling timeout

The `Polling timeout [sec]` defines the time in seconds to wait until a polling request fails.
Depending on the endpoint and its responsiveness you may want to change this number to something higher or lower.
You should set it high enough, so that you are confident that the endpoint responds under normal operation.

#### Ordering

When listing objects from the FTP source for processing, you can define in what order they should be processed.
Pick one of the following self-explanatory settings:

* `Alphabetically, ascending`
* `Alphabetically, descending`
* `Last modified, ascending`
* `Last modified, descending`

### FTP Connection

![](.asset-source-ftp_images/df31d8ca.png "FTP Connection (FTP Source)")

Select the previously configured [FTP Connection](/docs/assets/connections/asset-connection-ftp) to use for this Source.

### Directories

An FTP source requires the definition of three different directories:

1. **Input Directory** : The directory to read new files from.
2. **Done Directory** : The directory to which read files are moved after reading.
3. **Error Directory** : Files which caused problems during processing are moved to the Error Directory for further analysis.

#### Input Directory

![](.asset-source-ftp_images/28329641.png "Input Directory (FTP Source)")

* **`Input Directory`** : The directory to read files from.
  The path of the directory must be accessible to the Reactive Engine trying to access the FTP source.
  You can use ${...} macros to expand variables defined in [environment variables](/docs/assets/resources/asset-resource-environment).

* **`Filter regular expression`** : Regular expression to filter which files in the directory are pulled.

* **`File prefix regular expression`** : A regular expression filter which is applied to the beginning of a file name.
  E.g. `XYZ.` will lead to only those files read which filename starts with `XYZ` followed by anything.

* **`File suffix regular expression`** : A regular expression filter which is applied to the end of a file name.
  E.g. `.zip` will lead to only those files read which filename ends with `zip` preceded by anything.

* **`Include sub-directories`** : Scan sub-directories to the input directory also.

#### Done Directory

![](.asset-source-ftp_images/f998e9fe.png "Done Directory (FTP Source)")

* **`Done Directory`** : The directory to which files are moved when fully processed.
  The path of the directory must be accessible to the Reactive Engine trying to access the FTP source.
  You can use ${...} macros to expand variables defined in [environment variables](/docs/assets/resources/asset-resource-environment).

* **`Done prefix`** : Prefix to add to the filename of the processed file after move to the done directory.
  E.g. `done_` will add the `done_`-prefix to the beginning of the filename when moved to the done directory.

* **`Done suffix`** : Suffix to add to the filename of the processed file after move to the done directory.
  E.g. `_done` will add the `_done`-suffix to the end of the filename when moved to the done directory.

#### Error Directory

![](.asset-source-ftp_images/4bf00b82.png "Error Directory (FTP Source)")

* **`Error Directory`** : The directory to which files are moved in case of a problem with the file during processing.
  The path of the directory must be accessible to the Reactive Engine trying to access the FTP source.
  You can use ${...} macros to expand variables defined in [environment variables](/docs/assets/resources/asset-resource-environment).

    * **`Error prefix`** : Prefix to add to the filename of the processed file after move to the error directory.
      E.g. `error_` will add the `error_`-prefix to the beginning of the filename when moved to the error directory.

    * **`Error suffix`** : Suffix to add to the filename of the processed file after move to the error directory.
      E.g. `_error` will add the `_error`-suffix to the end of the filename when moved to the error directory.

## Related Topics

### Internal

* [FTP Connection](/docs/assets/connections/asset-connection-ftp)
* [FTP Sink](/docs/assets/sinks/asset-sink-ftp)

### External

* [Cron on Wikipedia](https://en.wikipedia.org/wiki/Cron)
* [Cron editor online from crontab guru](https://crontab.guru/)

## Potential problems

---

<WipDisclaimer></WipDisclaimer>
