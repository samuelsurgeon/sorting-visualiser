import React from 'react';
import './AlgorithmPanel.css';

//just a temporary fix
import getClassName from '../logic/selectTypeButton';

export default class AlgorithmPanel extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleTypeButton = this.handleTypeButton.bind(this);
  }
  
  handleTypeButton(e) {
    this.props.onTypeButtonClick(e.target.name);
  }

  render() {
    getClassName(this.props.selectedAlgorithm);
    const className = '';
    /*
    const className = [
      'type-button',
      this.props.selectedAlgorithm ? this.props.selectedAlgorithm : '',
      document.querySelectorAll(`button[class*='type-button']`).forEach(element => {
        element.getAttribute('name') === this.props.selectedAlgorithm ? 'selected' : '';
      })
    ];
    console.log(className);
      
    const buttons = document.querySelector('button');
    */ 
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
