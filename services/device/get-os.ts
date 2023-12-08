import { isServer } from './is-server';

export function getOSByUserAgent() {
  if (isServer()) {
    return false;
  }

  if (isIos()) {
    return 'ios';
  }

  if (isAndroid()) {
    return 'android';
  }

  return 'web';
}

export const isIos = () => window.navigator.userAgent.match(/ipad|iphone/i) !== null;

export const isAndroid = () => window.navigator.userAgent.match(/Android/i) !== null;
