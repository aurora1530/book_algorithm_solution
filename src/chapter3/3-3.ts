const solution = (array: number[]): number => {
  let min = Number.MAX_SAFE_INTEGER;
  let min2 = min;

  for (let i = 0; i < array.length; i++) {
    const v = array[i];
    if (v < min) {
      [min2, min] = [min, v];
    } else if (v < min2) {
      min2 = v;
    }
  }

  return min2;
};
