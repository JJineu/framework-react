export function groupBy<T extends Record<string | number, unknown>>(data: T[], key: keyof T) {
  return data.reduce((result: Record<string | number, T[]>, current) => {
    const groupKey = current[key] as string | number;
    const group = result[groupKey];

    if (group == null) {
      result[groupKey] = [current];
    } else {
      group.push(current);
    }

    return result;
  }, {});
}
