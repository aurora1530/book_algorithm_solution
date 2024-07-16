const solution = (array: number[]): number => {
  let count = 0;
  let flag = false;

  const isEven = (n: number) => n % 2 === 0;

  while (!flag) {
    for (let i = 0; i < array.length; i++) {
      if (isEven(array[i])) {
        const divided = array[i] / 2;
        if (!isEven(divided)) {
          flag = true;
          break;
        }
        array[i] = divided;
      }
    }
    count++;
  }

  return count;
};
