import React from 'react';
import './SortButton.css';

export default class SortButton extends React.Component {
  handleClick = clickedButton => {
    this.props.clickHandler(clickedButton.target.name);
  }

  render() {
    return (
      <section className="component-sort-button">
        <button 
          name="sortButton"
          className="sort-button"
          onClick={this.handleClick}>
          Sort
        </button>
      </section>
    );
  }
}
