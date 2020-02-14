import React from 'react';
import './SortPanel.css';

export default class SortPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { className: null };
  }

  handleClick = buttonName => {
    // const currentState = this.state.className;
    this.setState({ className: 'type-button selected'});
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
            className={this.state.className ? this.state.className : 'type-button'}
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