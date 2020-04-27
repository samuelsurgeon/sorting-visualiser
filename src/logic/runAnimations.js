import getInsertionSortAnimations from './insertionSort';
import getBubbleSortAnimations from './bubbleSort';
import getSelectionSortAnimations from './selectionSort';

const PRIMARY_COLOUR = '#00000033';
const SECONDARY_COLOUR = '#FFFFFF';
const FINISHED_COLOUR = '#FFFFFFB3';

export function runAnimations(selectedAlgorithm, unsortedArray, animationSpeed) {
  let animations = [];

  if (selectedAlgorithm === 'insertion') animations = getInsertionSortAnimations(unsortedArray);
  if (selectedAlgorithm === 'bubble') animations = getBubbleSortAnimations(unsortedArray);
  if (selectedAlgorithm === 'selection') animations = getSelectionSortAnimations(unsortedArray);

  const transitionSpeed = animationSpeed / 1000;
  // better implementation
  let shouldColourSwap = true;

  for (let i = 0; i < animations.length; i += 1) {
    const arrayBars = document.querySelectorAll('.array-bar');
    const barHeights = document.querySelectorAll('.bar-height');
    const animateHighlight = typeof animations[i][0] === 'object' ? false : true;

    if (animateHighlight) {
      // maybe pack all this up into a function?
      const [barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      const colour = shouldColourSwap ? SECONDARY_COLOUR : PRIMARY_COLOUR;
      setTimeout(() => {
      barOneStyle.backgroundColor = colour;
      barTwoStyle.backgroundColor = colour;
      barOneStyle.transitionDuration = `${transitionSpeed}s`;
      barTwoStyle.transitionDuration = `${transitionSpeed}s`;
      }, i * animationSpeed);
      shouldColourSwap = !shouldColourSwap;
    } else {
      setTimeout(() => {
        const [barOneIndex, barOneHeight] = animations[i][0];
        const [barTwoIndex, barTwoHeight] = animations[i][1];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        barOneStyle.height = `${barOneHeight}px`;
        barTwoStyle.height = `${barTwoHeight}px`;
        const heightOneText = barHeights[barOneIndex];
        const heightTwoText = barHeights[barTwoIndex];
        heightOneText.textContent = `${barOneHeight}`;
        heightTwoText.textContent = `${barTwoHeight}`;
      }, i * animationSpeed);
    }
  }
  setTimeout(() => {
    const arrayBars = document.querySelectorAll('.array-bar');
    let max = arrayBars.length;
    for (let i = 0; i < max; i += 1) {
      arrayBars[i].style.transitionDuration = `${transitionSpeed}s`;
      arrayBars[i].style.backgroundColor = FINISHED_COLOUR;
  }
    const sortButtonStyle = document.querySelector(`button[class*='sort-button']`);
    sortButtonStyle.textContent = 'Reset';
  }, animations.length * animationSpeed);
}

export function clearAnimations(arrayLength, animationSpeed) {
  let timeoutIDs = arrayLength * animationSpeed;
  while (timeoutIDs--) {
    window.clearTimeout(timeoutIDs);
  }
}