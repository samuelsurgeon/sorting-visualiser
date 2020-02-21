import React from 'react';
// Use default export ?
import { getMergeSortAnimations } from '../algorithms/merge';
import { getInsertionSortAnimations } from '../algorithms/insertion';
import { getBubbleSortAnimations } from '../algorithms/bubble';
import { getSelectionSortAnimations } from '../algorithms/selection';
import Heading from './Heading';
import SortPanel from './SortPanel';
import SpeedSlider from './SpeedSlider';
import SortButton from './SortButton';
import SortingVisualiser from './SortingVisualiser';
import Stickies from './Stickies';
import './App.css';

let shouldResetArray = false;

// Just a hacc, figure it out later
let setTimeoutIDs = 0;
let timesRun = 1;

// TO DO: to get the array-bar elements used getElementsByClassName, instead of querySelector. querySelector returns a nodeList (I think), but does get Elements actually return HTMLElements? Look into this

// TO DO: Change the name of snapShot haha

// COLOURS
const YELLOW = '#FFED05';
const ORANGE = '#FFBE29';
const GREEN = '#44E78E';
const TURQUOISE = '#3BF2F5';
const PINK = '#FE8DC5';

// TChange this value for the speed of the animations (THIS IS CLEMENT'S CODE CHANGE THIS!)
//  250 was the last set speed here.
const ANIMATION_SPEED_MS = 2500;
// This increases as the speed decreases
const TRANSITION_SPEED = 0.2;

// Colour
let PRIMARY_COLOR = 'rgba(0, 0, 0, 0.2)';
const SECONDARY_COLOR = 'white';
// let arrayBars = document.getElementsByClassName('array-bar');

export default class App extends React.Component {
  state = {
    activeAlgorithm: null,
    currentArray: null,
    sortButtonClicked: false
  };

  updateArray = array => {
    if (array.length === 0) {
      console.log('In App.js failed');
    } else {
      this.setState({ currentArray: array });
    }
  }

  // All of these sort methods are pretty similar, maybe we can have one big runAnimations() method and then use conditional logic to edit it THESE REPEATING CODE PATTERNS ARE NOT DRY BROH
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.currentArray);
    console.log(animations);
    // fix this hack
    let alternate = true;
    // HOLY HACK!!
    for (let i = 0; i < timesRun; i += 1) {
      setTimeoutIDs += 1960; 
    }
    for (let i = 0; i < animations.length; i += 1) {
      const arrayBars = document.querySelectorAll('.array-bar');
      const arrayHeights = document.querySelectorAll('.bar-height');
      const animateHighlight = typeof animations[i][0] === 'object' ? false : true;

      if (animateHighlight) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const colour = alternate ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = colour;
          barTwoStyle.backgroundColor = colour;
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

          const heightOneElement = arrayHeights[barOneIndex];
          const heightTwoElement = arrayHeights[barTwoIndex];
          heightOneElement.textContent = `${barOneHeight}`;
          heightTwoElement.textContent = `${barTwoHeight}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    timesRun += 1;
  }

  insertionSort() {
    // let testArray = [3, 2, 1];
    const animations = getInsertionSortAnimations(this.state.currentArray);
    console.log(animations);
    // This is a hack. Fix this.
    let alternate = true;

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

          const heightOneElement = arrayHeights[barOneIndex];
          const heightTwoElement = arrayHeights[barTwoIndex];
          heightOneElement.textContent = `${barOneHeight}`;
          heightTwoElement.textContent = `${barTwoHeight}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    // let testArray = [3, 2, 1];
    const animations = getBubbleSortAnimations(this.state.currentArray);
    // This is a hack. Fix this.
    let alternate = true;

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

          const heightOneElement = arrayHeights[barOneIndex];
          const heightTwoElement = arrayHeights[barTwoIndex];
          heightOneElement.textContent = `${barOneHeight}`;
          heightTwoElement.textContent = `${barTwoHeight}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort() {
    
    // let testArray = [3, 2, 1];
    const animations = getSelectionSortAnimations(this.state.currentArray);
    // This is a hack. Fix this.
    let alternate = true;

    for (let i = 0; i < animations.length; i += 1) {
      const arrayBars = document.querySelectorAll('.array-bar');
      const arrayHeights = document.querySelectorAll('.bar-height');
      // The name of this is confusing? It should be shouldntAnimateSwap lol, rework the entire code piece
      const shouldAnimateSwap = typeof animations[i][0] === 'object' ? false : true;

      if (shouldAnimateSwap) {
        //console.log(animations);
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const colour = alternate ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
        barOneStyle.backgroundColor = colour;
        barTwoStyle.backgroundColor = colour;
        }, i * ANIMATION_SPEED_MS);
        alternate = !alternate;
      } else {
        setTimeout(() => {
          //console.log('YES BITCH: ' + animations[i]);
          const [barOneIndex, barOneHeight] = animations[i][0];
          const [barTwoIndex, barTwoHeight] = animations[i][1];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${barOneHeight}px`;
          barTwoStyle.height = `${barTwoHeight}px`;

          const heightOneElement = arrayHeights[barOneIndex];
          const heightTwoElement = arrayHeights[barTwoIndex];
          heightOneElement.textContent = `${barOneHeight}`;
          heightTwoElement.textContent = `${barTwoHeight}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  // Name this function something else, to make sure that the flow of logic is good :) I think I only use the handleClick method to change the algorithm type, so maybe I should rename it to something like setAlgorithm or somethign liek that
  sortPanelClick = buttonName => {
    this.setState({ activeAlgorithm: buttonName });
    const htmlStyle = document.documentElement.style;
    const typeButtonStyles = document.querySelectorAll(`button[class*='type-button']`);
    const sliderStyle = document.querySelector(`input[class*='slider']`);
    const sortButtonStyle = document.querySelector(`button[class*='sort-button']`);
    htmlStyle.transition = '2s';

    if (buttonName === 'merge') {
      htmlStyle.backgroundColor = ORANGE;
      typeButtonStyles.forEach(element => {
        // This code is garbage, figure out a better more succinct way to do this
        element.getAttribute('name') === 'merge' ? element.className = 'type-button-orange selected': element.className = 'type-button-orange';
      });
      sliderStyle.className = 'slider-orange';
      sortButtonStyle.className = 'sort-button-orange';
    }
    if (buttonName === 'insertion') {
      htmlStyle.backgroundColor = GREEN;
      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'insertion' ? element.className = 'type-button-green selected': element.className = 'type-button-green';
      });
      sliderStyle.className = 'slider-green';
      sortButtonStyle.className = 'sort-button-green';
    }
    if (buttonName === 'bubble') {
      htmlStyle.backgroundColor = TURQUOISE;
      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'bubble' ? element.className = 'type-button-turquoise selected': element.className = 'type-button-turquoise';
      });
      // These values shouldn't be hard coded!!!
      sliderStyle.className = 'slider-turquoise';
      sortButtonStyle.className = 'sort-button-turquoise';
    }
    if (buttonName === 'selection') {
      htmlStyle.backgroundColor = PINK;
      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'selection' ? element.className = 'type-button-pink selected': element.className = 'type-button-pink';
      });
      sliderStyle.className = 'slider-pink';
      sortButtonStyle.className = 'sort-button-pink';
    }
    // this.setState({ activeAlgorithm: mergeSort(buttonName, this.state.currentArray) });

    // I THINK THIS SORT METHOD IS THE PROBLEM LOL :-)
    // const javascriptSortedArray = this.state.currentArray.slice().sort((a, b) => a - b);
    // const sortedArray = SortingAlgorithm.mergeSort(this.state.currentArray);
    // console.log(arraysAreEqual(javascriptSortedArray, sortedArray));
  };

  sortButtonClick = () => {
    const buttonStyle = document.querySelector(`button[class*='sort-button']`);

    if (this.state.sortButtonClicked === false && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        buttonStyle.textContent = 'Stop';
        // Replace the string literal with a const; because we type it out in each one
        if (this.state.activeAlgorithm === 'merge') this.mergeSort();
        if (this.state.activeAlgorithm === 'insertion') this.insertionSort();
        if (this.state.activeAlgorithm === 'bubble') this.bubbleSort();
        if (this.state.activeAlgorithm === 'selection') this.selectionSort();
      });      
    }
    if (this.state.sortButtonClicked === true && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        while (setTimeoutIDs--) {
          window.clearTimeout(setTimeoutIDs);
        }
        setTimeoutIDs = 0;
      });
      // Using this .click() method is the ultimate hack
      document.querySelector('.new-array-button').click();
      const arrayBars = document.querySelectorAll('.array-bar');
      arrayBars.forEach(element => {
        element.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      });
      buttonStyle.textContent = 'Sort';
    }
  }

  render() {
    return (
      <section className="component-app">
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
          <SortingVisualiser resetArray={shouldResetArray} updateArray={this.updateArray}></SortingVisualiser>
          {/* maybe might move these stickies out */}
          <Stickies></Stickies>
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
