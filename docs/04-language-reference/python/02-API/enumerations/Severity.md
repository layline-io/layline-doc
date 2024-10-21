# Enumeration: Severity

Enumeration for use of Severity levels in [Message](../classes/Message)

Example use:
```python
# Adding a severity status to a message:
if error:
    message.addStatus(Severity.ERROR, Status.create(VENDOR, 'ILLEGAL_VALUE', value_string))
```

## Enumeration Members

### ERROR

> **ERROR**: 2

### FATAL

> **FATAL**: 3

### INFO

> **INFO**: 0

### WARNING

> **WARNING**: 1

## Usage

In Python, this enumeration would typically be implemented using the `Enum` class from the `enum` module. Here's how it might be defined:

```python
from enum import IntEnum

class Severity(IntEnum):
    INFO = 0
    WARNING = 1
    ERROR = 2
    FATAL = 3
```

You can then use it in your code like this:

```python
from severity import Severity

# Using the enumeration
current_severity = Severity.ERROR

# Comparing severity levels
if current_severity >= Severity.ERROR:
    print("This is a high severity issue!")

# Switch-case equivalent using a dictionary
severity_actions = {
    Severity.INFO: lambda: print("Info message"),
    Severity.WARNING: lambda: print("Warning message"),
    Severity.ERROR: lambda: print("Error message"),
    Severity.FATAL: lambda: print("Fatal error message"),
}

# Perform action based on severity
severity_actions[current_severity]()
```

This implementation allows for easy comparison of severity levels and provides a type-safe way to work with severity in your Python code.
