export default function getSelectionSortAnimations(unsortedArray) {
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
      if (unsortedArray[smallestIndex] > unsortedArray[i]) {
        smallestIndex = i;
      }
    }
    swap(currentIndex, smallestIndex, unsortedArray);
    animateSwap(currentIndex, smallestIndex, unsortedArray, animationsArray);
    currentIndex += 1;
  }
  // return array;
}

function swap(i, j, unsortedArray) {
  let hold = unsortedArray[i];
  unsortedArray[i] = unsortedArray[j];
  unsortedArray[j] = hold;
}

function animateHighlight(i, j, animationsArray) {
  animationsArray.push([i, j]);
  animationsArray.push([i, j]);
}

function animateSwap(i, j, unsortedArray, animationsArray) {
  animationsArray.push([[i, unsortedArray[i]], [j, unsortedArray[j]]]);
}
