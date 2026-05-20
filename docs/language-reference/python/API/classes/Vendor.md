---
id: py-Vendor
---

# Vendor

A `Vendor` groups related [`StatusCode`](StatusCode.md) definitions together. Vendors are defined in the **Resource Status Definition Asset** and accessed through [`StatusRegistry`](StatusRegistry.md) or [`Status`](Status.md) lookup methods.

The internal vendor "LAY" (ID 1) is reserved for layline.io system statuses. Your custom vendors start from ID 2.

---

## At a Glance

```python
# Get vendor via Status helper
vendor = Status.getVendorByName('MyApplication')

# Or via registry
vendor = statusRegistry.getVendorByLongName('MyApplication')

# Browse status codes
for code in vendor.statusCodes:
    stream.log_info(f"{code.code}: {code.message}")
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | `int` | Vendor ID (1 = internal LAY, 2+ = custom) |
| `longName` | `str` | Full vendor name |
| `shortName` | `str` | Short vendor identifier |
| `statusCodes` | `List[`[`StatusCode`](StatusCode.md)`]` | All status codes for this vendor |

```python
vendor = statusRegistry.getVendorByLongName('MyApplication')

print(vendor.id)          # 2
print(vendor.longName)    # "MyApplication"
print(vendor.shortName)   # "MYAPP"
print(len(vendor.statusCodes))  # 25
```

---

## See Also

- [`Status`](Status.md) — Create status instances from vendor codes
- [`StatusCode`](StatusCode.md) — Individual status definitions
- [`StatusRegistry`](StatusRegistry.md) — Browse all vendors
