// Task 1
function chunk(arr, lengSubarrays) {
  if (Array.isArray(arr) === true && arr.length > 0 && lengSubarrays > 0) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += lengSubarrays) {
      if (i + lengSubarrays < arr.length) {
        newArr.push(arr.slice(i, i + lengSubarrays));
      } else {
        newArr.push(arr.slice(i));
      }
    }
    return newArr;
  }
  return [];
}

// Expected result
chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
// console.log(chunk(['a', 'b', 'c', 'd'], 3));
