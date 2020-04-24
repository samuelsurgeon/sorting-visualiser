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
      this.props.selectedAlgorithm,
      this.props.selectedAlgorithm === this.props.name ? 'selected' : '',
    ]


    return (
      <button
        className={className.join(' ').trim()}
        onClick={this.handleAlgorithmButton}>
        {this.props.name}
      </button>
    );
  }
}
