function quickSort(arr, low, high) {
  if(low < high) {
    let pivot = arr[high];
    let i = low - 1;
    for(let j = low; j <= high; j++) {
      if(arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]]
    let pi = i + 1;
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
let arr = [4, 6, 1, 6, 8, 0, 7];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
function quickSort(arr, low, high) {
  if(low < high) {
    let pivot = arr[high];
    let i = low - 1;
    for(let j = low; j <= high; j++) {
      if(arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]]
    let pi = i + 1;
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}