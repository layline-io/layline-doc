# StatusRegistry

## What
The StatusRegistry class provides methods to access all defined Vendors and Languages for the current Project.
You define additional vendors and languages in the "**Resource Status Definition Asset**".

## How to use
The statusRegistry object is created automatically when the Project is started,
based on the internal "LAY" vendor instance plus any additional vendors you have defined in the "**Resource Status Definition Asset**".

## Properties

### languages

> **languages**: `string`[]

An array of defined and used [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language codes for the current Project.
You can access all defined languages via the global [statusRegistry](../variables/statusRegistry.md) constant.

```js
const code = statusRegistry.languages
// Returns an array of defined language codes, eg. ["en", "de", "fr"]
```

***

### vendors

> **vendors**: [`Vendor`](Vendor.md)[]

An array of all defined Vendors for the current Project.
You can access all defined Vendors via the global [statusRegistry](../variables/statusRegistry.md) constant.
Index 0 is reserved and pre-filled by internal vendor "LAY" (layline.io).
You define additional vendors in the "**Resource Status Definition Asset**".

```js
const code = statusRegistry.vendors[0]
// Returns a Vendor object
```

## Methods

### getVendorById()

> **getVendorById**(`id`): [`Vendor`](Vendor.md)

Get the vendor instance from the list of defined vendors according to the given ID of the vendor.
You must have defined the vendor in a "**Resource Status Definition Asset**".
The number passed in `statusRegistry.getVendorById(1)` is the ID of the Vendor definition within that Asset.
Check documentation for "**Resource Status Definition Asset**" for more info.
You can access all defined Vendors via the global [statusRegistry](../variables/statusRegistry.md) constant.

#### Parameters

##### id

`number`

The ID of the vendor as defined in the specific "**Resource Status Definition Asset**".

#### Returns

[`Vendor`](Vendor.md)

Instance of [Vendor](Vendor.md)

#### Example

```js
const VENDOR_ID = statusRegistry.getVendorById(1);
// Returns the Vendor instance for the Vendor with the ID 1
```

***

### getVendorByLongName()

> **getVendorByLongName**(`vendorLongName`): [`Vendor`](Vendor.md)

Get the vendor instance from the list of defined vendors according to the given long name of the vendor.
You must have defined the vendor in a "**Resource Status Definition Asset**".
The string passed in `statusRegistry.getVendorByLongName('myVendorLongName')`
is the long name of the Vendor definition within that Asset.
Check documentation for "**Resource Status Definition Asset**" for more info.
You can access all defined Vendors via the global [statusRegistry](../variables/statusRegistry.md) constant.

#### Parameters

##### vendorLongName

`string`

The long name of the vendor as defined in the specific "**Resource Status Definition Asset**".

#### Returns

[`Vendor`](Vendor.md)

Instance of [Vendor](Vendor.md)

#### Example

```js
const VENDOR = statusRegistry.getVendorByLongName('MyVendorLongName');
// Returns the Vendor instance for the Vendor with the long name 'MyVendorLongName'
```

***

### getVendorByShortName()

> **getVendorByShortName**(`vendorShortName`): [`Vendor`](Vendor.md)

Get the vendor instance from the list of defined vendors according to the given short name of the vendor.
You must have defined the vendor in a "**Resource Status Definition Asset**".
The string passed in `statusRegistry.getVendorByShortName('myVendorShortName')`
is the short name of the Vendor definition within that Asset.
Check documentation for "**Resource Status Definition Asset**" for more info.
You can access all defined Vendors via the global [statusRegistry](../variables/statusRegistry.md) constant.

#### Parameters

##### vendorShortName

`string`

#### Returns

[`Vendor`](Vendor.md)

Instance of [Vendor](Vendor.md)

#### Example

```js
const VENDOR = statusRegistry.getVendorByShortName('MyVendorShortName');
// Returns the Vendor instance for the Vendor with the short name 'MyVendorShortName'
```
