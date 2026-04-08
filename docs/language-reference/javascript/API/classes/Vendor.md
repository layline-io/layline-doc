# Vendor

## What
The Vendor class represents information and methods which are specific to a Vendor.
A Vendor is a logical entity that groups a number of StatusCodes.
Each Vendor has a long name, short name and a number of StatusCodes.
Vendors available in a Project are defined in the "**Resource Status Definition Asset**".

You typically use the Vendor class to access the [StatusCodes](StatusCode.md) for a specific Vendor.
Please check the documentation for the "**Resource Status Definition Asset**" for more information.

## How to use
In your typical Project you usually never have to access vendor information directly.
But if you do, this is how you can access it.

## Properties

### id

> **id**: `number`

Provides the ID which you have assigned to the Vendor.
ID 1 is reserved for the internal vendor "LAY" (layline.io).
Your own Vendors will have IDs starting from 2.

#### Example

```js
// You can access all defined Vendors via the global statusRegistry object.

const vendors = statusRegistry.vendors;

// This returns an array of all defined Vendors for the vendor with index 0.
// Index 0 is reserved and pre-filled by internal vendor "LAY" (layline.io).
// You define additional vendors in the "**Resource Status Definition Asset**".

// To return the id for the first Vendor with index 0:

const code = statusRegistry.vendors[0].id
// Returns a Vendor object
```

***

### longName

> **longName**: `string`

The long name of the Vendor.
This is the name that you have defined in the "**Resource Status Definition Asset**".

***

### shortName

> **shortName**: `string`

The short name of the Vendor.
This is the short name that you have defined in the "**Resource Status Definition Asset**".

***

### statusCodes

> **statusCodes**: [`StatusCode`](StatusCode.md)[]

The StatusCodes which are registered for this Vendor.
This is an array of [StatusCode](StatusCode.md) objects that you have defined for this Vendor in the "**Resource Status Definition Asset**".
