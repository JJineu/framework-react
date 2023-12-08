export function groupBy<T extends Record<string, unknown>>(arr: T[], key: keyof T) {
  return arr.reduce((result: Record<string, T[]>, current) => {
    const groupKey = current[key] as string;
    const group = result[groupKey];

    if (group == null) {
      result[groupKey] = [current];
    } else {
      group.push(current);
    }

    return result;
  }, {});
}
