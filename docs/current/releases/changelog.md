# Changelog

All notable changes to layline.io by release.

## [2.5.21] - 2026-07-16

### Bug Fixes
- **Alarm Targets**: Creating or saving an alarm target now stores and displays the description. Previously the name was returned in place of the description.
- **Pekko S3 Source**: Fixed `SubscriptionWithCancelException$NoMoreElementsNeeded$` exception that caused the S3 source to crash during streaming operations.
- **SPA — Workflow Instance View**: Fixed `guiState.workflowInstanceView.splitterOrientation` access error that threw exceptions in the workflow instance viewer.

---

## [2.5.19] - 2026-06-22

### Bug Fixes
- **Pekko S3 Source**: Fixed `SubscriptionWithCancelException$NoMoreElementsNeeded$` exception that caused the S3 source to crash during streaming operations.

---

## [2.5.18] - 2026-06-11

### ⚠️ Breaking Changes
- **JDBC Service**: Service startup now fails immediately if password variables cannot be expanded, rather than starting with unresolved values and failing cryptically at runtime. Ensure all password substitutions are resolvable before deployment.

### Improvements
- **AWS Extension — Lookup Logging**: Added a `Log single parameter lookups` setting to control whether individual AWS parameter lookups are logged. Useful for reducing noise when lookups occur frequently.
- **AWS Extension — Error Logging**: Enhanced error logging for AWS operations. Lookup failures are now logged at `ERROR` level with detailed context.
- **AWS Extension — Retry Handling**: Ask timeout exceptions are now included in the retry mechanism, improving resilience against transient AWS API timeouts.
- **AWS Extension — Parameter Lookup Resilience**: Enhanced logging and retry logic for AWS parameter lookups, providing better diagnostics when lookups fail.
- **Engine — Activation Environment**: After a deployment activation, the engine now rebuilds the activation environment once all extensions have finished initializing. Remaining configuration (resources, formats, connections, sources, sinks, services, and workflows) is applied against that fresh environment, not one that extensions may have mutated during startup.

### Bug Fixes
- **NFS Connection**: Long-running NFS operations are no longer dropped when the connection's inactivity timeout fires while a command is still running. The executor now only disconnects when the command queue is empty.
- **OAuth Storage**: Unexpected errors during OAuth token operations are now logged instead of crashing the OAuth storage actor. Previously those unhandled errors caused periodic restarts and interrupted token refresh.
- **AWS Extension — Secret ARN Validation**: Secret ARN pattern matching now correctly accepts simple ARNs without path suffixes.
- **AWS Extension — Race Condition**: Fixed a possible race condition during AWS extension initialization and shutdown.

---

## [2.5.16] - 2026-05-20

### Features
- **OAuth Authorization Code Flow with PKCE**: Added support for the OAuth authorization code flow with PKCE (Proof Key for Code Exchange), providing a more secure alternative to the implicit flow.
- **OAuth Local Redirect Callback**: The OAuth authorization code callback is now handled via a local redirect page, enabling seamless code and state capture without external redirect URLs.
- **OAuth Redirect URL Override**: Added support for specifying an optional OAuth redirect URL via the UI, allowing flexibility when the default redirect URI is not suitable.

---

## [2.5.15] - 2026-05-13

### Features
- **OAuth Authorization Code Flow**: Added full support for the OAuth authorization code flow in the OAuth client configuration.
- **Scheduler-Aware Workflow Status**: Workflow status is now scheduler-aware with per-node instance limits, providing better visibility into resource allocation across the cluster.

### Bug Fixes
- **VFS ListDir**: The `ListDir` function no longer fails when a trailing slash is provided in the path argument.
- **String Substitution**: The `StringSubstitutor` now fails explicitly on unknown substitution values rather than silently leaving placeholders unresolved.

---

## [2.5.14] - 2026-05-07

### Improvements
- **SMB Mount Points — Windows Path Handling**: Improved path normalization for SMB mount points on Windows servers. File rename and move operations now work correctly when target paths contain leading slashes.
- **Mount Point Editor**: Enhanced path validation, sort order, and tree filtering in the mount point editor.
- **Environment & Secret Editor**: Improved sort order and value entry experience.
- **Extension & Prometheus Viewer**: Refactored layout and styling for improved responsiveness and readability.
- **EngineConfig & SchedulerSettings Integrity**: Added improved integrity checks when saving engine and scheduler configurations.
- **Password Hash Verification**: The OAuth client editor now displays hash information for configured passwords, allowing verification that passwords are correct without revealing them.

### Bug Fixes
- **Editor Modification State**: Fixed an issue where the editor modification state was lost after renaming a file or folder. Editor models are now properly cleared on project close.
- **SchedulerSettingsWorkflows**: Fixed an infinite loop on open and resolved issues with zombie entries and missing inherited captions.
- **Workflow Deletion**: Deleting a workflow no longer leaves orphaned processor instances behind.
- **Code Editor Minimap**: Disabled the minimap in code editors to reduce visual clutter.
- **AlarmTable Confirmation Label**: Updated the label for the confirmation column in the alarm table for clarity.
- **Service Mapping Soft Deletes**: Added deleted-overlay logic to the `ServiceMappingCard` table to properly support soft-deleted service mappings.

---

## [2.5.11] - 2026-04-16

### Features
- **HTTP Service — Special Character Support**: The HTTP Service now supports parameters with special characters including square brackets `[`, `]`, and dots `.` in parameter names and values. This enables integration with APIs that use bracket notation for arrays or nested objects (e.g., `user[0][name]`, `items[1].id`).

### Improvements
- **HTTP Service Headers & Parameters**: Added `headerName` and `parameterName` fields for more explicit header and parameter configuration.
- **Snapshot Status Messages**: Improved snapshot status messages to provide clearer feedback about snapshot progress and state transitions.
- **Shelf Component**: Minor fixes and improvements to shelf logic for better stability.

---
