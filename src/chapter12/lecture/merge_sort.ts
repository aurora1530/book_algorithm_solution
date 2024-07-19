export const mergeSort = (array: number[], left: number, right: number) => {
  if (right - left === 1) return;

  let mid = left + Math.floor((right - left) / 2);

  mergeSort(array, left, mid);
  mergeSort(array, mid, right);

  const joined:number[] = []
  for(let i=left;i<mid;i++) joined.push(array[i])
  for(let i=right-1;i>=mid;i--) joined.push(array[i])

  let leftIdx = 0;
  let rightIdx = joined.length - 1;
  for (let i = left;i<right;i++) {
    if(joined[leftIdx] <= joined[rightIdx]){
      array[i] = joined[leftIdx++]
    }else{
      array[i] = joined[rightIdx--]
    }
  }
};

const array = [5,2,3,5,1,6,2,6,2,0]
mergeSort(array,0,array.length)
console.log(array)
