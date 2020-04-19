const PRIMARY_COLOUR = '#00000033';
const SECONDARY_COLOUR = '#FFFFFF';
const FINISHED_COLOUR = '#FFFFFFB3';

export function handleAction(unsortedArray, sortedArray, buttonName) {
  if (buttonName === 'infoButton') {
    const infoPopUp = document.querySelector('.component-info-pop-up');
    infoPopUp.classList.remove('hidden');

    const blurSidebar = document.querySelector('.sidebar');
    blurSidebar.classList.add('blur');

    const blurVisualiser = document.querySelector('.visualiser');
    blurVisualiser.classList.add('blur');
  }

  if (buttonName === 'closePopUpButton') {
    const infoPopUp = document.querySelector('.component-info-pop-up');
    infoPopUp.classList.add('hidden');

    const blurSidebar = document.querySelector('.sidebar');
    blurSidebar.classList.remove('blur');

    const blurVisualiser = document.querySelector('.visualiser');
    blurVisualiser.classList.remove('blur');
  }

  if (buttonName === 'insertion') {
    recolourAllElements('green');
    selectTypeButton('insertion', 'green');

    return getInsertionSortAnimations(unsortedArray);
    // Remember that I'm returning the active algorithm here. One other thing, I'm returning this three separate times, maybe there's a better way to handle it? Wait, do I even need to return activeAlgorithm? Let's try doing it without it.
   // return buttonName;
  }

  if (buttonName === 'bubble') {
    recolourAllElements('turquoise');
    selectTypeButton('bubble', 'turquoise');

    return getBubbleSortAnimations(unsortedArray);
  }

  if (buttonName === 'selection') {
    recolourAllElements('pink');
    selectTypeButton('selection', 'pink');

    // These can be one-liners if you want it
    return getSelectionSortAnimations(unsortedArray);
  }

  if (buttonName === 'sortButton') {
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
}

export function generateArray() {
  const NUMBER_OF_ARRAY_BARS = 14;
  const ARRAY_BAR_MIN_HEIGHT = 100;
  const ARRAY_BAR_MAX_HEIGHT = 600;
  const arrayBars = document.querySelectorAll('.array-bar');
  const max = arrayBars.length;
  for (let i = 0; i < max; i += 1) {
    arrayBars[i].style.backgroundColor = PRIMARY_COLOUR;
  }
  const unsortedArray = [];
  for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i += 1) {
    unsortedArray.push(randomIntFromInterval(ARRAY_BAR_MIN_HEIGHT, ARRAY_BAR_MAX_HEIGHT));
  }
  return unsortedArray;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function recolourAllElements(colour) {
  document.body.className = colour;

  const infoPopUpElement = document.querySelector(`section[class*='component-info-pop-up']`);
  infoPopUpElement.className.includes('hidden') ? infoPopUpElement.className = `component-info-pop-up hidden ${colour}` : infoPopUpElement.className = `component-info-pop-up ${colour}`;

  const sliderElement = document.querySelector(`input[class*='slider']`);
  sliderElement.className = `slider ${colour}`;

  const sortButtonElement = document.querySelector(`button[class*='sort-button']`);
  sortButtonElement.className = `sort-button ${colour}`;
}

function selectTypeButton(algorithmType, colour) {
  const typeButton = document.querySelectorAll(`button[class*='type-button']`);
  typeButton.forEach(element => {
    element.getAttribute('name') === algorithmType ? element.className = `type-button ${colour} selected`: element.className = `type-button ${colour}`;
  });
}

export function disableSortTypeButtons() {
  const sortTypeButtonElements = document.querySelectorAll(`button[class*='type-button']`);
  sortTypeButtonElements.forEach(element => element.disabled = true);
}

export function enableSortTypeButtons() {
  const sortTypeButtonElements = document.querySelectorAll(`button[class*='type-button']`);
  sortTypeButtonElements.forEach(element => element.disabled = false);
}

export function changeSortButtonText(text) {
  const sortButtonElement = document.querySelector(`button[class*='sort-button']`);
  sortButtonElement.textContent = text;
}

export function clearAnimations(sortedArrayLength) {
  const speedSlider = document.querySelector(`input[class*='slider']`);
  let timeoutIDs = sortedArrayLength * speedSlider.value;
  while (timeoutIDs--) {
    window.clearTimeout(timeoutIDs);
  }
}
