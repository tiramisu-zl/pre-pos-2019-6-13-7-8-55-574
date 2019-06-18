'use strict';

function countSameElements(collection) {
  const copyCollection = [...collection];

  collection.forEach((el, index) => {
    if (el.split('').length > 1) {
      const newArr = [];
      const count = el.replace(/[^0-9]/ig,"");
      const letter = el.replace(/[^a-z]/ig,"");
      for (let i=0; i < count; i++) {
        newArr.push(letter);
      }
      copyCollection.splice(index, 1, newArr)
    }
  });

  const baseCollection = copyCollection.flat();
  const keyCollection = new Set(baseCollection);

  return Array.from(keyCollection).map(el => {
    const summary = baseCollection.reduce((total, x) => (x === el ? total+1 : total), 0);
    return {
      name: el,
      summary,
    };
  });
}
