'use strict';

function collectSameElements(collectionA, collectionB) {

  const setA = new Set(collectionA);
  const setB = new Set(collectionB);
  const result = new Set();

  setA.forEach(a => {
    if (setB.has(a)) { result.add(a) }
  });

  return Array.from(result);

}
