export function recolourElements(colour) {
  document.body.className = colour;

  const infoPopUpElement = document.querySelector(`section[class*='component-info-pop-up']`);
  infoPopUpElement.className.includes('hidden') ? infoPopUpElement.className = `component-info-pop-up hidden ${colour}` : infoPopUpElement.className = `component-info-pop-up ${colour}`;

  const sliderElement = document.querySelector(`input[class*='slider']`);
  sliderElement.className = `slider ${colour}`;

  const sortButtonElement = document.querySelector(`button[class*='sort-button']`);
  sortButtonElement.className = `sort-button ${colour}`;
}
