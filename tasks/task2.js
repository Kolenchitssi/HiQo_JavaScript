// Task 1
function chunk(arr, lengSubarrays) {
  const newArr = [];
  if (Array.isArray(arr) === true && arr.length > 0 && lengSubarrays > 0) {
    for (let i = 0; i < arr.length; i += lengSubarrays) {
      newArr.push(arr.slice(i, i + lengSubarrays));
    }
  }
  return newArr;
}

/* Task 2 */
function difference(arr1, arr2) {
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return [];
  }
  if (arr1.length > 0 && arr2.length > 0) {
    const newArr = [];
    arr1.forEach((element) => {
      if (arr2.includes(element) === false) {
        newArr.push(element);
      }
    });
    arr2.forEach((element) => {
      if (arr1.includes(element) === false) {
        newArr.push(element);
      }
    });
    return newArr;
  }
  return [];
}

/* Task 3 */
function findIndex(arr, item) {
  if (!arr) return false;
  return typeof item === 'function' ? arr.findIndex(item) : arr.indexOf(item);
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
  if (Array.isArray(arr) === false) return [];
  return Array.from(new Set(arr));
}

/* Task 7 */
function every(arr, func) {
  if (!arr || !func || arr.length === 0 || typeof func !== 'function') {
    return false;
  }
  return arr.every(func);
}

/* Task 8 */
function find(arr, func) {
  let itemTrue = null;
  arr.forEach((item) => {
    const result = func(item);
    if (result === true && !itemTrue) itemTrue = item;
  });
  return itemTrue;
}

/* Task 9 */
function groupBy(arr, funcKey) {
  if (!arr || !funcKey || arr.length === 0 || typeof funcKey !== 'function') {
    return {};
  }
  return arr.reduce((res, item) => {
    if (res[funcKey(item)]) {
      res[funcKey(item)].push(item);
    } else {
      res[funcKey(item)] = [item];
    }
    return res;
  }, {});
}

/* Task 10 */
function isEqual(object1, object2) {
  if (!object1 || !object2) return false;

  const propertyObj1 = Object.getOwnPropertyNames(object1);
  const propertyObj2 = Object.getOwnPropertyNames(object2);

  if (propertyObj1.length !== propertyObj2.length) return false;

  for (let i = 0; i < propertyObj1.length; i += 1) {
    const item = propertyObj1[i];
    if (typeof object1[item] === 'object' && object1[item] !== null) {
      const result = isEqual(object1[item], object2[item]);
      if (!result) return false;
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  chunk,
  difference,
  findIndex,
  flattenDeep,
  fromPairs,
  uniq,
  every,
  find,
  groupBy,
  isEqual,
};
