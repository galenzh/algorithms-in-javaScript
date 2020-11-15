function bubbleSort(arr) {
  for (let round = 1; round < arr.length; round++) {
    for (let j = 0; j < arr.length - round; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var arr = [3, 4, 5, 2, 1, 1];
console.log(bubbleSort(arr));
