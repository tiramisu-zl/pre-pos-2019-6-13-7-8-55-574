'use strict';

function countSameElements(collection) {
  const copyCollection = [...collection];

  collection.forEach((el, index) => {
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

  return Array.from(keyCollection).map(el => {
    const count = baseCollection.reduce((total, x) => (x === el ? total+1 : total), 0);
    return {
      key: el,
      count,
    };
  });
}
