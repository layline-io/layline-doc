---
id: py-Status
---

# Status

A `Status` represents a structured error, warning, or informational message that can be attached to a [`Message`](Message.md) or used to signal stream events like retries and rollbacks.

Status codes are defined in your project's **Resource Status Definition Asset**, organized by **Vendor**. Each status has a unique code, a logical name, and a message template that supports placeholders (`%1`, `%2`, etc.).

---

## At a Glance

```python
# Get a vendor (defined in your Status Asset)
VENDOR = Status.getVendorByName('MyVendor')

# Create a status with parameters
status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Doe')

# Attach to a message
message.addStatus(Severity.ERROR, status)
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `code` | `str` | Status code identifier |
| `message` | `str` | Resolved message (placeholders filled) |
| `parameters` | `List[str]` | Parameters passed at creation |
| `vendor` | [`Vendor`](Vendor.md) | The vendor this status belongs to |
| `vendorId` | `int` | Vendor ID |
| `subStatus` | `List[Status]` | Child statuses |

```python
status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Doe')

stream.log_info(status.code)        # "ILLEGAL_VALUE"
stream.log_info(status.message)     # "Field 'LastName' contains illegal value 'Doe'"
stream.log_info(status.parameters)  # ["LastName", "Doe"]
stream.log_info(status.vendorId)    # 42
```

---

## Creating Status

### create(vendor, statusCode, *args)

Creates a Status instance from a vendor and status code. Additional arguments fill placeholder positions in the message template.

| Parameter | Type | Description |
|-----------|------|-------------|
| `vendor` | [`Vendor`](Vendor.md) | Vendor instance |
| `statusCode` | `str` | Logical name of the status (e.g., `'ILLEGAL_VALUE'`) |
| `*args` | `str` | Values for `%1`, `%2`, etc. placeholders |

**Returns:** `Status`

```python
VENDOR = Status.getVendorByName('MyVendor')

# Status template: "Field '%1' contains illegal value '%2'."
status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Doe')
# Resolved message: "Field 'LastName' contains illegal value 'Doe'."

# Single parameter
status2 = Status.create(VENDOR, 'FIELD_REQUIRED', 'Email')
# Resolved message: "Field 'Email' is required."

# No parameters
status3 = Status.create(VENDOR, 'UNKNOWN_ERROR')
```

---

## Finding Vendors

Status codes are organized by vendor. You must obtain a vendor reference before creating statuses.

| Method | Description |
|--------|-------------|
| `getVendorByName(longName)` | Find by long name |
| `getVendorByShortName(shortName)` | Find by short name |
| `getVendorById(id)` | Find by numeric ID |

```python
# By long name (most common)
VENDOR = Status.getVendorByName('MyApplication')

# By short name
VENDOR = Status.getVendorByShortName('MYAPP')

# By ID (1 is reserved for internal "LAY" vendor)
VENDOR = Status.getVendorById(2)
```

---

## Accessing Status Details

| Method | Returns | Description |
|--------|---------|-------------|
| `getCode()` | `str` | Status code |
| `getMessage()` | `str` | Raw message template (placeholders not filled) |
| `getParameters()` | `List[str]` | Creation parameters |
| `getVendor()` | [`Vendor`](Vendor.md) | Vendor instance |
| `getVendorId()` | `int` | Vendor ID |
| `getSubStatus()` | `List[Status]` | Child statuses |

```python
status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Doe')

status.getCode()        # "ILLEGAL_VALUE"
status.getMessage()     # "Field '%1' contains illegal value '%2'." (raw template)
status.getParameters()  # ["LastName", "Doe"]
```

:::info Property vs Getter
`status.message` returns the **resolved** message (placeholders filled).  
`status.getMessage()` returns the **raw template** (placeholders as `%1`, `%2`).
:::

---

## Complete Example

```python
VENDOR = Status.getVendorByName('OrderValidation')

def on_message():
    # Validate quantity
    qty = message.getInt(dataDictionary.type.Order.QUANTITY)
    if qty <= 0:
        status = Status.create(VENDOR, 'INVALID_QUANTITY', str(qty))
        message.addStatus(Severity.ERROR, status)

    # Validate email format
    email = message.getString(dataDictionary.type.Order.EMAIL)
    if not email or '@' not in email:
        status = Status.create(VENDOR, 'INVALID_EMAIL', email)
        message.addStatus(Severity.ERROR, status)

    # Check for errors before emitting
    if message.hasStatusAttached(Severity.ERROR):
        stream.emit(message, ERROR_PORT)
    else:
        stream.emit(message, OUTPUT_PORT)
```

---

## See Also

- [`Message`](Message.md) — Attach statuses to messages
- [`Severity`](../enumerations/Severity.md) — Error, warning, info levels
- [`Vendor`](Vendor.md) — Vendor information
- [`StatusRegistry`](StatusRegistry.md) — Browse all defined statuses
