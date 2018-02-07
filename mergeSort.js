// merge sort divides an array in half continuously,
// until the subarrays have an length of one. It merges the subarrays
// in sorted order, and returns the fully merged array.

class MergeSort{
  constructor(arr){
    this.arr = arr
    let sorted = this.sortArray(this.arr)
    console.log(sorted)
  }

  sortArray(arr){
    if (arr.length <= 1){
      return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return this.merge(this.sortArray(left), this.sortArray(right))
  }

  merge(left, right){
    let result = []
    let leftLength = left.length
    let rightLength = right.length
    let lIndex = 0
    let rIndex = 0
    while ( lIndex < leftLength && rIndex < rightLength){
      if (left[lIndex] > right[rIndex]){
        result.push(right[rIndex])
        rIndex++
      } else {
        result.push(left[lIndex])
        lIndex++
      }
    }
    let rightRemainder = right.slice(rIndex)
    let leftRemainder = left.slice(lIndex)
    result.push(...rightRemainder)
    result.push(...leftRemainder)
    return result
  }
}

let m = new MergeSort([5,7,1,12,3,15,6,18, 19])


// function mergeSort(arr){
//   if (arr.length === 1){
//     return arr
//   }
//   let mid = parseInt(arr.length/2)
//   let left = arr.slice(0,mid)
//   let right = arr.slice(mid)
//   return merge(mergeSort(left), mergeSort(right))
// }
//
// function merge(left, right){
//   lIndex = 0
//   rIndex = 0
//   let result = []
//   while (lIndex < left.length && rIndex < right.length){
//     if (left[lIndex] < right[rIndex]){
//       result.push(left[lIndex])
//       lIndex++
//     } else {
//       result.push(right[rIndex])
//       rIndex++
//     }
//   }
//   let leftRemainder = left.slice(lIndex)
//   let rightRemainder = right.slice(rIndex)
//   return [...result, ...leftRemainder, ...rightRemainder]
// }
//
// console.log(mergeSort([5,7,1,12,3,15,6,18,19]))
