export const quickSort = (array: number[], left: number, right: number) => {
  if (right - left <= 1) return;
  const pivotIdx = Math.floor((left + right) / 2);
  const pivot = array[pivotIdx];

  //swap
  [array[pivotIdx], array[right - 1]] = [array[right - 1], array[pivotIdx]];

  let i = 0;
  for (let j = left; j < right - 1; j++) {
    if (array[j] < pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  //swap
  [array[i], array[right - 1]] = [array[right - 1], array[i]];

  quickSort(array, 0, i);
  quickSort(array, i + 1, right);
};

const a = [1, 3, 2, 4, 0, 5];
quickSort(a, 0, a.length);
console.log(a);
