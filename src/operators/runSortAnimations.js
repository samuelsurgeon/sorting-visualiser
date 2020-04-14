import { getInsertionSortAnimations } from '../algorithms/insertion';
import { getBubbleSortAnimations } from '../algorithms/bubble';
import { getSelectionSortAnimations } from '../algorithms/selection';
import { generateArray } from './generateArray';

const PRIMARY_COLOUR = '#00000033';
const SECONDARY_COLOUR = '#FFFFFF';
const FINISHED_COLOUR = '#FFFFFFB3';

export function setTimeoutEventsForAnimations(sortAnimations) {
  const speedSlider = document.querySelector(`input[class*='slider']`);
  const animationSpeed = speedSlider.value;
  const transitionSpeed = speedSlider.value / 1000;
  const animations = sortAnimations;
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
        barOneStyle.transitionDuration = `${transitionSpeed}s`;
        barTwoStyle.transitionDuration = `${transitionSpeed}s`;

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

function enableSortTypeButtons() {
  const sortTypeButtonElements = document.querySelectorAll(`button[class*='type-button']`);
  sortTypeButtonElements.forEach(element => element.disabled = false);
}

function changeSortButtonText(text) {
  const sortButtonElement = document.querySelector(`button[class*='sort-button']`);
  sortButtonElement.textContent = text;
}

function clearAnimations(sortedArrayLength) {
  const speedSlider = document.querySelector(`input[class*='slider']`);
  let timeoutIDs = sortedArrayLength * speedSlider.value;
  while (timeoutIDs--) {
    window.clearTimeout(timeoutIDs);
  }
}
