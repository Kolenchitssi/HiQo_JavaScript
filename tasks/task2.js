// Task 1
function chunk(arr, lengSubarrays) {
  if (arr && lengSubarrays > 0) {
    let j = 0;
    const newArr = [];
    for (let i = 0; i < arr.length; i += lengSubarrays) {
      if ((i + lengSubarrays) < arr.length) {
        newArr[j] = arr.slice(i, i + lengSubarrays);
        j += 1;
      } else {
        newArr[j] = arr.slice(i);
      }
    }
    return newArr;
  }
  return false;
}
