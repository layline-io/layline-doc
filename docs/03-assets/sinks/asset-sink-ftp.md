---
title: Sink FTP
description: Sink FTP Asset. Use this to define the technical parameters for an FTP sink.
tags:
  - sink
  - ftp
---

import WipDisclaimer from '/docs/snippets/common/_wip-disclaimer.md';

# Sink FTP

## Purpose

Defines the outbound connection parameters for an FTP sink.

### This Asset can be used by:

| Asset type        | Link                                                                          |
|-------------------|-------------------------------------------------------------------------------|
| Output Processors | [Stream Output Processor](/docs/assets/processors-output/asset-output-stream) |

### Prerequisite

You need:

* [FTP Connection](/docs/assets/connections/asset-connection-ftp)

## Configuration

### Name & Description

![](.asset-sink-ftp_images/969490a2.png "Name & Description (FTP Sink Asset)")

**`Name`** : Name of the Asset. Spaces are not allowed in the name.

**`Description`** : Enter a description.

The **`Asset Usage`** box shows how many times this Asset is used and which parts are referencing it. Click to expand and then click to follow, if any.

### Required roles

![](.asset-sink-ftp_images/c2e6ec39.png "Required Roles (FTP Sink Asset)")

In case you are deploying to a Cluster which is running (a) Reactive Engine Nodes which have (b) specific Roles configured, then you **can** restrict use of this Asset to those Nodes with matching
roles.
If you want this restriction, then enter the names of the `Required Roles` here. Otherwise, leave empty to match all Nodes (no restriction).

### FTP Connection

![](.asset-sink-ftp_images/067b010e.png "FTP Connection (FTP Sink Asset)")

Select the [FTP Connection](/docs/assets/connections/asset-connection-ftp) to use with this Asset.
If it does not exist, you need to create it first.

### Directories

An FTP sink allows the definition of three different directories:

1. **Output Directory** : The directory to write output files to.
2. **Temporary Directory** : The directory to which read files are moved after reading.
3. **Error Directory** : Files which caused problems during processing are moved to the Error Directory for further analysis.

#### Output Directory

![](.asset-sink-ftp_images/910596a7.png "Output Directory (FTP Sink)")

* **`Output Directory`** : The directory to write output files to.
  The path of the directory must be accessible to the Reactive Engine trying to access the FTP Sink.
  You can use ${...} macros to expand variables defined in [environment variables](/docs/assets/resources/asset-resource-environment).

* **`Output prefix`** : Prefix to add to the filename of the processed file when writing to the output directory.
  E.g. `out_` will add the `out_`-prefix to the beginning of the filename when written to the output directory.

* **`Output suffix`** : Suffix to add to the filename of the processed file after move to the output directory.
  E.g. `_out` will add the `_out`-suffix to the end of the filename when written to the output directory.

#### Temporary Directory

![](.asset-sink-ftp_images/fcc6bd49.png "Temporary Directory (FTP Sink)")

* **`Temporary Directory`** : Before the final output file is written to the output directory defined above, the system will create a temporary file.
  When processing is complete, this temporary file will become the final file and moved to the output directory as defined in [Output Directory](#output-directory).
  When finally written to output, the prefix and suffix defined above will be observed.
  In other words: The temporary prefix and suffix defined below will only be relevant for the duration of writing the temporary file, and then be discarded.
  All temporary files should be automatically removed upon successful processing.
  Should you encounter a temporary file in a temporary directory even though there is no current processing ongoing, then this is likely a residue from a crash which needs to be further investigated.

  The path of the directory must be accessible to the Reactive Engine trying to access the FTP Sink.
  You can use ${...} macros to expand variables defined in [environment variables](/docs/assets/resources/asset-resource-environment).

* **`Temporary prefix`** : Prefix to add to the filename of the temporary file when writing to the temporary directory.
  E.g. `temp_` will add the `temp_`-prefix to the beginning of the filename when written to the output directory.

* **`Temporary suffix`** : Suffix to add to the filename of the temporary file after move to the temporary directory.
  E.g. `_temp` will add the `_temp`-suffix to the end of the filename when written to the output directory.

#### Error Directory

![](.asset-sink-ftp_images/27790dc8.png "Error Directory (FTP Sink)")

* **`Error Directory`** : The directory to which files are moved in case of a problem with the file during processing.
  The path of the directory must be accessible to the Reactive Engine trying to access the FTP source.
  You can use ${...} macros to expand variables defined in [environment variables](/docs/assets/resources/asset-resource-environment).

* **`Error prefix`** : Prefix to add to the filename of the processed file after move to the error directory.
  E.g. `error_` will add the `error_`-prefix to the beginning of the filename when moved to the error directory.

* **`Error suffix`** : Suffix to add to the filename of the processed file after move to the error directory.
  E.g. `_error` will add the `_error`-suffix to the end of the filename when moved to the error directory.

### Post Processing

![](.asset-sink-ftp_images/a18799d6.png "Post processing (FTP Sink)")

There are two more settings which you can use to optimize file output:

* **`Delay post processing steps`** : You can ask the system to slow (delay) post-processing steps such as move and delete.
  Enter a number in milliseconds which should be observed before for example moving a temporary file to the output directory and then deleting it from the temporary directory.
  This can prove to be helpful in environments where FTP connections are a little "sensitive", and allow the system to "settle".
  It's something we learned from working with such systems.

* **`Number of retries`** : In addition defining a post-processing delay time, we can define a number of retries, should an FTP-operation fail.
  Again, this is to allow for more robustness in operation as FTP connections can prove to be sensitive at times and ridden with timeouts, etc.
  An optimally connected and tuned FTP sink should not require these settings, but this is often not the case.

## Related Topics

### Internal

* [Stream Output Processor](/docs/assets/processors-output/asset-output-stream)
* [FTP Source](/docs/assets/sources/asset-source-ftp)
* [FTP Connection](/docs/assets/connections/asset-connection-ftp)

## Potential problems

---

<WipDisclaimer></WipDisclaimer>
