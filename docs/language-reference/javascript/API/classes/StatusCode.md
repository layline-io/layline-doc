# StatusCode

A `StatusCode` represents a single entry in a **Resource Status Definition Asset** — the template definition for a [`Status`](Status.md). It contains the code, message template, and language information.

You typically don't create StatusCodes directly. Instead, access them through the global [`statusRegistry`](StatusRegistry.md) to inspect what statuses are available in your project.

---

## At a Glance

```js
// Browse all defined status codes for a vendor
const vendor = statusRegistry.vendors[0];  // Index 0 = internal "LAY" vendor
const codes = vendor.statusCodes;

codes.forEach(code => {
    stream.logInfo(`${code.code}: ${code.message}`);
});
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `code` | `number` | Numeric code (e.g., `11`, `42`) |
| `message` | `string` | Message template with placeholders (e.g., `"Field '%1' is unknown"`) |
| `vendor` | [`Vendor`](Vendor.md) | The vendor this code belongs to |

```js
// Access the internal LAY vendor's status codes
const layCodes = statusRegistry.vendors[0].statusCodes;

const code = layCodes[50];
stream.logInfo(code.code);     // 251
stream.logInfo(code.message);  // "merge conflict at node %1"
stream.logInfo(code.vendor.id); // 1
```

---

## Accessing StatusCodes

```js
// All vendors
const vendors = statusRegistry.vendors;

// Specific vendor by index
const layVendor = statusRegistry.vendors[0];      // Internal vendor
const myVendor = statusRegistry.vendors[1];       // Your first custom vendor

// All status codes for a vendor
const codes = myVendor.statusCodes;

// Iterate
for (const code of codes) {
    stream.logInfo(`${code.code}: ${code.message}`);
}
```

---

## See Also

- [`Status`](Status.md) — Runtime status instances created from these templates
- [`StatusRegistry`](StatusRegistry.md) — Access all vendors and their codes
- [`Vendor`](Vendor.md) — Vendor information and status code collections
