function binarySearchRecursive(arr, ele, start, end) {
  if(start > end) {
    return -1;
  }
  let mid = Math.floor((start + end)/2);
  if(arr[mid] === ele) {
    return mid;
  } else if(arr[mid] > ele) {
    return binarySearchRecursive(arr, ele, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, ele, mid + 1, end);
  }
}

function binarySearchIterative(arr, ele) {
  let start = 0, end = arr.length - 1;
  while(start < end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === ele) {
      return mid;
    } else if(arr[mid] > ele) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearchRecursive(arr, 8, 0, arr.length)); // find at index 7
console.log(binarySearchRecursive(arr, 11, 0, arr.length)); // can't find, return -1

console.log(binarySearchIterative(arr, 8, 0, arr.length)); // find at index 7
console.log(binarySearchIterative(arr, 11, 0, arr.length)); // can't find, return -1