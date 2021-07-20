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

/* Task 2 */
function difference(arr1, arr2) {
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return [];
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

/* Task 3 */
function findIndex(arr, item) {
  if (!arr) return [];
  let index;

  if (typeof item === 'function') {
    index = arr.findIndex(item);
  } else {
    index = arr.indexOf(item);
  }
  return index;
}

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

/* Task 6 */
function uniq(arr) {
  if (Array.isArray(arr) === false) {
    return [];
  }
  let mySet = new Set(arr);
  mySet = Array.from(mySet);
  return mySet;
}

module.exports = {
  chunk,
  difference,
  findIndex,
  flattenDeep,
  fromPairs,
  uniq,
};
