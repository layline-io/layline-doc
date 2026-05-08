---
title: Processor Script Issues
description: Troubleshoot JavaScript and Python processor errors.
---

# Processor Script Issues

> My JavaScript or Python processor isn't working as expected.

<!-- SCREENSHOT: JavaScript Processor code editor showing syntax error highlighting with error message tooltip -->

## Common Symptoms

- **Syntax errors** in the code editor
- **Runtime exceptions** in logs
- **Unexpected output** or behavior
- **Processor showing ERROR** state
- **Messages not flowing** through the processor

---

## Diagnosis Checklist

### 1. Check for Syntax Errors

<!-- SCREENSHOT: Project view with JavaScript Processor open showing red error squiggles under problematic code -->

In the Project code editor:

1. Open your JavaScript/Python Processor
2. Look for red error indicators in the editor
3. Hover over highlighted code for error messages
4. Check the Problems panel for a list of issues

### 2. Review Runtime Logs

<!-- SCREENSHOT: Operations > Engine State > Workflow > Log tab showing JavaScript error with line number -->

1. Go to **Operations → Engine State**
2. Find your workflow
3. Select the failing processor
4. Click the **Log** tab
5. Look for error messages with line numbers

### 3. Test with Minimal Code

Replace your processor code with a simple test:

```javascript
// Minimal JavaScript test
logger.info('Processor executed');
logger.info('Message payload: ' + JSON.stringify(message.payload));
```

```python
# Minimal Python test
logger.info("Processor executed")
logger.info(f"Message payload: {message.payload}")
```

If this works, the issue is in your specific code logic.

---

## Common JavaScript Errors

### "Cannot read property 'X' of undefined"

**Cause:** Trying to access a property on `null` or `undefined`.

**Example:**
```javascript
// WRONG - fails if payload is null
const id = message.payload.id;

// RIGHT - safe access
const id = message.payload?.id;
```

### "JSON.parse: unexpected character"

**Cause:** Trying to parse invalid JSON.

**Resolution:**
```javascript
// Add error handling
try {
    const data = JSON.parse(message.payload);
} catch (e) {
    logger.error('Parse failed: ' + e.message);
}
```

### "Function not defined"

**Cause:** Calling a function that doesn't exist or is misspelled.

**Check:**
- Function name spelling
- Variable scope
- Library imports (if using custom libraries)

---

## Common Python Errors

### "NameError: name 'X' is not defined"

**Cause:** Using a variable or function that hasn't been defined.

**Resolution:**
```python
# Check variable names
logger.info(message.payload)  # not logger.Info or Logger.info
```

### "AttributeError: 'dict' object has no attribute 'X'"

**Cause:** Using dot notation on a dictionary instead of bracket notation.

**Example:**
```python
# WRONG - Python dicts use brackets
id = message.payload.id

# RIGHT
id = message.payload['id']

# Or use get() for safe access
id = message.payload.get('id')
```

### "IndentationError"

**Cause:** Python is strict about indentation.

**Resolution:**
- Use consistent indentation (4 spaces recommended)
- Don't mix tabs and spaces
- Check for invisible characters

---

## Debugging Techniques

### Add Strategic Logging

```javascript
// JavaScript debugging
logger.info('=== DEBUG ===');
logger.info('Message type: ' + typeof message);
logger.info('Payload type: ' + typeof message.payload);
logger.info('Payload keys: ' + Object.keys(message.payload || {}));
logger.info('Full payload: ' + JSON.stringify(message.payload, null, 2));
```

```python
# Python debugging
logger.info("=== DEBUG ===")
logger.info(f"Message type: {type(message)}")
logger.info(f"Payload type: {type(message.payload)}")
logger.info(f"Payload keys: {list(message.payload.keys()) if message.payload else 'None'}")
logger.info(f"Full payload: {message.payload}")
```

### Test with Hardcoded Values

```javascript
// Instead of using incoming message
const testData = {
    id: 123,
    name: "Test"
};

// Test your logic
const result = processData(testData);
logger.info('Test result: ' + JSON.stringify(result));
```

### Check API Method Names

**Important:** API methods use **camelCase** in both JavaScript AND Python.

```javascript
// JavaScript - correct
message.setPayload(newPayload);
stream.commit();
```

```python
# Python - also use camelCase (NOT snake_case)
message.setPayload(newPayload)  # NOT set_payload
stream.commit()                  # NOT stream.Commit
```

See the [JavaScript API](../language-reference/javascript) or [Python API](../language-reference/python) reference for correct method names.

---

## Message Handling Patterns

### Safe Property Access

```javascript
// JavaScript - defensive coding
const value = message.payload?.nested?.property ?? 'default';

// Or with explicit checks
let value = null;
if (message.payload && message.payload.nested) {
    value = message.payload.nested.property;
}
```

```python
# Python - defensive coding
value = message.payload.get('nested', {}).get('property', 'default')

# Or with explicit checks
value = None
if message.payload and 'nested' in message.payload:
    value = message.payload['nested'].get('property')
```

### Error Handling in Processors

```javascript
// JavaScript - graceful error handling
try {
    const result = riskyOperation();
    message.payload.result = result;
} catch (error) {
    logger.error('Operation failed: ' + error.message);
    message.payload.error = error.message;
    // Optionally route to error path
    message.setErrorPath('error-handler');
}
```

```python
# Python - graceful error handling
try:
    result = risky_operation()
    message.payload['result'] = result
except Exception as e:
    logger.error(f"Operation failed: {str(e)}")
    message.payload['error'] = str(e)
    message.setErrorPath("error-handler")
```

---

## Performance Issues

### Infinite Loops

**Symptoms:** Processor hangs, high CPU, no log output

**Common causes:**
```javascript
// WRONG - infinite loop
while (true) {  // Never exits!
    process();
}

// WRONG - missing increment
for (let i = 0; i < 10; ) {  // i never changes!
    process();
}
```

### Blocking Operations

**Avoid:**
- Synchronous network calls
- Long-running computations without yielding
- Heavy memory allocations in loops

**Resolution:**
- Use asynchronous patterns where available
- Break large operations into smaller chunks
- Consider offloading to external services

---

## Testing Processors

### Use Service Functions

For callable services, test directly:

1. Go to **Operations → Engine State → Services**
2. Select your service
3. Click the **Functions** tab
4. Enter test parameters
5. Execute and review results

### Log-Driven Development

```javascript
// Add logs at key points
logger.info('1. Entering processor');
const input = message.payload;
logger.info('2. Input: ' + JSON.stringify(input));

const result = transform(input);
logger.info('3. Transform result: ' + JSON.stringify(result));

message.payload = result;
logger.info('4. Exiting processor');
```

---

## See Also

- [**JavaScript Language Reference**](../language-reference/javascript) — Complete API documentation
- [**Python Language Reference**](../language-reference/python) — Complete API documentation
- [**JavaScript Processor**](../assets/workflow-assets/processors-flow/asset-flow-javascript) — Asset configuration
- [**Python Processor**](../assets/workflow-assets/processors-flow/asset-flow-python) — Asset configuration
