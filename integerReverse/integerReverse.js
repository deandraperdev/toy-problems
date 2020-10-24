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

function reverseInteger(number) {
  let places = 0;
  let result = 0;
  // TODO: Implement this function!
  if (number < 10) {
    places = 1;
  } else if (number < 100) {
    places = 2;
  } else if (number < 1000) {
    places = 3;
  } else if (number < 10000) {
    places = 4;
  } else if (number < 100000) {
    places = 5;
  } else if (number < 1000000) {
    places = 6;
  } else {
    console.log("I give up.");
    return "I give up.";
  }
  for (let i = places - 1; i >= 1; i--) {
    let modulo = number % 10;
    let numWithoutModulo = Math.floor((number - modulo) / 10);
    number = numWithoutModulo;
    result = result + modulo * 10 ** i;
  }
  result += number;
  return result;
}
console.log(reverseInteger(3567));
console.log(reverseInteger(271514));
