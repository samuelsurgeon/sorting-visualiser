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

import {
  generateArray,
  openInfoPopUp,
  closeInfoPopUp,
  setTimeoutsForAnimations,
  selectSortType
} from '../operators/operators'

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

  componentDidMount() {
    this.setState({ unsortedArray: generateArray() });
  }
  
  shouldComponentUpdate() {
    if (this.state.sortButtonClicked) {
      return false;
    } else {
      return true;
    }
  }

  handleClick = buttonName => {
    if (buttonName === 'infoButton') {
      openInfoPopUp();
    }
    if (buttonName === 'closePopUpButton') {
      closeInfoPopUp();
    }
    if (buttonName === 'insertion' || buttonName === 'bubble' || buttonName === 'selection') {
      this.setState({ activeAlgorithm: buttonName });
      if (this.state.activeAlgorithm === 'insertion') this.setState({ sortedArray: getInsertionSortAnimations(this.state.unsortedArray) }, () => console.log(this.state.sortedArray));
      if (this.state.activeAlgorithm === 'bubble') this.setState({ sortedArray: getBubbleSortAnimations(this.state.unsortedArray) });
      if (this.state.activeAlgorithm === 'selection') this.setState({ sortedArray: getSelectionSortAnimations(this.state.unsortedArray) });
      selectSortType(buttonName);
    }
    if (buttonName === 'sortButton') {
      setTimeoutsForAnimations(this.state.sortedArray);
    }
  }

  render() {
    return (
      <section className="component-app">
        <InfoPopUp clickHandler={this.handleClick}></InfoPopUp>
        <section className="sidebar">
          <Heading></Heading>
          <section className="sidebar-bottom">
            <SortPanel clickHandler={this.handleClick}></SortPanel>
            <SpeedSlider></SpeedSlider>
            <SortButton clickHandler={this.handleClick}></SortButton>
          </section>
        </section>
        <section className="visualiser">
          <InfoButton clickHandler={this.handleClick}></InfoButton>
          <SortingVisualiser 
            unsortedArray={this.state.unsortedArray}
            sortedArray={this.state.sortedArray}
          ></SortingVisualiser>
        </section>
      </section>
    );
  }
}
