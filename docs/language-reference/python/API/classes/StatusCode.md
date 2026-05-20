---
id: py-StatusCode
---

# StatusCode

A `StatusCode` represents a single entry in a **Resource Status Definition Asset** — the template definition for a [`Status`](Status.md). It contains the code, message template, and language information.

You typically don't create StatusCodes directly. Instead, access them through the global [`statusRegistry`](StatusRegistry.md) to inspect what statuses are available in your project.

---

## At a Glance

```python
# Browse all defined status codes for a vendor
vendor = statusRegistry.vendors[0]  # Index 0 = internal "LAY" vendor
codes = vendor.statusCodes

for code in codes:
    stream.log_info(f"{code.code}: {code.message}")
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `code` | `int` | Numeric code (e.g., `11`, `42`) |
| `message` | `str` | Message template with placeholders (e.g., `"Field '%1' is unknown"`) |
| `vendor` | [`Vendor`](Vendor.md) | The vendor this code belongs to |

```python
# Access the internal LAY vendor's status codes
lay_codes = statusRegistry.vendors[0].statusCodes

code = lay_codes[50]
stream.log_info(code.code)      # 251
stream.log_info(code.message)   # "merge conflict at node %1"
stream.log_info(code.vendor.id)  # 1
```

---

## Accessing StatusCodes

```python
# All vendors
vendors = statusRegistry.vendors

# Specific vendor by index
lay_vendor = statusRegistry.vendors[0]      # Internal vendor
my_vendor = statusRegistry.vendors[1]       # Your first custom vendor

# All status codes for a vendor
codes = my_vendor.statusCodes

# Iterate
for code in codes:
    stream.log_info(f"{code.code}: {code.message}")
```

---

## See Also

- [`Status`](Status.md) — Runtime status instances created from these templates
- [`StatusRegistry`](StatusRegistry.md) — Access all vendors and their codes
- [`Vendor`](Vendor.md) — Vendor information and status code collections
