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
