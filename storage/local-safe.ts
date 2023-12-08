import { LocalStorage } from './local';
import { MemoStorage } from './memory';
import { Storage } from './types';

function generateStorage(): Storage {
  if (LocalStorage.canUse()) {
    return new LocalStorage();
  }
  return new MemoStorage();
}

export const safeLocalStorage = generateStorage();
