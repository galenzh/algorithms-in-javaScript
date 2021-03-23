function quicksort(arr) {
  if(arr.length <= 1) return arr;
  let left = [], right = [],ele = arr.pop();
  arr.forEach(e => e < ele ? left.push(e) : right.push(e));
  return [...quicksort(left), ele, ...quicksort(right)];
}
console.log(quicksort([3,4,2,444,2,111]))