// geocoding helpers for event booking service

export function geocodingStep0(records, limit = 385) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep1(records, limit = 333) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep2(records, limit = 32) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep3(records, limit = 311) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep4(records, limit = 238) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep5(records, limit = 481) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep6(records, limit = 461) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
