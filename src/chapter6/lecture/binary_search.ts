export const binarySearch = <T>(
  sortedArray: T[],
  key: T,
  compareFunc: (a: T, b: T) => -1 | 0 | 1 = (a, b) => (a === b ? 0 : a < b ? -1 : 1)
): number => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (right >= left) {
    const mid = left + Math.min((right - left) / 2);

    const compare = compareFunc(sortedArray[mid], key);
    if (compare === 0) return mid;
    if (compare === 1) right = mid - 1;
    if (compare === -1) left = mid + 1;
  }
  return -1;
};