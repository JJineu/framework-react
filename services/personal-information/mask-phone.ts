function isHyphenSeparated(phoneNumber: string) {
  return /^\d{2,3}-\d{3,4}-\d{4}$/.test(phoneNumber);
}

function isSeoulPhoneNumber(phoneNumber: string) {
  return /^02\d+$/.test(phoneNumber);
}

function maskAll(str: string) {
  return str.replace(/./g, '*');
}

export function maskPhoneNumber(phoneNumber: string) {
  if (isHyphenSeparated(phoneNumber)) {
    return phoneNumber.replace(/^(\d{2,3})-(\d{3,4})-(\d{4})$/, (_, p1, p2, p3) => `${p1}-${maskAll(p2)}-${p3}`);
  }
  if (isSeoulPhoneNumber(phoneNumber)) {
    return phoneNumber.replace(/^02(\d{3,4})(\d{4})/, (_, p1, p2) => `02${maskAll(p1)}${p2}`);
  }
  return phoneNumber.replace(/^(\d{3})(\d{3,4})(\d{4})/, (_, p1, p2, p3) => `${p1}${maskAll(p2)}${p3}`);
}
