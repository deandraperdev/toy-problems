/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:

 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:

 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
    let split = input.split('');
    let checkArray = [];
    for (let i = 0; i < split.length; i++) {
        if (split[i] === '{' ||split[i] === '[' ||split[i] === '(') {
            checkArray.push(split[i])
        }
        if (split[i] === '}') {
            if (checkArray.length === 0 || checkArray.pop() !== '{') {
                return false;
            }
        }
        if (split[i] === ']') {
            if (checkArray.length === 0 || checkArray.pop() !== '[') {
                return false;
            }
        }
        if (split[i] === ')') {
            if (checkArray.length === 0 || checkArray.pop() !== '(') {
                return false;
            }
        }
    }
    return true;
};
console.log('--------------------------')
console.log(balancedParens('('));  // true now that we ignore non-bracket chars
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false