/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  let greatestContiguousSum = 0;
  let greatestSoFar = 0;
  let currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > greatestContiguousSum) {
      greatestContiguousSum = array[i]
    }
    currentSum += array[i]
    x = i + 1;
    while(x < array.length) {
      currentSum += array[x];
      if (currentSum > greatestSoFar) {
        greatestSoFar = currentSum;
      }
    }
    if (greatestSoFar > greatestContiguousSum) {
      greatestContiguousSum = greatestSoFar;
    }
    currentSum = 0;
    greatestSoFar = 0;
  }//for
  return greatestContiguousSum;
};