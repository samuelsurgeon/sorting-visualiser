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
    this.sortingVisualiserElement = React.createRef();
  }

  state = {
    activeAlgorithm: null,
    unsortedArray: null,
    sortButtonClicked: false,
  };

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
    return unsortedArray;
  }

  runSortAnimations(sortAnimations) {
    const speedSlider = document.querySelector(`input[class*='slider']`);
    const animationSpeed = speedSlider.value;
    const transitionSpeed = speedSlider.value / 1000;
    const animations = sortAnimations;
    let shouldColourSwap = true;

    for (let i = 0; i < animations.length; i += 1) {
      const arrayBars = document.querySelectorAll('.array-bar');
      const barHeights = document.querySelectorAll('.bar-height');
      const animateHighlight = typeof animations[i][0] === 'object' ? false : true;
      
      if (animateHighlight) {
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
    const green = 'green';
    const turquoise = 'turquoise';
    const pink = 'pink';

    const sliderStyle = document.querySelector(`input[class*='slider']`);
    const sortButtonStyle = document.querySelector(`button[class*='sort-button']`);
    /* Get rid of the style on the end, just want to edit the classNames :) */

    this.setState({ activeAlgorithm: buttonName });

    if (buttonName === 'insertion') {
      recolourBody(green);
      recolourInfoPopUp(green);
      recolourSlider(green);
      recolourSortButton(green);
      /*
      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'insertion' ? element.className = 'type-button-green selected': element.className = 'type-button-green';
      });
      */
    }
    if (buttonName === 'bubble') {
      /*
      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'bubble' ? element.className = 'type-button-turquoise selected': element.className = 'type-button-turquoise';
      });
      // These values shouldn't be hard coded!!!
      sliderStyle.className = 'slider-turquoise';
      sortButtonStyle.className = 'sort-button-turquoise';
      */
    }
    if (buttonName === 'selection') {
      /*
      typeButtonStyles.forEach(element => {
        element.getAttribute('name') === 'selection' ? element.className = 'type-button-pink selected': element.className = 'type-button-pink';
      });
      sliderStyle.className = 'slider-pink';
      sortButtonStyle.className = 'sort-button-pink'; }
      See how this whole sort panel click thing, does like 10 different things, split them up into single functions and call them from here */
    }
  };

  sortButtonClick = () => {
    const buttonStyle = document.querySelector(`button[class*='sort-button']`);
    if (this.state.sortButtonClicked === false && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        const sortButtons = document.querySelectorAll(`button[class*='type-button']`);
        sortButtons.forEach(element => element.disabled = true);       

        buttonStyle.textContent = 'Stop';

        // Replace the string literal with a const; this line is long as shit shorten it lad
        if (this.state.activeAlgorithm === 'insertion') this.runSortAnimations(getInsertionSortAnimations(this.state.unsortedArray));
        if (this.state.activeAlgorithm === 'bubble') this.runSortAnimations(getBubbleSortAnimations(this.state.unsortedArray));
        if (this.state.activeAlgorithm === 'selection') this.runSortAnimations(getSelectionSortAnimations(this.state.unsortedArray));
      });      
    }
    if (this.state.sortButtonClicked === true && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        let timeoutIDs = 99999;
        while (timeoutIDs--) {
          window.clearTimeout(timeoutIDs);
        }
      });
      const sortButtons = document.querySelectorAll(`button[class*='type-button']`);
      sortButtons.forEach(element => element.disabled = false); buttonStyle.textContent = 'Sort';
      //this might be a bit convoluted, figure out better logic
      this.sortingVisualiserElement.current.resetArray(this.updateArray());
    }
  }

  infoButtonClick = () => {
    const infoPopUp = document.querySelector('.component-info-pop-up');
    infoPopUp.classList.remove('hidden');

    const blurSidebar = document.querySelector('.sidebar');
    blurSidebar.classList.add('blur');

    const blurVisualiser = document.querySelector('.visualiser');
    blurVisualiser.classList.add('blur');
  }

  closePopUpClick = () => {
    const infoPopUp = document.querySelector('.component-info-pop-up');
    infoPopUp.classList.add('hidden');

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

function recolourBody(colour) {
  document.body.className = colour;
}

function recolourInfoPopUp(colour) {
  const fullClassName = document.querySelector(`section[class*='component-info-pop-up']`).className;
  
  console.log(className);
}

function recolourSlider(colour) {

}

function recolourSortButton(colour) {

}

function selectTypeButton(colour) {
  const typeButton = document.querySelectorAll(`button[class*='type-button']`);
  typeButton.forEach(element => {
    element.getAttribute('name') === 'insertion' ? element.className = 'type-button-green selected': element.className = 'type-button-green';
  });
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
