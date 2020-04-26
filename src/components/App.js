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
import { runAnimations, clearAnimations } from '../logic/runSortAnimations';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: generateArray(),
      selectedAlgorithm: null,
      animationSpeed: 250,
      animationRunning: true,
      infoPopUpHidden: true
    };

    this.handleInfoButton = this.handleInfoButton.bind(this);
    this.handleClosePopUpButton = this.handleClosePopUpButton.bind(this);
    this.handleAlgorithmButton = this.handleAlgorithmButton.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleSortButton = this.handleSortButton.bind(this);
  }

  componentDidMount() {
    window.onload = () => document.body.classList.remove('preload');
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
    this.setState({ animationSpeed: rangeValue });
  }

  handleSortButton() {
    this.setState({ animationRunning: !this.state.animationRunning }, () => {
      animationHandler(
        this.state.animationRunning,
        this.state.selectedAlgorithm,
        this.state.array,
        this.state.animationSpeed
      );
    });
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
              onAlgorithmButtonClick={this.handleAlgorithmButton} />
            <SpeedPanel
              animationSpeed={this.state.animationSpeed}
              selectedAlgorithm={this.state.selectedAlgorithm}
              onRangeChange={this.handleRangeChange} />
            <SortButton
              selectedAlgorithm={this.state.selectedAlgorithm}
              animationRunning={this.state.animationRunning}
              onSortButtonClick={this.handleSortButton} />
          </section>
        </section>
        <section className={classNameVisualiser.join(' ').trim()}>
          <InfoButton 
            infoPopUpHidden={this.state.infoPopUpHidden} 
            onInfoButtonClick={this.handleInfoButton} />
          <SortingVisualiser 
            array={this.state.array} />
        </section>
      </section>
    );
  }
}
