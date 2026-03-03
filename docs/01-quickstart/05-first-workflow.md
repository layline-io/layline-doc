---
title: Your First Workflow
sidebar_position: 5
---

# Your First Workflow (End-to-End Tutorial)

This tutorial walks you through building a complete data integration workflow in layline.io from scratch. By the end, you will have a working pipeline that reads a CSV file, parses and transforms the records, routes them to two outputs (Kafka and a database), and runs on a local Reactive Engine.

**Time to complete:** approximately 30–45 minutes  
**Prerequisites:** layline.io installed and running ([local install](install-local) or [Docker](install-docker))

---

## What we're building

**Scenario:** A system produces customer transaction records as CSV files. We need to:

1. **Read** the CSV file from a local directory
2. **Parse** each row into a structured record using a defined layout
3. **Transform** the data — normalize field values and enrich records with a JDBC lookup
4. **Route** records: valid transactions go to Kafka for downstream analytics; all records are written to a PostgreSQL database
5. **Deploy** the workflow to the local Reactive Engine and monitor it

```
[File Input] → [CSV Parser] → [JavaScript Transform] → [Router]
                                                            ├── [Kafka Output]  (valid transactions)
                                                            └── [JDBC Output]   (all records)
```

---

## Step 1: Create a new Project

1. Open the **Configuration Center** at `http://localhost:5841` and log in with `admin` / `admin`.
2. In the left navigation, click **Project → New**.
3. Name the project `customer-transactions` and click **Create**.

You are now inside an empty project.

---

## Step 2: Define the data format

Before connecting anything, tell layline.io what your CSV records look like.

1. In the left panel, navigate to **Formats**.
2. Click **Add Format** and choose **Generic Format (CSV)**.
3. Name it `CustomerTransactionCSV`.
4. Add the following fields:

| Field name | Type | Notes |
|------------|------|-------|
| `transaction_id` | String | Unique ID |
| `customer_id` | String | |
| `amount` | Decimal | |
| `currency` | String | ISO 4217 code |
| `timestamp` | DateTime | ISO 8601 |
| `status` | String | e.g. `PENDING`, `COMPLETE`, `FAILED` |

5. Set the delimiter to `,` (comma) and enable **First row is header**.
6. Save the format.

---

## Step 3: Configure a File Input source

1. In the left panel, navigate to **Workflows** and click **New Workflow**. Name it `process-transactions`.
2. From the asset palette, drag a **File Input** asset onto the canvas.
3. Double-click it to configure:
   - **Directory:** `/tmp/layline/in` (create this directory on your machine)
   - **File pattern:** `*.csv`
   - **Format:** select `CustomerTransactionCSV` (created in Step 2)
   - **Move processed files to:** `/tmp/layline/done`
4. Save the asset.

---

## Step 4: Add a JavaScript Transform processor

1. From the asset palette, drag a **JavaScript Processor** onto the canvas.
2. Connect the output of the File Input to the input of this processor.
3. Double-click the processor and add the following script:

```javascript
// Normalize currency to uppercase and flag high-value transactions
function onMessage(message) {
    const record = message.data;

    // Normalize currency code
    record.currency = record.currency.toUpperCase();

    // Add a derived field
    record.is_high_value = parseFloat(record.amount) > 10000;

    // Reject records with unknown status
    if (!['PENDING', 'COMPLETE', 'FAILED'].includes(record.status)) {
        message.reject('Unknown status: ' + record.status);
        return;
    }

    message.emit(OUTPUT_PORT_1);
}
```

4. Name the processor `NormalizeTransactions` and save it.

---

## Step 5: Add a Router

1. Drag a **Router** asset onto the canvas and connect it to the output of `NormalizeTransactions`.
2. Configure two routes:
   - **Route A** — condition: `record.status === 'COMPLETE'` → output port A
   - **Route B** — condition: `true` (catch-all) → output port B
3. Save the router.

---

## Step 6: Configure Kafka output

1. First, create a **Kafka Service** under **Services → Add Service → Kafka**:
   - **Bootstrap servers:** `localhost:9092`
   - Name it `LocalKafka`
2. Drag a **Kafka Sink** onto the canvas and connect it to Route A output.
3. Configure:
   - **Service:** `LocalKafka`
   - **Topic:** `transactions.complete`
   - **Message format:** JSON
4. Save the sink.

---

## Step 7: Configure JDBC (database) output

1. Create a **JDBC Service** under **Services → Add Service → JDBC**:
   - **Driver:** PostgreSQL
   - **URL:** `jdbc:postgresql://localhost:5432/transactions`
   - **User / Password:** your database credentials
   - Name it `TransactionsDB`
2. Drag a **JDBC Sink** onto the canvas and connect it to Route B output.
3. Configure the INSERT statement:

```sql
INSERT INTO transactions (transaction_id, customer_id, amount, currency, timestamp, status, is_high_value)
VALUES (:transaction_id, :customer_id, :amount, :currency, :timestamp, :status, :is_high_value)
```

4. Save the sink.

---

## Step 8: Deploy to the Reactive Engine

1. In the top menu, click **Deploy → Deploy to Engine**.
2. Select your local Reactive Engine (should be listed automatically at `localhost:5842`).
3. Click **Deploy**. The Configuration Center will package and push the project.
4. Navigate to **Operations → Cluster** and confirm the engine status shows **Up**.

---

## Step 9: Run the workflow and monitor it

1. Drop a sample CSV file into `/tmp/layline/in/`:

```csv
transaction_id,customer_id,amount,currency,timestamp,status
TXN-001,CUST-42,250.00,usd,2025-03-01T10:00:00Z,COMPLETE
TXN-002,CUST-17,15500.00,EUR,2025-03-01T10:01:00Z,COMPLETE
TXN-003,CUST-99,75.00,gbp,2025-03-01T10:02:00Z,PENDING
```

2. In the **Operations** section, click on your workflow to see live throughput.
3. Confirm:
   - The CSV file was moved to `/tmp/layline/done/` after processing
   - Records with `status = COMPLETE` appear in the Kafka topic `transactions.complete`
   - All records appear in the PostgreSQL `transactions` table

---

## What you've learned

In this tutorial you:

- Created a layline.io project with a defined data format
- Built a workflow with a file source, JavaScript transform, router, Kafka sink, and JDBC sink
- Deployed the workflow to a local Reactive Engine
- Ran it end-to-end and monitored the results

---

## Next steps

- **[Concepts in depth](/docs/concept)** — understand the architecture and data model in detail
- **[Asset Reference](/docs/assets)** — explore all available source, processor, and sink types
- **[JavaScript API](/docs/language-reference/javascript)** — learn the full scripting API for custom logic
- **[Operations Guide](/docs/operations)** — manage clusters, monitor deployments, handle errors
