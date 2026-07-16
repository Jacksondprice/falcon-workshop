// invoicing helpers for event booking service

export function invoicingStep0(records, limit = 191) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep1(records, limit = 197) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep2(records, limit = 478) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep3(records, limit = 448) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep4(records, limit = 229) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep5(records, limit = 55) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep6(records, limit = 466) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
