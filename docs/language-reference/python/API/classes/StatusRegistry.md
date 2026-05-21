---
description: 'StatusRegistry provides access to all defined vendors and status codes in your project. It is available globally as `statusRegistry`.'
---

---
id: py-StatusRegistry
---

# StatusRegistry

The `StatusRegistry` provides access to all defined vendors and status codes in your project. It is available globally as `statusRegistry`.

Vendors and their status codes are defined in the **Resource Status Definition Asset**. Index 0 is reserved for the internal "LAY" (layline.io) vendor.

---

## At a Glance

```python
# List all supported languages
languages = statusRegistry.languages  # ["en", "de", "fr"]

# Find a vendor
vendor = statusRegistry.getVendorByLongName('MyApplication')

# Browse status codes
for code in vendor.statusCodes:
    stream.log_info(f"{code.code}: {code.message}")
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `languages` | `List[str]` | ISO 639-1 language codes configured in the project |
| `vendors` | [`Vendor`](Vendor.md)[] | All defined vendors (index 0 = internal "LAY") |

```python
# Available languages
stream.log_info(f"Languages: {', '.join(statusRegistry.languages)}")

# Number of vendors
stream.log_info(f"Vendors: {len(statusRegistry.vendors)}")

# Access internal vendor
lay = statusRegistry.vendors[0]
stream.log_info(f"LAY vendor: {lay.longName}")
```

---

## Finding Vendors

| Method | Description |
|--------|-------------|
| `getVendorById(id)` | Find by numeric ID |
| `getVendorByLongName(name)` | Find by long name |
| `getVendorByShortName(name)` | Find by short name |

```python
# By ID
v1 = statusRegistry.getVendorById(1)  # Internal LAY vendor
v2 = statusRegistry.getVendorById(2)  # Your first custom vendor

# By name
my_app = statusRegistry.getVendorByLongName('MyApplication')
my_app_short = statusRegistry.getVendorByShortName('MYAPP')

# Use with Status.create
status = Status.create(my_app, 'INVALID_FIELD', 'Email')
```

---

## See Also

- [`Status`](Status.md) — Create runtime status instances
- [`StatusCode`](StatusCode.md) — Individual status code definitions
- [`Vendor`](Vendor.md) — Vendor properties and status code collections
