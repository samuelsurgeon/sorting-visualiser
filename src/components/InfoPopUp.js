import React from 'react';
import './InfoPopUp.css';

export default class InfoPopUp extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.infoButtonClick();
  }

  render() {
    return (
      <section className="component-info-pop-up">
        <p className="info-heading">What is a sorting algorithm?</p>
        <p>{ 'Simply a list of instructions that arranges a set of values in a given order. On this site I\'ve implemented three simple sorting methods that were invented before programming existed.' }</p><br></br>
        <p className="info-heading">What is Insertion sort?</p>
        <p>{ 'Starting with the second element, compare all values its left, if value is smaller than the element, swap. It is typically used by people looking to sort their hand in a game of bridge. The algorithm considers each element one at a time, inserting each in its proper place among those already considered sorted.'}</p>
        <section className="button-container">
          <button
            className="close-button"
            onClick={this.handleClick}
            alt="Close Pop-up Button">
            ✕
          </button>
        </section>
      </section>
    );
  }
}
