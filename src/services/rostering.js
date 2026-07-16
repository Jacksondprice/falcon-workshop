// rostering helpers for event booking service

export function rosteringStep0(records, limit = 392) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep1(records, limit = 321) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep2(records, limit = 412) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep3(records, limit = 263) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep4(records, limit = 319) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep5(records, limit = 362) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep6(records, limit = 429) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep7(records, limit = 317) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep8(records, limit = 354) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep9(records, limit = 98) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep10(records, limit = 462) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
