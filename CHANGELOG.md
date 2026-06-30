# Changelog

## [0.36.2] - 2026-06-30

### Changed
- Re-publish after version conflict (0.36.1 was already published by first CI run).

## [0.36.1] - 2026-06-30

### Changed
- Inline `publish-release-npm` job in trigger workflow using local actions directly (mirrors qvac-actions PR #7 inline pilot pattern).
- Wire `publish-logic` job to call `.github/actions/publish-logic` composite action instead of inlining the branch/event routing logic.
- Update `npm-publish-gate` comment to clarify when dev/tmp branches fire.
