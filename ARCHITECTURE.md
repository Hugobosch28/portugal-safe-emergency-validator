# Architecture

## Overview

Portugal Safe Emergency Validator is an open-source validation component designed to improve the reliability of emergency and public-safety data records.

The validator checks whether emergency data contains the required structure and metadata before it is processed by applications.

## Validation flow

Emergency Record
        |
        v
Schema Validation
        |
        v
Validation Rules
        |
        v
Validation Result

## Components

### src/

Contains the validator implementation.

Responsibilities:

- loading validation rules;
- checking emergency records;
- returning validation results.

### schema/

Contains data structure definitions and validation requirements.

Examples:

- required fields;
- metadata requirements;
- allowed values.

### bin/

Contains command-line tooling for running validation tasks.

### test/

Contains automated tests that verify validator behaviour.

## Data quality principles

The validator focuses on:

- completeness;
- consistency;
- traceability;
- structured emergency information.

## Security principles

The project follows:

- no embedded credentials;
- no private infrastructure data;
- controlled validation rules;
- automated testing before changes are released.

## Future direction

Possible future improvements:

- additional emergency data formats;
- broader validation rules;
- integration with more structured safety data workflows;
- AI-assisted data quality analysis.

The validator remains a supporting technical component and does not replace official emergency authorities.
