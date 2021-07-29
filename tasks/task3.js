/* Task 1 */
function rememberResult(initialValue) {
  let result = initialValue;

  return (func) => {
    result = func(result);
    return result;
  };
}

/* Task 2 */
function callMaxTimes(numberOfTimes, func) {
  let maxTimes = numberOfTimes;

  return function () {
    if (maxTimes === 0) return 'nothing happens';
    maxTimes -= 1;
    return func();
  };
}

/* Task 3 */
function partial(func, arg) {
  return (nameInput) => func(arg, nameInput);
}

/* Task 4 */
function curry(fn) {
  const len = fn.length;
  function innerFn(n, args) {
    return function actualInnerFn(a) {
      if (n <= 1) {
        return fn(...args, a);
      }
      return innerFn(n - 1, [...args, a]);
    };
  }
  return innerFn(len, []);
}

/* Task 5 */
function debounce(fn, timeOut) {
  // HINT: setTimeout and clearTimeout should be used.
  if (fn === undefined) return null;
  function startFunc() {
    const timerId = setTimeout(fn, timeOut);
    debounce.timeOutId = timerId;
  }

  clearTimeout(debounce.timeOutId);
  startFunc();
  return true;
}

// variant 2
// let timeOutId = 0;

// function debounce(fn, timeOut) {
// if (fn === undefined) return null;

//   function startFunc() {
//     const timerId = setTimeout(fn, timeOut);
//     timeOutId = timerId;
//   }
//   clearTimeout(timeOutId);
//   startFunc();
// }

/* Task 6 */
function memoize(fn) {
  const cashResult = {};

  return function (...args) {
    const keyFunc = args.join('|');
    if (cashResult[keyFunc] === undefined) {
      cashResult[keyFunc] = fn(...args);
    }
    return cashResult[keyFunc];
  };
}

module.exports = {
  rememberResult,
  callMaxTimes,
  partial,
  curry,
  debounce,
  memoize,
};
