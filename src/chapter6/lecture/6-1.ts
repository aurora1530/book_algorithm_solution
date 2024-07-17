export const binarySearch = (sortedArray: number[], key: number): number => {
  let right = sortedArray.length - 1;
  let left = 0;
  while (right >= left) {
    const mid = left + Math.floor((right - left) / 2);

    if (sortedArray[mid] === key) return mid;
    if (sortedArray[mid] > key) right = mid - 1;
    if (sortedArray[mid] < key) left = mid + 1;
  }

  return -1;
};

