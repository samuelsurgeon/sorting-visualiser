import React from 'react';
import './InfoPopUp.css';

export default class InfoPopUp extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.closePopUpClick();
  }

  render() {
    return (
      <section className="component-info-pop-up hidden">
        <p className="info-heading-top">What is a sorting algorithm?</p>
        <p>A list of instructions that arranges a set of values in a given order. On this site I{'\''}ve implemented three simple algorithms that sort in ascending order.</p>
        <p className="info-heading">What is the performance of these algorithms?</p>
        <p>Using Big-O notation each of these algorithms have an average time-complexity of O(n<sup>2</sup>).</p>
        <p className="info-heading">Who are you?</p>
        <p>My name is Samuel Surgeon. I{'\''}m a developer from Sydney. Say hi to me <a href="http://samuelsurgeon.com/" target="_blank">here</a>.</p>
        <button
          className="close-button"
          onClick={this.handleClick}
          alt="Close Pop-up Button">
          ✕
        </button>
      </section>
    );
  }
}
