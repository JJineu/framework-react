function maskAll(str: string) {
  return str.replace(/./g, '*');
}

export function maskPhone(phoneNumber: string) {
  return phoneNumber.replace(
    /(^02.{0}|^01.{1}|[0-9]{3})-?([0-9]+)-?([0-9]{4})/,
    (_, p1, p2, p3) => `${p1}-${maskAll(p2)}-${p3}`
  );
}
