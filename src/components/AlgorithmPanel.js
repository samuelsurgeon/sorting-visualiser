import React from 'react';
import AlgorithmButton from './AlgorithmButton';
import './AlgorithmPanel.css';

//just a temporary fix
import getClassName from '../logic/selectTypeButton';

export default class AlgorithmPanel extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleTypeButton = this.handleTypeButton.bind(this);
  }
  
  handleAlgorithmButton(e) {
    this.props.onTypeButtonClick(e.target.name);
  }

  render() {
    //getClassName(this.props.selectedAlgorithm);
    const className = [
      'type-button',
      this.props.selectedAlgorithm ? this.props.selectedAlgorithm : '',
      document.querySelectorAll(`button[class*='type-button']`).forEach(element => {
        element.getAttribute('name') === this.props.selectedAlgorithm ? 'selected' : '';
      })
    ];
      
    return (
      <section className="component-algorithm-panel">
        Sort type
        <section className="buttons-container">
          <AlgorithmButton name="insertion" onAlgorithmButtonClick={this.handleAlgorithmButton} />
          <AlgorithmButton name="bubble" onAlgorithmButtonClick={this.handleAlgorithmButton} />
          <AlgorithmButton name="selection" onAlgorithmButtonClick={this.handleAlgorithmButton} />
        </section>
      </section>
    );
  }
}
