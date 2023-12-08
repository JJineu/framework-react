export function hyphenPhone(phoneNumber: string) {
  return phoneNumber.replace(/[^0-9]/g, '').replace(/(^02.{0}|^01.{1}|[0-9]{3})(\d+)(\d{4})/, '$1-$2-$3');
}

