/* Task 2 */
function difference(arr1, arr2) {
  if (Array.isArray(arr1) === false && Array.isArray(arr2) === false) {
    return 'invalid data array';
  }
  if (arr1.length > 0 && arr2.length > 0) {
    const newArr = [];
    arr1.forEach((element) => {
      if (arr2.indexOf(element) === -1) {
        newArr.push(element);
      }
    });
    arr2.forEach((element) => {
      if (arr1.indexOf(element) === -1) {
        newArr.push(element);
      }
    });
    return newArr;
  }
  return [];
}
// Expected result
difference([2, 1], [2, 3, 4]); // => [1, 3, 4]
// console.log(difference([2, 1], [2, 3, 4]));
