import { MemoStorage } from './memory';
import { SessionStorage } from './session';
import { Storage } from './types';

export function generateSessionStorage(): Storage {
  if (SessionStorage.canUse()) {
    return new SessionStorage();
  }
  return new MemoStorage();
}

export const safeSessionStorage = generateSessionStorage();
