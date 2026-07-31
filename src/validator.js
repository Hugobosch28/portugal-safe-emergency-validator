function validateEmergencyRecord(record) {
  const requiredFields = [
    "id",
    "source",
    "issuedAt",
    "updatedAt",
    "category",
    "severity",
    "location",
    "language",
    "instructions"
  ];

  const errors = [];

  for (const field of requiredFields) {
    if (!record[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  const allowedCategories = [
    "wildfire",
    "flood",
    "storm",
    "earthquake",
    "heat",
    "drought",
    "power"
  ];

  const allowedSeverities = [
    "low",
    "medium",
    "high",
    "critical"
  ];

  const allowedLanguages = [
    "en",
    "nl",
    "pt",
    "de",
    "fr"
  ];

  if (record.category && !allowedCategories.includes(record.category)) {
    errors.push(`Invalid category: ${record.category}`);
  }

  if (record.severity && !allowedSeverities.includes(record.severity)) {
    errors.push(`Invalid severity: ${record.severity}`);
  }

  if (record.language && !allowedLanguages.includes(record.language)) {
    errors.push(`Invalid language: ${record.language}`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

module.exports = {
  validateEmergencyRecord
};
