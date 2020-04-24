import React from 'react';
import AlgorithmButton from './AlgorithmButton';

export default class AlgorithmPanel extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleAlgorithmButton = this.handleAlgorithmButton.bind(this);
  }
  
  handleAlgorithmButton(algorithm) {
    this.props.onAlgorithmButtonClick(algorithm);
  }

  render() {
    return (
      <section className="component-algorithm-panel">
        Sort type
        <section className="buttons-container">
          <AlgorithmButton
            name="insertion"
            selectedAlgorithm={this.props.selectedAlgorithm}
            onAlgorithmButtonClick={this.handleAlgorithmButton} />
          <AlgorithmButton 
            name="bubble"
            selectedAlgorithm={this.props.selectedAlgorithm}
            onAlgorithmButtonClick={this.handleAlgorithmButton} />
          <AlgorithmButton
            name="selection"
            selectedAlgorithm={this.props.selectedAlgorithm}
            onAlgorithmButtonClick={this.handleAlgorithmButton} />
        </section>
      </section>
    );
  }
}
