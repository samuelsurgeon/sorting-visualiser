import React from 'react';
// Use default export ?
import { getInsertionSortAnimations } from '../algorithms/insertion';
import { getSelectionSortAnimations } from '../algorithms/selection';
import { getBubbleSortAnimations } from '../algorithms/bubble';
import Heading from './Heading';
import SortPanel from './SortPanel';
import SpeedSlider from './SpeedSlider';
import SortButton from './SortButton';
import SortingVisualiser from './SortingVisualiser';
import InfoButton from './InfoButton';
import InfoPopUp from './InfoPopUp';
import './App.css';

let shouldResetArray = false;

// Just a hacc, figure it out later
let setTimeoutIDs = 0;
let timesRun = 1;

// TO DO: to get the array-bar elements used getElementsByClassName, instead of querySelector. querySelector returns a nodeList (I think), but does get Elements actually return HTMLElements? Look into this

// TO DO: Change the name of snapShot haha

//DELETE ALL INSTANCES OF THIS
const ORANGE = '#FFBE29';

// COLOURS
const YELLOW = '#FFED05';
const GREEN = '#44E78E';
const TURQUOISE = '#3BF2F5';
const PINK = '#FE8DC5';

// TChange this value for the speed of the animations (THIS IS CLEMENT'S CODE CHANGE THIS!)
//  250 was the last set speed here.
// this should probably be in state? I think
let ANIMATION_SPEED_MS = 500;
// This increases as the speed decreases
let TRANSITION_SPEED = '0.5s';

const NUMBER_OF_ARRAY_BARS = 14;
const MIN_HEIGHT = 100;
const MAX_HEIGHT = 600;

// Colour
let PRIMARY_COLOR = 'rgba(0, 0, 0, 0.2)';
const SECONDARY_COLOR = 'white';

// let arrayBars = document.getElementsByClassName('array-bar');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.sortingVisualiserElement = React.createRef();
  }

  state = {
    activeAlgorithm: null,
    currentArray: null,
    sortButtonClicked: false,
  };

  updateArray = () => {
    const arrayBars = document.querySelectorAll('.array-bar');
    const max = arrayBars.length;
    for (let i = 0; i < max; i += 1) {
      arrayBars[i].style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(MIN_HEIGHT, MAX_HEIGHT));
    }
    // Where do I use currentArray? Because I might not need a state for it here, because I pass it down to the sortingVisualier in the end anyway :)
    this.setState({ currentArray: array });
    return array;
  }

  // All of these sort methods are pretty similar, maybe we can have one big runAnimations() method and then use conditional logic to edit it THESE REPEATING CODE PATTERNS ARE NOT DRY BROH
  runSortAnimations(sortAnimations) {
    const animations = sortAnimations;
    // This is a hack. Fix this. If this the only solution, this variable should be kept in the state
    let alternate = true;

    for (let i = 0; i < timesRun; i += 1) {
      setTimeoutIDs += 1960;
    };

    for (let i = 0; i < animations.length; i += 1) {
      const arrayBars = document.querySelectorAll('.array-bar');
      const arrayHeights = document.querySelectorAll('.bar-height');
      const shouldAnimateSwap = typeof animations[i][0] === 'object' ? false : true;
      
      // Logic backwards?
      if (shouldAnimateSwap) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const colour = alternate ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
        barOneStyle.backgroundColor = colour;
        barTwoStyle.backgroundColor = colour;
        barOneStyle.transitionDuration = `${TRANSITION_SPEED}s`;
        barTwoStyle.transitionDuration = `${TRANSITION_SPEED}s`;
        }, i * ANIMATION_SPEED_MS);
        alternate = !alternate;
      } else {
        setTimeout(() => {
          const [barOneIndex, barOneHeight] = animations[i][0];
          const [barTwoIndex, barTwoHeight] = animations[i][1];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${barOneHeight}px`;
          barTwoStyle.height = `${barTwoHeight}px`;
          barOneStyle.transitionDuration = `${TRANSITION_SPEED}s`;
          barTwoStyle.transitionDuration = `${TRANSITION_SPEED}s`;

          const heightOneElement = arrayHeights[barOneIndex];
          const heightTwoElement = arrayHeights[barTwoIndex];
          heightOneElement.textContent = `${barOneHeight}`;
          heightTwoElement.textContent = `${barTwoHeight}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => {
      const arrayBars = document.querySelectorAll('.array-bar');
      let max = arrayBars.length;
      for (let i = 0; i < max; i += 1) {
        arrayBars[i].style.transitionDuration = `${TRANSITION_SPEED}s`;
        arrayBars[i].style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      }
      const sortButtonStyle = document.querySelector(`button[class*='sort-button']`);
      sortButtonStyle.textContent = 'Reset';
    }, animations.length * ANIMATION_SPEED_MS);
  timesRun += 1;
  }

  // Name this function something else, to make sure that the flow of logic is good :) I think I only use the handleClick method to change the algorithm type, so maybe I should rename it to something like setAlgorithm or somethign liek that
  sortPanelClick = buttonName => {
    this.setState({ activeAlgorithm: buttonName });
    const bodyStyle = document.body.style;
    const typeButtonStyles = document.querySelectorAll(`button[class*='type-button']`);
    const sliderStyle = document.querySelector(`input[class*='slider']`);
    const sortButtonStyle = document.querySelector(`button[class*='sort-button']`);
    /* Get rid of the style on the end, just want to edit the classNames :) */
    const infoPopUp = document.querySelector(`section[class*='component-info-pop-up']`).style;

    if (buttonName === 'insertion') {
      /* We shouldn't be altering the styles in JS, we should be assigning classes, separate your concerns, and keep your code clean */
      bodyStyle.backgroundColor = GREEN;
      infoPopUp.backgroundColor = GREEN;

      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'insertion' ? element.className = 'type-button-green selected': element.className = 'type-button-green';
      });
      sliderStyle.className = 'slider-green';
      sortButtonStyle.className = 'sort-button-green';
    }
    if (buttonName === 'bubble') {
      bodyStyle.backgroundColor = TURQUOISE;
      infoPopUp.backgroundColor = TURQUOISE;
      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'bubble' ? element.className = 'type-button-turquoise selected': element.className = 'type-button-turquoise';
      });
      // These values shouldn't be hard coded!!!
      sliderStyle.className = 'slider-turquoise';
      sortButtonStyle.className = 'sort-button-turquoise';
    }
    if (buttonName === 'selection') {
      bodyStyle.backgroundColor = PINK;
      infoPopUp.backgroundColor = PINK;
      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'selection' ? element.className = 'type-button-pink selected': element.className = 'type-button-pink';
      });
      sliderStyle.className = 'slider-pink';
      sortButtonStyle.className = 'sort-button-pink'; }
  };

  sortButtonClick = () => {
    const buttonStyle = document.querySelector(`button[class*='sort-button']`);
    if (this.state.sortButtonClicked === false && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        const sortButtons = document.querySelectorAll(`button[class*='type-button']`);
        sortButtons.forEach(element => element.disabled = true);       

        buttonStyle.textContent = 'Stop';

        const speedSlider = document.querySelector(`input[class*='slider']`);
        ANIMATION_SPEED_MS = speedSlider.value;
        TRANSITION_SPEED = speedSlider.value / 1000;
        // Replace the string literal with a const; this line is long as shit shorten it lad
        if (this.state.activeAlgorithm === 'insertion') this.runSortAnimations(getInsertionSortAnimations(this.state.currentArray));
        if (this.state.activeAlgorithm === 'bubble') this.runSortAnimations(getBubbleSortAnimations(this.state.currentArray));
        if (this.state.activeAlgorithm === 'selection') this.runSortAnimations(getSelectionSortAnimations(this.state.currentArray));
      });      
    }
    if (this.state.sortButtonClicked === true && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        while (setTimeoutIDs--) {
          window.clearTimeout(setTimeoutIDs);
        }
        setTimeoutIDs = 0;
      });
      const sortButtons = document.querySelectorAll(`button[class*='type-button']`);
      sortButtons.forEach(element => element.disabled = false);
      buttonStyle.textContent = 'Sort';
      //this might be a bit convoluted, figure out better logic
      this.sortingVisualiserElement.current.resetArray(this.updateArray());
    }
  }

  infoButtonClick = () => {
    const element = document.querySelector('.component-info-pop-up');
    element.classList.remove('hidden');

    const blurSidebar = document.querySelector('.sidebar');
    blurSidebar.classList.add('blur');

    const blurVisualiser = document.querySelector('.visualiser');
    blurVisualiser.classList.add('blur');
  }

  closePopUpClick = () => {
    const element = document.querySelector('.component-info-pop-up');
    element.classList.add('hidden');

    const blurSidebar = document.querySelector('.sidebar');
    blurSidebar.classList.remove('blur');

    const blurVisualiser = document.querySelector('.visualiser');
    blurVisualiser.classList.remove('blur');
  }

  render() {
    return (
      <section className="component-app">
        <InfoPopUp closePopUpClick={this.closePopUpClick}></InfoPopUp>
        <section className="sidebar">
          <Heading></Heading>
          <section className="sidebar-bottom">
            {/* selectAlgorithm and runAlgorithm? should rename these lads */}
            {/* So I'm actually passing these lads down instead of up?? haha */}
            <SortPanel selectAlgorithm={this.sortPanelClick}></SortPanel>
            <SpeedSlider></SpeedSlider>
            <SortButton runAlgorithm={this.sortButtonClick}></SortButton>
          </section>
        </section>
        <section className="visualiser">
          <InfoButton infoButtonClick={this.infoButtonClick}></InfoButton>
          <SortingVisualiser 
            ref={this.sortingVisualiserElement}
            updateArray={this.updateArray}
            appState={this.state}></SortingVisualiser>
          {/* maybe might move these stickies out */}
        </section>
      </section>
    );
  }
}

// This can be used for testing...
function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
