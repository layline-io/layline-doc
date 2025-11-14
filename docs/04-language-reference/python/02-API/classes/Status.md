# Status

## What
The abstract Status class provides methods to create a new Status object based on an existing *Status Code*.

Status codes are defined by creating an **Resource Status Definition Asset** within your Project.
Within this Asset you can create one or more **Vendors** which in turn may have a number of `Status` entries.

Each of those Status entries has the following structure:
* ID: A unique number
* Logical name: A name which uniquely identifies a Status, e.g. `FIELD_UNKNOWN`
* Language: One of the supported language codes, e.g. `en`
* Message: The actual Status message. The message may contain placeholders, e.g. `The field with name %1 is unknown`.
  In this example, the placeholder `%1` is filled with the respective value when creating the *Status* using method [Status.create](#create).

## How to use

Based on the Vendor and the logical status name which you have defined, you can create a new Status.
The `Status` can then be attached to a message or a passed as a result code when rolling back a stream (example).

## Properties

### code

> **code**: int

The code of the Status which was assigned when the Status was created.

#### Example

```python
# Create a new Status
status = Status.create(VENDOR, 42)
# Get the code
c = status.code  # returns 42
```

### message

> **message**: str

The message of the Status which was assigned when the Status was created.
The message may contain placeholders which can be filled with parameters when creating the Status.
Same as [getMessage](#getmessage).

#### Example

```python
# Create a new Status
status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Putin')
# Get the message
m = status.message  # returns "Field with name '%1' contains illegal value '%2'"
```

### parameters

> **parameters**: List[str]

The parameters which were passed when the Status was created.
These parameters are used to fill in placeholders in the message.
Same as [getParameters](#getparameters).

#### Example

```python
# Create a new Status
status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Putin')
# Get the parameters
p = status.parameters  # returns ["LastName", "Putin"]

# In the above, the message placeholders %1 and %2 will be replaced by "LastName" and "Putin".
# So the final message may be "Field with name 'LastName' contains illegal value 'Putin'."
```

### subStatus

> **subStatus**: List[Status]

Returns a list of States which are sub states to the current Status.
Same as [getSubStatus](#getsubstatus).

#### Example

```python
# Get list of States.
status_list = status.subStatus
```

### vendor

> **vendor**: Vendor

The vendor of the Status. See also [Status.getVendor](#getvendor).
Same as [getVendor](#getvendor).

#### Example

```python
# Create a new Status
status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Putin')
# Get the vendor
v = status.vendor  # returns VENDOR
```

### vendorId

> **vendorId**: int

The ID of the [Vendor](#vendor) which is associated with this Status.
Same as [getVendorId](#getvendorid).

#### Example

```python
# Create a new Status
status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Putin')
# Get the vendor
v_id = status.vendorId  # returns 42
```

## Methods

### getCode()

> **getCode**() -> str

Returns the code of a Status.

#### Returns

str - Status code

#### Example

```python
# Get the status code
code = status.getCode()
# Result: '4711'
```

### getMessage()

> **getMessage**() -> str

Returns the uncompiled message of a Status.
If it includes placeholders, these will not be filled.
Same as [message](#message).

#### Returns

str - Status message

#### Example

```python
# Get the status message. Placeholders defined in a Status are not replaced with parameters, if any.
message = status.getMessage()
# Result: "The name is %1, %2."
```

### getParameters()

> **getParameters**() -> List[str]

Returns a list of parameters which may have been passed to the Status upon creation.
See: [create](#create).
Same as [parameters](#parameters).

#### Returns

List[str] - List of Status parameters which were passed when Status was created.

#### Example

```python
# Get list of parameters.
param_list = status.getParameters()
# Result: ["Doe", "John"]
```

### getSubStatus()

> **getSubStatus**() -> List[Status]

Returns a list of States which are sub states to the current Status.

#### Returns

List[Status] - List of States which are sub states to the current Status.

#### Example

```python
# Get list of States.
status_list = status.getSubStatus()
```

### getVendor()

> **getVendor**() -> Vendor

Returns the vendor of a Status.
Same as [vendor](#vendor).

#### Returns

Vendor - VendorInfo structure.

#### Example

```python
# Get list of parameters.
VENDOR_INFO = status.getVendor()
```

### getVendorId()

> **getVendorId**() -> int

Returns the ID of the vendor of a Status.
Same as [vendorId](#vendorid).

#### Returns

int - ID of the vendor of a Status.

#### Example

```python
# Get the vendor ID
vendor_id = status.getVendorId()
# Result: 42
```

### create()

> @staticmethod
> **create**(vendor: Vendor, status_code: str, *args: str) -> Status

Invoke to create a Status.

#### Parameters

- **vendor**: Vendor

  Status messages can be distinguished by vendor. Pass a VendorInfo here. Obtain it with [Status.getVendorByName](#getvendorbyname)

- **status_code**: str

  The `status_code` which must be defined within your "**Resource Status Definition Asset**" of your Project. This code will be used to identify the Status which you want to add.

- ***args**: str

  A variable number of arguments which will be used to fill in the placeholders in the predefined Status message, if any

#### Returns

Status - Instance of newly created Status.

#### Example

```python
# Assume we have - among others - the following status defined using a "**Resource Status Definition Asset**":
# Logical name: "ILLEGAL_VALUE"
# Message: "Field with name '%1' contains illegal value '%2'."

# Get the vendor instance from the list of defined vendors.
# You must have defined the vendor in a "**Resource Status Definition Asset**".
# The string passed in `Status.getVendorByName('myVendorLongName')`
# is the long name of the Vendor definition within that Asset.
# Check documentation for "**Resource Status Definition Asset**" for more info.
VENDOR = Status.getVendorByName('MyVendorLongName')

# Create the Status
STATUS = Status.create(
     VENDOR,
     'ILLEGAL_VALUE',
     'LastName',
     'Putin'
)

# In the above, the message placeholders %1 and %2 will be replaced by "LastName" and "Putin".
# So the final message is "Field with name 'LastName' contains illegal value 'Putin'."
```

### getVendorById()

> @staticmethod
> **getVendorById**(id: int) -> Vendor

Get the vendor instance from the list of defined vendors by using the vendor's ID.
You must have defined the vendor in a "**Resource Status Definition Asset**".
The number passed in `Status.getVendorById(1)` is the ID of the Vendor definition within that Asset.
Check documentation for "**Resource Status Definition Asset**" for more info.

#### Parameters

- **id**: int

  The ID of the vendor as defined in the specific "**Resource Status Definition Asset**".

#### Returns

Vendor - Instance of Vendor

#### Example

```python
VENDOR_INFO = Status.getVendorById(1)  # Returns the Vendor instance for the Vendor with the ID 1
```

### getVendorByName()

> @staticmethod
> **getVendorByName**(vendor_long_name: str) -> Vendor

Get the vendor instance from the list of defined vendors by using the vendor's long name.
You must have defined the vendor in a "**Resource Status Definition Asset**".
The string passed in `Status.getVendorByName('myVendorLongName')`
is the long name of the Vendor definition within that Asset.
Check documentation for "**Resource Status Definition Asset**" for more info.

#### Parameters

- **vendor_long_name**: str

  The long name of the vendor as defined in the specific "**Resource Status Definition Asset**".

#### Returns

Vendor - Instance of Vendor

#### Example

```python
VENDOR_INFO = Status.getVendorByName('MyVendorLongName')
```

### getVendorByShortName()

> @staticmethod
> **getVendorByShortName**(name: str) -> Vendor

Get the vendor instance from the list of defined vendors by using the vendor's short name.
You must have defined the vendor in a "**Resource Status Definition Asset**".
The string passed in `Status.getVendorByShortName('myVendorShortName')`
is the short name of the Vendor definition within that Asset.
Check documentation for "**Resource Status Definition Asset**" for more info.

#### Parameters

- **name**: str

  The short name of the vendor as defined in the specific "**Resource Status Definition Asset**".

#### Returns

Vendor - Instance of Vendor

#### Example

```python
VENDOR_INFO = Status.getVendorByShortName('MyVendorShortName')
```
