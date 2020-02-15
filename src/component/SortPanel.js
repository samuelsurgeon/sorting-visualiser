import React from 'react';
import './SortPanel.css';

const DEFAULT_CLASS_NAME = 'type-button-yellow';
const SELECTED_CLASS_NAME = 'type-button selected';

export default class SortPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedButton: null };
  }

  // TO-DO: In all these function calls, we're just doing the exact same thing. The code isn't DRY at al... Figure out a way to fix this.

  mergeClick = buttonName => {
    this.setState({ selectedButton: buttonName.target.name });
    this.props.selectAlgorithm(buttonName.target.name);
    //this.setState({ selectedButton: buttonName.target.name });
  }

  insertionClick = buttonName => {
    this.setState({ selectedButton: buttonName.target.name });
    
    // change this to dataSet a bit later ?
    this.props.selectAlgorithm(buttonName.target.name);
  }

  bubbleClick = buttonName => {
    this.setState({ selectedButton: buttonName.target.name });
    this.props.selectAlgorithm(buttonName.target.name);
  }

  heapClick = buttonName => {
    this.setState({ selectedButton: buttonName.target.name });
    this.props.selectAlgorithm(buttonName.target.name);
  }

  render() {
    return (
      <section className="component-sort-panel">
        Sort type
        <section className="buttons-container">
          <button 
            name="merge"
            className={this.state.selectedButton === 'merge' ? SELECTED_CLASS_NAME : DEFAULT_CLASS_NAME }
            data-background-colour="blue"
            onClick={this.mergeClick}>
            Merge
          </button>
          <button
            name="insertion"
            className={this.state.selectedButton === 'insertion' ? SELECTED_CLASS_NAME + this.state.selectedButton : DEFAULT_CLASS_NAME }
            onClick={this.insertionClick}>
            Insertion
          </button>
          <button
            name="bubble"
            className={this.state.selectedButton === 'bubble' ? SELECTED_CLASS_NAME : DEFAULT_CLASS_NAME }
            onClick={this.bubbleClick}>
            Bubble
          </button>
          <button
            name="heap"
            className={this.state.selectedButton === 'heap' ? SELECTED_CLASS_NAME : DEFAULT_CLASS_NAME }
            onClick={this.heapClick}>
            Heap
          </button>
        </section>
      </section>
    );
  }
}