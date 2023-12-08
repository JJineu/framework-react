export function uniqueBy<T extends Record<string, unknown>>(arr: T[], key: keyof T): T[] {
  return arr.reduce((result: T[], current) => {
    const idx = result.findIndex(item => item[key] === current[key]);
    if (idx === -1) {
      result.push(current);
    }
    return result;
  }, []);
}
