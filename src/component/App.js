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

// Change this value for the speed of the animations (THIS IS CLEMENT'S CODE CHANGE THIS!)
const ANIMATION_SPEED_MS = 10;

// Colour*
const PRIMARY_COLOR = 'white';
const SECONDARY_COLOR = 'black';

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
          // barOneStyle.backgroundColor = color;
          // barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          // This is where the height of the bar is changed. This is probably where I should implement my swap animation? At least to start with.
          // barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  // Name this function something else, to make sure that the flow of logic is good :) I think I only use the handleClick method to change the algorithm type, so maybe I should rename it to something like setAlgorithm or somethign liek that
  handleClick = buttonName => {
    this.mergeSort();
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
            <SortPanel currentAlgorithm={this.handleClick}></SortPanel>
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