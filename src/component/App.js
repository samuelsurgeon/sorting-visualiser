import React from 'react';
import PropTypes from 'prop-types';
import getAlgorithm from '../algorithm/algorithm';
import Heading from './Heading';
import SortTypePanel from './SortTypePanel';
import SortTypeButton from './SortTypeButton';
import SpeedSlider from './SpeedSlider';
import SortButton from './SortButton';
import SortingVisualiser from './SortingVisualiser';
import Stickies from './Stickies';
import './App.css';

export default class App extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func
  }

  state = {
    currentAlgorithm: null
  };

  handleClick = buttonName => {
    this.setState(getAlgorithm(this.state, buttonName));
  };

  render() {
    return (
      <div className="App">
        <section className="sidebar">
          <Heading></Heading>
          <section className="sidebar-bottom">
            <SortTypePanel clickHandler={this.handleClick}></SortTypePanel>
            <SpeedSlider></SpeedSlider>
            <SortButton></SortButton>
          </section>
        </section>
        <section className="visualiser">
          <SortingVisualiser></SortingVisualiser>
          {/* maybe might move these stickies out */}
          <Stickies></Stickies>
        </section>
      </div>
    );
  }
}
