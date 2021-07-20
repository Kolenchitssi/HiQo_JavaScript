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

// Expected result
const numbers = [3, 5, 1, 6, 7];
findIndex(numbers, 1); // => 2

const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' }];
findIndex(users, (user) => user.name === 'User2'); // => 1
// console.log(findIndex(users, (user) => user.name === 'User2'));
