export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

// Refactor this function, and rename it to match with how insertion sort works
function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  // TO DO: turn animations[animations.length - 1][0] into a variable (with good semantics) and call it instead of hard typing this code :)
  // ALSO: just rewrite ALL this code, refactor it, because it sucks and doesn't make sense :)

  while (i <= middleIdx && j <= endIdx) {
    //animations.push([i, j]);    
    //animations.push([i, j]);

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      if (animations[animations.length - 1].length !== 0) {
        console.log('we can do this which we cant');
      }
      if (typeof animations[animations.length - 1] === 'undefined') {
        animations.push([[k, auxiliaryArray[i]]]); 
      } else {
        animations[animations.length - 1].push('HI');
      }
      //animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([[k, auxiliaryArray[j]]]);
      //animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    //animations.push([i, i]);
    //animations.push([i, i]);

    if (typeof animations[animations.length - 1][0] === 'object') {
      animations[animations.length - 1].push([k, auxiliaryArray[i]]);
    } else {
      animations.push([[k, auxiliaryArray[i]]]);
    }
    //animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    //animations.push([j, j]);
    //animations.push([j, j]);

    if (typeof animations[animations.length - 1][0] === 'object') {
      animations[animations.length - 1].push([k, auxiliaryArray[j]]);
    } else {
      animations.push([[k, auxiliaryArray[j]]]);
    }
    //animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
