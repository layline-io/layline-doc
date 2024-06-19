---
title: Sink File System
description: Sink File System Asset. Use this to define the technical parameters for a physical File System target.
tags:
  - sink
  - file system
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';


# Sink File System

## Purpose

Defines the outbound connection parameters for a File System sink.

### This Asset can be used by:

| Asset type        | Link                                                                          |
|-------------------|-------------------------------------------------------------------------------|
| Output Processors | [Stream Output Processor](../processors-output/asset-output-stream) |

### Prerequisite

None

## Configuration

### Name & Description

![Name & Description (File System Sink Asset)](./.asset-sink-file_images/1714471110763.png "Name & Description (File System Sink Asset)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### Directories

A File System sink allows the definition of the following two different directories:

1. **Output Directory** : The directory to write output files to.
2. **Temporary Directory** : The directory to write output files to during processing (see description below).

#### Output Directory

![Output Directory (File System Sink](./.asset-sink-file_images/1714471441720.png "Output Directory (File System Sink")

* **`Output Directory`** : The directory to write output files to.
  The path of the directory must be accessible to the Reactive Engine trying to access the File System Sink.
  You can use $\{...\} macros to expand variables defined in [environment variables](../resources/asset-resource-environment).

* **`Output prefix`** : Prefix to add to the filename of the processed file when writing to the output directory.
  E.g. `out_` will add the `out_`-prefix to the beginning of the filename when written to the output directory.

* **`Output suffix`** : Suffix to add to the filename of the processed file after move to the output directory.
  E.g. `_out` will add the `_out`-suffix to the end of the filename when written to the output directory.

* **`Posix attributes`** : Used in Unix environments and allows `chmod` attribute configurations to be applied to the written output file. Either use a numeric pattern like `775` or the 9-digit code `rw-rw-r--`.   

* **`"File already exists"-Handling`** : Define your required handling in case the file already exists in the output-directory.

  ![File exists in output-directory handling](./.asset-sink-file_images/1714482236036.png "File exists in output-directory handling")

  The option containing an archive directory will open an additional window for configuration:

  ![Additional Archive directory configuration](./.asset-sink-file_images/1714482497282.png "Additional Archive directory configuration")

* **`Create sub directories`** : Activating this check-box interprets the configured [Output Directory](#output-directory) as the root directory and 
creates - if applicable - sub directories for writing the files underneath it. The sub directories are either determined by the related Input Source configured with the `Include sub sirectories` option or 
through a Javascript logic that would create sub directories.

* **`Enable housekeeping`** : Allows to apply housekeeping rules for files within the output-directory. You can configure your required options.

  ![Enable Housekeeping](./.asset-sink-file_images/1714485058904.png "Enable Housekeeping")





#### Temporary Directory

![Temporary Directory (File System Sink)](./.asset-sink-file_images/1714477373974.png "Temporary Directory (File System Sink)")

* **`Temporary Directory`** : Before the final output file is written to the output directory defined above, the system will create a temporary file.
  When processing is complete, this temporary file will become the final file and moved to the output directory as defined in [Output Directory](#output-directory).
  When finally written to output, the prefix and suffix defined above will be observed.
  In other words: The temporary prefix and suffix defined below will only be relevant for the duration of writing the temporary file, and then be discarded.
  All temporary files should be automatically removed upon successful processing.
  Should you encounter a temporary file in a temporary directory even though there is no current processing ongoing, then this is likely a residue from a crash which needs to be further investigated.

  The path of the directory must be accessible to the Reactive Engine trying to access the File System Sink.
  You can use $\{...\} macros to expand variables defined in [environment variables](../resources/asset-resource-environment).

* **`Temporary prefix`** : Prefix to add to the filename of the temporary file when writing to the temporary directory.
  E.g. `temp_` will add the `temp_`-prefix to the beginning of the filename when written to the output directory.

* **`Temporary suffix`** : Suffix to add to the filename of the temporary file after move to the temporary directory.
  E.g. `_temp` will add the `_temp`-suffix to the end of the filename when written to the output directory.

## Related Topics

### Internal

* [Stream Output Processor](../processors-output/asset-output-stream)
* [File System Source](../sources/asset-source-file)
---

<WipDisclaimer></WipDisclaimer>
