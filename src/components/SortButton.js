import React from 'react';
import './SortButton.css';

export default class SortButton extends React.Component {
  render() {
    const selectedAlgorithm = this.props.selectedAlgorithm;
    const animationSpeed = this.props.animationSpeed;
    const animationRunning = this.props.animationRunning;

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
