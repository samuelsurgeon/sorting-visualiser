import React from 'react';
import './InfoButton.css';

export default class InfoButton extends React.Component {
  render() {
    return (
      <section className="component-info-button">
        <section className="button-container">
          <button
            name="infoButton"
            className="info-button"
            alt="Information Button">
            ?
          </button>
        </section>
      </section>
    );
  }
}
