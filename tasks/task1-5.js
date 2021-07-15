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

callWhileStringIsNotEmpty('qwewrty', consoleLog);
