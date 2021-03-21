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

const makeHashTable = () => {
  let result = {};
  let storage = [];
  let storageLimit = 1000;
  result.insert = (k, v) => {
    console.log('k, v, storage', k, v, storageLimit)
    let index = getIndexBelowMaxForKey(k, storageLimit)
    // let obj = storage[index] || {[index]: v};
    if (storage[index] === undefined) {
      storage[index] = {[k]: v};
    } else {
      let obj = storage[index];
      obj[k] = v;
      storage[index] = obj;
    }
  }
  result.retrieve = (k) => {
    console.log('storage', storage);
    let index = getIndexBelowMaxForKey(k, storageLimit);
    console.log('index', index);
    if (storage[index] === undefined) return 'Value not found';
    let obj = storage[index];
    return obj[k];
  }
  result.remove = (k) => {
    let index = getIndexBelowMaxForKey(k, storageLimit);
    let obj = storage[index];
    console.log('objects', obj, obj[k]);
    delete obj[k];
    storage[index] = undefined;
  }
  return result;
}