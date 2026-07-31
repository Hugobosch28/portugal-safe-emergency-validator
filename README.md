[![Test](https://github.com/Hugobosch28/portugal-safe-emergency-validator/actions/workflows/test.yml/badge.svg)](https://github.com/Hugobosch28/portugal-safe-emergency-validator/actions)

# Portugal Safe Emergency Validator

Open-source validation toolkit for emergency and public-safety data records.

## Overview

Portugal Safe Emergency Validator helps developers verify that emergency records contain the required structure, provenance information, timestamps, geographic context, and safety instructions before they are consumed by applications.

The goal is to improve the reliability, traceability, and consistency of emergency information workflows.

## Why this matters

Emergency applications often combine information from multiple official and operational sources.

Incomplete records, missing provenance, invalid timestamps, or unclear instructions can reduce the reliability of safety information delivered to users.

This project provides a validation layer that helps detect structural problems before emergency data is processed by downstream systems.

## Features

The validator currently checks:

- required emergency record fields;
- source and provenance information;
- issued and updated timestamps;
- emergency categories;
- severity levels;
- geographic information;
- language metadata;
- safety instructions.

The repository includes:

- validation schema;
- validator implementation;
- command-line validation tool;
- example emergency records;
- automated tests;
- GitHub Actions CI workflow.

## Project Structure

```
src/        Validator implementation
bin/        Command-line validation tool
schema/     Emergency record schema and examples
test/       Automated tests
.github/    Continuous integration workflow
```

## Installation

Requirements:

- Node.js 20+

Install dependencies:

```bash
npm install
```

## Run Tests

Execute the automated test suite:

```bash
npm test
```

Current test coverage includes:

- valid emergency record acceptance;
- invalid emergency record rejection;
- required field validation.

## Validation Example

A valid emergency record returns:

```json
{
  "valid": true,
  "errors": []
}
```

An invalid record returns validation errors describing missing or incorrect fields.

## Design Principles

This project follows these principles:

- traceable emergency data;
- explicit validation failures;
- separation between data validation and emergency decision-making;
- no embedded credentials or secrets;
- security-first repository practices.

## Scope

This validator checks the structure and quality of emergency records.

It does not:

- create emergency alerts;
- replace official emergency authorities;
- verify that external sources are truthful;
- guarantee real-world emergency outcomes.

The validator is a supporting technical component, not a replacement for official emergency services.

## Verification

Current repository verification:

- GitHub Actions CI: passing
- Test Suites: 1 passed
- Tests: 2 passed
- Security checks completed
- No committed secrets detected

## Relationship to Portugal Safe

This project is an independent open-source component related to emergency data quality and public-safety technology.

It is designed to support reliable emergency information systems without exposing private application infrastructure or operational credentials.

## License

MIT License
