const solution = (array: number[]): number => {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    const v = array[i];

    if (v < min) min = v;
    if (v > max) max = v;
  }

  return max - min;
};
