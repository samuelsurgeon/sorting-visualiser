export function closeInfoPopUp() {
  // you should be able to compile all of these since I'm never reusing them again. But it doesn't follow the SRP
  hideInfoPopUp();
  removeBlurFromBackground();
}

function hideInfoPopUp() {
  const infoPopUp = document.querySelector('.component-info-pop-up');
  infoPopUp.classList.add('hidden');
}

function removeBlurFromBackground() {
  const blurSidebar = document.querySelector('.sidebar');
  blurSidebar.classList.remove('blur');
  const blurVisualiser = document.querySelector('.visualiser');
  blurVisualiser.classList.remove('blur');
}

export function generateArray() {
  const PRIMARY_COLOUR = '#00000033';
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

export function openInfoPopUp() {
  revealInfoPopUp();
  addBlurToBackground();
}

function revealInfoPopUp() {
  const infoPopUp = document.querySelector('.component-info-pop-up');
  infoPopUp.classList.remove('hidden');
}

function addBlurToBackground() {
  const blurSidebar = document.querySelector('.sidebar');
  blurSidebar.classList.add('blur');
  const blurVisualiser = document.querySelector('.visualiser');
  blurVisualiser.classList.add('blur');
}

export function selectSortType(buttonName) {
  if (buttonName === 'insertion') {
    recolourAllElements('green');
    selectTypeButton('insertion', 'green');
  }
  if (buttonName === 'bubble') {
    recolourAllElements('turquoise');
    selectTypeButton('bubble', 'turquoise');
  }
  if (buttonName === 'selection') {
    recolourAllElements('pink');
    selectTypeButton('selection', 'pink');
  }
}

function selectTypeButton(algorithmType, colour) {
  const typeButton = document.querySelectorAll(`button[class*='type-button']`);
  typeButton.forEach(element => {
    element.getAttribute('name') === algorithmType ? element.className = `type-button ${colour} selected`: element.className = `type-button ${colour}`;
  });
}

export function recolourAllElements(colour) {
  recolourBody(colour);
  recolourInfoPopUp(colour);
  recolourSlider(colour);
  recolourSortButton(colour);
}

function recolourBody(colour) {
  document.body.className = colour;
}

function recolourInfoPopUp(colour) {
  const infoPopUpElement = document.querySelector(`section[class*='component-info-pop-up']`);
  infoPopUpElement.className.includes('hidden') ? infoPopUpElement.className = `component-info-pop-up hidden ${colour}` : infoPopUpElement.className = `component-info-pop-up ${colour}`;
}

function recolourSlider(colour) {
  const sliderElement = document.querySelector(`input[class*='slider']`);
  sliderElement.className = `slider ${colour}`;
}

function recolourSortButton(colour) {
  const sortButtonElement = document.querySelector(`button[class*='sort-button']`);
  sortButtonElement.className = `sort-button ${colour}`;
}
