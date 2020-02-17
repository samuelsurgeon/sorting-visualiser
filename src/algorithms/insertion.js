export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSort(array, animations);
  return animations;
}

function insertionSort(array, animations) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      animate(j - 1, j, array, animations);
      j -= 1;
    }
  }
  //return array; (I don't actually need to return this lol. Because I use the 'magical behaviour' thing haha)
}

function animate(i, j, array, animations) {
  animations.push([i, j]);
  animations.push([[i, array[i]], [j, array[j]]]);
  animations.push([i, j]);
  // console.log(animations);
}

function swap(i, j, array) {
  let hold = array[i];
  array[i] = array[j];
  array[j] = hold;
}