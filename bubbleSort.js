let arr = [5,7,1,12,3,15,6,18,19]

function firstBubbleSort(arr){
  let redo;
  do {
    redo = false
    for (let i = 0; i < arr.length-1; i++){
      let first = arr[i]
      let second = arr[i + 1]
      if (first > second){
        arr[i] = second
        arr[i+1] = first
        redo = true
      }
    }
  } while (redo);
  return arr
}

console.log(firstBubbleSort(arr))

function secondBubbleSort(arr){
  let arrLength = arr.length
  for (let i = (arrLength - 1); i >= 0; i-- ){
    for (let j = (arrLength - 1); j > 0; j--){
      let first = arr[j-1]
      let second = arr[j]
      if (first > second) {
        arr[j] = first
        arr[j-1] = second

      }
    }
  }
  return arr
}

console.log(secondBubbleSort(arr))
