import React from 'react';
import './SortButton.css';

export default class SortButton extends React.Component {
  render() {
    return (
      <section className="component-sort-button">
        <button 
          name="sortButton"
          className="sort-button">
          Sort
        </button>
      </section>
    );
  }
}
