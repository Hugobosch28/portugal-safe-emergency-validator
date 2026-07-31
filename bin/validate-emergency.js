#!/usr/bin/env node

const { validateEmergencyRecord } = require("../src/validator");

const record = {
  id: "cli-test-001",
  source: "official-source",
  issuedAt: "2026-07-31T05:00:00Z",
  updatedAt: "2026-07-31T05:10:00Z",
  category: "wildfire",
  severity: "high",
  location: "Portugal",
  language: "en",
  instructions: "Follow official instructions."
};

const result = validateEmergencyRecord(record);

console.log(JSON.stringify(result, null, 2));
