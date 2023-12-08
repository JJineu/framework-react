import { isKoreanName } from './is-name';

export function maskName(name: string) {
  if (isKoreanName(name)) {
    return maskKoreanName(name);
  } else {
    return maskNonKoreanName(name);
  }
}

function maskKoreanName(name: string) {
  if (name.length === 2) {
    return name.replace(/([가-힣])([가-힣]+)/, '$1*');
  } else {
    return maskExceptForEdge(name, 1);
  }
}

function maskNonKoreanName(name: string) {
  if (name.length < 3) {
    return name;
  }

  const unmaskedSideSize = name.length < 6 ? 1 : 2;
  return maskExceptForEdge(name, unmaskedSideSize);
}

function maskExceptForEdge(text: string, edgeSize: number) {
  return (
    text.slice(0, edgeSize) +
    text.slice(edgeSize, text.length - edgeSize).replace(/[a-zA-Z가-힇]/g, '*') +
    text.slice(text.length - edgeSize, text.length)
  );
}
