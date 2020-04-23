export function getClassName(selectedAlgorithm) {
  const className = ['type-button'];

  //Compile this into a literal expression of the array. Just like in calculator
  className.push(selectedAlgorithm ? selectedAlgorithm : '');
  className.push(document.querySelectorAll(`button[class*='type-button']`).forEach(element => {
    element.getAttribute('name') == this.props.selectedAlgorithm ? 'selected' : '';
  }));
  console.log(className);
}

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

export function changeSortButtonText(text) {
  const sortButtonElement = document.querySelector(`button[class*='sort-button']`);
  sortButtonElement.textContent = text;
}
