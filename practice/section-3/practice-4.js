'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const copyCollection = [...collectionA];

  collectionA.forEach((el, index) => {
    const element = el.split('-');
    if (element.length > 1) {
      const newArr = [];
      for (let i=0; i < element[1]; i++) {
        newArr.push(element[0]);
      }
      copyCollection.splice(index, 1, newArr)
    }
  });

  const baseCollection = copyCollection.flat();
  const keyCollection = new Set(baseCollection);

  const collectionB = Array.from(keyCollection).map(el => {
    const count = baseCollection.reduce((total, x) => (x === el ? total+1 : total), 0);
    return {
      key: el,
      count,
    };
  });

  const valueArr = objectB.value;

  valueArr.forEach(val => {
    collectionB.forEach(el => {
      if (el.key === val) {
        el.count = el.count - parseInt(el.count / 3);
      }
    });
  });

  return collectionB;
}
