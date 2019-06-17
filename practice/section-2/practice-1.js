'use strict';

function countSameElements(collection) {
  const keyCollection = new Set(collection);

  return Array.from(keyCollection).map(el => {
    const count = collection.filter(item => item === el).length;
    // const count  = collection.reduce((total, x) => (x === el ? total+1 : total), 0);
    return {
      key: el,
      count,
    };
  });
}
