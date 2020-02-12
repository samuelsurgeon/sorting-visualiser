import SortTypeButton from './SortTypeButton';
import PropTypes from 'prop-types';
import React from 'react';
import './SortTypePanel.css';

export default class SortTypePanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func
  }

  handleClick = buttonName => {
    console.log(buttonName);
    this.props.clickHandler(buttonName);
  }

  // See below: We're calling the clickHandler, which will be in the parent ting. Make sure you put the corresponding code in the parent ting.

  render() {
    return (
      <section className="sort-type">
        Sort type
        <section className="buttons-container">
          <button name="Merge" clickHandler={this.handleClick}></button>
          <button name="Insertion"></button>
          <button name="Bubble"></button>
          <button name="Heap"></button>
        </section>
      </section>
    );
  }
}