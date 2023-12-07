import { isAndroid, isIos } from './get-os';

export function isMobileWeb() {
  if (isIos() || isAndroid()) {
    return true;
  }
  return false;
}
