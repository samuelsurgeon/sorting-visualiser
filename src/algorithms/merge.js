export function getMergeSortAnimations(array) {
  const animations = [];
  const highlightAnimations = [];
  const swapAnimations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, highlightAnimations, swapAnimations);
  combineAnimationArrays(highlightAnimations, swapAnimations, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  highlightAnimations,
  swapAnimations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, highlightAnimations, swapAnimations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, highlightAnimations, swapAnimations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, highlightAnimations, swapAnimations);
}

// Refactor this function, and rename it to match with how insertion sort works
function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  highlightAnimations,
  swapAnimations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  // TO DO: Make it so that the highlight animation doesn't unhighlight (!) until after the swap has happened
  // ALSO: just rewrite ALL this code, refactor it, because it sucks and doesn't make sense :)

  while (i <= middleIdx && j <= endIdx) {
    highlightAnimations.push([i, j]);
    highlightAnimations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      swapAnimations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      swapAnimations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    highlightAnimations.push([i, i]);
    highlightAnimations.push([i, i]);
    swapAnimations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    highlightAnimations.push([j, j]);
    highlightAnimations.push([j, j]);
    swapAnimations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

function combineAnimationArrays(highlightArray, swapArray, animations) {
  while (swapArray.length !== 0) {
    let left = swapArray.shift();
    let right = swapArray.shift();
    animations.push(highlightArray.shift());
    animations.push(highlightArray.shift());
    animations.push([left, right]);
  }
}
