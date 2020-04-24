import React from 'react';
import AlgorithmButton from './AlgorithmButton';
import './AlgorithmPanel.css';

//just a temporary fix
import getClassName from '../logic/selectTypeButton';

export default class AlgorithmPanel extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleAlgorithmButton = this.handleAlgorithmButton.bind(this);
  }
  
  handleAlgorithmButton(algorithm) {
    this.props.onAlgorithmButtonClick(algorithm);
  }

  render() {
    console.log(this.props.selectedAlgorithm);
    return (
      <section className="component-algorithm-panel">
        Sort type
        <section className="buttons-container">
          <AlgorithmButton
            name="Insertion"
            selectedAlgorithm={this.props.selectedAlgorithm}
            onAlgorithmButtonClick={this.handleAlgorithmButton} />
          <AlgorithmButton 
            name="Bubble"
            selectedAlgorithm={this.props.selectedAlgorithm}
            onAlgorithmButtonClick={this.handleAlgorithmButton} />
          <AlgorithmButton
            name="Selection"
            selectedAlgorithm={this.prop.selectedAlgorithm}
            onAlgorithmButtonClick={this.handleAlgorithmButton} />
        </section>
      </section>
    );
  }
}
