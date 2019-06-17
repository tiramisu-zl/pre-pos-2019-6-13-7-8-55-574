'use strict';

function collectSameElements(collectionA, collectionB) {
  const flatB = collectionB.flat();
  const result = collectionA.map(a => flatB.find(b => b === a));

  return result.filter(el => el);
}
