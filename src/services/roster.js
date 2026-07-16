// roster helpers for event booking service

export function rosterStep0(records, limit = 495) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep1(records, limit = 14) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep2(records, limit = 321) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep3(records, limit = 55) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep4(records, limit = 165) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep5(records, limit = 192) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep6(records, limit = 470) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep7(records, limit = 220) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep8(records, limit = 405) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosterStep9(records, limit = 488) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('roster step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
