import React from 'react';
import Heading from './Heading';
import SortPanel from './SortPanel';
import SpeedSlider from './SpeedSlider';
import SortButton from './SortButton';
import SortingVisualiser from './SortingVisualiser';
import InfoButton from './InfoButton';
import InfoPopUp from './InfoPopUp';
import './App.css';

import { getInsertionSortAnimations } from '../algorithms/insertion';
import { getBubbleSortAnimations } from '../algorithms/bubble';
import { getSelectionSortAnimations } from '../algorithms/selection';

const PRIMARY_COLOUR = '#00000033';
const SECONDARY_COLOUR = '#FFFFFF';
const FINISHED_COLOUR = '#FFFFFFB3';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // do I really need all of these?
      activeAlgorithm: null,
      unsortedArray: null,
      sortedArray: null,
      // rename this to something more semantic, such as animationsRunning or something
      sortButtonClicked: false,
    };
  }

  // I THINK I SHOULD DELETE updateArray as a prop on the SortingVisualiser component
  componentDidMount() {
    this.updateArray();
  }
  
  // should be able to get rid of this
  shouldComponentUpdate() {
    if (this.state.sortButtonClicked) {
      return false;
    } else {
      return true;
    }
  }

  updateArray = () => {
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
    this.setState({ unsortedArray });
    // get rid of this return
    return unsortedArray;
  }

  runSortAnimations(sortAnimations) {
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

  sortPanelClick = buttonName => {
    this.setState({ activeAlgorithm: buttonName });

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
  };

  sortButtonClick = () => {
  }

  handleClick = buttonName => {
    if (buttonName === 'info-button') {
      // package these two guys up into another .js file. Do the same for every single click
      revealInfoPopUp();
      addBlurToBackground();
    }
    if (buttonName === 'close-info-button') {
      hideInfoPopUp();
      removeBlurFromBackground();
    }
    if (buttonName === 'sort-button') {
      let sortedArray = [];
      if (this.state.sortButtonClicked === false && this.state.activeAlgorithm !== null) {
        this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
          disableSortTypeButtons();
          changeSortButtonText('Stop');
          if (this.state.activeAlgorithm === 'insertion') {
            this.setState({ sortedArray: getInsertionSortAnimations(this.state.unsortedArray) }, () => {
              this.runSortAnimations(this.state.sortedArray);
            });
          }
          if (this.state.activeAlgorithm === 'bubble') { 
            this.setState({ sortedArray: getBubbleSortAnimations(this.state.unsortedArray) }, () => {
              this.runSortAnimations(this.state.sortedArray);
            });
          }
          if (this.state.activeAlgorithm === 'selection') {
            this.setState({ sortedArray: getSelectionSortAnimations(this.state.unsortedArray) }, () => {
              this.runSortAnimations(this.state.sortedArray);
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
        this.updateArray();
      }
    }
  }

  render() {
    return (
      <section className="component-app">
        <InfoPopUp clickHandler={this.handleClick}></InfoPopUp>
        <section className="sidebar">
          <Heading></Heading>
          <section className="sidebar-bottom">
            <SortPanel selectAlgorithm={this.sortPanelClick}></SortPanel>
            <SpeedSlider></SpeedSlider>
            <SortButton clickHandler={this.handleClick}></SortButton>
          </section>
        </section>
        <section className="visualiser">
          <InfoButton clickHandler={this.handleClick}></InfoButton>
          <SortingVisualiser 
            unsortedArray={this.state.unsortedArray}></SortingVisualiser>
        </section>
      </section>
    );
  }
}

function recolourAllElements(colour) {
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

function selectTypeButton(algorithmType, colour) {
  const typeButton = document.querySelectorAll(`button[class*='type-button']`);
  typeButton.forEach(element => {
    element.getAttribute('name') === algorithmType ? element.className = `type-button ${colour} selected`: element.className = `type-button ${colour}`;
  });
}

function disableSortTypeButtons() {
  const sortTypeButtonElements = document.querySelectorAll(`button[class*='type-button']`);
  sortTypeButtonElements.forEach(element => element.disabled = true);       
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

function revealInfoPopUp() {
  const infoPopUp = document.querySelector('.component-info-pop-up');
  infoPopUp.classList.remove('hidden');
}

function hideInfoPopUp() {
  const infoPopUp = document.querySelector('.component-info-pop-up');
  infoPopUp.classList.add('hidden');
}

function addBlurToBackground() {
  const blurSidebar = document.querySelector('.sidebar');
  blurSidebar.classList.add('blur');
  const blurVisualiser = document.querySelector('.visualiser');
  blurVisualiser.classList.add('blur');
}

function removeBlurFromBackground() {
  const blurSidebar = document.querySelector('.sidebar');
  blurSidebar.classList.remove('blur');
  const blurVisualiser = document.querySelector('.visualiser');
  blurVisualiser.classList.remove('blur');
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
