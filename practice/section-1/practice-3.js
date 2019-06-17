'use strict';

function collectSameElements(collectionA, objectB) {
  const value = objectB.value;
  const result = collectionA.map(a => value.find(b => b === a));

  return result.filter(el => el);
}
