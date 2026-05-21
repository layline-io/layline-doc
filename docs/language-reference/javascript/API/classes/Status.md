---
description: A `Status` represents a structured error, warning, or informational message that can be attached to a [`Message or used to signal stream events like retries ...
---

# Status

A `Status` represents a structured error, warning, or informational message that can be attached to a [`Message`](Message.md) or used to signal stream events like retries and rollbacks.

Status codes are defined in your project's **Resource Status Definition Asset**, organized by **Vendor**. Each status has a unique code, a logical name, and a message template that supports placeholders (`%1`, `%2`, etc.).

---

## At a Glance

```js
// Get a vendor (defined in your Status Asset)
const VENDOR = Status.getVendorByName('MyVendor');

// Create a status with parameters
const status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Doe');

// Attach to a message
message.addStatus(Severity.ERROR, status);
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `code` | `string` | Status code identifier |
| `message` | `string` | Resolved message (placeholders filled) |
| `parameters` | `string[]` | Parameters passed at creation |
| `vendor` | [`Vendor`](Vendor.md) | The vendor this status belongs to |
| `vendorId` | `number` | Vendor ID |
| `subStatus` | `Status[]` | Child statuses |

```js
const status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Doe');

stream.logInfo(status.code);        // "ILLEGAL_VALUE"
stream.logInfo(status.message);     // "Field 'LastName' contains illegal value 'Doe'"
stream.logInfo(status.parameters);  // ["LastName", "Doe"]
stream.logInfo(status.vendorId);    // 42
```

---

## Creating Status

### create(vendor, statusCode, ...args)

Creates a Status instance from a vendor and status code. Additional arguments fill placeholder positions in the message template.

| Parameter | Type | Description |
|-----------|------|-------------|
| `vendor` | [`Vendor`](Vendor.md) | Vendor instance |
| `statusCode` | `string` | Logical name of the status (e.g., `'ILLEGAL_VALUE'`) |
| `...args` | `string` | Values for `%1`, `%2`, etc. placeholders |

**Returns:** `Status`

```js
const VENDOR = Status.getVendorByName('MyVendor');

// Status template: "Field '%1' contains illegal value '%2'."
const status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Doe');
// Resolved message: "Field 'LastName' contains illegal value 'Doe'."

// Single parameter
const status2 = Status.create(VENDOR, 'FIELD_REQUIRED', 'Email');
// Resolved message: "Field 'Email' is required."

// No parameters
const status3 = Status.create(VENDOR, 'UNKNOWN_ERROR');
```

---

## Finding Vendors

Status codes are organized by vendor. You must obtain a vendor reference before creating statuses.

| Method | Description |
|--------|-------------|
| `getVendorByName(longName)` | Find by long name |
| `getVendorByShortName(shortName)` | Find by short name |
| `getVendorById(id)` | Find by numeric ID |

```js
// By long name (most common)
const VENDOR = Status.getVendorByName('MyApplication');

// By short name
const VENDOR = Status.getVendorByShortName('MYAPP');

// By ID (1 is reserved for internal "LAY" vendor)
const VENDOR = Status.getVendorById(2);
```

---

## Accessing Status Details

| Method | Returns | Description |
|--------|---------|-------------|
| `getCode()` | `string` | Status code |
| `getMessage()` | `string` | Raw message template (placeholders not filled) |
| `getParameters()` | `string[]` | Creation parameters |
| `getVendor()` | [`Vendor`](Vendor.md) | Vendor instance |
| `getVendorId()` | `number` | Vendor ID |
| `getSubStatus()` | `Status[]` | Child statuses |

```js
const status = Status.create(VENDOR, 'ILLEGAL_VALUE', 'LastName', 'Doe');

status.getCode();        // "ILLEGAL_VALUE"
status.getMessage();     // "Field '%1' contains illegal value '%2'." (raw template)
status.getParameters();  // ["LastName", "Doe"]
```

:::info Property vs Getter
`status.message` returns the **resolved** message (placeholders filled).  
`status.getMessage()` returns the **raw template** (placeholders as `%1`, `%2`).
:::

---

## Complete Example

```js
const VENDOR = Status.getVendorByName('OrderValidation');

export function onMessage() {
    // Validate quantity
    const qty = message.getInt(dataDictionary.type.Order.QUANTITY);
    if (qty <= 0) {
        const status = Status.create(VENDOR, 'INVALID_QUANTITY', qty.toString());
        message.addStatus(Severity.ERROR, status);
    }

    // Validate email format
    const email = message.getString(dataDictionary.type.Order.EMAIL);
    if (!email || !email.includes('@')) {
        const status = Status.create(VENDOR, 'INVALID_EMAIL', email);
        message.addStatus(Severity.ERROR, status);
    }

    // Check for errors before emitting
    if (message.hasStatusAttached(Severity.ERROR)) {
        stream.emit(message, ERROR_PORT);
    } else {
        stream.emit(message, OUTPUT_PORT);
    }
}
```

---

## See Also

- [`Message#addStatus`](Message.md) — Attach statuses to messages
- [`Severity`](../enumerations/Severity.md) — Error, warning, info levels
- [`Vendor`](Vendor.md) — Vendor information
- [`StatusRegistry`](StatusRegistry.md) — Browse all defined statuses
