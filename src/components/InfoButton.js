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
    // figure out if this is a better way to deal with this problem. It might be too verbose for me.
    const className = [
      "info-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

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
