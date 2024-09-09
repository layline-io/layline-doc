# Class: Metrics

Abstract class representing a metrics system.
Provides methods to interact with various types of metrics like counters.
This class should not be instantiated directly.
Instead, use the internal constant [`metrics`](../variables/metrics.md) to access the methods.

## Methods

### getCounter()

> @staticmethod
> **getCounter**(name: str) -> [Counter](Counter.md)

Retrieves a counter metric by name.
A counter is a metric that can be incremented or decremented to track counts.
You access it using the internal constant `metrics`.

#### Parameters

- **name**: str

  The name of the counter metric.

#### Returns

[Counter](Counter.md)

A Counter instance associated with the given name.

#### Example

```python
# Retrieve a counter named 'Counter.Workflow.*.Instances'
signal_count = metrics.getCounter('Counter.Signals.*.MyCounter')

# Increment the counter by 1
signal_count.increment()

# Decrement the counter by 1
signal_count.decrement()
```
