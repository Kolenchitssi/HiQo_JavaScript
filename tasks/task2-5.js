/* Task 5 */
function fromPairs(arr) {
  if (Array.isArray(arr) === false || arr.length === 0) return {};
  arr.forEach((item) => {
    if (Array.isArray(item) === false || item.length !== 2) {
      return {};
    }
    return true;
  });
  const result = {};
  let item;
  for (let i = 0; i < arr.length; i += 1) {
    item = arr[i];
    result[item[0]] = item[1];
  }
  return result;
}

// Expected result
// fromPairs([
//   ['a', 1],
//   ['b', 2],
// ]); // => { 'a': 1, 'b': 2 }
console.log(
  fromPairs([
    ['a', 1],
    ['b', 2],
  ]),
);
