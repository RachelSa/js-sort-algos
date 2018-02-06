function insertionSort(arr){
  for (let i = 1; i < arr.length; i++){
    //for 1...array length, grab the prev index and current element
    let prevIndex = i-1
    let current = arr[i]
    while (arr[prevIndex] > current && prevIndex >= 0){
      // while the previous el is greater than current & previous index is 0 and up
      arr[prevIndex + 1] = arr[prevIndex]
      // move the element at prev index forward
      arr[prevIndex] = current
      prevIndex -= 1
      //move the index back

      // move the current element back
      //console.log(arr)
    }
  }
  return arr
}


let arr = [5,7,1,12,3,15,6,18,19]
console.log(insertionSort(arr))

// function insertionSort([5,7,1,12,3,15,6,18,19]){
//   for (let i = 1; i < arr.length; i++){
//     // i = 1;
//     let prevIndex = i - 1 // 0 // 1
//     let current = arr[i] // 7 // 1
//     while (arr[prevIndex] > current && prevIndex >= 0){
//       // while 5 > 7 && 0 >= 0 FALSE
//       // while 7 > 1 && 1 >= 0 TRUE, continue
//       // while 5 > 1 && 0 >= 0 TRUE, continue
//       arr[prevIndex + 1] = arr[prevIndex]
//       // arr[2] = 7
//       // arr[1] = 5
//       arr[prevIndex] = current
//       // arr[1] = 1
//       // arr[0] = 1
//       prevIndex -= 1
//       // prevIndex = 0
//       // prevIndex = -1
//       // arr = [5,1,7,12...]
//       // arr = [1,5,7, 12...]
//     }
//   }
//   return arr
// }
