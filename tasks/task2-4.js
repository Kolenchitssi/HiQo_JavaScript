/* Task 4 */
function flattenDeep(arr) {
  let newArr = arr;
  let hasSubarr = false;
  if (Array.isArray(newArr) === true) {
    newArr.forEach((item) => {
      if (Array.isArray(item) === true) {
        hasSubarr = true;
      }
    });
    if (hasSubarr) {
      newArr = newArr.flat();
      return flattenDeep(newArr);
    }
    return newArr;
  }
  return [];
}

// Expected result
// flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]
console.log(flattenDeep([1, [2, [3, [4]], 5]]));
