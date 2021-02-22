// let map = {
//   'a': 0,
//   'b': 1,
//   'c': 2
// };
// console.log(['b', 'c', 'a', 'a'].sort((a, b) => map[a] - map[b]));

// let num = 192839;
// let ch = [];
// for(let i=65; i<65+26; i++) {
//   ch.push(String.fromCharCode(i));
// }
// let arr = [];
// while(true) {
//   let mod = num % 26;
//   arr.push(ch[mod]);
//   num = parseInt(num / 26);
//   if(num <= 0) {
//     break;
//   }
// }
// console.log(arr.reverse().join(''));

let arr = [
  {
      "id": "12",
      "parentId": "0",
      "text": "Man",
      "level": "1",
      "children": null
  },
  {
      "id": "6",
      "parentId": "12",
      "text": "Boy",
      "level": "2",
      "children": null
  },
          {
      "id": "7",
      "parentId": "12",
      "text": "Other",
      "level": "2",
      "children": null
  },
  {
      "id": "9",
      "parentId": "0",
      "text": "Woman",
      "level": "1",
      "children": null
  },
  {
      "id": "11",
      "parentId": "9",
      "text": "Girl",
      "level": "2",
      "children": null
  }
];
let map = {};
arr.forEach((ele) => {
  map[ele.id] = ele;
  ele.children = [];
});
let root = [];
arr.forEach((ele) => {
  if(map[ele.parentId]) {
    map[ele.parentId].children.push(ele);
  } else {
    root.push(ele);
  }
});
console.log(root);