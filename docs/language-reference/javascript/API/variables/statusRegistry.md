---
description: >-
  > const statusRegistry: StatusRegistry(../classes/StatusRegistry.md).
---

# statusRegistry

> `const` **statusRegistry**: [`StatusRegistry`](../classes/StatusRegistry.md)

Global registry of all defined status vendors and codes for the current project. Includes the built-in "LAY" vendor plus any custom vendors defined in Resource Status Definition Assets.

---

## At a Glance

```js
const VENDOR = Status.getVendorByName('MyCompany');

export function onMessage() {
    if (invalid) {
        message.addStatus(Severity.ERROR, Status.create(VENDOR, 'INVALID_DATA', reason));
    }
}
```

---

## Common Tasks

| Task | Method / Property |
|------|-----------------|
| Get all vendors | `statusRegistry.vendors` |
| Get vendor by ID | `statusRegistry.getVendorById(0)` |
| Get vendor by long name | `statusRegistry.getVendorByLongName('MyCompany')` |
| Get vendor by short name | `statusRegistry.getVendorByShortName('MYCO')` |
| Get language codes | `statusRegistry.languages` |
| Access status codes | `statusRegistry.vendors[0].statusCodes` |

---

## See Also

- [`StatusRegistry`](../classes/StatusRegistry.md) — Full class reference
- [`Status`](../classes/Status.md) — Creating status objects
- [`Severity`](../enumerations/Severity.md) — Severity levels
