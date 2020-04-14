import React from 'react';
import Heading from './Heading';
import SortPanel from './SortPanel';
import SpeedSlider from './SpeedSlider';
import SortButton from './SortButton';
import SortingVisualiser from './SortingVisualiser';
import InfoButton from './InfoButton';
import InfoPopUp from './InfoPopUp';
import './App.css';

// check if I need to import any of these? 
import { generateArray } from '../operators/generateArray';
import { changeElementColours } from '../operators/changeColours';
import { openInfoPopUp } from '../operators/openInfoPopUp';
import { closeInfoPopUp } from '../operators/closeInfoPopUp';
import { selectSortType } from '../operators/selectSortType';
import { setTimeoutsForAnimations } from '../operators/animationHelperFunctions';

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
    if (buttonName === 'sortButton') {
      setTimeoutsForAnimations();
    }
    if (buttonName === 'insertion' || buttonName === 'bubble' || buttonName === 'selection') {
      this.setState({ activeAlgorithm: buttonName });
      selectSortType(buttonName);
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
            unsortedArray={this.state.unsortedArray}></SortingVisualiser>
        </section>
      </section>
    );
  }
}
