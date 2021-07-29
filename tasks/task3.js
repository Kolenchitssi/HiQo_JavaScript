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
  return function addArg(...args) {
    if (len <= args.length) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      return addArg.apply(this, args.concat(args2));
    };
  };
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
