/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

// I rewrote this a little bit to avoid unnecessary complexity.
// I changed from a storage array in closure to a storage property on the obhject.
// This way I can access the different key value pairs in storage directly.
// It prevents me from having to write getters and setters to retrieve values.
// In the interest of completing this in an hour, I believe it's the best solution.

const HashTable = () => {
  let result = {};
  result.storage = [];
  result.storageLimit = 1000;
  result.insert = () => {
    let index = getIndexBelowMaxForKey(k, this.storageLimit)
    let obj = this.storage[index] || {[k]: v};
    obj[k] = v;
    this.storage[index] = value;
  }
  result.retrieve = (k) => {
    let index = getIndexBelowMaxForKey(k, this.storageLimit);
    let obj = this.storage[index];
    return obj[k];
  }
  result.remove = (keys) => {
    let index = getIndexBelowMaxForKey(k, this.storageLimit);
    let obj = this.storage[index];
    delete obj[k];
    this.storage[index] = value;
  }
  return result;
}