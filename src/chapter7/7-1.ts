export const solution = (A:number[],B:number[]):number=>{
  A.sort((a,b)=> a < b ? - 1 : 1)
  B.sort((a,b)=> a < b ? - 1 : 1)

  let count = 0;
  let bIdx = 0;
  for(let aIdx= 0;aIdx<A.length;aIdx++){
    while(bIdx < B.length){
      const canMakePair = A[aIdx] < B[bIdx]
      if(canMakePair){
        count++;
        break
      }
      bIdx++
    }
    if(bIdx >= B.length) break
  }

  return count
}