export const solution = (array: number[]): number[] => {
  const sortedArray = array.slice().sort((a,b)=> a < b ? -1 : 1);

  const result: number[] = Array.from({ length: array.length }, () => -1);
  for (let i = 0; i < array.length; i++) {
    const target = array[i];
    let left = 0;
    let right = array.length - 1;

    while (right >= left) {
      const mid = left + Math.floor((right - left) / 2);

      if (sortedArray[mid] === target) {
        result[i] = mid;
        break;
      }

      if (sortedArray[mid] > target) right = mid - 1;
      if (sortedArray[mid] < target) left = mid + 1;
    }
    if(result[i] === -1) result[i] = left
  }

  return result;
};

