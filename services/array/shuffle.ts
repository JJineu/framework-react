// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export function arrayShuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor((i + 1) * Math.random());
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
