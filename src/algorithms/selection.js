export function getSelectionSortAnimations(unsortedArray) {
  const animationsArray = [];
  if (unsortedArray.length <= 1) return unsortedArray;
  selectionSort(unsortedArray, animationsArray);
  return animationsArray;
}

function selectionSort(unsortedArray, animationsArray) {
  let currentIndex = 0;
  while (currentIndex < unsortedArray.length - 1) {
    let smallestIndex = currentIndex;
    for (let i = currentIndex + 1; i < unsortedArray.length; i += 1) {
      animateHighlight(smallestIndex, i, animationsArray);
      //animate(smallestIndex, currentIndex, array, animations);
      if (array[smallestIndex] > array[i]) {
        smallestIndex = i;
      }
    }
    swap(currentIndex, smallestIndex, array);
    animateSwap(currentIndex, smallestIndex, array, animations);
    currentIndex += 1;
  }
  // return array;
}

function swap(i, j, array) {
  let hold = array[i];
  array[i] = array[j];
  array[j] = hold;
}

function animateHighlight(i, j, animations) {
  animations.push([i, j]);
  animations.push([i, j]);
}

function animateSwap(i, j, array, animations) {
  animations.push([[i, array[i]], [j, array[j]]]);
}
