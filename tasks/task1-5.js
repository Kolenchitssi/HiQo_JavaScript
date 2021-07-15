function callWhileStringIsNotEmpty(string, func) {
    let str=string;
  if (str.length > 0) {
    func(str);
    str = str.slice(0, -1);
    callWhileStringIsNotEmpty(str, func);
  }
}

// Expected result
function consoleLog(value) {
  console.log(value);
}

callWhileStringIsNotEmpty('qwerty', consoleLog);
