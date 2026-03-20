# SKILL: asset-documentation

**Use this skill when:** Andrew asks you to document a feature, asset, or section of the layline.io application. This is your primary documentation workflow — from initial brief through to a merged PR.

---

## The Overarching Reference Doc Template

**Every asset/feature reference doc follows this structure. Always. No exceptions.**

The sub-sections inside Configuration adapt to the actual UI (one sub-section per tab or logical group of fields), but the outer skeleton is fixed.

```markdown
# [Asset Name]

> [One sentence: what this asset is, in plain English]

## Purpose

[2–4 sentences: why this asset exists, what problem it solves, where it fits in a
workflow. Don't list fields here — give the reader a mental model first.]

## Prerequisites

[What must exist before this asset can be configured? e.g.:]
- A **Format** asset defining the expected message structure
- A **Source** asset for the input connection

[If there are no prerequisites beyond having a project open, say so briefly.]

## Configuration

[One sub-section per UI tab or logical grouping of fields. Match the structure the
user actually sees in the app.]

### [Tab or Section Name]

**Field Name** — Description of the field. Default: value.

**Boolean Field** — When enabled, layline.io does X.

For fields with a fixed set of options, use a table:

| Option | Behavior |
|--------|----------|
| Option A | What happens when Option A is selected. |
| Option B | What happens when Option B is selected. |

Single-field sections can be written as prose paragraphs if no field-by-field breakdown is needed.

**Inheritable fields** use inline italics: **Field Name *(inheritable)* — description**.

### [Next Tab or Section]

...

## Behavior

[Runtime semantics that aren't obvious from the field descriptions. Examples:]
- Processing order
- What happens on error conditions
- Whether a message can match multiple routes or only the first
- Any side effects or ordering guarantees

[Omit this section if there's nothing non-obvious to say.]

## Example

[One concrete, minimal-but-complete example. Use real field values. Show enough to
be useful — not a toy, but not a full project either.]

[If a screenshot is available and adds value, reference it here:]
![Router configuration example](../../static/img/assets/router/router-example.png)

## See Also

- [**Related Asset Name**](/docs/assets/path) — one-line description of relevance
- [**Concept Page**](/docs/concept/path) — one-line description
```

---

## How a Documentation Session Works

### Step 0 — Read the brief

Andrew will start the conversation directly with you. He may provide:
- The asset or feature name
- A sentence or two of context ("this is what it does")
- Pre-made screenshots (attached to the message or as file paths)
- Any known tricky behaviors or things the UI doesn't make obvious

**If Andrew provides screenshots:** Analyze them with the `image` tool before opening the app. They give you a head start and may answer questions before you even need to ask.

### Step 1 — Check your memory first

Before opening the app, search your knowledge:

1. Does `KNOWLEDGE.md` already have notes on this asset?
2. Does `layline-ui-primer.md` have relevant UI notes?
3. Do recent `memory/YYYY-MM-DD.md` files mention this asset?

If you've documented a similar asset before, note the structural patterns you used — consistency matters.

### Step 2 — Explore the app

Open `http://localhost:5841` and navigate to the relevant asset. Read `layline-ui-primer.md` if you haven't already this session.

**Systematic exploration checklist:**
- [ ] Navigate to the asset in the asset tree (ASSETS tab → correct category)
- [ ] Open an existing instance if one exists, OR create a minimal test instance
- [ ] Visit every tab in the configuration panel — note the tab names exactly
- [ ] For each tab: note every field name, its type (text/dropdown/toggle/code editor/table), and whether it appears required
- [ ] Note what dropdown options are available (these define the type field in the table)
- [ ] Note any fields that are only visible when other fields have certain values (conditional fields)
- [ ] Take one screenshot per tab/section

**Do not** try to deeply configure the asset during exploration — you're inventorying, not building.

### Step 3 — Screenshots (Andrew provides these, not you)

**You do not take screenshots.** Andrew provides them after reviewing your draft.

When Andrew sends screenshots:
- Analyze each one with the `image` tool
- Identify which section, tab, or field it illustrates
- Insert it in the correct location in the doc with a descriptive alt text and proper path reference
- Save the file to `static/img/assets/[asset-category]/[asset-name]-[description].png` in the docs repo

Screenshot naming convention:
- `static/img/assets/flow-processors/router-routes-tab.png`
- `static/img/assets/input-processors/file-input-general-tab.png`

### Step 4 — Report back with a structured brief

Come back to Andrew in the same conversation thread with:

```
Here's what I found in the [Asset Name] configuration panel:

**Tabs:** [list them]
**Field inventory:** [brief summary — not a full table yet, just enough to show you've explored it]

**Proposed doc structure:**
- Purpose: [one sentence of what you'd say]
- Prerequisites: [what you'd list]
- Configuration sections: [tab 1 name], [tab 2 name], ...
- Example: [brief description of what example you'd write]

**Questions before I write:**
1. [Question about behavior, not about field names]
2. [Question about edge cases]
3. [Question about prerequisites or dependencies]
```

Keep questions to **2–4 maximum**. Only ask about things you genuinely cannot infer from the UI or from KNOWLEDGE.md. Don't ask about things Andrew already told you in the brief.

### Step 5 — Write the draft

After Andrew answers your questions, write the full reference doc using the template at the top of this file.

**Writing guidelines:**
- Purpose section: write for someone who has never heard of this asset. One concrete sentence of what it does, then context.
- Required fields: mark them clearly in the prose description
- Examples: use the same example values as the quickstart where possible (keeps the docs consistent)
- Tone: clear, direct, no fluff. "This asset reads files from a directory" not "The File Input Asset is a powerful component that enables users to..."

**Field description style (mandatory for all asset docs):**

1. Use **bold field name + description** for individual field explanations. Do NOT use table rows with columns (Required, Type, Default, Description).

2. Use a table ONLY for fields with a fixed set of options (e.g. dropdown with known values). The table columns are **Option** and **Behavior**.

3. Boolean/toggle fields can be inline: `**Create Sub Folders** — When enabled, layline.io does X. Default: disabled.`

4. Single-field sections can be prose paragraphs.

5. *(inheritable)* annotations go inline in the bold field name: `**Project ID *(inheritable)* — ...**`

Share the draft **inline in the chat** — don't just write it to a file and say "done." Andrew needs to see it to give feedback.

### Step 6 — Iterate

Andrew may give feedback inline. Common types:
- "That field description is wrong — it actually does X" → update KNOWLEDGE.md, fix the doc
- "Add an example for the condition syntax" → add it
- "This section needs more explanation" → expand it
- "Looks good" → proceed to Step 7

### Step 7 — Finalize and PR

1. Write the final doc to the correct path in the docs repo
2. Run `cd ~/Documents/Work/layline/Dev/layline-doc && npm run build` — fix any errors
3. Commit screenshots and doc file
4. Open PR:
   - Branch: `doc-engineer/asset-[asset-name]-YYYY-MM-DD`
   - Title: "DocEngineer: Reference doc — [Asset Name]"
   - Target: `doc-restructured-v2` (NOT main)
5. Notify **Marvin** (not Andrew directly) that the PR is open — include PR number and link

---

## Knowledge Persistence — What Goes Where

After every documentation session, update these files:

### `KNOWLEDGE.md`
New domain knowledge Andrew provided during the session:
- Behavioral clarifications ("Router is first-match-wins, not multi-match")
- Dependency rules ("Mapping Processor always needs both source and target format defined")
- Terminology corrections ("It's called a 'Source' in the UI but a 'connection' in the backend logs")

Write it immediately when Andrew tells you — don't wait until the end of the session.

### `layline-ui-primer.md`
New UI discoveries:
- "Router has 3 tabs: General, Routes, Advanced"
- "The Routes tab has a drag-to-reorder handle on each row"
- "Condition field in Router only appears after you set an Output Port"

Add these under the appropriate section of the primer. This is how future sessions start with more knowledge than this one.

### `memory/YYYY-MM-DD.md`
Session log:
- What asset you documented
- What questions Andrew answered
- What the PR number is
- Any open questions or follow-ups

---

## Chain of Command — Documentation Sessions

For documentation sessions, **you communicate directly with Andrew** — not via Marvin. This is the exception to the normal chain of command.

- During a session: talk directly to Andrew in the chat thread where he briefed you
- On completion: notify **Marvin** that the PR is open (Marvin handles escalation to Andrew if needed)
- If you hit a blocker mid-session (e.g., can't access the app): notify Andrew directly in the thread

---

## How Andrew Starts a Session

Andrew will send you a brief like one of these:

**Minimal:**
> "Document the Router asset."

**With context:**
> "Document the Mapping Processor. It maps fields from a source message structure to a target message structure — like a field-level transformation. Each mapping scenario handles one source→target message type pair."

**With screenshots:**
> "Document the File Input asset. I've attached a few screenshots of the config panel."
> [attached images]

**Your response to any of these:** Start with Step 1 (check memory), then Step 2 (explore app), then Step 4 (report back with brief + questions). Don't ask Andrew to provide more context before you've explored the app yourself — explore first, ask only what the UI can't tell you.

---

## Doc File Locations

| Asset category | UI category | Doc path |
|---|---|---|
| Input Processors | Input Processors | `docs/current/assets/processors-input/` |
| Output Processors | Output Processors | `docs/current/assets/processors-output/` |
| Flow Processors | Flow Processors | `docs/current/assets/processors-flow/` |
| Formats | Formats | `docs/current/assets/formats/` |
| Sources | Sources | `docs/current/assets/sources/` |
| Sinks | Sinks | `docs/current/assets/sinks/` |
| Connections | Connections | `docs/current/assets/connections/` |
| Services | Services | `docs/current/assets/services/` |

Confirm actual paths on first run — the structure may differ slightly.

---

## Quick Checklist (Print and Follow)

```
□ Read brief from Andrew
□ Analyze any provided screenshots (image tool)
□ Check KNOWLEDGE.md + layline-ui-primer.md for existing notes
□ Open app → navigate to asset → explore every tab
□ Report back to Andrew: field inventory + proposed structure + 2–4 questions
□ Receive answers → update KNOWLEDGE.md immediately
□ Write draft using the reference doc template
□ Share draft inline in chat
□ Incorporate Andrew's feedback
□ Andrew provides screenshots → analyze with image tool → insert in doc
□ npm run build → fix errors
□ Commit doc + screenshots → open PR → notify Marvin
□ Update layline-ui-primer.md with new UI discoveries
□ Write session summary to memory/YYYY-MM-DD.md
```
