export function runSortAnimations() {
    let sortedArray = [];
    if (this.state.sortButtonClicked === false && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        disableSortTypeButtons();
        changeSortButtonText('Stop');
        if (this.state.activeAlgorithm === 'insertion') {
          this.setState({ sortedArray: getInsertionSortAnimations(this.state.unsortedArray) }, () => {
            setTimeoutsForAnimations(this.state.sortedArray);
          });
        }
        if (this.state.activeAlgorithm === 'bubble') {
          this.setState({ sortedArray: getBubbleSortAnimations(this.state.unsortedArray) }, () => {
            setTimeoutsForAnimations(this.state.sortedArray);
          });
        }
        if (this.state.activeAlgorithm === 'selection') {
          this.setState({ sortedArray: getSelectionSortAnimations(this.state.unsortedArray) }, () => {
            setTimeoutsForAnimations(this.state.sortedArray);
          });
        }
      });
    }
    if (this.state.sortButtonClicked === true && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        clearAnimations(this.state.sortedArray.length);
      });
        enableSortTypeButtons();
      changeSortButtonText('Sort');
      this.setState({ unsortedArray: generateArray() });
    }
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
