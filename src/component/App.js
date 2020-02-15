import React from 'react';
// Use default export ?
import { getMergeSortAnimations } from '../algorithm/algorithm';
import Heading from './Heading';
import SortPanel from './SortPanel';
import SpeedSlider from './SpeedSlider';
import SortButton from './SortButton';
import SortingVisualiser from './SortingVisualiser';
import Stickies from './Stickies';
import './App.css';

// Just a hacc, figure it out later
let setTimeoutIDs = 0;

// TO DO: to get the array-bar elements used getElementsByClassName, instead of querySelector. querySelector returns a nodeList (I think), but does get Elements actually return HTMLElements? Look into this

// COLOURS
const YELLOW = '#FFED05';
const ORANGE = '#FFBE29';
const GREEN = '#44E78E';
const TURQUOISE = '#3BF2F5';
const PINK = '#FE8DC5';

// Change this value for the speed of the animations (THIS IS CLEMENT'S CODE CHANGE THIS!)
const ANIMATION_SPEED_MS = 30;
// This increases as the speed decreases
const TRANSITION_SPEED = 0.2;

// Colour*
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

  mergeSort() {
    // I want to structure my program more like the Calculator app, so get everything working, and then restructure it so these methods call in the algorithms.js file
    const animations = getMergeSortAnimations(this.state.currentArray);
    setTimeoutIDs = animations.length;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.querySelectorAll('.array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.transition = '0s';
          barTwoStyle.transition = '0s';
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  // Name this function something else, to make sure that the flow of logic is good :) I think I only use the handleClick method to change the algorithm type, so maybe I should rename it to something like setAlgorithm or somethign liek that
  sortPanelClick = buttonName => {
    const htmlStyle = document.documentElement.style;
    const typeButtonStyles = document.querySelectorAll(`button[class*='type-button']`);
    const sliderStyle = document.querySelector(`input[class*='slider']`);
    const sortButtonStyle = document.querySelector(`button[class*='sort-button']`);
    //const sliderStyler = document.querySelector('.slider::-webkit-slider-thumb').style;
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
    if (buttonName === 'heap') {
      htmlStyle.backgroundColor = PINK;
      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'heap' ? element.className = 'type-button-pink selected': element.className = 'type-button-pink';
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
    const snapShot = document.querySelectorAll('.array-bar');
    const buttonStyle = document.querySelector(`button[class*='sort-button']`);
    
    console.log(snapShot);
    if (!this.state.sortButtonClicked) {
      buttonStyle.textContent = 'Stop';
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        this.mergeSort();
      });      
    } else {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        while (setTimeoutIDs--) {
          window.clearTimeout(setTimeoutIDs);
        }
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
            <SortPanel selectAlgorithm={this.sortPanelClick}></SortPanel>
            <SpeedSlider></SpeedSlider>
            <SortButton runAlgorithm={this.sortButtonClick}></SortButton>
          </section>
        </section>
        <section className="visualiser">
          <SortingVisualiser updateArray={this.updateArray}></SortingVisualiser>
          {/* maybe might move these stickies out */}
          <Stickies></Stickies>
        </section>
      </section>
    );
  }
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
}