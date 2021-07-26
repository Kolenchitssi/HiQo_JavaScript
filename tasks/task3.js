/* Task 1 */
function rememberResult(initialValue) {
  let result = initialValue;

  return (func) => {
    result = func(result);
    return result;
  };
}

module.exports = {
  rememberResult,
};
