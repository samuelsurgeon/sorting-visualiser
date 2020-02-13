import React from 'react';
import './SortPanel.css';

export default class SortPanel extends React.Component {
  constructor(props) {
    super(props);

    // Don't know if I actually need this!
    this.state = { buttonName: null }
  }

  handleClick = buttonName => {
    this.props.currentAlgorithm(buttonName.target.name);
    // console.log(buttonName);
    // this.setState({ buttonName: buttonName });
    // this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <section className="component-sort-panel">
        Sort type
        <section className="buttons-container">
          <button 
            name="Merge"
            className="type-button"
            onClick={this.handleClick}>
            Merge
          </button>
          <button
            name="Insertion"
            className="type-button"
            onClick={this.handleClick}>
            Insertion
          </button>
          <button
            name="Bubble"
            className="type-button"
            onClick={this.handleClick}>
            Bubble
          </button>
          <button
            name="Heap"
            className="type-button"
            onClick={this.handleClick}>
            Heap
          </button>
        </section>
      </section>
    );
  }
}