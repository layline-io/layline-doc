---
id: "Status"
title: "Class: Status"
sidebar_label: "Status"
sidebar_position: 0
custom_edit_url: null
---

## What
The abstract Status class provides methods to create a new Status object based on an existing *Status Code*.

Status codes are defined by creating an **Environment Status Asset** within your Project.
Within this Asset you can create one or more **Vendors** which in turn may have a number of `Status` entries.

Each of those Status entries has the following structure:
* ID: A unique number
* Logical name: A name which uniquely identifies a Status, e.g. `FIELD_UNKNOWN`
* Language: One of the supported language codes, e.g. `en`
* Message: The actual Status message. The message may contain placeholders, e.g. `The field with name %1 is unknown`.
  In this example, the placeholder `%1` is filled with the respective value when creating the *Status* using method [create](Status.md#create-8).

## How to use

Based on the Vendor and the logical status name which you have defined, you can create a new Status.
The `Status` can then be attached to a message or a passed as a result code when rolling back a stream (example).

## Definition

## Constructors

### constructor

• **new Status**()

## Methods

### getCode

▸ **getCode**(): `string`

Returns the code of a Status.

Example:
```js
// Get the status code
const code = status.getCode();
// Result: 4711
```

#### Returns

`string`

- Status code

___

### getMessage

▸ **getMessage**(): `string`

Returns the uncompiled message of a Status.
If it includes placeholders, these will not be filled.

Example:
```js
// Get the status message. Placeholders defined in a Status are not replaced with parameters, if any.
const message = status.getMessage();
// Result: "The name is %1, %2."
```

#### Returns

`string`

- Status message

___

### getParameters

▸ **getParameters**(): `string`[]

Returns an array of parameters which may have been passed to the Status upon creation.
See: [create](Status.md#create-8)

Example:
```js
// Get array of parameters.
const paramArray = status.getParameters();
// Result: ["Doe", "John"]
```

#### Returns

`string`[]

- Array of Status parameters which were passed when Status was created.

___

### getSubStatus

▸ **getSubStatus**(): `string`[]

Returns an array of States which are sub states to the current Status.

Example:
```js
// Get array of States.
const statusArray = status.getSubStatus();
```

#### Returns

`string`[]

- Array of States which are sub states to the current Status.

___

### getVendor

▸ **getVendor**(): [`VendorInfo`](VendorInfo.md)

Returns the vendor of a Status.

Example:
```js
// Get array of parameters.
const VENDOR_INFO = status.getVendor();
```

#### Returns

[`VendorInfo`](VendorInfo.md)

- [VendorInfo](VendorInfo.md) structure.

___

### create

▸ `Static` **create**(`vendor`, `statusCode`, `...args`): [`Status`](Status.md)

Invoke to create a Status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vendor` | [`VendorInfo`](VendorInfo.md) | Status messages can be distinguished by vendor. Pass a [VendorInfo](VendorInfo.md) here. Obtain it with [getVendorByName](Status.md#getvendorbyname-8) |
| `statusCode` | `string` | The `statusCode` which must be defined within your Environment Status Asset of your Project. This code will be used to identify the Status which you want to add. |
| `...args` | `string`[] | A comma separated list of arguments which will be used to fill in the placeholders in the predefined Status message, if any |

#### Returns

[`Status`](Status.md)

Instance of newly created Status.

Example:
```js
// Assume we have - among others - the following status defined using a Environment Status Asset:
// Logical name: "ILLEGAL_VALUE"
// Message: "Field with name '%1' contains illegal value '%2'."

// Get the vendor instance from the list of defined vendors.
// You must have defined the vendor in an Environment Status Asset.
// The string passed in `Status.getVendorByName('myVendorLongName')`
// is the long name of the Vendor definition within that Asset.
// Check documentation for "Environment Status Asset" for more info.
const VENDOR = Status.getVendorByName('MyVendorLongName');

// Create the Status
const STATUS = Status.create(
     VENDOR,
     'ILLEGAL_VALUE',
     'LastName',
     'Putin'
);

// In the above, the message placeholders %1 and %2 will be replaced by "LastName" and "Putin".
// So the final message is "Field with name 'LastName' contains illegal value 'Putin'."
```

___

### getVendorByName

▸ `Static` **getVendorByName**(`vendorLongName`): [`VendorInfo`](VendorInfo.md)

Get the vendor instance from the list of defined vendors.
You must have defined the vendor in an Environment Status Asset.
The string passed in `Status.getVendorByName('myVendorLongName')`
is the long name of the Vendor definition within that Asset.
Check documentation for "Environment Status Asset" for more info.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vendorLongName` | `string` | The long name of the vendor as defined in the specific Environment Status Asset. |

#### Returns

[`VendorInfo`](VendorInfo.md)

Instance of [VendorInfo](VendorInfo.md)

Example:
```js
const VENDOR_INFO = Status.getVendorByName('MyVendorLongName');
```
