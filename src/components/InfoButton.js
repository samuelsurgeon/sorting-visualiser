import React from 'react';
import './InfoButton.css';

export default class InfoButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.clickHandler('info-button');
  }

  render() {
    return (
      <section className="component-info-button">
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
