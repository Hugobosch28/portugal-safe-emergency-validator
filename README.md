# Portugal Safe Emergency Validator

[![Test](https://github.com/Hugobosch28/portugal-safe-emergency-validator/actions/workflows/test.yml/badge.svg)](https://github.com/Hugobosch28/portugal-safe-emergency-validator/actions)

## Reliable emergency data validation for public-safety applications

Portugal Safe Emergency Validator is an open-source technical component designed to improve the reliability of emergency and public-safety data before it is used by applications.

The validator helps detect incomplete, inconsistent, or poorly structured emergency records by checking important data quality requirements such as structure, provenance, timestamps, geographic context, severity, language metadata, and safety information.

Reliable emergency information starts with reliable data.

---

## Project context

Portugal Safe is an independent public-safety application focused on people living in, travelling through, or visiting Portugal.

The application brings together safety-related information from multiple public and official sources to make emergency information easier to understand and access.

Current safety areas include:

* wildfires and nature fires;
* extreme heat and drought;
* storms and other weather risks;
* emergency notifications;
* first-aid information;
* emergency preparation;
* local safety information.

The Emergency Validator is a separate open-source component that supports the reliability of these information workflows.

---

## Why this project matters

During emergencies, information quality is critical.

Safety applications often depend on data from different sources. Before information is shown to users, systems need to understand whether records contain the required structure, context, and traceability.

The validator provides a technical quality layer by checking:

* whether required fields are present;
* whether source information is available;
* whether timestamps are valid;
* whether geographic information is structured correctly;
* whether emergency categories and severity levels are valid;
* whether language metadata is available;
* whether safety instructions follow expected structures.

The goal is not to replace emergency authorities, but to help build more reliable information systems.

---

## Cross-border safety approach

Portugal Safe is designed with the reality of Southern Europe in mind.

Wildfires and other natural risks do not stop at national borders. Portugal, Spain, and France are connected through travel routes, climate risks, and shared regional challenges.

Current scope:

* Portugal: broader public-safety focus.
* Spain and France: currently focused mainly on wildfire-related information.

The long-term vision is to expand toward a wider European safety information network.

---

## Multilingual accessibility

Emergency information is most useful when people can understand it quickly.

Portugal Safe is developed for international users, including:

* residents;
* expatriates;
* tourists;
* travellers moving through Europe.

The application supports five languages to make safety information accessible beyond a single national language.

Future developments include improving multilingual emergency communication and making safety information easier to understand during stressful situations.

---

## AI and future development

Future development directions include AI-assisted safety support based on structured and reliable information.

Possible future capabilities include:

* answering user safety questions;
* guiding users through emergency preparation;
* supporting first-aid information workflows;
* connecting users with structured safety knowledge.

Any AI assistance must remain based on reliable information sources and clear safety boundaries.

In an emergency situation, users should always contact official emergency services.

**Call 112 for immediate emergencies.**

---

## Technical architecture

The validator currently contains:

* JavaScript validation logic;
* JSON schema validation;
* command-line validation tooling;
* example emergency records;
* automated tests;
* GitHub Actions continuous integration.

Validation workflow:

1. Emergency data enters the validator.
2. Validation rules check structure and required information.
3. Errors are returned when requirements are not met.
4. Valid records can continue into supported applications.

---

## Safety boundaries

This project:

* does not replace emergency authorities;
* does not create official emergency alerts;
* does not guarantee emergency outcomes;
* does not replace professional medical or emergency services.

Portugal Safe and the Emergency Validator are supporting technology designed to improve access to reliable safety information.

---

## Roadmap

Future improvements may include:

* additional emergency data formats;
* broader validation rules;
* more official source integrations;
* automated emergency feed quality checks;
* AI-assisted data quality analysis;
* expansion toward wider European safety information workflows.

---

## Open-source principles

The project follows:

* transparent validation rules;
* responsible security practices;
* no exposed credentials or private infrastructure;
* reproducible testing;
* clear technical boundaries.

---

## License

MIT License
