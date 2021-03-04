/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  let cache = {};
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (cache[string[i]] === undefined) {
      cache[string[i]] = 1;
    } else {
      cache[string[i]]++
    }
  }
  for (let letter in cache) {
    let temp = [];
    temp.push(letter);
    temp.push(cache[letter]);
    array.push(temp);
  };
  console.log('array', array);
  let sortedArray = array.sort((a,b) => {
    if (b[0] > a[0]) {
      return -1;
    }
    if (b[0] < a[0]) {
      return 1;
    }
  })
  console.log(sortedArray);
  let result = sortedArray.sort((a, b) => {
    return b[1] - a[1];
  })
  console.log('result', result);
  return result;
};