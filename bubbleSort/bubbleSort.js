/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
 */

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
 */

// Feel free to add helper functions if needed.

var bubbleSort = function (array, n = 0) {
  // Your code here.
  //for loop to array length
  if (n === array.length) return;
  let swapped = false;
  for (let i = 0; i < array.length - n; i++) {
    if (array[i] > array[i + 1]) {
      swapped = true;
      let temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    }
  }
  if (swapped === false) return;
  bubbleSort(array, n + 1);
  return array;
};

let unsortedArray = [7, 4, 1, 6, 2, 5, 3];
console.log(unsortedArray);
let sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);
console.log("-----------------------------");

//Worst case scenario, on an unenhanced bubble sort, time complexity is n^2. It runs linearly through the entire list, once for every character in the entire list.
//My recursive solution calling one less number each time because the last number is always guaranteed to be the highest brings the time complexity down to n log n.
//The 'swapped' return brings it down even further, but in theory, it could still run almost the entire thing, so time complexity is still n log n according to big O.
