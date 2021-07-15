function isValueExists(value) {
  if (value === undefined || value === null) {
    return false;
  }
  return true;
}

isValueExists(null);
console.log(isValueExists(0));
