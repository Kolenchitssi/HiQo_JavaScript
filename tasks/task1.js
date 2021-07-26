function summ(...args) {
  if (args.length === 0) return null;
  let sum = 0;
  args.forEach((item) => {
    sum += +item && typeof item !== 'boolean' ? +item : 0;
  });
  return sum;
}

summ(1, '2', '3', 5, 'abc');

function summAdvanced(...args) {
  if (args.length === 0) return null;
  let sum = 0;
  args.forEach((item) => {
    if (typeof item === 'function' && +item()) {
      sum += +item();
    } else if (+item && typeof item !== 'boolean') {
      sum += +item;
    }
  });
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

function callWithFunctionResult(funct1, funct2) {
  if (!funct1 || !funct2) return false;
  const result1 = funct2();
  return funct1(result1);
}

function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}

callWithFunctionResult(doubleValue, getFour);

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
