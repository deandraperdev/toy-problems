
let merge = (firstHalf, secondHalf) => {
  let result = [];
  while (firstHalf.length >= 1 && secondHalf.length >= 1) {
    if (firstHalf[0] < secondHalf[0]) {
      result.push(firstHalf.shift());
      console.log("result", result);
    } else {
      result.push(secondHalf.shift());
    }
  }
  let res2 = result.concat(firstHalf).concat(secondHalf);
  return res2;
};

var mergeSort = function (array) {
  console.log("array", array);
  if (array.length <= 1) {
    return array;
  }
  let half = Math.floor(array.length / 2);
  let firstHalf = mergeSort(array.slice(0, half));
  let secondHalf = mergeSort(array.slice(half));
  return merge(firstHalf, secondHalf);
};

console.log("results", mergeSort([2, 7, 9, 1, -4, 17, -1, 33, 25]));
