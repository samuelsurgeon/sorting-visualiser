export default function getBubbleSortAnimations(unsortedArray) {
  const animationsArray = [];
  if (unsortedArray.length <= 1) return unsortedArray;
  bubbleSort(unsortedArray, animationsArray);
  return animationsArray;
}

function bubbleSort(unsortedArray, animationsArray) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < unsortedArray.length - 1 - counter; i += 1) {
      if (unsortedArray[i] > unsortedArray[i + 1]) {
        swap(i, i + 1, unsortedArray);
        animate(i, i + 1, unsortedArray, animationsArray);
        isSorted = false;
      } else {
        animate(i, i + 1, unsortedArray, animationsArray);
      }
    }
    counter += 1;
  }
  // return array. magical behaviour babey
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
