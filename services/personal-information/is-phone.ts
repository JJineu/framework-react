export function isPhone(phoneNumber: string) {
  const re = /^((\+?82)[ -]?)?0?1([0|1|6|7|8|9]{1})[ -]?\d{3,4}[ -]?\d{4}$/;
  return re.test(phoneNumber);
}

export function isBusinessPhone(phoneNumber: string) {
  const re = /^(1544|1566|1577|1588|1644|1688)-?([0-9]{4})$/;
  return re.test(phoneNumber);
}
