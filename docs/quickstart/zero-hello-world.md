---
title: Zero to Hello World
sidebar_position: 4
---

# Zero to Hello World

Get your first workflow running in under 5 minutes. No external services, no file setup, no configuration headaches — just a running workflow that prints "Hello World" to the logs.

**Time to complete:** ~5 minutes  
**Prerequisites:** layline.io installed and running ([local](./install-local.md) or [Docker](./install-docker.md))

---

## What we're building

A minimal workflow with three components:

```mermaid
flowchart LR
   T[Timer Source] --> JS[JavaScript Processor]
   JS --> D[DevNull Sink]
```

- **Timer Source** — Fires every 5 seconds automatically
- **JavaScript Processor** — Logs "Hello World" each time
- **DevNull Sink** — Discards the output (no destination needed)

That's it. No external dependencies, no file paths, no connection setup.

---

## Step 1: Create a Project

1. Open the **Configuration Center** at `http://localhost:5841` and log in with `admin` / `admin`
2. In the right panel, expand **Create New Project**
3. Name it `hello-world`
4. Choose a directory for your project files (e.g., `/Users/<yourname>/layline-projects/hello-world`)
5. Click **Create**

<!-- SCREENSHOT: Configuration Center showing Create New Project panel with hello-world project name entered -->

---

## Step 2: Add a Timer Source

1. In the left asset tree, find **Sources** and click the ▸ arrow next to it
2. Select **Add Timer Source**
3. Name it `Heartbeat`
4. Click **Create**

The Timer fires automatically — no external connection needed.

<!-- SCREENSHOT: Timer Source configuration panel showing Name field filled with "Heartbeat" -->

---

## Step 3: Add a JavaScript Processor

1. In the asset tree, find **Flow Processors** and expand it
2. Select **Add JavaScript Flow Processor**
3. Name it `Logger`
4. Click **Create**
5. In the code editor, replace the default content with:

```javascript
function process(context, message) {
    logger.info("Hello World");
    return message;
}
```

<!-- SCREENSHOT: JavaScript Flow Processor code editor showing the Hello World logging code -->

---

## Step 4: Add a DevNull Sink

1. In the asset tree, find **Sinks** and expand it
2. Select **Add DevNull Sink**
3. Name it `Discard`
4. Click **Create**

DevNull discards all output — perfect for testing with no cleanup needed.

<!-- SCREENSHOT: DevNull Sink configuration panel showing Name field filled with "Discard" -->

---

## Step 5: Build the Workflow

1. In the asset tree, find **Workflows** and click **Add Workflow**
2. Name it `HelloWorkflow` and click **Create**
3. The workflow editor opens. You should see your three assets in the left palette:
   - `Heartbeat` (under Sources)
   - `Logger` (under Flow Processors)
   - `Discard` (under Sinks)

### Connect the components:

1. Drag **Heartbeat** onto the canvas
2. Drag **Logger** onto the canvas
3. Drag **Discard** onto the canvas
4. Click the output port on **Heartbeat**, drag to the input port on **Logger**
5. Click the output port on **Logger**, drag to the input port on **Discard**

<!-- SCREENSHOT: Workflow editor showing all three components connected: Heartbeat → Logger → Discard -->

6. Click **Save** in the top toolbar

---

## Step 6: Deploy and Run

1. Click **Deploy** in the top toolbar
2. Select your local engine from the dropdown
3. Click **Deploy** to confirm

The deployment activates within seconds. Your Timer is now firing every 5 seconds.

<!-- SCREENSHOT: Deployment dialog showing engine selection and Deploy button -->

---

## Step 7: View the Logs

1. Switch to the **Operations** tab (top navigation)
2. In the left menu, select **Engine State**
3. Find your `HelloWorkflow` in the list and click it
4. Click the **Log** tab in the right panel

You should see `Hello World` appearing every 5 seconds:

```
[INFO] Hello World
[INFO] Hello World
[INFO] Hello World
```

<!-- SCREENSHOT: Engine State Log tab showing repeating Hello World log entries -->

**Success!** Your first workflow is running.

---

## What next?

- **Modify the message** — Edit the JavaScript processor and redeploy
- **Change the timer** — Open the Timer Source and adjust the interval
- **Add more processors** — Chain additional JavaScript processors between the Timer and DevNull
- **Try a real tutorial** — Move on to [Your First Workflow](./first-workflow.md) for file I/O and data transformation

---

## Troubleshooting

**Don't see logs?**
- Make sure you clicked **Save** before **Deploy**
- Check that the workflow shows as **ACTIVE** in Engine State
- Verify the Timer Source has a valid schedule (default is every 5 seconds)

**Deployment failed?**
- Check the error message in the deployment dialog
- Common issue: Missing Save before Deploy
