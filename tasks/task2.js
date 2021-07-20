// Task 1
function chunk(arr, lengSubarrays) {
  if (Array.isArray(arr) === true && arr.length > 0 && lengSubarrays > 0) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += lengSubarrays) {
      if ((i + lengSubarrays) < arr.length) {
        newArr.push(arr.slice(i, i + lengSubarrays));
      } else {
        newArr.push(arr.slice(i));
      }
    }
    return newArr;
  }
  return [];
}

function difference(arr1, arr2) {
  if (Array.isArray(arr1) === false && Array.isArray(arr2) === false) {
    return 'invalid data array';
  }
  if (arr1.length > 0 && arr2.length > 0) {
    const newArr = [];
    arr1.forEach(element => {
      if (arr2.indexOf(element) === -1) {
        newArr.push(element);
      }
    });
    arr2.forEach(element => {
      if (arr1.indexOf(element) === -1) {
        newArr.push(element);
      }
    });
    return newArr;
  }
  return [];
}

module.exports = {
  chunk,
  difference,
};
