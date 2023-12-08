function isKoreanName(name: string) {
  return /[가-힣]{2,}/.test(name);
}

export function maskName(name: string) {
  if (isKoreanName(name)) {
    switch (name.length) {
      case 2:
        return name.replace(/([가-힣])([가-힣]+)/, '$1*');
      default:
        return maskExceptForEdge(name, 1);
    }
  } else {
    if (name.length < 3) {
      return name;
    }

    const unmaskedSideSize = name.length < 6 ? 1 : 2;
    return maskExceptForEdge(name, unmaskedSideSize);
  }
}

function maskExceptForEdge(text: string, edgeSize: number) {
  return (
    text.slice(0, edgeSize) +
    text.slice(edgeSize, text.length - edgeSize).replace(/[a-zA-Z가-힇]/g, '*') +
    text.slice(text.length - edgeSize, text.length)
  );
}
