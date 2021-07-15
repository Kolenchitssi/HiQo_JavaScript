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

summ(1, '2', '3', 5, 'abc');

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

function isValueExists(value) {
  if (value === undefined || value === null) {
    return false;
  }
  return true;
}

isValueExists(null);

// Task 4
function callWithFunctionResult(funct1, funct2) {
  // TODO: implement function
  const result1 = funct2();
  return funct1(result1);
}

function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}

// Expected result
callWithFunctionResult(doubleValue, getFour);
// => doubleValue was called with value returned by getFour, => 2 * 4 = 8

function callWhileStringIsNotEmpty(string, func) {
  if (!string) {
    return false;
  }
  let str = string;
  if (typeof str === 'string' && str.length > 1) {
    func(str);
    str = str.slice(0, -1);
    callWhileStringIsNotEmpty(str, func);
  } else if (str.length === 1) {
    return func(str);
  }
  return true;
}

// Expected result
function consoleLog(value) {
  console.log(value);
}

callWhileStringIsNotEmpty('qwerty', consoleLog);

module.exports = {
  summ,
  summAdvanced,
  isValueExists,
  callWithFunctionResult,
  callWhileStringIsNotEmpty,
};
