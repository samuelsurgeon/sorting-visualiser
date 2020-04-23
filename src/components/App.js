import React from 'react';
import InfoPopUp from './InfoPopUp';
import Heading from './Heading';
import AlgorithmPanel from './AlgorithmPanel';
import SpeedPanel from './SpeedPanel';
import SortButton from './SortButton';
import InfoButton from './InfoButton';
import SortingVisualiser from './SortingVisualiser';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlgorithm: null,
      animationSpeed: 250,
      animationRunning: false,
      infoPopUpHidden: true
    };
  }

  render() {
    return (
      <section className="component-app">
        <InfoPopUp infoPopUpHidden={this.state.infoPopUpHidden} />
        <section className="sidebar">
          <Heading />
          <section className="sidebar-bottom">
            <AlgorithmPanel 
              selectedAlgorithm={this.state.selectedAlgorithm} />
            <SpeedPanel
              animationSpeed={this.state.animationSpeed} />
            <SortButton 
              selectedAlgorithm={this.state.selectedAlgorithm}
              animationSpeed={this.state.animationSpeed}
              animationRunning={this.state.animationRunning} />
          </section>
        </section>
        <section className="visualiser">
          <InfoButton 
            infoPopUpHidden={this.state.infoPopUpHidden} />
          <SortingVisualiser 
            unsortedArray={this.props.unsortedArray} />
        </section>
      </section>
    );
  }
}
