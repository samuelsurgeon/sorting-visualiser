import { recolourElements } from './recolourElements';
import { selectTypeButton } from './selectTypeButton';

import { getInsertionSortAnimations } from './algorithms/insertion';
import { getBubbleSortAnimations } from './algorithms/bubble';
import { getSelectionSortAnimations } from './algorithms/selection';

const PRIMARY_COLOUR = '#00000033';
const SECONDARY_COLOUR = '#FFFFFF';
const FINISHED_COLOUR = '#FFFFFFB3';

export function handleAction(activeAlgorithm, unsortedArray, sortedArray, buttonName) {
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
    recolourElements('green');
    selectTypeButton('insertion', 'green');
    return { activeAlgorithm: buttonName };
    // Remember that I'm returning the active algorithm here. One other thing, I'm returning this three separate times, maybe there's a better way to handle it? Wait, do I even need to return activeAlgorithm? Let's try doing it without it.
  }

  if (buttonName === 'bubble') {
    recolourElements('turquoise');
    selectTypeButton('bubble', 'turquoise');

    return getBubbleSortAnimations(unsortedArray);
  }

  if (buttonName === 'selection') {
    recolourElements('pink');
    selectTypeButton('selection', 'pink');

    // These can be one-liners if you want it. This is actually a bit redundant, because if someone is changing between the buttons, then the
    return getSelectionSortAnimations(unsortedArray);
  }
  if (buttonName === 'sortButton') {
    let animations;
    if (activeAlgorithm === 'insertion') {
      animations = getInsertionSortAnimations(unsortedArray);
    }
    if (activeAlgorithm === 'bubble') {
      animations = getBubbleSortAnimations(unsortedArray);
    }
    if (activeAlgorithm === 'selection') {
      animations = getSelectionSortAnimations(unsortedArray);
    }

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
}
