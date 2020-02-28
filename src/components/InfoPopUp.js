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
        <p>{ 'A sorting algorithm is a list of instructions that arranges a set of values in a given order. I\'ve implemented three simple sorting alogrithms on this site, all of them arrange a randomly generated set of numbers from 100 to 600 in ascending order.' }</p><br></br>
        <p className="info-heading">What is Insertion sort?</p>
        <p>{ ''}</p>
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
