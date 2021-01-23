class Stack {
  constructor() {
    this.stack = {};
    this.index = 0;
  }
  push(value) {
    //index increment first
    this.index++;
    this.stack[this.index] = value;
  }
  pop() {
    //remove before decrementing for proper index
    let result = this.storage[this.index];
    delete this.storage[this.index];
    this.index--;
    return result;
  }
  size() {
    let keys = Object.keys(this.storage);
    return keys.length;
  }
}

//I think for the queue from stacks you take two containers and flip flop them.
//When you want to queue, you flip them into one and push
//when you want to dequeue, you flip them into the other and pop
//This is VERY expensive though. Is this what you're wanting?

class Queue {
  constructor(Stack) {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
  queue() {
    
  }
}





// I don't like this. It's not my preferred instantiation pattern.
// /**
//  * Write a stack using your preferred instantiation pattern. 
//  * Avoid using native array methods i.e., push, pop, and length.
//  * Once you're done, implement a queue using two stacks.
//  */

// /**
//   * Stack Class
//   */
// var Stack = function(array = []) {

//   // add an item to the top of the stack
//   this.push = function(value) {
//     array[array.length] = value;
//   };

//   // remove an item from the top of the stack
//   this.pop = function(value) {
//     array.splice(array.length - 1, 1)
//   };

//   // return the number of items in the stack
//   this.size = function(array) {
//     let count = 0;
//     for (let item of array) {
//       count++;
//     }
//     return count;
//   };
// };

// /**
//   * Queue Class
//   */
// var Queue = function() {
//   // Use two `stack` instances to implement your `queue` Class
//   var inbox = new Stack();
//   var outbox = new Stack();

//   // called to add an item to the `queue`
//   this.enqueue = function() {
//     // TODO: implement `enqueue`
//   };

//   // called to remove an item from the `queue`
//   this.dequeue = function() {
//     // TODO: implement `dequeue`
//   };

//   // should return the number of items in the queue
//   this.size = function() {
//     // TODO: implement `size`
//   };
// };
