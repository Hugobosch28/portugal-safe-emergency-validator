const { validateEmergencyRecord } = require("../src/validator");

const validRecord = {
  id: "test-001",
  source: "official-source",
  issuedAt: "2026-07-31T05:00:00Z",
  updatedAt: "2026-07-31T05:10:00Z",
  category: "wildfire",
  severity: "high",
  location: "Portugal",
  language: "en",
  instructions: "Follow official instructions."
};

test("valid emergency record passes", () => {
  const result = validateEmergencyRecord(validRecord);

  expect(result.valid).toBe(true);
});

test("missing required fields fail validation", () => {
  const result = validateEmergencyRecord({
    id: "bad-001"
  });

  expect(result.valid).toBe(false);
});

test("invalid category fails validation", () => {
  const result = validateEmergencyRecord({
    ...validRecord,
    category: "unknown-event"
  });

  expect(result.valid).toBe(false);
});

test("invalid severity fails validation", () => {
  const result = validateEmergencyRecord({
    ...validRecord,
    severity: "critical-level"
  });

  expect(result.valid).toBe(false);
});

test("invalid language fails validation", () => {
  const result = validateEmergencyRecord({
    ...validRecord,
    language: "xx"
  });

  expect(result.valid).toBe(false);
});
