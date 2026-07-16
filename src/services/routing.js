// routing helpers for event booking service

export function routingStep0(records, limit = 237) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep1(records, limit = 102) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep2(records, limit = 356) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep3(records, limit = 62) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep4(records, limit = 432) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep5(records, limit = 23) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep6(records, limit = 345) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep7(records, limit = 294) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep8(records, limit = 474) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep9(records, limit = 372) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function routingStep10(records, limit = 115) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('routing step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
