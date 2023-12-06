import { getOSByUserAgent } from './get-os';

export function isMobileWeb() {
  const userAgent = getOSByUserAgent();

  if (userAgent === 'ios' || userAgent === 'android') {
    return true;
  }
  return false;
}
