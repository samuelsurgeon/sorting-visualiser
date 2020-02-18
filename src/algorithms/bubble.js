export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(array, animations) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i += 1) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        animate(i, i + 1, array, animations);
        isSorted = false;
      } else {
        animate(i, i + 1, array, animations);
      }
    }
    counter += 1;
  }
  // return array. magical behaviour babey
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

function animateJustColour(i, j, array, animations) {
  animations.push([i, j]);
  animations.push([i, j]);
}