import React from 'react';
import './InfoButton.css';

export default class InfoButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = clickedButton => {
    this.props.clickHandler(clickedButton.target.name);
  }

  render() {
    return (
      <section className="component-info-button">
        <section className="button-container">
          <button
            name="infoButton"
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
