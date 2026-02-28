# Phase 3: Site Structure Recommendation

**Date:** 2026-02-28  
**Author:** DocEngineer (Phase 3)  
**Based on:** Phase 2 Gap Report (2026-02-27)  
**App Version:** 2.5.2  
**Current Docs Version:** 2.0.0  

---

## Executive Summary

This report addresses the root cause of the documentation gaps identified in Phase 2. The analysis concludes that the documentation structure itself is fundamentally misaligned with the application's UX/IA, causing ongoing drift and missing content. Three options are presented, with a recommended path forward.

**Key Finding:** The docs are structured around *concepts* (Concept → Assets → Language Reference) while the app is structured around *user tasks* (Project → Operations → Shelf → Settings). This mismatch is the primary driver of documentation gaps.

---

## 1. Analysis of Current Structure

### 1.1 Current Documentation Organization (Docusaurus 2.x)

```
docs/
├── 01-quickstart/          # Installation & getting started
│   ├── Overview
│   ├── Install local
│   ├── Install Docker
│   └── Where next
├── 02-concept/             # Conceptual explanations
│   ├── Introduction
│   ├── Workflow Config
│   ├── Data Dictionary
│   ├── Operations
│   ├── Settings
│   └── Advanced
├── 03-assets/              # Asset types (connections, processors, etc.)
│   ├── connections/
│   ├── formats/
│   ├── processors-*/
│   ├── services/
│   ├── sinks/
│   ├── sources/
│   └── workflows/
├── 04-language-reference/  # API / JS reference
└── Release Notes
```

**Framework:** Docusaurus with TypeDoc plugin for API generation  
**Versioning:** Yes (1.2.x archived, 2.0.0 current)  
**Search:** Algolia

### 1.2 Current App Navigation Structure

```
App Tabs:
├── Project    # Recent projects, all projects, create/add/import
├── Operations # Cluster monitoring, login
├── Shelf      # Asset library (categories, folders, elements)
└── Settings   # User storage, users, roles, clusters, app settings
```

### 1.3 Structural Misalignment

| App Feature | Docs Location | Issue |
|-------------|---------------|-------|
| Project tab | docs/03-assets/workflows/ | Wrong category - workflows are NOT projects |
| Operations | docs/02-concept/04-operations/ | Cluster login not documented |
| Shelf | docs/03-assets/ | No Shelf concept - assets only |
| Settings > Users | docs/02-concept/05-settings/ | Users & Roles missing |
| Settings > Clusters | docs/02-concept/05-settings/ | Mismatched terminology |

### 1.4 Problems with Current Structure

1. **Wrong mental model:** Docs follow "learning order" (concept → assets → reference), app follows "task order" (do things → configure)

2. **Asset duplication:** Assets appear in both Concept and Assets sections, creating confusion

3. **No task-based entry point:** A user who wants to "create a project" has no clear starting point

4. **Terminology drift:** App uses "Configuration Server" / "Shelf" / "Operations", docs use "Settings" / n/a / "Operations"

5. **Missing navigation mirrors:** The 4-tab app structure has no equivalent in docs

6. **Version gap:** Docs at 2.0.0, app at 2.5.2 — 0.5 version gap suggests structure wasn't revisited

---

## 2. Recommendations for Better Structure

### 2.1 Reorganize Around User Tasks, Not Concepts

The documentation should mirror the application's navigation structure:

```
docs/
├── quickstart/              # Unchanged - getting started
│   ├── ...
├── project/                 # NEW SECTION - mirrors app "Project" tab
│   ├── overview/           # What is a project
│   ├── create/             # Create new project
│   ├── import/             # Import from archive
│   └── manage/             # Manage projects
├── operations/             # NEW SECTION - mirrors app "Operations" tab  
│   ├── overview/           # Cluster operations intro
│   ├── login/              # Cluster login flow (HIGH GAP)
│   ├── monitoring/         # Cluster monitoring
│   └── audit/              # Audit trail
├── shelf/                  # NEW SECTION - mirrors app "Shelf" tab
│   ├── overview/           # What is the Shelf (HIGH GAP)
│   ├── messages/           # Message category
│   ├── folders/            # Organizing with folders
│   └── elements/           # Working with elements
├── configuration/          # NEW SECTION - mirrors app "Settings" tab
│   ├── users/              # User management (HIGH GAP)
│   ├── roles/              # Roles & permissions (HIGH GAP)
│   ├── clusters/           # Cluster configuration
│   ├── application/        # App preferences
│   └── storage/            # User/Security storage
├── assets/                 # Keep but reorganize
│   ├── connections/
│   ├── processors/
│   ├── services/
│   └── ...
├── concepts/               # Keep, but make secondary reference
├── language-reference/     # Keep - API reference
└── release-notes/          # Keep
```

### 2.2 Content Recommendations

**Add (currently missing in app):**
- Project tab documentation (recent, all, create, add, import)
- Operations > Cluster login documentation
- Shelf functionality (categories, folders, elements)
- Users & Roles management
- About dialog

**Consolidate (redundant):**
- Move workflow concepts from 02-concept/ to appropriate task sections
- Remove duplicate asset descriptions in both Concept and Assets sections

**Deprecate/Archive:**
- Any v1.x references that are no longer relevant (already mostly done)

### 2.3 Navigation Improvements

1. **Add a landing page** that maps directly to the 4-tab app structure
2. **Cross-link** between task sections and conceptual explanations
3. **Add breadcrumbs** showing: `Home > Project > Create`
4. **Improve search** with synonyms (e.g., "cluster" → "operations")

---

## 3. Option Analysis

### Option A: Keep Docusaurus, Reorganize Within Current Framework

**Approach:** Restructure sidebars and content organization, keep Docusaurus

| Factor | Assessment |
|--------|------------|
| Pros | • No migration cost <br> • Docusaurus is mature and stable <br> • Current content mostly reusable <br> • Algolia search already configured <br> • Team familiar with it |
| Cons | • Will require significant sidebar/sidebar.js changes <br> • Version 2.0.0 is aging (Docusaurus 3.x available) <br> • Some UI limitations for task-based docs |
| Risk | LOW |
| Effort | Medium (2-4 weeks for restructure) |

### Option B: Migrate to Starlight (Astro-based)

**Approach:** Move from Docusaurus to Starlight, which offers better customization

| Factor | Assessment |
|--------|------------|
| Pros | • Built on Astro (modern, fast) <br> • Better MDX support <br> • Easier sidebar customization <br> • Built-in search (Pagefind) <br> • Better dark mode |
| Cons | • Migration required (content conversion) <br> • Lose Docusaurus-specific features <br> • API doc plugin different from TypeDoc <br> • Team learning curve |
| Risk | MEDIUM |
| Effort | Medium-High (4-6 weeks) |

### Option C: Migrate to Nextra (Next.js-based)

**Approach:** Use Nextra for documentation with React-like components

| Factor | Assessment |
|--------|------------|
| Pros | • Excellent for interactive docs <br> • Great for embedding live components <br> • Strong ecosystem |
| Cons | • More complex setup <br> • Higher maintenance <br> • Overkill if just docs <br> • Search requires external config |
| Risk | MEDIUM-HIGH |
| Effort | High (6-8 weeks) |

### Option D: Keep Docusaurus + Build Custom Landing Page

**Approach:** Keep current Docusaurus, add custom landing that maps to app

| Factor | Assessment |
|--------|------------|
| Pros | • Minimal disruption <br> • Fixes the navigation problem <br> • Quick win <br> • Low risk |
| Cons | • Doesn't fix underlying content org <br> • More technical debt long-term |
| Risk | LOW |
| Effort | Low (1-2 weeks) |

---

## 4. Recommended Approach & Implementation Plan

### 4.1 Recommendation: **Option A (Keep Docusaurus, Reorganize)**

Given the constraints (existing content, team familiarity, timeline urgency), **Option A is recommended**:

1. **Immediate:** Restructure sidebar to mirror app navigation
2. **Short-term:** Add missing content (Project, Operations, Shelf, Users)
3. **Medium-term:** Consolidate redundant sections
4. **Ongoing:** Keep in sync with app releases

### 4.2 Implementation Plan

#### Phase 3.1: Structural Fix (Week 1-2)
- [ ] Create new sidebar structure mapping to 4-tab app
- [ ] Build new landing page with app-mapped navigation
- [ ] Move/reorganize existing content to new structure
- [ ] Update `_category_.json` files for new sections

**Effort:** ~3-5 days  
**PRs:** 2-3 (sidebar, landing, content moves)

#### Phase 3.2: Content Gap Fill (Week 2-3)
- [ ] Document Project tab (create, add, import)
- [ ] Document Operations > Cluster login
- [ ] Document Shelf (categories, folders, elements)
- [ ] Document Users & Roles management

**Effort:** ~5-8 days  
**PRs:** 4-5 (one feature per PR)

#### Phase 3.3: Cleanup & Polish (Week 3-4)
- [ ] Remove duplicate content
- [ ] Add cross-links between task and concept sections
- [ ] Update version number to 2.5.2
- [ ] Verify all screenshots match current UI

**Effort:** ~3-5 days  
**PRs:** 2-3

#### Phase 3.4: Ongoing (Post-Phase 3)
- [ ] Establish process: docs reviewed with every app release
- [ ] Consider Docusaurus 3.x upgrade (future)
- [ ] Evaluate if structure needs another pass after v3.0

**Effort:** Recurring

### 4.3 Effort Summary

| Phase | Duration | PRs |
|-------|----------|-----|
| Structural Fix | 1-2 weeks | 2-3 |
| Content Gap Fill | 2-3 weeks | 4-5 |
| Cleanup & Polish | 1 week | 2-3 |
| **Total** | **4-6 weeks** | **8-11** |

---

## 5. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Content loss during reorganization | Use git branches, PR reviews for each section |
| Breaking existing links | Update all internal links, test with `npm run build` |
| Breaking Algolia search | Re-index after structural changes |
| User confusion during transition | Add "moved" banners, keep old URLs working |
| Ongoing drift | Require docs update in app release process |

---

## 6. Next Steps

1. **Marvin reviews** this recommendation
2. **Andrew approves** the approach (Option A recommended)
3. **DocEngineer proceeds** with Phase 3.1: structural fix
4. First PR: new sidebar + landing page

---

*Report prepared by DocEngineer (Phase 3)*
