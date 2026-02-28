# Docusaurus Restructure Roadmap

**Document Owner:** DocEngineer  
**Last Updated:** 2026-02-28  
**Status:** Phase 3.1.2 In Progress

---

## Overview

This roadmap tracks the Docusaurus documentation restructure to align with the layline.io application UI structure.

### Architecture Context (from Andrew)

The application has 3 major components:
1. **Configuration Server** — Backend process, stores project data, serves Configuration Center web UI
2. **Reactive Engine** — One or more backend processes, cluster mode, executes projects
3. **Configuration Center** — The web UI for managing projects

### Key Decisions

| Decision | Resolution |
|----------|------------|
| Version naming | Rename to "2.x" |
| Version 1.2.28 | Remove (no longer maintained) |
| Landing page focus | "Get Started" for new users |
| Priority order | Project → Operations → Shelf → Settings |
| Quickstart section | **KEEP** |

---

## Status Legend

| Symbol | Meaning |
|--------|---------|
| 🔴 Not Started | Task not yet started |
| 🟡 In Progress | Task actively being worked on |
| ✅ Merged | Task merged to main |

---

## Phase 3.1: Restructure Sidebar + New Landing Page

**Target:** Reorganize sidebar to match 4-tab app UI, create new landing page

### 1.1 New Landing Page

| Field | Details |
|-------|---------|
| **Description** | Create new landing page focused on "Get Started" for new users |
| **Status** | ✅ Merged (PR #29) |
| **Percentage Complete** | 100% |
| **PR Link** | https://github.com/layline-io/layline-doc/pull/29 |

### 1.2 Sidebar Restructure

| Field | Details |
|-------|---------|
| **Description** | Restructure sidebar to match app UI: Project → Operations → Shelf → Settings |
| **Status** | 🟡 In Progress |
| **Percentage Complete** | 0% |
| **PR Link** | TBD |
| **Content Reorganization** | ✅ Complete - Moved docs from 02-concept/03-assets to new folders |
| **Internal Links Fixed** | ✅ Complete - Updated 2 broken links in language reference |

### 1.3 Add Installation Section

| Field | Details |
|-------|---------|
| **Description** | Create new top-level section for installation docs |
| **Status** | 🔴 Not Started |
| **Percentage Complete** | 0% |

### 1.4 Add Operations Section

| Field | Details |
|-------|---------|
| **Description** | Create new top-level section for operations docs |
| **Status** | 🔴 Not Started |
| **Percentage Complete** | 0% |

---

## Phase 3.2: Fill Content Gaps

**Target:** Document all features across the 4 main sections

| Item | Description | Status |
|------|-------------|--------|
| 2.1 Project Section | Complete Project documentation | 🔴 Not Started |
| 2.2 Operations Section | Complete Operations documentation | 🔴 Not Started |
| 2.3 Shelf Section | Complete Shelf documentation | 🔴 Not Started |
| 2.4 Settings Section | Complete Settings documentation | 🔴 Not Started |
| 2.5 Configuration Server Docs | Document Configuration Server | 🔴 Not Started |
| 2.6 Reactive Engine Cluster Docs | Document Reactive Engine | 🔴 Not Started |

---

## Phase 3.3: Cleanup, Version Update

**Target:** Final cleanup and version management

| Item | Description | Status |
|------|-------------|--------|
| 3.1 Remove Version 1.2.28 | Remove archived version | 🔴 Not Started |
| 3.2 Version Rename to 2.x | Rename version to "2.x" | 🔴 Not Started |
| 3.3 Update to Docusaurus 2.5.2 | Upgrade Docusaurus | 🔴 Not Started |
| 3.4 Final Content Review | Final link/content check | 🔴 Not Started |

---

## Progress Summary

| Phase | Items | ✅ Merged | 🟡 In Progress | 🔴 Not Started |
|-------|-------|-----------|----------------|----------------|
| 3.1 Restructure | 4 | 1 | 1 | 2 |
| 3.2 Content Gaps | 6 | 0 | 0 | 6 |
| 3.3 Cleanup | 4 | 0 | 0 | 4 |
| **Total** | **14** | **1** | **1** | **12** |
