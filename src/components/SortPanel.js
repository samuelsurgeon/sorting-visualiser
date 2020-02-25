import React from 'react';
import './SortPanel.css';

export default class SortPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedButton: null };
  }

  handleClick = buttonName => {
    //this.setState({ selectedButton: buttonName.target.name });
    this.props.selectAlgorithm(buttonName.target.name);
  }

  render() {
    return (
      <section className="component-sort-panel">
        Sort type
        <section className="buttons-container">
          <button
            name="insertion"
            className="type-button"
            onClick={this.handleClick}>
            Insertion
          </button>
          <button
            name="bubble"
            className="type-button"
            onClick={this.handleClick}>
            Bubble
          </button>
          <button
            name="selection"
            className="type-button"
            onClick={this.handleClick}>
            Selection
          </button>
        </section>
      </section>
    );
  }
}
