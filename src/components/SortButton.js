import React from 'react';
import './SortButton.css';

export default class SortButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleSortButton = this.handleSortButton.bind(this);
  }

  handleSortButton() {
    this.props.onSortButtonClick();
  }

  render() {
    const className = ['sort-button', this.props.selectedAlgorithm];
    const sortButtonText = this.props.animationRunning ? 'Reset' : 'Sort';

    return (
      <section className="component-sort-button">
        <button 
          name="sortButton"
          className={className.join(' ').trim()}
          onClick={this.handleSortButton}>
          {sortButtonText}
        </button>
      </section>
    );
  }
}
