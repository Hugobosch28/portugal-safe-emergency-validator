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

## Purpose

Emergency applications depend on data that must be attributable, current, geographically relevant, and structurally complete.

This project aims to provide reusable validation tools that help developers detect incomplete or unsafe emergency-feed records before those records reach users.

## Planned validation rules

The first version will validate whether an emergency record contains:

- an identifiable official source;
- a source URL or stable source reference;
- issued and updated timestamps;
- an expiry timestamp or explicit validity status;
- an incident or hazard category;
- a severity level;
- a defined geographic area;
- clear public-safety instructions;
- a declared language;
- a stable record identifier.

The validator will return structured errors and warnings.

It will not decide whether an emergency is real, replace an official authority, or generate emergency instructions.

## Safety principles

- Official sources remain authoritative.
- Missing provenance is treated as a validation failure.
- Stale or expired records must be clearly identified.
- The library must not silently invent missing safety information.
- Example data must never be presented as a live emergency alert.

## Intended users

The toolkit is intended for developers, civic-technology teams, researchers, municipalities, and public-safety projects that consume emergency or hazard data.

## Relationship to Portugal Safe

This is an independent open-source toolkit initiated during the development of Portugal Safe.

It does not expose the private Portugal Safe application, credentials, infrastructure, proprietary integrations, or production data.

## Roadmap

1. Define the emergency-record schema.
2. Implement the core validator.
3. Add valid and invalid example records.
4. Add automated tests.
5. Add a command-line interface.
6. Publish a versioned package after validation.

## Contributing

The project is not yet ready for external contributions.

Contribution guidelines and issue templates will be added after the first tested implementation.

## License

MIT License. See [LICENSE](LICENSE).

## Disclaimer

This software is a technical validation aid.

It is not an emergency service, official warning system, medical service, or substitute for instructions from competent authorities.

In an immediate emergency, contact the appropriate emergency services.
