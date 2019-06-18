'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const valueArr = objectB.value;

  valueArr.forEach(val => {
    collectionA.forEach(el => {
      if (el.key === val) {
        el.count = el.count - parseInt(el.count / 3);
      }
    });
  });

  return collectionA;
}
