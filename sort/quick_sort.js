var quickSort = (function () {
  function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  }

  function sort(items, left, right) {
    if (items.length > 1) {
      let index = partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        sort(items, left, index - 1);
      }
      if (index + 1 < right) {
        //more elements on the right side of the pivot
        sort(items, index, right);
      }
    }
    return items;
  }
  return function (arr) {
    return sort(arr, 0, arr.length - 1);
  };
})();

let arr = [4, 6, 1, 6, 8, 0, 7];
console.log(quickSort(arr));
