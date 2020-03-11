export function getInsertionSortAnimations(unsortedArray) {
  const animationsArray = [];
  if (unsortedArray.length <= 1) return unsortedArray;
  insertionSort(unsortedArray, animationsArray);
  return animationsArray;
}

function insertionSort(unsortedArray, animationsArray) {
  for (let i = 1; i < unsortedArray.length; i += 1) {
    let j = i;
    while (j > 0 && unsortedArray[j] < unsortedArray[j - 1]) {
      swap(j, j - 1, unsortedArray);
      animate(j - 1, j, unsortedArray, animationsArray);
      j -= 1;
    }
    if (j > 0 && unsortedArray[j] >= unsortedArray[j - 1]) animate(j - 1, j, unsortedArray, animationsArray);
  }
  //return array; (I don't actually need to return this lol. Because I use the 'magical behaviour' thing haha)
}

function swap(i, j, unsortedArray) {
  let hold = unsortedArray[i];
  unsortedArray[i] = unsortedArray[j];
  unsortedArray[j] = hold;
}

function animate(i, j, unsortedArray, animationsArray) {
  animationsArray.push([i, j]);
  animationsArray.push([[i, unsortedArray[i]], [j, unsortedArray[j]]]);
  animationsArray.push([i, j]);
}
