# Changelog

All notable changes to `@sidj-thr/npm-package-test` are documented here.

## [0.37.0] - 2026-06-30

### Changed

- CI: migrate to external `sidj-thr-org/actions` composite actions for dist-tag
  determination and OIDC npm publish (validates sparse-checkout gate pattern).
- CI: remove local `npm-publish-gate` action — now exclusively sourced from
  `sidj-thr-org/actions` to replicate and fix the external relative-path issue.
