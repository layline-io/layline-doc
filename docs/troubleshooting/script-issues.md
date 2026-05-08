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
stream.logInfo('Processor executed');
stream.logInfo('Message payload: ' + message.toJson());
```

```python
# Minimal Python test
stream.logInfo("Processor executed")
stream.logInfo(f"Message payload: {message.toJson()}")
```

If this works, the issue is in your specific code logic.

---

## Common JavaScript Errors

### "Cannot read property 'X' of undefined"

**Cause:** Trying to access a property on `null` or `undefined`.

**Example:**
```javascript
// WRONG - fails if payload is null
const id = message.data.id;

// RIGHT - safe access
const id = message.data?.id;
```

### "JSON.parse: unexpected character"

**Cause:** Trying to parse invalid JSON.

**Resolution:**
```javascript
// Add error handling
try {
    const data = JSON.parse(message.data);
} catch (e) {
    stream.logError('Parse failed: ' + e.message);
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
stream.logInfo(message.data)  # not stream.logInfo or stream.logInfo
```

### "AttributeError: 'dict' object has no attribute 'X'"

**Cause:** Using dot notation on a dictionary instead of bracket notation.

**Example:**
```python
# WRONG - Python dicts use brackets
id = message.data.id

# RIGHT
id = message.data['id']

# Or use get() for safe access
id = message.data.get('id')
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
stream.logInfo('=== DEBUG ===');
stream.logInfo('Message type: ' + typeof message);
stream.logInfo('Payload type: ' + typeof message.data);
stream.logInfo('Payload keys: ' + Object.keys(message.data || {}));
stream.logInfo('Full payload: ' + JSON.stringify(message.data, null, 2));
```

```python
# Python debugging
stream.logInfo("=== DEBUG ===")
stream.logInfo(f"Message type: {type(message)}")
stream.logInfo(f"Payload type: {type(message.data)}")
stream.logInfo(f"Payload keys: {list(message.data.keys()) if message.data else 'None'}")
stream.logInfo(f"Full payload: {message.data}")
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
stream.logInfo('Test result: ' + JSON.stringify(result));
```

---

## Message Handling Patterns

### Safe Property Access

```javascript
// JavaScript - defensive coding
const value = message.data?.nested?.property ?? 'default';

// Or with explicit checks
let value = null;
if (message.data && message.data.nested) {
    value = message.data.nested.property;
}
```

```python
# Python - defensive coding
value = message.data.get('nested', {}).get('property', 'default')

# Or with explicit checks
value = None
if message.data and 'nested' in message.data:
    value = message.data['nested'].get('property')
```

### Error Handling in Processors

```javascript
// JavaScript - graceful error handling
try {
    const result = riskyOperation();
    message.data.result = result;
} catch (error) {
    stream.logError('Operation failed: ' + error.message);
    message.data.error = error.message;
    // Optionally route to error path
    message.setErrorPath('error-handler');
}
```

```python
# Python - graceful error handling
try:
    result = risky_operation()
    message.data['result'] = result
except Exception as e:
    stream.logError(f"Operation failed: {str(e)}")
    message.data['error'] = str(e)
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
stream.logInfo('1. Entering processor');
const input = message.data;
stream.logInfo('2. Input: ' + JSON.stringify(input));

const result = transform(input);
stream.logInfo('3. Transform result: ' + JSON.stringify(result));

message.data = result;
stream.logInfo('4. Exiting processor');
```

---

## See Also

- [**JavaScript Language Reference**](../language-reference/javascript/index.mdx) — Complete API documentation
- [**Python Language Reference**](../language-reference/python/index.mdx) — Complete API documentation
- [**JavaScript Processor**](../assets/workflow-assets/processors-flow/asset-flow-javascript.md) — Asset configuration
- [**Python Processor**](../assets/workflow-assets/processors-flow/asset-flow-python.md) — Asset configuration
