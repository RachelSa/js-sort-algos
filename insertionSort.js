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
      // move the current element back
      prevIndex -= 1
      //move the index back
    }
  }
  return arr
}

let arr = [5,7,1,12,3,15,6,18,19]
console.log(insertionSort(arr))
