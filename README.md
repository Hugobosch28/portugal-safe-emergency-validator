# Portugal Safe Emergency Validator

Open-source validation toolkit for official emergency and public-safety data feeds.

## Status

**Working prototype.**

The repository contains:

- emergency record validation schema;
- validator implementation;
- valid and invalid example records;
- automated tests;
- command-line validation tool.

The current version validates structural completeness of emergency records before they are consumed by applications.

## Why this matters

Emergency applications often consume data from multiple official sources.

Incomplete, outdated, or structurally invalid emergency records can reduce the reliability of information delivered to users.

This project provides validation tooling that helps developers detect missing provenance, incomplete fields, and unsafe record structures before emergency data is consumed by applications.

## Verification

The current validator implementation has automated tests.

Test result:

- Test Suites: 1 passed
- Tests: 2 passed
- Valid emergency record: PASS
- Invalid emergency record detection: PASS

Run tests locally:

```bash
npm install
npm test
​`​`​`
