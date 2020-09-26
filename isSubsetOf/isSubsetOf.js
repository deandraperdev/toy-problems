/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

// Array.prototype.isSubsetOf = function (arr) {
//   // your code here
//   // if (arr1.isSubsetOf(arr2)) {
//     // this points to arr1
//   // }
//   // iterate over each item of arr1
//   // if arr2 doesn't include item
//     // return false
//   //return true;
// };

Array.prototype.isSubsetOf = function(arr) {
  for ( let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      return false;
    }
  }
  return true;
};

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = ['dog', 'turtle', 'pig'];
let arr4 = ['dog', 'turtle', 'pig', 'elephant', 'rhino'];
let arr5 = ['dog', 'hyena', 'pig', 'elephant', 'rhino'];
console.log('true', arr1.isSubsetOf(arr2));
console.log(arr2.isSubsetOf(arr1));
console.log(arr1.isSubsetOf(arr3));
console.log('true', arr3.isSubsetOf(arr4));
console.log(arr3.isSubsetOf(arr5));
console.log(arr5.isSubsetOf(arr1));
console.log(arr2.isSubsetOf(arr3));