---
description: 'StatusRegistry provides access to all defined vendors and status codes in your project. It is available globally as `statusRegistry`.'
---

# StatusRegistry

The `StatusRegistry` provides access to all defined vendors and status codes in your project. It is available globally as `statusRegistry`.

Vendors and their status codes are defined in the **Resource Status Definition Asset**. Index 0 is reserved for the internal "LAY" (layline.io) vendor.

---

## At a Glance

```js
// List all supported languages
const languages = statusRegistry.languages;  // ["en", "de", "fr"]

// Find a vendor
const vendor = statusRegistry.getVendorByLongName('MyApplication');

// Browse status codes
vendor.statusCodes.forEach(code => {
    stream.logInfo(`${code.code}: ${code.message}`);
});
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `languages` | `string[]` | ISO 639-1 language codes configured in the project |
| `vendors` | [`Vendor`](Vendor.md)[] | All defined vendors (index 0 = internal "LAY") |

```js
// Available languages
stream.logInfo(`Languages: ${statusRegistry.languages.join(', ')}`);

// Number of vendors
stream.logInfo(`Vendors: ${statusRegistry.vendors.length}`);

// Access internal vendor
const lay = statusRegistry.vendors[0];
stream.logInfo(`LAY vendor: ${lay.longName}`);
```

---

## Finding Vendors

| Method | Description |
|--------|-------------|
| `getVendorById(id)` | Find by numeric ID |
| `getVendorByLongName(name)` | Find by long name |
| `getVendorByShortName(name)` | Find by short name |

```js
// By ID
const v1 = statusRegistry.getVendorById(1);  // Internal LAY vendor
const v2 = statusRegistry.getVendorById(2);  // Your first custom vendor

// By name
const myApp = statusRegistry.getVendorByLongName('MyApplication');
const myAppShort = statusRegistry.getVendorByShortName('MYAPP');

// Use with Status.create
const status = Status.create(myApp, 'INVALID_FIELD', 'Email');
```

---

## See Also

- [`Status`](Status.md) — Create runtime status instances
- [`StatusCode`](StatusCode.md) — Individual status code definitions
- [`Vendor`](Vendor.md) — Vendor properties and status code collections
