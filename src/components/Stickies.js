import React from 'react';
import './Stickies.css';

export default class Stickies extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.infoButtonClick();
  }

  render() {
    return (
      <section className="component-stickies">
        <section className="button-container">
          <button
            className="info-button"
            onClick={this.handleClick}
            alt="Information Button">
            ?
          </button>
        </section>
      </section>
    );
  }
}
