function summAdvanced(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === 'function' && +args[i]()) {
      sum += +args[i]();
    } else if (+args[i] && typeof args[i] !== 'boolean') {
      sum += +args[i];
    }
  }
  return sum;
}

function getRandomNumber() {
  return Math.random();
}

function getTen() {
  return 10;
}

function getTenString() {
  return '10';
}

summAdvanced('abc', 1, '2', getTen, getTenString, getRandomNumber);
