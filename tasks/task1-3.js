function isValueExists(value) {
  if (value === undefined || value === null) {
    return false;
  }
  return true;
}

isValueExists(undefined);
console.log(isValueExists(undefined));
