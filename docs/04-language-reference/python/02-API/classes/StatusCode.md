# StatusCode

## What
StatusCodes are defined by creating a **Status Asset** within your Project.
Within this Asset you can create one or more **Vendors** which in turn may have a number of `Status` entries.

Each of those Status entries has the following structure:
* ID: A unique number
* Logical name: A name which uniquely identifies a Status, e.g. `FIELD_UNKNOWN`
* Language: One of the supported language codes, e.g. `en`
* Message: The actual Status message. The message may contain placeholders, e.g. `The field with name %1 is unknown`.
  In this example, the placeholder `%1` is filled with the respective value when creating the *Status* using method [Status.create](Status.md#create).

A StatusCode represents a single entry in the Status Asset.
They are attached to [Vendor](Vendor.md) objects.

## How to use

You typically do not create StatusCodes directly. Instead, you access them via the global `statusRegistry` object.
Therein you access the `vendors` list which includes all defined StatusCodes for the specific vendor.

## Properties

### code

> **code**: int

This is the number code that you have defined in the "**Resource Status Definition Asset**".
For example, `11` for `FIELD_UNKNOWN` or 42 for `ILLEGAL_VALUE`, or whatever you have defined.

#### Example

```python
# You can access all defined StatusCodes via the global statusRegistry object.
# The following will return a list of all defined StatusCodes for specific vendor:

status_codes_for_vendor_LAY = statusRegistry.vendors[0].statusCodes

# This returns a list of all defined StatusCodes for the vendor with index 0.
# Index 0 is reserved and pre-filled by internal vendor "LAY" (layline.io).
# You define additional vendors and status codes in the "**Resource Status Definition Asset**".

# To return the code of the first status code for the vendor with index 0:

code = statusRegistry.vendors[0].statusCodes[50].code  # Returns `251`
```

### message

> **message**: str

This is the message that you have defined in the "**Resource Status Definition Asset**".
The message may contain placeholders, e.g. `The field with name %1 is unknown`.

#### Example

```python
# You can access all defined StatusCodes via the global statusRegistry object.
# The following will return a list of all defined StatusCodes for specific vendor:

status_codes_for_vendor_LAY = statusRegistry.vendors[0].statusCodes

# This returns a list of all defined StatusCodes for the vendor with index 0.
# Index 0 is reserved and pre-filled by internal vendor "LAY" (layline.io).
# You define additional vendors and status codes in the "**Resource Status Definition Asset**".

# To return the message of the status code at index 50 for the vendor with index 0:

message = statusRegistry.vendors[0].statusCodes[50].message  # Returns `merge conflict at node %1`
```

### vendor

> **vendor**: [Vendor](Vendor.md)

This returns the [Vendor](Vendor.md) object which is associated with this StatusCode as defined in the "**Resource Status Definition Asset**".

#### Example

```python
# You can access all defined StatusCodes via the global statusRegistry object.
# The following will return a list of all defined StatusCodes for specific vendor:

status_codes_for_vendor_LAY = statusRegistry.vendors[0].statusCodes

# This returns a list of all defined StatusCodes for the vendor with index 0.
# Index 0 is reserved and pre-filled by internal vendor "LAY" (layline.io).
# You define additional vendors and status codes in the "**Resource Status Definition Asset**".

# To return the vendor of the status code at index 50 for the vendor with index 0:

vendor = statusRegistry.vendors[0].statusCodes[50].vendor  # Returns `Vendor` object
```
