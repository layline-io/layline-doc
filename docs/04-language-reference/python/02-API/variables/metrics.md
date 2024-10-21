# Variable: metrics

> **metrics**: Metrics

## What
metrics is an instance of the [Metrics](../classes/Metrics.md) class.
It is automatically created when a deployment is started.
It provides methods to interact with various types of metrics like counters.

## How to use
Please check the [Metrics](../classes/Metrics.md) documentation for more information.

## Example

```python
# Retrieve a counter named 'Counter.Workflow.*.Instances'
signal_count = metrics.getCounter('Counter.Signals.*.MyCounter')

# Increment the counter by 1
signal_count.increment()

# Decrement the counter by 1
signal_count.decrement()
```
