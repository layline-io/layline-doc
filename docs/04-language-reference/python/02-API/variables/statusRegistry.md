#  statusRegistry

> **statusRegistry**: StatusRegistry

## What
statusRegistry is an instance of the StatusRegistry class.
It is automatically created when a deployment is started.

## How to use
Please check the [StatusRegistry](../classes/StatusRegistry.md) documentation on the properties and methods available.

## Example

```python
# Access all defined Vendors via the global statusRegistry object
vendors = statusRegistry.vendors

# Access the StatusCodes for the first vendor (index 0)
status_codes_for_vendor = statusRegistry.vendors[0].statusCodes

# Get the code of a specific StatusCode (e.g., index 50) for the first vendor
code = statusRegistry.vendors[0].statusCodes[50].code

# Get the message of a specific StatusCode (e.g., index 50) for the first vendor
message = statusRegistry.vendors[0].statusCodes[50].message

# Get the Vendor object associated with a specific StatusCode
vendor = statusRegistry.vendors[0].statusCodes[50].vendor
```
