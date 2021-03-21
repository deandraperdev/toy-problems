/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

//Checking solution on spectatorBot

var binarySearch = function (array, target) {
    let lower = 0;
    let upper = array.length - 1;
    function search(upper, lower) {
        console.log('search called', 'lower:', array[lower], 'upper:', array[upper], 'target:', target);
        console.log('lower', lower);
        console.log('upper', upper);
        console.log('target', target);
        if (upper - lower <= 2) {
            if (array[upper] === target) {
                console.log('up')
                return upper;
            } else if (array[lower] === target) {
                return lower;
            } else if (array[upper - 1] === target) {
                return upper - 1
            } else {
                return null;
            }
        }
        let mid = Math.floor((upper - lower) / 2);
        if (array[mid] === target) {
            return mid;
        }
        console.log('mid', mid);
        if (array[mid] > target) {
            upper = mid;
        }
        if (array[mid] < target) {
            lower = mid;
        }
        return search(upper, lower);
    }
    return search(upper, lower);
};
console.log('index -------------------------------')
var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log('index', index); // 3
console.log('index2 -------------------------------')
var index2 = binarySearch([1, 2, 3, 4, 5], 8);
console.log('index2', index2); // null