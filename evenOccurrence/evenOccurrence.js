/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  let cache = {};
  for (let number of arr) {
    if (cache[number] === undefined) {
      cache[number] = 1;
    } else {
      cache[number]++;
    }
  }
  for (let number of arr) {
    if (cache[number] % 2 === 0) {
      return number;
    }
  }
  return null;
};
