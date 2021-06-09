/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  let results = '';
  string1 = string1.split('');
  string2 = string2.split('')
  string1.forEach((letter) => {
    if (string2.includes(letter)) {
      results.concat(letter);
      string2.splice(string2.indexOf(letter), 1);
    }
  })
  return results;
};
