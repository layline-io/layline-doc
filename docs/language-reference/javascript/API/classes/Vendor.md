# Vendor

A `Vendor` groups related [`StatusCode`](StatusCode.md) definitions together. Vendors are defined in the **Resource Status Definition Asset** and accessed through [`StatusRegistry`](StatusRegistry.md) or [`Status`](Status.md) lookup methods.

The internal vendor "LAY" (ID 1) is reserved for layline.io system statuses. Your custom vendors start from ID 2.

---

## At a Glance

```js
// Get vendor via Status helper
const vendor = Status.getVendorByName('MyApplication');

// Or via registry
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
| `id` | `number` | Vendor ID (1 = internal LAY, 2+ = custom) |
| `longName` | `string` | Full vendor name |
| `shortName` | `string` | Short vendor identifier |
| `statusCodes` | [`StatusCode`](StatusCode.md)[] | All status codes for this vendor |

```js
const vendor = Status.getVendorByName('MyApplication');

stream.logInfo(vendor.id);         // 2
stream.logInfo(vendor.longName);   // "MyApplication"
stream.logInfo(vendor.shortName);  // "MYAPP"
stream.logInfo(vendor.statusCodes.length);  // 25
```

---

## See Also

- [`Status`](Status.md) — Create status instances from vendor codes
- [`StatusCode`](StatusCode.md) — Individual status definitions
- [`StatusRegistry`](StatusRegistry.md) — Browse all vendors
