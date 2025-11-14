# Counter

Represents a counter that can be incremented or decremented.
This class cannot be instantiated directly, but is obtained through the metrics.getCounter method.

## Properties

### count

> **count**: `int`

The current count value.
Same as [getCount](#getcount).

#### Example

```python
myCounter = metrics.getCounter("Counter.Signals.*.MyCounter")
print(myCounter.count)  # Output: 0 (or whatever the initial value is)

myCounter.increment()
print(myCounter.count)  # Output: 1
```

## Methods

### decrement()

> **decrement**(value: int = 1) -> 'Counter'

Decrements the counter by the specified value or by 1 if no value is provided.

#### Parameters

- **value** (int, optional): The value to decrement by. Defaults to 1 if not specified.

#### Returns

The Counter instance for method chaining.

#### Example

```python
myCounter = metrics.getCounter("Counter.Signals.*.MyCounter")
myCounter.increment(10)  # Set initial value to 10

# Decrement by 1
myCounter.decrement()
print(myCounter.count)  # Output: 9

# Decrement by a specific value
myCounter.decrement(3)
print(myCounter.count)  # Output: 6

# Method chaining
myCounter.decrement(2).decrement()
print(myCounter.count)  # Output: 3
```

### getCount()

> **getCount**() -> int

Returns the current count value.
Same as accessing the [count](#count) property directly.

#### Returns

The current count value.

#### Example

```python
myCounter = metrics.getCounter("Counter.Signals.*.MyCounter")
myCounter.increment(5)

currentCount = myCounter.getCount()
print(currentCount)  # Output: 5
```

### increment()

> **increment**(value: int = 1) -> 'Counter'

Increments the counter by the specified value or by 1 if no value is provided.

#### Parameters

- **value** (int, optional): The value to increment by. Defaults to 1 if not specified.

#### Returns

The Counter instance for method chaining.

#### Example

```python
myCounter = metrics.getCounter("Counter.Signals.*.MyCounter")

# Increment by 1
myCounter.increment()
print(myCounter.count)  # Output: 1

# Increment by a specific value
myCounter.increment(5)
print(myCounter.count)  # Output: 6

# Method chaining
myCounter.increment(2).increment(3)
print(myCounter.count)  # Output: 11
```
