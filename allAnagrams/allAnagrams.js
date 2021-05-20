/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const allAnagrams = function(string) {
  // Your code here.
  debugger;
  let anagrams = {};

  const findAllAnagrams = (restOfStr, word) => {
    if (restOfStr.length < 2) {
      word += restOfStr;
      // return anagrams.push(word);
      anagrams[word] = 'done';
      return;
    }
    for ( let i = 0; i < restOfStr.length; i++ ) {
      findAllAnagrams(restOfStr.slice(0, i) + restOfStr.slice(i + 1), word + restOfStr[i])
    }
  }

  findAllAnagrams(string, '');
  return Object.keys(anagrams);
};

allAnagrams('abc');
