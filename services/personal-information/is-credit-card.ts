export const isCreditCard = (str: string) => {
  const re = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
  return re.test(str);
};
