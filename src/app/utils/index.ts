export function countDots(str: string) {
  return (str.match(/\./g) || []).length;
}

export function countCommas(str: string) {
  return (str.match(/,/g) || []).length;
}
