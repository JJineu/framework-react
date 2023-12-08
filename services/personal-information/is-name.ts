export function isKoreanName(name: string) {
  return /[가-힣]{2,}/.test(name);
}
