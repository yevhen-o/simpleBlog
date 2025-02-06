export { IDENTIFIERS, getUrl } from "./urlHelper";

export function countDots(str: string) {
  return (str.match(/\./g) || []).length;
}

export function countCommas(str: string) {
  return (str.match(/,/g) || []).length;
}

export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}
