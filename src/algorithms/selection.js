export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSort(array, animations);
  return animations;
}

function selectionSort(array, animations) {
  let currentIndex = 0;
  while (currentIndex < array.length - 1) {
    let smallestIndex = currentIndex;
    for (let i = currentIndex + 1; i < array.length; i += 1) {
      if (array[smallestIndex] > array[i]) {
        smallestIndex = i;
      }
    }
    swap(currentIndex, smallestIndex, array);
    currentIndex += 1;
  }
  // return array;
}

function swap(i, j, array) {
  let hold = array[i];
  array[i] = array[j];
  array[j] = hold;
}

function animate(i, j, array, animations) {
  animations.push([i, j]);
  animations.push([[i, array[i]], [j, array[j]]]);
  animations.push([i, j]);
}