# Metrics

Abstract class representing a metrics system.
Provides methods to interact with various types of metrics like counters.
This class should not be instantiated directly.
Instead, use the internal constant [metrics](../variables/metrics.md) to access the methods.

## Methods

### getCounter()

> `static` **getCounter**(`name`): [`Counter`](Counter.md)

Retrieves a counter metric by name.
A counter is a metric that can be incremented or decremented to track counts.
You access it using the internal constant [metrics](../variables/metrics.md).

#### Parameters

##### name

`string`

The name of the counter metric.

#### Returns

[`Counter`](Counter.md)

A Counter instance associated with the given name.

#### Example

```ts
// Retrieve a counter named 'Counter.Workflow.*.Instances'
const signalCount = metrics.getCounter('Counter.Signals.*.MyCounter');

// Increment the counter by 1
signalCount.increment();

// Decrement the counter by 1
signalCount.decrement();
```
