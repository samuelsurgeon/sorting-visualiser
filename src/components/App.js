import React from 'react';
import Heading from './Heading';
import SortPanel from './SortPanel';
import SpeedSlider from './SpeedSlider';
import SortButton from './SortButton';
import SortingVisualiser from './SortingVisualiser';
import InfoButton from './InfoButton';
import InfoPopUp from './InfoPopUp';
import './App.css';

import { generateArray } from '../logic/generateArray';
import { handleAction } from '../logic/handleAction';

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
    return true;
    // this should be in sorting visualiser component
    /*
    if (this.state.sortButtonClicked) {
      return false;
    } else {
      return true;
    }
    */
  }

  handleClick = buttonName => {
    this.setState(handleAction(this.state.activeAlgorithm, this.state.unsortedArray, this.state.sortedArray, buttonName));
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
