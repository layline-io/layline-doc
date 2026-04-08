# Temporal

Interface representing a Temporal object, which includes methods for formatting the temporal data.

## Methods

### toISOString()

> **toISOString**(): `string`

Returns an ISO 8601 string representation of the Temporal instance.

#### Returns

`string`

An ISO 8601 formatted string representing the Temporal instance.

#### Example

```ts
const temporal = DateTime.now();
print(temporal.toISOString()); // Outputs something like: "2024-09-03T12:34:56.789Z"
```

***

### toString()

> **toString**(): `string`

Returns a string representation of the Temporal instance.

#### Returns

`string`

A string representing the Temporal instance.

#### Example

```ts
const temporal = DateTime.now();
print(temporal.toString()); // Outputs something like: "2024-09-03T12:34:56.789Z"
```
