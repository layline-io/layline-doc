# Variable: workflow

> **workflow**: Workflow

## What
A workflow is a collection of processors and connections that are used to process messages.
It is a high-level abstraction that represents a business process.
The `workflow` variable is an instance of the [Workflow](../classes/Workflow.md) class which provides methods to access the data dictionary for a workflow.
It is automatically created for each workflow instance when started.
You can simply access it using the `workflow` variable within a Python script in layline.io.

## How to use
You typically use the `workflow` variable to access the data dictionary for a workflow.
It's available globally in your Python scripts within layline.io, without the need for import statements.

See the [Workflow](../classes/Workflow.md) documentation for more information on available methods and properties.

## Example

```python
def on_init():
    # Accessing the name of the workflow
    workflow_name = workflow.getName()
    print(f"Current workflow: {workflow_name}")

    # Accessing the data dictionary of the workflow
    data_dict = workflow.getDataDictionary()

def on_message():
    # Using workflow information in message processing
    message.data.WorkflowInfo.Name = workflow.name
    
    # Emit the modified message
    stream.emit(message, OUTPUT_PORT)
```
