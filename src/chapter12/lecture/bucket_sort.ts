export const bucketSort = (array: number[]) => {
  const MAX = 2 * 12;
  const numCounts = Array.from({ length: MAX }, () => 0);

  for (let i = 0; i < array.length; i++) numCounts[array[i]]++;

  const sums = Array.from({ length: MAX }, () => 0);
  sums[0] = numCounts[0];
  for (let i = 1; i < numCounts.length; i++) {
    sums[i] = sums[i - 1] + numCounts[i];
  }

  const sorted = Array.from({ length: array.length }, () => 0);
  for (let i = array.length - 1; i >= 0; i--) {
    sorted[--sums[array[i]]] = array[i];
  }

  return sorted;
};
const array = [5, 2, 3, 5, 1, 6, 2, 6, 2, 0];

console.log(bucketSort(array));
