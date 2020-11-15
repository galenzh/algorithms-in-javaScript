function selectionSort(arr) {
  for (let round = 1; round < arr.length; round++) {
    let minIndex = round - 1; // find the min value index at every round
    for (let j = minIndex + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[round - 1];
    arr[round - 1] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

var arr = [3, 4, 5, 2, 1, 1];
console.log(selectionSort(arr));
