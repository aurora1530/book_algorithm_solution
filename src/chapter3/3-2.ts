const solution = (array: number[], v: number): number => {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === v) count++;
  }

  return count;
};
