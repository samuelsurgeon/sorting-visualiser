import React from 'react';
import './AlgorithmButton.css';

export default class AlgorithmButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleAlgorithmButton = this.handleAlgorithmButton.bind(this);
  }

  handleAlgorithmButton() {
    this.props.onAlgorithmButtonClick(this.props.name);
  }

  render() {
    const className = [
      'type-button',

    ]

    return (
      <button
        className={className}
        onClick={this.handleAlgorithmButton}>
        {this.props.name}
      </button>
    );
  }
}
