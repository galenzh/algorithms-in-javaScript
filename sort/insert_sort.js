function insertionSort(arr) {
  for(let round = 1; round < arr.length; round++) {
    let currVal = arr[round];
    for(let j = round - 1; j >= 0; j--) {
      if (currVal >= arr[j]) {
        arr[j + 1] = currVal;
        break;
      } else {
        arr[j + 1] = arr[j];
      }
      if (j === 0) {
        arr[0] = currVal;
      }
    }
  }
  return arr;
}

var arr = [3, 4, 5, 2, 1, 1];
console.log(insertionSort(arr));
