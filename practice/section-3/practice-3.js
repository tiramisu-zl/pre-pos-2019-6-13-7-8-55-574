'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const keyCollection = new Set(collectionA);

  const collectionB = Array.from(keyCollection).map(el => {
    const count = collectionA.filter(item => item === el).length;
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
