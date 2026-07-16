// search helpers for event booking service

export function searchStep0(records, limit = 324) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep1(records, limit = 73) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep2(records, limit = 122) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep3(records, limit = 265) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep4(records, limit = 154) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep5(records, limit = 133) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep6(records, limit = 211) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep7(records, limit = 419) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
