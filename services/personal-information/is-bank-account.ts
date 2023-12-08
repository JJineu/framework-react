export function isBankAccount(bankAccount: string) {
  const re = /(?<=[^0-9a-zA-Z])(\d{3}[\s-:.])(\d{3}[\s-:.])(\d{6})(?=[^0-9a-zA-Z])/;
  return re.test(bankAccount);
}
