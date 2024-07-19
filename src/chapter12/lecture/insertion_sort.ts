export const insertionSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    const v = array[i];

    let j= i
    for (; j > 0; j--) {
      if (array[j - 1] > v) array[j] = array[j - 1];
      else break
    }
    array[j] = v
  }
};


const a = [1,3,2,4,0,5]
insertionSort(a)
console.log(a)