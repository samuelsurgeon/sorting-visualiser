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
    currentArray: null
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
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
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
    // Remember when using the DOM to add the .style prop to the end of the initial document. call. Saves you having to call it like a million times later
    const htmlStyle = document.documentElement.style;
    const sliderStyler = document.querySelector('.slider::-webkit-slider-thumb').style;
    htmlStyle.transition = '2s';


    if (buttonName === 'merge') {
      htmlStyle.backgroundColor = ORANGE;
      sliderStyler.className += 'orange';
      this.mergeSort();
    }
    if (buttonName === 'insertion') {
      htmlStyle.backgroundColor = GREEN;
    }
    if (buttonName === 'bubble') {
      htmlStyle.backgroundColor = TURQUOISE;
    }
    if (buttonName === 'heap') {
      htmlStyle.backgroundColor = PINK;
    }
    // this.setState({ activeAlgorithm: mergeSort(buttonName, this.state.currentArray) });

    // I THINK THIS SORT METHOD IS THE PROBLEM LOL :-)
    // const javascriptSortedArray = this.state.currentArray.slice().sort((a, b) => a - b);
    // const sortedArray = SortingAlgorithm.mergeSort(this.state.currentArray);
    // console.log(arraysAreEqual(javascriptSortedArray, sortedArray));
  };

  render() {
    return (
      <section className="component-app">
        <section className="sidebar">
          <Heading></Heading>
          <section className="sidebar-bottom">
            <SortPanel selectAlgorithm={this.sortPanelClick}></SortPanel>
            <SpeedSlider></SpeedSlider>
            <SortButton></SortButton>
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