[//]: # (Precede this section with the header "### Throttling & Failure Handling")

![](./._asset-source-throttling-and-failure_images/1721826342386.png "Throttling & Failure Handling for a Source")

#### Throttling

The following parameters allow to control the maximum number of new stream creations per given time period.

* **`Max. new streams`**: Enter the maximum number of streams this source is supposed to open resp. process within a given time period.
* **`Per`**: Choose a time interval unit for the provided `Max. new streams` number from the drop-down list.

:::info
Configuration values for this parameter are dependent on the use case scenario.
Assuming your data arrives in low frequency cycles these values are negligible.
In scenarios with many objects arriving in short time frames it is recommended to have a closer look on adapting the default values.
:::

#### Backoff Failure Handling

These parameters define the backoff timing intervals for retries in case of failure handling.