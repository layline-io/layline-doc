# Hello World Project

A minimal layline.io workflow that demonstrates file-based data processing.

## What It Does

1. **Polls** the `input/` folder for CSV files
2. **Reads** each line as a name
3. **Transforms** by adding a greeting ("Hello, {name}!")
4. **Writes** results to the `output/` folder

## Quick Start

1. Create `input/` and `output/` folders in this project directory
2. Add a CSV file to `input/`:
   ```csv
   Alice
   Bob
   Charlie
   ```
3. Deploy the workflow in layline.io
4. Watch the `output/` folder for processed files

## Project Structure

- `assets/formats/NameFormat.json` - CSV format definition
- `assets/sources/InputFolder.json` - File source polling input/
- `assets/sinks/OutputFolder.json` - File sink writing to output/
- `assets/processors-flow/Greeter.json` - JavaScript processor adding greetings
- `workflows/HelloWorldWorkflow.json` - Workflow connecting all components
- `deployments/LocalDeployment.json` - Deployment configuration

## Requirements

- layline.io 2.5.2 or later
- Local reactive engine running

## Learn More

See the [Hello World Import Tutorial](https://docs.layline.io/docs/quickstart/hello-world-import) for step-by-step instructions.
