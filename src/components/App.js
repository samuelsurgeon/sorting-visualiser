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

    this.handleInfoButton = this.handleInfoButton.bind(this);
    this.handleClosePopUpButton = this.handleClosePopUpButton.bind(this);
    this.handleTypeButton = this.handleTypeButton.bind(this);
  }

  handleInfoButton() {
    this.setState({ infoPopUpHidden: false });
  }

  handleClosePopUpButton() {
    this.setState({ infoPopUpHidden: true });
  }

  handleTypeButton(algorithm) {
    this.setState({ selectedAlgorithm: algorithm });
  }

  render() {
    return (
      <section className="component-app">
        <InfoPopUp
          infoPopUpHidden={this.state.infoPopUpHidden} 
          onClosePopUpButtonClick={this.handleClosePopUpButton} />
        <section className="sidebar">
          <Heading />
          <section className="sidebar-bottom">
            <AlgorithmPanel 
              selectedAlgorithm={this.state.selectedAlgorithm} 
              onTypeButtonClick={this.handleTypeButton} />
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
            infoPopUpHidden={this.state.infoPopUpHidden} 
            onInfoButtonClick={this.handleInfoButton} />
          <SortingVisualiser 
            unsortedArray={this.props.unsortedArray} />
        </section>
      </section>
    );
  }
}
