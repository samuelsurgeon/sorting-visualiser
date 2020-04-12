import { recolourAllElements } from './changeColours';

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
