# DOC-PLAN.md — DocEngineer Workspace

Legend: ✅ DONE | ⚠️ PARTIAL | 🔴 TODO | ⚫ REMOVED

Last Updated: 2026-04-08

---

## Executive Summary

This plan covers two parallel workstreams:
1. **Asset Reference Documentation** — ✅ COMPLETE (98 assets documented)
2. **Documentation Restructuring** — 🔄 IN PLANNING (aligning docs with app navigation)

The restructuring addresses a fundamental misalignment: docs are organized by concept, but the app is organized by task. This causes user confusion and documentation gaps.

---

## Restructuring Overview

### Problem Statement
- **App version**: 2.5.2
- **Docs version**: 2.0.0 (0.5 versions behind)
- **Structure mismatch**: Docs follow "learning order" (Concept → Assets → Reference), app follows "task order" (Project → Operations → Shelf → Settings)

### Missing Documentation (Critical Gaps)
| App Feature | Status | Issue |
|-------------|--------|-------|
| Project Tab (create, import, manage) | 🔴 MISSING | LAY-68 |
| Shelf (asset library) | 🔴 MISSING | LAY-69 |
| Users & Roles management | 🔴 MISSING | LAY-70 |
| Cluster Login | ✅ DONE | LAY-40 |
| Operations Overview | ⚫ CANCELED | LAY-39 |

### New Structure (Proposed)

```
docs/
├── quickstart/              # Keep — getting started
├── project/                 # NEW — mirrors Project tab
│   ├── overview/
│   ├── create/
│   ├── import/
│   └── manage/
├── operations/              # Expand — mirrors Operations tab
│   ├── overview/
│   ├── login/              ✅ LAY-40 (DONE)
│   ├── cluster/            🔴 LAY-41
│   ├── alarm-center/       🔴 LAY-42
│   ├── deployment-storage/ 🔴 LAY-43
│   ├── scheduler/          🔴 LAY-44
│   ├── stream-monitor/     🔴 LAY-45
│   ├── user-storage/       🔴 LAY-46
│   ├── security-storage/   🔴 LAY-47
│   ├── access-coordinator/ 🔴 LAY-48
│   ├── ai-storage/         🔴 LAY-49
│   ├── sniffer-directory/  🔴 LAY-50
│   ├── cluster-node-detail/🔴 LAY-51
│   ├── engine-state/       🔄 LAY-52 (In Progress)
│   └── audit-trail/        🔄 LAY-53 (In Progress)
├── shelf/                   # NEW — mirrors Shelf tab
│   ├── overview/           🔴 LAY-69
│   ├── categories/
│   ├── folders/
│   └── elements/
├── configuration/           # NEW — mirrors Settings tab
│   ├── users/              🔴 LAY-70
│   ├── roles/              🔴 LAY-70
│   ├── clusters/
│   ├── application/
│   └── storage/
├── assets/                  # Keep — reference section
├── concepts/                # Keep — secondary reference
├── language-reference/      # Keep — API reference
└── release-notes/           # Keep
```

---

## Phase 1: Foundation (Week 1)

**Goal**: Prepare for restructuring by updating version and creating foundation issues.

| Issue | Task | Status | PR |
|-------|------|--------|-----|
| LAY-71 | Update docs version to 2.5.2 | 🔴 TODO | — |
| LAY-72 | Sync terminology with app UI | 🔴 TODO | — |
| LAY-74 | Create landing page mapping to app structure | 🔴 TODO | — |

---

## Phase 2: Structural Restructure (Week 2-3)

**Goal**: Implement new sidebar structure and move existing content.

| Issue | Task | Status | PR |
|-------|------|--------|-----|
| LAY-73 | Restructure sidebar to match app navigation | 🔴 TODO | — |
| LAY-68 | Project Tab documentation | 🔴 TODO | — |
| LAY-69 | Shelf documentation | 🔴 TODO | — |

---

## Phase 3: Content Gaps (Week 3-5)

**Goal**: Write missing documentation for high-priority gaps.

| Issue | Task | Status | PR |
|-------|------|--------|-----|
| LAY-70 | Users & Roles management | 🔴 TODO | — |
| LAY-41 | Operations: Cluster Tab Overview | 🔴 TODO | — |
| LAY-42 | Operations: Alarm Center | 🔴 TODO | — |
| LAY-43 | Operations: Deployment Storage | 🔴 TODO | — |
| LAY-44 | Operations: Scheduler | 🔴 TODO | — |
| LAY-45 | Operations: Stream Monitor | 🔴 TODO | — |

---

## Phase 4: Remaining Operations (Week 5-7)

**Goal**: Complete remaining Operations tab documentation.

| Issue | Task | Status | PR |
|-------|------|--------|-----|
| LAY-46 | Operations: User Storage | 🔴 TODO | — |
| LAY-47 | Operations: Security Storage | 🔴 TODO | — |
| LAY-48 | Operations: Access Coordinator | 🔴 TODO | — |
| LAY-49 | Operations: AI Storage | 🔴 TODO | — |
| LAY-50 | Operations: Sniffer Directory | 🔴 TODO | — |
| LAY-51 | Operations: Cluster Node Detail | 🔴 BLOCKED | — |
| LAY-52 | Operations: Engine State Tab | 🔄 IN PROGRESS | — |
| LAY-53 | Operations: Audit Trail | 🔄 IN PROGRESS | — |

---

## Phase 5: Cleanup (Week 7-8)

**Goal**: Consolidate redundant content and finalize.

| Issue | Task | Status | PR |
|-------|------|--------|-----|
| LAY-75 | Consolidate redundant content | 🔴 TODO | — |
| LAY-67 | Create index.mdx for workflow assets | 🔄 IN PROGRESS | — |

---

## New Issues Created (2026-04-08)

| Issue | Title | Status | State | PR |
|-------|-------|--------|-------|-----|
| LAY-68 | Doc: Project Tab — Overview and structure | 🔴 TODO | Backlog | — |
| LAY-69 | Doc: Shelf — Asset Library documentation | 🔴 TODO | Backlog | — |
| LAY-70 | Doc: Users & Roles management | 🔴 TODO | Backlog | — |
| LAY-71 | Doc: Update docs version to 2.5.2 | 🔴 TODO | Backlog | — |
| LAY-72 | Doc: Sync terminology with app UI | 🔴 TODO | Backlog | — |
| LAY-73 | Doc: Restructure sidebar to match app navigation | 🔴 TODO | Backlog | — |
| LAY-74 | Doc: Create landing page mapping to app structure | 🔴 TODO | Backlog | — |
| LAY-75 | Doc: Consolidate redundant content | 🔴 TODO | Backlog | — |

---

## Legacy: Asset Reference Documentation (✅ COMPLETE)

All 98 asset reference docs are complete. This work is done and should not be revisited unless the assets themselves change.

### Summary
| Category | ✅ Done | ⚠️ Partial | 🔴 Missing |
|----------|---------|-------------|------------|
| Services | 18 | 0 | 0 |
| Resources | 7 | 0 | 0 |
| Processors — Flow | 7 | 0 | 0 |
| Processors — Input | 6 | 0 | 0 |
| Processors — Output | 3 | 0 | 0 |
| Connections | 10 | 0 | 0 |
| Sinks | 16 | 0 | 0 |
| Sources | 18 | 0 | 0 |
| Extensions | 2 | 0 | 0 |
| Workflows/Deployments | 5 | 0 | 0 |
| Formats | 6 | 0 | 0 |
| **Total** | **98** | **0** | **0** |

### Completed Asset Documentation

<details>
<summary>Click to expand full asset documentation list</summary>

#### ✅ Services (18 assets + 1 intro page)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| Proxy Service | ✅ DONE | #46 | 140l — Purpose+How It Works+Config+Example+See Also |
| VirtualFs Service | ✅ DONE | #47 | 230l — Purpose+Config+Service Functions+Example+Testing+See Also |
| Aerospike | ✅ DONE | — | 629l, 22 screenshots — full |
| AI Service | ✅ DONE | #57, #58 | 328l — rewrite + Python tab switcher |
| Cassandra | ✅ DONE | — | 358l, 15 screenshots — full |
| DynamoDB | ✅ DONE | #41 | 355l, 5 screenshots — full |
| Email | ✅ DONE | — | 131l, 7 screenshots — full |
| Hazelcast | ✅ DONE | — | 446l, 14 screenshots — full |
| HTTP | ✅ DONE | — | 354l, 21 screenshots — full |
| JDBC | ✅ DONE | — | 353l, 14 screenshots — full |
| KVS | ✅ DONE | #43 | 156l, 1 screenshot — full |
| Message | ✅ DONE | #45 | 331l — full + Script Processor usage section |
| Queue | ✅ DONE | — | 246l, 5 screenshots — full |
| Seq | ✅ DONE | #44 | 133l, 1 screenshot — full |
| SOAP | ✅ DONE | — | 239l, 12 screenshots — full |
| Teams | ✅ DONE | — | 208l, 9 screenshots — full |
| Timer | ✅ DONE | — | 311l, 9 screenshots — full |
| UDP | ✅ DONE | — | 144l, 7 screenshots — full |
| OMS Service | ⚫ REMOVED | — | Andrew removed from list |

#### ✅ Resources (7 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| AI Model | ✅ DONE | #56 | 217l — MLP learning rate fix, Validation Threshold |
| Data Dictionary Updates | ✅ DONE | #49 | Full reference doc |
| Directories | ✅ DONE | #51 | Full reference doc |
| OAuthClient | ✅ DONE | #52 | Full reference doc |
| StatusDefinition | ✅ DONE | #53 | Full reference doc |
| Environment | ✅ DONE | — | 97l, 5 screenshots — full |
| Secret | ✅ DONE | — | 179l, 11 screenshots — full |

#### ✅ Processors — Flow (7 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| AI Classifier | ✅ DONE | #55 | 251l, 4 screenshots — Purpose+Config+Behavior+Example+See Also |
| AI Trainer | ✅ DONE | #55 | 225l, 3 screenshots — full, How Training Works section |
| Input Frame Committer | ✅ DONE | #54 | 165l, 3 screenshots — full |
| JavaScript Flow Processor | ✅ DONE | #59 | Example section with categoryFilter + Arguments screenshot |
| Python Flow Processor | ✅ DONE | #59 | Example section with categoryFilter + Arguments screenshot |
| Throttle | ✅ DONE | — | 74l, 3 screenshots — full |

#### ✅ Processors — Input (6 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| Input Frame | ✅ DONE | — | 72l, 4 screenshots — full |
| Input Kafka | ✅ DONE | — | 212l, 13 screenshots — full |
| Input Message | ✅ DONE | — | 82l, 4 screenshots — full |
| Input Request-Response | ✅ DONE | — | 71l, 4 screenshots — full |
| Input Service | ✅ DONE | — | 81l, 4 screenshots — full |
| Input Stream | ✅ DONE | — | 112l, 6 screenshots — full |

#### ✅ Processors — Output (3 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| Output Frame | ✅ DONE | — | 848l, 54 screenshots — full, multiple sink-specific sections |
| Output Stream | ✅ DONE | — | 107l, 6 screenshots — full |
| Output DevNull | ✅ DONE | — | 50l, 2 screenshots — full |

#### ✅ Connections (10 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| AWS | ✅ DONE | — | 177l, 12 screenshots — full |
| FTP | ✅ DONE | #35 | 123l, 6 screenshots — full |
| Google Cloud | ✅ DONE | #38, #37, #39 | 96l, 4 screenshots — full |
| Kafka | ✅ DONE | — | 164l, 7 screenshots — full |
| Virtual FS | ✅ DONE | #39 | 126l, 9 screenshots — full |
| Email | ✅ DONE | — | 180l, 6 screenshots — full |
| NFS | ✅ DONE | — | 79l, 2 screenshots — full |
| SMB | ✅ DONE | — | 113l, 3 screenshots — full |
| MSGraph | ✅ DONE | — | 99l, 4 screenshots — full |
| WebDAV | ✅ DONE | — | 111l, 5 screenshots — full |

#### ✅ Sinks (16 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| File | ✅ DONE | — | 151l, 4 screenshots — Purpose+Config+Behavior+Example+See Also |
| FTP | ✅ DONE | #35 | 63l, 1 screenshot — full |
| GCS | ✅ DONE | #38, #37 | 141l, 3 screenshots — full + GCS-Specific Notes+Behavior |
| Kafka | ✅ DONE | — | 100l, 6 screenshots — full |
| Virtual FS | ✅ DONE | #39 | 145l, 7 screenshots — full |
| S3 | ✅ DONE | — | 100l, 4 screenshots — full |
| Kinesis | ✅ DONE | — | 59l, 3 screenshots — full |
| EventBridge | ✅ DONE | — | 58l, 3 screenshots — full |
| NFS | ✅ DONE | — | 75l, 2 screenshots — full |
| OneDrive | ✅ DONE | — | 74l, 3 screenshots — full |
| SharePoint | ✅ DONE | — | 79l, 3 screenshots — full |
| SMB | ✅ DONE | — | 65l, 2 screenshots — full |
| SNS | ✅ DONE | — | 59l, 3 screenshots — full |
| SQS | ✅ DONE | — | 64l, 3 screenshots — full |
| WebDAV | ✅ DONE | — | 58l, 2 screenshots — full |
| WebSocket | ✅ DONE | #36 | 65l, 2 screenshots — full |

#### ✅ Sources (18 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| Message | ✅ DONE | #45 | 139l, 1 screenshot — full |
| Email | ✅ DONE | — | 182l, 9 screenshots — full |
| FTP | ✅ DONE | — | 95l, 3 screenshots — full |
| Google Cloud Storage | ✅ DONE | #39 | 122l, 6 screenshots — full |
| HTTP | ✅ DONE | — | 88l, 5 screenshots — full |
| Kafka | ✅ DONE | — | 95l, 5 screenshots — full |
| S3 | ✅ DONE | — | 112l, 6 screenshots — full |
| Timer | ✅ DONE | — | 224l, 19 screenshots — full |
| Virtual FS | ✅ DONE | #39 | 139l, 8 screenshots — full |
| NFS | ✅ DONE | — | 89l, 2 screenshots — full |
| File | ✅ DONE | — | 71l, 1 screenshot — full |
| Onedrive | ✅ DONE | — | 87l, 3 screenshots — full |
| SharePoint | ✅ DONE | — | 93l, 3 screenshots — full |
| SMB | ✅ DONE | — | 77l, 2 screenshots — full |
| SQS | ✅ DONE | — | 84l, 2 screenshots — full |
| UDP | ✅ DONE | — | 64l, 3 screenshots — full |
| WebDAV | ✅ DONE | — | 70l, 2 screenshots — full |
| TCP | ✅ DONE | #60 | Complete reference doc: Name & Description, Required Roles, Host, Advanced Parameters, Example (1 screenshot) |

#### ✅ Extensions (2 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| Prometheus | ✅ DONE | #61 | Complete reference doc: Purpose, Mappings table (Match/Name/Labels/Operations), Example |
| AWS Extension | ✅ DONE | #85 | Reference documentation (merged 2026-04-02) |

#### ✅ Workflows & Deployments (5 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| Workflow | ✅ DONE | #62 | Complete reference doc: Purpose, Configuration (5 sections), IoT sensor example with pipeline diagram |
| Engine Deployment (Deployment Composition) | ✅ DONE | #81, #82 | Reference doc — Deployment Composition (two-PR delivery, merged 2026-04-01) |
| Scheduler | ✅ DONE | #83 | Reference doc — Scheduler Settings (merged 2026-04-02) |
| Tag | ✅ DONE | #80 | Reference doc — Tag Settings Asset (merged 2026-03-31) |
| ReactiveCluster | ✅ DONE | #84 | Reference doc — ReactiveCluster / Deployment Cluster (merged 2026-04-02) |

#### ✅ Formats (6 assets)
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| XML | ✅ DONE | #42 | 116l, 4 screenshots — full |
| ASN.1 | ✅ DONE | — | 291l, 17 screenshots — full |
| Data Dictionary | ✅ DONE | — | 436l, 25 screenshots — full |
| HTTP Format | ✅ DONE | — | 504l, 28 screenshots — full |
| Generic Format | ✅ DONE | — | 1792l, 5 screenshots — full grammar reference |
| Formats Introduction | ✅ DONE | — | 64l, 3 screenshots — overview/concept doc |

#### Sub-tasks
| What | Status | PR | Short Description |
|------|--------|-----|-------------------|
| DataDictionaryCard snippet (LAY-14) | ✅ DONE | #77 (merged 2026-03-29) | Expanded snippet in `docs/snippets/assets/data-dictionary-card.md`. Audit + hardcoded-section replacement pending (→ LAY-9) |
| JS→Python tab audit | ✅ DONE | #48 | Python tab examples added to 15 service docs (merged 2026-03-25) |

</details>

---

## How to Update This Plan

Update this file immediately when:
- A new Linear issue is created or scoped
- A stub, draft, or PR is opened
- A PR merges
- A structural decision is made (file paths, directory layout)
- An issue is cancelled or descoped

Do not wait until end of session.
