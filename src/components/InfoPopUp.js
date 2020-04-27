import React from 'react';
import './InfoPopUp.css';

export default class InfoPopUp extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClosePopUpButton = this.handleClosePopUpButton.bind(this);
  }

  handleClosePopUpButton() {
    this.props.onClosePopUpButtonClick();
  }

  render() {
    const className = [
      'component-info-pop-up',
      this.props.infoPopUpHidden ? 'hidden' : '',
      this.props.selectedAlgorithm,
    ]

    return (
      <section className={className.join(' ').trim()}>
        <p className="info-heading-top">What is a sorting algorithm?</p>
        <p>A list of instructions that arranges a set of values in a given order. On this site I{'\''}ve implemented three simple algorithms that sort in ascending order.</p>
        <p className="info-heading">What is the performance of these algorithms?</p>
        <p>Using Big-O notation each of these algorithms have an average time-complexity of O(n<sup>2</sup>).</p>
        <p className="info-heading">Who are you?</p>
        <p>My name is Samuel Surgeon and I{'\''}m a developer from Sydney. Say hi to me <a href="http://samuelsurgeon.com/" target="_blank">here</a>!</p>
        <button
          name="closePopUpButton"
          className="close-pop-up-button"
          onClick={this.handleClosePopUpButton}
          alt="Close Pop-up Button">
          ✕
        </button>
      </section>
    );
  }
}
