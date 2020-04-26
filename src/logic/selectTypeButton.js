export default function getClassName(selectedAlgorithm) {
  const className = ['type-button'];
  //Compile this into a literal expression of the array. Just like in calculator
  className.push(selectedAlgorithm ? selectedAlgorithm : '');
  let buttons = document.querySelectorAll(`button[class*='type-button']`);
  buttons.forEach(element => {
    if (element.getAttribute('name') === selectedAlgorithm) className.push('selected');
    console.log(element);
  });
  
}

/*
expor tfunction selectTypeButton(algorithmType, colour) {
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
*/
