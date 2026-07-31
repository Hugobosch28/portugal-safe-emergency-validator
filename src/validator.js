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

  return {
    valid: errors.length === 0,
    errors
  };
}

module.exports = {
  validateEmergencyRecord
};
