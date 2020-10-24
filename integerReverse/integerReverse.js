/*
 *
 * Integer Reverse
 *
 * Given a positive integer, return its digits reversed.
 *
 * - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
 * - Only use integers and math in your solution.
 *
 */

function reverseInteger(num) {
  let res = 0;
  let mod = 0;
  function recurse(num, res) {
    if (num < 10) {
      res += num;
      return res;
    }
    mod = num % 10;
    num = (num - mod) / 10;
    res = (res * 10) + (mod * 10);
    return recurse(num, res)
  }
  return recurse(num, res);
}
console.log(reverseInteger(3567));
console.log(reverseInteger(271514));
