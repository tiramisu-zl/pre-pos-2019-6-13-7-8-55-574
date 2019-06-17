'use strict';

function collectSameElements(collectionA, objectB) {

  const collectionKeys = collectionA.map(el => el.key);
  const valueOfB = objectB.value;
  const result = collectionKeys.map(a => valueOfB.find(b => b === a));

  return result.filter(el => el);

}
