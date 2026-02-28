# Documentation Gap Report

**Date:** 2026-02-27  
**Auditor:** DocEngineer (Phase 2)  
**App Version:** 2.5.2  
**Docs Version:** 2.0.0  

---

## Executive Summary

This audit compares the live Quasar application at `http://localhost:5841` against the Docusaurus documentation at `https://doc.layline.io`. The app is running version 2.5.2 while docs are at version 2.0.0.

---

## Live App Navigation Structure

### Main Tabs
1. **Project** - Project management (recent projects, all projects, create/add/import)
2. **Operations** - Cluster monitoring and login
3. **Shelf** - Asset library (categories, folders, elements)
4. **Settings** - Configuration, users, roles, clusters

### Additional UI Elements
- **About** button - Shows version 2.5.2, copyright 2018-2026
- **Config Server** dropdown - User info (admin)
- **Notifications** indicator

---

## Documentation Structure (v2.0.0)

```
├── Quickstart
│   ├── Overview
│   ├── Full local installation
│   ├── Install with Docker
│   └── Where Next
├── Concept
│   ├── What is layline.io?
│   ├── Workflow Configurations
│   │   ├── Getting started with Workflows
│   │   ├── Workflow Configuration
│   │   ├── Workflow Deployment
│   │   └── Server configuration settings
│   ├── Data Dictionary
│   ├── Operations
│   │   ├── Introduction
│   │   ├── Audit Trail
│   │   ├── Cluster
│   │   └── Engine State
│   ├── Settings
│   │   ├── Introduction (Settings)
│   │   ├── User Storage (Settings)
│   │   ├── Security Storage (Settings)
│   │   ├── Cluster Settings
│   │   └── Application Settings
│   └── Advanced
├── Assets
│   ├── Connections
│   ├── Extensions
│   ├── Formats
│   ├── Flow Processors
│   ├── Input Processors
│   ├── Output Processors
│   ├── Resources
│   ├── Services
│   ├── Sinks
│   ├── Sources
│   └── Workflows
├── Language Reference
├── Migrating from v1.x to v2.0
└── Release Notes
```

---

## Gap Analysis

| Category | Finding | App | Docs | Location | Priority |
|----------|---------|-----|------|----------|----------|
| 🔴 MISSING | Project Tab features | App has "Recent Projects", "All Projects", "Create New Project", "Add Existing Project", "Import from Archive" | Docs don't explicitly document the Project tab UI and workflow | N/A | HIGH |
| 🔴 MISSING | Operations Tab / Cluster Login | App shows cluster login form (Local cluster at localhost:5842) | No docs for cluster login flow | docs/concept/operations/ | HIGH |
| 🔴 MISSING | Shelf / Categories | App has "Shelf" with "Messages" category, folders, elements | No docs for Shelf functionality | N/A | HIGH |
| 🔴 MISSING | User Management (Users & Roles) | App Settings has "Users" and "Roles" tabs under User Storage | Docs mention User Storage but not Users/Roles management | docs/concept/settings/ | HIGH |
| 🔴 MISSING | About Dialog | App shows version 2.5.2, copyright 2018-2026 | No docs for About dialog | N/A | LOW |
| 🟡 RENAMED | Application Settings | App shows "Application Settings" with "Preferences" | Docs call it "Application Settings" | docs/concept/settings/settings-application | LOW |
| 🟡 RENAMED | Configuration Server | App shows "Configuration Server" as section header | Docs use "Settings" category | docs/concept/settings/ | MEDIUM |
| 🟡 RENAMED | Cluster Storage | App shows "Cluster Storage" under Configuration Server | Docs have "Cluster Settings" | docs/concept/settings/settings-cluster | LOW |
| 🟡 RENAMED | Security Storage | App shows "Security Storage" | Docs use "Security Storage (Settings)" | docs/concept/settings/settings-secret-storage | LOW |
| 🟣 OUTDATED | Version Mismatch | App is v2.5.2 | Docs are v2.0.0 | All sections | HIGH |
| 🟣 OUTDATED | Copyright Year | App shows © 2018-2026 | Docs footer shows © 2026 | All pages | LOW |

---

## Detailed Findings

### 1. [🔴 MISSING] Project Tab Not Documented
- **App:** Project tab shows recent projects, all projects with filter, create new, add existing, import archive
- **Docs:** No equivalent section - workflows are mentioned under Assets > Workflows
- **Location:** N/A
- **Priority:** HIGH

### 2. [🔴 MISSING] Operations / Cluster Login Not Documented
- **App:** Operations tab shows cluster selector and login form (Local cluster, localhost:5842)
- **Docs:** Operations section exists but doesn't document cluster login flow
- **Location:** docs/concept/operations/
- **Priority:** HIGH

### 3. [🔴 MISSING] Shelf / Categories Not Documented
- **App:** Shelf tab shows categories (Messages), folders with filter, elements with filter
- **Docs:** No equivalent section - Assets are documented differently
- **Location:** N/A
- **Priority:** HIGH

### 4. [🔴 MISSING] Users & Roles Management Not Documented
- **App:** Settings > User Storage has tabs: "User Storage", "Users", "Roles"
- **Docs:** Settings section mentions User Storage but not Users/Roles management UI
- **Location:** docs/concept/settings/settings-user-storage
- **Priority:** HIGH

### 5. [🔴 MISSING] About Dialog Not Documented
- **App:** About button shows version 2.5.2, copyright 2018-2026, contact info
- **Docs:** No equivalent
- **Location:** N/A
- **Priority:** LOW

### 6. [🟡 RENAMED] Configuration Server vs Settings
- **App:** Top-level section called "Configuration Server"
- **Docs:** Uses "Settings" as category name
- **Location:** docs/concept/settings/
- **Priority:** MEDIUM

---

## Recommendations

1. **HIGH PRIORITY:** Document the Project tab UI and workflow
2. **HIGH PRIORITY:** Add documentation for Operations / Cluster login
3. **HIGH PRIORITY:** Document Shelf functionality or integrate into Assets
4. **HIGH PRIORITY:** Add Users & Roles management documentation
5. **HIGH PRIORITY:** Update docs to version 2.5.2 to reflect current app features
6. **MEDIUM PRIORITY:** Align terminology between "Configuration Server" (app) vs "Settings" (docs)

---

## Browser Automation Notes

- Browser verification: SUCCESS
- Login: Not required (session persisted)
- Navigation: Successfully crawled all tabs
- Operations tab cluster login: Click timeout issues (may need manual verification)
- Docs crawl: Successfully extracted sidebar structure

---

*Report generated by DocEngineer (Phase 2 - Documentation Audit)*
