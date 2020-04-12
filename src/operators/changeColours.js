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
