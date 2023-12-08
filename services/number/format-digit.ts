function decimalAdjust(method: (num: number) => number, value: number, exp = 0) {
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return method(value);
  }
  const [magnitude, exponent = 0] = value.toString().split('e');
  const adjustedValue = method(Number(`${magnitude}e${Number(exponent) - exp}`));
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split('e');
  return Number(`${newMagnitude}e${Number(newExponent) + exp}`);
}

export const round = (value: number, exp?: number) => decimalAdjust(Math.round, value, exp);

export const floor = (value: number, exp?: number) => decimalAdjust(Math.floor, value, exp);

export const ceil = (value: number, exp?: number) => decimalAdjust(Math.ceil, value, exp);
