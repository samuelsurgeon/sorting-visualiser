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
const ANIMATION_SPEED_MS = 3000;

// Colour*
let PRIMARY_COLOR = 'rgba(255, 255, 255, 0.2)';
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
    const animations = getMergeSortAnimations(this.state.currentArray);
    for (let i = 0; i < animations.length; i++) {
      // console.log(animations);
      const arrayBars = document.getElementsByClassName('array-bar');
      // console.log(arrayBars);
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //console.log(barOneStyle);
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const colour = i % 3 === 0 ? SECONDARY_COLOR : barTwoStyle.backgroundColor;
        setTimeout(() => {
          barOneStyle.transition = '0.5s';  
          barTwoStyle.transition = '0.5s';

          barOneStyle.backgroundColor = colour;
          barTwoStyle.backgroundColor = colour;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          // Height changes happen here
          console.log(animations[i]);
          const [barOneIdx, barOneHeight] = animations[i][0];
          let [barTwoIdx, barTwoHeight] = animations[i][1];
          // Need to fix this
          barTwoIdx = barOneIdx + 1;
          const barOneStyle = arrayBars[barOneIdx].style;
          if (arrayBars[barTwoIdx].style !== undefined) {
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barTwoStyle.transition = '2.5s';
            barTwoStyle.height = `${barTwoHeight}px`;
            barTwoStyle.backgroundColor = `rgba(187, 174, 0, ${barOneHeight / 800 })`;
          } else {
            alert('HEYA');
          }          
          barOneStyle.transition = '2.5s';
          barOneStyle.height = `${barOneHeight}px`;
          barOneStyle.backgroundColor = `rgba(187, 174, 0, ${barOneHeight / 800 })`;
          
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