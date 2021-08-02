/* Task 1 */
function createObject(obj) {
  const resultObj = obj;
  const objKeys = Object.keys(obj);

  objKeys.forEach((key) => {
    if (typeof obj[key] === 'function') resultObj[key] = obj[key].bind(obj);
  });
  return resultObj;
}

/* Task 2 */
function Collection(constructor) {
  this.collection = [];

  this.readAll = function () {
    return this.collection;
  };

  this.add = function (...args) {
    const newObj = new constructor(...args);
    // frozen the object, you can't add new properties, only edit the current ones
    this.collection.push(Object.seal(newObj));
  };

  this.get = function (func) {
    const resultObj = {};
    const resultIndex = this.collection.findIndex(func);
    resultObj.item = this.collection[resultIndex];

    resultObj.update = (funcUpdateItem) => {
      funcUpdateItem(resultObj.item);
      return resultObj;
    };

    resultObj.remove = () => {
      this.collection.splice(resultIndex, 1);
      return resultObj.item;
    };

    resultObj.read = () => resultObj.item;
    return resultObj;
  };

  this.getBy = (func) => {
    const resultObjItems = {};
    resultObjItems.arrItems = this.collection.filter(func);

    resultObjItems.update = (funcUpdate) => {
      resultObjItems.arrItems.forEach((item, index) => funcUpdate(item, index));
    };

    resultObjItems.read = () => resultObjItems.arrItems;

    return resultObjItems;
  };
}

module.exports = {
  createObject,
  Collection,
};
