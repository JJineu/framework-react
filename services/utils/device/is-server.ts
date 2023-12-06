declare const global: unknown;

// runtime check for nodejs
export function isServer() {
  return typeof window === 'undefined' && typeof global !== 'undefined';
}
