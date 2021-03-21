var LinkedList = function() {
  //fill me in!

  this.head = null;
  this.tail = null;
};

//Adding a line to recheck spectatorBot
//write methods here!

LinkedList.prototype.addToTail = function(value) {
  let node = this.makeNode(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  }
  this.tail.next = node
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
  let node = this.head;
  if (this.head !== null) {
    this.head = this.head.next
  }
  if (this.head === null) {
    this.tail = null;
  }
  return node.value;
};

LinkedList.prototype.contains = function(value) {
  let pointer = this.head;
  while (pointer !== null) {
    if (pointer.value === value) {
      return true;
    }
    pointer = pointer.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  let node = {};
  node.value = value;
  node.next = null;
  return node;
};
