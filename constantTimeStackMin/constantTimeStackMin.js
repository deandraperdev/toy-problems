/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    let stack = {}
    let minAtIndex = [];
    // let storage = {}; //redundant? Can just use different naming
    let end = 0;
    let min = 9999999999999;

  // add an item to the top of the stack
    this.push = function(value) {
      end++;
      stack[end] = value;
      if (value < min) {
        min = value;
      } 
      minAtIndex[end] = min;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      let value = stack[end];
      delete stack[end];
      delete minAtIndex[end];
      end--;
      return value;
    };

  // return the number of items in the stack
    this.size = function() {
      return end;
    };
  
  // return the minimum value in the stack
    this.min = function() {
      return min;
    };

  };

  // This is in no way, shape, form or fashion actually going to be a stack, but I can mimic it.

  // To make this constant time, we'll need to assign values to an object.
  // I can keep track of min and size as elements are added.
  // I'll have a few additional properties on the object called min and size respectively.

  // Any time a push occurs
  // Any time a push occurs, the value will be compared to obj.min and if it is smaller, then it will replace the current value
  // Any time a push occurs, the value of obj.size will be increased by 1.

  // Any time a pop occurs, obj[obj.size()] will be deleted.
  // Also, the value of obj.size will be decreased by 1.
  // XXXXXX Any time a pop occurs, we will iterate through all values of obj[i] from 'i = obj.size' down to 0
  // 

  // How do I achieve constant time on the minimum value during a pop??
  // Create an object property that is an array and contains the minimum value at each push. If a pop happens, slice the end of the array, 
