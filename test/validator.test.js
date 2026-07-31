const { validateEmergencyRecord } = require("../src/validator");

test("valid emergency record passes", () => {
  const record = {
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

  const result = validateEmergencyRecord(record);

  expect(result.valid).toBe(true);
});

test("invalid emergency record fails", () => {
  const result = validateEmergencyRecord({
    id: "bad-001"
  });

  expect(result.valid).toBe(false);
});
