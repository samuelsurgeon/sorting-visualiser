import React from 'react';
import './AlgorithmPanel.css';

export default class AlgorithmPanel extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleTypeButton = this.handleTypeButton.bind(this);
  }
  
  handleTypeButton(e) {
    this.props.onTypeButtonClick(e.target.name);
  }

  render() {
    const selectedAlgorithm = this.props.selectedAlgorithm;

    return (
      <section className="component-algorithm-panel">
        Sort type
        <section className="buttons-container">
          <button
            name="insertion"
            className="type-button"
            onClick={this.handleTypeButton}>
            Insertion
          </button>
          <button
            name="bubble"
            className="type-button"
            onClick={this.handleTypeButton}>
            Bubble
          </button>
          <button
            name="selection"
            className="type-button"
            onClick={this.handleTypeButton}>
            Selection
          </button>
        </section>
      </section>
    );
  }
}
