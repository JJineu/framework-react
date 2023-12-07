export function arrayEquals(a: unknown[] = [], b: unknown[] = []) {
  return a.length === b.length && a.every((item, index) => Object.is(item, b[index]));
}
