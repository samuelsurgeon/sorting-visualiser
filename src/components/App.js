import React from 'react';
import InfoPopUp from './InfoPopUp';
import Heading from './Heading';
import AlgorithmPanel from './AlgorithmPanel';
import SpeedPanel from './SpeedPanel';
import SortButton from './SortButton';
import InfoButton from './InfoButton';
import SortingVisualiser from './SortingVisualiser';
import './App.css';

import generateArray from '../logic/generateArray';
import { runAnimations, clearAnimations } from '../logic/runAnimations';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      selectedAlgorithm: null,
      animationsSpeed: 250,
      animationsRunning: false,
      infoPopUpHidden: true
    };

    this.generateArray = this.generateArray.bind(this);
    this.handleInfoButton = this.handleInfoButton.bind(this);
    this.handleClosePopUpButton = this.handleClosePopUpButton.bind(this);
    this.handleAlgorithmButton = this.handleAlgorithmButton.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleSortButton = this.handleSortButton.bind(this);
  }

  componentWillMount() {
    this.generateArray();
    window.onload = () => document.body.classList.remove('preload');
  }

  generateArray() {
    this.setState({ array: generateArray() });
  }

  handleInfoButton() {
    this.setState({ infoPopUpHidden: false });
  }

  handleClosePopUpButton() {
    this.setState({ infoPopUpHidden: true });
  }

  handleAlgorithmButton(algorithm) {
    this.setState({ selectedAlgorithm: algorithm });
  }

  handleRangeChange(rangeValue) {
    this.setState({ animationsSpeed: rangeValue });
  }

  handleSortButton() {
    if (!this.state.animationsRunning && this.state.selectedAlgorithm !== null) {
      this.setState({ animationsRunning: !this.state.animationsRunning }, () => {
        runAnimations(this.state.selectedAlgorithm, this.state.array, this.state.animationsSpeed);
      });
    }
    if (this.state.animationsRunning) {
      this.setState({ animationsRunning: !this.state.animationsRunning }, () => {
        clearAnimations(this.state.array.length, this.state.animationsSpeed);
        this.setState({ array: generateArray() });
      });
    }
  }

  render() {
    const classNameSidebar = ['sidebar', this.state.infoPopUpHidden ? '' : 'blur'];
    const classNameVisualiser = ['visualiser', this.state.infoPopUpHidden ? '' : 'blur'];

    return (
      <section className="component-app">
        <InfoPopUp
          infoPopUpHidden={this.state.infoPopUpHidden} 
          selectedAlgorithm={this.state.selectedAlgorithm}
          onClosePopUpButtonClick={this.handleClosePopUpButton} />
        <section className={classNameSidebar.join(' ').trim()}>
          <Heading />
          <section className="sidebar-bottom">
            <AlgorithmPanel 
              selectedAlgorithm={this.state.selectedAlgorithm}
              animationsRunning={this.state.animationsRunning}
              onAlgorithmButtonClick={this.handleAlgorithmButton} />
            <SpeedPanel
              animationsSpeed={this.state.animationsSpeed}
              selectedAlgorithm={this.state.selectedAlgorithm}
              animationsRunning={this.state.animationsRunning}
              onRangeChange={this.handleRangeChange} />
            <SortButton
              selectedAlgorithm={this.state.selectedAlgorithm}
              animationsRunning={this.state.animationsRunning}
              onSortButtonClick={this.handleSortButton} />
          </section>
        </section>
        <section className={classNameVisualiser.join(' ').trim()}>
          <InfoButton 
            infoPopUpHidden={this.state.infoPopUpHidden}
            animationsRunning={this.state.animationsRunning}
            onInfoButtonClick={this.handleInfoButton} />
          <SortingVisualiser 
            array={this.state.array} />
        </section>
      </section>
    );
  }
}
