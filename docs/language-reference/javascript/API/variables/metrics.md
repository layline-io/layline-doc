# metrics

> `const` **metrics**: [`Metrics`](../classes/Metrics.md)

Global metrics instance for tracking counters and other metrics across your deployment.

---

## At a Glance

```js
// Get or create a counter
const counter = metrics.getCounter('Counter.Signals.*.MyCounter');

// Increment / decrement
counter.increment();
counter.decrement();

// Increment by a specific amount
counter.increment(5);
```

---

## See Also

- [`Metrics`](../classes/Metrics.md) — Full class reference
