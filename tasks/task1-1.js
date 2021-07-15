// Task 1
function summ(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    if (+args[i] && typeof args[i] !== 'boolean') {
      sum += +args[i];
    }
  }
  return sum;
}

summ(1, '2', "3", 6, 'abc');
