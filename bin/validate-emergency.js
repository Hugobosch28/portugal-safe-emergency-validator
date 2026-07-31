#!/usr/bin/env node

const fs = require("fs");
const { validateEmergencyRecord } = require("../src/validator");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: node bin/validate-emergency.js <json-file>");
  process.exit(1);
}

const json = JSON.parse(fs.readFileSync(filePath, "utf8"));

const result = validateEmergencyRecord(json);

console.log(JSON.stringify(result, null, 2));

if (!result.valid) {
  process.exit(1);
}
