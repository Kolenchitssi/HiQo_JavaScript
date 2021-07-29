/* Task 1 */
function createObject(obj) {
  const obj1 = obj;
  obj1.getTestField = obj.getTestField.bind(obj);
  return obj;
}

module.exports = {
  createObject,
};
