export const isResidentRegistration = (str: string) => {
  const re = /(?<=[^0-9a-zA-Z])([0-9][0-9][01][0-9][0-3][0-9][\s-:.]?)([1-4]\d{6})(?=[^0-9a-zA-Z])/;
  return re.test(str);
};

export const isForeignerRegistration = (str: string) => {
  const re = /(?<=[^0-9a-zA-Z])([0-9][0-9][01][0-9][0-3][0-9][\s-:.]?)([5-8]\d{6})(?=[^0-9a-zA-Z])/;
  return re.test(str);
};

export const isPassport = (str: string) => {
  const re = /(?<=[^0-9a-zA-Z])([M|S|R|O|D|m|s|r|o|d][0-9]{8})(?=[^0-9a-zA-Z])/;
  return re.test(str);
};

export const isDriverLicense = (str: string) => {
  const re = /(?<=[^0-9a-zA-Z])(\d{2}[\s-:.])(\d{6}[\s-:.])(\d{2})(?=[^0-9a-zA-Z])/;
  return re.test(str);
};

export const isHealthInsurance = (str: string) => {
  const re = /(?<=[^0-9a-zA-Z])([1-9]\d{10})(?=[^0-9a-zA-Z])/;
  return re.test(str);
};
