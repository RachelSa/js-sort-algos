function selectionSort(arr){
  for (let i = 0; i < arr.length; i++){
    let min_index = i
    for(let j = (i+1); j < arr.length; j++){
      if (arr[min_index] > arr[j]){
        min_index = j
      }
    }
    let first = arr[i]
    arr[i] = arr[min_index]
    arr[min_index] = first
  }
  return arr
}
let arr = [5,7,1,12,3,15,6,18,19]
console.log(selectionSort(arr))
