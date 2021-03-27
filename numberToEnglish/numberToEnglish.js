/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function (number) {
  // return my value as english words
  let result = '';
  let array = number.toString().split('');
  let tens = parseInt('1' + '0'.repeat(array.length - 1));
  // if a number is 20 or less, use i++ so loop will skip a number
  for (let i = 0; i < array.length; i++) {
    let str = '';
    if (numbersToPlace.tens !== undefined) {
      if (tens.length % 3 === 2)
      str += numbersToWords[i];
      str += numbersToPlace[i];
    } else
  }
};

/*
Input = number
Output = string that is the spoken form of the number

Calling this function turn a raw number into the spoken/written form of said number;

We can split the numbers into an array, then use each element of the array to get the spoken form;
We will count the length of the array to a string of the actual number form: '1000000000';
Each iteration we will remove a zero with chatAt(length - 1);
For each tens place, we will create a string for that tens place, and then concat them all;
For numbers under 100 at the tens place, we will break this rule, and just use the written form;
For numbers also under 20 at the tens place, we will use a similar method to the overall

6543 --> [6, 5, 4, 3];
array.length = 4 --> - 1 = 3 --> number of zeros --> 1,000
At each multiple of 3 zeros, add thousand, million, billion, etc
n % 3 === 0

[6, 5, 4, 3] && 1,000 (3 zeros)
 ^
str = 'six thousand '
[6, 5, 4, 3] && 100
    ^
str = str + 'five hundred '
str = 'six thousand five hundred '
[6, 5, 4, 3] && 10
       ^
over 20 and under 100
str = str + 'forty '
str = 'six thousand five hundred forty '
[6, 5, 4, 3]
          ^
str = str + 'three'
str = 'six thousand five hundred forty three'
return str;
*/