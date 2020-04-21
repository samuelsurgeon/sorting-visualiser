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
      // get rid of sortedArray, just use an array slot and update it
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
    let boy = handleAction(this.state, buttonName);
    this.setState({ boy });
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
