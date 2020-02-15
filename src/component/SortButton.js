import React from 'react';
import './SortButton.css';

export default class SortButton extends React.Component {
  handleClick = () => {
    this.props.runAlgorithm();
  }

  render() {
    return (
      <section className="component-sort-button">
        <button className="sort-button" onClick={this.handleClick}>Sort</button>
      </section>
    );
  }
}