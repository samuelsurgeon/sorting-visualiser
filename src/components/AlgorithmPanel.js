import React from 'react';
import './AlgorithmPanel.css';

export default class AlgorithmPanel extends React.Component {
  render() {
    const selectedAlgorithm = this.props.selectedAlgorithm;

    return (
      <section className="component-algorithm-panel">
        Sort type
        <section className="buttons-container">
          <button
            name="insertion"
            className="type-button">
            Insertion
          </button>
          <button
            name="bubble"
            className="type-button">
            Bubble
          </button>
          <button
            name="selection"
            className="type-button">
            Selection
          </button>
        </section>
      </section>
    );
  }
}
