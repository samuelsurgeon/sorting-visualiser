import React from 'react';
import './AlgorithmButton.css';

export default class AlgorithmButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleAlgorithmButton = this.handleAlgorithmButton.bind(this);
  }

  handleAlgorithmButton() {
    console.log('hi');
  }

  render() {
    const className = [
      'type-button',
    ]

    return ( 'hi');
    
    /*
    return (
      <button
        className={className}
        onClick={this.handleAlgorithmButton}>
        hi
      </button>
    );
    */
  }
}
