import { NumberTypedStorage } from './number-typed-storage';
import { TypedStorage, TypedStorageOptions } from './typed-storage';
import { safeLocalStorage } from '../local-safe';
import { safeSessionStorage } from '../session-safe';

export function generateTypedStorage<T>(key: string, options: TypedStorageOptions<T> = {}) {
  const { initialValue, ...others } = options;

  if (typeof initialValue === 'number') {
    return new NumberTypedStorage(key, { ...others, initialValue });
  }

  return new TypedStorage(key, options);
}

export function generateTypedLocalStorage<T>(key: string, options: Omit<TypedStorageOptions<T>, 'storage'> = {}) {
  return generateTypedStorage<T>(key, { ...options, storage: safeLocalStorage });
}

export function generateTypedSessionStorage<T>(key: string, options: Omit<TypedStorageOptions<T>, 'storage'> = {}) {
  return generateTypedStorage<T>(key, { ...options, storage: safeSessionStorage });
}
